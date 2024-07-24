const pageUrl = window.location.href;
const siteUrl = "https://dev-sso.devhub.lrinternal.com"

function getParamByName(name){
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(pageUrl);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const ssoLoginUtil = {
    parent: document.referrer,
    action : getParamByName("action"),
    accessToken :getParamByName("access_token"),
    signInUrl : getParamByName("signin"),
    signBtn : document.getElementById("sign-in"),
    loading : document.getElementById("loading"),
    postToparent: (key, message) => {
        parent.postMessage(Object.assign({ action:ssoLoginUtil.action },{[key]:message}), ssoLoginUtil.parent);
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
    getLoginSession: async() => {
        try {
            let resp = await fetch(siteUrl+'/ssologin/login', {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { token: null, isauthenticated: false };
        }
    },
    setLoginSession: async() => {
        if(!ssoLoginUtil.accessToken){
            return { ok: false, istokenvalid: false };
        }
        try {
            let resp = await fetch(siteUrl+'/ssologin/settoken?token='+ssoLoginUtil.accessToken, {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { ok: true, istokenvalid: false };
        }
    },
    deleteLoginSession: async() => {
        try {
            let resp = await fetch(siteUrl+'/ssologin/logout', {
                method: 'GET',
                credentials: 'include'
            });
            return await resp.json()
        } catch (error) {
            return { ok: false };
        }
    },
    isLoginSessionValid : ()  => {
        let loginSession = ssoLoginUtil.getLoginSession()
        if (loginSession.token && loginSession.isauthenticated){
            return loginSession
        }
        return false
    },
    signInBtnClickEventListener: async (ev) => {
        ev.preventDefault();
        let storageAccess = await getRequestStorageAccess()
        if(storageAccess) {
            let loginSession = ssoLoginUtil.isLoginSessionValid()
            if (loginSession) {
                ssoLoginUtil.postToparent("login",loginSession);
                return;
            }
        }
        let permission = await ssoLoginUtil.getStorageAccessPermission(); 
        let signInUrl = ssoLoginUtil.signInUrl;
        if (permission === "granted" || permission === "not_supported"){
            signInUrl += (signInUrl.indexOf("?")) === -1 ? "?prompt=none" : "&prompt=none"
        }
        window.top.location.href = signInUrl;
        return;
    },
    hasStorageAccess: async () => {
        let prompt = "granted";
        if (!document.requestStorageAccess) {
            return true,prompt;
        }
        if (await document.hasStorageAccess()) {
            return true, prompt;
        }
        let permission = await ssoLoginUtil.getStorageAccessPermission(); 
        prompt = permission.state
        if (prompt === "not_supported") {
            return true,prompt
        }else if (prompt === "granted") {
            return await ssoLoginUtil.getRequestStrorageAccess(), prompt;
        }else if (prompt === "prompt") {
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
    initilizeFrame: async () => {
        let hasAccess, state;
        ssoLoginUtil.showLoading()
        hasAccess, state = await ssoLoginUtil.hasStorageAccess();
        if(!hasAccess && state==="prompt" && action=="login") {
            ssoLoginUtil.showSignInBtn()
            ssoLoginUtil.postToparent("prompt",{prompt});
            return
        }else if (ssoLoginUtil.action=="login") {
            let loginSession = await ssoLoginUtil.isLoginSessionValid();
            if (loginSession){
                ssoLoginUtil.hideLoading()
                ssoLoginUtil.postToparent("login",loginSession);
                return;
            }
            ssoLoginUtil.showSignInBtn()
        } else if (ssoLoginUtil.action=="logout") {
            let logoutSession = await ssoLoginUtil.logoutSession()
            ssoLoginUtil.hideLoading()
            ssoLoginUtil.postToparent("logout",logoutSession);
            return;
        } else if (ssoLoginUtil.action=="settoken"){
            let settokenSession = await ssoLoginUtil.setLoginSession(ssoLoginUtil.accessToken)
            ssoLoginUtil.hideLoading()
            ssoLoginUtil.postToparent("settoken",settokenSession);
            return;
        }
    },

    initilizeParent : () => {
        window.addEventListener('message',function (ev) {
            this.dispatchEvent(new CustomEvent("ssologin", ev.data))
        });
    }
}

