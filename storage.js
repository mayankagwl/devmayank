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

const utility = {
    parent: document.referrer,
    action : getParamByName("action"),
    accessToken :getParamByName("access_token"),
    signInUrl : getParamByName("signin"),
    signBtn : document.getElementById("sign-in"),
    loading : document.getElementById("loading"),
    postToparent: (key, message) => {
        parent.postMessage(Object.assign({ action:utility.action },{[key]:message}), utility.parent);
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
        if(!utility.accessToken){
            return { ok: false, istokenvalid: false };
        }
        try {
            let resp = await fetch(siteUrl+'/ssologin/settoken?token='+utility.accessToken, {
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
        let loginSession = utility.getLoginSession()
        if (loginSession.token && loginSession.isauthenticated){
            return loginSession
        }
        return false
    },
    signInBtnClickEventListener: async (ev) => {
        ev.preventDefault();
        let storageAccess = await getRequestStorageAccess()
        if(storageAccess) {
            let loginSession = utility.isLoginSessionValid()
            if (loginSession) {
                utility.postToparent("login",loginSession);
                return;
            }
        }
        let permission = await utility.getStorageAccessPermission(); 
        let signInUrl = utility.signInUrl;
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
        let permission = await getPermission();
        prompt = permission.state
        if (prompt === "not_supported") {
            return true,prompt
        }else if (prompt === "granted") {
            return await utility.getRequestStrorageAccess(), prompt;
        }else if (prompt === "prompt") {
            return false, prompt
        }
        return false, prompt
    },
    showLoading: () => {
        utility.loading.style.display = "block";
    },
    hideLoading: () => {
        utility.loading.style.display = "none";
    },
    showSignInBtn: () => {
        utility.loading.style.display = "none";
        utility.signBtn.style.display = "block";
    },
    hideSignInBtn: () => {
        utility.loading.style.display = "block";
        utility.signBtn.style.display = "none";
    },
    initilizeFrame: async () => {
        let hasAccess, state;
        utility.showLoading()
        hasAccess, state = await utility.hasStorageAccess();
        if(!hasAccess && state==="prompt" && action=="login") {
            utility.showSignInBtn()
            utility.postToparent("prompt",{prompt});
            return
        }else if (utility.action=="login") {
            let loginSession = await utility.isLoginSessionValid();
            if (loginSession){
                utility.hideLoading()
                utility.postToparent("login",loginSession);
                return;
            }
            utility.showSignInBtn()
        } else if (utility.action=="logout") {
            let logoutSession = await utility.logoutSession()
            utility.hideLoading()
            utility.postToparent("logout",logoutSession);
            return;
        } else if (utility.action=="settoken"){
            let settokenSession = await utility.setLoginSession(utility.accessToken)
            utility.hideLoading()
            utility.postToparent("settoken",settokenSession);
            return;
        }
    },

    initilizeParent : () => {
        window.addEventListener('message',function (ev) {
            this.dispatchEvent(new CustomEvent("ssologin", ev.data))
        });
    }
}

