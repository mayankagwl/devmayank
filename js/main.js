$(function () {
	'use strict';




});

var commonOptions = {};
commonOptions.apiKey = "1583819b-9792-43c4-b8bf-0b9fd2e239ae";
commonOptions.appName = "dev-sso";
commonOptions.hashTemplate = true;
commonOptions.debugMode = true;
commonOptions.accessTokenResponse = true;
commonOptions.formRenderDelay = '12'
commonOptions.callbackType = "hash"
// commonOptions.sott ="<Get_Sott>";
commonOptions.verificationUrl = encodeURIComponent(window.location); //Change as per requirement

function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var LRObject = new LoginRadiusV2(commonOptions);

var login_options = {};
login_options.onSuccess = function (response) {
	//setItem('lr-session-token', regResponse.access_token);
	HandleSuccessResponse(response);
	return

};
login_options.onError = function (errors) {
	//On Errors
	console.log(errors);
};

login_options.container = "login-container";

var sociallogin_options = {};
sociallogin_options.templateName = 'loginradiuscustom_tmpl';
sociallogin_options.container = 'sociallogin-container';
sociallogin_options.onSuccess = function (response) {
	HandleSuccessResponse(response);
	console.log(response);
};
sociallogin_options.onError = function (errors) {
	console.log(errors);
};

function HandleSuccessResponse(response) {
	console.log({
		"token":response
	})
	if (!response.access_token) {
		return
	}
	setCookie("lr-session-token",response.access_token, 1)
	var display = getParameterByName("display")
	window.location = "https://account.devmayank.com/fedcm/token?display=" + display + "&token=" + response.access_token + "&callback=" + encodeURI("http://localhost:5500/index.html")
	return
}





LRObject.util.ready(function () {
	LRObject.init("login", login_options);
	LRObject.customInterface('.socialogininterface', sociallogin_options);
	LRObject.init('socialLogin', sociallogin_options);

	setTimeout(() => {
		$(".content-loginradius-emailid,.content-loginradius-password").addClass("form-group")
		$(".content-loginradius-emailid input,.content-loginradius-password input").addClass("form-control")
		$(".submit-loginradius-login").addClass("btn btn-pill text-white btn-block btn-primary")
		$("#login-container").show()

		$(".form-control").on('input', function () {
			var $field = $(this).closest('.form-group');
			if (this.value) {
				$field.addClass('field--not-empty');
			} else {
				$field.removeClass('field--not-empty');
			}
		});
	}, 1500);



})

function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}