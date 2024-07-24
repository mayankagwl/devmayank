const pageUrl = window.location.href;
const siteUrl = "https://account.devmayank.com"

function getParamByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(pageUrl);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const ssoLoginUtil = {
    refferer: document.referrer || "*",
    action: getParamByName("action"),
    accessToken: getParamByName("access_token"),
    signInUrl: getParamByName("signin"),
    signBtn: document.getElementById("sign-in"),
    loading: document.getElementById("loading"),
    postToparent: (key, message) => {
        let postData = JSON.parse(JSON.stringify({
            action: ssoLoginUtil.action,
            [key]: message
        }))
        parent.postMessage(postData, ssoLoginUtil.refferer)
    },
    getStorageAccessPermission: async () => {
        let permission
        try {
            permission = await navigator.permissions.query({ name: 'storage-access' });
        } catch (error) {
            permission = {
                state: "not_supported"
            }
        }
        return permission;
    },
    getRequestStrorageAccess: async () => {
        try {
            await document.requestStorageAccess();
            return true;
        } catch (error) {
            return false;
        }
    },
    getLoginSession: async () => {
        try {
            let resp = await fetch(siteUrl + '/ssologin/login', {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { token: null, isauthenticated: false };
        }
    },
    setLoginSession: async () => {
        if (!ssoLoginUtil.accessToken) {
            return { ok: false, istokenvalid: false };
        }
        try {
            let resp = await fetch(siteUrl + '/ssologin/settoken?token=' + ssoLoginUtil.accessToken, {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { ok: true, istokenvalid: false };
        }
    },
    deleteLoginSession: async () => {
        try {
            let resp = await fetch(siteUrl + '/ssologin/logout', {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { ok: false };
        }
    },
    isLoginSessionValid: async () => {
        let loginSession = await ssoLoginUtil.getLoginSession()
        if (loginSession.token && loginSession.isauthenticated) {
            return loginSession
        }
        return false
    },
    signInBtnClickEventListener: async (ev) => {
        ev.preventDefault();
        let storageAccess = await ssoLoginUtil.getRequestStrorageAccess()
        if (storageAccess) {
            let loginSession = await ssoLoginUtil.isLoginSessionValid()
            if (loginSession) {
                ssoLoginUtil.hideSignInBtn();
                ssoLoginUtil.postToparent("login", loginSession);
                return;
            }
        }
        let signInUrl = ssoLoginUtil.signInUrl;
        if (storageAccess || !document.requestStorageAccess) {
            signInUrl += (signInUrl.indexOf("?")) === -1 ? "?prompt=none" : "&prompt=none"
        }
        // let permission = await ssoLoginUtil.getStorageAccessPermission();
        // if (permission.state === "granted" || permission.state === "not_supported") {
        //     signInUrl += (signInUrl.indexOf("?")) === -1 ? "?prompt=none" : "&prompt=none"
        // }
        window.top.location.href = signInUrl;
        return;
    },
    hasStorageAccess: async () => {
        let prompt = "granted";
        if (!document.requestStorageAccess) {
            return true, prompt;
        }
        if (await document.hasStorageAccess()) {
            return true, prompt;
        }
        let permission = await ssoLoginUtil.getStorageAccessPermission();
        prompt = permission.state
        if (prompt === "not_supported") {
            return true, prompt
        } else if (prompt === "granted") {
            return await ssoLoginUtil.getRequestStrorageAccess(), prompt;
        } else if (prompt === "prompt") {
            return false, prompt
        }
        return false, prompt
    },
    showLoading: () => {
        ssoLoginUtil.loading.style.display = "block";
    },
    hideLoading: () => {
        ssoLoginUtil.loading.style.display = "none";
    },
    showSignInBtn: () => {
        ssoLoginUtil.loading.style.display = "none";
        ssoLoginUtil.signBtn.style.display = "block";
    },
    hideSignInBtn: () => {
        ssoLoginUtil.loading.style.display = "block";
        ssoLoginUtil.signBtn.style.display = "none";
    },
    initilizeFrame: async (refferer) => {
        ssoLoginUtil.signBtn.addEventListener("click", ssoLoginUtil.signInBtnClickEventListener)
        let hasAccess, state;
        ssoLoginUtil.showLoading()
        hasAccess, state = await ssoLoginUtil.hasStorageAccess();
        if (!hasAccess && state === "prompt" && ssoLoginUtil.action == "login") {
            ssoLoginUtil.showSignInBtn()
            ssoLoginUtil.postToparent("prompt", { state });
            return
        } else if (ssoLoginUtil.action == "login") {
            let loginSession = await ssoLoginUtil.isLoginSessionValid();
            console.log("loginSession", JSON.stringify(loginSession))
            if (loginSession) {
                ssoLoginUtil.hideLoading()
                ssoLoginUtil.postToparent("login", loginSession);
                return;
            }
            ssoLoginUtil.showSignInBtn()
        } else if (ssoLoginUtil.action == "logout") {
            let logoutSession = await ssoLoginUtil.deleteLoginSession()
            ssoLoginUtil.hideLoading()
            ssoLoginUtil.postToparent("logout", logoutSession);
            return;
        } else if (ssoLoginUtil.action == "settoken") {
            let settokenSession = await ssoLoginUtil.setLoginSession(ssoLoginUtil.accessToken)
            ssoLoginUtil.hideLoading()
            ssoLoginUtil.postToparent("settoken", settokenSession);
            return;
        }
        ssoLoginUtil.postToparent("status", { state, hasAccess });
    },

    initilizeParent: () => {
        window.addEventListener('message', function (ev) {
            this.dispatchEvent(new CustomEvent("ssologin", {
                detail: ev.data
            }))
        });
    }
}
window.ssoLoginUtil = ssoLoginUtil;

