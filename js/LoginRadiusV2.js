/* eslint-disable */
// Validation validate.js
(function(q, r, m) {
    var s = {
            required: "The %s field is required.",
            valid_phoneno: 'The %s field is not valid.',
            matches: "The %s field does not match the %s field.",
            "default": "The %s field is still set to default, please change.",
            valid_email: "The %s field must contain a valid email address.",
            valid_emails: "The %s field must contain all valid email addresses.",
            min_length: "The %s field must be at least %s characters in length.",
            max_length: "The %s field must not exceed %s characters in length.",
            exact_length: "The %s field must be exactly %s characters in length.",
            greater_than: "The %s field must contain a number greater than %s.",
            less_than: "The %s field must contain a number less than %s.",
            alpha: "The %s field must only contain alphabetical characters.",
            alpha_numeric: "The %s field must only contain alpha-numeric characters.",
            alpha_dash: "The %s field must only contain alpha-numeric characters, underscores, and dashes.",
            alpha_numeric_dash_combo: "The %s field must contain only combination of alpha-numeric characters and dashes.",
            alphanumeric_combo: "The %s field must contain only combination of alpha-numeric characters.",
            numeric: "The %s field must contain only numbers.",
            integer: "The %s field must contain an integer.",
            decimal: "The %s field must contain a decimal number.",
            is_natural: "The %s field must contain only positive numbers.",
            is_natural_no_zero: "The %s field must contain a number greater than zero.",
            valid_ip: "The %s field must contain a valid IP.",
            valid_base64: "The %s field must contain a base64 string.",
            valid_credit_card: "The %s field must contain a valid credit card number.",
            is_file_type: "The %s field must contain only %s files.",
            valid_url: "The %s field must contain a valid URL.",
            valid_ca_zip: "The %s field must contain a valid Postal Code."
        },
        t = function(a) {},
        czip = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/,
        pN = /^(\\+)|(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        u = /^(.+?)\[(.+)\]$/,
        h = /^[0-9]+$/,
        aNDC = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-])[A-Za-z\d][A-Za-z\d-]+$/i,
        aNC = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
        v = /^\-?[0-9]+$/,
        k = /^\-?[0-9]*\.?[0-9]+$/,
        p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        w = /^[a-z]+$/i,
        x = /^[a-z0-9]+$/i,
        y = /^[a-z0-9_\-]+$/i,
        z = /^[0-9]+$/i,
        A = /^[1-9][0-9]*$/i,
        B = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
        C = /[^a-zA-Z0-9\/\+=]/i,
        D = /^[\d\-\s]+$/,
        E = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        e = function(a, b, c) {
            this.callback = c || t;
            this.errors = [];
            this.fields = {};
            this.form = this._formByNameOrNode(a) || {};
            this.messages = {};
            this.handlers = {};
            a = 0;
            for (c = b.length; a < c; a++) {
                var d = b[a];
                if ((d.name || d.names) && d.rules)
                    if (d.names)
                        for (var l = 0; l < d.names.length; l++)
                            this._addField(d, d.names[l]);
                    else
                        this._addField(d, d.name)
            }
            var g = this.form.onsubmit;
            this.form.onsubmit = function(a) {
                    return function(b) {
                        try {
                            return a._validateForm(b) && (g === m || g())
                        } catch (c) {}
                    }
                }
                (this)
        },
        n = function(a, b) {
            var c;
            if (0 < a.length && ("radio" === a[0].type || "checkbox" === a[0].type))
                for (c = 0; c < a.length; c++) {
                    if (a[c].checked)
                        return a[c][b]
                }
            else
                return a[b]
        };
    e.prototype.setMessage = function(a, b) {
        this.messages[a] = b;
        return this
    };
    e.prototype.registerCallback = function(a, b) {
        a && ("string" === typeof a && b && "function" === typeof b) && (this.handlers[a] = b);
        return this
    };
    e.prototype._formByNameOrNode = function(a) {
        return "object" === typeof a ? a : r.forms[a]
    };
    e.prototype._addField = function(a, b) {
        this.fields[b] = {
            name: b,
            display: a.display || b,
            rules: a.rules,
            id: null,
            type: null,
            value: null,
            checked: null
        }
    };
    e.prototype._validateForm = function(a) {
        this.errors = [];
        for (var b in this.fields)
            if (this.fields.hasOwnProperty(b)) {
                var c = this.fields[b] || {},
                    d = this.form[c.name];
                d && d !== m && (c.id = n(d, "id"), c.type = 0 < d.length ? d[0].type : d.type, c.value = n(d, "value"), c.checked = n(d, "checked"), this._validateField(c))
            }
        "function" === typeof this.callback && this.callback(this.errors, a);
        0 < this.errors.length && (a && a.preventDefault ? a.preventDefault() : event && (event.returnValue = !1));
        return !0
    };
    e.prototype._validateField = function(a) {
        for (var b = a.rules.split("|"), c = a.rules.indexOf("required"), d = !a.value || "" === a.value || a.value === m, l = 0, g = b.length; l < g; l++) {
            var f = b[l],
                e = null,
                h = !1,
                k = u.exec(f);
            if (-1 !== c || -1 !== f.indexOf("!callback_") || !d)
                if (k && (f = k[1], e = k[2]), "!" === f.charAt(0) && (f = f.substring(1, f.length)), "function" === typeof this._hooks[f] ? this._hooks[f].apply(this, [a, e]) || (h = !0) : "callback_" === f.substring(0, 9) && (f = f.substring(9, f.length), "function" === typeof this.handlers[f] && !1 === this.handlers[f].apply(this, [a.value, e]) && (h = !0)), h) {
                    b = this.messages[f + "#" + a.name] || this.messages[f] || s[f];
                    c = "An error has occurred with the " + a.display + " field.";
                    b && (c = b.replace("%s", a.display), e && ((cu = e.indexOf("###") >= 0 && e.split("###")) ? cu[1] && (c = cu[1]) : c = c.replace("%s", this.fields[e] ? this.fields[e].display : e)));
                    this.errors.push({
                        Id: a.id,
                        Name: a.name,
                        Message: c,
                        Rule: f
                    });
                    break
                }
        }
    };
    e.prototype._hooks = {
        required: function(a) {
            var b = a.value.trim();
            return "checkbox" === a.type || "radio" === a.type ? !0 === a.checked : null !== b && "" !== b
        },
        "default": function(a, b) {
            return a.value !== b
        },
        matches: function(a, b) {
            var c = this.form[b];
            return c ? a.value === c.value : !1
        },
        valid_ca_zip: function(a) {
            return czip.test(a.value)
        },
        /*custom_validation: function(a, b) {
            var c = b.split("###")[0];
            c = c.split("or").join("|");
            var regex = new RegExp(c, "g");
            return regex.test(a.value)
        },*/
        valid_email: function(a) {
            return p.test(a.value)
        },
        valid_emails: function(a) {
            a = a.value.split(",");
            for (var b = 0; b < a.length; b++)
                if (!p.test(a[b]))
                    return !1;
            return !0
        },
        min_length: function(a, b) {
            return h.test(b) ? a.value.length >= parseInt(b, 10) : !1
        },
        max_length: function(a, b) {
            return h.test(b) ? a.value.length <= parseInt(b, 10) : !1
        },
        exact_length: function(a, b) {
            return h.test(b) ? a.value.length === parseInt(b, 10) : !1
        },
        greater_than: function(a, b) {
            return k.test(a.value) ? parseFloat(a.value) > parseFloat(b) : !1
        },
        less_than: function(a, b) {
            return k.test(a.value) ? parseFloat(a.value) < parseFloat(b) : !1
        },
        alpha: function(a) {
            return w.test(a.value)
        },
        alpha_numeric: function(a) {
            return x.test(a.value)
        },
        alpha_dash: function(a) {
            return y.test(a.value)
        },
        alpha_numeric_dash_combo: function(a) {
            return aNDC.test(a.value)
        },
        alphanumeric_combo: function(a) {
            return aNC.test(a.value)
        },
        numeric: function(a) {
            return h.test(a.value)
        },
        integer: function(a) {
            return v.test(a.value)
        },
        decimal: function(a) {
            return k.test(a.value)
        },
        is_natural: function(a) {
            return z.test(a.value)
        },
        is_natural_no_zero: function(a) {
            return A.test(a.value)
        },
        valid_ip: function(a) {
            return B.test(a.value)
        },
        valid_phoneno: function(a) {
            return (pN.test(a.value));
        },
        valid_base64: function(a) {
            return C.test(a.value)
        },
        valid_url: function(a) {
            return E.test(a.value)
        },
        valid_credit_card: function(a) {
            if (!D.test(a.value))
                return !1;
            var b = 0,
                c = 0,
                d = !1;
            a = a.value.replace(/\D/g, "");
            for (var e = a.length - 1; 0 <= e; e--)
                c = a.charAt(e), c = parseInt(c, 10), d && 9 < (c *= 2) && (c -= 9), b += c, d = !d;
            return 0 === b % 10
        },
        is_file_type: function(a, b) {
            if ("file" !== a.type)
                return !0;
            var c = a.value.substr(a.value.lastIndexOf(".") + 1),
                d = b.split(","),
                e = !1,
                m = 0,
                f = d.length;
            for (var m; m < f; m++)
                c == d[m] && (e = !0);
            return e
        }
    };
    q.FormValidator = e
})(window, document);

/**
 * @namespace LRNameSpace
 */
// eslint-disable-next-line no-unused-vars
var LRNameSpace = {};

(function (context) {
  /**
 * Annnonymous Login module
 * @memberof LRNameSpace
 * @type {object}
 * @namespace LRNameSpace.LRAnonymous
 */
  context.LRAnonymous = function () {
    var storage = new context.Storage();
    var generateUid = function (separator) {
      var delim = separator || '-';

      function S4 () {
        // eslint-disable-next-line no-magic-numbers
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
    };

    var auidCookieKey = '__aasauid';
    var urlCookieKey = '__aasurl';
    var uidCookieKey = '_aasuid';

    var uidUpdate = false;

    var title = document.title || null;
    var language = window.navigator.userLanguage || window.navigator.language;
    var encoding = document.characterSet || document.charset;
    var today = new Date();
    var afterOneYear = new Date((today.getYear() + 1), (today.getMonth() + 1), (today.getDay() + 1));

    var auid = '';
    var uid = '';
    var lrsite = '';
    var providerId = '';
    if (storage.getBrowserStorage(uidCookieKey)) {
      uid = storage.getBrowserStorage(uidCookieKey);
    } else if (storage.getBrowserStorage('lr-user-uid')) {
      uidUpdate = true;
      var val = storage.getBrowserStorage('lr-user-uid');
      uid = val;
      storage.setBrowserStorage(uidCookieKey, val, afterOneYear);
    }

    if (storage.getBrowserStorage(auidCookieKey)) {
      auid = storage.getBrowserStorage(auidCookieKey);
    } else {
      auid = generateUid();
      storage.setBrowserStorage(auidCookieKey, auid, afterOneYear);
    }

    var url = '';
    function trackPageView () {
      if (storage.getBrowserStorage(urlCookieKey)) {
        url = storage.getBrowserStorage(urlCookieKey);
        if ((url !== md5(window.location.href)) || uidUpdate) {
          setImage('pageView');
          storage.setBrowserStorage(urlCookieKey, md5(window.location.href), afterOneYear);
        }
      } else {
        setImage('pageView');
        storage.setBrowserStorage(urlCookieKey, md5(window.location.href), afterOneYear);
      }
    }

    function jsonToQueryString (json) {
      // eslint-disable-next-line array-callback-return
      return Object.keys(json).map(function (key) {
        if (json[key]) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        }
      }).join('&');
    }
    function setImage (event, useruid, provider, customFields) {
      var cf = '';
      if (customFields) {
        cf = jsonToQueryString(customFields);
      }
      providerId = provider || providerId;
      uid = useruid || uid;
      // eslint-disable-next-line no-unused-vars
      // var screenResolution = 0;
      var screenColorDepth = 0;
      var screenHeight, screenWidth;
      if (window.screen) {
        screenHeight = window.screen.height;
        screenWidth = window.screen.width;
        screenColorDepth = window.screen.colorDepth;
      }

      var img = new Image();
      img.style.position = 'fixed';
      img.onload = function () {
        if (document.body) {
          document.body.appendChild(img);
        }
      };

      img.src = '//gaugeapp.lrcontent.com/image.gif?aassite=' + lrsite + '&aasauid=' + auid + '&aasuid=' + uid + '&aasurl=' + window.location.href + '&aassh=' + screenHeight + '&aassw=' + screenWidth + '&aasscd=' + screenColorDepth + '&aashn=' + window.location.hostname + '&aaspt=' + title + '&aasln=' + language + '&aasenc=' + encoding + '&aasev=' + event + '&aasidprov=' + providerId + '&' + cf;
    }

    return {
      /**
       * This method will track the user's custom event.
       * @memberof LRNameSpace.LRAnonymous#
       * @function track
       * @param {string} [event="pageView"] - Any event you want to track.
       * @param {string} [uid=null] - user's Uid.
       * @param {string} [provider=null] - user's login provider.
       * @param {Object} [customFields=null] - e.g.  { "cf_orderid" : "534552", "cf_productId" :"412412412" }.
       */
      track: function (event, uid, provider, customFields) {
        this.setUid(uid);
        setImage(event, uid, provider, customFields);
      },
      /**
       * This method will set the user's uid to browser storage.
       * @memberof LRNameSpace.LRAnonymous#
       * @function setUid
       * @param {string} id - user's Uid.
       */
      setUid: function (id) {
        uid = id;
        storage.setBrowserStorage(uidCookieKey, uid, afterOneYear);
      },
      /**
       * This method will intialize the Anonymous login with default options like appName.
       * @memberof LRNameSpace.LRAnonymous#
       * @function init
       * @param {Object} options - options to set for a default constrcutor of LRAnonymous module.
       */
      init: function (options) {
        options = options || {};
        uid = options.uid || uid;
        lrsite = options.appName || options.appname;
        if (uid) {
          storage.setBrowserStorage(uidCookieKey, uid, afterOneYear);
        }
        trackPageView();
      }
    };
  };
})(LRNameSpace);

/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
(function (context) {
  /**
   * Initialize document cookies getter/setter/remove methods
   * @memberof LRNameSpace
   * @type {object}
   * @namespace LRNameSpace.cookies
   */
  context.cookies = {

    intToString: function (intValue) {
      return intValue.toString();
    },

    stringToInt: function (strValue) {
      return parseInt(strValue, 10) || 0;
    },

    // Don’t send `SameSite=None` to known incompatible clients.
    isSameSiteNoneCompatible: function (useragent) {
      return !this.isSameSiteNoneIncompatible(useragent.toString());
    },

    // Classes of browsers known to be incompatible.
    isSameSiteNoneIncompatible: function (useragent) {
      return (
        this.hasWebKitSameSiteBug(useragent) ||
      this.dropsUnrecognizedSameSiteCookies(useragent)
      );
    },

    hasWebKitSameSiteBug: function (useragent) {
      return (
        this.isIosVersion(12, useragent) ||
      (this.isMacosxVersion(10, 14, useragent) &&
        (this.isSafari(useragent) || this.isMacEmbeddedBrowser(useragent)))
      );
    },

    dropsUnrecognizedSameSiteCookies: function (useragent) {
      return (
        (this.isChromiumBased(useragent) &&
        this.isChromiumVersionAtLeast(51, useragent) &&
        !this.isChromiumVersionAtLeast(67, useragent)) ||
      (this.isUcBrowser(useragent) && !this.isUcBrowserVersionAtLeast(12, 13, 2, useragent))
      );
    },

    // Regex parsing of User-Agent string.
    regexContains: function (stringValue, regex) {
      var matches = stringValue.match(regex);
      return matches !== null;
    },

    extractRegexMatch: function (stringValue, regex, offsetIndex) {
      var matches = stringValue.match(regex);

      if (matches !== null && matches[offsetIndex] !== undefined) {
        return matches[offsetIndex];
      }

      return null;
    },

    isIosVersion: function (major, useragent) {
      var regex = /\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//;
      // Extract digits from first capturing group.
      return this.extractRegexMatch(useragent, regex, 1) === this.intToString(major);
    },

    isMacosxVersion: function (major, minor, useragent) {
      var regex = /\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//;
      // Extract digits from first and second capturing groups.
      return (
        this.extractRegexMatch(useragent, regex, 1) === this.intToString(major) &&
      this.extractRegexMatch(useragent, regex, 2) === this.intToString(minor)
      );
    },

    isSafari: function (useragent) {
      var safariRegex = /Version\/.* Safari\//;
      return useragent.match(safariRegex) !== null && !this.isChromiumBased(useragent);
    },

    isMacEmbeddedBrowser: function (useragent) {
      var regex = /^Mozilla\/[.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) AppleWebKit\/[.\d]+ \(KHTML, like Gecko\)$/;

      return this.regexContains(useragent, regex);
    },

    isChromiumBased: function (useragent) {
      var regex = /Chrom(e|ium)/;
      return this.regexContains(useragent, regex);
    },

    isChromiumVersionAtLeast: function (major, useragent) {
      var regex = /Chrom[^ /]+\/(\d+)[.\d]* /;
      // Extract digits from first capturing group.
      var version = this.stringToInt(this.extractRegexMatch(useragent, regex, 1));
      return version >= major;
    },

    isUcBrowser: function (useragent) {
      var regex = /UCBrowser\//;
      return this.regexContains(useragent, regex);
    },

    isUcBrowserVersionAtLeast: function (major, minor, build, useragent) {
      var regex = /UCBrowser\/(\d+)\.(\d+)\.(\d+)[.\d]* /;
      // Extract digits from three capturing groups.
      var majorVersion = this.stringToInt(this.extractRegexMatch(useragent, regex, 1));
      var minorVersion = this.stringToInt(this.extractRegexMatch(useragent, regex, 2));
      var buildVersion = this.stringToInt(this.extractRegexMatch(useragent, regex, 3));
      if (majorVersion !== major) {
        return majorVersion > major;
      }
      if (minorVersion !== minor) {
        return minorVersion > minor;
      }

      return buildVersion >= build;
    },

    /**
     * This method will returns value of the specified document cookie Object item.
     * @memberof LRNameSpace.cookies#
     * @function getItem
     * @param {string} sKey - A String specifying the name of the key you want to get the value of.
     * @return {null|Object}  return the value of specified key from cookies.
     */
    getItem: function (sKey) {
      if (!sKey) {
        return null;
      }
      // eslint-disable-next-line no-useless-escape
      return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    /**
     * This method will sets the value of the specified documen cookie storage Object item
     * @memberof LRNameSpace.cookies#
     * @function setItem
     * @param {string} sKey - A String specifying the name of the key you want to set the value of.
     * @param {string} sValue - specifying the value of the key you want to set the value of
     * @param {string} vEnd - (Number - finite or Infinity, String, Date object or null): the max-age in seconds (e.g.
     * 31536e3 for a year) or the expires date in GMTString format or in Date Object format; if not specified it will
     * expire at the end of session;
     * @param {string} sPath - A string representing the path of the cookie.
     * @param {string} sDomain - A string representing the domain of the cookie.
     * @param {string} bSecure - A boolean that specifies whether the cookie should be marked as secure (true), or not (false).
     * @return {Boolean} check key is already there or not in Storage .
     */
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      // eslint-disable-next-line no-useless-escape
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
        return false;
      }
      var sExpires = '';
      var vExpiryDate = {
        getInStringFormat: function (nMaxAge) { // "max-age" in second
          if (nMaxAge === Infinity) {
            return 'Fri, 31 Dec 9999 23:59:59 GMT';
          }
          var dDate = new Date();
          // eslint-disable-next-line no-magic-numbers
          dDate.setTime(dDate.getTime() + (nMaxAge * 1000));
          return dDate.toGMTString();
        }
      };
      if (vEnd) {
        // eslint-disable-next-line default-case
        switch (vEnd.constructor) {
          case Number:
            sExpires = '; expires=' + vExpiryDate.getInStringFormat(vEnd) + vEnd === Infinity ? '' : '; max-age=' + vEnd;
            break;
          case String:
            sExpires = '; expires=' + vEnd;
            break;
          case Date:
            sExpires = '; expires=' + vEnd.toUTCString();
            break;
        }
      }
      if (sKey === 'lr-user--token') {
        bSecure = true;
      }
      var userAgent = navigator.userAgent;
      if (sKey === 'lr-session-token' && (this.isSameSiteNoneCompatible(userAgent))) {
        document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + ';secure' + ';SameSite=None';
      } else {
        document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
      }
      return true;
    },
    /**
     * This method will removes the specified Storage Object item..
     * @memberof LRNameSpace.cookies#
     * @function removeItem
     * @param {string} sKey - A String specifying the name of the item you want to remove.
     * @param {string} sPath - A string representing the path of the cookie.
     * @param {string} sDomain - A string representing the domain of the cookie.
     * @return {Boolean} item has been removed or not.
     */
    removeItem: function (sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) {
        return false;
      }
      document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
      return true;
    },
    /**
     * This method will check the specified Storage Object item available or not.
     * @memberof LRNameSpace.cookies#
     * @function hasItem
     * @param {string} sKey - A String specifying the name of the item you want to find.
     * @return {Boolean} item has been present or not in storage.
     */
    hasItem: function (sKey) {
      if (!sKey) {
        return false;
      }
      // eslint-disable-next-line no-useless-escape
      return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    /**
     * This method will returns all the saved keys in Storage Object.
     * @memberof LRNameSpace.cookies#
     * @function keys
     * @return {Array} all the keys that stored in storage.
     */
    keys: function () {
      // eslint-disable-next-line no-useless-escape
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
      }
      return aKeys;
    }

  };
  // eslint-disable-next-line no-undef
})(LRNameSpace);

(function (context) {
  /**
   * ProgressiveProfiling module
   * @memberof LRNameSpace
   * @type {object}
   * @namespace LRNameSpace.ProgressiveProfiling
   */
  context.ProgressiveProfiling = function (module, commonFns, controllers, LoginRadiusDefaults) {
    return {
      fetchSchema: function (cb) {
        module.util.ajaxCall('get', LoginRadiusDefaults.configApiDomain + 'progressiveProfilingSchema?apikey=' + module.options.apiKey + '&appName=' + module.options.appName, '', cb);
      },
      /**
      * @function progressiveProfiling.execStep
      * @param {String} stepId id of step
      * @param {Object} options lr options object
      * @description Execution of  progressiveProfiling step
      */
      execStep: function (stepId, options) {
        if (module.progressiveProfilingSchema) {
          // eslint-disable-next-line no-empty-function
          var onSuccess = options.onSuccess || function () { };
          // eslint-disable-next-line no-empty-function
          var onError = options.onError || function () { };
          var container = options.container || '';
          var classPrefix = options.classPrefix || '';
          var templateName = options.templateName || '';
          var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
          if (token) {
            module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + token, '', function (userprofile) {
              var stepsSchema = module.util.findInSchema(module.progressiveProfilingSchema.ProfilingSteps, 'Step', stepId);
              if (stepsSchema) {
                var responseObject = {};
                responseObject.Profile = userprofile;
                responseObject.access_token = token;
                var provider = userprofile.Provider.toLowerCase();
                if (provider === 'email' || provider === 'raas' || module.options.progressiveProfilingTraditional) {
                  if (module.options.progressiveProfilingTraditional && provider !== 'email' && provider !== 'raas') {
                    userprofile = module.LoggedinSocialProvderProfile;
                  }
                  var schema = stepsSchema.Schema;
                  var showSchema = commonFns.mapSchema(schema, userprofile, null, true);
                  responseObject.Profile = userprofile;
                  if (showSchema.length > 0) {
                    commonFns.createForm(showSchema, 'progressiveProfiling', container, function (data) {
                      controllers.updateData(responseObject, container, data, onSuccess, onError, classPrefix, showSchema, 'progressiveProfiling');
                    }, function (errors) {
                      onError(errors);
                    }, classPrefix);
                  } else {
                    commonFns.loginHandleToken(responseObject, '', onSuccess, onError);
                  }
                } else {
                  var scopesList = stepsSchema.Scopes;
                  var stepsProviderSchema = module.util.findInSchema(scopesList, 'Provider', provider, true);
                  if (stepsProviderSchema) {
                    var domain = module.options.customDomain || module.options.appName + '.' + LoginRadiusDefaults.hubDomain;
                    var endpoint = 'https://' + domain + '/RequestHandlor.aspx?apikey=' + module.options.apiKey + '&provider=' + provider + '&scope=' + stepsProviderSchema.Scopes;
                    var providers = [];
                    providers.push({
                      'Name': provider,
                      'Endpoint': endpoint
                    });
                    commonFns.renderCustomInterface(container, '', templateName, '', '', providers);
                    commonFns.socialLogin(container, onSuccess, onError);
                  } else {
                    commonFns.loginHandleToken(responseObject, '', onSuccess, onError);
                  }
                }
              } else {
                module.log('Step Schema not found.');
              }
            });
          }
        }
      }
    };
  };
})(LRNameSpace);

(function (context) {
  /**
   * Initialize storage getter/setter/remove methods
   * @memberof LRNameSpace
   * @type {object}
   * @namespace LRNameSpace.Storage
   */
  context.Storage = function (module, LoginRadiusDefaults) {
    return {
      /**
      * @memberof LRNameSpace.Storage#
      * @function isLocalStorageNameSupported
      * @param {String} lsName string
      * @return {Boolean} true/false  boolean value
      * @description Check browser local storage name supported or not.
      */
      isLocalStorageNameSupported: function (lsName) {
        try {
          if (window[lsName]) {
            var testKey = 'test';
            var storage = window[lsName];
            try {
              storage.setItem(testKey, '1');
              storage.removeItem(testKey);
              return true;
            } catch (error) {
              return false;
            }
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      },
      /**
   * @memberof LRNameSpace.Storage#
   * @function setBrowserStorage
   * @param {String} key string
   * @param {String} value string
   * @description Set object in browser local storage.
   */
      setBrowserStorage: function (key, value) {
        var cookieFallback = true;
        if (this.isLocalStorageNameSupported('localStorage')) {
          localStorage.setItem(key, value);
          cookieFallback = false;
        }
        if (this.isLocalStorageNameSupported('sessionStorage')) {
          sessionStorage.setItem(key, value);
          cookieFallback = false;
        }

        if (cookieFallback && module && module.options) {
          context.cookies.setItem(key, value, '', module.options.appPath);
        }
      },

      /**
      * @memberof LRNameSpace.Storage#
      * @function getBrowserStorage
      * @param {String} key string
      * @return {Object} value string
      * @description Get saved values from browser local storage.
      */
      getBrowserStorage: function (key) {
        if (LoginRadiusDefaults && key === LoginRadiusDefaults.storedTokenName) {
          var val = this.getBrowserStorage('lr-session-token');
          if (val) {
            val = val.replace(/"/g, '');
            this.setBrowserStorage(LoginRadiusDefaults.storedTokenName, val);
            return val;
          }
        }
        if (this.isLocalStorageNameSupported('localStorage') &&
          localStorage.getItem(key) !== null && localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== '') {
          return localStorage.getItem(key);
        }

        if (this.isLocalStorageNameSupported('sessionStorage') &&
          sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== undefined && sessionStorage.getItem(key) !== '') {
          return sessionStorage.getItem(key);
        }

        return context.cookies.getItem(key);
      },

      /**
      * @memberof LRNameSpace.Storage#
      * @function removeBrowserStorage
      * @param {String} key string
      * @description Remove save object from browser local storage.
      */
      removeBrowserStorage: function (key) {
        var cookieFallback = true;
        if (this.isLocalStorageNameSupported('localStorage')) {
          localStorage.removeItem(key);
          cookieFallback = false;
        }
        if (this.isLocalStorageNameSupported('sessionStorage')) {
          sessionStorage.removeItem(key);
          cookieFallback = false;
        }

        if (cookieFallback && module && module.options) {
          context.cookies.removeItem(key, module.options.appPath);
        }
      }

    };
  };
})(LRNameSpace);

/* eslint-disable no-magic-numbers */
(function (context) {
  /**
   * Initialize Utilities methods
   * @memberof LRNameSpace
   * @type {object}
   * @namespace LRNameSpace.Utilities
   */
  context.Utilities = function () {
    /**
     *  @description Everything that has to do with properly supporting our document ready event. Brought over from the most awesome jQuery.
     */
    var userAgent = navigator.userAgent.toLowerCase();
    /**
    *  @description Figure out what browser is being used
    */
    var browser = {
      // eslint-disable-next-line no-useless-escape
      version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
      safari: /webkit/.test(userAgent),
      opera: /opera/.test(userAgent),
      msie: (/msie/.test(userAgent) || /trident/.test(userAgent)) && (!/opera/.test(userAgent)),
      mozilla: (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent))
    };

    var readyBound = false;
    var isReady = false;
    var readyList = [];
    /**
    * @memberof LRNameSpace.Utilities#
    * @private
    * @function domReady
    * @description Handle when the DOM is ready
    */
    function domReady () {
      // Make sure that the DOM is not already loaded
      if (!isReady) {
        // Remember that the DOM is ready
        isReady = true;

        if (readyList) {
          for (var fn = 0; fn < readyList.length; fn++) {
            readyList[fn].call(window, []);
          }

          readyList = [];
        }
      }
    }
    /**
    * @memberof LRNameSpace.Utilities#
    * @private
    * @function addLoadEvent
    * @description From Simon Willison. A safe way to fire onload w/o screwing up everyone else.
    */
    function addLoadEvent (func) {
      var oldonload = window.onload;
      if (typeof window.onload !== 'function') {
        window.onload = func;
      } else {
        window.onload = function () {
          if (oldonload) {
            oldonload();
          }
          func();
        };
      }
    }
    /**
    * @memberof LRNameSpace.Utilities#
    * @private
    * @function bindReady
    * @description Does the heavy work of working through the browsers idiosyncracies (let's call them that) to hook onload.
    */
    function bindReady () {
      if (readyBound) {
        return;
      }

      readyBound = true;

      // Mozilla, Opera (see further below for it) and webkit nightlies currently support this event
      if (document.addEventListener && !browser.opera) {
        // Use the handy event callback
        document.addEventListener('DOMContentLoaded', domReady, false);
      }

      // If IE is used and is not in a frame
      // Continually check to see if the document is ready
      if (browser.msie && window === top) {
        (function () {
          if (isReady) { return; }
          try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll('left');
          } catch (error) {
            // setTimeout(arguments.callee, 0);
            return;
          }
          // and execute any waiting functions
          domReady();
        })();
      }

      if (browser.opera) {
        document.addEventListener('DOMContentLoaded', function () {
          if (isReady) { return; }
          for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) {
              // setTimeout(arguments.callee, 0);
              return;
            }
          }
          // and execute any waiting functions
          domReady();
        }, false);
      }

      if (browser.safari) {
        var numStyles;
        (function () {
          if (isReady) { return; }
          if (document.readyState !== 'loaded' && document.readyState !== 'complete') {
            // setTimeout(arguments.callee, 0);
            return;
          }
          if (numStyles === undefined) {
            var links = document.getElementsByTagName('link');
            for (var i = 0; i < links.length; i++) {
              if (links[i].getAttribute('rel') === 'stylesheet') {
                numStyles++;
              }
            }
            var styles = document.getElementsByTagName('style');
            // numStyles += styles.length;
            numStyles = (numStyles === undefined) ? styles.length : numStyles + styles.length;
          }
          if (document.styleSheets.length !== numStyles) {
            // setTimeout(arguments.callee, 0);
            return;
          }

          // and execute any waiting functions
          domReady();
        })();
      }

      // A fallback to window.onload, that will always work
      addLoadEvent(domReady);
    }

    return {
      browser: browser,
      /**
       * @memberof LRNameSpace.Utilities#
       * @function getHashParam
       * @param  {String} name name
       * @return {String}  vtoken  token value
       * @description This method will return validation token or type from browser url
       */
      getHashParam: function (name) {
        var vtoken;
        var matches = window.location.hash.match(new RegExp(name + '=([^&]*)'));
        // eslint-disable-next-line no-eq-null
        if (window.location.hash && matches != null) {
          vtoken = matches[1];
        } else {
          vtoken = this.getQueryParameterByName(name);
        }
        return vtoken;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function keysToLowerCase
      * @param  {Object} obj object
      * @return {Object}  newobj  new object with lowercase keys
      * @description Convert object keys to lowercase letter
      */
      keysToLowerCase: function (obj) {
        var key;
        var keys = Object.keys(obj);
        var n = keys.length;
        var newobj = {};
        while (n--) {
          key = keys[n];
          newobj[key.toLowerCase()] = obj[key];
          // eslint-disable-next-line no-eq-null
          if (typeof newobj[key.toLowerCase()] === 'object' && newobj[key.toLowerCase()] != null) {
            newobj[key.toLowerCase()] = this.keysToLowerCase(newobj[key.toLowerCase()]);
          }
        }
        return (newobj);
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function elementsByClass
      * @param  {String} classname name of class
      * @param  {Object}  node  DOM element
      * @return {Array}  a  DOM elements
      * @description Get html element by using class name from given html DOM
      */
      elementsByClass: function (classname, node) {
        if (classname !== '') {
          node = node || document.body;
          var a = [];
          var re = new RegExp('(^| )' + classname + '( |$)');
          var els = node.getElementsByTagName('*');
          for (var i = 0, j = els.length; i < j; i++) {
            if (re.test(els[i].className)) {
              a.push(els[i]);
            }
          }
          return a;
        }
      },
      /**
     * @memberof LRNameSpace.Utilities#
     * @function isValidUrl
     * @param  {String} urlToValidate url
     * @return {Boolean}  true/false  boolean value
     * @description This function will check given url is vaild or not
     */
      isValidUrl: function (urlToValidate) {
        var myRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
        return !(!myRegExp.test(urlToValidate));
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function hasClass
      * @param  {String} cls class name
      * @param  {Object} ele  DOM object
      * @return {Boolean}  true/false  boolean value
      * @description This function will check class name exist or not in given html element
      */
      hasClass: function (ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
      },
      /**
     * @memberof LRNameSpace.Utilities#
     * @function addClass
     * @param  {String} cls class name
     * @param  {Object} ele  DOM object
     * @return {Boolean}  true/false  boolean value
     * @description This function will append new class in given html element
     */
      addclass: function (ele, cls) {
        if (!this.hasClass(ele, cls)) {
          ele.className += ' ' + cls;
          return true;
        }
        return false;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function isSubstring
      * @param  {Object} obj  Object
      * @return {String/Boolean}  k/false  key of object
      * @description Check given string existing in object keys or not
      */
      isSubstring: function (w, obj) {
        for (var k in obj) {
          if (obj[k].indexOf(w) !== -1) { return k; }
        }
        return false;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function isSubstring
      * @param  {String} t token
      * @return {Boolean}
      * @description Check given string is JWT token or not
      */
      isJWT: function (t) {
        try {
          const [headerB64] = t.split('.');
          const header = JSON.parse(atob(headerB64));
          return typeof header === 'object';
        } catch (_) {
          return false;
        }
      },
      /**
    * @memberof LRNameSpace.Utilities#
    * @function isJsonString
    * @param  {String} str  json string
    * @return {Object/Boolean}  object/false  json object
    * @description Check pass string is json string or not
    */
      isJsonString: function (str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return false;
        }
      },
      /**
     * @memberof LRNameSpace.Utilities#
     * @function addEvent
     * @param  {String} type  event type
     * @param  {Object} element  object
     * @param  {String} handle  string
     * @description Add javascript event on given html element
     */
      addEvent: function (type, element, handle) {
        var elements = [];
        if (element instanceof Array) {
          elements = element;
        } else {
          elements.push(element);
        }
        for (var i = 0; i < elements.length; i++) {
          elements[i]['on' + type] = handle;
        }
      },
      /**
    * @memberof LRNameSpace.Utilities#
    * @function getQueryParameterByName
    * @param  {String} name  the query param name, to be serached in the URL
    * @param  {String} [search = location.search] The URL where search needs to be done
    * @return {null|String}  results  return value
    * @description return the value of specific query parameter value in the given URL or current browser URL.
    */
      getQueryParameterByName: function (name, search) {
        search = '&' + (search || location.search);
        // eslint-disable-next-line no-useless-escape
        name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(search);
        // eslint-disable-next-line no-eq-null
        return results == null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function getParameterByName
      * @param  {String} name  the query param name, to be serached in the current window URL
      * @return {null|String}  results return query parameter value
      * @description the value of specific query parameter value in the current browser URL.
      */
      getParameterByName: function (name) {
        // eslint-disable-next-line no-useless-escape
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function getQueryStringValue
      * @param  {String} url  The URL in which key needs to be searched
      * @param  {String} key  The key or query param
      * @return {null|String}  return value of the desired query param
      * @description Get query param value
      */
      getQueryStringValue: function (url, key) {
        var href = url || window.location.href;
        var reg = new RegExp('[?&]' + key + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function extend
      * @param  {Object} obj1  object
      * @param  {Object} obj2  object
      * @description Merge the contents of object obj2 into the first object obj1
      */
      extend: function (obj1, obj2) {
        for (var i in obj2) {
          if (obj2.hasOwnProperty(i)) {
            obj1[i] = obj2[i];
          }
        }
      },
      /**
    * @memberof LRNameSpace.Utilities#
    * @function ready
    * @param {Function} fn function
    * @param {any} args  any type
    * @description This is the public function that people can use to hook up ready.
    */
      ready: function (fn, args) {
        // Attach the listeners
        bindReady();

        // If the DOM is already ready
        if (isReady) {
          // Execute the function immediately
          fn.call(window, []);
        } else {
          // Add the function to the wait list
          readyList.push(function () {
            return fn.call(window, []);
          });
        }
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function parseQueryString
      * @param {String} qs encoded query string
      * @return {Object} obj JSON object
      * @description Thei function decodes the endocded URI string to normal json object
      */
      parseQueryString: function (qs) {
        var obj = {};
        if ((qs || qs !== '') && typeof qs === 'string') {
          var nodes = qs.split('&');
          for (var i = 0; i < nodes.length; i++) {
            var keyValue = nodes[i].split('=');
            obj[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
          }
        }
        return obj;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function encodedString
      * @param {String} str simple string
      * @return {String} str  encoded string
      * @description This function is used to encode given string.
      */
      encodedString: function (str) {
        if (str.indexOf('%2B') === -1) {
          str = str.replace(/\+/g, '%2B');
        }
        return str;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function mergeOptions
      * @param {Object} obj1 object
      * @param {Object} obj2 object
      * @return {Object} obj3  object
      * @description Merge the two objects contents.
      */
      mergeOptions: function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
          obj3[attrname] = obj1[attrname];
        }
        for (var attrname1 in obj2) {
          obj3[attrname1] = obj2[attrname1];
        }
        return obj3;
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function mergeObjects
      * @param {Array} arr1 array
      * @param {Array} arr2 array
      * @param {Boolean} flag true/false
      * @return {Array} arr3  array
      * @description Merge the two array of objects.
      */
      mergeObjects: function (arr1, arr2, flag) {
        var arr3 = [];
        var check;
        for (var i in arr1) {
          for (var j in arr2) { check = flag ? (arr2[j] === arr1[i]) : arr2[j].name === arr1[i].name; }
          if (check) {
            break;
          }
          arr3.push(arr1[i]);
        }
        arr3 = arr3.concat(arr2);
        return arr3;
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function isArray
      * @param {Any} o type any
      * @return {Boolean} true/false booean value
      * @description Check passed parameter is array or not.
      */
      isArray: function (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function randomString
      * @param {Number} length type number
      * @return {String} str random string
      * @description Generate randam string according given length.
      */
      randomString: function (length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

        if (!length) {
          length = Math.floor(Math.random() * chars.length);
        }

        var str = '';
        for (var i = 0; i < length; i++) {
          str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function findInSchema
      * @param {Array} schema array of object
      * @param {Any} key key of object
      * @param {Any} value value of object
      * @param {Boolean} caseInsensitive flag caseInsensitive
      * @return {Object|null} schema object from array of object
      * @description Find object from schema.
      */
      findInSchema: function (schema, key, value, caseInsensitive) {
        for (var i = 0; i < schema.length; i++) {
          var keys = caseInsensitive ? schema[i] && schema[i][key].toLowerCase() : schema[i] && schema[i][key];
          if (keys === value) {
            return schema[i];
          }
        }

        return null;
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function jsonToQueryString
      * @param {Object} json json object
      * @return {String} string query string
      * @description Create json object to url query string.
      */
      jsonToQueryString: function (json) {
        return Object.keys(json).map(function (key) {
          if (json[key]) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
          } else {
            return '';
          }
        }).join('&');
      },
      /**
     * @memberof LRNameSpace.Utilities#
     * @function insertBefore
     * @param {Object} el source html element
     * @param {Object} referenceNode destination html element
     * @description Insert html content before any given html element.
     */
      insertBefore: function (el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function isEmpty
      * @param {Object} obj object
      * @return {Boolean} true/false boolean value
      * @description This function will check is object empty.
      */
      isEmpty: function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) { return false; }
        }
        return true;
      },

      /**
      * @memberof LRNameSpace.Utilities#
      * @function keyslowerToUpperCamelCase
      * @param {Object} obj object
      * @return {Object} newobj updated object
      * @description This function will convert object keys lowercase letters to upperCamelCase .
      */
      keyslowerToUpperCamelCase: function (obj) {
        var key; var keys = Object.keys(obj);
        var n = keys.length;
        var newobj = {};
        while (n--) {
          key = keys[n];
          newobj[key.charAt(0).toUpperCase() + key.substr(1)] = obj[key];
        }
        return newobj;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function findElementByRegex
      * @param {String} property 'id' or 'class' on which you want to test
      * @param {String} pattern Regex pattern to identify the element
      * @param {String} queryCriteria element selecting query e.g. "select.custom-select"
      * @return {Array} reqElems
      * @description This function will filters out the html element based on regex.
      */
      findElementByRegex: function (property, pattern, queryCriteria) {
        var elems;
        if (queryCriteria) {
          elems = document.querySelectorAll(queryCriteria);
        } else {
          elems = document.querySelectorAll('*');
        }
        var reqElems = [];
        for (var i = 0; i < elems.length; i++) {
          if (pattern.test(elems[i][property])) {
            reqElems.push(elems[i]);
          }
        }
        return reqElems;
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function isObject
      * @param {Object} o object
      * @return {Boolean} true/false boolean value
      * @description This function will check parameter has object type.
      */
      isObject: function (o) {
        return o instanceof Object && o.constructor === Object;
      },
      parseString: function (stringifyValue) {
        if (stringifyValue === undefined) {
          return false;
        }
        return JSON.parse(stringifyValue);
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function containsObject
      * @param {Array} list array of objects
      * @param {Object} obj object
      * @param {String} key field name (ex.: 'name')
      * @return {Boolean}
      * @description This function will check list(array of objects) contains given object by using object key.
      */
      containsObject: function (list, obj, key) {
        if (key) {
          for (var i = 0; i < list.length; i++) {
            if (list[i][key] === obj[key]) {
              return true;
            }
          }
          return false;
        }
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function base64UrlDecode
      * @param {base64url} string base64url encoded string
      * @return {Uint8Array}
      * @description This function will decode base64url encoded string.
      */
      base64UrlDecode: function (base64url) {
        base64url = base64url.replace(/-/g, '+').replace(/_/g, '/');
        const pad = base64url.length % 4;
        if (pad) {
          if (pad === 1) {
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
          }
          base64url += new Array(5 - pad).join('=');
        }
        return new Uint8Array(atob(base64url).split('').map(function (c) {
          return c.charCodeAt(0);
        }));
      },
      /**
      * @memberof LRNameSpace.Utilities#
      * @function base64UrlEncode
      * @param {buffer} Uint8Array
      * @return {String}
      * @description This function will encode Uint8Array to base64url encoded string.
      */
      base64UrlEncode: function (buffer) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      }

    };
  };
})(LRNameSpace);

/* eslint-disable */
//Added new fallback methods for IE8
if (typeof String.prototype.trim !== "function") {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/ ) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt)
                return from;
        }
        return -1;
    };
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisp */ ) {
        "use strict";

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}

(function(a, b) {
    "use strict";
    var c = function() {
            var b = function() {
                var b = a.location.hash ? a.location.hash.substr(1).split("&") : [],
                    c = {};
                for (var d = 0; d < b.length; d++) {
                    var e = b[d].split("=");
                    c[e[0]] = decodeURIComponent(e[1])
                }
                return c
            };
            var c = function(b) {
                var c = [];
                for (var d in b) {
                    c.push(d + "=" + encodeURIComponent(b[d]))
                }
                a.location.hash = c.join("&")
            };
            return {
                get: function(a) {
                    var c = b();
                    if (a) {
                        return c[a]
                    } else {
                        return c
                    }
                },
                add: function(a) {
                    var d = b();
                    for (var e in a) {
                        d[e] = a[e]
                    }
                    c(d)
                },
                remove: function(a) {
                    a = typeof a == "string" ? [a] : a;
                    var d = b();
                    for (var e = 0; e < a.length; e++) {
                        delete d[a[e]]
                    }
                    c(d)
                },
                clear: function() {
                    c({})
                }
            }
        }
        ();
    a.hash = c
})(window)

if (typeof Object.assign != 'function') {
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        'use strict';
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
/**
* @default {object}
* @description Define LoginRadiusJs default and constant values.
*/
// eslint-disable-next-line no-unused-vars
var LoginRadiusDefaults = {
  /**
  * @constant
  * @default {string/boolean/number}
  */
  idPrefix: 'loginradius-',
  classPrefix: 'loginradius-',
  apiDomain: 'https://devapi.lrinternal.com/identity/v2',
  hubDomain: 'devhub.lrinternal.com',
  cloudApiDomain: 'https://devcloud-api.lrinternal.com/',
  configApiDomain: 'https://config-dev.lrinternal.com/ciam/',
  socialApiDomain: 'https://devapi.lrinternal.com/api/v2/',
  externalLibrary: 'https://s3.us-east-2.amazonaws.com/devauth.loginradius.org/external-libs/',
  isRegFormSchemaLock: false,
  isSecurityFormSchemaLock: false,
  innerHTML: false,
  autoFilledFieldforPasswordLesLogin: false,
  socialRegFormId: '',
  lrResponseCounter: 0,
  LRPhoneNo: '',
  lrCounterJwtResponse: '',
  lrCounterTokenResponse: '',
  storedTokenName: 'LRTokenKey',
  storedTwoFAToken: 'lr2fatok',
  storedSessionTokenData: 'lrSessionTokenObj',
  storedOTPAuth: 'lrotpauthver',
  storedGAAuth: 'lrgaauthver',
  storedEmailOTPAuth: 'lremailotpauthver',
  storedPushNotificationAuth: 'lrpushnotificationauthver',
  storedSQAuth: 'lrsqauthver',
  storedUidName: 'lr-user-uid',
  storedDuoAuth: 'lrduoauthver',
  storedPasskeyAuth: 'lrpasskeyauthver',
  tokenCookie: 'lr-user--token',
  fedSessCookie: 'lr_fed_sess',
  storedOrganization: 'lrorganization',
  isSSOInitFired: false,
  pingCount: 1,
  messages: {
    tokenValid: {
      'Message': 'Access token is not valid',
      'Description': 'LoginRadius Access Token is invalid, please verify the authentication response',
      'ErrorCode': 905
    },
    twofaTokenValid: {
      'Message': 'Token is not valid',
      'Description': 'Your session is not valid.'

    },
    twofaGAAuthDisable: {
      'Message': 'Already Disabled',
      'Description': 'Authenticator App is already disabled.'
    },
    twofaOTPAuthDisable: {
      'Message': 'Already Disabled',
      'Description': 'SMS authenticator is already disabled.'
    },
    twofaAuthRequired: {
      'Message': 'Cannot Disable',
      'Description': 'Two factor authentication is required, So atleast one authenticator should be required.'
    },
    invalidEmail: {
      'Message': 'Invalid Email',
      'Description': 'The email entered is not a valid email.'
    },
    invalidPhone: {
      'Message': 'Invalid Phone',
      'Description': 'The mobile number entered is not valid.'
    },
    disabledAccountLinking: 'Account Linking disabled in your account',
    noSecurityQuestions: 'There are no security questions for this application',
    invalidSott: 'Something went wrong, please try again.',
    notValidMessage: 'Error Message element not valid',
    passwordStrengthMessage: 'Password strength meter configuration is not valid.',
    otpSent: 'Verification Code Sent Successfully',
    vTokenError: {
      Message: 'Verification token not found in query string.'
    },
    notFound: 'Data not found.',
    emailNotVerified: {
      'Message': 'The email is not verified, please verify the link in your email',
      'Description': 'The email is not verified, please verify the link in your email',
      'ErrorCode': 970
    },
    phoneNotVerified: {
      'Message': 'Phone number is not verified',
      'Description': 'The provided phone number is not verified, please use a verified phone number for login.',
      'ErrorCode': 1066
    },
    blockedUser: {
      'Message': 'User is blocked',
      'Description': 'This user is blocked by site admin',
      'ErrorCode': 991
    },
    unverifiedUser: {
      'Message': 'This Uid have only traditional unverified account',
      'Description': 'This Uid have only traditional unverified account',
      'ErrorCode': 1028
    },
    captchaError: {
      'Message': 'The Captcha is required.',
      'Description': 'The Captcha is required.'
    }
  },
  buttonNames: {
    login: 'Login',
    socialregistration: 'Login',
    loginrequiredfieldsupdate: 'Login',
    registration: 'Register',
    passkeyregister: 'Register with Passkey',
    registerwithpwd: 'Continue with Password',
    passkeylogin: 'Sign In with Passkey',
    verifyemail: 'Verify',
    resetpassword: 'Reset Password',
    resetpin: 'Reset PIN',
    sociallogin: 'Login',
    otp: 'Verify',
    twofaotp: 'Verify',
    twofaemailotp: 'Verify',
    showqrcode: 'Verify',
    updatephone: 'Update',
    changephone: 'Update',
    forgotpassword: 'Send',
    forgotpin: 'Send',
    forgotpasskey: 'Send',
    securityquestions: 'Get',
    changepassword: 'Submit',
    changepin: 'Change PIN',
    resendemailverification: 'Send',
    addemail: 'Send',
    removeemail: 'Send',
    changeusername: 'Submit',
    profileeditor: 'Update Profile',
    otplogin: 'Verification Code',
    passwordlessloginbuttonlabel: 'Email me a link to Sign In',
    passwordlessloginotpbuttonlabel: 'Send Verification Code to Sign In',
    createtwofactorauthentication: '2-Step Verification',
    createPasskey: 'Add a Passkey',
    sendotp: 'Send Verification Code',
    resendotp: 'Resend via SMS',
    resendemailotp: 'Resend via Email',
    resendvoiceotp: 'Resend via Voice call',
    changenumber: 'Change Number',
    backupcode: 'Login',
    backupcodebutton: 'Try another way to Sign In',
    backupcodebackbutton: 'Back',
    generatebackupcodebutton: 'Generate Backup Codes',
    disablegoogleauthenticator: 'Disable Authenticator App',
    disablesqauthenticator: 'Disable Security Questions',
    disableemailotpauthenticator: 'Disable Email Verification',
    disableduoauthenticator: 'Disable Duo Security',
    disableotpauthenticator: 'Disable SMS Verification',
    updatesecurityquestion: 'Update Security Question',
    resetpwdbysecq: 'Reset Password By SecurityQ',
    resetpinbysecq: 'Reset PIN By SecurityQ',
    smartlogin: 'Smart Login',
    validatecode: 'Validate',
    onetouchlogin: 'Login',
    progressiveprofiling: 'Progressive Profiling',
    privacypolicyupdate: 'Accept',
    updatephone2fa: 'Update',
    pinsetup: 'Set Pin',
    pinlogin: 'Login',
    pinreauthentication: 'Verify',
    pinloginbackbtn: 'Back',
    consentlogin: 'Submit Consent',
    customeventconsent: 'Submit Consent',
    consenteditor: 'Submit Consent',
    resetBackupCode: 'Reset Backup Code',
    emailotp: 'Verify Identity via Email ',
    duomfa: 'Verify Identity via Duo Security',
    googleauthenticator: 'Verify Identity via Authenticator App',
    securityquestionsauthenticator: 'Verify Identity via Security Questions',
    mfasecurityquestion: 'Submit',
    otpauthenticator: 'Verify Identity via SMS',
    mfaselectemails: 'Submit',
    organization: 'Continue',
    lookupdomain: 'Login',
    sendverificationemail: 'Send Verification Email',
    pushnotification: 'Verify Identity via Push Notification',
    disablepushnotification: 'Disable Push Notification',
    passkeyauthenticator: 'Verify Identity via Passkey',
    disablepasskeyauthenticator: 'Disable Passkey Verification'
  },
  templates: {
    consentMainTemplate: 'loginradius_consent_custom_tmpl',
    consentGroupTemplate: 'loginradius_consent_group_tmpl',
    consentOptionTemplate: 'loginradius_consent_option_tmpl'
  },
  options: {
    passwordlessLoginEmailTemplate: '',
    callbackUrl: window.location,
    callbackInsideSameWindow: '',
    callbackType: '',
    scope: '',
    loginUrl: '',
    deleteUrl: '',
    emailTemplate: '',
    verificationUrl: '',
    verificationEmailTemplate: '',
    resetPasswordEmailTemplate: '',
    resetPassKeyEmailTemplate: '',
    resetPINEmailTemplate: '',
    resetPasswordConfirmationEmailTemplate: '',
    resetPINConfirmationEmailTemplate: '',
    smartLoginRedirectUrl: '',
    autoLoginRedirectUrl: '',
    smartLoginEmailTemplate: '',
    autoLoginEmailTemplate: '',
    smsTemplate2FA: '',
    smsTemplateForgot: '',
    smsTemplateWelcome: '',
    smsTemplateOneTouchLoginWelcome: '',
    smsTemplateOneTouchLogin: '',
    passwordlessLoginSMSTemplate: '',
    smsTemplate2FAWelcome: '',
    smsTemplatePhoneVerification: '',
    smsTemplateUpdatePhone: '',
    welcomeEmailTemplate: '',
    onetouchLoginEmailTemplate: '',
    deleteUserEmailTemplate: '',
    onetouchLoginRedirectUrl: '',
    resetPasswordUrl: '',
    resetPassKeyUrl: '',
    resetPINUrl: '',
    templateName: '',
    debugMode: false,
    tokenType: 'lrtoken',
    integrationName: '',
    smartLoginPingCount: 100,
    smartLoginPingInterval: 5,
    crossDeviceSSOPingCount: 100,
    crossDeviceSSOPingInterval: 5,
    maskSensitiveInput: false,
    enableHeaderSott: true,
    accessTokenResponse: true,
    rbaOneclickEmailTemplate: '',
    rbaOTPSmsTemplate: '',
    rbaCityEmailTemplate: '',
    rbaCountryEmailTemplate: '',
    rbaBrowserEmailTemplate: '',
    rbaIpEmailTemplate: '',
    rbaDeviceEmailTemplate: '',
    rbaCitySmsTemplate: '',
    rbaCountrySmsTemplate: '',
    rbaBrowserSmsTemplate: '',
    rbaIpSmsTemplate: '',
    rbaDeviceSmsTemplate: '',
    setLRSession: false,
    askOptionalFieldsOnProgressiveSteps: true,
    disableResendOTPButton: false,
    disableResendOTPButtonDelay: 5,
    EmailTemplate2FA: '',
    authenticatorOptionsOrder: ['emailotp', 'securityquestion', 'auth', 'sms', 'pushnotification', 'duomfa', 'passkey']
  },
  regexExpression: {
    // eslint-disable-next-line no-useless-escape
    emailRegex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneRegex: /^(\\+)|(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{8,14}$/
  },
  _uuidFormat: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  loginURLs: ['/auth/login', '/auth/email', '/auth/onetouchlogin', '/auth/password'],
  captchaActions: ['login', 'passwordlesslogin', 'onetouchlogin', 'verifyotp', 'verifyemail', 'resetpassword', 'forgotpassword', 'changepassword', 'login##otp', 'otp', 'twofaotp', 'twofaemailotp']
};

/**
* @param {Object} module lr module object
* @param {Object} lrOptions lr commonOptions object
* @description Set global LoginRadiusUtility.
* @constructor
*/
function LoginRadiusUtility (module, optionsList) {
  // var module.options = module.options == undefined ? optionsList : module.options;
  var defaultButtonsName = LoginRadiusDefaults.buttonNames;
  var utilities = new LRNameSpace.Utilities();
  var utilityModule = this;
  /**
  * @memberof LoginRadiusUtility#
  * @function elementById
  * @param  {String} id Id of element
  * @return {Object}  content  DOM element
  * @description Get html element by given id
  */
  utilityModule.elementById = function (id, debug) {
    var content = document.getElementById(id);
    if (content) {
      return content;
    } else {
      if (!debug) { module.log('Unable to find id: ' + id); }
    }
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function getThisObjectName
  * @description This function return the name of current LR object initialized with LoginRadius constructor.
  */
  utilityModule.getThisObjectName = function () {
    for (var name in module.global) {
      if (name !== 'frameElement' && name !== 'webkitStorageInfo' && name !== 'webkitIndexedDB' && name !== 'localStorage' && name !== 'sessionStorage' && module.global[name] === module) { return name; }
    }
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function serialize
  * @param  {Object} form  HTML from element
  * @return {String}  q  URL encoded text string e.g. FirstName=test&LastName=test1
  * @description This method creates a URL encoded text string by serializing form values.
  */
  utilityModule.serialize = function (form, useEmptyFields) {
    if (!form || form.nodeName !== 'FORM') {
      return;
    }
    var i;
    var j;
    var q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
      if (form.elements[i].name === '' || (!useEmptyFields && form.elements[i].value.trim() === '')) {
        continue;
      }

      if (form.elements[i].name === 'emailid' && !module.options.usernameLogin && !module.options.duplicateEmailWithUniqueUsername) {
        form.elements[i].value = form.elements[i].value.toLowerCase();
      }

      switch (form.elements[i].nodeName) {
        case 'INPUT':
          switch (form.elements[i].type) {
            case 'text':
            case 'hidden':
            case 'button':
            case 'reset':
            case 'submit':
            case 'email':
              var val = form.elements[i].name;
              if (val === 'emailid') {
                val = 'email';
              }
              if (!form.elements[i].disabled || (form.elements[i].name === 'emailid' && module.util.getQueryParameterByName('email'))) {
                q.push(val + '=' + encodeURIComponent(form.elements[i].value.trim()));
              }
              break;
            case 'password':
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
              break;

            case 'checkbox':

              // if (form.elements[i].checked) {
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].checked));
              // }
              break;
            case 'radio':
              if (form.elements[i].checked) {
                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
              }
              break;
            case 'file':
              break;
            // no default
          }
          break;
        case 'TEXTAREA':
          q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value.trim()));
          break;
        case 'SELECT':
          switch (form.elements[i].type) {
            case 'select-one':
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value.trim()));
              break;
            case 'select-multiple':
              for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                if (form.elements[i].options[j].selected) {
                  q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value.trim()));
                }
              }
              break;
            // no default
          }
          break;
        case 'BUTTON':
          switch (form.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
              q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value.trim()));
              break;
            // no default
          }
          break;
        // no default
      }
    }
    return q.join('&');
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function addJs
  * @param  {Object} module  DOM element
  * @param  {String} url  url string
  * @return {Object}  js  js script element
  * @description This method will create js script element and append into html head section.
  */
  utilityModule.addJs = function (url, _module) {
    _module = _module || document;
    var head = _module.getElementsByTagName('head')[0];
    var js = _module.createElement('script');
    js.src = url;
    js.type = 'text/javascript';
    head.appendChild(js);

    return js;
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function hashTmpl
  * @param  {String} str  a template identifier or the template itself
  * @param  {Object} data  The JSON object contains the varibale defined in template.
  * @return {null}
  * @description This is a micro templating function used to generate HTML codes using user defined templates containing variables, here the variable are surrounded with <# #> instead of <% %>
  */
  utilityModule.hashTmpl = function hashTmpl (str, data) {
    var fn = !/\W/.test(str) ? cache[str] = cache[str] ||
      (utilityModule.elementById(str) ? hashTmpl(utilityModule.elementById(str).innerHTML) : '')
      // eslint-disable-next-line no-new-func
      : new Function('obj',
        'var p=[],print=function(){p.push.apply(p,arguments);};' +
        "with(obj){p.push('" +
        str.replace(/[\r\t\n]/g, ' ').split('<#')
          .join('\t').replace(
            /((^|#>)[^\t]*)'/g, '$1\r')
          .replace(/\t=(.*?)#>/g, "',$1,'")
          .split('\t').join("');")
          .split('#>').join("p.push('")
          .split('\r').join("\\'") +
        "');}return p.join('');");
    if (typeof fn === 'function') {
      return data ? fn(data) : fn;
    }
    return '';
  };
  var cache = {};
  /**
  * @memberof LoginRadiusUtility#
  * @function tmpl
  * @param  {String} str  a template identifier or the template itself
  * @param  {Object} data  The JSON object contains the varibale defined in template.
  * @return {null}
  * @description This is a micro templating function used to generate HTML codes using s=user defined templates containing variables
  */
  utilityModule.tmpl = function tmpl (str, data) {
    // eslint-disable-next-line no-new-func
    var fn = !/\W/.test(str) ? cache[str] = cache[str] || (utilityModule.elementById(str) ? tmpl(utilityModule.elementById(str).innerHTML) : '') : new Function('obj', 'var p=[],print=function(){p.push.apply(p,arguments);};' + "with(obj){p.push('" + str.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, "',$1,'").split('\t').join("');").split('%>').join("p.push('").split('\r').join("\\'") + "');}return p.join('');");
    if (typeof fn === 'function') {
      return data ? fn(data) : fn;
    }
    return '';
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function jsonpCall
  * @param {String} url url string
  * @param {Function} handle  any type
  * @param {Function} callback  callback function
  * @param {String} action  action type
  * @description A method to make JSONP call and handling success and error reponse accordingly. (JSONP is a method for sending JSON data without worrying about cross-domain issues)
  */
  utilityModule.jsonpCall = function (url, handle, callabck, action) {
    module.$hooks.call('startProcess', action);

    // eslint-disable-next-line no-magic-numbers
    var func = callabck || 'Loginradius' + Math.floor((Math.random() * 1000000000000000000) + 1);
    window[func] = function (data) {
      handle(data);
      module.$hooks.call('endProcess', action);
    };

    var endurl = url.indexOf('?') !== -1 ? url + '&callback=' + func : url + '?callback=' + func;
    utilityModule.addJs(endurl);
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function getButtonAttribute
  * @param {String} buttonId id of button
  * @param {String} _classPrefixName  class prefix
  * @return {Object} Btn  Button element
  * @description Create button element and set attributes like btn id, class name.
  */
  utilityModule.getButtonAttribute = function (buttonId, _classPrefixName, onclickFn, value, appendWithDiv) {
    // if (buttonId.indexOf('emailotp') === 0) {
    //   defaultButtonsName[buttonId] = defaultButtonsName['emailotp'] + value;
    //   if (module.buttonsName['emailotp']) {
    //     module.buttonsName[buttonId] = module.buttonsName['emailotp'] + value;
    //   }
    // }
    var _idPrefix = _classPrefixName || LoginRadiusDefaults.idPrefix;
    var Btn;
    if (module.buttonElements[buttonId]) {
      Btn = module.buttonElements[buttonId];
      Btn = Btn.cloneNode(true);
    } else {
      Btn = document.createElement('input');
      Btn.type = 'button';
      Btn.value = module.buttonsName[buttonId] || defaultButtonsName[buttonId] || value;
    }
    if (onclickFn) {
      Btn.onclick = onclickFn;
    }
    if (value) {
      Btn.datavalue = value.trim();
    }
    Btn.id = _idPrefix + 'button-' + buttonId;
    var buttonDiv = '';
    //  if (appendWithDiv) {
    buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', _idPrefix + '-form-element-content' + ' content-' + _idPrefix + buttonId);
    buttonDiv.appendChild(Btn);
    // }
    return buttonDiv;
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function ajaxCall
  * @param {String} url url
  * @param {Object=} data  input payload for post/put call
  * @param {String} method  method type(GET/POST/PUT..)
  * @param {String} action  name of the action being performed referenced to V2JS
  * @param {Function} successHandler  callback function on successful handling of XHR call
  * @param {Object=} dsFlag  If data source is there then the datasource is returned to succeshandler funcstion along with XHR results
  * @description This functions handles all the XHR call sent through the code
  */
  utilityModule.ajaxCall = function (method, url, data, successHandler, action, dsFlag) {
    var util = this;
    var name = action;
    if (action && action.indexOf('##') !== -1) {
      name = action.split('##')[1];
    }
    if (action !== 'pingForPushNotification') {
      module.$hooks.call('startProcess', action, data);
    }
    try {
      var xhr = new XMLHttpRequest();
      if (module.options.projectionFields && action) {
        var projectionFieldsKeys = Object.keys(module.options.projectionFields);
        var mapActions = ['verifyOTP', 'updateData'];
        var mapActionsExist = false;
        var _action = action;
        if (module.LRCheckRegistration) {
          mapActionsExist = mapActions.indexOf(action) !== -1;
          _action = 'registration';
        } else if (module.LRCheckLogin) {
          mapActionsExist = mapActions.indexOf(action) !== -1;
          _action = 'login';
        }
        if (projectionFieldsKeys.indexOf(action) !== -1 || mapActionsExist) {
          var actionProjectionFields = module.options.projectionFields[_action];
          if (actionProjectionFields && actionProjectionFields.length > 0) {
            var requiredProjectedField = ['ErrorCode', 'Profile/Uid', 'Profile/IsDeleted', 'access_token', 'Profile/EmailVerified', 'Profile/PhoneIdVerified', 'Profile/PhoneId', 'PhoneId', 'PhoneIdVerified', 'EmailVerified', 'Uid', 'IsDeleted'];
            if (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication) {
              requiredProjectedField.push('SecondFactorAuthentication/SecondFactorAuthenticationToken', 'SecondFactorAuthentication/IsOTPAuthenticatorVerified', 'SecondFactorAuthentication/IsAuthenticatorVerified', 'SecondFactorAuthentication/OTPPhoneNo', 'SecondFactorAuthentication/ManualEntryCode');
            }
            actionProjectionFields = utilities.mergeObjects(actionProjectionFields, requiredProjectedField, true);

            var fieldsList = '&fields=';
            for (var i = 0; i < actionProjectionFields.length; i++) {
              if (i === actionProjectionFields.length - 1) {
                fieldsList = fieldsList + actionProjectionFields[i];
              } else {
                fieldsList = fieldsList + actionProjectionFields[i] + ',';
              }
            }
            url = url + fieldsList;
          }
        }
      }
      if (module.options.clientId && module.options.clientId.length) {
        const _url = new URL(url);
        _url.searchParams.delete('apikey');
        _url.searchParams.delete('apiKey');
        _url.searchParams.append('client_id', module.options.clientId);
        url = _url.toString();
      }
      var accessToken = module.util.getQueryParameterByName('access_token', url);
      if ((module.options.passAccessTokenInHeader && accessToken && url.indexOf(LoginRadiusDefaults.apiDomain) > -1) || ['setCustomToken', 'setToken'].indexOf(action) !== -1) {
        url = url.replace('&access_token=' + accessToken, '').replace('?access_token=' + accessToken + '&', '?').replace('?access_token=' + accessToken, '?');
        xhr.open(method, url, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      } else {
        xhr.open(method, url, true);
      }
      if (url.indexOf('/ssologin/') > -1 || action === 'setToken') {
        xhr.withCredentials = true;
      }
      if (url.indexOf('cdn') === -1 && url.indexOf('.json') === -1) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }
      // Set Fed-sess cookie if present
      let setFedSessionCookiee = false;
      for (let i = 0; i < LoginRadiusDefaults.loginURLs.length; i++) {
        if (url.indexOf(LoginRadiusDefaults.loginURLs[i]) !== -1) {
          setFedSessionCookiee = true;
          break;
        }
      }
      if (setFedSessionCookiee) {
        var cookiefedSess = LRNameSpace.cookies.getItem(LoginRadiusDefaults.fedSessCookie);
        // eslint-disable-next-line no-eq-null
        if (typeof cookiefedSess !== 'undefined' && cookiefedSess != null) {
          xhr.setRequestHeader('X-Params', cookiefedSess);
        }
      }
      if (data.sottcheck) {
        xhr.setRequestHeader('X-LoginRadius-Sott', module.options.sott);
        delete data.sottcheck;
      }
      module.$hooks.call('modifyXhrRequest', action, xhr, url);
      if (data) {
        if (typeof data === 'string' || data instanceof String) {
          data = JSON.stringify(utilities.parseQueryString(data));
        } else {
          data = JSON.stringify(data);
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
      } else { xhr.send(null); }

      xhr.onreadystatechange = function () {
        try {
          // eslint-disable-next-line no-magic-numbers
          if (xhr.readyState === 4) {
            var response = xhr.response;
            if (response) {
              var jsonResponse = JSON.parse(response);
              var responseKeys = Object.keys(jsonResponse).map(function (key) {
                return key.toLowerCase();
              });
              if (responseKeys.indexOf('errorcode') > -1) {
                module.$hooks.call('xhrEndWithError', action);
              } else {
                module.$hooks.call('xhrEndWithSuccess', action);
              }
            }
            // eslint-disable-next-line eqeqeq
            if (xhr.status == '500') {
              var _response = JSON.parse(response);
              _response.ErrorCode = '500';
              response = JSON.stringify(_response);
              module.$hooks.call('xhrEndWithError', action);
            }
            var result;
            result = util.isJsonString(response);
            if (result) {
              module.$hooks.call('successCallback', name, result, data);
              if (dsFlag) {
                successHandler(dsFlag, result);
              } else {
                successHandler(result);
              }
            }
            module.$hooks.call('endProcess', action);
          }
        } catch (error) {
          module.log(error);
        }
      };
      xhr.onerror = function () {
        module.$hooks.call('xhrEndWithError', action);
      };
    } catch (error) {
      module.log(error);
    }
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function openWindow
  * @param {String} _url Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened
  * @return {Boolean/String} results  string or boolean value
  * @description Opens a new browser window, or a new tab, depending on your browser settings..
  */
  utilityModule.openWindow = function (_url) {
    _url = _url || utilityModule.href;

    if (module.options.isMobile) {
      var loc = 'no';
      if (module.options.debugMode) {
        loc = 'yes';
      }
      var win = window.open(_url, '_blank', 'noopener=no,location=' + loc);
      win.addEventListener('loadstop', function (event) {
        var getParamValue = function (param) {
          var regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
          var results = regex.exec(event.url);
          return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        var token = getParamValue('token');

        // eslint-disable-next-line no-eq-null
        if (token != null && token !== '') {
          win.close();
          // eslint-disable-next-line no-undef
          html5passToken(token);
        }
      });
    } else {
      var parser = document.createElement('a');
      parser.href = _url;
      var provider = utilities.getQueryParameterByName('provider', parser.search);
      var clientGuid = '';
      if (module.options.noCallbackForSocialLogin) {
        // eslint-disable-next-line no-magic-numbers
        clientGuid = module.util.randomString(16);
        _url += '&nocallback=true&callbackguid=' + clientGuid;
      }
      var popupWidth = provider && provider.toLowerCase() === 'facebook' ? '650' : '450';
      var socialPopupData = module.options.customizeSocialPopup || 'menubar=1,resizable=1,width=' + popupWidth + ',height=450,scrollbars=1';
      window.open(_url, 'lrpopupchildwindow', socialPopupData);
      module.$hooks.call('socialCalls', provider, clientGuid);
      return false;
    }
  };
  /**
  * @memberof LoginRadiusUtility#
  * @function addHTMLContent
  * @param {Object} container html DOM element
  * @param {Object} data html element
  * @param {String} innerHtml string
  * @param {String} name string
  * @param {String} _classPrefixName string
  * @description Add html contents into given html container.
  */
  utilityModule.addHTMLContent = function (container, data, innerHtml, name, _classPrefixName) {
    innerHtml = innerHtml || false;
    var containerElem = utilityModule.elementById(container);
    if (containerElem || name) {
      if (!innerHtml) {
        containerElem.innerHTML = '';
      }
      if (name) {
        var buttonName = defaultButtonsName[name.toLowerCase()];
        var _idPrefix = _classPrefixName || LoginRadiusDefaults.idPrefix;
        var ref = utilityModule.elementById(_idPrefix + 'submit-' + buttonName.toLowerCase().replace(/ /g, '-'));
        utilities.insertBefore(data, ref);
      } else {
        containerElem.appendChild(data);
      }
    } else {
      var containerElem1 = utilities.elementsByClass(container);
      if (containerElem1 && containerElem1.length > 0) {
        for (var j = 0; j < containerElem1.length; j++) {
          if (!innerHtml) {
            containerElem1[j].innerHTML = '';
          }

          containerElem1[j].appendChild(data);
        }
      }
    }
  };

  /**
  * @memberof LoginRadiusUtility#
  * @function addRecaptchaJS
  * @param {Boolean=} add if true then it will add V2recaptcha JS to the application
  * @description This functiona add the JS required to add captcha setting for invisible, V2recaptcha or tenscent captcha.
  */
  utilityModule.addRecaptchaJS = function (add) {
    if (!window['hcaptcha'] && module.options.hCaptchaSiteKey) {
      let src = 'https://js.hcaptcha.com/1/api.js';
      if (module.options.invisibleRecaptcha) {
        utilityModule.addJs(src);
      } else {
        src += '?render=explicit';
        if (module.options.v2RecaptchaLanguage) {
          src += '&hl=' + module.options.v2RecaptchaLanguage;
        }
        utilityModule.addJs(src);
      }
    } else if (!window['grecaptcha']) {
      let src = 'https://www.google.com/recaptcha/api.js';
      if (module.options.v2Recaptcha || add) {
        src += '?render=explicit';
        if (module.options.v2RecaptchaLanguage) {
          src += '&hl=' + module.options.v2RecaptchaLanguage;
        }
        utilityModule.addJs(src);
      } else if (module.options.invisibleRecaptcha) {
        utilityModule.addJs(src);
      }
    }
    if (module.options.tencentCaptcha || module.options.tencentCaptchaAsFallback) {
      utilityModule.addJs('https://ssl.captcha.qq.com/TCaptcha.js');
    }
  };

  /**
   * @memberof LoginRadiusUtility#
   * @function passkeyautofill
   * @param {Function} callabck Credentaials options used in passkeys API
   */
  utilityModule.passkeyautofill = function (callback) {
    if (module.options.isPassKeysEnabled && module.options.isPasskeyAutofill) {
      const data = {};
      module.util.isPasskeyAvailable().then(function (isAutoFill) {
        if (isAutoFill) {
          const token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
          if (token) {
            module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + token, '', function (userProfile) {
              // eslint-disable-next-line no-magic-numbers
              if (userProfile.ErrorCode && userProfile.ErrorCode === 906) {
                module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/passkey/autofill/begin?apiKey=' + module.options.apiKey, '', function (response) {
                  if (!response.ErrorCode) {
                    module.util.getPassKeyCredentials(response.LoginBeginCredential, true).then((assertion) => {
                      data['assertion'] = assertion;
                      callback(data);
                    }).catch(function (e) {
                      data['error'] = e;
                      callback(data);
                    });
                  }
                });
              }
            });
          } else {
            module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/passkey/autofill/begin?apiKey=' + module.options.apiKey, '', function (response) {
              if (response.ErrorCode) {
                data['error'] = response;
                callback(data);
              } else {
                module.util.getPassKeyCredentials(response.LoginBeginCredential, true).then((assertion) => {
                  data['assertion'] = assertion;
                  callback(data);
                }).catch(function (e) {
                  data['error'] = e;
                  callback(data);
                });
              }
            });
          }
        } else {
          module.log('Auto fill not supported');
        }
      }).catch(function (e) {
        data['error'] = e;
        callback(data);
      });
    }
  };

  /**
  * @memberof LoginRadiusUtility#
  * @function renderV2Recaptcha
  * @param {Boolean} add if true then it will render captcha in the DOm even if any cpatcha has been enabled or not in dashboard or using common options.
  * @param {String} recaptchaid element HTML id where captcha needed to be rendered
  * @param {Function} callback callback function after captcha has been rendered to DOM
  * @description This is teh function to render captcha in DOM
  */
  utilityModule.renderV2Recaptcha = function (recaptchaid, add, callback) {
    var intval;
    var domRecaptcha = utilityModule.elementById(recaptchaid);
    let isGoogleCaptchEnabled = module.options.isCaptchaEnabled || module.options.v2Recaptcha || module.options.invisibleRecaptcha;
    if (isGoogleCaptchEnabled || add || module.options.tencentCaptcha || module.options.tencentCaptchaAsFallback) {
      if (domRecaptcha && domRecaptcha.innerHTML) {
        if (window.hcaptcha && module.options.hCaptchaSiteKey) {
          window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
        } else if (window.grecaptcha) {
          grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
        }
      }
      var mainIntval = setInterval(function () {
        try {
          if (!intval) {
            intval = setInterval(function () {
              try {
                if ((window.grecaptcha && grecaptcha.render) || window.hcaptcha) {
                  if (domRecaptcha && domRecaptcha.innerHTML === '') {
                    var recaptchaObj = {
                      'sitekey': module.options.hCaptchaSiteKey || module.options.v2RecaptchaSiteKey || '6LeAiwITAAAAADlqb06JIGepBs8ZRo3OZ7C0W7U3',
                      'theme': module.options.captchaTheme || 'light',

                      // eslint-disable-next-line camelcase
                      callback: function (g_response) {
                        domRecaptcha.style.display = 'block';
                        if (callback) {
                          callback(g_response);
                        }
                      }
                    };
                    if (module.options.invisibleRecaptcha) {
                      recaptchaObj['size'] = 'invisible';
                      recaptchaObj['callback'] = 'onCaptchaSubmit';
                    }
                    if (window.hcaptcha && module.options.hCaptchaSiteKey) {
                      window[recaptchaid + 'lr_recaptcha_widgets_idprefix'] = window.hcaptcha.render(recaptchaid, recaptchaObj);
                    } else {
                      window[recaptchaid + 'lr_recaptcha_widgets_idprefix'] = grecaptcha.render(recaptchaid, recaptchaObj);
                    }

                    clearInterval(intval);
                  }
                } else {
                  recaptchaid = recaptchaid + '_tencent';
                  // tencent

                  var ele = document.getElementById(recaptchaid);
                  if (ele) {
                    ele.style.display = 'block';
                  }
                  if (typeof TencentCaptcha !== 'undefined') {
                    // eslint-disable-next-line no-new
                    new TencentCaptcha(document.getElementById(recaptchaid));
                  }
                  clearInterval(intval);
                }
              } catch (e) { clearInterval(intval); module.log(e); }
            // eslint-disable-next-line no-magic-numbers
            }, 1000);

            clearInterval(mainIntval);
          }
        } catch (e) { clearInterval(mainIntval); module.log(e); }
        // eslint-disable-next-line no-magic-numbers
      }, 1000);
    }
  };

  /**
  * @memberof LoginRadiusUtility#
  * @function captchaSchema
  * @param {Boolean} add flag for add v2Recaptcha
  * @param {String} recaptchaid id of v2Recaptcha
  * @param {Function} callback callback function
  * @param {Array} schema array of captcha objects
  * @description Update captcha schema.
  */
  utilityModule.captchaSchema = function (recaptchaid, schema, add, callabck) {
    if (module.options.hCaptchaSiteKey && !utilityModule.elementById(recaptchaid)) {
      if (module.options.invisibleRecaptcha) {
        let invisibleCaptchaObj = {
          type: 'captcha',
          name: 'h-captcha-response',
          html: '<div id="' + recaptchaid + '" class="h-captcha" data-sitekey="' + module.options.hCaptchaSiteKey + '" data-size="invisible" data-callback="onCaptchaSubmit"></div>',
          display: 'Captcha',
          rules: ''
        };
        schema.push(invisibleCaptchaObj);
      } else {
        let captchaObj = {
          type: 'captcha',
          name: 'h-captcha-response',
          html: '<div id="' + recaptchaid + '" class="h-captcha" data-sitekey="' + module.options.hCaptchaSiteKey + '"></div>',
          display: 'Captcha',
          rules: 'required'
        };
        schema.push(captchaObj);
      }
    } else {
      if ((module.options.v2Recaptcha || add) && !utilityModule.elementById(recaptchaid)) {
        let captchaObj = {
          type: 'captcha',
          name: 'g-recaptcha-response',
          html: '<div id="' + recaptchaid + '" class="recaptcha_widget"></div>',
          display: 'Captcha',
          rules: 'required'
        };
        schema.push(captchaObj);
      } else if (module.options.invisibleRecaptcha && !utilityModule.elementById(recaptchaid)) {
        let sitekey = module.options.v2RecaptchaSiteKey || '6LeAiwITAAAAADlqb06JIGepBs8ZRo3OZ7C0W7U3';
        let style = '';
        if (add === 'hide') {
          style = 'display:none';
        }
        let invisibleCaptchaObj = {
          type: 'captcha',
          name: 'g-recaptcha-response',
          html: '<div id="' + recaptchaid + '" style="' + style + '" class="g-recaptcha" data-sitekey="' + sitekey + '" data-size="invisible" data-callback="onCaptchaSubmit"></div>',
          display: 'Captcha',
          rules: ''
        };
        schema.push(invisibleCaptchaObj);
      }
    }
    if (!utilityModule.elementById(recaptchaid) && (module.options.tencentCaptcha || module.options.tencentCaptchaAsFallback)) {
      window.onTencentCaptchaSubmit = function (res) {
        //  console.log(res)
        // eslint-disable-next-line eqeqeq
        if (res.ret == 0) {
          if (callabck) {
            callabck(res);
          } else {
            window.onTencentCaptchaSubmitCallback(res);
          }
        }
      };

      var tencentStyle = add ? 'style=display:none; ' : '';
      var tencentCaptchaObj = {
        type: 'captcha',
        name: 'TencentCaptcha',
        html: '<div ' + tencentStyle + ' id= "' + recaptchaid + '_tencent"  class="TencentCaptcha"  data-appid="' + module.options.tencentCaptchaAppid + '" data-cbfn="onTencentCaptchaSubmit"></div>',
        display: 'Captcha',
        rules: ''
      };
      schema.push(tencentCaptchaObj);
    }
  };

  /**
  * @memberof LoginRadiusUtility#
  * @function checkPhoneOrEmailLogin
  * @param {Object} data login credentials object
  * @return {Object} data login credentials object
  * @description Check phone or email login.
  */
  utilityModule.checkPhoneOrEmailLogin = function (data) {
    var formData = utilities.parseQueryString(data);
    if (formData.emailid || formData.email) {
      if (module.options.duplicateEmailWithUniqueUsername && !formData.username) {
        data = data.replace('emailid', 'username').replace('email', 'username');
      } else {
        var str = formData.emailid || formData.email;
        if (LoginRadiusDefaults.regexExpression.emailRegex.test(str)) {
          data = data.replace('emailid', 'email');
        } else if (module.options.phoneLogin && LoginRadiusDefaults.regexExpression.phoneRegex.test(str)) {
          data = data.replace('emailid', 'phone').replace('email', 'phone');
          data += '&phoneApi=1';
        } else if (module.options.usernameLogin) {
          data = data.replace('emailid', 'username').replace('email', 'username');
        }
      }
    }
    return data;
  };
  /**
   * @memberof LoginRadiusUtility#
   * @function disableResendOTPButton
   * @param {Object} event Js event object
   * @description This function will disable resend otp button for given time duration
   */
  utilityModule.disableResendOTPButton = function (event) {
    var delay = module.options.disableResendOTPButtonDelay;
    var btn = event.target;
    if (btn) {
      btn.disabled = true;
      // eslint-disable-next-line no-magic-numbers
      setTimeout(function () { btn.disabled = false; }, delay * 1000);
    }
  };
  /**
   * @memberof LoginRadiusUtility#
   * @function getPassKeyCredentials
   * @param {Object} options Credentaials options used in passkeys API
   * @param {boolean} isAutofill to Support autofill flow
   * @description This function will disable resend otp button for given time duration
   */
  utilityModule.getPassKeyCredentials = function (options, isAutofill) {
    return new Promise((resolve, reject) => {
      options.publicKey.challenge = module.util.base64UrlDecode(options.publicKey.challenge);
      options.publicKey.allowCredentials = options.publicKey.allowCredentials || [];
      options.publicKey.allowCredentials.forEach(function (listItem) {
        listItem.id = module.util.base64UrlDecode(listItem.id);
      });
      const opt = {
        publicKey: options.publicKey,
        mediation: isAutofill ? 'conditional' : 'optional'
      };
      navigator.credentials.get(opt).then(res => resolve(res)).catch(err => reject(err));
    });
  };
  /**
   * @memberof LoginRadiusUtility#
   * @function createPassKeyCredentials
   * @param {Object} options Credentaials options used in passkeys API
   * @description This function will disable resend otp button for given time duration
   */
  utilityModule.createPassKeyCredentials = function (options) {
    return new Promise((resolve, reject) => {
      options.publicKey.challenge = module.util.base64UrlDecode(options.publicKey.challenge);
      options.publicKey.user.id = module.util.base64UrlDecode(options.publicKey.user.id);
      if (options.publicKey.excludeCredentials) {
        for (var i = 0; i < options.publicKey.excludeCredentials.length; i++) {
          options.publicKey.excludeCredentials[i].id = module.util.base64UrlDecode(options.publicKey.excludeCredentials[i].id);
        }
      }
      navigator.credentials.create({
        publicKey: options.publicKey
      }).then(res => resolve(res)).catch(err => reject(err));
    });
  };
  /**
   * @memberof LoginRadiusUtility#
   * @function createPassKeyCredentials
   * @description This function will check if auto fill is available in browser
   */
  utilityModule.isPasskeyAvailable = function () {
    return new Promise((resolve, reject) => {
      if (window.PublicKeyCredential &&
        window.PublicKeyCredential.isConditionalMediationAvailable) {
        // Is conditional UI available in this browser?
        window.PublicKeyCredential.isConditionalMediationAvailable().then((cma) => {
          if (cma) {
            resolve(true);
          } else {
            resolve(false);
          }
        }).catch((e) => { reject(e); });
      } else {
        resolve(false);
      }
    });
  };
}

/**
 * LoginRadiusApiFramework often termed as JS form library, is an exposed API framework to use all API for CIAM functionality  while using own forms/interfaces
 * @constructor
 * @param {object} module Instance of LoginRadius Object instaniated with user given common options
 * @param {object} controllers Instance of controllers constructor to use the controller functions
 */
function LoginRadiusApiFramework (module, controllers) {
  var apiFrameWorkModule = this;

  /**
  * @memberof LoginRadiusApiFramework#
  * @function init
  * @description Intialize the API framework
  */
  apiFrameWorkModule.init = function () {
    module.lrApiFramework = true;
    // module.getAppConfiguration(function(){});
    // module.options = module.util.mergeOptions(lrDefaultOptions, options) || {};
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function login
  * @param  {Object} data input payload to login  (e.g. { emailid: "example@example.com", password: "123xxx789" }) For more example [click here]{@link https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email/}
  * @param  {Function} onSuccess  this callback will call response will be { access_token :"<token>", expires_in :"<date and time>", you can use token response.access_token and get user profile using your LoginRadius SDK.
  * @param  {Function} onError on failure this function will call ΓÇÿerrorsΓÇÖ which is an array of errors with message.  every kind of error will be returned in this method, you can run a loop on this array to identify the description and other aspect of error.
  * @description Login service module
  */
  apiFrameWorkModule.login = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.loginController(module.util.jsonToQueryString(data), null, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };
  /**
  * @memberof LoginRadiusApiFramework#
  * @function otpLogin
  * @param  {Object} data json object containing the phone number of customer { phone: ΓÇ£xxxxxxxxxxxxxxx"}
  * @param  {Function} onSuccess success callback function when the One Time Passcode is successfully sent
  * @param  {Function} onError error callback function if sending the passcode fails.
  * @description This function is used to get a One Time Password (OTP), on customer's phone number.
  */
  apiFrameWorkModule.otpLogin = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.loginOTPController(module.util.jsonToQueryString(data), null, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function twoFALogin
  * @param  {Object} data json object containing the standard fields for login like username, password or email and password.
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {Function} updatePhoneNumber callback function
  * @param  {Function} verifyOTP callback function
  * @param  {Function} resendOTP callback function
  * @param  {Function} passwordExpiry callback function
  * @param  {Function} requiredField callback function
  * @description This function allows you to initiate a traditional login if you have MFA (Multi-Factor Authentication) enabled in your LoginRadius Admin Console.
  */
  apiFrameWorkModule.twoFALogin = function (data, onSuccess, onError, updatePhoneNumber, verifyOTP, resendOTP, passwordExpiry, requiredField) {
    // eslint-disable-next-line no-empty-function
    updatePhoneNumber = updatePhoneNumber || function () { /* do nothing. */ };
    passwordExpiry = passwordExpiry || function () { /* do nothing. */ };
    requiredField = requiredField || function () { /* do nothing. */ };
    verifyOTP = verifyOTP || function () { /* do nothing. */ };
    resendOTP = resendOTP || function () { /* do nothing. */ };
    var callback = function () {
      controllers.login2FAController(module.util.jsonToQueryString(data), null, onSuccess, onError, '', passwordExpiry, requiredField, updatePhoneNumber, verifyOTP, resendOTP);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function registration
  * @param  {Object} data Data is an object that represents the user profile that you are creating.
  * @param  {Object} regSchema  The schema for the fields being provided.
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {Function} verifyOTP callback function
  * @param  {Function} resendOTP callback function
  * @description Registration service module
  */
  apiFrameWorkModule.registration = function (regSchema, data, onSuccess, onError, verifyOTP, resendOTP) {
    verifyOTP = verifyOTP || function () { /* do nothing. */ };
    resendOTP = resendOTP || function () { /* do nothing. */ };
    var callback = function () {
      controllers.registrationController(data, null, onSuccess, onError, '', regSchema, verifyOTP, resendOTP);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function forgotPassword
  * @param  {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description this function is used to send a forgot password email to a customer, the email will contain the verification token to then be consumed the resetPassword function.
  */
  apiFrameWorkModule.forgotPassword = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.forgotPasswordController(module.util.jsonToQueryString(data), '', onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function forgotPIN
  * @param  {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description this function is used to send a forgot pin email to a customer, the email will contain the verification token to then be consumed the resetPIN function.
  */
  apiFrameWorkModule.forgotPIN = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.forgotPINController(module.util.jsonToQueryString(data), '', onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPassword
  * @param  {Object} data json object contains resettoken, password and confirmpassword
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Used to reset a password
  */
  apiFrameWorkModule.resetPassword = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPasswordController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function duoVerify
  * @param  {Object} data json object contains state and code
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Used to verify duo state and code
  */
  apiFrameWorkModule.duoVerify = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.duoVerifyController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function duoVerifyByAccessToken
  * @param  {Object} data json object contains state and code
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Used to verify duo state and code by access_token
  */
  apiFrameWorkModule.duoVerifyByAccessToken = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.duoVerifyByAccessTokenController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPIN
  * @param  {Object} data json object contains resettoken, password and confirmpassword
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Used to reset PIN
  */
  apiFrameWorkModule.resetPIN = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPINController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function emailVerification
  * @param  {Object} data json object containing the verificationtoken as input, optionally it can have url or welcomeemailtemplate
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description An api exposed to verify the email
  */
  apiFrameWorkModule.emailVerification = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.emailVerificationController(data.vtoken, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function socialLogin
  * @param  {Object} data json object that contains token which has the access_token for the value.{ token: "xxxxxxxx-xxx-4337-xxxx-d624703ffe55" }
  * @param  {Function} onSuccess callback function for a successful social login
  * @param  {Function} onError error callback function
  * @param  {Function} onMissingField callback function when the automated process of getting the social profile data was not able to fill out all of the required fields.
  * @param  {Function} regSchema registration schema object
  * @param  {Function} container html element container
  * @description Implements Social login :
  * To implement Social Login, call the LRObject.api.socialLogin function along with the token, in this case the token comes
  * from the callback response after the social login process. This will also prompt a 'missing required field' filling
  * interface if some fields are not filled automatically from the data obtained via the social provider. By filling in the
  * form, the customer's account will be generated.
  */
  apiFrameWorkModule.socialLogin = function (data, onSuccess, onError, onMissingField, regSchema, container) {
    var socialLoginCallback = function () {
      if (!(module.LoginRadiusHostedPage && module.SSOinitFired)) {
        onMissingField = onMissingField || function () { /* do nothing. */ };
        regSchema = regSchema || function () { /* do nothing. */ };
        controllers.socialLoginReceiveToken(data.token, container, onSuccess, onError, null, onMissingField, regSchema);
      }
    };
    module.getAppConfiguration(socialLoginCallback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resendEmailVerification
  * @param  {Object} data json object e.g. {email: "xxx@xxx.com"}
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Resend email verification on customer's mail ID
  */
  apiFrameWorkModule.resendEmailVerification = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resendEmailVerificationController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function twoFAResendOTP
  * @param  {Object} data json object which contains the customer's phone number under the phoneNo2FA parameter. e.g. { phoneNo2FA: "xxxxxxxxxx" }
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This API is used to resend the One Time Passcode (OTP) by phone if needed during a Multi-Factor Authentication process.
  */
  apiFrameWorkModule.twoFAResendOTP = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resendOTP2FAController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function twoFAVerifyOTP
  * @param  {Object} data json object which have otp received on customer phone number e.g. { otp: "xxxx" }
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS.
  */
  apiFrameWorkModule.twoFAVerifyOTP = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.verify2FAOTPController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function twoFAUpdatePhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {Function} passwordExpiry callback function
  * @param  {Function} requiredField callback function
  * @param  {Function} verifyOTP callback function
  * @param  {Function} resendOTP callback function
  * @description Two way authentication update phone number service module
  */
  apiFrameWorkModule.twoFAUpdatePhone = function (data, onSuccess, onError, passwordExpiry, requiredField, verifyOTP, resendOTP) {
    passwordExpiry = passwordExpiry || function () { /* do nothing. */ };
    requiredField = requiredField || function () { /* do nothing. */ };
    verifyOTP = verifyOTP || function () { /* do nothing. */ };
    resendOTP = resendOTP || function () { /* do nothing. */ };
    var callback = function () {
      controllers.update2FAPhoneNumberController(data, null, onSuccess, onError, null, passwordExpiry, requiredField, verifyOTP, resendOTP);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function updatePhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {Function} verifyOTP callback function
  * @param  {Function} resendOTP callback function
  * @param  {Function} passwordExpiry callback function
  * @param  {Function} requiredField callback function
  * @description Update phone number service module
  */
  apiFrameWorkModule.updatePhone = function (data, onSuccess, onError, verifyOTP, resendOTP, passwordExpiry, requiredField) {
    passwordExpiry = passwordExpiry || function () { /* do nothing. */ };
    requiredField = requiredField || function () { /* do nothing. */ };
    verifyOTP = verifyOTP || function () { /* do nothing. */ };
    resendOTP = resendOTP || function () { /* do nothing. */ };
    var callback = function () {
      controllers.updatePhoneNumberController(module.util.jsonToQueryString(data), null, onSuccess, onError, null, passwordExpiry, requiredField, verifyOTP, resendOTP);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function verifyOTP
  * @param  {String} otp otp number
  * @param  {String} phoneToVerify string value
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Verify OTP service module
  */
  apiFrameWorkModule.verifyOTP = function (otp, phoneToVerify, onSuccess, onError) {
    var callback = function () {
      controllers.verifyOTPController(otp, phoneToVerify, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resendOTP
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Resend OTP service module
  */
  apiFrameWorkModule.resendOTP = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resendOTPController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function addEmail
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Add new email service module
  */
  apiFrameWorkModule.addEmail = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.addEmailController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function removeEmail
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Remove account email service module
  */
  apiFrameWorkModule.removeEmail = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.removeEmailController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function changeUsername
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Change account userName service module
  */
  apiFrameWorkModule.changeUsername = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.changeUsernameController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function changePassword
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Change account password
  */
  apiFrameWorkModule.changePassword = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.changePasswordController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function changePIN
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Change account pin
  */
  apiFrameWorkModule.changePIN = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.changePINController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function checkPhoneNumberAvailability
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Check phone number availability
  */
  apiFrameWorkModule.checkPhoneNumberAvailability = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.checkPhoneNumberAvailabilityController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPasswordByPhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Reset account password by phone
  */
  apiFrameWorkModule.resetPasswordByPhone = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPasswordByPhoneController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPINByPhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Reset account PIN by phone
  */
  apiFrameWorkModule.resetPINByPhone = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPINByPhoneController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function forgotPasswordbyPhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Forgot account password by phone
  */
  apiFrameWorkModule.forgotPasswordbyPhone = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.forgotPasswordbyPhoneController(module.util.jsonToQueryString(data), null, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function forgotPINbyPhone
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Forgot account PIN by phone
  */
  apiFrameWorkModule.forgotPINbyPhone = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.forgotPINbyPhoneController(module.util.jsonToQueryString(data), null, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function updateData
  * @param  {Object} data json object
  * @param  {Object} schema object
  * @param  {String} token apitoken id
  * @param  {Boolean} flag true/false value
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Upadte user data
  */
  apiFrameWorkModule.updateData = function (schema, data, token, onSuccess, onError, flag) {
    var onUpdateSuccess = onSuccess;
    var onUpdateError = onError;
    var userProfile = {};
    if (typeof onSuccess === 'object') {
      userProfile = onSuccess;
      onUpdateSuccess = onError;
      onUpdateError = flag;
    }

    var responseObject = {};
    responseObject.Profile = userProfile;
    responseObject.access_token = token;

    var callback = function () {
      controllers.updateData(responseObject, null, data, onUpdateSuccess, onUpdateError, '', schema);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function checkEmailAvailability
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Check email availability
  */
  apiFrameWorkModule.checkEmailAvailability = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.checkEmailAvailabilityController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function checkUserNameAvailability
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Check user name availability
  */
  apiFrameWorkModule.checkUserNameAvailability = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.checkUserNameAvailabilityController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPasswordBySecurityQuestion
  * @param  {Object} data json object containing the value of either email/username/phone for the account, along with the desired passsword and the question and answer.
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Reset password by security question
  */
  apiFrameWorkModule.resetPasswordBySecurityQuestion = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPasswordBySecurityQuestionController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetPINBySecurityQuestion
  * @param  {Object} data json object containing the value of either email/username/phone for the account, along with the desired pin and the question and answer.
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Reset PIN by security question
  */
  apiFrameWorkModule.resetPINBySecurityQuestion = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetPINBySecurityQuestionController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function updateSecurityQuestion
  * @param  {Object} data json object containing the questions as key and the correct answer as value. e.g. {
    "<%questionid%>": "<%answer%>",
    "<%questionid%>": "<%answer%>"},
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This function allows you to update the Answer(s) to the Security Question(s) on a given account.
  */
  apiFrameWorkModule.updateSecurityQuestion = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.updateSecurityQuestionController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetTwoFactor
  * @param  {String} data authenticatorType e.g. "otpauthenticator" or "authenticator"
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This function is used to reset the MFA configurations on the account.
  */
  apiFrameWorkModule.resetTwoFactor = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.resetTwoFactorAuthenticationController(data, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function invalidateToken
  * @param  {String} token access_token
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Invalidate tokens
  */
  apiFrameWorkModule.invalidateToken = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.invalidateToken(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function validateToken
  * @param  {String} token access_token
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This function validates an access_token.
  */
  apiFrameWorkModule.validateToken = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.validateToken(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function getSocialData
  * @param  {String} token apitoken id
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {String} endpoint endpoint of request url
  * @param  {String} paramQueryString param of request url query
  * @description Get social data service module
  */
  apiFrameWorkModule.getSocialData = function (token, onSuccess, onError, endpoint, paramQueryString) {
    var callback = function () {
      controllers.getSocialDataController(token, onSuccess, onError, endpoint, paramQueryString);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function postSocialData
  * @param  {String} token apitoken id
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {String} endpoint endpoint of request url
  * @param  {String} paramQueryString param of request url query
  * @param  {Object} postBodyJson request body json
  * @description Post social data service module
  */
  apiFrameWorkModule.postSocialData = function (token, onSuccess, onError, endpoint, paramQueryString, postBodyJson) {
    var callback = function () {
      controllers.postSocialDataController(token, onSuccess, onError, endpoint, paramQueryString, postBodyJson);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function getCustomObjects
  * @param  {String} token access_token of customer
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This function is used to get all of the custom objects associated to a customer by using the access_token.
  */
  apiFrameWorkModule.getCustomObjects = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.getCustomObjectsController(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function createCustomObject
  * @param  {String} token access_token
  * @param  {Object} customObjectJSON Object data in JSON format which we like to store
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Create custom object
  */
  apiFrameWorkModule.createCustomObject = function (token, customObjectJSON, onSuccess, onError) {
    var callback = function () {
      controllers.createCustomObjectController(token, customObjectJSON, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function getCustomObjectById
  * @param  {String} token access_token
  * @param  {String} objectrecordid object record id
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Get custom object by ID
  */
  apiFrameWorkModule.getCustomObjectById = function (token, objectrecordid, onSuccess, onError) {
    var callback = function () {
      controllers.getCustomObjectByIdController(token, objectrecordid, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function deleteCustomObjectById
  * @param  {String} token access_token of user
  * @param  {String} objectrecordid object record id
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Delete custom object by  Object Record ID
  */
  apiFrameWorkModule.deleteCustomObjectById = function (token, objectrecordid, onSuccess, onError) {
    var callback = function () {
      controllers.deleteCustomObjectController(token, objectrecordid, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function updateCustomObjectById
  * @param  {String} token access_token of user
  * @param  {String} objectrecordid object record id
  * @param  {Object} customObjectJSON custom json data, shich you want to update
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @param  {String} updateType ('replace' |  'partialreplace') can pass either 'replace' (it will fully replace the custom object with new provided json) or 'partialreplace' (it will perform an upsert type operation).
  * @description Used to update the custom objects of user by providing the access_token
  */
  apiFrameWorkModule.updateCustomObjectById = function (token, objectrecordid, customObjectJSON, onSuccess, onError, updateType) {
    var callback = function () {
      controllers.updateCustomObjectController(token, objectrecordid, customObjectJSON, updateType, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function getBackupCode
  * @param  {String} token <access_token>
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Get backup code service module
  */
  apiFrameWorkModule.getBackupCode = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.getBackupCodeController(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function resetBackupCode
  * @param  {String} token <access_token>
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description This API can be sued to implment the reset back up code functionality.
  */
  apiFrameWorkModule.resetBackupCode = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.resetBackupCodeController(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
  * @memberof LoginRadiusApiFramework#
  * @function autoLogin
  * @param  {Object} data json object
  * @param  {Function} onSuccess success callback function
  * @param  {Function} onError error callback function
  * @description Auto login service module
  */
  apiFrameWorkModule.autoLogin = apiFrameWorkModule.smartLogin = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.smartLoginController(module.util.jsonToQueryString(data), onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function verifyConsent
* @param  {Object} data json object having two properties event and isCustom
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description Used to check if consent for a particular event has been submitted or not
*/
  apiFrameWorkModule.verifyConsent = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.verifyConsentController(data, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function fetchConsentLogs
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description Used to fetch consent logs
*/
  apiFrameWorkModule.fetchConsentLogs = function (onSuccess, onError) {
    var callback = function () {
      controllers.consentLogsController(onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function updateConsent
* @param  {Object} data request payload having all consents and their corresponding accepted flag
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description This API function is used to update the consents
*/
  apiFrameWorkModule.updateConsents = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.updateConsentController(data, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function submitConsentbyConsentToken
* @param  {Object} data request payload having all consents and their corresponding accepted flag
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description This API function is used to update the consents
*/
  apiFrameWorkModule.submitConsentbyConsentToken = function (data, onSuccess, onError) {
    var consentToken = data.consentToken ? data.consentToken : '';
    if (consentToken) {
      var callback = function () {
        controllers.submitConsentController(consentToken, data, onSuccess, onError);
      };
      module.getAppConfiguration(callback);
    } else {
      onError({
        'response': 'consentToken is required parameter'
      });
      module.log('consentToken is required parameter');
    }
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function submitConsentbyAccesToken
* @param  {Object} data request payload having all consents and their corresponding accepted flag
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description This API function is used to update the consents
*/
  apiFrameWorkModule.submitConsentbyAccesToken = function (data, onSuccess, onError) {
    var callback = function () {
      controllers.customEventConsentController(data, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function oneTouchLogin
* @param  {Object} data request payload having all consents and their corresponding accepted flag
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description This API function is used to login using onetouch api
*/
  apiFrameWorkModule.oneTouchLogin = function (data, onSuccess, onError, verifyOTP, resendOTP) {
    var callback = function () {
      verifyOTP = verifyOTP || function () { /* do nothing. */ };
      resendOTP = resendOTP || function () { /* do nothing. */ };
      controllers.oneTouchLoginController(data, null, onSuccess, onError, '', true, verifyOTP, resendOTP);
    };
    module.getAppConfiguration(callback);
  };

  /**
* @memberof LoginRadiusApiFramework#
* @function oneTouchLoginVerify
* @param  {Object} data request payload having all consents and their corresponding accepted flag
* @param  {Function} onSuccess success callback function
* @param  {Function} onError error callback function
* @description This API function is used to verify one touch logni token
*/
  apiFrameWorkModule.oneTouchLoginVerify = function (data, onSuccess, onError) {
    var callback = function () {
      if (data.verificationtoken && data.email) {
        controllers.oneTouchLoginEmailVerification(data.verificationtoken, onSuccess, onError, data.email);
      } else if (data.verificationtoken) {
        controllers.oneTouchLoginEmailVerification(data.verificationtoken, onSuccess, onError);
      } else if (data.otp && data.phone) {
        controllers.verifyOTPController({ otp: data.otp, onetouchloginflag: true }, { phone: data.phone }, onSuccess, onError);
      }
    };
    module.getAppConfiguration(callback);
  };

  /**
 * @memberof LoginRadiusApiFramework#
 * @function getInvitationData
 * @param  {String} token access_token
 * @param  {Function} onSuccess success callback function
 * @param  {Function} onError error callback function
 * @description Get invitation data service module
 */
  apiFrameWorkModule.getInvitationData = function (token, onSuccess, onError) {
    var callback = function () {
      controllers.getInvitationDataController(token, onSuccess, onError);
    };
    module.getAppConfiguration(callback);
  };
}

/**
* @function setLoginRadiusDefaultSchema
* @param {Object} module lr module object
* @description Set default and constant values of LoginRadius js form Schema fields properties.
*/
function setLoginRadiusDefaultSchema (module) {
  module.organizationFormSchema = [{
    type: 'string',
    name: 'organizationname',
    display: 'Organization Name',
    rules: 'required',
    permission: 'r'
  }];
  module.lookupFormSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email Id',
    rules: 'required|valid_email',
    permission: 'r'
  }];
  module.loginFormSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email Id',
    rules: 'required|valid_email',
    permission: 'r'
  }, {
    type: 'password',
    name: 'password',
    display: 'Password',
    rules: 'required|min_length[6]|max_length[32]',
    permission: 'w'
  }];
  module.backupCodeFormSchema = [{
    type: 'string',
    name: 'backupcode',
    display: 'Backup Code',
    rules: 'required',
    permission: 'r'
  }];
  module.resetPasswordByPhoneSchema = [{
    type: 'string',
    name: 'otp',
    display: 'Verification Code',
    rules: 'required',
    permission: 'r'
  }, {
    type: 'password',
    name: 'password',
    display: 'Password',
    rules: 'required|min_length[6]|max_length[32]',
    permission: 'w'
  }];
  module.resetPINByPhoneSchema = [{
    type: 'string',
    name: 'otp',
    display: 'Verification Code',
    rules: 'required',
    permission: 'r'
  }, {
    type: 'password',
    name: 'pin',
    display: 'PIN',
    rules: 'required|min_length[4]|max_length[32]',
    permission: 'w'
  }];
  module.checkPhoneNumberSchema = [{
    type: 'string',
    name: 'phone',
    display: 'Phone Number',
    rules: 'required|valid_phoneno',
    permission: 'r'
  }];
  module.QRCodeSchema = [{
    type: 'string',
    name: 'AuthenticatorCode',
    display: 'Authenticator Code',
    rules: 'required',
    permission: 'r'
  }];

  module.getSecQSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email Id',
    rules: 'required|valid_email',
    permission: 'r'
  }];

  module.otpSchema = [{
    type: 'string',
    name: 'otp',
    display: 'Verification Code',
    rules: 'required',
    permission: 'r'
  }];

  module.forgotPasswordFormSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email',
    rules: 'required',
    permission: 'r'
  }];
  module.forgotPINFormSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email',
    rules: 'required',
    permission: 'r'
  }];
  module.forgotPassKeyFormSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email',
    rules: 'required',
    permission: 'r'
  }];
  module.smartLoginSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email Id',
    rules: 'required',
    permission: 'r'
  }];
  module.passwordLessLoginSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email',
    rules: 'required',
    permission: 'r'
  }, {
    type: 'string',
    name: 'name',
    display: 'Name',
    rules: '',
    permission: 'r'
  }];
  module.changePasswordFormSchema = [{
    type: 'password',
    name: 'oldpassword',
    display: 'Old Password',
    rules: 'required',
    permission: 'w'
  }, {
    type: 'password',
    name: 'newpassword',
    display: 'Password',
    rules: 'required|min_length[6]|max_length[32]',
    permission: 'w'
  }, {
    type: 'password',
    name: 'confirmnewpassword',
    display: 'Confirm Password',
    rules: 'required|min_length[6]|max_length[32]|matches[newpassword]',
    permission: 'w'
  }];
  module.emailSchema = module.forgotPasswordFormSchema;
  module.addEmailSchema = [{
    type: 'string',
    name: 'emailid',
    display: 'Email',
    rules: 'required|valid_email',
    permission: 'r'
  }, {
    type: 'string',
    name: 'type',
    display: 'Type',
    rules: 'required',
    permission: 'r'
  }];
  module.changeUsernameFormSchema = [{
    type: 'string',
    name: 'username',
    display: 'Username',
    rules: 'required',
    permission: 'r'
  }];
  module.changePINFormSchema = [{
    type: 'password',
    name: 'oldpin',
    display: 'Old PIN',
    rules: 'required',
    permission: 'w'
  }, {
    type: 'password',
    name: 'newpin',
    display: 'PIN',
    rules: 'required',
    permission: 'w'
  }, {
    type: 'password',
    name: 'confirmnewpin',
    display: 'Confirm PIN',
    rules: 'required|matches[newpin]',
    permission: 'w'
  }];
  module.resetPasswordFormSchema = [{
    type: 'password',
    name: 'password',
    display: 'Password',
    rules: 'required|min_length[6]|max_length[32]',
    permission: 'w'
  }, {
    type: 'password',
    name: 'confirmpassword',
    display: 'Confirm Password',
    rules: 'required|matches[password]|min_length[6]|max_length[32]',
    permission: 'w'
  }, {
    type: 'hidden',
    name: 'resettoken',
    display: '',
    rules: 'required',
    permission: 'w',
    value: ''
  }];
  module.resetPINFormSchema = [{
    type: 'password',
    name: 'pin',
    display: 'PIN',
    rules: 'required|min_length[4]|max_length[32]',
    permission: 'w'
  }, {
    type: 'password',
    name: 'confirmpin',
    display: 'Confirm PIN',
    rules: 'required|matches[pin]|min_length[4]|max_length[32]',
    permission: 'w'
  }, {
    type: 'hidden',
    name: 'resettoken',
    display: '',
    rules: 'required',
    permission: 'w',
    value: ''
  }];
  module.pinLoginFormSchema = [{
    type: 'password',
    name: 'pin',
    display: 'PIN',
    rules: 'required',
    permission: 'r'
  }];
  module.privacyPolicySchema = [{
    type: 'multi',
    name: 'acceptprivacypolicy',
    display: 'I agree to the terms of service',
    rules: '',
    permission: 'r'
  }];
  module.btnOTPSchema = {
    type: 'button',
    name: 'click',
    display: 'click',
    rules: '',
    permission: 'r',
    event: 'click',
    eventCallback: function () { /* do nothing. */ }
  };
  module.defaultBtnSchema = {
    type: 'button',
    name: 'default',
    display: 'default',
    rules: '',
    permission: 'r',
    event: 'click',
    eventCallback: function () { /* do nothing. */ }
  };
}

/**
* @param {Object} module lr module object
* @param {Object} lrOptions lr commonOptions object
* @description Set global LoginRadiusDefaults and functions.
* @constructor
*/
function setLoginRadiusModuleFunctions (module, lrOptions) {
  var lrDefaultOptions = LoginRadiusDefaults.options;
  // eslint-disable-next-line no-undef
  var commonFns = new SetLoginRadiusCommonFunctions(module);
  var controllers = new LoginRadiusControllers(module, commonFns);
  var util = module.util;
  module.version = '3.28.4';
  module.LRCheckRegistration = false;
  module.passwordlessLoginFlag = false;
  module.duoLoginFlag = false; // This flag will be used to present calling verify API if its in processing
  module.socialLoginFlag = false;
  module.LRCheckLogin = false;
  module.LRCheck2FA = false;
  module.loginAction = false;
  module.options = {};
  module.consentOptions = '';
  module.lookupOptions = '';
  module.sessionData = {
    getUid: function () {
      return module.storage.getBrowserStorage(LoginRadiusDefaults.storedUidName);
    },
    getToken: function () {
      return module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    }
  };
  module.errorMessages = [];
  module.validationMessages = [];
  module.formCustomLabel = {};
  module.formElementsTitle = {};
  module.defaultOptionField = {};
  module.formValidations = {};
  module.formPlaceholder = {};
  module.formElementAttributes = {};
  module.buttonElements = {};
  module.passwordMeterConfiguration = [];
  module.buttonsName = {};
  module.eventsName = {};

  /**
  * @function log
  * @memberof setLoginRadiusModuleFunctions#
  * @param {String} message message to be logged
  * @description This funtion is used to log error/warning message in browser if debug mode has been made true.
  */

  module.log = function (message) {
    if (module.options.debugMode) {
      if (typeof console !== 'undefined') {
        console.error(message);
      }
    }
  };
  /**
  * @memberof setLoginRadiusModuleFunctions#
  * @function customInterface
  * @param {String} selector class name
  * @param {Object} options lr options object
  * @description Render custom interface
  */
  module.customInterface = function (selector, options) {
    // module.options = util.mergeOptions(lrDefaultOptions, lrOptions) || {};
    var templateName = options.templateName || '';
    var callbackAction = function () {
      commonFns.renderCustomInterface(selector, '', templateName);
    };
    getAppConfiguration(callbackAction);
  };

  /**
  * @memberof setLoginRadiusModuleFunctions#
  * @function clearSession
  * @description Clear browser session storage
  */
  module.clearSession = function () {
    module.storage.removeBrowserStorage(LoginRadiusDefaults.storedTokenName);
    module.storage.removeBrowserStorage(LoginRadiusDefaults.storedUidName);
    module.storage.removeBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    module.storage.removeBrowserStorage(LoginRadiusDefaults.storedOrganization);
  };

  /**
 * @memberof setLoginRadiusModuleFunctions#
 * @function setSessionToken
 * @param {Object} response Login Response contaning sesssion token and expiry time
 * @return {null}
 * @description This function stores the session token along with it's expiration time into browser storage.
 */
  module.setSessionToken = function (response) {
    var sessionTokenObj = {
      'session_token': response.session_token,
      'session_expires_in': response.session_expires_in
    };
    module.storage.setBrowserStorage(LoginRadiusDefaults.storedSessionTokenData, JSON.stringify(sessionTokenObj));
  };

  /**
  * @memberof setLoginRadiusModuleFunctions#
  * @function getSessionToken
  * @return {session_token|false}
  * @description This function checks the session token and it's expiry time and if it has not been expired yet then it will return the session token otherwise false
  */
  module.getSessionToken = function () {
    var sessionTokenData = JSON.parse(module.storage.getBrowserStorage(LoginRadiusDefaults.storedSessionTokenData));
    if (sessionTokenData && sessionTokenData.session_expires_in && new Date() < new Date(sessionTokenData.session_expires_in)) {
      return sessionTokenData.session_token;
    } else {
      module.removeSessionToken();
      return false;
    }
  };

  /**
  * @memberof setLoginRadiusModuleFunctions#
  * @function removeSessionToken
  * @return {null}
  * @description This function removes the session token
  */
  module.removeSessionToken = function () {
    module.storage.removeBrowserStorage(LoginRadiusDefaults.storedSessionTokenData);
  };

  /**
  * Initialize document cookies getter/setter/remove methods
  * Not used in code but added for customer usecase fallback.
  * @module documentCookies
  * @memberof setLoginRadiusModuleFunctions#
  */
  module.documentCookies = Object.assign({}, LRNameSpace.cookies);

  /**
  * @function mapOptions
  * @memberof setLoginRadiusModuleFunctions#
  * @param {Object} appConfig lr app configuration object
  * @description Set mapping of the lr app configuration object properties
  */
  function mapOptions (appConfig) {
    var appData = {};
    lrOptions.organizationObj = appConfig.Organization;
    lrOptions.securityQuestionEnabled = appConfig.IsSecurityQuestion;
    lrOptions.appName = lrOptions.appName || appConfig.AppName;
    lrOptions.RegistrationFormSchema = appConfig.RegistrationFormSchema;
    lrOptions.loginLockedType = appConfig.LoginLockedConfiguration && appConfig.LoginLockedConfiguration.LoginLockedType;

    if (lrOptions.securityQuestionEnabled) {
      lrOptions.SecurityQuestions = appConfig.SecurityQuestions.Questions;
      lrOptions.securityQuestionsCount = lrOptions.securityQuestionsCount === undefined ? appConfig.SecurityQuestions.SecurityQuestionCount : lrOptions.securityQuestionsCount;
    }
    if (lrOptions.passwordLength === undefined && lrOptions.displayPasswordStrength && lrOptions.RegistrationFormSchema) {
      var field = util.findInSchema(lrOptions.RegistrationFormSchema, 'name', 'password');
      var str = field.rules;
      var r = str.split('|');
      var minStr = util.isSubstring('min_length[', Object.keys(r).map(function (e) {
        return r[e];
      }));
      // eslint-disable-next-line no-magic-numbers
      var min = (minStr) ? r[minStr].substring(r[minStr].lastIndexOf('min_length[') + 11, r[minStr].lastIndexOf(']')) : '';
      var maxStr = util.isSubstring('max_length[', Object.keys(r).map(function (e) {
        return r[e];
      }));
      // eslint-disable-next-line no-magic-numbers
      var max = (maxStr) ? r[maxStr].substring(r[maxStr].lastIndexOf('max_length[') + 11, r[maxStr].lastIndexOf(']')) : '';
      var passwordlength = {};
      if (min) {
        passwordlength['min'] = parseInt(min);
      }
      if (max) {
        passwordlength['max'] = parseInt(max);
      }
      lrOptions.passwordLength = passwordlength;
    }

    lrOptions.SocialSchema = appConfig.SocialSchema;
    lrOptions.maskSensitiveInput = lrOptions.encryptedAnswer || lrOptions.maskSensitiveInput;
    lrOptions.noCallbackForSocialLogin = lrOptions.noCallback !== undefined ? lrOptions.noCallback : lrOptions.noCallbackForSocialLogin;
    if (appConfig.TwoFactorAuthentication && appConfig.TwoFactorAuthentication.IsEnabled) {
      appData.optionalTwoFactorAuthentication = true;
      appData.twoFactorAuthentication = false;
      appData.qrCodeAuthentication = appConfig.TwoFactorAuthentication.IsAuthenticator;
      appData.emailOTPAuthentication = appConfig.TwoFactorAuthentication.IsEmailOTPAuthenticator;
      appData.pushNotificationAuthenticator = appConfig.TwoFactorAuthentication.IsPushAuthenticator;
      appData.securityQuestionAuthentication = appConfig.TwoFactorAuthentication.IsSecurityQuestionAuthenticator;
      appData.smsOTPAuthentication = appConfig.TwoFactorAuthentication.IsSmsOTPAuthenticator;
      appData.duoAuthentication = appConfig.TwoFactorAuthentication.IsDuoSecurityAuthenticator;
      appData.passkeyAuthenticator = appConfig.TwoFactorAuthentication.IsPasskeyAuthenticator;
      if (appConfig.TwoFactorAuthentication.IsRequired) {
        appData.optionalTwoFactorAuthentication = false;
        appData.twoFactorAuthentication = true;
      }
    }
    lrOptions.optionalTwoFactorAuthentication = lrOptions.optionalTwoFactorAuthentication === undefined ? appData.optionalTwoFactorAuthentication : lrOptions.optionalTwoFactorAuthentication;
    lrOptions.twoFactorAuthentication = lrOptions.twoFactorAuthentication === undefined ? appData.twoFactorAuthentication : lrOptions.twoFactorAuthentication;
    lrOptions.qrCodeAuthentication = lrOptions.googleAuthentication === undefined ? (lrOptions.qrCodeAuthentication === undefined ? appData.qrCodeAuthentication : lrOptions.qrCodeAuthentication) : lrOptions.googleAuthentication;
    lrOptions.phoneLogin = lrOptions.phoneLogin === undefined ? appConfig.IsPhoneLogin : lrOptions.phoneLogin;
    lrOptions.passwordlessLoginOTP = lrOptions.instantOTPLogin === undefined && lrOptions.passwordlessLoginOTP === undefined ? appConfig.IsInstantSignin.SmsOtp : lrOptions.instantOTPLogin || lrOptions.passwordlessLoginOTP;
    if (appConfig.EmailVerificationFlow === 'optional') {
      appData.optionalEmailVerification = true;
    } else if (appConfig.EmailVerificationFlow === 'disabled') {
      appData.disabledEmailVerification = true;
    }
    lrOptions.optionalEmailVerification = lrOptions.optionalEmailVerification === undefined ? appData.optionalEmailVerification : lrOptions.optionalEmailVerification;
    lrOptions.disabledEmailVerification = lrOptions.disabledEmailVerification === undefined ? appData.disabledEmailVerification : lrOptions.disabledEmailVerification;
    lrOptions.loginOnEmailVerification = lrOptions.loginOnEmailVerification === undefined ? appConfig.IsLoginOnEmailVerification : lrOptions.loginOnEmailVerification;
    lrOptions.passwordlessLogin = lrOptions.instantLinkLogin === undefined && lrOptions.passwordlessLogin === undefined ? appConfig.IsInstantSignin.EmailLink : lrOptions.instantLinkLogin || lrOptions.passwordlessLogin;
    lrOptions.askRequiredFieldForTraditionalLogin = lrOptions.askRequiredFieldForTraditionalLogin === undefined ? appConfig.AskRequiredFieldsOnTraditionalLogin : lrOptions.askRequiredFieldForTraditionalLogin;
    lrOptions.stayLogin = lrOptions.stayLogin === undefined ? appConfig.IsRememberMe : lrOptions.stayLogin;
    lrOptions.disableSignup = lrOptions.disableSignup === undefined ? appConfig.IsDisabledRegistration : lrOptions.disableSignup;
    lrOptions.riskBasedAuthentication = lrOptions.riskBasedAuthentication === undefined ? appConfig.IsRiskBasedAuthentication : lrOptions.riskBasedAuthentication;
    lrOptions.noCallbackForSocialLogin = lrOptions.noCallbackForSocialLogin === undefined ? appConfig.IsNoCallbackForSocialLogin : lrOptions.noCallbackForSocialLogin;
    lrOptions.usernameLogin = lrOptions.usernameLogin === undefined ? appConfig.IsUserNameLogin : lrOptions.usernameLogin;
    lrOptions.promptPasswordOnSocialLogin = lrOptions.promptPasswordOnSocialLogin === undefined ? appConfig.AskPasswordOnSocialLogin : lrOptions.promptPasswordOnSocialLogin;
    lrOptions.askOptionalFieldsOnRegistration = lrOptions.askOptionalFieldsOnRegistration === undefined ? appConfig.AskOptionalFieldsOnSocialSignup : lrOptions.askOptionalFieldsOnRegistration;
    lrOptions.askEmailForUnverifiedProfileAlways = lrOptions.askEmailForUnverifiedProfileAlways === undefined ? appConfig.AskEmailIdForUnverifiedUserLogin : lrOptions.askEmailForUnverifiedProfileAlways;
    lrOptions.logoutOnVerifyEmail = lrOptions.logoutOnVerifyEmail === undefined ? appConfig.IsLogoutOnEmailVerification : lrOptions.logoutOnVerifyEmail;
    lrOptions.disableAccountLinking = appConfig.IsDisabledAccountLinking;
    lrOptions.duplicateEmailWithUniqueUsername = appConfig.DuplicateEmailWithUniqueUsername;
    lrOptions.customDomain = lrOptions.customDomain || appConfig.CustomDomain;
    lrOptions.privacyPolicyConfiguration = appConfig.PrivacyPolicyConfiguration;
    lrOptions.isConsentManagementEnabled = lrOptions.IsConsentManagementEnabled === undefined ? appConfig.IsConsentManagementEnabled : lrOptions.IsConsentManagementEnabled;
    lrOptions.loginOnPasswordReset = appConfig.LoginOnPasswordReset;
    lrOptions.optionalRecaptchaConfiguration = appConfig.OptionalRecaptchaConfiguration;
    lrOptions.isVoiceOtp = appConfig.IsVoiceOTP;
    lrOptions.isB2BEnabled = appConfig.IsB2BEnabled;
    if (lrOptions.v2Recaptcha || appConfig.IsV2Recaptcha) {
      lrOptions.invisibleRecaptcha = false;
      lrOptions.v2Recaptcha = true;
    }
    if (lrOptions.invisibleRecaptcha || appConfig.IsInvisibleRecaptcha) {
      lrOptions.invisibleRecaptcha = true;
      lrOptions.v2Recaptcha = false;
    }
    lrOptions.isCaptchaEnabled = lrOptions.v2Recaptcha || lrOptions.invisibleRecaptcha;
    lrOptions.v2RecaptchaSiteKey = lrOptions.v2RecaptchaSiteKey || appConfig.V2RecaptchaSiteKey;
    lrOptions.tencentCaptchaAppid = lrOptions.tencentCaptchaAppid || appConfig.QQTencentCaptchaKey;
    // * New Captcha Config Mapping
    const captchaConfig = appConfig.CaptchaConfig;
    if (captchaConfig && captchaConfig.IsEnabled) {
      lrOptions.isCaptchaEnabled = true;
      if (captchaConfig.GoogleRecaptchaV2) {
        lrOptions.v2RecaptchaSiteKey = captchaConfig.GoogleRecaptchaV2.PublicKey;
        lrOptions.v2Recaptcha = lrOptions.v2Recaptcha === undefined ? !captchaConfig.GoogleRecaptchaV2.IsInvisibleCaptcha : lrOptions.v2Recaptcha;
        lrOptions.invisibleRecaptcha = lrOptions.invisibleRecaptcha === undefined ? captchaConfig.GoogleRecaptchaV2.IsInvisibleCaptcha : lrOptions.invisibleRecaptcha;
      }
      if (captchaConfig.QQTencentCaptcha) {
        lrOptions.tencentCaptchaAppid = captchaConfig.QQTencentCaptcha.PublicKey;
        lrOptions.tencentCaptcha = lrOptions.tencentCaptcha === undefined ? true : lrOptions.tencentCaptcha;
      }
      if (captchaConfig.GoogleRecaptchaV3) {
        lrOptions.v2RecaptchaSiteKey = captchaConfig.GoogleRecaptchaV3.PublicKey;
        lrOptions.invisibleRecaptcha = true;
        lrOptions.v2Recaptcha = false;
      }
      if (captchaConfig.HCaptcha) {
        lrOptions.hCaptchaSiteKey = lrOptions.hCaptchaSiteKey || captchaConfig.HCaptcha.PublicKey;
        lrOptions.captchaTheme = lrOptions.captchaTheme || captchaConfig.HCaptcha.IsDarkTheme ? 'dark' : 'light';
        lrOptions.invisibleRecaptcha = captchaConfig.HCaptcha.IsInvisibleCaptcha;
      }
    }

    // * Passkeys Configuration
    const passKeysConfig = appConfig.PassKeysConfig;
    if (passKeysConfig && passKeysConfig.IsEnabled) {
      lrOptions.isPassKeysEnabled = true;
      // lrOptions.isPasskeyAutofill = passKeysConfig.PasskeySelection === 'Autofill' || passKeysConfig.PasskeySelection === 'Both';
    }

    appData.isPINAuthentication = false;
    if (appConfig.PINAuthentication && appConfig.PINAuthentication.IsEnabled) {
      appData.isPINAuthentication = true;
      appData.PINConfiguration = Object.assign({}, appConfig.PINAuthentication.Configuration);
      if (lrOptions.PINConfiguration) {
        lrOptions.PINConfiguration = Object.assign({}, appData.PINConfiguration, lrOptions.PINConfiguration);
      } else {
        lrOptions.PINConfiguration = Object.assign({}, appData.PINConfiguration);
      }
    }
    lrOptions.isPINAuthentication = appData.isPINAuthentication;

    if (lrOptions.isPINAuthentication) {
      module.pinSchema = [];
      var pinSchema = util.findInSchema(lrOptions.RegistrationFormSchema, 'name', 'pin');
      if (!util.isEmpty(pinSchema)) {
        module.pinSchema.push(pinSchema);
        if (lrOptions.PINConfiguration.IsRequired && (!module.pinSchema[0].rules || module.pinSchema[0].rules.indexOf('required') === -1)) {
          module.pinSchema[0].rules = module.pinSchema[0].rules ? [module.pinSchema[0].rules, 'required'].join('|') : 'required';
        }
        var confirmPinSchema = util.findInSchema(lrOptions.RegistrationFormSchema, 'name', 'confirmpin');
        if (!util.isEmpty(confirmPinSchema)) {
          module.pinSchema.push(confirmPinSchema);
        }
      } else {
        module.log('Pin schema is not defined');
      }
    }
    if (lrOptions.isConsentManagementEnabled) {
      commonFns.setConsentTemplate();
    }
    lrOptions.emailOTPAuthentication = appData.emailOTPAuthentication;
    lrOptions.smsOTPAuthentication = appData.smsOTPAuthentication;
    lrOptions.duoAuthentication = appData.duoAuthentication;
    lrOptions.securityQuestionAuthentication = appData.securityQuestionAuthentication;
    lrOptions.templateVerificationTypes = appConfig.TemplateVerificationTypes;
    lrOptions.pushNotificationAuthentication = appData.pushNotificationAuthenticator;
    lrOptions.passkeyAuthentication = appData.passkeyAuthenticator;
  }

  var callbacks = [];

  /**
  * @function getAppConfiguration
  * @memberof setLoginRadiusModuleFunctions#
  * @param {Array} appcallbackConfig local array variable
  * @description Get lr app configuration object properties
  */
  function getAppConfiguration (callback) {
    try {
      module.options = util.mergeOptions(module.options, lrOptions);

      if (module.options.apiCustomDomain) {
        var _apiDomain = LoginRadiusDefaults.apiDomain;
        LoginRadiusDefaults.apiDomain = _apiDomain.replace(/https:.*\/identity/, 'https://' + module.options.apiCustomDomain + '/identity');

        var _socialApiDomain = LoginRadiusDefaults.socialApiDomain;
        LoginRadiusDefaults.socialApiDomain = _socialApiDomain.replace(/https:.*\/api/, 'https://' + module.options.apiCustomDomain + '/api');
      }
      if (module.options.cloudApiCustomDomain) {
        var _cloudApiDomain = LoginRadiusDefaults.cloudApiDomain;
        LoginRadiusDefaults.cloudApiDomain = _cloudApiDomain.replace(/https:.*\.com/, 'https://' + module.options.cloudApiCustomDomain);
      }

      const organizationFormRender = function (container, onSuccess, classPrefix) {
        commonFns.createForm(module.organizationFormSchema, 'organization', container, function (data) {
          var parsedData = module.util.parseQueryString(data);
          module.options.organization = parsedData.organizationname;
          onSuccess();
        });
      };
      var toRenderOrganization = module.options.isB2BEnabled ? (module.options.promptOrganization ? module.options.organization : true) : true;
      if (!module.isApiCallingStarted && !toRenderOrganization) {
      // module.options = lrOptions;
        module.isApiCallingStarted = false;
        callbacks.push(callback);
        if (module.useraction === 'organization') {
          organizationFormRender(module.currentActionOptions[module.useraction].container, function () {
            getAppConfiguration(function (appConfig) {
              if (!appConfig.ErrorCode) {
                var formElement = document.getElementsByName('loginradius-organization')[0];
                if (formElement) {
                  formElement.remove();
                }
                module.currentActionOptions[module.useraction].onSuccess(appConfig);
              } else {
                module.isApiCallingStarted = false;
                module.currentActionOptions[module.useraction].onError(appConfig);
              }
            });
          }, module.currentActionOptions[module.useraction].classPrefix || '');
        }
      } else if (!module.isApiCallingStarted && toRenderOrganization) {
        module.isApiCallingStarted = true;
        callbacks.push(callback);
        var _orgName = module.storage.getBrowserStorage(LoginRadiusDefaults.storedOrganization);
        var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
        if (module.LoginRadiusHostedPage) {
          token = module.storage.getBrowserStorage('lr-session-token');
        }
        var url = LoginRadiusDefaults.configApiDomain + 'appInfo?apikey=' + lrOptions.apiKey;
        if (module.options.isB2BEnabled) {
          if (module.options.organization) {
            url += '&org_name=' + module.options.organization;
          } else if (_orgName && token) {
            url += '&org_name=' + _orgName;
          }
        }
        if (token) {
          url += '&autolookupproviders=true';
        }
        util.ajaxCall('get', url, '', function (appConfig) {
          var configHandler = function (appConfig) {
            if (!appConfig.ErrorCode) {
              module.storage.removeBrowserStorage(LoginRadiusDefaults.storedOrganization);
              if (appConfig.Organization && appConfig.Organization.Name) {
                module.storage.setBrowserStorage(LoginRadiusDefaults.storedOrganization, appConfig.Organization.Name);
              }
              mapOptions(appConfig);

              lrOptions = util.mergeOptions(lrDefaultOptions, lrOptions);
            } else {
              module.isApiCallingStarted = false;
            }
            module.options = lrOptions;
            module.appConfigInfoCalled = true;
            // callback();
            for (var i = 0; i < callbacks.length; i++) {
              if (typeof callbacks[i] === 'function') {
                callbacks[i](appConfig);
              }
            }
          };
          if (appConfig.IsAutoLookUpEnabled) {
            const lookupFormRender = function (container, onSuccess) {
              commonFns.createForm(module.lookupFormSchema, 'lookupdomain', container, function (data) {
                var parsedData = module.util.parseQueryString(data);
                module.$hooks.register('afterFormRender', function (name, _container, _classPrefix, form) {
                  if (name === 'login') {
                    form.elements[0].value = parsedData.email;
                  }
                });
                onSuccess(parsedData);
              });
            };
            if (module.currentActionOptions && module.currentActionOptions['login']['container']) {
              configHandler(appConfig);
              lookupFormRender(module.currentActionOptions['login']['container'], function (parsedData) {
                var lookupCallbackHandler = function () {
                  if (module.lookupOptions && module.lookupOptions.Provider && module.lookupOptions.Provider.Endpoint) {
                    var query = commonFns.addSocialEndpointOptions();
                    var objectName = module.util.getThisObjectName();
                    window[objectName].util.openWindow(decodeURIComponent(module.lookupOptions.Provider.Endpoint + query));
                    module.isLookupApiCallingStarted = false;
                    module.lookupOptions = '';
                  } else {
                    configHandler(appConfig);
                  }
                };

                module.getAutoLookupDomainConfiguration(parsedData.email, lookupCallbackHandler);
              });
            } else {
              configHandler(appConfig);
            }
          } else {
            configHandler(appConfig);
          }
        }, 'registrationSchema');
      } else if (module.isApiCallingStarted) {
        if (module.appConfigInfoCalled) {
          callback();
        } else {
          if (module.useraction === 'logout') {
            module.isApiCallingStarted = false;
            getAppConfiguration(callback);
          } else {
            callbacks.push(callback);
          }
        }
      }
    } catch (e) {
      module.log(e);
    }
  }

  var consentCallbacks = [];
  /**
  * @function getConsentConfiguration
  * @memberof setLoginRadiusModuleFunctions#
  * @param {Function} callback callback function
  * @description Get lr consent configuration object properties
  */
  module.getConsentConfiguration = function (callback) {
    if (!module.isConsentApiCallingStarted && module.consentOptions === '') {
      module.isConsentApiCallingStarted = true;
      consentCallbacks.push(callback);
      util.ajaxCall('get', LoginRadiusDefaults.configApiDomain + 'consent?apiKey=' + module.options.apiKey, '', function (response) {
        if (response) {
          module.consentOptions = {};
          module.consentsList = {};
          var eventKey = '';
          for (var i = 0; i < response.length; i++) {
            for (var j = 0; j < response[i].Events.length; j++) {
              eventKey = response[i].Events[j].Name;
              if (response[i].Events[j].IsCustom === 'true') {
                eventKey = 'custom_' + eventKey;
              }
              module.consentOptions[eventKey] = {};
              module.consentOptions[eventKey].ConsentForm = response[i].ConsentForm;
              module.consentOptions[eventKey].TermOfService = response[i].TermOfService;
              module.consentOptions[eventKey].PrivacyPolicy = response[i].PrivacyPolicy;
            }
            for (var k = 0; k < response[i].ConsentForm.length; k++) {
              var consentForm = response[i].ConsentForm[k];
              for (var m = 0; m < consentForm.Consents.length; m++) {
                if (!module.consentsList[consentForm.Consents[m].ConsentId]) {
                  module.consentsList[consentForm.Consents[m].ConsentId] = consentForm.Consents[m];
                }
              }
            }
          }
          for (var l = 0; l < consentCallbacks.length; l++) {
            consentCallbacks[l](module.consentOptions);
          }
        } else {
          module.isConsentApiCallingStarted = false;
        }
      });
    } else if (module.isConsentApiCallingStarted) {
      if (module.consentOptions !== '') {
        callback(module.consentOptions);
      } else {
        consentCallbacks.push(callback);
      }
    }
  };

  var lookupCallbacks = [];
  module.getAutoLookupDomainConfiguration = function (email, callback) {
    if (!module.isLookupApiCallingStarted && module.lookupOptions === '') {
      module.isLookupApiCallingStarted = true;
      lookupCallbacks.push(callback);
      util.ajaxCall('get', LoginRadiusDefaults.configApiDomain + 'lookup?apiKey=' + module.options.apiKey + '&email=' + email, '', function (response) {
        if (response) {
          module.lookupOptions = response;
          lookupCallbacks[0](module.lookupOptions);
        } else {
          module.isLookupApiCallingStarted = false;
        }
      });
    } else if (module.isLookupApiCallingStarted) {
      if (module.lookupOptions !== '') {
        callback(module.lookupOptions);
      } else {
        lookupCallbacks.push(callback);
      }
    }
  };

  /**
  * @memberof setLoginRadiusModuleFunctions#
  * @description Set lr app configuration on module.getAppConfiguration object
  */
  module.getAppConfiguration = getAppConfiguration;

  /**
  * @description Create module.progressiveProfiling object
  */
  module.progressiveProfiling = new LRNameSpace.ProgressiveProfiling(module, commonFns, controllers, LoginRadiusDefaults);

  /**
  * @function progressiveProfiling.init
  * @description Initialize progressiveProfiling
  */
  module.progressiveProfiling.init = function () {
    var callback = function () {
      module.progressiveProfiling.fetchSchema(function (pschema) {
        module.progressiveProfilingSchema = pschema;
        module.$hooks.register('registrationSchemaFilter', function (regSchema, userProfile) {
          if (module.options.progressiveProfilingTraditional) {
            module.LoggedinSocialProvderProfile = userProfile;
          }
        });
      }, 'progressiveProfilingSchema');
    };
    getAppConfiguration(callback);
  };
}

/**
* @function LoginRadiusHooksModel
* @param {Object} module lr module object
* @description Initialization of LoginRadius Hooks
*/
function LoginRadiusHooksModel (module) {
  // start hook model
  var util = module.util;
  var messages = LoginRadiusDefaults.messages;

  /**
  * Initialize lr hooks object module.
  * Hooks provideing customizations on LoginRadius User Registration Interface configured on your page
  * @module $hooks
  */
  module.$hooks = {
    hooks: [],
    /**
    * @method register
    * @param {String} name name of the hooks action
    * @param {Function} callback callback function
    * @param {Number} priority priority of calling hooks
    * @description Initialize lr hooks register function
    */
    register: function (name, callback, priority) {
      if (typeof module.$hooks.hooks[name] === 'undefined') {
        module.$hooks.hooks[name] = [];
      }
      if (parseInt(priority, 10) === priority) { // should be a valid integer
        if (module.$hooks.hooks[name].length > priority + 1) {
          module.$hooks.hooks[name].splice(priority, 0, callback);
        } else {
          module.$hooks.hooks[name].push(callback);
        }
      } else {
        module.$hooks.hooks[name].push(callback);
      }
    },
    /**
    * @method call
    * @param {String} name name of the hooks action
    * @description Initialize lr hooks call function
    */
    call: function (name) {
      var args = Array.prototype.splice.call(arguments, 1);
      if (typeof module.$hooks.hooks[name] !== 'undefined') {
        for (var i = 0, len = module.$hooks.hooks[name].length; i < len; ++i) {
          if (module.$hooks.hooks[name] && module.$hooks.hooks[name][i]) {
            module.$hooks.hooks[name][i].apply(null, args);
          }
        }
      }
    }
  };
  /**
   * Register the 'addEventOnElement' hook.
   * @description This hook allows you to specify any of the form elements generated by LoginRadiusV2.js and attach them to an event so that you can handle them further.
   */
  module.$hooks.register('addEventOnElement', function (eventsObj) {
    util.extend(module.eventsName, eventsObj);
  });

  /**
   * Register the 'mapErrorMessages' hook.
   * @description This hook allows you to write custom error messages and descriptions based on the error code generated by LoginRadius.
   */
  module.$hooks.register(
    'mapErrorMessages',
    function (msg) {
      if (msg.code && msg.message) {
        module.errorMessages.push(msg);
      } else if (util.isArray(msg)) {
        for (var i = 0; i < msg.length; i++) {
          if (msg[i].code && msg[i].message) {
            module.errorMessages.push(msg[i]);
          } else {
            // throw new Error(messages.notValidMessage);
            // eslint-disable-next-line no-undef
            module.log(messages.notValidMessage);
          }
        }
      } else {
        // throw new Error(messages.notValidMessage);
        // eslint-disable-next-line no-undef
        module.log(messages.notValidMessage);
      }
    }
  );

  /**
   * Register the 'passwordMeterConfiguration' hook.
   * @description This hook will Configure the Password strength parameter to User Registration JS.
   */
  module.$hooks.register(
    'passwordMeterConfiguration',
    function (config) {
      if (util.isArray(config)) {
        util.extend(module.passwordMeterConfiguration, config);
      } else {
        // throw new Error(passwordStrengthMessage);
        // eslint-disable-next-line no-undef
        module.log(messages.passwordStrengthMessage);
      }
    });

  /**
   * Register the 'setButtonsName' hook.
   * @description This hook provides you with quick and easy way to customize the button name of your form.
   */
  module.$hooks.register(
    'setButtonsName',
    function (buttons) {
      var key; var keys = Object.keys(buttons);
      var n = keys.length;
      var buttonsObj = {};
      while (n--) {
        key = keys[n];
        buttonsObj[key.toLowerCase()] = buttons[key];
      }
      util.extend(module.buttonsName, buttonsObj);
    });

  /**
   * Register the 'mapValidationMessages' hook.
   * @description This hook allows writing custom validation message by rules generated from LoginRadius. %s will be replaced by field name.
   */
  module.$hooks.register(
    'mapValidationMessages',
    function (msg) {
      if (msg.rule && msg.message) {
        module.validationMessages.push(msg);
      } else if (util.isArray(msg)) {
        for (var i = 0; i < msg.length; i++) {
          if (msg[i].rule && msg[i].message) {
            module.validationMessages.push(msg[i]);
          } else {
            // throw new Error(messages.notValidMessage);
            // eslint-disable-next-line no-undef
            module.log(messages.notValidMessage);
          }
        }
      } else {
        // throw new Error(messages.notValidMessage);
        // eslint-disable-next-line no-undef
        module.log(messages.notValidMessage);
      }
    });

  /**
   * Register the 'customizeFormLabel' hook.
   * @description This hook provides you with quick and easy way to access and customise the label for your user registration form.
   */
  module.$hooks.register(
    'customizeFormLabel',
    function (labels) {
      util.extend(module.formCustomLabel, labels);
    }
  );

  /**
   * Register the 'customizeElementTitle' hook.
   * @description This hook provides you to customize element title.
   */
  module.$hooks.register(
    'customizeElementTitle',
    function (titles) {
      util.extend(module.formElementsTitle, titles);
    }
  );

  /**
   * Register the 'defaultChoiceOption' hook.
   * @description This hook helps you to set the default value in drop down fields for registration service.
   */
  module.$hooks.register(
    'defaultChoiceOption',
    function (fields) {
      util.extend(module.defaultOptionField, fields);
    }
  );

  /**
   * Register the 'customizeFormPlaceholder' hook.
   * @description This hook helps you set up customized placeholders for form elements.
   */
  module.$hooks.register(
    'customizeFormPlaceholder',
    function (placeholders) {
      util.extend(module.formPlaceholder, placeholders);
    }
  );

  /**
   * Register the 'formValidationRules' hook.
   * @description This hook allows you to add validations to your form fields.
   */
  module.$hooks.register(
    'formValidationRules',
    function (validations) {
      util.extend(module.formValidations, validations);
    }
  );

  /**
   * Register the 'formAttributes' hook.
   * @description This hook allows to append custom attributes to LoginRadius form fields, these attributes are HTML attribute that modifies an HTML element type.
   */
  module.$hooks.register(
    'formAttributes',
    function (attributes) {
      util.extend(module.formElementAttributes, attributes);
    }
  );

  /**
   * Register the 'buttonAttributes' hook.
   * @description This hook allows you to add validations to your button fields.
   */
  module.$hooks.register(
    'buttonAttributes',
    function (buttons) {
      util.extend(module.buttonElements, buttons);
    }
  );

  /**
   * Register the 'addFormCaptcha' hook.
   * @description This hooks will insert your captcha in a specific div and pass it a call back function.
   */
  module.$hooks.register(
    'addFormCaptcha',
    function (container, callabck, type, captchaIdName) {
      module.getAppConfiguration(function () {
        if (type) {
          module.options[type] = true;
        }
        var recaptchaid = captchaIdName || container + 'recaptcha_widget';
        // var domRecaptcha = util.elementById(recaptchaid, true);
        util.addRecaptchaJS();
        var schema = [];
        if (!module.util.elementById(recaptchaid)) {
          util.captchaSchema(recaptchaid, schema, false, callabck);
          var elem = document.createElement('div');
          elem.setAttribute('name', schema[0].name);
          if (module.options.invisibleRecaptcha && callabck) {
            var name = callabck.toString();
            // eslint-disable-next-line no-useless-escape
            var reg = /function ([^\(]*)/;
            name = reg.exec(name)[1];
            schema[0].html = schema[0].html.replace('onCaptchaSubmit', name);
          }
          elem.innerHTML = schema[0].html;
          util.addHTMLContent(container, elem, true);
        }
        util.renderV2Recaptcha(recaptchaid, false, callabck);
      });
    }
  );

  /**
   * Register the 'addFormCaptchaExecute' hook.
   * @description When using Google's Invisible reCAPTCHA or Tencent Captcha you also have to excute the captcha then this can be achieved with the this hook.
   */
  module.$hooks.register(
    'addFormCaptchaExecute',
    function (container, useSame, callback) {
      var recaptchaid = useSame ? container : container + 'recaptcha_widget';
      var tencentCaptchaId = util.elementById(recaptchaid + '_tencent');
      if (module.options.invisibleRecaptcha) {
        var mainIntvall = setInterval(function () {
          try {
            if (typeof window.hcaptcha !== 'undefined' && module.options.hCaptchaSiteKey) {
              try {
                window.hcaptcha.execute(window[recaptchaid]);
              } catch (error) {
              // return;
              }
              clearInterval(mainIntvall);
            } else if (typeof grecaptcha !== 'undefined') {
              try {
                grecaptcha.execute(window[recaptchaid]);
              } catch (error) {
              // return;
              }
              clearInterval(mainIntvall);
            }
          } catch (e) { clearInterval(mainIntvall); module.log(e); }
          // eslint-disable-next-line no-magic-numbers
        }, 1000);
      } else if (tencentCaptchaId && tencentCaptchaId.style.display !== 'none' && (module.options.tencentCaptcha || (module.options.tencentCaptchaAsFallback && !window.grecaptcha))) {
        tencentCaptchaId.click();
      } else if (module.options.isCaptchaEnabled) {
        var eVal = { 'error': LoginRadiusDefaults.messages.captchaError };
        if (module.options.hCaptchaSiteKey) {
          var hValue = document.querySelector("textarea[name*='h-captcha-response']");
          if (hValue) {
            if (hValue.value) {
              var sVal = { 'success': hValue.value };
              callback(sVal);
            } else {
              callback(eVal);
            }
          }
        }
        if (module.options.v2RecaptchaSiteKey) {
          var gReValue = document.querySelector("textarea[name*='g-recaptcha-response']");
          if (gReValue) {
            if (gReValue.value) {
              var sgVal = { 'success': gReValue.value };
              callback(sgVal);
            } else {
              callback(eVal);
            }
          }
        }
      }
    }
  );

  function handleSecurityQuestionLockout (data, name) {
    if (module.options.securityQuestionEnabled) {
      var secqdata = util.jsonToQueryString(JSON.parse(data));
      var controllers = new LoginRadiusControllers(module);
      controllers.getSecurityQuestionsController(secqdata, function (_sschema) {
        if (_sschema.length > 0) {
          for (var i = 0; i < _sschema.length; i++) {
            if (secqdata.indexOf(_sschema[i].name) !== -1) {
              _sschema.splice(i, 1);
            }
          }
        }
        if (_sschema.length > 0) {
          var div = document.createElement('div');
          var validateSchema = [];
          var prefix = module.LRPrefix.split('##');
          // eslint-disable-next-line no-undef
          var commonFns = new SetLoginRadiusCommonFunctions(module);
          commonFns.createFormFields(_sschema, div, name, validateSchema, prefix[0], prefix[1]);
          // eslint-disable-next-line no-new
          new FormValidator(prefix[1] + name, validateSchema, function (_errors) {
            module.mergeFormErrors = {};
            module.mergeFormErrors = _errors;
          });
          module.$hooks.register('startProcess', function (action, _data) {
            var secAns = {};
            for (var j = 0; j < _sschema.length; j++) {
              if (_data && _data[_sschema[j].name]) {
                secAns[_sschema[j].name] = _data[_sschema[j].name];
                delete _data[_sschema[j].name];
              }
            }
            if (_data) {
              _data.securityanswer = secAns;
            }
          });
          module.util.addHTMLContent('', div, true, name, prefix[0]);
        }
      });
    }
  }

  function handleCaptchaErrorResponse (recaptchaid) {
    var domRecaptcha = module.util.elementById(recaptchaid, true);
    if (domRecaptcha) {
      domRecaptcha.style.display = 'block';
    }
    if (window.grecaptcha && domRecaptcha && domRecaptcha.innerHTML !== '') {
      grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
    } else {
      // module.options.v2Recaptcha = true;
      module.util.renderV2Recaptcha(recaptchaid, false);
    }
  }
  module.$hooks.register('successCallback', function (action, result, data) {
    var name = '';
    if (action) {
      module.$hooks.register('setCurrentAction', function () {
        module.storage.setBrowserStorage('LRSetSafariToken', action);
      });
      name = action.toLowerCase() === 'verifyotp' ? 'otp' : action.toLowerCase();
    }
    // eslint-disable-next-line eqeqeq
    if (result.ErrorCode == '1132') {
      if (module.LRCheckLogin || !module.LRCheck2FA || (module.LRCheck2FA && action === 'twofaotp')) {
        if (!module.options.v2Recaptcha && !module.options.invisibleRecaptcha && !module.options.tencentCaptcha && !module.options.tencentCaptchaAsFallback) {
          module.options.v2Recaptcha = true;
        }
        if (name === 'verifyemail') {
          util.elementById('loginradius-submit-verify').style.display = 'block';
        }
        var recaptchaid = module.LRPrefix.replace('##', '') + 'recaptcha_widget_' + name;
        handleCaptchaErrorResponse(recaptchaid);
      }
      // eslint-disable-next-line eqeqeq
    } else if (result.ErrorCode == '1148' || result.ErrorCode == '1165') {
      var _data = util.parseString(data);
      if (_data && !_data.hasOwnProperty('securityanswer')) {
        handleSecurityQuestionLockout(data, name);
      }
      // eslint-disable-next-line eqeqeq
    } else if (result.ErrorCode == '1194') {
      handlePrivacyPolicyAccept(result, action);
      // eslint-disable-next-line eqeqeq
    } else if (result.ErrorCode == '1243') {
      handlePINConfiguration(result, action);
      // eslint-disable-next-line no-magic-numbers
    } else if (result.ErrorCode === 1226 && result.Data && result.Data.ConsentToken && !module.lrApiFramework) {
      module.getConsentConfiguration(function (consentObject) {
        handleConsentConfiguration(result, action, consentObject);
      });
    }
  });

  function handleConsentConfiguration (result, action, consentObject) {
    var consentToken = result.Data.ConsentToken;
    var acceptedConsents;
    if (result.Data.ConsentProfile && result.Data.ConsentProfile.Consents && result.Data.ConsentProfile.Consents.Options) {
      acceptedConsents = result.Data.ConsentProfile.Consents.Options;
    }
    // eslint-disable-next-line no-undef
    var commonFns = new SetLoginRadiusCommonFunctions(module);
    var controllers = new LoginRadiusControllers(module, commonFns);
    var consentData = '';
    var eventsArray = [];
    var consentEventData = [];
    for (var i = 0; i < result.Data.Events.length; i++) {
      eventsArray.push(result.Data.Events[i].Name);
    }
    module.$hooks.call('getCurrentActionOptions', action);
    // eslint-disable-next-line no-empty-function
    var onSuccess = function () { };
    // eslint-disable-next-line no-empty-function
    var onError = function () { };
    var _classPrefix = '';
    var _container = '';
    if (module.currentActionOptions[action]) {
      onSuccess = module.currentActionOptions[action].onSuccess || onSuccess;
      onError = module.currentActionOptions[action].onError || onError;
      _classPrefix = module.currentActionOptions[action].classPrefix || _classPrefix;
      _container = module.currentActionOptions[action].container || '';
    }
    _container = _container || module.currentLRContainer;

    var showConsentForms = function (_consentObject, eventName) {
      var consentSchema = [];
      var consentInterface = commonFns.createConsentInterface(_consentObject[eventName], acceptedConsents);
      if (consentInterface !== '') {
        consentSchema.push({
          'html': consentInterface,
          'type': 'html',
          'name': 'consent'
        });
        commonFns.createForm(consentSchema, 'consentlogin', _container, function (data) {
          var errors = commonFns.consentValidation(data, eventName);
          if (errors.length > 0) {
            onError(commonFns.setMappedMessage(errors));
          } else {
            consentData = consentData ? consentData + '&' + data : data;
            consentEventData.push({
              'Event': eventName,
              'IsCustom': false
            });
            eventsArray.splice(0, 1);
            if (eventsArray.length > 0) {
              showConsentForms(_consentObject, eventsArray[0]);
            } else {
              var objData = module.util.parseQueryString(consentData);
              var consentOptions = [];
              for (var key in objData) {
                var newLey = key.replace('consent_', '');
                consentOptions.push({
                  'ConsentOptionId': newLey,
                  'IsAccepted': objData[key]
                });
              }
              objData = {};
              if (consentOptions.length > 0) {
                objData['Events'] = consentEventData;
                objData['Data'] = consentOptions;
              }
              controllers.submitConsentController(consentToken, objData, onSuccess, onError, _container, _classPrefix, action);
            }
          }
        }, function (errors) {
          onError(commonFns.setMappedMessage(errors));
        });
      }
    };
    if (action === 'socialLogin') {
      module.$hooks.call('socialLoginFormRender');
    }
    showConsentForms(consentObject, eventsArray[0]);
  }

  function handlePINConfiguration (result, action) {
    if (module.pinSchema && module.pinSchema.length) {
      var pinAuthToken = result.Data.PINAuthToken;
      // eslint-disable-next-line no-undef
      var commonFns = new SetLoginRadiusCommonFunctions(module);
      commonFns.setPINRule(util.findInSchema(module.pinSchema, 'name', 'confirmpin'));
      var controllers = new LoginRadiusControllers(module, commonFns);
      module.$hooks.call('getCurrentActionOptions', action);
      // eslint-disable-next-line no-empty-function
      var onSuccess = function () { };
      // eslint-disable-next-line no-empty-function
      var onError = function () { };
      var _classPrefix = '';
      if (module.currentActionOptions[action]) {
        onSuccess = module.currentActionOptions[action].onSuccess || onSuccess;
        onError = module.currentActionOptions[action].onError || onError;
        _classPrefix = module.currentActionOptions[action].classPrefix || _classPrefix;
      }
      commonFns.createForm(module.pinSchema, 'pinSetup', module.currentLRContainer, function (data) {
        controllers.configurePINController(pinAuthToken, data, onSuccess, onError, module.currentLRContainer, _classPrefix);
      }, function (errors) {
        onError(commonFns.setMappedMessage(errors));
      });
    } else {
      module.log('Pin Schema is not defined in the schema');
    }
  }

  function handlePrivacyPolicyAccept (result, action) {
    var accessToken = '';
    var privacySchema = module.privacyPolicySchema.slice();
    privacySchema[0].rules = module.options.privacyPolicyConfiguration.Mode === 'Strict' ? 'required' : '';
    // eslint-disable-next-line no-undef
    var commonFns = new SetLoginRadiusCommonFunctions(module);
    var controllers = new LoginRadiusControllers(module, commonFns);
    module.$hooks.call('getCurrentActionOptions', action);
    // eslint-disable-next-line no-empty-function
    var onSuccess = function () { };
    // eslint-disable-next-line no-empty-function
    var onError = function () { };
    var _classPrefix = '';
    if (module.currentActionOptions[action]) {
      onSuccess = module.currentActionOptions[action].onSuccess || onSuccess;
      onError = module.currentActionOptions[action].onError || onError;
      _classPrefix = module.currentActionOptions[action].classPrefix || _classPrefix;
    }

    if (action === 'socialLogin') {
      accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
      module.$hooks.call('socialLoginFormRender');
    } else {
      accessToken = result.Data.access_token || (result.Data && result.Data.Data ? result.Data.Data.access_token : '');
    }
    commonFns.createForm(privacySchema, 'privacyPolicyUpdate', module.currentLRContainer, function (data) {
      controllers.updatePrivacyPolicy(accessToken, result, onSuccess, onError, null, module.currentLRContainer, _classPrefix);
    }, function (errors) {
      onError(commonFns.setMappedMessage(errors));
    });
  }

  function populateSplitValidate (name, schema, _classPrefix) {
    for (var i = 0; i < schema.length; i++) {
      if (schema[i].DataSource) {
        module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/registrationdata/' + schema[i].DataSource + '?apiKey=' + module.options.apiKey, '', function (datasource, response) {
          for (var j = 0; j < response.length; j++) {
            var option = document.createElement('option');
            option.setAttribute('value', response[j].Id);
            option.appendChild(document.createTextNode(response[j].Key));
            document.getElementById(_classPrefix + name + '-' + datasource.name).appendChild(option);
          }
        }, 'registration', schema[i]);
      }
    }
  }

  function populateCustomRegistrationData (container, tree, _classPrefix) {
    var respArray = [];
    // eslint-disable-next-line no-undef
    var commonFns = new SetLoginRadiusCommonFunctions(module);
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].ParentDataSource) {
        util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/registrationdata/' + tree[i].DataSource + '?apiKey=' + module.options.apiKey, '', function (datasource, response) {
          respArray[datasource.DataSource] = response;
          if (respArray[datasource.DataSource]) {
            for (var j = 0; j < respArray[datasource.DataSource].length; j++) {
              var option = document.createElement('option');
              option.setAttribute('value', respArray[datasource.DataSource][j].Id);
              option.appendChild(document.createTextNode(respArray[datasource.DataSource][j].Key));
              var datSourceContainer = document.getElementById(_classPrefix + 'registration-' + datasource.name);
              if (datSourceContainer) {
                datSourceContainer.appendChild(option);
              }
            }
          }
          if (datasource && datasource.children && datasource.children.length > 0) {
            for (var k = 0; k < datasource.children.length; k++) { commonFns.addChangeEventHandler(container, datasource, datasource.children[k], _classPrefix); }
          }
        }, 'registration', tree[i]);
      }
    }
  }

  /**
   * Register the 'afterFormRender' hook.
   * @description This hook is used to perform an action After any form renders, example login, registration etc.
   */
  module.$hooks.register('afterFormRender', function (name, container, _classPrefix, obj) {
    var schema = module.options.RegistrationFormSchema;
    var tree = [];
    if (name === 'registration') {
      var mappedArr = {};
      var mappedElem;
      for (var i = 0; i < schema.length; i++) {
        if (schema[i] && schema[i].DataSource && schema[i].DataSource !== null) {
          mappedArr[schema[i].DataSource] = schema[i];
          mappedArr[schema[i].DataSource]['children'] = [];
        }
      }
      for (var DataSource in mappedArr) {
        if (mappedArr.hasOwnProperty(DataSource)) {
          mappedElem = mappedArr[DataSource];
          // eslint-disable-next-line no-eq-null
          if (mappedElem.ParentDataSource && mappedElem.ParentDataSource != null) {
            mappedArr[mappedElem['ParentDataSource']]['children'].push(mappedElem);
          } else {
            tree.push(mappedElem);
          }
        }
      }
      if (tree.length > 0) {
        populateCustomRegistrationData(container, tree, _classPrefix);
      }
    }
    if (name === 'validatecode') {
      populateSplitValidate(name, schema, _classPrefix);
    }
  });

  /**
   * Register the 'setLocaleBasedInfo' hook.
   * @description This hook provides you a way to display the labels, placeholders, validation messages and error messages for forms in your local language.
   */
  module.$hooks.register(
    'setLocaleBasedInfo',
    function (localeInfo) {
      for (var key in localeInfo) {
        if (localeInfo.hasOwnProperty(key)) {
          switch (key) {
            case 'labels':
              util.extend(module.formCustomLabel, localeInfo[key]);
              break;
            case 'placeholders':
              util.extend(module.formPlaceholder, localeInfo[key]);
              break;
            case 'validationMessages':
              module.$hooks.call('mapValidationMessages', (localeInfo[key]));
              break;
            case 'errorMessages':
              module.$hooks.call('mapErrorMessages', (localeInfo[key]));
              break;
            case 'passwordMeterConfiguration':
              module.$hooks.call('passwordMeterConfiguration', (localeInfo[key]));
              break;
            case 'buttonsName':
              module.$hooks.call('setButtonsName', (localeInfo[key]));
              break;
            default:
              break;
          }
        }
      }
    }
  );
  // end hook model
}

/* eslint-disable block-scoped-var */
/**
* @param {Object} module lr module object
* @description Set global SetLoginRadiusCommonFunctions.
* @constructor
*/
function SetLoginRadiusCommonFunctions (module) {
  var privateFunctionsModule = this;
  var defaultMessages = LoginRadiusDefaults.messages;
  var defaultButtonsName = LoginRadiusDefaults.buttonNames;
  var controllers = new LoginRadiusControllers(module, privateFunctionsModule);

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function filterProvidersBasedOnCountry
  * @param {String} countryName country Name
  * @param {Array} provList list of scoial providers
  * @return {Array} provList available scoial providers list
  * @description This function will return available social providers list based upon country Name.
  */
  function filterProvidersBasedOnCountry (countryName, provList) {
    var countryProviders = [{
      'Name': 'Facebook',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Google',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Yahoo',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Live',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Twitter',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Linkedin',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Myspace',
      'country': 'US'
    },
    {
      'Name': 'Foursquare',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Vkontakte',
      'country': 'Russia'
    },
    {
      'Name': 'Renren',
      'country': 'China'
    },
    {
      'Name': 'QQ',
      'country': 'China'
    },
    {
      'Name': 'Kaixin',
      'country': 'China'
    },
    {
      'Name': 'Github',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Mailru',
      'country': 'Russia'
    },
    {
      'Name': 'Amazon',
      'country': 'US'
    },
    {
      'Name': 'Paypal',
      'country': 'global'
    },
    {
      'Name': 'Salesforce',
      'country': 'global'
    },
    {
      'Name': 'ODNOKLASSNIKI',
      'country': 'Russia'
    },
    {
      'Name': 'WORDPRESS',
      'country': 'global'
    },
    {
      'Name': 'GOOGLEPLUS',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'Disqus',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'INSTAGRAM',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'SINAWEIBO',
      'country': 'China'
    },
    {
      'Name': 'XING',
      'country': 'Germany'
    },
    {
      'Name': 'PINTEREST',
      'country': 'global',
      'except': 'china'
    },
    {
      'Name': 'LINE',
      'country': 'global'
    },
    {
      'Name': 'AOL',
      'country': 'US'
    }
    ];

    for (var i = 0; i < countryProviders.length; i++) {
      for (var j = 0; j < provList.length; j++) {
        if (provList[j] && (provList[j].Name.toLowerCase() === countryProviders[i].Name.toLowerCase())) {
          if ((countryProviders[i].country.toLowerCase() === countryName.toLowerCase()) || (countryProviders[i].country.toLowerCase() === 'global' && !countryProviders[i].except) || (countryProviders[i].except && countryProviders[i].except.toLowerCase() !== countryName.toLowerCase())) {
            continue;
          } else {
            provList.splice(j, 1);
          }
        }
      }
    }
    return provList;
  }
  privateFunctionsModule.showOTPTemplateForm = function (action) {
    return (module.options.templateVerificationTypes && module.options.templateVerificationTypes[action] === 'OTP');
  };

  privateFunctionsModule.addSocialEndpointOptions = function (acLinking) {
    var scope = module.util.getQueryParameterByName('scope');
    if (module.options.scope === '' && scope) {
      module.options.scope = scope;
    }
    var query = '&callback=' + module.options.callbackUrl + '&same_window=' + module.options.callbackInsideSameWindow + '&is_access_token=' + module.options.accessTokenResponse + '&callbacktype=' + module.options.callbackType + '&disablesignup=' + module.options.disableSignup;
    if (query.indexOf('scope') === -1) {
      query += '&scope=' + module.options.scope;
    }
    if (module.options.isMobile) {
      query += '&ismobile=true';
    }
    if (acLinking) {
      query += '&ac_linking=true';
    }
    if (module.options.isCustomScope) {
      query += '&is_custom_scope=true';
    }
    if (module.options.isB2BEnabled) {
      const invitationType = module.util.getHashParam('vtype');
      if (invitationType === 'orginvite') {
        var token = module.util.getHashParam('vtoken');
        if (token) {
          query += '&invitation_token=' + token;
        }
      }
    }
    return query;
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function renderCustomInterface
  * @param {String} selector html element selector name
  * @param {Object} linkedProvider account linked social provider object
  * @param {String} templateName template name
  * @param {Boolean} isappend flag
  * @param {Boolean} acLinking flag of account link
  * @param {Array} providersSchema array of providersSchema
  * @description This function will render provider custom interface according to Country.
  */
  privateFunctionsModule.renderCustomInterface = function (selector, linkedProvider, templateName, isappend, acLinking, providersSchema) {
    module.options.selector = selector;
    var renderedHtml = [];
    var OnLoadedCustomInterFace =
      function (data) {
        var LRProvidersList = data;
        if (module.options.providerCountry && !module.options.providersList) {
          LRProvidersList = filterProvidersBasedOnCountry(module.options.providerCountry, LRProvidersList);
        }
        module.$hooks.call('socialInterfaceProviders', LRProvidersList);
        var providersToShow;
        if (module.options.providersList) {
          providersToShow = module.options.providersList;
        }
        var templateCompiler = module.options.hashTemplate ? module.util.hashTmpl : module.util.tmpl;
        var templates = templateName.split(',');
        var query = privateFunctionsModule.addSocialEndpointOptions(acLinking);
        var objectName = module.util.getThisObjectName();
        for (var l = 0; l < templates.length; l++) {
          var templateIDData = module.util.elementById(templates[l]);
          if (templateIDData) {
            var templateData = templateIDData.innerHTML;
            if (templateData.indexOf('ac_linking') !== -1) {
              query = query.replace('&ac_linking=true', '');
            }
          }

          var providers = [];
          renderedHtml[l] = '';
          for (var i = 0; i < LRProvidersList.length; i++) {
            LRProvidersList[i].ObjectName = objectName;
            if (LRProvidersList[i].Endpoint.indexOf('callback=') === -1) { LRProvidersList[i].Endpoint += query; }
            var provider = {};
            provider.islinked = false;
            provider.providerId = false;

            if (linkedProvider && linkedProvider[LRProvidersList[i].Name.toLowerCase()]) {
              provider.islinked = true;
              provider.providerId = linkedProvider[LRProvidersList[i].Name.toLowerCase()];
            }

            LRProvidersList[i].isLinked = provider.islinked;
            LRProvidersList[i].providerId = provider.providerId;
            var value = LRProvidersList[i];
            providers.push(value);
          }

          var temp = [];

          for (var j = 0; j < providers.length; j++) {
            if (providers[j].isLinked) {
              temp.push(providers[j]);
            }
          }
          if (temp.length > 0) {
            for (var s = 0; s < providers.length; s++) {
              if (!providers[s].isLinked) {
                temp.push(providers[s]);
              }
            }
            providers = temp;
          }

          for (var m = 0; m < providers.length; m++) {
            if (templates[l] !== '') {
              if (providersToShow !== undefined) {
                if (providersToShow.indexOf(providers[m].Name) !== -1 || providersToShow.indexOf(providers[m].Name.toLowerCase()) !== -1) {
                  providers[m].Name = providers[m].DisplayName || providers[m].Name;
                  renderedHtml[l] += templateCompiler(templates[l], providers[m]);
                }
              } else {
                providers[m].Name = providers[m].DisplayName || providers[m].Name;
                renderedHtml[l] += templateCompiler(templates[l], providers[m]);
              }
            }
          }
        }
        var selectorsArray = module.options.selector.split(',');
        for (var k = 0; k < selectorsArray.length; k++) {
          var elementSelector = selectorsArray[k];
          if (elementSelector.indexOf('.') === 0) {
            elementSelector = elementSelector.replace('.', '');
            var elems = module.util.elementsByClass(elementSelector);
            if (elems && elems.length > 0) {
              for (var w = 0; w < elems.length; w++) {
                if (isappend) {
                  elems[w].innerHTML += renderedHtml[k];
                } else {
                  elems[w].innerHTML = renderedHtml[k];
                }
              }
            }
          } else if (elementSelector !== '') {
            var elem = module.util.elementById(elementSelector);
            if (elem) {
              if (isappend) {
                elem.innerHTML += renderedHtml[k];
              } else {
                elem.innerHTML = renderedHtml[k];
              }
            }
          }
        }
      };
    if (providersSchema) { OnLoadedCustomInterFace(providersSchema); } else if (module.options.SocialSchema !== undefined) { OnLoadedCustomInterFace(module.options.SocialSchema.Providers); }
    // module.util.jsonpCall(appJsonUrl + module.options.apiKey + ".json",, "loginRadiusAppJsonLoaded",'customInterface');
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function mapRegistrationSchema
  * @param {Array} schema registration Schema
  * @param {String} data json string
  * @param {Object} userProfile user profile object
  * @return {Object} objData css class prefix string
  * @description This function will map the registration Schema fields objects with some default values.
  */
  privateFunctionsModule.mapRegistrationSchema = function (schema, data, userProfile) {
    var objData = module.util.parseQueryString(data);
    var customFieldsObj = {};
    var emailObj = {};
    var countryObj = {};
    var emailArray = [];
    var consentOption = [];

    for (var i in objData) {
      if (i.indexOf('cf_') !== -1) {
        var newKey = i.replace('cf_', '');
        customFieldsObj[newKey] = objData[i];
        delete objData[i];
      } else if (i.indexOf('consent_') !== -1) {
        var nKey = i.replace('consent_', '');
        var consentOptionObject = {
          'ConsentOptionId': nKey,
          'IsAccepted': objData[i]
        };
        consentOption.push(consentOptionObject);
        delete objData[i];
      } else if (i === 'emailsubscription') {
        objData['IsEmailSubscribed'] = !!(objData[i] === 'on' || objData[i] === 'true');
        delete objData[i];
      } else if (i === 'emailid' || i === 'email') {
        emailObj.value = objData[i];
        emailObj.type = 'Primary';
      } else if (i !== 'SecurityQuestionAnswer' && i.indexOf('securityQuestion') !== -1) {
        var secQAObject = {};
        for (var j = 0; j < module.options.securityQuestionsCount; j++) {
          if (objData['securityAnswer' + j] && objData['securityQuestion' + j]) {
            secQAObject[objData['securityQuestion' + j]] = objData['securityAnswer' + j];
          }
          delete objData['securityQuestion' + j];
          delete objData['securityAnswer' + j];
        }
        if (Object.keys(secQAObject).length !== 0) {
          objData['SecurityQuestionAnswer'] = secQAObject;
        }
      } else if (i === 'country') {
        if (objData[i].indexOf('|') !== -1) {
          countryObj = {
            'code': objData[i].split('|')[0],
            'name': objData[i].split('|')[1]
          };
        } else {
          countryObj = {
            'code': '',
            'name': objData[i]
          };
        }
      } else {
        var fieldName = module.util.findInSchema(schema, 'name', i);
        if (fieldName && fieldName.Parent) {
          var m = i.indexOf('_') !== -1 ? i.split('_')[1] : i;
          if (typeof objData[fieldName.Parent] === 'undefined') {
            objData[fieldName.Parent] = [];
            var object_ = {};

            object_[m] = objData[i];
            if (fieldName.Parent === 'Addresses') {
              object_['type'] = 'personal';
            } else if (fieldName.Parent === 'PhoneNumbers' && !object_['phonetype']) {
              object_['phonetype'] = 'default';
            }
            objData[fieldName.Parent].push(object_);
          } else {
            if (fieldName.Parent === 'Addresses' && !objData[fieldName.Parent][0]['type']) {
              objData[fieldName.Parent][0]['type'] = 'personal';
            }

            objData[fieldName.Parent][0][m] = objData[i];
          }
          delete objData[i];
        }
      }
    }

    if (Object.keys(customFieldsObj).length !== 0) {
      objData['CustomFields'] = customFieldsObj;
    }
    if (Object.keys(emailObj).length !== 0) {
      emailArray.push(emailObj);
      objData['email'] = emailArray;
    }
    if (Object.keys(countryObj).length !== 0) {
      objData['country'] = countryObj;
    }
    if (module.options.isPINAuthentication && module.options.PINConfiguration.AskOnRegistration) {
      objData = privateFunctionsModule.sanitizePinData(objData);
    }
    if (consentOption.length > 0) {
      objData['Consents'] = {
        'Events': [
          {
            'Event': 'Register',
            'IsCustom': false
          }
        ],
        'Data': consentOption
      };
    }
    return objData;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function getPasswordMeterConfiguration
  * @param {String} min min vlaue
  * @param {String} max max value
  * @return {Array} array of meter configuration object
  * @description This function will get password strength status meter configuration.
  */
  function getPasswordMeterConfiguration (min, max) {
    var defaultCase = {
      0: 'worst',
      1: 'bad',
      2: 'weak',
      3: 'good',
      4: 'strong',
      5: 'secure'
    };
    var defaultColor = {
      0: '#dd514c',
      1: 'orange',
      2: 'yellow',
      3: '#5eb95e',
      4: 'blue',
      5: 'violet'
    };
    var defaultMessage = {
      0: 'Worst',
      1: 'Bad',
      2: 'Weak',
      3: 'Good',
      4: 'Strong',
      5: 'Secure'
    };

    function config () {
      var temp = [];
      var input = module.passwordMeterConfiguration;
      for (var j in defaultCase) {
        if (input[j] && input[j].case) {
          if (input[j].case.toLowerCase() === defaultCase[j]) {
            temp.push({
              color: input[j].color ? input[j].color : defaultColor[j],
              Message: input[j].message ? input[j].message : defaultMessage[j]
            });
          }
        } else {
          temp.push({
            color: defaultColor[j],
            Message: defaultMessage[j]
          });
        }
      }
      return temp;
    }
    return config();
  }

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function isCustomValidation
  * @param {String} fieldValue vaidation field name
  * @param {String} parmValue custom validation regex exp.
  * @return {Boolean} flag given fieldValue is available in regex exp
  * @description This function will validate custom validation regex exp.
  */
  function isCustomValidation (fieldValue, parmValue) {
    parmValue = parmValue.split('###')[0];
    parmValue = parmValue.split('or').join('|');
    try {
      var regex = new RegExp(parmValue, 'gu');
      if (!regex.test(fieldValue)) {
        return false;
      }
      return true;
    } catch (e) {
      module.log('Invalid custom validation regex expression');
      return false;
    }
  }

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function isValidDate
  * @param {String} dateString date
  * @return {Boolean} flag given date is valid
  * @description This function will validate given date.
  */
  function isValidDate (dateString) {
    var parts = dateString.split('/');
    if (dateString.indexOf('-') !== -1) {
      parts = dateString.split('-');
    }

    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    // eslint-disable-next-line no-magic-numbers
    if (year < 1000 || year > 3000 || month === 0 || month > 12) { return false; }

    // eslint-disable-next-line no-magic-numbers
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    // eslint-disable-next-line no-magic-numbers
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) { monthLength[1] = 29; }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function handleFormResponse
  * @param {Object} form html dom
  * @param {Function} onSuccess callback function
  * @param {String} recaptchaid id
  * @param {String} name name
  * @description This function will handle form response after validation.
  */
  function handleFormResponse (form, onSuccess, recaptchaid, name) {
    var tencentCaptchaId = module.util.elementById(recaptchaid + '_tencent');
    var useEmptyFields = false;
    if (name === 'profileeditor') {
      useEmptyFields = true;
    }
    var domRecaptcha = module.util.elementById(recaptchaid);
    if (module.options.invisibleRecaptcha && domRecaptcha && domRecaptcha.innerHTML !== '' && domRecaptcha.style.display !== 'none' &&
      !window['lrpasswordlesslogin'] && !window['lrpasswordlessloginotp'] && domRecaptcha.closest('form')) {
      if (window.hcaptcha && module.options.hCaptchaSiteKey) {
        window.hcaptcha.execute(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
      } else if (window.grecaptcha) {
        grecaptcha.execute(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
      }
    } else if (tencentCaptchaId && tencentCaptchaId.style.display !== 'none' && (module.options.tencentCaptcha || (module.options.tencentCaptchaAsFallback && !window.grecaptcha && !window.hcaptcha))) {
      window.onTencentCaptchaSubmitCallback = function (captchaResponse) {
        //  console.log(captchaResponse);
        var serializedForm = module.util.serialize(form, useEmptyFields);
        serializedForm += '&qq_captcha_ticket=' + captchaResponse.ticket;
        serializedForm += '&qq_captcha_randstr=' + captchaResponse.randstr;
        onSuccess(serializedForm);
      };
    } else {
      onSuccess(module.util.serialize(form, useEmptyFields));
      privateFunctionsModule.resetGoogleCaptcha(name, recaptchaid);
    }
  }

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function createPassKeyButton
  * @param {String} flag name of the label
  * @param {Object} form html dom
  * @param {String} _idPrefix html element id
  * @param {String} _classPrefix html element class
  * @description This function will create Pass Key Button.
  */
  function createPassKeyButton (flag, form, _idPrefix, _classPrefix) {
    var submit = document.createElement('input');
    submit.type = 'submit';
    var buttonName = module.buttonsName[flag.toLowerCase()] || defaultButtonsName[flag.toLowerCase()];
    var buttonKeyName = defaultButtonsName[flag.toLowerCase()];
    submit.value = buttonName;
    submit.id = _idPrefix + '-' + buttonKeyName.toLowerCase().replace(/ /g, '-');
    submit.name = flag;
    submit.setAttribute('class', _classPrefix + ' ' + _idPrefix + buttonKeyName.toLowerCase().replace(/ /g, '-'));
    submit.setAttribute('class', _classPrefix + ' ' + buttonKeyName.toLowerCase().replace(/ /g, '-'));
    form.appendChild(submit);
    module.util.addEvent('click', submit, function (event) {
      if (flag === 'registerwithpwd') {
        window['lrpwdregister'] = true;
      } else {
        window['lrpasskeylogin'] = true;
        window['lrpasswordlessloginotp'] = false;
        window['lrpasswordlesslogin'] = false;
      }
    });
  }

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function createOneClickButton
  * @param {String} flag name of the label
  * @param {Object} form html dom
  * @param {Object} btnLoginSubmit button dom element
  * @param {String} _idPrefix html element id
  * @param {String} _classPrefix html element class
  * @description This function will create One Click Button.
  */
  function createOneClickButton (flag, form, btnLoginSubmit, _idPrefix, _classPrefix) {
    var IDlabel = 'linksignin';
    if (flag === 'passwordlessLoginOTPButtonLabel') {
      IDlabel = 'otpsignin';
    }
    var submit = document.createElement('input');
    submit.type = 'submit';
    var buttonName = module.buttonsName[flag.toLowerCase()] || defaultButtonsName[flag.toLowerCase()];
    var buttonKeyName = defaultButtonsName[flag.toLowerCase()];
    submit.value = buttonName;
    submit.id = _idPrefix + IDlabel + '-' + buttonKeyName.toLowerCase().replace(/ /g, '-');
    submit.setAttribute('class', _classPrefix + IDlabel + ' ' + IDlabel + '-' + _idPrefix + buttonKeyName.toLowerCase().replace(/ /g, '-'));
    if (module.options.disableButtonOnsubmit) {
      module.$hooks.register('startProcess', function (action) {
        if ((IDlabel === 'otpsignin' && window['lrpasswordlessloginotp']) || (IDlabel === 'linksignin' && window['lrpasswordlesslogin'])) {
          submit.disabled = true;
        }
      });
      module.$hooks.register('xhrEndWithError', function (action) {
        if ((IDlabel === 'otpsignin' && window['lrpasswordlessloginotp']) || (IDlabel === 'linksignin' && window['lrpasswordlesslogin'])) {
          submit.disabled = false;
        }
      });
      module.$hooks.register('xhrEndWithSuccess', function (action) {
        if (((IDlabel === 'otpsignin' && window['lrpasswordlessloginotp']) || (IDlabel === 'linksignin' && window['lrpasswordlesslogin'])) && module.options.enableSubmitOnSuccess) {
          submit.disabled = false;
        }
      });
    }
    form.appendChild(submit);
    module.util.addEvent('click', btnLoginSubmit, function (event) {
      window['lrpasswordlessloginotp'] = false;
      window['lrpasswordlesslogin'] = false;
      window['lrpasskeylogin'] = false;
    });
    if (flag === 'passwordlessLoginOTPButtonLabel') {
      module.util.addEvent('click', submit, function (event) {
        window['lrpasswordlessloginotp'] = true;
        window['lrpasswordlesslogin'] = false;
        window['lrpasskeylogin'] = false;
      });
    } else {
      module.util.addEvent('click', submit, function (event) {
        window['lrpasswordlesslogin'] = true;
        window['lrpasswordlessloginotp'] = false;
        window['lrpasskeylogin'] = false;
      });
    }
  }
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function showQRCode
  * @param {Object} data json object
  * @param {String} container html dom element id
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description THis function will create QR code and show the QR code.
  */
  privateFunctionsModule.showQRCode = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField) {
    var schema = module.QRCodeSchema.slice();
    if (module.options.maskSensitiveInput) {
      schema[0].type = 'password';
    } else {
      schema[0].type = 'string';
    }
    var createQRSchema = function (_qrCode, _manualEntryCode) {
      if (_qrCode) {
        schema.splice(0, 0, {
          type: 'image',
          name: 'qrcode',
          display: 'QR Code',
          rules: '',
          permission: 'r',
          value: _qrCode
        });
      }
      if (_manualEntryCode) {
        var _classPrefix_ = _classPrefix || LoginRadiusDefaults.classPrefix;
        schema.splice(1, 0, {
          type: 'button',
          name: 'ManualEntryCode',
          display: 'Get Manual Entry Code',
          rules: '',
          permission: 'r',
          title: "Use this code when you unable to scan QR code. Tap 'Enter a provided key' then enter the email address of your Account and enter this key in your authenticator app",
          event: 'click',
          eventCallback: function (event) {
            var elem = document.getElementsByClassName('content-' + _classPrefix_ + 'ManualEntryCode')[0];
            elem.innerHTML = _manualEntryCode;
          }
        });
      }
    };

    var qrCode;
    var manualEntryCode;
    if (data.SecondFactorAuthentication) {
      qrCode = data.SecondFactorAuthentication.QRCode;
      manualEntryCode = data.SecondFactorAuthentication.ManualEntryCode;
      if (!data.SecondFactorAuthentication.IsAuthenticatorVerified) {
        createQRSchema(qrCode, manualEntryCode);
      }
    } else {
      qrCode = data.QRCode;
      manualEntryCode = data.ManualEntryCode;
      if (!data.IsAuthenticatorVerified) {
        createQRSchema(qrCode, manualEntryCode);
      }
    }
    privateFunctionsModule.createForm(schema, 'showQRcode', container, function (_data) {
      controllers.verify2FAOTPController(_data, onSuccess, onError, passwordExpiry, requiredField);
    },
    function (errors) {
      onError(errors);
    }, _classPrefix);
  };

  privateFunctionsModule.showMFASecurityQuestions = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField) {
    var noSecurityQuestions = true;
    var _regSchema = [];
    var _secQSchema = '';
    module.$hooks.register('afterFormRender', function (name, container, _classPrefix, form) {
      if (!module.LRCheckLogin && form && form.name === 'loginradius-mfasecurityquestion') {
        var submitBtn = module.util.findInSchema(form, 'type', 'submit');
        var setsecurityquestionsBtn = module.util.findInSchema(form, 'name', 'setsecurityquestions');
        if (setsecurityquestionsBtn) {
          submitBtn.style.display = 'none';
        } else {
          submitBtn.style.display = 'block';
        }
      }
    });
    if (data && data.SecurityQuestions) {
      _secQSchema = data.SecurityQuestions;
      data.haveSecurityQuestionOnProfile = true;
    }
    var securityQuestionSchema = [];
    if (!module.LRCheckLogin && data.haveSecurityQuestionOnProfile) {
      securityQuestionSchema.push({
        type: 'button',
        name: 'enablesecurityquestions',
        display: 'Enable Security Questions Authenticator',
        rules: '',
        permission: 'r',
        event: 'click',
        eventCallback: function () {
          controllers.verifyMFASecurityQuestionsByAccessTokenController('', onSuccess, onError, true);
        }
      });
    } else {
      securityQuestionSchema = privateFunctionsModule.getSecurityQuestionSchema(_regSchema, false, _secQSchema);
    }
    if (_secQSchema.length > 0 && data && !data.IsSecurityQuestionAuthenticatorVerified) {
      securityQuestionSchema.push({
        type: 'button',
        name: 'setsecurityquestions',
        display: 'Set Security Questions',
        rules: '',
        permission: 'r',
        event: 'click',
        eventCallback: function (event) {
          var parsedData = Object.assign({}, data);
          delete parsedData.SecurityQuestions;
          LoginRadiusDefaults.innerHTML = false;
          event.target.style.display = 'none';
          parsedData.haveSecurityQuestionOnProfile = false;
          privateFunctionsModule.showMFASecurityQuestions(parsedData, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
        }
      });
    }
    if (securityQuestionSchema.length > 0) {
      noSecurityQuestions = false;
    }
    if (!noSecurityQuestions) {
      privateFunctionsModule.createForm(securityQuestionSchema, 'mfasecurityquestion', container, function (mfadata) {
        if (!module.LRCheckLogin) {
          controllers.verifyMFASecurityQuestionsByAccessTokenController(mfadata, onSuccess, onError, data.haveSecurityQuestionOnProfile, _secQSchema);
        } else {
          if ((data && data.IsSecurityQuestionAuthenticatorVerified) || (_secQSchema && _secQSchema.length > 0)) {
            controllers.verifyMFASecurityQuestionsController(mfadata, onSuccess, onError, passwordExpiry, requiredField);
          } else {
            controllers.submitMFASecurityQuestionsController(mfadata, onSuccess, onError, passwordExpiry, requiredField);
          }
        }
      }, function (errors) {
        onError(errors);
      }, _classPrefix);
    } else {
      onError([
        privateFunctionsModule.setMappedMessage(defaultMessages['noSecurityQuestions'])
      ]);
    }
  };

  privateFunctionsModule.disableMFAOptions = function (mfaOption, onSuccess, onError) {
    var gAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedGAAuth);
    var updatedOtpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedOTPAuth);
    var emailotpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedEmailOTPAuth);
    var sqAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedSQAuth);
    var pushNotificationAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedPushNotificationAuth);
    var duoAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedDuoAuth);
    var passkeyAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedPasskeyAuth);
    var mfaOptions = {
      'authenticator': {
        'field': gAuth,
        'name': 'authenticatorcode',
        'defaultKey': 'storedGAAuth'
      },
      'emailotpauthenticator': {
        'field': emailotpAuth,
        'name': 'Email authenticator',
        'defaultKey': 'storedEmailOTPAuth'

      },
      'otpauthenticator': {
        'field': updatedOtpAuth,
        'name': 'OTP authenticator',
        'defaultKey': 'storedOTPAuth'

      },
      'sqauthenticator': {
        'field': sqAuth,
        'name': 'Security Questions authenticator',
        'defaultKey': 'storedSQAuth'
      },
      'pushnotificationauthenticator': {
        'field': pushNotificationAuth,
        'name': 'Push Notification authenticator',
        'defaultKey': 'storedPushNotificationAuth'
      },
      'duoauthenticator': {
        'field': duoAuth,
        'name': 'Duo Security authenticator',
        'defaultKey': 'storedDuoAuth'
      },
      'passkeyauthenticator': {
        'field': passkeyAuth,
        'name': 'Passkey authenticator',
        'defaultKey': 'storedPasskeyAuth'
      }
    };
    var currentMFA = mfaOption['emailotpauthenticator'];
    var isAllMFADisabled = 0;
    for (var key in mfaOptions) {
      if (key === mfaOption) {
        currentMFA = mfaOptions[key];
      } else {
        if (mfaOptions[key]['field'] !== 'false') {
          isAllMFADisabled++;
        }
      }
    }
    var handleOnSuccess = function (response, authenticatorType) {
      module.storage.setBrowserStorage(LoginRadiusDefaults[currentMFA['defaultKey']], false);
      onSuccess(response, authenticatorType);
    };
    if (module.options.twoFactorAuthentication) {
      if (currentMFA['field'] === 'false') {
        onError([{ Message: currentMFA['name'] + 'has already disabled.' }]);
      } else if (isAllMFADisabled > 0) {
        controllers.resetTwoFactorAuthenticationController(mfaOption, handleOnSuccess, onError);
      } else if (isAllMFADisabled === 0) {
        onError([{ Message: 'TwoFactorAuthentication is required, So atleast one authenticator should be required.' }]);
      }
    } else {
      controllers.resetTwoFactorAuthenticationController(mfaOption, onSuccess, onError);
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function getSecurityQuestionSchema
  * @param {Array} regSchema array of reg form fields objects
  * @param {Boolean} registration flag if registration true then Security Questions will add regSchema and render
  * @return {Array} secQSchema Security Questions array
  * @description This function will get Security Questions from api.
  */
  privateFunctionsModule.getSecurityQuestionSchema = function (regSchema, isRegistration, SecurityQuestionsList) {
    var secQSchema = [];
    var _securityQuestions = module.options.SecurityQuestions;
    var _securityQuestionsCount = module.options.securityQuestionsCount;
    if (SecurityQuestionsList) {
      _securityQuestions = SecurityQuestionsList;
      _securityQuestionsCount = SecurityQuestionsList.length;
    }

    if (_securityQuestions) {
      var optionsArray = [];
      var selectedOptions = [];
      var changeCb = function (event) {
        var pattern = new RegExp('securityQuestion');
        var elemIndex = event.target.id.split('securityQuestion')[1];
        selectedOptions[elemIndex] = event.target.selectedIndex;
        var elms = module.util.findElementByRegex('id', pattern, 'select');
        for (var k = 0; k < elms.length; k++) {
          for (var l = 1; l < elms[k].options.length; l++) {
            if (selectedOptions.indexOf(elms[k].options[l].index) > -1 && elms[k].options[l].index !== elms[k].options.selectedIndex) {
              elms[k].options[l].style.display = 'none';
            } else {
              elms[k].options[l].style.display = 'block';
            }
          }
        }
      };
      if (!SecurityQuestionsList) {
        for (var m = 0; m < _securityQuestions.length; m++) {
          var optionObject = {};
          optionObject.text = _securityQuestions[m].Question;
          optionObject.value = _securityQuestions[m].QuestionId;
          optionsArray.push(optionObject);
          selectedOptions.push(0);
        }
      }
      for (var j = 0; j < _securityQuestionsCount; j++) {
        var secQObject = {};
        if (!SecurityQuestionsList) {
          secQObject.type = 'option';
          secQObject.options = optionsArray;
          secQObject.name = 'securityQuestion' + j;
          secQObject.display = 'Security Question';
          secQObject.event = 'change';
          secQObject.eventCallback = changeCb;
        } else {
          secQObject.type = 'html';
          secQObject.name = 'securityQuestion' + j;
          secQObject.html = _securityQuestions[j].Question;
        }
        if (isRegistration) {
          secQObject.rules = 'optional';
        } else {
          secQObject.rules = 'required';
        }
        secQObject.permission = 'r';
        if (isRegistration) {
          regSchema.push(secQObject);
        } else {
          secQSchema.push(secQObject);
        }
        var secAObject = {};
        if (module.options.maskSensitiveInput) {
          secAObject.type = 'password';
        } else {
          secAObject.type = 'string';
        }
        secAObject.name = SecurityQuestionsList ? _securityQuestions[j].QuestionId : 'securityAnswer' + j; secAObject.display = 'Answer';
        if (isRegistration) {
          secAObject.rules = 'optional';
        } else {
          secAObject.rules = 'required';
        }
        secAObject.permission = 'r';
        if (isRegistration) {
          regSchema.push(secAObject);
        } else {
          secQSchema.push(secAObject);
        }
      }
    }
    return secQSchema;
  };

  var socialLoginAPI = false;

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function socialLogin
  * @param {String} container html dom element id
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize the social login process.
  */
  privateFunctionsModule.socialLogin = function (container, onSuccess, onError, _classPrefix) {
    window.html5passToken = function (tok) {
      if (!socialLoginAPI) {
        socialLoginAPI = true;
        container = LoginRadiusDefaults.socialRegFormId || container;
        var currentAction = module.storage.getBrowserStorage('LRSetSafariToken');
        if (currentAction) {
          module.$hooks.call('getCurrentActionOptions', currentAction);
          onSuccess = window.LRSafarionSuccess || onSuccess;
          onError = window.LRSafarionError || onError;
        }
        controllers.socialLoginReceiveToken(tok, container, onSuccess, onError, _classPrefix);
      }
    };
    var lrToken = module.util.getHashParam('lr-token');
    if (lrToken) {
      window.html5passToken(lrToken);
    }

    module.loginRadiusHtml5PassToken = window.html5passToken;
    if (!module.options.isMobile && !module.options.noCallbackForSocialLogin) {
      module.util.addEvent('message', window, function (event) {
        if (event.origin.indexOf(module.options.customDomain) === -1 && event.origin.indexOf(LoginRadiusDefaults.hubDomain) === -1) {
          return;
        }
        container = LoginRadiusDefaults.socialRegFormId || container;
        if (typeof event.data === 'string' && (LoginRadiusDefaults._uuidFormat.test(event.data) || module.util.isJWT(event.data))) {
          controllers.socialLoginReceiveToken(event.data, container, onSuccess, onError, _classPrefix);
        }
      });
    } else {
      module.$hooks.register('socialCalls', function (provider, clientGuid) {
        module.currentLRContainer = container;
        if (module.options.noCallbackForSocialLogin) {
          var onHandleSocialLoginSuccess = function (response) {
            if (response.access_token) {
              controllers.socialLoginReceiveToken(response.access_token, container, onSuccess, onError, _classPrefix);
            } else {
              onSuccess(response);
            }
          };
          privateFunctionsModule.pingForSocialLogin(clientGuid, onHandleSocialLoginSuccess, function () { /* do nothing. */ });
        }
      });
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resetPassKey
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize the reset password process.
  */
  privateFunctionsModule.resetPassKey = function (container, onSuccess, onError, _classPrefix) {
    if (!module.options.isPassKeysEnabled) {
      module.log('please enable pass key from admin console');
    } else {
      var vtype = module.util.getHashParam('vtype');
      // eslint-disable-next-line no-eq-null
      if (vtype == null) {
        var schema = module.forgotPassKeyFormSchema;
        privateFunctionsModule.createForm(schema, 'forgotPassKey', container, function (data) {
          controllers.forgotPassKeyController(data, container, onSuccess, onError, _classPrefix);
        }, function (errors) {
          onError(errors);
        }, _classPrefix);
      } else {
        var vtoken = module.util.getHashParam('vtoken');
        if (!vtoken) {
          onError([{
            Message: 'Verification Token not found in query string.'
          }]);
        } else {
          controllers.resetPassKeyController(vtoken, container, onSuccess, onError, _classPrefix);
        }
      }
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resetPassword
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Object} fdata json object which hold 'email', 'username'
  * @description This function will initialize the reset password process.
  */
  privateFunctionsModule.resetPassword = function (container, onSuccess, onError, _classPrefix, fdata) {
    var schema = module.resetPasswordFormSchema.slice();
    var vtype = module.util.getHashParam('vtype');
    var fndata;
    var phoneNo;
    // eslint-disable-next-line no-eq-null
    if (vtype == null) {
      schema = module.resetPasswordByPhoneSchema.slice();
      privateFunctionsModule.setPasswordRule(module.util.findInSchema(schema, 'name', 'password'));
      if (fdata) {
        var dataKey, dataValue;
        if (fdata.email) {
          dataKey = 'email';
          dataValue = fdata.email;
        } else if (fdata.username) {
          dataKey = 'username';
          dataValue = fdata.username;
        }
        schema.push({
          type: 'hidden',
          name: dataKey,
          value: dataValue
        });
      } else if (module.options.phoneLogin) {
        phoneNo = '&' + LoginRadiusDefaults.LRPhoneNo;
        if (!module.util.findInSchema(schema, 'name', 'resendotp')) {
          module.LRPrefix = _classPrefix + '##' + LoginRadiusDefaults.idPrefix;
          var recaptchaid = module.LRPrefix.replace('##', '') + 'recaptcha_widget_resetpassword';
          var resendEventCallbackFn = function (event, isVoice) {
            var captchaHandleCallback = function captchaHandle (key) {
              var data = {};
              if (typeof key === 'string') {
                data['success'] = key;
              } else {
                data = key;
              }
              if (data['error']) {
                onError([privateFunctionsModule.setMappedMessage(data['error'])]);
              } else {
                if (typeof LoginRadiusDefaults.LRPhoneNo === 'string') {
                  LoginRadiusDefaults.LRPhoneNo = module.util.parseQueryString(LoginRadiusDefaults.LRPhoneNo);
                }

                if (LoginRadiusDefaults.LRPhoneNo['g-recaptcha-response'] !== -1) {
                  LoginRadiusDefaults.LRPhoneNo['g-recaptcha-response'] = data['success'];
                  if (window.grecaptcha) grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
                }
                if (LoginRadiusDefaults.LRPhoneNo['h-captcha-response'] !== -1) {
                  LoginRadiusDefaults.LRPhoneNo['h-captcha-response'] = data['success'];
                  if (window.hcaptcha && module.options.hCaptchaSiteKey) window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
                }
                controllers.forgotPasswordbyPhoneController(LoginRadiusDefaults.LRPhoneNo, container, onSuccess, onError, _classPrefix, isVoice, function () { /* do nothing. */ });
              }
            };

            if (module.options.disableResendOTPButton) {
              module.util.disableResendOTPButton(event);
            }
            var _optionalRecaptchaConfiguration = module.options.optionalRecaptchaConfiguration;
            if (_optionalRecaptchaConfiguration && _optionalRecaptchaConfiguration.IsEnabled &&
              _optionalRecaptchaConfiguration.Apis && isAddBotProtection('forgotpassword', _optionalRecaptchaConfiguration.Apis)) {
              window.onCaptchaSubmit = captchaHandleCallback;
              module.$hooks.call('addFormCaptchaExecute', recaptchaid, true, captchaHandleCallback);
            } else {
              controllers.forgotPasswordbyPhoneController(LoginRadiusDefaults.LRPhoneNo, container, onSuccess, onError, _classPrefix, isVoice, function () { /* do nothing. */ });
            }
          };
          var resendBtnOTPSchema = Object.assign({}, module.btnOTPSchema, {
            name: 'resendotp',
            display: 'Resend via SMS',
            eventCallback: function (event) {
              resendEventCallbackFn(event, false);
            }
          });
          schema.push(resendBtnOTPSchema);
          if (module.options.isVoiceOtp) {
            var resendBtnVOTPSchema = Object.assign({}, module.btnOTPSchema, {
              name: 'resendvoiceotp',
              display: 'Resend via Voice call',
              eventCallback: function (event) {
                resendEventCallbackFn(event, true);
              }
            });
            schema.push(resendBtnVOTPSchema);
          }
        }
      }
    } else {
      privateFunctionsModule.setPasswordRule(module.util.findInSchema(schema, 'name', 'password'));
      privateFunctionsModule.setPasswordRule(module.util.findInSchema(schema, 'name', 'confirmpassword'));
      var vtoken = module.util.getHashParam('vtoken');
      if (!vtoken) {
        onError([{
          Message: 'Verification Token not found in query string.'
        }]);
      } else {
        if (module.options.verifyEmailByOTP) {
          var _email = module.util.getQueryParameterByName('email');
          fndata = '&otp=' + vtoken;
          fndata += '&email=' + encodeURIComponent(_email.replace(/ /g, '+'));
          // eslint-disable-next-line no-magic-numbers
          schema.splice(2, 1);
        } else {
          module.resetPasswordFormSchema[2].value = vtoken;
        }
      }
    }
    privateFunctionsModule.createForm(schema, 'resetpassword', container, function (data) {
      if (data.indexOf('otp') !== -1 && !fdata) {
        var getPhoneNo = module.util.parseQueryString(phoneNo);
        controllers.resetPasswordByPhoneController(data + '&phone=' + getPhoneNo.phone, onSuccess, onError, container, _classPrefix);
      } else {
        if (fndata) {
          data += fndata;
        }
        controllers.resetPasswordController(data, onSuccess, onError, container, _classPrefix);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix, 'forgotpassword');
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resetPIN
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Object} fdata json object which hold 'email', 'username'
  * @description This function will initialize the reset pin process.
  */
  privateFunctionsModule.resetPIN = function (container, onSuccess, onError, _classPrefix, fdata) {
    var schema = module.resetPINFormSchema.slice();
    var vtype = module.util.getHashParam('vtype');
    var fndata;
    var phoneNo;
    // eslint-disable-next-line no-eq-null
    if (vtype == null) {
      schema = module.resetPINByPhoneSchema.slice();
      privateFunctionsModule.setPINRule(module.util.findInSchema(schema, 'name', 'pin'));
      if (fdata) {
        var dataKey, dataValue;
        if (fdata.email) {
          dataKey = 'email';
          dataValue = fdata.email;
        } else if (fdata.username) {
          dataKey = 'username';
          dataValue = fdata.username;
        }
        schema.push({
          type: 'hidden',
          name: dataKey,
          value: dataValue
        });
      } else if (module.options.phoneLogin) {
        phoneNo = '&' + LoginRadiusDefaults.LRPhoneNo;
        if (!module.util.findInSchema(schema, 'name', 'resendotp')) {
          var resendBtnOTPSchema = Object.assign({}, module.btnOTPSchema, {
            name: 'resendotp',
            display: 'Resend via SMS',
            eventCallback: function (event) {
              if (module.options.disableResendOTPButton) {
                module.util.disableResendOTPButton(event);
              }
              controllers.forgotPINbyPhoneController(LoginRadiusDefaults.LRPhoneNo, container, onSuccess, onError, _classPrefix, false, function () { /* do nothing. */ });
            }
          });
          schema.push(resendBtnOTPSchema);
          if (module.options.isVoiceOtp) {
            var resendBtnVOTPSchema = Object.assign({}, module.btnOTPSchema, {
              name: 'resendvoiceotp',
              display: 'Resend via Voice call',
              eventCallback: function (event) {
                if (module.options.disableResendOTPButton) {
                  module.util.disableResendOTPButton(event);
                }
                controllers.forgotPINbyPhoneController(LoginRadiusDefaults.LRPhoneNo, container, onSuccess, onError, _classPrefix, true, function () { /* do nothing. */ });
              }
            });
            schema.push(resendBtnVOTPSchema);
          }
        }
      }
    } else {
      privateFunctionsModule.setPINRule(module.util.findInSchema(schema, 'name', 'pin'));
      privateFunctionsModule.setPINRule(module.util.findInSchema(schema, 'name', 'confirmpin'));
      var vtoken = module.util.getHashParam('vtoken');
      if (!vtoken) {
        onError([{
          Message: 'Verification Token not found in query string.'
        }]);
      } else {
        if (module.options.verifyEmailByOTP) {
          var _email = module.util.getQueryParameterByName('email');
          fndata = '&otp=' + vtoken;
          fndata += '&email=' + encodeURIComponent(_email.replace(/ /g, '+'));
          // eslint-disable-next-line no-magic-numbers
          schema.splice(2, 1);
        } else {
          module.resetPINFormSchema[2].value = vtoken;
        }
      }
    }
    privateFunctionsModule.createForm(schema, 'resetpin', container, function (data) {
      if (data.indexOf('otp') !== -1 && !fdata) {
        controllers.resetPINByPhoneController(data + phoneNo, onSuccess, onError, container, _classPrefix);
      } else {
        if (fndata) {
          data += fndata;
        }
        controllers.resetPINController(data, onSuccess, onError, container, _classPrefix);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setPasswordRule
  * @param {Object} field json object which hold form field info
  * @param {String} loginAction action name ex. 'login'
  * @description This function will handle set password rules process.
  */
  privateFunctionsModule.setPasswordRule = function (field, loginAction) {
    module.options.passwordLength = module.options.passwordlength || module.options.passwordLength;
    var passwordRules = module.util.findInSchema(module.options.RegistrationFormSchema, 'name', 'password').rules;
    if (field && field.rules) {
      var matchRulePattern = new RegExp(/matches\[\w*\]/);
      var matchRuleRes = matchRulePattern.exec(field.rules);
      if (matchRuleRes) {
        var matchRuleString = matchRuleRes[0];
        field.rules = [passwordRules, matchRuleString].join('|');
      } else {
        field.rules = passwordRules;
      }
      if (module.options.passwordLength && module.options.passwordLength.min && module.options.passwordLength.max) {
        field.rules = field.rules || '';
        field.rules = field.rules.replace('min_length[6]', 'min_length[' + module.options.passwordLength.min + ']')
          .replace('max_length[32]', 'max_length[' + module.options.passwordLength.max + ']');
      }
    }
    loginAction = loginAction || false;
    if (loginAction && field) {
      field.rules = 'required';
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setPINRule
  * @param {Object} field json object which hold form field info
  * @description This function will handle set pin rules process.
  */
  privateFunctionsModule.setPINRule = function (field) {
    if (module.pinSchema && module.pinSchema.length) {
      var pinRules = module.pinSchema[0].rules;
      if (field && field.rules) {
        var matchRulePattern = new RegExp(/matches\[\w*\]/);
        var matchRuleRes = matchRulePattern.exec(field.rules);
        if (matchRuleRes) {
          var matchRuleString = matchRuleRes[0];
          field.rules = [pinRules, matchRuleString].join('|');
        } else {
          field.rules = pinRules;
        }
        if (module.options.PINConfiguration.IsRequired && field.rules.indexOf('required') === -1) {
          field.rules = field.rules ? [field.rules, 'required'].join('|') : 'required';
        }
      }
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function changeNumberForm
  * @param {String} container html dom element id to hold different forms
  * @param {Object} formElement html dom element
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {String} innerHtml value which want display in html element
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description Create change phone number form and add event on change, reset buttons.
  */
  privateFunctionsModule.changeNumberForm = function (container, formElement, onSuccess, onError, _classPrefix, innerHtml, passwordExpiry, requiredField) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    var changeBtn = module.util.getButtonAttribute('changenumber', _classPrefix);
    var resetBtn = module.util.getButtonAttribute('disableotpauthenticator', _classPrefix);
    // var updatedOtpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedOTPAuth);
    var gAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedGAAuth);
    var duoAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedDuoAuth);
    var sqAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedSQAuth);
    var emailotpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedEmailOTPAuth);
    var pushNotificationAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedPushNotificationAuth);

    //  var disableMFA = googleAuth !== 'false' ? true : (emailotpAuth !== 'false');
    var disableMFA = emailotpAuth !== 'false' || gAuth !== 'false' || sqAuth !== 'false' || duoAuth !== 'false' || pushNotificationAuth !== 'false';

    if (formElement) {
      formElement.appendChild(changeBtn);
      if (token && !module.LRCheckLogin && (module.options.optionalTwoFactorAuthentication || (disableMFA && module.options.twoFactorAuthentication))) {
        formElement.appendChild(resetBtn);
      }
    } else {
      module.util.addHTMLContent(container, changeBtn, innerHtml);
      if (token && !module.LRCheckLogin && (module.options.optionalTwoFactorAuthentication || (disableMFA && module.options.twoFactorAuthentication))) {
        module.util.addHTMLContent(container, resetBtn, true);
      }
    }
    module.util.addEvent('click', resetBtn, function (event) {
      privateFunctionsModule.disableMFAOptions('otpauthenticator', onSuccess, onError);
    });
    module.util.addEvent('click', changeBtn, function (event) {
      var changePhoneFormElement = document.getElementsByName(_classPrefix + 'changePhone')[0];
      if (!changePhoneFormElement) {
        LoginRadiusDefaults.innerHTML = false;
        privateFunctionsModule.updatePhoneNumber(container, onSuccess, onError, _classPrefix, 'changePhone', passwordExpiry, requiredField);
      }
    });
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function validateAndCall
  * @param {Function} func callback function
  * @description This function will validate sso and call back function if app name exist. It will terminate the session of sso when user logout from site.
  */
  privateFunctionsModule.validateAndCall = function (func) {
    if (LoginRadiusDefaults.isSSOInitFired) {
      if (module.options.appName) {
        func();
      } else {
        module.log('LoginRadius site name (app name) required to do SSO');
      }
    } else {
      module.log('Init method should be called first then login.');
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function logout
  * @param {Function} onSuccess Success callback function
  * @description This function will initialize the sso logout process.
  */
  privateFunctionsModule.logout = function (onSuccess) {
    privateFunctionsModule.validateAndCall(function () {
      var tokenExpiryParameter = module.options.tokenExpire ? '?tokenExpire=1' : '';
      var action = module.options.tokenExpire ? 'tokenExpire' : 'logout';
      var domain = module.options.customDomain || module.options.appName + '.' + LoginRadiusDefaults.hubDomain;
      module.util.ajaxCall('get', 'https://' + domain + '/ssologin/' + action + tokenExpiryParameter, '', function (data) {
        LRNameSpace.cookies.removeItem(LoginRadiusDefaults.tokenCookie, module.options.appPath);
        module.clearSession();
        if (onSuccess) {
          onSuccess();
        }
        // Not sending action 'logout' to support old jsonpcall
      });
    });
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function otpEmailVerification
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Object} fdata json object which hold 'email' 'username'
  * @description This function will initialize otpEmailVerification process and create form of that.
  */
  privateFunctionsModule.otpEmailVerification = function (container, onSuccess, onError, _classPrefix, fdata) {
    var schema = module.otpSchema;
    privateFunctionsModule.createForm(schema, 'otp', container, function (data) {
      var param = '';
      if (typeof fdata !== 'string') {
        data = module.util.parseQueryString(data);
        param = module.util.mergeOptions(fdata, data);
      } else {
        param = fdata + '&' + data;
      }
      if (typeof param !== 'string' && param.onetouchlogin) {
        controllers.oneTouchLoginEmailVerification(param.otp, onSuccess, onError, param.email);
      } else {
        controllers.emailVerificationController(param, onSuccess, onError, container, _classPrefix, true);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function passwordlessLoginVerification
  * @param {String} vtoken verification token
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will verify passwordless login and login into account after verification.
  */
  privateFunctionsModule.passwordlessLoginVerification = function (vtoken, onSuccess, onError, _classPrefix, flag) {
    if (vtoken) {
      var method = 'get';
      var body = '';
      var url = LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/email/verify?apiKey=' + module.options.apiKey + '&verificationtoken=' + vtoken + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate;
      if (flag) {
        if (typeof vtoken === 'string') {
          body = module.util.parseQueryString(vtoken);
        } else {
          var email = module.util.getQueryParameterByName('email');
          body = {
            'email': email ? email.replace(/ /g, '+') : '',
            'otp': vtoken
          };
        }
        body['welcomeemailtemplate'] = module.options.welcomeEmailTemplate;
        method = 'post';
        var route = body.username ? 'username' : 'email';
        url = LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/' + route + '/verifyotp?apiKey=' + module.options.apiKey;
      }
      module.util.ajaxCall(method, url, body, function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          privateFunctionsModule.loginHandleToken(response, '', onSuccess, onError, _classPrefix);
        }
      }, 'passwordlessLogin##otp');
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function loginHandleToken
  * @param {Object} regResponse api response object hold error or success code
  * @param {String} data json string hold email and password values
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Boolean} oneTouchLogin flag for oneTouchLogin enabled or not
  * @description This function will handle user account login process.
  */
  privateFunctionsModule.loginHandleToken = function (regResponse, data, onSuccess, onError, _classPrefix, oneTouchLogin) {
    LoginRadiusDefaults.lrResponseCounter = 0;
    LoginRadiusDefaults.lrCounterJwtResponse = '';
    LoginRadiusDefaults.lrCounterTokenResponse = '';
    if (regResponse) {
      if (regResponse.ErrorCode) {
        onError(privateFunctionsModule.loginRadiusErrorTojsError(regResponse));
      } else {
        if (regResponse.Data && regResponse.Data.hasOwnProperty('Profile')) {
          regResponse = regResponse.Data;
          delete regResponse.Data;
          delete regResponse.IsPosted;
        }
        if (module.options.privacyPolicyConfiguration.IsEnabled && regResponse.Profile) {
          var isLatestPrivacyPolicy = false;
          if (regResponse.Profile.PrivacyPolicy && regResponse.Profile.PrivacyPolicy.Version) {
            isLatestPrivacyPolicy = privateFunctionsModule.checkForLatestPrivacyPolicy(regResponse.Profile);
          }
          regResponse.Profile = Object.assign({}, regResponse.Profile, {
            'IsLatestPrivacyPolicy': isLatestPrivacyPolicy
          });
        }
        var handleTokenResponse = function () {
          if (module.LoginRadiusHostedPage && regResponse.access_token) {
            LRNameSpace.cookies.setItem('lr-session-token', regResponse.access_token);
          }
          LoginRadiusDefaults.lrResponseCounter++;
          LoginRadiusDefaults.lrCounterTokenResponse = regResponse;
          if (module.options.tokenType && module.options.tokenType.toLowerCase() === 'jwt') {
            // eslint-disable-next-line no-magic-numbers
            if (LoginRadiusDefaults.lrResponseCounter === 2 && LoginRadiusDefaults.lrCounterJwtResponse && LoginRadiusDefaults.lrCounterJwtResponse.signature) {
              regResponse.jwttoken = LoginRadiusDefaults.lrCounterJwtResponse.signature;

              // eslint-disable-next-line no-eq-null
              if (data != null && data !== '') {
                onSuccess(regResponse, module.util.parseQueryString(data));
              } else {
                onSuccess(regResponse);
              }
            }
          } else {
            // eslint-disable-next-line no-eq-null
            if (data != null && data !== '') {
              onSuccess(regResponse, module.util.parseQueryString(data));
            } else {
              onSuccess(regResponse);
            }
          }
        };
        var getSafariToken = module.storage.getBrowserStorage('LRSetSafariToken');
        module.storage.removeBrowserStorage('LRSetSafariToken');
        if (module.setHostedToken || getSafariToken) {
          onSuccess(regResponse);
        } else {
          var schema = (module.registrationFormSchema && module.registrationFormSchema.length > 0) ? module.registrationFormSchema : module.options.RegistrationFormSchema;
          var phoneSchema = module.util.findInSchema(schema, 'name', 'phoneid');
          var phonereq = (phoneSchema && (phoneSchema.rules.indexOf('required') !== -1) && module.options.phoneLogin);
          var userProfile = regResponse.Profile || regResponse.Data;
          var requiredEmailFlow = !(module.options.disabledEmailVerification || module.options.optionalEmailVerification);
          if (userProfile && !userProfile.EmailVerified && requiredEmailFlow && !oneTouchLogin) {
            onError([
              privateFunctionsModule.setMappedMessage(defaultMessages['emailNotVerified'])
            ]);
          } else if (phonereq && userProfile && !userProfile.PhoneIdVerified && !oneTouchLogin) {
            if (userProfile.PhoneId) {
              var phoneObj = {
                'phone': userProfile.PhoneId

              };
              var container = module.currentLRContainer;
              var _onSuccess = function () {
                privateFunctionsModule.verifyOTP('phone=' + userProfile.PhoneId, container, onSuccess, onError, _classPrefix);
                privateFunctionsModule.resendOTP('phone=' + userProfile.PhoneId + '&noPhoneVerified=false', container, onSuccess, onError, _classPrefix);
                if (module.options.isVoiceOtp) {
                  privateFunctionsModule.resendOTP('phone=' + userProfile.PhoneId + '&noPhoneVerified=false', container, onSuccess, onError, _classPrefix, true);
                }
              };
              controllers.resendOTPController(phoneObj, _onSuccess, onError, _classPrefix);
            } else {
              module.log('Phone ID is required field.');
            }
          } else {
            if (userProfile && userProfile.Uid) {
              module.storage.setBrowserStorage(LoginRadiusDefaults.storedUidName, userProfile.Uid);
            }
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedTokenName, regResponse.access_token);
            if (module.options.isPINAuthentication && module.options.PINConfiguration.PINLogin && regResponse && regResponse.session_token) {
              module.setSessionToken(regResponse);
            }
            if (LoginRadiusDefaults.isSSOInitFired && regResponse.access_token) {
              privateFunctionsModule.setToken(regResponse.access_token);

              var userAgent = navigator.userAgent.toLowerCase();
              // Safari change
              var isSafari = !!(userAgent.indexOf('crios') === -1 &&
                userAgent.indexOf('chrome') === -1 &&
                userAgent.indexOf('safari') >= 0);

              var iOS = /ipad|iphone|ipod/.test(userAgent) && !window.MSStream;
              var isUc = userAgent.indexOf('ucbrowser') >= 0;
              var iOSChrome = /crios/i.test(userAgent);
              var domain = module.options.customDomain || module.options.appName + '.' + LoginRadiusDefaults.hubDomain;
              var vtype = module.util.getQueryParameterByName('vtype');
              var vtoken = module.util.getQueryParameterByName('vtoken');
              var loc = window.location.href;
              if (vtype) {
                loc = loc.replace('?vtype=' + vtype, '').replace('&vtype=' + vtype, '');
              }
              if (vtoken) {
                loc = loc.replace('&vtoken=' + vtoken, '').replace('?vtoken=' + vtoken, '');
              }
              loc = encodeURIComponent(loc);
              if (isSafari || (iOS && isUc) || (iOS && iOSChrome)) {
                if (!module.options.askRequiredFieldForTraditionalLogin) {
                  module.storage.setBrowserStorage('LRTraditionalLogin', true);
                }
                module.$hooks.call('setCurrentAction');
                // var safariProtocol = module.options.safariHttpsEnable ? 'https' : 'http';
                var safariProtocol = 'https';
                if (module.options.stayLogin) {
                  var stayLogin = module.storage.getBrowserStorage('lr-rememberme');
                  module.storage.removeBrowserStorage('lr-rememberme');
                  window.location = safariProtocol + '://' + domain + '/ssologin/setCustomSafariToken?token=' + regResponse.access_token + '&apiKey=' + module.options.apiKey + '&isrememberMe=' + stayLogin + '&callback=' + loc;
                } else {
                  window.location = safariProtocol + '://' + domain + '/ssologin/setSafariToken?token=' + regResponse.access_token + '&apiKey=' + module.options.apiKey + '&callback=' + loc;
                }
              } else {
                var stayLoginCheck = '';
                var apiString = 'setToken';

                if (module.options.stayLogin) {
                  stayLoginCheck = '&isrememberMe=' + module.storage.getBrowserStorage('lr-rememberme');
                  module.storage.removeBrowserStorage('lr-rememberme');
                  apiString = 'setCustomToken';
                }
                module.util.ajaxCall('get', 'https://' + domain + '/ssologin/' + apiString + '?access_token=' + regResponse.access_token + '&apiKey=' + module.options.apiKey + stayLoginCheck, '', function () {
                  handleTokenResponse();
                }, 'setToken');
              }
            } else {
              handleTokenResponse();
            }
            if (module.options.tokenType && module.options.tokenType.toLowerCase() === 'jwt') {
              privateFunctionsModule.getJwtToken(regResponse.access_token, onSuccess, onError);
            }
          }
        }
      }
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function getJwtToken
  * @param {String} accessToken <access_token>
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @description This function will call api and get JWT token.
  */
  privateFunctionsModule.getJwtToken = function (accessToken, onSuccess, onError) {
    module.util.ajaxCall('get', LoginRadiusDefaults.cloudApiDomain + 'sso/jwt/api/token?apikey=' + module.options.apiKey + '&jwtapp=' + module.options.integrationName + '&access_token=' + accessToken, '', function (jwtResponse) {
      LoginRadiusDefaults.lrResponseCounter++;
      LoginRadiusDefaults.lrCounterJwtResponse = jwtResponse;
      // eslint-disable-next-line no-magic-numbers
      if (LoginRadiusDefaults.lrResponseCounter === 2) {
        if (jwtResponse.ErrorCode) {
          onError(jwtResponse);
        } else {
          LoginRadiusDefaults.lrCounterTokenResponse.jwttoken = jwtResponse.signature;
          onSuccess(LoginRadiusDefaults.lrCounterTokenResponse);
        }
      }
    }, 'JWTToken');
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function mapSchema
  * @param {Array} schema form fields objects array
  * @param {Object} userProfile user profile info object
  * @param {String} getProfileSchema [optional], string which can hold 'profileeditor'
  * @param {Boolean} progressiveProfiling [optional], flag for progressiveProfiling
  * @return {Array} schema|profileSchema array
  * @description This function will map schema with profileSchema according to given conditional options and return schema.
  */
  privateFunctionsModule.mapSchema = function (schema, userProfile, getProfileSchema, progressiveProfiling) {
    userProfile = module.util.keysToLowerCase(userProfile);
    var profileSchema = [];
    Object.keys(schema).forEach(function (_key) {
      profileSchema.push(schema[_key]);
    });
    for (var i = 0; i < schema.length; i++) {
      // eslint-disable-next-line no-eq-null
      if (schema[i] != null) {
        if (schema[i].name.toLowerCase() === 'emailid' && userProfile.email && userProfile.email[0] && userProfile.email[0].value && userProfile.email[0].value !== '') {
          if (userProfile.emailverified || ((module.options.disabledEmailVerification || module.options.optionalEmailVerification) && (!module.options.askEmailForUnverifiedProfileAlways))) {
            profileSchema[i].value = userProfile.email[0].value;
            schema[i] = null;
            continue;
          } else {
            if (!module.options.askEmailForUnverifiedProfileAlways || module.setHostedToken) {
              profileSchema[i] = schema[i] = null;
              continue;
            }
          }
          // eslint-disable-next-line no-eq-null
        } else if (schema[i].name.toLowerCase() === 'country' && schema[i].Parent === '' && userProfile.country && userProfile.country.name != null && userProfile.country.name !== '' && userProfile.country.name.toLowerCase() !== 'unknown') {
          profileSchema[i].value = userProfile.country.name;
          if (userProfile.country.code) {
            profileSchema[i].value = userProfile.country.code + '|' + profileSchema[i].value;
          }
          schema[i] = null;
        } else if (schema[i].name.toLowerCase() === 'emailsubscription' && userProfile.isemailsubscribed && userProfile.isemailsubscribed !== '') {
          profileSchema[i].value = userProfile.isemailsubscribed;
          schema[i] = null;
        } else if (schema[i].name.toLowerCase() === 'phoneid' && userProfile.phoneid && userProfile.phoneid !== '') {
          profileSchema[i].value = userProfile.phoneid.replace('+', '');
          schema[i] = null;
        } else if (schema[i].name.toLowerCase() === 'birthdate' && userProfile.birthdate && userProfile.birthdate !== '') {
          var birthdate = userProfile.birthdate.replace('-', '/').replace('-', '/').split('/');
          if (birthdate[2] && birthdate[2] !== '') {
            profileSchema[i].value = userProfile.birthdate;
            schema[i] = null;
            continue;
          }
        } else if (schema[i].name.toLowerCase() === 'password' || schema[i].name.toLowerCase() === 'confirmpassword') {
          // eslint-disable-next-line no-eq-null
          if (userProfile.password != null || (!module.options.promptPasswordOnSocialLogin && !(module.options.promptPasswordOnFirstLoginForSocial))) {
            profileSchema[i] = schema[i] = null;
            continue;
          }
        } else if (schema[i].name.toLowerCase() === 'pin' || schema[i].name.toLowerCase() === 'confirmpin') {
          if ((userProfile.pin && userProfile.pin.pin) || !(module.options.isPINAuthentication)) {
            profileSchema[i] = schema[i] = null;
            continue;
          }
        } else if (schema[i].Parent !== '' && schema[i].Parent !== undefined && schema[i].Parent !== null) {
          if (schema[i].Parent && userProfile[schema[i].Parent.toLowerCase()] && userProfile[schema[i].Parent.toLowerCase()] !== undefined) {
            var schemaName = schema[i].name.indexOf('_') !== -1 ? schema[i].name.split('_')[1] : schema[i].name;
            var key = Object.keys(userProfile[schema[i].Parent.toLowerCase()]).length - 1;
            if (typeof userProfile[schema[i].Parent.toLowerCase()] === 'object' && userProfile[schema[i].Parent.toLowerCase()][key] && userProfile[schema[i].Parent.toLowerCase()][key][schemaName.toLowerCase()]) {
              // eslint-disable-next-line no-eq-null
              if (userProfile[schema[i].Parent.toLowerCase()][key][schemaName.toLowerCase()] != null && userProfile[schema[i].Parent.toLowerCase()][key][schemaName.toLowerCase()] !== undefined && userProfile[schema[i].Parent.toLowerCase()][key][schemaName.toLowerCase()] !== 'unknown') {
                profileSchema[i].value = userProfile[schema[i].Parent.toLowerCase()][key][schemaName.toLowerCase()];
                schema[i] = null;
                continue;
              }
            } else {
              profileSchema[i].value = userProfile[schema[i].Parent.toLowerCase()][schema[i].name.toLowerCase()];
              schema[i] = null;
              continue;
            }
          }
        } else if (schema[i].name.indexOf('cf_') === 0 && userProfile.customfields && userProfile.customfields[schema[i].name.replace('cf_', '').toLowerCase()]) {
          profileSchema[i].value = userProfile.customfields[schema[i].name.replace('cf_', '').toLowerCase()];
          schema[i] = null;
          continue;
        } else {
          // eslint-disable-next-line no-eq-null
          if (schema[i].name && typeof userProfile[schema[i].name.toLowerCase()] !== 'object' && userProfile[schema[i].name.toLowerCase()] != null && userProfile[schema[i].name.toLowerCase()] !== '' && userProfile[schema[i].name.toLowerCase()] !== undefined && userProfile[schema[i].name.toLowerCase()] !== 'unknown') {
            profileSchema[i].value = userProfile[schema[i].name.toLowerCase()];
            schema[i] = null;
          }
        }
      }
    }
    schema = schema.filter(function (n) {
      return n;
    });
    if (getProfileSchema && getProfileSchema === 'profileeditor' && !userProfile.ErrorCode) {
      profileSchema = profileSchema.filter(function (n) {
        return n;
      });
      return profileSchema;
    }
    for (var h = 0; h < schema.length; h++) {
      // eslint-disable-next-line no-eq-null
      if ((schema[h].rules != null && (schema[h].rules !== '' && schema[h].rules.indexOf('required') > -1)) ||
        (module.options.askOptionalFieldsOnRegistration && userProfile.firstlogin === true && (userProfile.registrationprovider).toLowerCase() !== 'email') || (module.options.askOptionalFieldsOnProgressiveSteps && progressiveProfiling) || module.askPinOnLogin) {
        if (getProfileSchema && !userProfile.ErrorCode) {
          profileSchema = profileSchema.filter(function (n) {
            return n;
          });
          return profileSchema;
        }
        return schema;
      }
    }

    return [];
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function loginRadiusErrorTojsError
  * @param {String} lrError error message
  * @return {Array} jsError error message array
  * @description Will set lr error msg and push error on js error array.
  */
  privateFunctionsModule.loginRadiusErrorTojsError = function (lrError) {
    var jsError = [];
    jsError.push(privateFunctionsModule.setMappedMessage(lrError));
    return jsError;
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setMappedMessage
  * @param {String} lrMessage error message
  * @return {String} lrMessage error message
  * @description Will set the lr error msg and return.
  */
  privateFunctionsModule.setMappedMessage = function (lrMessage) {
    for (var i = 0; i < module.errorMessages.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (module.errorMessages[i].code == lrMessage.ErrorCode) {
        lrMessage.Message = module.errorMessages[i].message || lrMessage.Message;
        lrMessage.Description = module.errorMessages[i].description || lrMessage.Description;
      }
    }
    return lrMessage;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setCustomLabel
  * @param {Array} schema form fields array
  * @description Will set custom lable on form schema fields.
  */
  privateFunctionsModule.setCustomLabel = function (schema) {
    for (var i = 0; i < schema.length; i++) {
      if (schema[i] && module.formCustomLabel[schema[i].name]) {
        schema[i].display = module.formCustomLabel[schema[i].name];
      }
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setCustomTitle
  * @param {Array} schema form fields array
  * @description Will set custom title on form schema fields.
  */
  privateFunctionsModule.setCustomTitle = function (schema) {
    for (var i = 0; i < schema.length; i++) {
      if (schema[i] && module.formElementsTitle[schema[i].name]) {
        schema[i].title = module.formElementsTitle[schema[i].name];
      }
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setPlaceholder
  * @param {Array} schema form fields array
  * @description Will set placeholder on form schema fields.
  */
  privateFunctionsModule.setPlaceholder = function (schema) {
    for (var i = 0; i < schema.length; i++) {
      if (schema[i] && module.formPlaceholder[schema[i].name]) {
        schema[i].placeholder = module.formPlaceholder[schema[i].name];
      }
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setValidation
  * @param {Array} schema form fields array
  * @description Will set validation rules on form schema fields.
  */
  privateFunctionsModule.setValidation = function (schema) {
    if (module.formValidations[schema.name]) {
      schema.rules = module.formValidations[schema.name];
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setAttribute
  * @param {Object} schema form fields object
  * @param {Object} elem html element
  * @description Will set schema html element attribute key and values.
  */
  privateFunctionsModule.setAttribute = function (schema, elem) {
    if (module.formElementAttributes[schema.name]) {
      var attributes = module.formElementAttributes[schema.name].split('&');
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i].split('=');
        var key = attribute.splice(0, 1);
        var value = attribute.join('=');
        elem.setAttribute(key, value);
      }
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function verifyOTP
  * @param {String|Object} phoneData hold phone data
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description Will create verifyOTP form and initialize the verifyOTP process.
  */
  privateFunctionsModule.verifyOTP = function (phoneData, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField) {
    var check2FA = false;
    var formName = 'otp';
    var value = '';
    if (module.LRCheck2FA && (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication) && !module.LRCheckRegistration) {
      check2FA = true;
      formName = 'twofaotp';
    }
    var schema = module.otpSchema;
    if (phoneData.mfaEmailToken && phoneData.EmailId) {
      value = phoneData.EmailId;
      formName = 'twofaemailotp';
      LoginRadiusDefaults.innerHTML = false;
      var hiddenEmailSchema = module.util.findInSchema(schema, 'name', 'emailid');
      if (hiddenEmailSchema) {
        hiddenEmailSchema['value'] = phoneData.EmailId;
      } else {
        schema.push({
          type: 'hidden',
          name: 'emailid',
          value: phoneData.EmailId
        });
      }
    } else {
      var _phoneData = phoneData;
      if (phoneData && typeof phoneData === 'string') {
        _phoneData = JSON.parse(JSON.stringify(phoneData));
        _phoneData = module.util.parseQueryString(_phoneData);
      }
      value = _phoneData.phone || _phoneData.phoneid || _phoneData.phoneId || _phoneData.phoneNo2FA || '';
    }
    if (value && schema && schema[0] && schema[0].name === 'otp') {
      module.$hooks.register('afterFormRender', function (name, container, _classPrefix, form) {
        if (form && form.name === 'loginradius-' + formName && form[0].name === schema[0].name) {
          if (form[0].labels && form[0].labels[0].innerText && form[0].labels[0].innerText.indexOf('%value') !== -1) {
            form[0].labels[0].innerText = form[0].labels[0].innerText.replace('%value', value);
          }
        }
      });
    }
    privateFunctionsModule.createForm(schema, formName, container, function (data) {
      if (check2FA || phoneData.phoneNo2FA) {
        if (phoneData.mfaEmailToken && typeof data === 'string') {
          data += '&mfaEmailToken=true';
        }
        controllers.verify2FAOTPController(data, onSuccess, onError, passwordExpiry, requiredField);
      } else {
        if (typeof phoneData === 'string' || phoneData instanceof String) { phoneData = module.util.parseQueryString(phoneData); }

        data = module.util.parseQueryString(data);
        var phoneToVerify;
        if (phoneData.phone) {
          phoneToVerify = {
            'phone': phoneData.phone
          };
        } else if (phoneData.phoneid || phoneData.phoneId) {
          phoneToVerify = {
            'phone': phoneData.phoneid || phoneData.phoneId
          };
        }
        if (phoneData.onetouchloginflag) {
          data.onetouchloginflag = true;
        }
        if (phoneData.haveToken) {
          data.haveToken = true;
        }

        controllers.verifyOTPController(data, phoneToVerify, onSuccess, onError, passwordExpiry, requiredField);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resendOTP
  * @param {String|Object} phoneData hold phone data
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Boolean} isVoice flag for vpice OTP
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback
  * @param {Boolean} updatePhone flag for change phone
  * @description Create resendOTP form and and initialize the resendOTP process.
  */
  privateFunctionsModule.resendOTP = function (phoneData, container, onSuccess, onError, _classPrefix_, isVoice, passwordExpiry, requiredField, updatePhone) {
    var phoneObj = {};
    var recaptchaID = LoginRadiusDefaults.idPrefix + 'recaptcha_widget_' + 'otp';
    var IsPhoneVerified = true;
    var callResendManuallyFn = true;
    if (typeof phoneData === 'string' || phoneData instanceof String) {
      phoneData = (module.util.parseQueryString(phoneData));
    }
    if (phoneData.noPhoneVerified) {
      IsPhoneVerified = false;
    }
    var twofa = true;
    if (phoneData.phoneid || phoneData.phoneId) {
      twofa = false;
      phoneObj = {
        'phone': phoneData.phoneid || phoneData.phoneId
      };
    } else if (phoneData.phone) {
      if (!module.socialLoginFlag) {
        twofa = false;
      }
      phoneObj = phoneData;
    } else if (phoneData.phoneNo2FA || phoneData.phoneno2fa) {
      phoneObj = {
        'phoneno2fa': phoneData.phoneNo2FA || phoneData.phoneno2fa
      };
    } else if (phoneData.SecondFactorAuthentication && phoneData.SecondFactorAuthentication.OTPPhoneNo) {
      phoneObj = {
        'phoneno2fa': phoneData.SecondFactorAuthentication.OTPPhoneNo
      };
    }
    // Unversal button adding method
    var resendVoiceOTPBtn = null;

    var resendOTPBtn = module.util.getButtonAttribute('resendotp', _classPrefix_);

    if (isVoice) {
      resendVoiceOTPBtn = module.util.getButtonAttribute('resendvoiceotp', _classPrefix_);
    }
    var _classPrefix = _classPrefix_ || LoginRadiusDefaults.classPrefix;
    var formName = twofa ? 'twofaotp' : 'otp';
    var formElement = document.getElementsByName(_classPrefix + formName)[0];
    if (!formElement) {
      formName = (formName === 'twofaotp') ? 'otp' : 'twofaotp';
      formElement = document.getElementsByName(_classPrefix + formName)[0];
    }
    if (formElement) {
      var nextsibling = module.util.findInSchema(formElement, 'type', 'submit');
      if (nextsibling) {
        if (isVoice) {
          nextsibling.parentNode.insertBefore(resendVoiceOTPBtn, nextsibling.nextSibling);
        }
        nextsibling.parentNode.insertBefore(resendOTPBtn, nextsibling.nextSibling);
      } else {
        if (isVoice) {
          formElement.appendChild(resendVoiceOTPBtn);
        }
        formElement.appendChild(resendOTPBtn);
      }
    }
    if (module.LRCheckLogin && twofa && (!IsPhoneVerified || module.storage.getBrowserStorage(LoginRadiusDefaults.storedOTPAuth) === 'false')) {
      privateFunctionsModule.changeNumberForm(container, formElement, onSuccess, onError, _classPrefix, '', passwordExpiry, requiredField);
    }
    var captchaHandleCallback = function () {
      // console.log()
    };
    if (phoneData.onetouchloginflag) {
      callResendManuallyFn = false;
      phoneObj.onetouchloginflag = true;
      captchaHandleCallback = function captchaHandle (key) {
        var data = {};
        if (typeof key === 'string') {
          data['success'] = key;
        } else {
          data = key;
        }
        if (data['error']) {
          onError(data['error']);
        } else {
          if (window.grecaptcha) {
            phoneObj['g-recaptcha-response'] = data['success'];
            grecaptcha.reset(window[recaptchaID + 'lr_recaptcha_widgets_idprefix']);
          }
          if (window.hcaptcha && module.options.hCaptchaSiteKey) {
            phoneObj['h-captcha-response'] = data['success'];
            window.hcaptcha.reset(window[recaptchaID + 'lr_recaptcha_widgets_idprefix']);
          }
          privateFunctionsModule.resendOTPManually(phoneObj, onSuccess, onError, _classPrefix, phoneObj.isVoice);
        }
      };

      module.$hooks.call('addFormCaptcha', module.currentLRContainer, '', '', recaptchaID);
    }
    if (phoneData.updatePhone) {
      phoneObj.updatePhone = true;
    }
    var handleResendOTPBtnClick = function (event, isVoice) {
      phoneObj.isVoice = isVoice;
      window.onCaptchaSubmit = captchaHandleCallback;
      if (module.options.disableResendOTPButton) {
        module.util.disableResendOTPButton(event);
      }
      if (module.options.isCaptchaEnabled && !callResendManuallyFn) {
        module.$hooks.call('addFormCaptchaExecute', recaptchaID, true, captchaHandleCallback);
      } else if (updatePhone) {
        var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
        if (token && privateFunctionsModule.isValidToken(token, onError)) {
          let url = LoginRadiusDefaults.apiDomain + '/auth/phone?apiKey=' + module.options.apiKey + '&access_token=' + token + '&smsTemplate=' + module.options.smsTemplateUpdatePhone;
          if (isVoice) {
            url += '&isvoiceotp=true';
          }
          module.util.ajaxCall('put', url, phoneObj, function (response) {
            if (response.ErrorCode) {
              onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
            }
          }, 'updatePhone');
        }
      } else if (callResendManuallyFn) {
        privateFunctionsModule.resendOTPManually(phoneObj, onSuccess, onError, _classPrefix, isVoice);
      }
    };
    if (resendVoiceOTPBtn) {
      module.util.addEvent('click', resendVoiceOTPBtn, function (event) {
        handleResendOTPBtnClick(event, true);
      });
    }
    module.util.addEvent('click', resendOTPBtn, function (event) {
      handleResendOTPBtnClick(event, false);
    });
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function sendInstantSignInLink
  * @param {String} data json string hold form data ex. 'email'
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @description Will send instant user signin link to user linked email address for passwordless login.
  */
  privateFunctionsModule.sendInstantSignInLink = function (data, onSuccess, onError, container, _classPrefix) {
    var formData = module.util.parseQueryString(data);
    var str = formData.emailid || formData.email;
    if (!LoginRadiusDefaults.regexExpression.emailRegex.test(str) && !(module.options.usernameLogin || module.options.duplicateEmailWithUniqueUsername)) {
      onError([privateFunctionsModule.setMappedMessage(defaultMessages['invalidEmail'])]);
    } else {
      var payloadData;
      if (LoginRadiusDefaults.regexExpression.emailRegex.test(str)) {
        payloadData = 'email=' + encodeURIComponent(str.replace(/ /g, '+'));
      } else if (module.options.usernameLogin || module.options.duplicateEmailWithUniqueUsername) {
        payloadData = 'username=' + str;
      }
      payloadData += '&oneClickSignIn=true';
      var passwordlessLoginEmailTemplate = module.options.instantLinkLoginEmailTemplate || module.options.passwordlessLoginEmailTemplate;
      /// add invitaiton
      let url = LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/email?apiKey=' + module.options.apiKey + '&verificationUrl=' + module.options.verificationUrl + '&passwordlesslogintemplate=' + passwordlessLoginEmailTemplate + '&' + payloadData;
      if (module.options.isB2BEnabled) {
        const invitationType = module.util.getHashParam('vtype');
        if (invitationType === 'orginvite') {
          var token = module.util.getHashParam('vtoken');
          if (token) {
            url += '&invitation_token=' + token;
          }
        }
      }
      module.util.ajaxCall('GET', url, '', function (signinResponse) {
        window.lrpasswordlessloginotp = false;
        window.lrpasswordlesslogin = false;
        if (signinResponse.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(signinResponse));
        } else {
          onSuccess(signinResponse, payloadData);
        }
      }, 'passwordlessLogin');
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function sendInstantSignInOtp
  * @param {String} data json string hold form data ex. 'email'
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @description Will send instant user signin otp to user linked email address for passwordless login.
  */
  privateFunctionsModule.sendInstantSignInOtp = function (data, onSuccess, onError, container, _classPrefix) {
    var formData = module.util.parseQueryString(data);
    var str = formData.emailid || formData.email;
    if (!LoginRadiusDefaults.regexExpression.phoneRegex.test(str)) {
      onError([privateFunctionsModule.setMappedMessage(defaultMessages['invalidPhone'])]);
    } else {
      var payloadData = 'phone=' + str;
      var smsTemplate = module.options.smsTemplateInstantOTPLogin || module.options.passwordlessLoginSMSTemplate;
      module.util.ajaxCall('GET', LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/otp?apiKey=' + module.options.apiKey + '&' + payloadData + '&smsTemplate=' + smsTemplate, '', function (signinResponse) {
        window.lrpasswordlessloginotp = false;
        window.lrpasswordlesslogin = false;
        if (signinResponse.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(signinResponse));
        } else {
          onSuccess(signinResponse);
          if (signinResponse.Data && signinResponse.Data.Sid) {
            module.$hooks.register('beforeFormRender', function (name, _schema) {
              if (!module.util.findInSchema(_schema, 'name', 'resendotp')) {
                var resendBtnOTPSchema = Object.assign({}, module.btnOTPSchema, {
                  name: 'resendotp',
                  display: 'Resend via SMS',
                  eventCallback: function (event) {
                    if (module.options.disableResendOTPButton) {
                      module.util.disableResendOTPButton(event);
                    }
                    var resendOTPArgs = {
                      data: payloadData,
                      onsuccess: onSuccess,
                      onerror: onError,
                      smstemplate: smsTemplate,
                      action: 'sendInstantSignInResendOtp'
                    };
                    privateFunctionsModule.resendOTPHandler(resendOTPArgs);
                  }
                });
                _schema.push(resendBtnOTPSchema);
                if (module.options.isVoiceOtp) {
                  var resendBtnVOTPSchema = Object.assign({}, module.btnOTPSchema, {
                    name: 'resendvoiceotp',
                    display: 'Resend via Voice call',
                    eventCallback: function (event) {
                      if (module.options.disableResendOTPButton) {
                        module.util.disableResendOTPButton(event);
                      }
                      var resendOTPArgs = {
                        data: payloadData,
                        onsuccess: onSuccess,
                        onerror: onError,
                        smstemplate: smsTemplate,
                        voiceotp: true,
                        action: 'sendInstantSignInResendOtp'
                      };
                      privateFunctionsModule.resendOTPHandler(resendOTPArgs);
                    }
                  });
                  _schema.push(resendBtnVOTPSchema);
                }
              }
            });
            var schema = module.otpSchema;
            privateFunctionsModule.createForm(schema, 'otp', container, function (otpData) {
              var recaptchaid = _classPrefix + LoginRadiusDefaults.idPrefix + 'recaptcha_widget_verifyotp';
              controllers.verifyInstantOTP(otpData, module.util.parseQueryString(payloadData), onSuccess, onError, recaptchaid, container, _classPrefix);
            }, function (errors) {
              onError(privateFunctionsModule.setMappedMessage(errors));
            }, _classPrefix);
          }
        }
      }, 'passwordlessLogin');
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resendOTPManually
  * @param {Object} data json object which contains the customer's phone number under the phoneNo2FA parameter. e.g. { phoneNo2FA: "xxxxxxxxxx" }
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description This function will handle resend otp process to user phone number.
  */
  privateFunctionsModule.resendOTPManually = function (data, onSuccess, onError, _classPrefix, isVoice) {
    if (module.LRCheck2FA && (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication) && !module.LRCheckRegistration) {
      if (module.storage.getBrowserStorage(LoginRadiusDefaults.storedOTPAuth) === 'false') {
        var resendOTPArgs = {
          data: data,
          onsuccess: onSuccess,
          onerror: onError,
          smstemplate: module.options.smsTemplate2FA,
          voiceotp: isVoice,
          action: 'update2FANumberResendOTP'
        };
        privateFunctionsModule.resendOTPHandler(resendOTPArgs);
      } else {
        controllers.resendOTP2FAController(data, onSuccess, onError, _classPrefix, isVoice);
      }
    } else {
      controllers.resendOTPController(data, onSuccess, onError, _classPrefix, isVoice);
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function updatePhoneNumber
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {String} formName form name ex. 'updatePhone'
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description This will create updatePhoneNumber form and initialize the updatePhoneNumber process.
  */
  privateFunctionsModule.updatePhoneNumber = function (container, onSuccess, onError, _classPrefix, formName, passwordExpiry, requiredField) {
    if (module.LRCheck2FA && (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication)) {
      module.checkPhoneNumberSchema[0].name = 'phoneNo2FA';
    }
    _classPrefix = _classPrefix || LoginRadiusDefaults.classPrefix;
    var phoneFormElement = document.getElementsByName(_classPrefix + 'showQRcode')[0];
    if (phoneFormElement) {
      LoginRadiusDefaults.innerHTML = true;
    }
    var _formName = formName || 'updatePhone';
    privateFunctionsModule.createForm(module.checkPhoneNumberSchema, _formName, container, function (data) {
      if (data.indexOf('phone=') === -1 && (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication)) {
        controllers.update2FAPhoneNumberController(data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
      } else {
        controllers.updatePhoneNumberController(data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
      }
    },
    function (errors) {
      onError(errors);
    }, _classPrefix);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function pingForSmartLogin
  * @param {String} clientGuid random generated string
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @description THis function will keep ping to user for smart login till user logged in his account.
  */
  privateFunctionsModule.pingForSmartLogin = function (clientGuid, onSuccess, onError) {
    var pingInterval = module.options.autoLoginPingInterval || module.options.smartLoginPingInterval;
    var pingCount = module.options.autoLoginPingCount || module.options.smartLoginPingCount;
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/smartlogin/ping?apiKey=' + module.options.apiKey + '&clientGuid=' + clientGuid, '', function (response) {
      // eslint-disable-next-line no-magic-numbers
      if (response.ErrorCode === 1139 || response.ErrorCode === 1140) {
        setTimeout(function () {
          if (LoginRadiusDefaults.pingCount < pingCount) {
            privateFunctionsModule.pingForSmartLogin(clientGuid, onSuccess, onError);
            LoginRadiusDefaults.pingCount++;
          }
          // eslint-disable-next-line no-magic-numbers
        }, pingInterval * 1000);
        // eslint-disable-next-line no-magic-numbers
      } else if (response.ErrorCode && response.ErrorCode !== 1139) {
        onError(response);
        LoginRadiusDefaults.pingCount = 0;
      } else {
        // onSuccess(response);
        LoginRadiusDefaults.pingCount = 0;
        onSuccess(response);
        // privateFunctionsModule.loginHandleToken(response, "", onSuccess, onError);
      }
    }, 'pingSmartLogin');
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function pingForSocialLogin
  * @param {String} clientGuid random generated string
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @description THis function will keep ping to user for social login till user logged in his account.
  */
  privateFunctionsModule.pingForSocialLogin = function (clientGuid, onSuccess, onError) {
    var pingInterval = module.options.autoLoginPingInterval || module.options.smartLoginPingInterval;
    var pingCount = module.options.autoLoginPingCount || module.options.smartLoginPingCount;
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/ping?apiKey=' + module.options.apiKey + '&clientGuid=' + clientGuid + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.verificationEmailTemplate + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate, '', function (response) {
      // eslint-disable-next-line no-magic-numbers
      if (response.ErrorCode === 1139 || response.ErrorCode === 1140) {
        setTimeout(function () {
          if (LoginRadiusDefaults.pingCount < pingCount) {
            privateFunctionsModule.pingForSocialLogin(clientGuid, onSuccess, onError);
            LoginRadiusDefaults.pingCount++;
          }
          // eslint-disable-next-line no-magic-numbers
        }, pingInterval * 1000);
        // eslint-disable-next-line no-magic-numbers
      } else if (module.options.sendVerificationEmailForUnverifiedSocialLogin && response.ErrorCode && response.ErrorCode === 1026) {
        LoginRadiusDefaults.pingCount = 0;
        onError(response);
        var sendVerficationEmailBtnFn = () => {
          controllers.sendVerificaionEmailForSocialController(clientGuid, module.currentLRContainer, onSuccess, onError, 'clientguid');
        };
        var sendVerficationEmailBtn = module.util.getButtonAttribute('sendverificationemail', LoginRadiusDefaults.classPrefix, sendVerficationEmailBtnFn);
        if (sendVerficationEmailBtn.childNodes && sendVerficationEmailBtn.childNodes[0].id) {
          if (!document.getElementById(sendVerficationEmailBtn.childNodes[0].id)) {
            module.util.addHTMLContent(module.currentLRContainer, sendVerficationEmailBtn, false);
            module.$hooks.call('socialLoginFormRender');
          }
        }
        // eslint-disable-next-line no-magic-numbers
      } else if (response.ErrorCode && response.ErrorCode !== 1139) {
        onError(response);
        LoginRadiusDefaults.pingCount = 0;
      } else {
        // onSuccess(response);
        LoginRadiusDefaults.pingCount = 0;
        onSuccess(response);
      }
    }, 'socialLogin');
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function pingForSocialIdentity
  * @param {String} token users access token
  * @param {String} clientGuid random generated string
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @description THis function will keep ping to user for social identity till user logged in to his social account.
  */
  privateFunctionsModule.pingForSocialIdentity = function (token, clientGuid, onSuccess, onError) {
    var pingInterval = module.options.autoLoginPingInterval || module.options.smartLoginPingInterval;
    var pingCount = module.options.autoLoginPingCount || module.options.smartLoginPingCount;
    let data = {
      'clientGuid': clientGuid
    };
    module.util.ajaxCall('POST', LoginRadiusDefaults.apiDomain + '/auth/socialidentity/ping?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (response) {
      // eslint-disable-next-line no-magic-numbers
      if (response.ErrorCode === 1139 || response.ErrorCode === 1140) {
        setTimeout(function () {
          if (LoginRadiusDefaults.pingCount < pingCount) {
            privateFunctionsModule.pingForSocialIdentity(token, clientGuid, onSuccess, onError);
            LoginRadiusDefaults.pingCount++;
          }
          // eslint-disable-next-line no-magic-numbers
        }, pingInterval * 1000);
        // eslint-disable-next-line no-magic-numbers
      } else if (response.ErrorCode && response.ErrorCode !== 1139) {
        LoginRadiusDefaults.pingCount = 0;
        onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
      } else {
        // onSuccess(response);
        LoginRadiusDefaults.pingCount = 0;
        onSuccess(response);
      }
    }, 'linkAccount');
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function pingForCrossDeviceSSO
  * @param {String} code random generated string
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {Function} qrcodeCallback callback function of clearSetInterval when user got logged successfully
  * @description This function will keep ping to user for CrossDeviceSSO login till user logged in his account.
  */
  privateFunctionsModule.pingForCrossDeviceSSO = function (code, onSuccess, onError, qrcodeCallback) {
    var pingInterval = module.options.crossDeviceSSOPingInterval;
    var pingCount = module.options.crossDeviceSSOPingCount;
    var qrPingCounter = 1;
    module.util.ajaxCall('get', LoginRadiusDefaults.cloudApiDomain + 'sso/mobile/token?apiKey=' + module.options.apiKey + '&code=' + code, '', function (response) {
      if (response && response.access_token === null) {
        module.CDSSOPingApiTimeout = setTimeout(function () {
          if (qrPingCounter < pingCount) {
            privateFunctionsModule.pingForCrossDeviceSSO(code, onSuccess, onError, qrcodeCallback);
            qrPingCounter++;
          }
          // eslint-disable-next-line no-magic-numbers
        }, pingInterval * 1000);
      } else {
        qrPingCounter = 0;
        qrcodeCallback();
        onSuccess(response);
      }
    }, 'pingForCrossDeviceSSO');
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function generateCrossDeviceSSOCode
  * @param {String} container html container id
  * @param {String} expirytime QR code expirytime
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} qrcodeCallback callback function of clearSetInterval when user got logged successfully
  * @description This function will  generate CrossDeviceSSO QR code and show it.
  */
  privateFunctionsModule.generateCrossDeviceSSOCode = function (container, expirytime, onSuccess, onError, _classPrefixName, qrcodeCallback) {
    var defaultExpiryTime = '60';
    var qrcodeExpiryTime = expirytime || defaultExpiryTime;
    if ((qrcodeExpiryTime * 1) > (defaultExpiryTime * 1)) {
      module.log('QR code expiry time should not be more than 60 seconds.');
    } else {
      module.util.ajaxCall('get', LoginRadiusDefaults.cloudApiDomain + 'sso/mobile/generate?apikey=' + module.options.apiKey + '&expiry=' + qrcodeExpiryTime, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          if (response && response.code) {
            var schema = [];
            // eslint-disable-next-line no-undef
            QRCode.toDataURL(response.code, function (_err, url) {
              schema.push({
                type: 'image',
                name: 'qrcode',
                display: 'QR Code',
                rules: '',
                permission: 'r',
                value: url
              });
            });

            var _idPrefix = _classPrefixName || LoginRadiusDefaults.idPrefix;
            var _classPrefix = _classPrefixName || LoginRadiusDefaults.classPrefix;
            var qrCode = document.createElement('div');
            qrCode.setAttribute('name', _idPrefix + 'crossDeviceSSO');
            privateFunctionsModule.createFormFields(schema, qrCode, 'crossDeviceSSO', [], _classPrefix, _idPrefix, onError);
            module.util.addHTMLContent(container, qrCode, LoginRadiusDefaults.innerHTML);
            var handleCDSSOLoginSuccess = function (_resp) {
              privateFunctionsModule.loginHandleToken(_resp, '', onSuccess, onError, '', true);
            };
            privateFunctionsModule.pingForCrossDeviceSSO(response.code, handleCDSSOLoginSuccess, onError, qrcodeCallback);
          }
        }
      }, 'crossDeviceSSO');
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function addChangeEventHandler
  * @param {String} container The form container ID
  * @param {HTMLElement} form form element
  * @param {String} name name of the action
  * @param {Object} datasource Data schema of the parent source
  * @param {String} _classPrefix prefix to be added to class names in form fields
  * @param {Object} childdatasource Data schema of the child source
  * @description Used to add the custom data source based on the parent select
  */
  privateFunctionsModule.addChangeEventHandler = function (container, datasource, childdatasource, _classPrefix) {
    module.util.addEvent('change', document.getElementById(_classPrefix + 'registration-' + datasource.name), function (event) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/registrationdata/' + childdatasource.DataSource + '?apiKey=' + module.options.apiKey + '&parentId=' + this.value, '', function (ds, response) {
        var element = document.getElementById(_classPrefix + 'registration-' + ds.name);
        if (response.ErrorCode) {
          for (var l = 1; l < element.options.length; l++) {
            element.options[l] = null;
          }
        } else {
          for (var j = 0; j < response.length; j++) {
            if (j === 0 && element.options.length > 1) {
              for (var i = 1; i < element.options.length; i++) {
                element.options[i] = null;
              }
              var option1 = document.createElement('option');
              option1.setAttribute('value', response[j].Id);
              option1.appendChild(document.createTextNode(response[j].Key));
              element.appendChild(option1);
            } else {
              var option2 = document.createElement('option');
              option2.setAttribute('value', response[j].Id);
              option2.appendChild(document.createTextNode(response[j].Key));
              element.appendChild(option2);
            }
          }
        }
        for (var k = 0; k < ds.children.length; k++) {
          privateFunctionsModule.addChangeEventHandler(container, ds, ds.children[k], _classPrefix);
        }
      }, 'registration', childdatasource);
    });
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createFormFields
  * @param {Array} schema Schema provided to create form
  * @param {HTMLElement} form form element
  * @param {String} name name of the action
  * @param {Object} validationSchema Schema of the form field
  * @param {String} _classPrefix prefix to be added to class names in form fields
  * @param {String} _idPrefix prefix to be added to id names in form fields
  * @param {Function} onError error call back function
  * @description Create the form fields with provided schema.
  */
  privateFunctionsModule.createFormFields = function (schema, form, name, validationSchema, _classPrefix, _idPrefix, onError) {
    onError = onError || function () { /* do nothing. */ };
    var meterConfig;
    var trimEmail = function (event) {
      var cssId = Math.random();
      var txtpass = this.value;

      var meter = module.util.elementById(name + '-password-strength-meter');
      var text = module.util.elementById(name + '-password-strength-text');
      text.innerHTML = '';
      var score = 0;
      if (txtpass.length > 0) {
        score++;
        if ((txtpass.match(/[a-z]/)) && (txtpass.match(/[A-Z]/))) score++;
        if (txtpass.match(/\d+/)) score++;
        if (txtpass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) score++;
        // eslint-disable-next-line no-magic-numbers
        if (txtpass.length > 12) score++;
      }
      meter.value = score;
      var cssOldElement = document.getElementsByClassName(name + '-password');
      if (cssOldElement.length > 0) {
        for (var l = 0; l < cssOldElement.length; l++) {
          cssOldElement[l].parentNode.removeChild(cssOldElement[l]);
        }
      }
      var css = module.util.elementById(cssId) ? module.util.elementById(cssId) : document.createElement('style');
      css.type = 'text/css';
      css.id = cssId;
      css.setAttribute('class', name + '-password');
      var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
      if (isFirefox) {
        css.innerHTML = '#' + name + '-password-strength-meter::-moz-meter-bar { background: ' + meterConfig[score].color + ' !important; }';
      } else {
        css.innerHTML = '#' + name + '-password-strength-meter::-webkit-meter-optimum-value { background: ' + meterConfig[score].color + ' !important; }';
      }
      document.body.appendChild(css);

      if (txtpass !== '' && score > 0) {
        text.innerHTML = 'Strength: ' + meterConfig[score].Message;
        text.style.color = '';
      } else if (txtpass !== '') {
        text.innerHTML = meterConfig[score].Message;
        text.style.color = meterConfig[score].color;
      }
    };
    const style = 'cursor:pointer;transform: translateY(-50%);position: absolute;top: 50%;right: 16px;width:24px; height:24px;display:block;';
    const eyeSlashIcon = style + 'background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWV5ZS1vZmYiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMC41ODUgMTAuNTg3YTIgMiAwIDAgMCAyLjgyOSAyLjgyOCIgLz48cGF0aCBkPSJNMTYuNjgxIDE2LjY3M2E4LjcxNyA4LjcxNyAwIDAgMSAtNC42ODEgMS4zMjdjLTMuNiAwIC02LjYgLTIgLTkgLTZjMS4yNzIgLTIuMTIgMi43MTIgLTMuNjc4IDQuMzIgLTQuNjc0bTIuODYgLTEuMTQ2YTkuMDU1IDkuMDU1IDAgMCAxIDEuODIgLS4xOGMzLjYgMCA2LjYgMiA5IDZjLS42NjYgMS4xMSAtMS4zNzkgMi4wNjcgLTIuMTM4IDIuODciIC8+PHBhdGggZD0iTTMgM2wxOCAxOCIgLz48L3N2Zz4=")';
    const eyeIcon = style + 'background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWV5ZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEyYTIgMiAwIDEgMCA0IDBhMiAyIDAgMCAwIC00IDAiIC8+PHBhdGggZD0iTTIxIDEyYy0yLjQgNCAtNS40IDYgLTkgNmMtMy42IDAgLTYuNiAtMiAtOSAtNmMyLjQgLTQgNS40IC02IDkgLTZjMy42IDAgNi42IDIgOSA2IiAvPjwvc3ZnPg==")';
    const togglePassVisiblity = function (event) {
      if (event.target.parentNode.childNodes && event.target.parentNode.childNodes[0].id) {
        var password = document.getElementById(event.target.parentNode.childNodes[0].id);
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        if (type === 'text') {
          event.target.setAttribute('style', eyeSlashIcon);
        } else {
          event.target.setAttribute('style', eyeIcon);
        }
      }
    };
    for (var i = 0; i < schema.length; i++) {
      if (schema[i]) {
        privateFunctionsModule.setValidation(schema[i]);

        if (schema[i].rules && schema[i].rules !== '') {
          if (schema[i].rules.indexOf('custom_validation') > -1 && schema[i].rules.indexOf('callback_custom_validation') === -1) {
            schema[i].rules = schema[i].rules.replace(/custom_validation\b/g, 'callback_custom_validation');
          }
        }
        validationSchema[i] = {};
        validationSchema[i].name = schema[i].name;
        validationSchema[i].display = schema[i].display;
        validationSchema[i].rules = schema[i].rules;

        var elem;
        switch (schema[i].type) {
          case 'text':
          {
            elem = document.createElement('textarea');
            break;
          }
          case 'html':
          case 'captcha':
          {
            elem = document.createElement('div');
            break;
          }
          case 'password':
          {
            elem = document.createElement('input');
            elem.type = 'password';
            break;
          }
          case 'hidden':
          {
            elem = document.createElement('input');
            elem.type = 'hidden';
            elem.value = schema[i].value || '';
            break;
          }

          case 'option':
          {
            elem = document.createElement('select');
            var selectLable = document.createElement('option');
            selectLable.appendChild(document.createTextNode('-- select --'));
            selectLable.setAttribute('value', '');
            elem.appendChild(selectLable);
            // eslint-disable-next-line eqeqeq
            if (schema[i].DataSource == undefined) {
              // eslint-disable-next-line no-eq-null
              if (schema[i].options != null) {
                for (var j = 0; j < schema[i].options.length; j++) {
                  var option = document.createElement('option');
                  option.setAttribute('value', schema[i].options[j].value);

                  if (schema[i].name === 'country') { option.setAttribute('value', schema[i].options[j].value + '|' + schema[i].options[j].text); }

                  option.appendChild(document.createTextNode(schema[i].options[j].text));
                  elem.appendChild(option);
                }
                if (module.defaultOptionField[schema[i].name]) {
                  elem.value = module.defaultOptionField[schema[i].name];
                }
              }
            }
            break;
          }
          case 'multi':
          {
            elem = document.createElement('input');
            elem.type = 'checkbox';
            break;
          }
          case 'email':
          {
            elem = document.createElement('input');
            elem.type = 'email';
            break;
          }

          case 'button':
          {
            elem = document.createElement('input');
            elem.type = 'button';
            elem.value = schema[i].display;

            break;
          }
          case 'image':
          {
            //  window.open(data.SecondFactorAuthentication.QRCode);
            elem = document.createElement('img');
            elem.src = schema[i].value;
            elem.type = 'image';
            break;
          }
          default:
          {
            elem = document.createElement('input');
            elem.type = 'text';
            break;
          }
        }

        if (schema[i].title) {
          elem.title = schema[i].title;
        }
        if (schema[i].disabled) {
          elem.disabled = schema[i].disabled;
        }
        privateFunctionsModule.setAttribute(schema[i], elem);

        if (schema[i].placeholder) {
          elem.placeholder = schema[i].placeholder;
        }
        if (schema[i].value) {
          if (schema[i].type === 'multi') {
            elem.checked = true;
          } else {
            elem.value = schema[i].value;
          }
        }
        if (schema[i].type === 'html') {
          var divHTML = document.createElement('div');
          divHTML.setAttribute('class', _classPrefix + '-form-element-content' + ' content-' + _idPrefix + schema[i].name);
          divHTML.innerHTML = schema[i].html;
          if (schema[i].event) {
            module.util.addEvent(schema[i].event, divHTML, schema[i].eventCallback);
          }
          if (schema[i].name === 'consent') {
            var inputs, indx;
            inputs = divHTML.getElementsByTagName('input');
            for (indx = 0; indx < inputs.length; indx++) {
              inputs[indx].setAttribute('id', _idPrefix + name + '-' + inputs[indx].name);
            }
          }
          form.appendChild(divHTML);
        } else if (schema[i].type === 'captcha') {
          var div = document.createElement('div');

          div.setAttribute('class', _classPrefix + '-form-element-content' + ' content-' + _idPrefix + schema[i].name);
          div.innerHTML = schema[i].html;
          if (module.options.formValidationMessage) {
            var validationDivBlock = document.createElement('div');
            validationDivBlock.setAttribute('id', 'validation-' + _idPrefix + name + '-' + schema[i].name);
            validationDivBlock.setAttribute('class', _classPrefix + 'validation-message' + ' validation-' + _idPrefix + schema[i].name);
            div.appendChild(validationDivBlock);
          }
          form.appendChild(div);
        } else {
          elem.setAttribute('name', schema[i].name);
          if (name === 'registration') {
            if (schema[i].name && (schema[i].name.toLowerCase() === 'phoneid' || schema[i].name.toLowerCase() === 'phone') && module.options.existPhoneNumber) {
              module.util.addEvent('blur', elem, function (event) {
                checkPhoneNumberAvailability(event, onError);
              });
            }
            if (schema[i].name && (schema[i].name.toLowerCase() === 'username') && module.options.existUsername) {
              module.util.addEvent('blur', elem, function (event) {
                checkUsernameAvailability(event, onError);
              });
            }
          }
          if (schema[i].name === 'emailid') {
            if (name === 'login' && module.options.isPassKeysEnabled && module.options.isPasskeyAutofill) {
              elem.autocomplete = 'username webauthn';
            }
            module.util.addEvent('keyup', elem, function (event) {
              // eslint-disable-next-line no-magic-numbers
              if (event.keyCode === 32) {
                this.value = this.value.trim();
              }
            });
          }

          elem.setAttribute('id', _idPrefix + name + '-' + schema[i].name);
          if (schema[i].event) {
            module.util.addEvent(schema[i].event, elem, schema[i].eventCallback);
          }

          if (module.eventsName[elem.id]) {
            var events = module.eventsName[elem.id];
            if (module.util.isArray(events)) {
              for (var h = 0; h < events.length; h++) {
                if (events[h].event && events[h].eventCallback) {
                  module.util.addEvent(events[h].event, elem, events[h].eventCallback);
                }
              }
            } else {
              module.util.addEvent(events.event, elem, events.eventCallback);
            }
          }

          if (schema[i].type === 'hidden') {
            form.appendChild(elem);
          } else if (schema[i].type === 'button') {
            var buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('class', _classPrefix + '-form-element-content' + ' content-' + _idPrefix + schema[i].name);
            buttonDiv.appendChild(elem);
            form.appendChild(buttonDiv);
          } else {
            var label = document.createElement('label');
            label.setAttribute('for', _idPrefix + name + '-' + schema[i].name);
            label.innerHTML = schema[i].display;

            elem.setAttribute('class', _classPrefix + schema[i].type + ' ' + _idPrefix + schema[i].name);
            if (schema[i].rules) {
              if (schema[i].rules.indexOf('required') !== -1) {
                elem.className += ' lr-required';
              }
            }
            var containerDiv = document.createElement('div');
            containerDiv.setAttribute('class', _classPrefix + '-form-element-content' + ' content-' + _idPrefix + schema[i].name);
            if (schema[i].type === 'multi') {
              containerDiv.appendChild(elem);
              containerDiv.appendChild(label);
            } else {
              containerDiv.appendChild(label);
              containerDiv.appendChild(elem);
            }
            if (schema[i].style && schema[i].style.length > 0) {
              for (var g = 0; g < schema[i].style.length; g++) {
                containerDiv.style[schema[i].style[g].key] = schema[i].style[g].value;
              }
            }
            if (module.options.formValidationMessage) {
              var validationDiv = document.createElement('div');
              validationDiv.setAttribute('id', 'validation-' + _idPrefix + name + '-' + schema[i].name);
              validationDiv.setAttribute('class', _classPrefix + 'validation-message' + ' validation-' + _idPrefix + schema[i].name);
              containerDiv.appendChild(validationDiv);
            }

            if (module.options.displayPasswordStrength && (elem.name === 'password' || elem.name === 'newpassword') && (name === 'registration' || name === 'resetpassword' || name === 'setpassword' || name === 'changepassword' || name === 'socialRegistration' || name === 'loginRequiredFieldsUpdate')) {
              // eslint-disable-next-line no-magic-numbers
              var minLength = (module.options.passwordLength && module.options.passwordLength.min) || 6;
              // eslint-disable-next-line no-magic-numbers
              var maxLength = (module.options.passwordLength && module.options.passwordLength.max) || 32;
              if (schema[i].rules) {
                var _rules = schema[i].rules.split('|');

                for (var r = 0; r < _rules.length; r++) {
                  if (_rules[r].indexOf('min_length') > -1) {
                    // eslint-disable-next-line no-magic-numbers
                    minLength = _rules[r].substring(11, (_rules[r].length - 1));
                  } else if (_rules[r].indexOf('max_length') > -1) {
                    // eslint-disable-next-line no-magic-numbers
                    maxLength = _rules[r].substring(11, (_rules[r].length - 1));
                  }
                }
              }
              var meterElement = document.createElement('meter');
              meterElement.setAttribute('max', '4');
              meterElement.setAttribute('id', name + '-password-strength-meter');
              var textElement = document.createElement('div');
              textElement.setAttribute('id', name + '-password-strength-text');
              elem.parentNode.appendChild(meterElement);
              elem.parentNode.appendChild(textElement);
              meterConfig = getPasswordMeterConfiguration(minLength, maxLength);

              module.util.addEvent('keyup', elem, trimEmail);
            }

            if (((elem.name === 'password' || elem.name === 'newpassword' || elem.name === 'oldpassword') && module.options.passwordVisibilityControl) || ((elem.name === 'confirmpassword' || elem.name === 'confirmnewpassword') && module.options.confirmPasswordVisibilityControl)) {
              var passwordsvgIcon = document.createElement('i');
              passwordsvgIcon.setAttribute('class', 'fa-eye');
              passwordsvgIcon.setAttribute('style', eyeIcon);
              if (elem.parentNode.id !== 'password-visibility-wrap') {
                var wrapper = document.createElement('div');
                wrapper.setAttribute('id', 'password-visibility-wrap');
                wrapper.setAttribute('style', 'position: relative;');
                elem.parentNode.insertBefore(wrapper, elem);
                wrapper.appendChild(elem);
                wrapper.appendChild(passwordsvgIcon);
              }
              module.util.addEvent('click', passwordsvgIcon, togglePassVisiblity);
            }
            form.appendChild(containerDiv);
          }
        }
      }
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setToken
  * @param {String} token name of the form
  * @description Set the token in the cookie.
  */
  privateFunctionsModule.setToken = function (token) {
    LRNameSpace.cookies.setItem(LoginRadiusDefaults.tokenCookie, token, '', module.options.appPath);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resetGoogleCaptcha
  * @param {String} name name of the form
  * @param {String} recaptchaid The ID of the recpatch container
  * @description Reset the google recaptcha in the form.
  */
  privateFunctionsModule.resetGoogleCaptcha = function (name, recaptchaid) {
    if (module.options.optionalRecaptchaConfiguration && module.options.optionalRecaptchaConfiguration.IsEnabled && name !== 'registration') {
      var domRecaptcha = module.util.elementById(recaptchaid, true);
      if (domRecaptcha && domRecaptcha.innerHTML !== '') {
        if (window.hcaptcha && module.options.hCaptchaSiteKey) {
          window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
        } else if (window.grecaptcha) {
          grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
        }
      }
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @private
  * @function isAddBotProtection
  * @param {String} _name name of the action
  * @param {Boolean} enabledAuthAPIs Auth APi ahs enabled the recaptcha or not
  * @return {Boolean} true|false
  * @description check whether to add bot protection or not.
  */
  function isAddBotProtection (_name, enabledAuthAPIs) {
    var name = _name.toLowerCase();
    return ((name === 'changepassword' && enabledAuthAPIs['PutChangePassword']) || ((name === 'profileeditor' || name === 'loginRequiredFieldsUpdate' || name === 'progressiveProfiling' || name === 'socialRegistration') && enabledAuthAPIs['PutUpdateProfile']) ||
      (name === 'forgotpassword' && ((module.options.phoneLogin && enabledAuthAPIs['PostForgotPasswordByPhone'] && enabledAuthAPIs['PostForgotPasswordByEmail']) || (!module.options.phoneLogin && enabledAuthAPIs['PostForgotPasswordByEmail']))) ||
      (name === 'login' && ((module.options.usernameLogin && enabledAuthAPIs['PostLoginByUserNameAndPassword'] && module.options.phoneLogin && enabledAuthAPIs['PostLoginByEmailAndPassword'] && enabledAuthAPIs['PostLoginByPhoneAndPassword']) ||
        (module.options.phoneLogin && enabledAuthAPIs['PostLoginByEmailAndPassword'] && enabledAuthAPIs['PostLoginByPhoneAndPassword']) ||
        (!module.options.phoneLogin && module.options.usernameLogin && enabledAuthAPIs['PostLoginByUserNameAndPassword']) ||
        (!module.options.usernameLogin && !module.options.phoneLogin && enabledAuthAPIs['PostLoginByEmailAndPassword']))));
  }
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createForm
  * @param {Array} schema Schema provided to create form
  * @param {String} name name of the form
  * @param {String} container container in which form to be appended
  * @param {Function} onSuccess suucess call back function
  * @param {Function} onError error call back function
  * @param {String} _classPrefixName the class prefix to be added into form elements
  * @description Create the form with provided schema.
  */
  privateFunctionsModule.createForm = function (schema, name, container, onSuccess, onError, _classPrefixName, previousName) {
    var _idPrefix = _classPrefixName || LoginRadiusDefaults.idPrefix;
    var _classPrefix = _classPrefixName || LoginRadiusDefaults.classPrefix;
    var grecaptchaid;
    var enabledAuthAPIs;
    var actionName = previousName || name;
    module.LRPrefix = _classPrefixName + '##' + LoginRadiusDefaults.idPrefix;
    if (name !== 'registration' && name !== 'oneTouchLogin' && ((module.options.loginLockedType === 'Captcha') || (module.options.optionalRecaptchaConfiguration && module.options.optionalRecaptchaConfiguration.IsEnabled))) {
      enabledAuthAPIs = module.options.optionalRecaptchaConfiguration.Apis;

      if ((module.options.loginLockedType === 'Captcha' && LoginRadiusDefaults.captchaActions.includes(name.toLowerCase())) || (enabledAuthAPIs && isAddBotProtection(actionName, enabledAuthAPIs))) {
        grecaptchaid = _classPrefixName + LoginRadiusDefaults.idPrefix + 'recaptcha_widget_' + name.toLowerCase();
        module.util.addRecaptchaJS();
        module.util.captchaSchema(grecaptchaid, schema);
      }
    }
    /* Pass key auto fill flow */
    /* if (name === 'login' && module.options.isPassKeysEnabled && module.options.isPasskeyAutofill) {
      module.util.passkeyautofill(function (data) {
        const { assertion, error } = data;
        if (assertion) {
          window['lrpasskeyAutofill'] = true;
          onSuccess(assertion);
        } else {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(error));
        }
      });
    } */
    module.$hooks.call('beforeFormRender', name, schema);
    LoginRadiusDefaults.isRegFormSchemaLock = false;
    LoginRadiusDefaults.isSecurityFormSchemaLock = false;
    if (!module.options.apiKey) {
      module.log('API key must be set.');
    } else {
      privateFunctionsModule.setCustomLabel(schema);
      privateFunctionsModule.setPlaceholder(schema);
      privateFunctionsModule.setCustomTitle(schema);
      if (schema.length > 0) {
        var validationSchema = [];
        var form = document.createElement('form');
        form.setAttribute('name', _idPrefix + name);
        form.setAttribute('method', 'POST');

        privateFunctionsModule.createFormFields(schema, form, name, validationSchema, _classPrefix, _idPrefix, onError);

        var submit = document.createElement('input');
        var buttonName = module.buttonsName[name.toLowerCase()] || defaultButtonsName[name.toLowerCase()];
        var buttonKeyName = defaultButtonsName[name.toLowerCase()];
        var submitButtonId = buttonKeyName.toLowerCase().replace(/ /g, '-');

        submit.type = 'submit';
        if (module.options.isPINAuthentication && name === 'loginRequiredFieldsUpdate' && module.util.findInSchema(schema, 'name', 'pin')) {
          submit.value = 'Continue';
        } else {
          submit.value = buttonName;
        }
        submit.id = _idPrefix + 'submit-' + submitButtonId;
        submit.setAttribute('class', _classPrefix + 'submit' + ' submit-' + _idPrefix + submitButtonId);
        if (module.options.disableButtonOnsubmit) {
          var _currentFormName;
          module.$hooks.register('eventCalls', function (__name) {
            if (!window.lrpasswordlessloginotp && !window.lrpasswordlesslogin) {
              _currentFormName = __name;
            }
          });
          module.$hooks.register('startProcess', function (action) {
            if (_currentFormName === name) {
              submit.disabled = true;
            }
          });
          module.$hooks.register('xhrEndWithError', function (action) {
            if (_currentFormName === name) {
              submit.disabled = false;
            }
          });
          module.$hooks.register('xhrEndWithSuccess', function (action) {
            if (_currentFormName === name && module.options.enableSubmitOnSuccess) {
              submit.disabled = false;
            }
          });
        }
        form.appendChild(submit);
        if (module.options.passwordlessLogin && name === 'login') {
          createOneClickButton('passwordlessloginbuttonlabel', form, submit, _idPrefix, _classPrefix);
        }
        if (module.options.passwordlessLoginOTP && name === 'login') {
          createOneClickButton('passwordlessLoginOTPButtonLabel', form, submit, _idPrefix, _classPrefix);
        }
        if (module.options.isPassKeysEnabled && (name === 'passkeyregister' || name === 'login')) {
          const buttonLabel = name === 'passkeyregister' ? 'registerwithpwd' : 'passkeylogin';
          createPassKeyButton(buttonLabel, form, _idPrefix, _classPrefix);
        }

        module.util.addHTMLContent(container, form, LoginRadiusDefaults.innerHTML);
        module.$hooks.call('afterFormRender', name, container, _classPrefix, form);
        LoginRadiusDefaults.innerHTML = false;

        // eslint-disable-next-line no-undef
        var validator = new FormValidator(_idPrefix + name, validationSchema, function (errors, evt) {
          var formName = document.getElementsByTagName('form');
          var formElementsName = '';
          if (formName[_idPrefix + name]) {
            formElementsName = formName[_idPrefix + name];
          } else if (typeof formName === 'object') {
            for (var t = 0; t < formName.length; t++) {
              if (formName[t].name === _idPrefix + name) {
                formElementsName = formName[t];
                break;
              }
            }
          }

          module.currentLRContainer = formElementsName.parentElement.id;
          module.$hooks.call('eventCalls', name, _classPrefix);
          if (module.mergeFormErrors && module.mergeFormErrors.length > 0) {
            errors = module.util.mergeObjects(errors, module.mergeFormErrors);
          }

          var validationDivs = module.util.elementsByClass(_classPrefix + 'validation-message');
          for (var m = 0; m < validationDivs.length; m++) {
            validationDivs[m].innerHTML = '';
          }
          var recaptchaid = _classPrefixName + _idPrefix + 'recaptcha_widget';
          recaptchaid += '_' + name.toLowerCase();
          var tencentCaptchaId = module.util.elementById(recaptchaid + '_tencent');

          if (module.options.invisibleRecaptcha) {
            window.onCaptchaSubmit = function (response) {
              var serializedForm = module.util.serialize(form);
              if (window.grecaptcha && serializedForm.indexOf('g-recaptcha-response') === -1) {
                serializedForm += '&g-recaptcha-response=' + response;
              }
              if (window.hcaptcha && module.options.hCaptchaSiteKey && serializedForm.indexOf('h-captcha-response') === -1) {
                serializedForm += '&h-captcha-response=' + response;
              }
              onSuccess(serializedForm);
              if (window.hcaptcha && module.options.hCaptchaSiteKey) window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
              else if (window.grecaptcha) grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
            };
          }

          // eslint-disable-next-line eqeqeq
          if (tencentCaptchaId && tencentCaptchaId.style.display !== 'none' && (module.options.tencentCaptcha || (module.options.tencentCaptchaAsFallback && !window.grecaptcha)) && errors.length == 0) {
            tencentCaptchaId.click();
          }

          if (errors.length > 0) {
            module.$hooks.call('afterValidation', name);
            //  if (module.options.formValidationMessage) {
            for (var p = 0; p < errors.length; p++) {
              if (name === 'login' && ((module.options.isPassKeysEnabled && window['lrpasskeylogin']) || (module.options.passwordlessLogin && window['lrpasswordlesslogin']) || (module.options.passwordlessLoginOTP && window['lrpasswordlessloginotp']))) {
                if (errors.length === 1 || module.options.v2Recaptcha || (module.options.hCaptchaSiteKey && !module.options.invisibleRecaptcha)) {
                  if ((errors[p].Id === _idPrefix + '' + name + '-password')) {
                    handleFormResponse(form, onSuccess, recaptchaid, name);
                    return true;
                  }
                  if (errors[p].Id === 'g-recaptcha-response') {
                    handleFormResponse(form, onSuccess, recaptchaid, name);
                    return true;
                  }
                }
              } else if (name === 'passkeyregister' && module.options.isPassKeysEnabled && window['lrpwdregister']) {
                handleFormResponse(form, onSuccess, recaptchaid, name);
                return true;
              } else {
                if (module.options.formValidationMessage && errors[p].Name !== 'resettoken') {
                  module.util.elementById('validation-' + _idPrefix + name + '-' + errors[p].Name).innerHTML = errors[p].Message;
                }
              }
            }
            if (!module.options.formValidationMessage) {
              onError(errors);
              privateFunctionsModule.resetGoogleCaptcha(name, recaptchaid);
            }
          } else {
            handleFormResponse(form, onSuccess, recaptchaid, name);
          }

          if (evt && evt.preventDefault) {
            evt.preventDefault();
          } else if (event) {
            event.returnValue = false;
          }
        });
        var validDateErrorMessage;
        if (module.validationMessages && module.validationMessages.length > 0) {
          for (var i = 0; i < module.validationMessages.length; i++) {
            validator.setMessage(module.validationMessages[i].rule, module.validationMessages[i].message);
            if (module.validationMessages[i].rule === 'valid_date' || module.validationMessages[i].rule === 'callback_valid_date') {
              validDateErrorMessage = module.validationMessages[i].message;
            }
          }
        }

        validator.registerCallback('valid_date', function (value) {
          return isValidDate(value);
        }).setMessage('valid_date', (validDateErrorMessage || 'The %s field must contain a valid date.'));

        validator.registerCallback('custom_validation', function (value, parm) {
          return isCustomValidation(value, parm);
        }).setMessage('custom_validation', 'The %s field is not valid.');

        module.Validator = validator;
      }
    }
    if ((module.options.optionalRecaptchaConfiguration && module.options.optionalRecaptchaConfiguration.IsEnabled && (enabledAuthAPIs && isAddBotProtection(actionName, enabledAuthAPIs))) && name !== 'registration') {
      module.util.renderV2Recaptcha(grecaptchaid, true);
    }
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createConsentInterface
  * @param {Object} data consent object
  * @description This function will create consent interface on registrion form.
  */
  privateFunctionsModule.createConsentInterface = function (data, consentData) {
    var renderedHtml = '';
    if (data) {
      for (var m = 0; m < data.ConsentForm.length; m++) {
        if (data.ConsentForm[m].Type === 'Group') {
          if (data.ConsentForm[m].Consents.length) {
            var consentGroupData = {
              'consentGroupTitle': data.ConsentForm[m].Title,
              'consentGroupDescription': data.ConsentForm[m].Description
            };
            renderedHtml += module.util.hashTmpl(LoginRadiusDefaults.templates.consentGroupTemplate, consentGroupData);
            for (var n = 0; n < data.ConsentForm[m].Consents.length; n++) {
              var optionData = {
                'consentTitle': data.ConsentForm[m].Consents[n].Title,
                'consentDescription': data.ConsentForm[m].Consents[n].Description,
                'consentId': 'consent_' + data.ConsentForm[m].Consents[n].ConsentId
              };
              renderedHtml += module.util.hashTmpl(LoginRadiusDefaults.templates.consentOptionTemplate, optionData);
            }
          }
        } else if (data.ConsentForm[m].Type === 'Consent') {
          for (var o = 0; o < data.ConsentForm[m].Consents.length; o++) {
            var cOptionData = {
              'consentTitle': data.ConsentForm[m].Consents[o].Title,
              'consentDescription': data.ConsentForm[m].Consents[o].Description,
              'consentId': 'consent_' + data.ConsentForm[m].Consents[o].ConsentId
            };
            renderedHtml += module.util.hashTmpl(LoginRadiusDefaults.templates.consentOptionTemplate, cOptionData);
          }
        }
      }
      renderedHtml += module.util.hashTmpl(LoginRadiusDefaults.templates.consentMainTemplate, data);

      if (consentData) {
        var div = document.createElement('div');
        div.innerHTML = renderedHtml.trim();
        for (var i = 0; i < consentData.length; i++) {
          var consentOptionsElement = div.querySelector('input[name="consent_' + consentData[i].ConsentOptionId + '"]');
          if (consentOptionsElement) {
            consentOptionsElement.setAttribute('checked', 'checked');
          }
        }
        renderedHtml = div.innerHTML ? div.innerHTML : '';
      }
    }
    return renderedHtml;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createConsentInterface
  * @param {Object} data consent object
  * @description This function will create consent interface on registrion form.
  */
  privateFunctionsModule.createConsentOptionInterface = function (consentOptions, consentData) {
    var renderedHtml = '';
    if (consentOptions) {
      for (var key in consentOptions) {
        var optionData = {
          'consentTitle': consentOptions[key].Title,
          'consentDescription': consentOptions[key].Description,
          'consentId': 'consent_' + consentOptions[key].ConsentId,
          'checked': !!consentOptions[key].checked
        };
        renderedHtml += module.util.hashTmpl(LoginRadiusDefaults.templates.consentOptionTemplate, optionData);
      }
      if (consentData) {
        var div = document.createElement('div');
        div.innerHTML = renderedHtml.trim();
        for (var i = 0; i < consentData.length; i++) {
          if (consentOptions[consentData[i].ConsentOptionId]) {
            var consentOptionsElement = div.querySelector('input[name="consent_' + consentData[i].ConsentOptionId + '"]');
            consentOptionsElement.setAttribute('checked', 'checked');
          }
        }
        renderedHtml = div.innerHTML ? div.innerHTML : '';
      }
    }
    return renderedHtml;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setConsentTemplate
  * @description This function will set consent template innerHTML into html elements,
  * further this will help to assign values in consent template variables on runtime.
  */
  privateFunctionsModule.setConsentTemplate = function () {
    var ele = document.getElementById(LoginRadiusDefaults.templates.consentMainTemplate);
    if (ele) {
      var innerDiv = document.createElement('div');
      innerDiv.innerHTML = ele.innerHTML;
      ele.append(innerDiv);
      var optScript = document.createElement('script');
      optScript.type = 'text/html';
      optScript.id = LoginRadiusDefaults.templates.consentOptionTemplate;
      optScript.innerHTML = this.decodeHtml(document.getElementById(LoginRadiusDefaults.templates.consentOptionTemplate).innerHTML);
      var groupContainer = document.getElementById(LoginRadiusDefaults.templates.consentGroupTemplate);
      if (groupContainer) {
        var optionTempl = groupContainer.querySelectorAll('#' + LoginRadiusDefaults.templates.consentOptionTemplate)[0];
        if (optionTempl) {
          optionTempl.remove();
        }
      }
      var grpScript = document.createElement('script');
      grpScript.type = 'text/html';
      grpScript.id = LoginRadiusDefaults.templates.consentGroupTemplate;
      grpScript.innerHTML = this.decodeHtml(groupContainer.innerHTML);
      groupContainer.remove();
      ele.innerHTML = this.decodeHtml(innerDiv.innerHTML);
      innerDiv.remove();
      document.body.append(grpScript);
      document.body.append(optScript);
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function consentValidation
  * @param {Object} data object string
  * @description This function will validate consent form.
  */
  privateFunctionsModule.consentValidation = function (data, eventName) {
    var objData = module.util.parseQueryString(data);
    var errors = [];
    if (eventName) {
      if (module.consentOptions[eventName] && module.consentOptions[eventName].ConsentForm) {
        var consentForm = module.consentOptions[eventName].ConsentForm;
        for (var j = 0; j < consentForm.length; j++) {
          var consentObj = consentForm[j];
          if (consentObj.Type === 'Group') {
            errors = privateFunctionsModule.setConsentValidation(consentObj, objData, errors, true);
          } else {
            errors = privateFunctionsModule.setConsentValidation(consentObj, objData, errors);
          }
        }
      }
    } else {
      var consentObject = {};
      consentObject['Type'] = 'Consent';
      consentObject['Consents'] = [];
      for (var key in module.consentsList) {
        consentObject.Consents.push(module.consentsList[key]);
      }
      errors = privateFunctionsModule.setConsentValidation(consentObject, objData, errors);
    }
    return errors;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function setConsentValidation
  * @param {Object} consentObject consent object
  * @param {Object} dataObj submit form object
  * @param {Array} errors array of errors
  * @param {Boolean} isGroup true/false
  * @description This function will set validate of consent form.
  */
  privateFunctionsModule.setConsentValidation = function (consentObject, dataObj, errors, isGroup) {
    var hasAtLeastOnce = false;
    if (isGroup && consentObject.IsRequiredAtleastOne && consentObject.Consents.length === 0) {
      errors.push({
        Id: consentObject.GroupId,
        Name: consentObject.Title,
        Message: 'In ' + consentObject.Title + ' group should have at least one consent'
      });
    } else {
      for (var k = 0; k < consentObject.Consents.length; k++) {
        if (isGroup && consentObject.IsRequiredAtleastOne && (dataObj['consent_' + consentObject.Consents[k].ConsentId] === 'true')) {
          hasAtLeastOnce = true;
        }
        if (consentObject.Consents[k].IsRequired && (dataObj['consent_' + consentObject.Consents[k].ConsentId] !== 'true')) {
          errors.push({
            Id: consentObject.Consents[k].ConsentId,
            Name: consentObject.Consents[k].Title,
            Message: consentObject.Consents[k].Title + ' consent is required'
          });
        }
      }
      if (consentObject.IsRequiredAtleastOne && !hasAtLeastOnce) {
        errors.push({
          Id: consentObject.GroupId,
          Name: consentObject.Title,
          Message: 'In ' + consentObject.Title + ' group at least one consent is required'
        });
      }
    }
    return errors;
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function isValidToken
  * @param {Object} token
  * @param {callback}  onError call back error funtion
  * @return {Boolean} true|false
  * @description This function check whether the token provided is valid or not.
  */
  privateFunctionsModule.isValidToken = function (token, onError) {
    if (!token) {
      onError([
        privateFunctionsModule.setMappedMessage(defaultMessages['tokenValid'])
      ]);
      return false;
    }
    return true;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function decodeHtml
  * @param {String} html html_text
  * @return {HTMLElement} html text
  * @description This function decode text into html.
  */
  privateFunctionsModule.decodeHtml = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function checkForLatestPrivacyPolicy
  * @param {Object} userProfile userProfile in json format
  * @return {Boolean} true|false
  * @description This function check into the profile whether or not this profile is having latest privacy policy or not.
  */
  privateFunctionsModule.checkForLatestPrivacyPolicy = function (userProfile) {
    var privacyPolicies = module.options.privacyPolicyConfiguration.PrivacyPolicies;
    var currentTime = new Date().getTime();
    var latestPolicy = {};
    for (var i = 0; i < privacyPolicies.length; i++) {
      if (new Date(privacyPolicies[i].StartDateTime).getTime() < currentTime) {
        if (module.util.isEmpty(latestPolicy) || (!module.util.isEmpty(latestPolicy) && new Date(latestPolicy.StartDateTime).getTime() < new Date(privacyPolicies[i].StartDateTime).getTime())) {
          latestPolicy = privacyPolicies[i];
        }
      }
    }
    return (latestPolicy.Version === userProfile.PrivacyPolicy.Version);
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function sanitizePinData
  * @param {Object} ObjectData Data provided in Pin Form
  * @return {Object} Formatted Data in the desired form
  * @description This function check whether the PIN has been skipped or not and then added the skipped flag accoringly.
  */
  privateFunctionsModule.sanitizePinData = function (objData) {
    var formattedData = Object.assign({}, objData);
    var pinobj = {
      'PIN': '',
      'Skipped': null
    };
    if (formattedData.hasOwnProperty('pin') && formattedData['pin']) {
      pinobj.PIN = formattedData['pin'];
    } else {
      pinobj.Skipped = true;
    }
    delete formattedData['pin'];
    formattedData['PINInfo'] = pinobj;
    return formattedData;
  };
  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function sanitizeSecurityQuesData
  * @param {Object} ObjectData Data provided in serialized form with security questiomns key and their answers
  * @return {Object} Formatted Data of security questions and answers into separate securityanswer object
  * @description This function format the securityanswer data.
  */
  privateFunctionsModule.sanitizeSecurityQuesData = function (objData) {
    var securityObj = module.util.parseQueryString(objData);
    var securityAnswerArray = {};
    var invalidQuestionsKeyArray = ['email', 'username', 'phone', 'password', 'pin', 'phoneApi'];
    for (var key in securityObj) {
      if (invalidQuestionsKeyArray.indexOf(key) === -1) {
        securityAnswerArray[key] = securityObj[key];
        delete securityObj[key];
      }
    }
    securityObj.securityanswer = securityAnswerArray;
    return securityObj;
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function loadQRCodeScript
  * @param {function} callabck callback function which needs to be returned when script has been loaded
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.loadQRCodeScript = function (callabck) {
    if (module.options.isCrossDeviceSSOEnabled) {
      var el = document.createElement('script');
      el.src = LoginRadiusDefaults.externalLibrary + 'qrcode.js';
      el.type = 'text/javascript';
      el.onload = function () {
        callabck();
      };
      document.getElementsByTagName('head')[0].appendChild(el);
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createAccountPasskey
  * @param {function} onSuccess callback function which needs to be returned when success
  * @param {function} onError callback function which needs to be returned when error
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.createAccountPasskey = function (onSuccess, onError) {
    const accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (module.options.isPassKeysEnabled) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/register/passkey/begin?apikey=' + module.options.apiKey + '&access_token=' + accessToken, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          module.util.createPassKeyCredentials(response.RegisterBeginCredential).then((credential) => {
            const body = {
              id: credential.id,
              rawId: module.util.base64UrlEncode(credential.rawId),
              type: credential.type,
              response: {
                attestationObject: module.util.base64UrlEncode(credential.response.attestationObject),
                clientDataJSON: module.util.base64UrlEncode(credential.response.clientDataJSON)
              } };
            module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/account/register/passkey/finish?apiKey=' + module.options.apiKey + '&access_token=' + accessToken, body, function (regResponse) {
              if (regResponse.ErrorCode) {
                onError(privateFunctionsModule.loginRadiusErrorTojsError(regResponse));
              } else {
                onSuccess(regResponse);
              }
            }, 'account-passkey');
          }).catch((_error) => {
            onError(privateFunctionsModule.loginRadiusErrorTojsError(_error));
          });
        }
      });
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function removePasskey
  * @param {string} id passkey id
  * @param {function} onSuccess callback function which needs to be returned when success
  * @param {function} onError callback function which needs to be returned when error
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.removePasskey = function (id, onSuccess, onError) {
    const accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (module.options.isPassKeysEnabled) {
      module.util.ajaxCall('delete', LoginRadiusDefaults.apiDomain + `/auth/account/passkey/${id}?apikey=` + module.options.apiKey + '&access_token=' + accessToken, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      });
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function resendOTPHandler
  * @param {Object} resendOtpArgs fun arguments object
  * @description This function will call APIs to resend otp. This function written to overcome the same function calls for OTP and resendOTP problem.
  */
  privateFunctionsModule.resendOTPHandler = function (resendOtpArgs) {
    let voiceParam = '';
    if (resendOtpArgs.voiceotp) {
      voiceParam = '&isvoiceotp=true';
    }
    if (resendOtpArgs.action === 'update2FANumberResendOTP') {
      var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
      var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
      if (token && !module.LRCheckLogin) {
        module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apiKey=' + module.options.apiKey + '&access_token=' + token + '&smsTemplate=' + resendOtpArgs.smstemplate + voiceParam, resendOtpArgs.data, function (response) {
          if (response.ErrorCode) {
            resendOtpArgs.onerror(privateFunctionsModule.loginRadiusErrorTojsError(response));
          } else {
            resendOtpArgs.onsuccess(response, resendOtpArgs.data);
          }
        }, 'updatePhone');
      } else if (twoFactorToken) {
        if (resendOtpArgs.data.phone) {
          resendOtpArgs.data.phoneno2fa = resendOtpArgs.data.phone;
        }
        module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/2FA/?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + twoFactorToken + '&smsTemplate2FA=' + resendOtpArgs.smstemplate + voiceParam, resendOtpArgs.data, function (response) {
          if (response.ErrorCode) {
            resendOtpArgs.onerror(privateFunctionsModule.loginRadiusErrorTojsError(response));
          } else {
            resendOtpArgs.onsuccess(response, resendOtpArgs.data);
          }
        }, 'login');
      } else {
        resendOtpArgs.onerror([
          privateFunctionsModule.setMappedMessage(defaultMessages['twofaTokenValid'])
        ]);
      }
    } else if (resendOtpArgs.action === 'smartLoginResendOTP') {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/otp?apiKey=' + module.options.apiKey + '&phone=' + resendOtpArgs.data + '&' + 'smsTemplate=' + resendOtpArgs.smstemplate + voiceParam, '', function (Response) {
        if (Response.ErrorCode) {
          resendOtpArgs.onerror(privateFunctionsModule.loginRadiusErrorTojsError(Response));
        } else {
          resendOtpArgs.onsuccess(Response);
        }
      }, 'loginOTP');
    } else if (resendOtpArgs.action === 'sendInstantSignInResendOtp') {
      module.util.ajaxCall('GET', LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/otp?apiKey=' + module.options.apiKey + '&' + resendOtpArgs.data + '&smsTemplate=' + resendOtpArgs.smstemplate + voiceParam, '', function (signinResponse) {
        if (signinResponse.ErrorCode) {
          resendOtpArgs.onerror(privateFunctionsModule.loginRadiusErrorTojsError(signinResponse));
        } else {
          resendOtpArgs.onsuccess(signinResponse);
        }
      }, 'passwordlessLogin');
    }
  };

  privateFunctionsModule.addResendOTPBtn = function (flag, onSuccess, onError) {
    module.$hooks.register('afterFormRender', function (name, container, _classPrefix, form) {
      if (flag && form && form.name === 'loginradius-twofaemailotp') {
        if (!module.util.findInSchema(form, 'id', 'loginradius-button-resendemailotp')) {
          var resendOTPBtn = module.util.getButtonAttribute('resendemailotp', _classPrefix, function (event) {
            if (module.options.disableResendOTPButton) {
              module.util.disableResendOTPButton(event);
            }
            controllers.sendMFAEmailOTPController({
              EmailId: form[1].value
            }, onSuccess, onError, container, _classPrefix, 'resend');
          });

          var nextsibling = module.util.findInSchema(form, 'type', 'submit');
          if (nextsibling) {
            nextsibling.parentNode.insertBefore(resendOTPBtn, nextsibling.nextSibling);
          } else {
            form.appendChild(resendOTPBtn);
          }
        }
      }
    });
  };
  /**
* @memberof SetLoginRadiusCommonFunctions#
* @private
* @function checkPhoneNumberAvailability
* @param {Object} event The event interface represents an event on particular DOM form element
* @return {null}
* @description This function is used to check whether the user is registered with this number or not .
*/
  function checkPhoneNumberAvailability (event, onError) {
    if (event.target.value.trim() !== '') {
      controllers.checkPhoneNumberAvailabilityController('phone=' + event.target.value, function (resp) {
        if (resp.IsExist) {
          if (event.target.parentNode.getAttribute('class').indexOf('phoneid') !== -1) {
            event.target.parentNode.childNodes[2].innerHTML = 'phone already exists, enter unique phone number';
          }
        } else {
          if (event.target.parentNode.getAttribute('class').indexOf('phoneid') !== -1) {
            event.target.parentNode.childNodes[2].innerHTML = '';
          }
        }
      }, onError);
    }
  }
  /**
* @memberof SetLoginRadiusCommonFunctions#
* @private
* @function checkUsernameAvailability
* @param {Object} Event The event interface represents an event on particular DOM form element
* @return {null}
* @description This function is used to check whether the user is registered with this username or not.
*/

  function checkUsernameAvailability (event, onError) {
    if (event.target.value.trim() !== '') {
      controllers.checkUserNameAvailabilityController('username=' + event.target.value, function (resp) {
        if (resp.IsExist) {
          if (event.target.parentNode.getAttribute('class').indexOf('username') !== -1) {
            event.target.parentNode.childNodes[2].innerHTML = 'username already exists, enter unique username';
          }
        } else {
          if (event.target.parentNode.getAttribute('class').indexOf('username') !== -1) {
            event.target.parentNode.childNodes[2].innerHTML = '';
          }
        }
      }, onError);
    }
  }

  /**
* @memberof SetLoginRadiusCommonFunctions#
* @function pingForPushNotification
* @param {String} secondFactorAuthenticationToken Second Factor token
* @param {Function} onSuccess Success callback function
* @param {Function} onError Error callback function
* @description THis function will keep ping to user for push notification till user logged in his account.
*/
  privateFunctionsModule.pingForPushNotification = function (token, onSuccess, onError) {
    var pingInterval = module.options.autoLoginPingInterval || module.options.smartLoginPingInterval;
    var pingCount = module.options.autoLoginPingCount || module.options.smartLoginPingCount;
    const urlPath = !module.LRCheckLogin ? '/auth/account/2fa/push/ping?access_token=' + token : '/auth/login/2fa/push/ping?secondfactorauthenticationtoken=' + token;
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + urlPath + '&apiKey=' + module.options.apiKey, '', function (response) {
      // eslint-disable-next-line no-magic-numbers
      if (response.ErrorCode === 1295 || response.ErrorCode === 1313) {
        setTimeout(function () {
          if (LoginRadiusDefaults.pingCount < pingCount) {
            privateFunctionsModule.pingForPushNotification(token, onSuccess, onError);
            LoginRadiusDefaults.pingCount++;
          }
          // eslint-disable-next-line no-magic-numbers
        }, pingInterval * 1000);
        // eslint-disable-next-line no-magic-numbers
      } else if (response.ErrorCode) {
        onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        LoginRadiusDefaults.pingCount = 0;
      } else {
        LoginRadiusDefaults.pingCount = 0;
        onSuccess(response);
      }
    }, 'pingForPushNotification');
  };

  /**
* @memberof SetLoginRadiusCommonFunctions#
* @function resendPushNotification
* @param {String} secondFactorAuthenticationToken Second Factor token
* @param {Function} onSuccess Success callback function
* @param {Function} onError Error callback function
* @description THis function will send the push notification for the user if needed using the second-factor token.
*/
  privateFunctionsModule.resendPushNotification = function (secondFactorAuthenticationToken, onSuccess, onError) {
    const urlPath = LoginRadiusDefaults.apiDomain + '/auth/login/2fa/push?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + secondFactorAuthenticationToken;
    module.util.ajaxCall('post', urlPath, {}, function (response) {
      if (response.ErrorCode) {
        onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
      } else {
        if (LoginRadiusDefaults.pingCount <= 1) {
          privateFunctionsModule.pingForPushNotification(secondFactorAuthenticationToken, onSuccess, onError);
        }
        onSuccess(response);
      }
    }, 'resendPushNotification');
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createAccountMFAPasskey
  * @param {function} onSuccess callback function which needs to be returned when success
  * @param {function} onError callback function which needs to be returned when error
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.createAccountMFAPasskey = function (onSuccess, onError) {
    const accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (module.options.isPassKeysEnabled) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/2fa/register/passkey/begin?apikey=' + module.options.apiKey + '&access_token=' + accessToken, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          module.util.createPassKeyCredentials(response.RegisterBeginCredential).then((credential) => {
            const body = {
              PasskeyCredential: {
                id: credential.id,
                rawId: module.util.base64UrlEncode(credential.rawId),
                type: credential.type,
                response: {
                  attestationObject: module.util.base64UrlEncode(credential.response.attestationObject),
                  clientDataJSON: module.util.base64UrlEncode(credential.response.clientDataJSON)
                }
              } };

            module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/account/2fa/register/passkey/finish?apiKey=' + module.options.apiKey + '&access_token=' + accessToken, body, function (regResponse) {
              if (regResponse.ErrorCode) {
                onError(privateFunctionsModule.loginRadiusErrorTojsError(regResponse));
              } else {
                onSuccess(regResponse);
              }
            }, 'account-passkey-mfa');
          }).catch((_error) => {
            onError(privateFunctionsModule.loginRadiusErrorTojsError(_error));
          });
        }
      });
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function createMFAPasskey
  * @param {string} secondfactorauthenticationtoken second factor authentication token
  * @param {function} onSuccess callback function which needs to be returned when success
  * @param {function} onError callback function which needs to be returned when error
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.createMFAPasskey = function (secondfactorauthenticationtoken, onSuccess, onError) {
    if (module.options.isPassKeysEnabled) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/register/passkey/begin?apikey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + secondfactorauthenticationtoken, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          module.util.createPassKeyCredentials(response.RegisterBeginCredential).then((credential) => {
            const body = {
              PasskeyCredential: {
                id: credential.id,
                rawId: module.util.base64UrlEncode(credential.rawId),
                type: credential.type,
                response: {
                  attestationObject: module.util.base64UrlEncode(credential.response.attestationObject),
                  clientDataJSON: module.util.base64UrlEncode(credential.response.clientDataJSON)
                } }
            };
            module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/register/passkey/finish?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + secondfactorauthenticationtoken, body, function (regResponse) {
              if (regResponse.ErrorCode) {
                onError(privateFunctionsModule.loginRadiusErrorTojsError(regResponse));
              } else {
                controllers.handleFeatures(regResponse, '', '', '', onSuccess, onError, '');
              }
            }, 'register-passkey-mfa');
          }).catch((_error) => {
            onError(privateFunctionsModule.loginRadiusErrorTojsError(_error));
          });
        }
      });
    }
  };

  /**
  * @memberof SetLoginRadiusCommonFunctions#
  * @function loginMFAPasskey
  * @param {string} secondfactorauthenticationtoken second factor authentication token
  * @param {function} onSuccess callback function which needs to be returned when success
  * @param {function} onError callback function which needs to be returned when error
  * @return {null}
  * @description This function add the external libraries.
  */
  privateFunctionsModule.loginMFAPasskey = function (secondfactorauthenticationtoken, onSuccess, onError) {
    if (module.options.isPassKeysEnabled) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/passkey/begin?apikey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + secondfactorauthenticationtoken, '', function (response) {
        if (response.ErrorCode) {
          onError(privateFunctionsModule.loginRadiusErrorTojsError(response));
        } else {
          module.util.getPassKeyCredentials(response.LoginBeginCredential, false).then((assertion) => {
            let authData = assertion.response.authenticatorData;
            let clientDataJSON = assertion.response.clientDataJSON;
            let rawId = assertion.rawId;
            let sig = assertion.response.signature;
            let userHandle = assertion.response.userHandle;
            const passKeyPayload = {
              PasskeyCredential: {
                id: assertion.id,
                rawId: module.util.base64UrlEncode(rawId),
                type: assertion.type,
                authenticatorAttachment: assertion.authenticatorAttachment,
                response: {
                  authenticatorData: module.util.base64UrlEncode(authData),
                  clientDataJSON: module.util.base64UrlEncode(clientDataJSON),
                  signature: module.util.base64UrlEncode(sig),
                  userHandle: module.util.base64UrlEncode(userHandle)
                }
              }
            };
            module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/passkey/finish?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + secondfactorauthenticationtoken, passKeyPayload, function (loginResponse) {
              if (loginResponse.ErrorCode) {
                onError(privateFunctionsModule.loginRadiusErrorTojsError(loginResponse));
              } else {
                controllers.handleFeatures(loginResponse, '', '', '', onSuccess, onError, '');
              }
            }, 'login-passkey-mfa');
          }).catch((_error) => {
            onError(privateFunctionsModule.loginRadiusErrorTojsError(_error));
          });
        }
      });
    }
  };
}

/**
* @param {Object} module lr module object
* @param {Object} commonFns lr common functions object
* @description Set global LoginRadiusControllers.
* @constructor
*/
function LoginRadiusControllers (module, commonFns) {
  var defaultMessages = LoginRadiusDefaults.messages;
  var controllersModule = this;

  /**
  * @memberof LoginRadiusControllers#
  * @private
  * @function showBackupCodeForm
  * @param {String} container html dom element id to hold different forms
  * @param {Function} onSuccess Success callback function
  * @param {Function} onError Error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} requiredField requiredField callback function
  * @description Create backupCode form and display it.
  */
  function showBackupCodeForm (container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField) {
    commonFns.createForm(module.backupCodeFormSchema, 'backupcode', container, function (data) {
      controllersModule.backupCodeController(data, onSuccess, onError, passwordExpiry, requiredField);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusControllers#
  * @private
  * @function getSecurityQuestions
  * @param {Array} response service responce object
  * @return {Array} secQSchema array of security questions objects
  * @description Get security questions from service response object
  */
  function getSecurityQuestions (response) {
    var secQSchema = [];
    for (var i = 0; i < response.length; i++) {
      var secQObject = {};
      if (module.options.maskSensitiveInput) {
        secQObject.type = 'password';
      } else {
        secQObject.type = 'string';
      }
      secQObject.name = response[i].QuestionId;
      secQObject.display = response[i].Question;
      secQObject.rules = 'required';
      secQObject.permission = 'r';
      secQSchema.push(secQObject);
    }
    return secQSchema;
  }

  /**
  * @memberof LoginRadiusControllers#
  * @private
  * @function traditionalLoginReceiveToken
  * @param {Object} userProfile user profile object
  * @param {Object} loginResponse service response object
  * @param {Object} data otp info. object
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField requiredField callback function
  * @description This function responsible to handle traditional login process.
  */
  function traditionalLoginReceiveToken (userProfile, loginResponse, data, requiredField, onSuccess, onError) {
    module.storage.setBrowserStorage(LoginRadiusDefaults.storedTokenName, loginResponse.access_token);
    if (module.options.isPINAuthentication && module.options.PINConfiguration.PINLogin && loginResponse && loginResponse.session_token) {
      module.setSessionToken(loginResponse);
    }
    var traditionalLoginHandler = function (_Schema) {
      var regSchema = JSON.parse(JSON.stringify(_Schema));
      regSchema = regSchema.RegistrationFormSchema;
      if (!userProfile.IsDeleted) {
        if (module.options.autoFilledFieldForTraditional) {
          module.$hooks.register('beforeFormRender', function (name, schema) {
            if (name === 'loginRequiredFieldsUpdate') {
              var emailfield = module.util.findInSchema(schema, 'name', 'emailid');
              if (emailfield && emailfield.value) {
                emailfield.disabled = true;
              }
              var phonefield = module.util.findInSchema(schema, 'name', 'phoneid');
              if (phonefield && phonefield.value) {
                phonefield.disabled = true;
              }
            }
          });
        }
        module.registrationFormSchema = commonFns.mapSchema(regSchema, userProfile, module.options.autoFilledFieldForTraditional);
        if (module.registrationFormSchema.length > 0) {
          commonFns.setPasswordRule(module.util.findInSchema(regSchema, 'name', 'password'));
          commonFns.setPasswordRule(module.util.findInSchema(regSchema, 'name', 'confirmpassword'));
          module.$hooks.call('registrationSchemaFilter', regSchema, userProfile);
          requiredField(userProfile, loginResponse, loginResponse.access_token, data, onSuccess, onError);
        } else {
          commonFns.loginHandleToken(loginResponse, data, onSuccess, onError);
        }
      } else {
        onError(commonFns.loginRadiusErrorTojsError(userProfile));
      }
    };
    traditionalLoginHandler(module.options);
  }

  /**
  * @memberof LoginRadiusControllers#
  * @function handleFeatures
  * @param {Object} loginResponse service response object
  * @param {Object} data otp info. object
  * @param {String} _classPrefix css class prefix string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField requiredField callback function
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @description This function handle traditional login ask for required fields process.
  */
  controllersModule.handleFeatures = function (loginResponse, data, requiredField, passwordExpiry, onSuccess, onError, _classPrefix) {
    var userProfile = loginResponse.Profile;
    if (typeof data !== 'string') {
      data = module.util.jsonToQueryString(data);
    }
    if (passwordExpiry && module.options.periodicPasswordReset && userProfile.PasswordExpirationDate && new Date(userProfile.PasswordExpirationDate) <= new Date()) {
      commonFns.setPasswordRule(module.changePasswordFormSchema[1]);
      commonFns.setPasswordRule(module.changePasswordFormSchema[2]);
      passwordExpiry(userProfile, loginResponse);
    } else if (requiredField && (module.options.askRequiredFieldForTraditionalLogin || LoginRadiusDefaults.autoFilledFieldforPasswordLesLogin || module.askPinOnLogin)) {
      traditionalLoginReceiveToken(userProfile, loginResponse, data, requiredField, onSuccess, onError);
    } else {
      commonFns.loginHandleToken(loginResponse, data, onSuccess, onError, _classPrefix);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function verifyOTPController
  * @param {Object} data otp info. object
  * @param {Object} phoneToVerify object hold phoneId and other info
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField requiredField callback function
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @description This function will verify the provided otp.
  */
  controllersModule.verifyOTPController = function (data, phoneToVerify, onSuccess, onError, passwordExpiry, requiredField) {
    var url = LoginRadiusDefaults.apiDomain + '/auth/phone/otp?apiKey=' + module.options.apiKey + '&otp=' + data.otp + '&smsTemplate=' + module.options.smsTemplateWelcome;
    if (data.haveToken) {
      url += '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    }
    if (data.onetouchloginflag) {
      url = LoginRadiusDefaults.apiDomain + '/auth/onetouchlogin/phone/verify?apiKey=' + module.options.apiKey + '&otp=' + data.otp + '&smsTemplate=' + module.options.smsTemplateOneTouchLoginWelcome;
    }
    phoneToVerify = { ...phoneToVerify, ...data };
    module.util.ajaxCall('put', url, phoneToVerify, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        // onSuccess(response, data);
        if (data.onetouchloginflag && !module.options.askRequiredFieldsOnPasswordLessLogin) {
          commonFns.loginHandleToken(response, '', onSuccess, onError, '', true);
        } else if (response.access_token) {
          LoginRadiusDefaults.autoFilledFieldforPasswordLesLogin = true;
          controllersModule.handleFeatures(response, data, requiredField, passwordExpiry, onSuccess, onError);
        } else {
          onSuccess(response, data);
        }
      }
    }, 'verifyOTP');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updateSecurityQuestionController
  * @param {Object} data json object containing the questions as key and the correct answer as value. e.g. {
    "<%questionid%>": "<%answer%>",
    "<%questionid%>": "<%answer%>"},
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function allows you to update the Answer(s) to the Security Question(s) on a given account.
  */
  controllersModule.updateSecurityQuestionController = function (data, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    var securityQuestionAnswerObject = module.util.parseQueryString(data);
    for (var i = 0; i < module.options.securityQuestionsCount; i++) {
      securityQuestionAnswerObject[securityQuestionAnswerObject['securityQuestion' + i]] = securityQuestionAnswerObject['securityAnswer' + i];
      delete securityQuestionAnswerObject['securityQuestion' + i];
      delete securityQuestionAnswerObject['securityAnswer' + i];
    }
    var securityQuestionObject = {
      'SecurityQuestionAnswer': securityQuestionAnswerObject
    };
    if (commonFns.isValidToken(token, onError)) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account?apikey=' + module.options.apiKey + '&access_token=' + token, securityQuestionObject, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'updateSecurityQuestion');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetTwoFactorAuthenticationController
  * @param {String} authenticatorType authenticatorType e.g. "otpauthenticator" or "authenticator"
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function used to reset the MFA configurations on the account.
  */
  controllersModule.resetTwoFactorAuthenticationController = function (authenticatorType, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    // var authenticatorObject = module.util.parseQueryString(authenticatorType);
    var authenticatorObject = {};
    authenticatorObject[authenticatorType] = true;
    if (commonFns.isValidToken(token, onError)) {
      var api = '/auth/account/2FA/authenticator';
      if (authenticatorType === 'emailotpauthenticator') {
        api = '/auth/account/2fa/authenticator/otp/email';
        authenticatorObject = {};
      } else if (authenticatorType === 'sqauthenticator') {
        api = '/auth/account/2fa/authenticator/securityquestionanswer';
        authenticatorObject = {};
      } else if (authenticatorType === 'pushnotificationauthenticator') {
        api = '/auth/account/2fa/authenticator/push';
        authenticatorObject = {};
      } else if (authenticatorType === 'duoauthenticator') {
        api = '/auth/account/2fa/authenticator/duo';
        authenticatorObject = {};
      } else if (authenticatorType === 'passkeyauthenticator') {
        api = '/auth/account/2fa/authenticator/passkey';
        authenticatorObject = {};
      }
      module.util.ajaxCall('delete', LoginRadiusDefaults.apiDomain + api + '?apikey=' + module.options.apiKey + '&access_token=' + token, authenticatorObject, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response, authenticatorType);
        }
      }, 'resetTwoFactorAuthentication');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function forgotPasswordController
  * @param {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function used to  send a forgot password email to a customer, the email will contain the verification token to then be consumed the resetPassword function.
  */
  controllersModule.forgotPasswordController = function (data, container, onSuccess, onError, _classPrefix) {
    var resetPasswordUrl = module.options.forgotPasswordUrl || module.options.resetPasswordUrl;
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/password?apiKey=' + module.options.apiKey + '&resetPasswordUrl=' + resetPasswordUrl + '&emailTemplate=' + module.options.resetPasswordEmailTemplate, data, function (forgotPasswordResponse) {
      if (forgotPasswordResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(forgotPasswordResponse));
      } else {
        var parseData = module.util.parseQueryString(data);
        onSuccess(forgotPasswordResponse, parseData);
        if (commonFns.showOTPTemplateForm('ForgotPassword')) {
          commonFns.resetPassword(container, onSuccess, onError, _classPrefix, parseData);
        }
      }
    }, 'forgotPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function forgotPassKeyController
  * @param {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function used to  send a forgot password email to a customer, the email will contain the verification token to then be consumed the resetPassword function.
  */
  controllersModule.forgotPassKeyController = function (data, container, onSuccess, onError, _classPrefix) {
    var resetPasswordUrl = module.options.forgotPassKeyUrl || module.options.resetPassKeyUrl;
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/passkey/forgot?apiKey=' + module.options.apiKey + '&resetpasskeyurl=' + resetPasswordUrl + '&emailTemplate=' + module.options.resetPassKeyEmailTemplate, data, function (forgotPassKeyResponse) {
      if (forgotPassKeyResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(forgotPassKeyResponse));
      } else {
        var parseData = module.util.parseQueryString(data);
        onSuccess(forgotPassKeyResponse, parseData);
      }
    }, 'forgotPassKey');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPasskeyFinishController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to reset account login password by using phone id.
  */
  controllersModule.resetPasskeyFinishController = function (credential, vtoken, onSuccess, onError, container, _classPrefix) {
    const passKeyPayload = {
      id: credential.id,
      rawId: module.util.base64UrlEncode(credential.rawId),
      type: credential.type,
      response: {
        attestationObject: module.util.base64UrlEncode(credential.response.attestationObject),
        clientDataJSON: module.util.base64UrlEncode(credential.response.clientDataJSON)
      }
    };
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/passkey/reset/finish?apiKey=' + module.options.apiKey + '&vtoken=' + vtoken, passKeyPayload, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, {});
      }
    }, 'resetPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPassKeyController
  * @param {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function used to  send a reset password email to a customer, the email will contain the verification token to then be consumed the resetPassword function.
  */
  controllersModule.resetPassKeyController = function (vtoken, container, onSuccess, onError, _classPrefix) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/passkey/reset/begin?apiKey=' + module.options.apiKey + '&vtoken=' + vtoken, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.util.createPassKeyCredentials(response.RegisterBeginCredential).then((assertion) => {
          controllersModule.resetPasskeyFinishController(assertion, vtoken, onSuccess, onError, container, _classPrefix);
        }).catch((error) => {
          onError(commonFns.loginRadiusErrorTojsError(error));
        });
      }
    });
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function forgotPINController
  * @param {Object} data json object containing the email of the customer e.g. {email: "xxx@xxx.com"}
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function used to  send a forgot pin email to a customer, the email will contain the verification token to then be consumed the resetPIN function.
  */
  controllersModule.forgotPINController = function (data, container, onSuccess, onError, _classPrefix) {
    var queryObj = module.util.parseQueryString(data);
    var mode = (queryObj.hasOwnProperty('username')) ? 'username' : 'email';
    var resetPINUrl = module.options.forgotPINUrl || module.options.resetPINUrl;
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/pin/forgot/' + mode + '?apiKey=' + module.options.apiKey + '&resetPINUrl=' + resetPINUrl + '&emailTemplate=' + module.options.resetPINEmailTemplate, data, function (forgotPINResponse) {
      if (forgotPINResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(forgotPINResponse));
      } else {
        var parseData = module.util.parseQueryString(data);
        onSuccess(forgotPINResponse, parseData);
        if (commonFns.showOTPTemplateForm('ForgotPIN')) {
          commonFns.resetPIN(container, onSuccess, onError, _classPrefix, parseData);
        }
      }
    }, 'forgotPIN');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function loginController
  * @param {Object} data input payload to login  (e.g. { emailid: "example@example.com", password: "123xxx789" })
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField requiredField callback function
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function responsible to handle user login process.
  */
  controllersModule.loginController = function (data, container, onSuccess, onError, passwordExpiry, requiredField, _classPrefix, verifyOTPApi, resendOTPApi) {
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;

    var template = 'emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl;
    if (module.options.phoneLogin) {
      template += '&smsTemplate=' + module.options.smsTemplatePhoneVerification;
    }
    if (module.options.riskBasedAuthentication) {
      template += '&RbaOneclickEmailTemplate=' + module.options.rbaOneclickEmailTemplate + '&RbaOTPSmsTemplate=' + module.options.rbaOTPSmsTemplate + '&RbaCityEmailTemplate=' + module.options.rbaCityEmailTemplate + '&RbaCountryEmailTemplate=' + module.options.rbaCountryEmailTemplate + '&RbaBrowserEmailTemplate=' + module.options.rbaBrowserEmailTemplate + '&RbaIpEmailTemplate=' + module.options.rbaIpEmailTemplate + '&RbaDeviceEmailTemplate=' + module.options.rbaDeviceEmailTemplate + '&RbaCitySmsTemplate=' + module.options.rbaCitySmsTemplate + '&RbaCountrySmsTemplate=' + module.options.rbaCountrySmsTemplate;
      template += '&RbaBrowserSmsTemplate=' + module.options.rbaBrowserSmsTemplate + '&RbaIpSmsTemplate=' + module.options.rbaIpSmsTemplate + '&RbaDeviceSmsTemplate=' + module.options.rbaDeviceSmsTemplate;
    }
    data = module.util.checkPhoneOrEmailLogin(data);
    if (typeof data === 'string' || data instanceof String) {
      data = module.util.parseQueryString(data);
    }
    if (module.options.duplicateEmailWithUniqueUsername) {
      delete data['email'];
      delete data['phoneid'];
    }
    if (module.options.isB2BEnabled && module.options.organizationObj && module.options.organizationObj.Id) {
      template += '&org_id=' + module.options.organizationObj.Id;
    }
    if (module.options.isB2BEnabled) {
      const invitationType = module.util.getHashParam('vtype');
      if (invitationType === 'orginvite') {
        var token = module.util.getHashParam('vtoken');
        if (token) {
          template += '&invitation_token=' + token;
        }
      }
    }
    var url = LoginRadiusDefaults.apiDomain + '/auth/login?apiKey=' + module.options.apiKey + '&loginUrl=' + module.options.loginUrl + '&' + template;
    if (data['g-recaptcha-response']) {
      url += '&g-recaptcha-response=' + data['g-recaptcha-response'];
      delete data['g-recaptcha-response'];
    }
    if (data['h-captcha-response']) {
      url += '&h-captcha-response=' + data['h-captcha-response'];
      delete data['h-captcha-response'];
    }
    if (data['qq_captcha_randstr']) {
      url += '&qq_captcha_randstr=' + data['qq_captcha_randstr'];
      delete data['qq_captcha_randstr'];
    }
    if (data['qq_captcha_ticket']) {
      url += '&qq_captcha_ticket=' + data['qq_captcha_ticket'];
      delete data['qq_captcha_ticket'];
    }
    module.util.ajaxCall('post', url, data, function (loginResponse) {
      if (module.options.stayLogin) {
        module.storage.setBrowserStorage('lr-rememberme', data['stayLogin']);
      }
      if (loginResponse.ErrorCode) {
        // eslint-disable-next-line eqeqeq
        if (loginResponse.ErrorCode == '970' && !module.options.verifyEmailByOTP) {
          commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, data);
          // eslint-disable-next-line eqeqeq
        } else if (loginResponse.ErrorCode == '1167' && (loginResponse.PhoneId || data.phone)) {
          delete data.email;
          data.phone = loginResponse.PhoneId || data.phone;
          controllersModule.loginOTPController(data, container, onSuccess, onError, _classPrefix, 'no');
          // eslint-disable-next-line eqeqeq
        } else if (module.options.phoneLogin && loginResponse.ErrorCode == '1066') {
          // var phonetoVerify = data.split('&')[1];

          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
          commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          commonFns.resendOTP(data, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField);
        }

        onError(commonFns.loginRadiusErrorTojsError(loginResponse));
      } else {
        module.askPinOnLogin = false;
        var userProfile = loginResponse.Profile;
        if (module.options.isPINAuthentication && userProfile && ((module.options.PINConfiguration.AskOnlyOnFirstLogin && userProfile.FirstLogin) || module.options.PINConfiguration.AskOnLogin)) {
          if (userProfile.PIN === null || !userProfile.PIN.PIN) {
            module.askPinOnLogin = true;
          }
        }
        controllersModule.handleFeatures(loginResponse, data, requiredField, passwordExpiry, onSuccess, onError, _classPrefix);
      }
    }, 'login');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function loginOTPController
  * @param {Object} data input payload to login  (e.g. { emailid: "example@example.com", password: "123xxx789" })
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {String} otpSent flag yes or no to control otp send
  * @description This function responsible to handle otp sending process on customer's phone number.
  */
  controllersModule.loginOTPController = function (data, container, onSuccess, onError, _classPrefix, otpSent) {
    data = module.util.checkPhoneOrEmailLogin(data);
    var phoneData = data;
    if (typeof data === 'string' || data instanceof String) {
      phoneData = module.util.parseQueryString(data);
    }
    if (phoneData.email || phoneData.username) {
      commonFns.sendInstantSignInLink(data, onSuccess, onError, container, _classPrefix);
    } else {
      var smsTemplate = module.options.smsTemplateInstantOTPLogin || module.options.passwordlessLoginSMSTemplate;
      module.$hooks.register('beforeFormRender', function (name, schema) {
        if (!module.util.findInSchema(schema, 'name', 'resendotp')) {
          schema.push({
            type: 'button',
            name: 'resendotp',
            display: 'Resend via SMS',
            rules: '',
            permission: 'r',
            event: 'click',
            eventCallback: function (event) {
              if (module.options.disableResendOTPButton) {
                module.util.disableResendOTPButton(event);
              }
              var resendOTPArgs = {
                data: phoneData.phone,
                onsuccess: onSuccess,
                onerror: onError,
                smstemplate: smsTemplate,
                action: 'smartLoginResendOTP'
              };
              commonFns.resendOTPHandler(resendOTPArgs);
            }
          });
          if (module.options.isVoiceOtp) {
            schema.push({
              type: 'button',
              name: 'resendvoiceotp',
              display: 'Resend via Voice call',
              rules: '',
              permission: 'r',
              event: 'click',
              eventCallback: function (event) {
                if (module.options.disableResendOTPButton) {
                  module.util.disableResendOTPButton(event);
                }
                var resendOTPArgs = {
                  data: phoneData.phone,
                  onsuccess: onSuccess,
                  onerror: onError,
                  smstemplate: smsTemplate,
                  voiceotp: true,
                  action: 'smartLoginResendOTP'
                };
                commonFns.resendOTPHandler(resendOTPArgs);
              }
            });
          }
        }
      });
      var handleOTP = function () {
        var schema = module.otpSchema;
        commonFns.createForm(schema, 'otp', container, function (otpData) {
          var recaptchaid = _classPrefix + LoginRadiusDefaults.idPrefix + 'recaptcha_widget_verifyotp';
          controllersModule.verifyInstantOTP(otpData, phoneData, onSuccess, onError, recaptchaid, container, _classPrefix);
        }, function (errors) {
          onError(commonFns.setMappedMessage(errors));
        }, _classPrefix);
      };
      if (otpSent) {
        handleOTP();
      } else {
        module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/otp?apiKey=' + module.options.apiKey + '&phone=' + phoneData.phone + '&' + 'smsTemplate=' + smsTemplate, '', function (Response) {
          if (Response.ErrorCode) {
            onError(commonFns.loginRadiusErrorTojsError(Response));
          } else {
            onSuccess(Response);
            handleOTP();
          }
        }, 'loginOTP');
      }
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function loginPINController
  * @param {Object} data input payload to login  (e.g. { PIN: "example@example.com", password: "123xxx789" })
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField requiredField callback function
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function responsible to handle user login process.
  */
  controllersModule.loginPINController = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField, sessionToken) {
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
    if (typeof data === 'string' || data instanceof String) {
      data = module.util.parseQueryString(data);
    }
    var url = LoginRadiusDefaults.apiDomain + '/auth/login/pin?apiKey=' + module.options.apiKey + '&session_token=' + sessionToken;
    module.util.ajaxCall('post', url, data, function (loginResponse) {
      if (loginResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(loginResponse));
      } else {
        controllersModule.handleFeatures(loginResponse, data, requiredField, passwordExpiry, onSuccess, onError, _classPrefix);
      }
    }, 'login');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function login2FAController
  * @param {Object} data json object containing the standard fields for login like username, password or email and password
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} requiredField requiredField callback function
  * @param {Function} passwordExpiry passwordExpiry callback function
  * @param {Function} updatePhoneNumberApi callback function
  * @param {Function} verifyOTPApi callback function
  * @param {Function} resendOTPApi callback function
  * @description This function handle the traditional login process if you have MFA (Multi-Factor Authentication) enabled.
  */
  controllersModule.login2FAController = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField, updatePhoneNumberApi, verifyOTPApi, resendOTPApi) {
    module.LRCheck2FA = true;
    data = module.util.checkPhoneOrEmailLogin(data);
    var emailOtp = false;
    var _sendotpapi = false;
    var handle2FAResponse = function (loginResponse, SecondFactorAuthentication) {
      var IsOTPAuthenticatorVerified = SecondFactorAuthentication.IsOTPAuthenticatorVerified || '';
      var IsAuthenticatorVerified = SecondFactorAuthentication.IsAuthenticatorVerified || '';
      var IsDuoAuthenticatorVerified = SecondFactorAuthentication.IsDuoAuthenticatorVerified || '';
      var IsEmailOtpAuthenticatorVerified = SecondFactorAuthentication.IsEmailOtpAuthenticatorVerified || '';
      var IsSecurityQuestionAuthenticatorVerified = SecondFactorAuthentication.IsSecurityQuestionAuthenticatorVerified || '';
      var IsPushDeviceRegistered = SecondFactorAuthentication.IsPushDeviceRegistered || '';
      var IsPasskeyAuthenticatorVerified = SecondFactorAuthentication.IsPasskeyAuthenticatorVerified || '';
      if (SecondFactorAuthentication.EmailOTPStatus === null && !IsOTPAuthenticatorVerified && !IsAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsPushDeviceRegistered) {
        _sendotpapi = true;
      }

      var addBackBtn = function () {
        module.$hooks.register('afterFormRender', function (name, container, _classPrefix, form) {
          const isButtonExist = form ? module.util.findInSchema(form, 'id', 'loginradius-button-backupcodebackbutton') : module.util.elementById('loginradius-button-backupcodebackbutton');
          form = form || module.util.elementById(container);
          if (form && module.LRCheck2FA) {
            if (!isButtonExist) {
              var backBtn = module.util.getButtonAttribute('backupcodebackbutton', _classPrefix, function () {
                _sendotpapi = true;
                handle2FAResponse(loginResponse, loginResponse.SecondFactorAuthentication);
              });

              form.appendChild(backBtn);
            }
          }
        });
      };
      addBackBtn();

      var twoFAemailotpCodeFn = function () {
        if (module.options.emailOTPAuthentication && ((!IsAuthenticatorVerified && !IsPushDeviceRegistered && !IsOTPAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsDuoAuthenticatorVerified && module.options.twoFactorAuthentication && !IsPasskeyAuthenticatorVerified) || IsEmailOtpAuthenticatorVerified)) {
          if (loginResponse.SecondFactorAuthentication && loginResponse.SecondFactorAuthentication.Email && loginResponse.SecondFactorAuthentication.Email.length) {
            emailOtp = true;
            var emails = loginResponse.SecondFactorAuthentication.Email;
            if (emails) {
              var emailOtpForm = function (emailid) {
                commonFns.addResendOTPBtn(emailOtp, onSuccess, onError);
                if (_sendotpapi || IsSecurityQuestionAuthenticatorVerified || IsAuthenticatorVerified || IsOTPAuthenticatorVerified || IsPushDeviceRegistered) {
                  controllersModule.sendMFAEmailOTPController({
                    EmailId: emailid
                  }, onSuccess, onError, container, _classPrefix);
                } else {
                  commonFns.verifyOTP({ mfaEmailToken: true, EmailId: emailid }, container, onSuccess, onError, _classPrefix);
                }
              };
              var emailOtpClickFn = function (event) {
                if (emails.length > 1) {
                  LoginRadiusDefaults.innerHTML = false;
                  var optionsArray = [];
                  for (var i = 0; i < emails.length; i++) {
                    if (emails[i]) {
                      var optionObject = {};
                      optionObject.text = emails[i];
                      optionObject.value = emails[i];
                      optionsArray.push(optionObject);
                    }
                  }
                  var secQObject = {};
                  secQObject.type = 'option';
                  secQObject.options = optionsArray;
                  secQObject.name = 'sendemailotp';
                  secQObject.rules = 'required';
                  secQObject.display = 'Select email to send verification code';
                  commonFns.createForm([secQObject], 'mfaselectemails', container, function (_mfaemail) {
                    _mfaemail = module.util.parseQueryString(_mfaemail);
                    emailOtpForm(_mfaemail.sendemailotp);
                  });
                } else if (loginResponse.SecondFactorAuthentication.Email && loginResponse.SecondFactorAuthentication.Email[0]) {
                  emailOtpForm(loginResponse.SecondFactorAuthentication.Email[0]);
                }
              };
              LoginRadiusDefaults.innerHTML = true;
              var emailOtpBtn = module.util.getButtonAttribute('emailotp', _classPrefix, emailOtpClickFn);
              module.util.addHTMLContent(container, emailOtpBtn, _innerHtml_);
              _innerHtml_ = true;
            }
          }
        }
      };
      var twoFAduoMFACodeFn = function () {
        if (module.options.duoAuthentication && ((!IsAuthenticatorVerified && !IsPushDeviceRegistered && !IsOTPAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsEmailOtpAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && module.options.twoFactorAuthentication) || IsDuoAuthenticatorVerified)) {
          const duoAuthEndpoint = loginResponse.SecondFactorAuthentication.DuoAuthEndpoint;
          const handleDuoMFAClick = function (event) {
            window.location.href = duoAuthEndpoint;
          };
          const duoMFAButton = module.util.getButtonAttribute('duomfa', _classPrefix, handleDuoMFAClick);
          module.util.addHTMLContent(container, duoMFAButton, _innerHtml_);
          _innerHtml_ = true;
        }
      };
      var twoFAsecurityquestionCodeFn = function () {
        if (module.options.securityQuestionAuthentication && ((!IsEmailOtpAuthenticatorVerified && !IsPushDeviceRegistered && !IsAuthenticatorVerified && !IsOTPAuthenticatorVerified && !IsDuoAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && module.options.twoFactorAuthentication) || IsSecurityQuestionAuthenticatorVerified)) {
          // var _innerHtml =  IsAuthenticatorVerified || IsEmailOtpAuthenticatorVerified || IsOTPAuthenticatorVerified;

          var secQAuthenticatorBtn = module.util.getButtonAttribute('securityquestionsauthenticator', _classPrefix, function () {
            LoginRadiusDefaults.innerHTML = false;
            commonFns.showMFASecurityQuestions(loginResponse.SecondFactorAuthentication, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          });
          module.util.addHTMLContent(container, secQAuthenticatorBtn, _innerHtml_);
          _innerHtml_ = true;
        }
      };
      var twoFAgoogleauthCodeFn = function () {
        if (module.options.qrCodeAuthentication && ((!IsEmailOtpAuthenticatorVerified && !IsPushDeviceRegistered && !IsOTPAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsDuoAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && module.options.twoFactorAuthentication) || IsAuthenticatorVerified)) {
          var qrCodeAuthenticatorBtn = module.util.getButtonAttribute('googleauthenticator', _classPrefix, function () {
            LoginRadiusDefaults.innerHTML = false;
            commonFns.showQRCode(loginResponse, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          });
          module.util.addHTMLContent(container, qrCodeAuthenticatorBtn, _innerHtml_);
          _innerHtml_ = true;
        }
      };
      var twoFAsmsCodeFn = function () {
        if (module.options.smsOTPAuthentication && ((!IsSecurityQuestionAuthenticatorVerified && !IsPushDeviceRegistered && !IsEmailOtpAuthenticatorVerified && !IsAuthenticatorVerified && !IsDuoAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && module.options.twoFactorAuthentication) || IsOTPAuthenticatorVerified)) {
          if (loginResponse.SecondFactorAuthentication.OTPPhoneNo) {
            module.util.addHTMLContent(container, sendOTPBtn, _innerHtml_);
            _innerHtml_ = true;
          } else if (module.options.qrCodeAuthentication || module.options.emailOTPAuthentication || module.options.securityQuestionAuthentication || module.options.pushNotificationAuthentication || module.options.duoAuthentication || module.options.passkeyAuthentication) {
            var otpAuthneticatorBtn = module.util.getButtonAttribute('otpauthenticator', _classPrefix, function () {
              LoginRadiusDefaults.innerHTML = false;
              commonFns.updatePhoneNumber = updatePhoneNumberApi || commonFns.updatePhoneNumber;
              commonFns.updatePhoneNumber(container, onSuccess, onError, _classPrefix, '', passwordExpiry, requiredField);
            });
            module.util.addHTMLContent(container, otpAuthneticatorBtn, _innerHtml_);
            _innerHtml_ = true;
          } else {
            commonFns.updatePhoneNumber = updatePhoneNumberApi || commonFns.updatePhoneNumber;
            commonFns.updatePhoneNumber(container, onSuccess, onError, _classPrefix, '', passwordExpiry, requiredField);
          }

          // eslint-disable-next-line no-eq-null
        } else if ((!IsSecurityQuestionAuthenticatorVerified && !IsPushDeviceRegistered && !IsAuthenticatorVerified && !IsEmailOtpAuthenticatorVerified && module.options.twoFactorAuthentication) || (module.options.optionalTwoFactorAuthentication && !IsOTPAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsPushDeviceRegistered && !IsAuthenticatorVerified && !IsEmailOtpAuthenticatorVerified && (loginResponse.SecondFactorAuthentication.OTPPhoneNo !== '' && loginResponse.SecondFactorAuthentication.OTPPhoneNo != null)) || IsOTPAuthenticatorVerified) {
          _classPrefix = _classPrefix || LoginRadiusDefaults.classPrefix;
          var formElement = document.getElementsByName(_classPrefix + 'showQRcode')[0];

          if (module.options.qrCodeAuthentication && formElement) {
            formElement.appendChild(sendOTPBtn);
          }
        }
      };
      var twoFApushnotificationFn = function () {
        const isNonMFAEnabled = !IsSecurityQuestionAuthenticatorVerified && !IsEmailOtpAuthenticatorVerified && !IsOTPAuthenticatorVerified && !IsAuthenticatorVerified && !IsDuoAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && !IsPasskeyAuthenticatorVerified && module.options.twoFactorAuthentication;
        if (module.options.pushNotificationAuthentication && (isNonMFAEnabled || IsPushDeviceRegistered)) {
          const secondFactorToken = loginResponse.SecondFactorAuthentication.SecondFactorAuthenticationToken;
          var handleSuccess = function (_resp) {
            commonFns.loginHandleToken(_resp, '', onSuccess, onError, '', true);
          };
          const qrCodeAuthenticatorBtn = module.util.getButtonAttribute('pushnotification', _classPrefix, function (event) {
            module.util.disableResendOTPButton(event);
            if (!IsPushDeviceRegistered && loginResponse.SecondFactorAuthentication && loginResponse.SecondFactorAuthentication.PushQRCode) {
              let pushNotificationQRCode;
              pushNotificationQRCode = document.createElement('img');
              pushNotificationQRCode.type = 'image';
              pushNotificationQRCode.src = loginResponse.SecondFactorAuthentication.PushQRCode;
              module.util.addHTMLContent(container, pushNotificationQRCode, false);
              module.$hooks.call('afterFormRender', 'login', container, _classPrefix);
              LoginRadiusDefaults.innerHTML = false;
            } else {
              commonFns.resendPushNotification(secondFactorToken, handleSuccess, onError);
            }
            if (!IsPushDeviceRegistered && LoginRadiusDefaults.pingCount <= 1 && secondFactorToken) {
              commonFns.pingForPushNotification(secondFactorToken, handleSuccess, onError);
            }
          });
          if (isNonMFAEnabled && IsPushDeviceRegistered && LoginRadiusDefaults.pingCount <= 1 && secondFactorToken) {
            commonFns.pingForPushNotification(secondFactorToken, handleSuccess, onError);
          }
          module.util.addHTMLContent(container, qrCodeAuthenticatorBtn, _innerHtml_);
          _innerHtml_ = true;
        }
      };

      var twoFApasskeyMFACodeFn = function () {
        const secondFactorToken = loginResponse.SecondFactorAuthentication.SecondFactorAuthenticationToken;
        if (module.options.passkeyAuthentication && ((!IsAuthenticatorVerified && !IsPushDeviceRegistered && !IsOTPAuthenticatorVerified && !IsSecurityQuestionAuthenticatorVerified && !IsEmailOtpAuthenticatorVerified && !IsDuoAuthenticatorVerified && module.options.twoFactorAuthentication) || IsPasskeyAuthenticatorVerified)) {
          var passkeyAuthBtn = module.util.getButtonAttribute('passkeyauthenticator', _classPrefix);
          module.util.addHTMLContent(container, passkeyAuthBtn, _innerHtml_);
          _innerHtml_ = true;
          module.util.addEvent('click', passkeyAuthBtn, function (event) {
            if (IsPasskeyAuthenticatorVerified) {
              commonFns.loginMFAPasskey(secondFactorToken, onSuccess, onError);
            } else {
              commonFns.createMFAPasskey(secondFactorToken, onSuccess, onError);
            }
          });
        }
      };

      var sendOTPBtn = module.util.getButtonAttribute('otpauthenticator', _classPrefix);
      var _innerHtml_ = false;
      var authenticatorOptionsOrder = module.options.authenticatorOptionsOrder;
      for (var key in authenticatorOptionsOrder) {
        if (authenticatorOptionsOrder[key]) {
          if (authenticatorOptionsOrder[key] === 'emailotp') {
            twoFAemailotpCodeFn();
          } else if (authenticatorOptionsOrder[key] === 'sms') {
            twoFAsmsCodeFn();
          } else if (authenticatorOptionsOrder[key] === 'securityquestion') {
            twoFAsecurityquestionCodeFn();
          } else if (authenticatorOptionsOrder[key] === 'auth' || authenticatorOptionsOrder[key] === 'googleauth') {
            twoFAgoogleauthCodeFn();
          } else if (authenticatorOptionsOrder[key] === 'pushnotification') {
            twoFApushnotificationFn();
          } else if (authenticatorOptionsOrder[key] === 'duomfa') {
            twoFAduoMFACodeFn();
          } else if (authenticatorOptionsOrder[key] === 'passkey') {
            twoFApasskeyMFACodeFn();
          }
        }
      }

      if (IsPushDeviceRegistered || IsSecurityQuestionAuthenticatorVerified || IsEmailOtpAuthenticatorVerified || IsOTPAuthenticatorVerified || IsAuthenticatorVerified || IsDuoAuthenticatorVerified || IsPasskeyAuthenticatorVerified) {
        var backupCodeBtn = module.util.getButtonAttribute('backupcodebutton', _classPrefix);
        module.util.addHTMLContent(container, backupCodeBtn, _innerHtml_);
        module.util.addEvent('click', backupCodeBtn, function (event) {
          LoginRadiusDefaults.innerHTML = false;
          showBackupCodeForm(container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
        });
      }

      module.util.addEvent('click', sendOTPBtn, function (event) {
        var phoneNo = 'phoneNo2FA=' + loginResponse.SecondFactorAuthentication.OTPPhoneNo;
        LoginRadiusDefaults.innerHTML = false;
        emailOtp = false;
        if (IsSecurityQuestionAuthenticatorVerified || IsAuthenticatorVerified || IsEmailOtpAuthenticatorVerified || IsPushDeviceRegistered || IsDuoAuthenticatorVerified || IsPasskeyAuthenticatorVerified || _sendotpapi) {
          commonFns.resendOTPManually(phoneNo, onSuccess, onError, _classPrefix, module.options.isVoiceOtp);
        }
        loginResponse.phone = loginResponse.SecondFactorAuthentication.OTPPhoneNo;
        commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
        commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
        commonFns.verifyOTP(loginResponse, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
        commonFns.resendOTP(loginResponse, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField);
      });
    };
    var url = LoginRadiusDefaults.apiDomain + '/auth/login/';
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
    var methodType = 'post';
    var postBody;
    if (window['lrbackupcode']) {
      url = url + 'backupcode' + '?apiKey=' + module.options.apiKey + '&' + data;
      methodType = 'get';
      postBody = '';
    } else {
      url = url + '?apiKey=' + module.options.apiKey + '&loginUrl=' + module.options.loginUrl + '&emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl + '&smsTemplate=' + module.options.smsTemplateWelcome + '&smsTemplate2FA=' + module.options.smsTemplate2FA + '&EmailTemplate2FA=' + module.options.EmailTemplate2FA;
      if (module.options.duoAuthentication) {
        var encodedUrl = encodeURIComponent(module.options.callbackUrl);
        url = url + '&duoredirecturi=' + encodedUrl;
      }
      postBody = module.util.parseQueryString(data);
    }
    if (module.options.isB2BEnabled) {
      const invitationType = module.util.getHashParam('vtype');
      if (invitationType === 'orginvite') {
        var token = module.util.getHashParam('vtoken');
        if (token) {
          url += '&invitation_token=' + token;
        }
      }
    }
    module.util.ajaxCall(methodType, url, postBody, function (loginResponse) {
      if (module.options.stayLogin) {
        module.storage.setBrowserStorage('lr-rememberme', module.util.getQueryParameterByName('stayLogin', data));
      }
      if (loginResponse.ErrorCode) {
        // eslint-disable-next-line eqeqeq
        if (loginResponse.ErrorCode == '970' && commonFns.showOTPTemplateForm('Registration')) {
          commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, data);
          // eslint-disable-next-line eqeqeq
        } else if (module.options.phoneLogin && loginResponse.ErrorCode == '1066') {
          var phonetoVerify = 'phone=' + module.util.getQueryParameterByName('phone', data);
          phonetoVerify += '&noPhoneVerified=false';
          module.options.optionalTwoFactorAuthentication = false;
          module.options.twoFactorAuthentication = false;
          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
          commonFns.verifyOTP(phonetoVerify, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          commonFns.resendOTP(phonetoVerify, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField);
        }

        onError(commonFns.loginRadiusErrorTojsError(loginResponse));
      } else {
        if (loginResponse.SecondFactorAuthentication) {
          module.storage.setBrowserStorage(LoginRadiusDefaults.storedTwoFAToken, loginResponse.SecondFactorAuthentication.SecondFactorAuthenticationToken);
          module.storage.setBrowserStorage(LoginRadiusDefaults.storedOTPAuth, loginResponse.SecondFactorAuthentication.IsOTPAuthenticatorVerified);
          if (loginResponse.access_token === '00000000-0000-0000-0000-000000000000') {
            handle2FAResponse(loginResponse, loginResponse.SecondFactorAuthentication);
            delete loginResponse.access_token;
            onSuccess(loginResponse, data);
          }
        } else {
          controllersModule.handleFeatures(loginResponse, data, requiredField, passwordExpiry, onSuccess, onError, _classPrefix);
        }
        if (module.lrApiFramework) {
          onSuccess(loginResponse);
        }
      }
    }, 'login');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resendOTPController
  * @param {Object} data object containing the phoneId
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} recaptchaid recaptcha html container dom id
  * @param {String} _classPrefix css class prefix string
  * @description This function will handle otp resend feature. will resend otp on user phone for Authentication.
  */
  controllersModule.resendOTPController = function (data, onSuccess, onError, _classPrefix, isVoice) {
    let voiceParam = '';
    if (isVoice) {
      voiceParam = '&isvoiceotp=true';
    }
    var templateName = data.updatePhone ? module.options.smsTemplateUpdatePhone : module.options.smsTemplatePhoneVerification;
    var url = LoginRadiusDefaults.apiDomain + '/auth/phone/otp?apiKey=' + module.options.apiKey + '&smsTemplate=' + templateName + voiceParam;
    var method = 'post';
    if (data.onetouchloginflag) {
      if (typeof data !== 'string') {
        data = module.util.jsonToQueryString(data);
      }
      url = LoginRadiusDefaults.apiDomain + '/auth/onetouchlogin/phone?apikey=' + module.options.apiKey + '&' + data + '&smstemplate=' + module.options.smsTemplatePhoneVerification + voiceParam;
    }
    module.util.ajaxCall(method, url, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.log(defaultMessages['otpSent']);
        onSuccess(response);
      }
    }, isVoice ? 'resendvoiceotp' : 'resendOTP');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resendOTP2FAController
  * @param {Object} data json object which contains the customer's phone number under the phoneNo2FA parameter. e.g. { phoneNo2FA: "xxxxxxxxxx" }
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} recaptchaid recaptcha html container dom id
  * @param {String} _classPrefix css class prefix string
  * @description This function will resend the One Time Passcode (OTP) by phone if needed during a Multi-Factor Authentication process.
  */
  controllersModule.resendOTP2FAController = function (data, onSuccess, onError, _classPrefix, isVoice) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    let voiceParam = '';
    if (isVoice) {
      voiceParam = '&isvoiceotp=true';
    }
    if (token && !module.LRCheckLogin) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apiKey=' + module.options.apiKey + '&access_token=' + token + '&smsTemplate=' + module.options.smsTemplate2FA + voiceParam, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          module.log(defaultMessages['otpSent']);
          onSuccess(response);
        }
      }, isVoice ? 'resendvoiceotp' : 'resendOTP');
    } else if (twoFactorToken) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/2FA/resend?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + twoFactorToken + '&smsTemplate2FA=' + module.options.smsTemplate2FA + voiceParam, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          module.log(defaultMessages['otpSent']);
        }
      }, isVoice ? 'resendvoiceotp' : 'resendOTP');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function verify2FAOTPController
  * @param {Object} data json object which have otp received on customer phone number e.g. { otp: "xxxx" }
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField callback function
  * @param {Function} passwordExpiry callback function
  * @description This function will used to login via Multi-factor authentication by passing the One Time Password received via SMS.
  */
  controllersModule.verify2FAOTPController = function (data, onSuccess, onError, passwordExpiry, requiredField) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);

    var mfaEmailToken = false;
    if (data && typeof data === 'string') {
      mfaEmailToken = data.indexOf('mfaEmailToken=true') !== -1;
    }
    var _sendData = module.util.parseQueryString(data);
    var _mfaAction = mfaEmailToken ? 'twofaemailotp' : 'twofaotp';
    var twofaVerifyAction = 'otp';
    if (mfaEmailToken) {
      twofaVerifyAction = 'otp/email';
      _sendData.emailid = _sendData.email;
      delete _sendData.email;
    } else if ('AuthenticatorCode' in _sendData) {
      twofaVerifyAction = 'authenticatorcode';
    }
    if (token && !module.LRCheckLogin) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/2fa/verification/' + twofaVerifyAction + '?apiKey=' + module.options.apiKey + '&access_token=' + token, _sendData, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response, data);
        }
      }, 'verifyOTP##' + _mfaAction);
    } else if (twoFactorToken) {
      var template = '';
      if (module.options.riskBasedAuthentication) {
        template += '&RbaOneclickEmailTemplate=' + module.options.rbaOneclickEmailTemplate + '&RbaOTPSmsTemplate=' + module.options.rbaOTPSmsTemplate + '&RbaCityEmailTemplate=' + module.options.rbaCityEmailTemplate + '&RbaCountryEmailTemplate=' + module.options.rbaCountryEmailTemplate + '&RbaBrowserEmailTemplate=' + module.options.rbaBrowserEmailTemplate + '&RbaIpEmailTemplate=' + module.options.rbaIpEmailTemplate + '&RbaDeviceEmailTemplate=' + module.options.rbaDeviceEmailTemplate + '&RbaCitySmsTemplate=' + module.options.rbaCitySmsTemplate + '&RbaCountrySmsTemplate=' + module.options.rbaCountrySmsTemplate;
        template += '&RbaBrowserSmsTemplate=' + module.options.rbaBrowserSmsTemplate + '&RbaIpSmsTemplate=' + module.options.rbaIpSmsTemplate + '&RbaDeviceSmsTemplate=' + module.options.rbaDeviceSmsTemplate;
      }
      if (twofaVerifyAction === 'otp') {
        template += '&smsTemplate2FA=' + module.options.smsTemplate2FAWelcome;
      }
      if (twofaVerifyAction === 'authenticatorcode') {
        _mfaAction = 'showqrcode';
      }
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/verification/' + twofaVerifyAction + '?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + twoFactorToken + template, _sendData, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          controllersModule.handleFeatures(response, data, requiredField, passwordExpiry, onSuccess, onError);
        }
      }, 'verifyOTP##' + _mfaAction);
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function backupCodeController
  * @param {String} data backup code string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {Function} requiredField callback function
  * @param {Function} passwordExpiry callback function
  * @description This function will used to login by using backup code.
  */
  controllersModule.backupCodeController = function (data, onSuccess, onError, passwordExpiry, requiredField) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    if (twoFactorToken) {
      var parsedData = module.util.parseQueryString(data);
      var template = '';
      if (module.options.riskBasedAuthentication) {
        template += '&RbaOneclickEmailTemplate=' + module.options.rbaOneclickEmailTemplate + '&RbaOTPSmsTemplate=' + module.options.rbaOTPSmsTemplate + '&RbaCityEmailTemplate=' + module.options.rbaCityEmailTemplate + '&RbaCountryEmailTemplate=' + module.options.rbaCountryEmailTemplate + '&RbaBrowserEmailTemplate=' + module.options.rbaBrowserEmailTemplate + '&RbaIpEmailTemplate=' + module.options.rbaIpEmailTemplate + '&RbaDeviceEmailTemplate=' + module.options.rbaDeviceEmailTemplate + '&RbaCitySmsTemplate=' + module.options.rbaCitySmsTemplate + '&RbaCountrySmsTemplate=' + module.options.rbaCountrySmsTemplate;
        template += '&RbaBrowserSmsTemplate=' + module.options.rbaBrowserSmsTemplate + '&RbaIpSmsTemplate=' + module.options.rbaIpSmsTemplate + '&RbaDeviceSmsTemplate=' + module.options.rbaDeviceSmsTemplate;
      }
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/2FA/verification/backupcode?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + twoFactorToken + '&smsTemplate2FA=' + module.options.smsTemplate2FAWelcome + template, parsedData, function (backupCoderesponse) {
        if (backupCoderesponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(backupCoderesponse));
        } else {
          controllersModule.handleFeatures(backupCoderesponse, data, requiredField, passwordExpiry, onSuccess, onError);
        }
      }, 'login');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function passkeyLoginController
  * @param {String} data phone number string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to check provided phone number already used or new phone number.
   */
  controllersModule.passkeyLoginController = function (data, container, onSuccess, onError, passwordExpiry, requiredField, _classPrefix) {
    var payload = module.util.parseQueryString(data);
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
    var template = 'emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl;
    let url = '';
    if (payload.autofill) {
      url = LoginRadiusDefaults.apiDomain + '/auth/login/passkey/autofill/begin?apiKey=' + module.options.apiKey;
    } else {
      url = LoginRadiusDefaults.apiDomain + '/auth/login/passkey/begin?apiKey=' + module.options.apiKey + '&identifier=' + payload.email + '&' + template;
    }
    module.util.ajaxCall('get', url, {}, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.util.getPassKeyCredentials(response.LoginBeginCredential, payload.autofill).then((assertion) => {
          controllersModule.passkeyFinishController(assertion, template, payload, container, onSuccess, onError, passwordExpiry, requiredField, _classPrefix);
        }).catch((error) => {
          onError(commonFns.loginRadiusErrorTojsError(error));
        });
      }
    });
  };

  controllersModule.passkeyFinishController = function (assertion, template, payload, container, onSuccess, onError, passwordExpiry, requiredField, _classPrefix) {
    let authData = assertion.response.authenticatorData;
    let clientDataJSON = assertion.response.clientDataJSON;
    let rawId = assertion.rawId;
    let sig = assertion.response.signature;
    let userHandle = assertion.response.userHandle;
    const passKeyPayload = {
      email: payload.email,
      PasskeyCredential: {
        id: assertion.id,
        rawId: module.util.base64UrlEncode(rawId),
        type: assertion.type,
        authenticatorAttachment: assertion.authenticatorAttachment,
        response: {
          authenticatorData: module.util.base64UrlEncode(authData),
          clientDataJSON: module.util.base64UrlEncode(clientDataJSON),
          signature: module.util.base64UrlEncode(sig),
          userHandle: module.util.base64UrlEncode(userHandle)
        }
      }
    };
    if (module.options.riskBasedAuthentication) {
      template += '&RbaOneclickEmailTemplate=' + module.options.rbaOneclickEmailTemplate + '&RbaOTPSmsTemplate=' + module.options.rbaOTPSmsTemplate + '&RbaCityEmailTemplate=' + module.options.rbaCityEmailTemplate + '&RbaCountryEmailTemplate=' + module.options.rbaCountryEmailTemplate + '&RbaBrowserEmailTemplate=' + module.options.rbaBrowserEmailTemplate + '&RbaIpEmailTemplate=' + module.options.rbaIpEmailTemplate + '&RbaDeviceEmailTemplate=' + module.options.rbaDeviceEmailTemplate + '&RbaCitySmsTemplate=' + module.options.rbaCitySmsTemplate + '&RbaCountrySmsTemplate=' + module.options.rbaCountrySmsTemplate;
      template += '&RbaBrowserSmsTemplate=' + module.options.rbaBrowserSmsTemplate + '&RbaIpSmsTemplate=' + module.options.rbaIpSmsTemplate + '&RbaDeviceSmsTemplate=' + module.options.rbaDeviceSmsTemplate;
    }
    if (module.options.isB2BEnabled) {
      const invitationType = module.util.getHashParam('vtype');
      if (invitationType === 'orginvite') {
        var token = module.util.getHashParam('vtoken');
        if (token) {
          template += '&invitation_token=' + token;
        }
      }
    }
    let url = LoginRadiusDefaults.apiDomain + '/auth/login/passkey/finish?apiKey=' + module.options.apiKey + '&loginUrl=' + module.options.loginUrl + '&' + template;
    if (payload.autofill) {
      url = LoginRadiusDefaults.apiDomain + '/auth/login/passkey/autofill/finish?apiKey=' + module.options.apiKey + '&loginUrl=' + module.options.loginUrl;
    }
    module.util.ajaxCall('post', url, passKeyPayload, function (loginResponse) {
      if (module.options.stayLogin) {
        module.storage.setBrowserStorage('lr-rememberme', payload['stayLogin']);
      }
      if (loginResponse.ErrorCode) {
        // eslint-disable-next-line eqeqeq
        if (loginResponse.ErrorCode == '970' && !module.options.verifyEmailByOTP) {
          commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, payload);
          // eslint-disable-next-line eqeqeq
        }
        onError(commonFns.loginRadiusErrorTojsError(loginResponse));
      } else {
        controllersModule.handleFeatures(loginResponse, payload, requiredField, passwordExpiry, onSuccess, onError, _classPrefix);
      }
    }, 'login');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function passkeyRegistrationController
  * @param {Object} data the form post data
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to check provided phone number already used or new phone number.
   */
  controllersModule.passkeyRegistrationController = function (data, container, onSuccess, onError, _classPrefix, passkeySchema) {
    const emailValue = module.util.getQueryParameterByName('email', data);
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/register/passkey/begin?apiKey=' + module.options.apiKey + '&identifier=' + emailValue, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.util.createPassKeyCredentials(response.RegisterBeginCredential).then((credential) => {
          let body = {};
          if (!module.lrApiFramework) {
            body = commonFns.mapRegistrationSchema(passkeySchema, data);
          }
          body['PasskeyCredential'] = {
            id: credential.id,
            rawId: module.util.base64UrlEncode(credential.rawId),
            type: credential.type,
            response: {
              attestationObject: module.util.base64UrlEncode(credential.response.attestationObject),
              clientDataJSON: module.util.base64UrlEncode(credential.response.clientDataJSON)
            }
          };
          var _welcomeemailtemplate = module.options.welcomeEmailTemplate;
          var welcomeemailtemplate = module.util.getHashParam('welcomeemailtemplate');
          if (welcomeemailtemplate) {
            _welcomeemailtemplate = welcomeemailtemplate;
          }
          var template = 'emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl + '&welcomeEmailTemplate=' + _welcomeemailtemplate;
          if (module.options.preventVerificationEmail) {
            template = template + '&options=PreventVerificationEmail';
          }
          if (module.options.isB2BEnabled) {
            const invitationType = module.util.getHashParam('vtype');
            if (invitationType === 'orginvite') {
              var token = module.util.getHashParam('vtoken');
              if (token) {
                template += '&invitation_token=' + token;
              }
            }
          }
          const url = LoginRadiusDefaults.apiDomain + '/auth/register/passkey/finish?apiKey=' + module.options.apiKey + '&' + template;
          module.util.ajaxCall('post', url, body, function (regResponse) {
            const objData = module.util.parseQueryString(data);
            if (regResponse && module.util.isObject(regResponse)) {
              regResponse = module.util.keyslowerToUpperCamelCase(regResponse);
            }
            if (regResponse.ErrorCode) {
              onError(commonFns.loginRadiusErrorTojsError(regResponse));
            } else {
              var addSkipFieldinSchema = function (schema) {
                schema.push({
                  type: 'button',
                  name: 'skip',
                  display: 'Skip',
                  rules: '',
                  permission: 'r',
                  event: 'click',
                  eventCallback: function (event) {
                    commonFns.loginHandleToken(regResponse, objData, onSuccess, onError);
                  }
                });
              };
              if (regResponse.Data) {
                regResponse = regResponse.Data;
                delete regResponse.Data;
                delete regResponse.IsPosted;
                module.options.askRequiredFieldForTraditionalLogin = false;
                if (!module.options.disabledEmailVerification && (!regResponse.Profile || !regResponse.Profile.EmailVerified) && commonFns.showOTPTemplateForm('Registration')) {
                  module.$hooks.register('beforeFormRender', function (name, schema) {
                    if (name === 'otp' && !module.util.findInSchema(schema, 'name', 'skip')) {
                      addSkipFieldinSchema(schema);
                    }
                  });
                  var _onSuccess = function (response) {
                    if (!response.access_token) {
                      commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
                    } else {
                      commonFns.loginHandleToken(response, data, onSuccess, onError);
                    }
                  };
                  commonFns.otpEmailVerification(container, _onSuccess, onError, _classPrefix, objData);
                } else {
                  commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
                }
              } else {
                onSuccess(regResponse, objData);
                if (commonFns.showOTPTemplateForm('Registration')) {
                  commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, objData);
                }
              }
            }
          }, 'registration');
        }).catch((error) => {
          onError(commonFns.loginRadiusErrorTojsError(error));
        });
      }
    }, 'passkeyRegister');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function checkPhoneNumberAvailabilityController
  * @param {String} data phone number string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to check provided phone number already used or new phone number.
  */
  controllersModule.checkPhoneNumberAvailabilityController = function (data, onSuccess, onError) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/phone?apiKey=' + module.options.apiKey + '&' + data, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response);
      }
    }, 'checkPhone');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function update2FAPhoneNumberController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} requiredField callback function
  * @param {Function} passwordExpiry callback function
  * @param {Function} verifyOTPApi callback function
  * @param {Function} resendOTPApi callback function
  * @description This function will used to update existing phone number in 2FA.
  */
  controllersModule.update2FAPhoneNumberController = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField, verifyOTPApi, resendOTPApi) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token && !module.LRCheckLogin) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apiKey=' + module.options.apiKey + '&access_token=' + token + '&smsTemplate=' + module.options.smsTemplate2FA, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
          commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          commonFns.resendOTP(data, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField);
          onSuccess(response, data);
        }
      }, 'updatePhone');
    } else if (twoFactorToken) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/2FA/?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + twoFactorToken + '&smsTemplate2FA=' + module.options.smsTemplate2FA, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response, data);
          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
          commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);
          commonFns.resendOTP(data, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField);
        }
      }, 'login');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updatePhoneNumberController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} requiredField callback function
  * @param {Function} passwordExpiry callback function
  * @param {Function} verifyOTPApi callback function
  * @param {Function} resendOTPApi callback function
  * @description This function will used to update existing phone number during login process.
  */
  controllersModule.updatePhoneNumberController = function (data, container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField, verifyOTPApi, resendOTPApi) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (commonFns.isValidToken(token, onError)) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/phone?apiKey=' + module.options.apiKey + '&access_token=' + token + '&smsTemplate=' + module.options.smsTemplateUpdatePhone, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
          commonFns.verifyOTP(data + '&haveToken=true', container, onSuccess, onError, _classPrefix, passwordExpiry, requiredField);

          commonFns.resendOTP(data + '&updatePhone=true', container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, passwordExpiry, requiredField, true);

          onSuccess(response, data);
        }
      }, 'updatePhone');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPasswordByPhoneController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to reset account login password by using phone id.
  */
  controllersModule.resetPasswordByPhoneController = function (data, onSuccess, onError, container, _classPrefix) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/password/otp?apiKey=' + module.options.apiKey + '&smsTemplate=' + module.options.smsTemplateWelcome, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        if (module.options.loginOnPasswordReset && response.Data && response.Data.access_token) {
          commonFns.loginHandleToken(response.Data, '', onSuccess, onError);
        } else {
          onSuccess(response, data);
        }
      }
    }, 'resetPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPINByPhoneController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to reset account login pin by using phone id.
  */
  controllersModule.resetPINByPhoneController = function (data, onSuccess, onError, container, _classPrefix) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/pin/reset/otp/phone?apiKey=' + module.options.apiKey + '&smsTemplate=' + module.options.smsTemplateWelcome, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, data);
      }
    }, 'resetPIN');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function forgotPasswordbyPhoneController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} resetPasswordApi callback function
  * @description This function will used to set new password on forgot password option by using using phone id.
  */
  controllersModule.forgotPasswordbyPhoneController = function (data, container, onSuccess, onError, _classPrefix, isVoice, resetPasswordApi) {
    let voiceParam = '';
    if (isVoice) {
      voiceParam = '&isvoiceotp=true';
    }
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/password/otp?apiKey=' + module.options.apiKey + '&smsTemplate=' + module.options.smsTemplateForgot + voiceParam, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, data);
        var resetPassword = resetPasswordApi || commonFns.resetPassword;
        resetPassword(container, onSuccess, onError, _classPrefix);
      }
    }, 'forgotPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function forgotPINbyPhoneController
  * @param {String} data phone id json object string
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Function} resetPINApi callback function
  * @description This function will used to set new PIN on forgot PIN option by using using phone id.
  */
  controllersModule.forgotPINbyPhoneController = function (data, container, onSuccess, onError, _classPrefix, isVoice, resetPINApi) {
    let voiceParam = '';
    if (isVoice) {
      voiceParam = '&isvoiceotp=true';
    }
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/pin/forgot/otp?apiKey=' + module.options.apiKey + '&smsTemplate=' + module.options.smsTemplateForgot + voiceParam, data, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, data);
        var resetPIN = resetPINApi || commonFns.resetPIN;
        resetPIN(container, onSuccess, onError, _classPrefix);
      }
    }, 'forgotPIN');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function registrationController
  * @param {String} data json object string for Ex. "password=XX32XXX&email=XXX.l343%40mailazy.com"
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Array} regSchema reg form fields json objects array
  * @param {Function} verifyOTPApi callback function
  * @param {Function} resendOTPApi callback function
  * @description This function will handle user account registration process.
  */
  controllersModule.registrationController = function (data, container, onSuccess, onError, _classPrefix, regSchema, verifyOTPApi, resendOTPApi) {
    module.LRCheckRegistration = true;
    var registrationData = data;
    if (!module.lrApiFramework) {
      registrationData = commonFns.mapRegistrationSchema(regSchema, data);
    }
    var _welcomeemailtemplate = module.options.welcomeEmailTemplate;
    var welcomeemailtemplate = module.util.getHashParam('welcomeemailtemplate');
    if (welcomeemailtemplate) {
      _welcomeemailtemplate = welcomeemailtemplate;
    }
    // var registrationData = commonFns.mapRegistrationSchema(regSchema, data);
    var template = 'emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl + '&welcomeEmailTemplate=' + _welcomeemailtemplate;
    if (module.options.phoneLogin) {
      template += '&smsTemplate=' + module.options.smsTemplatePhoneVerification;
    }
    if (module.options.preventVerificationEmail) {
      template = template + '&options=PreventVerificationEmail';
    }
    if (module.options.isB2BEnabled) {
      const invitationType = module.util.getHashParam('vtype');
      if (invitationType === 'orginvite') {
        var token = module.util.getHashParam('vtoken');
        if (token) {
          template += '&invitation_token=' + token;
        }
      }
    }
    var url = '';
    let isGoogleCaptchEnabled = module.options.isCaptchaEnabled || module.options.v2Recaptcha || module.options.invisibleRecaptcha;
    if (isGoogleCaptchEnabled || module.options.tencentCaptcha) {
      url = LoginRadiusDefaults.apiDomain + '/auth/register/captcha?apiKey=' + module.options.apiKey + '&' + template;
    } else {
      if (!module.options.sott) {
        if (module.options.vNextUX) {
          module.log('SOTT commonOption is missing in configuration. You can use a static SOTT generated from Admin Console or create it at run-time using the API. For more details on SOTT generation, please refer to https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/.');
        } else {
          module.log('url is not set as sott option is not defined');
        }
      } else {
        url = LoginRadiusDefaults.apiDomain + '/auth/register?apiKey=' + module.options.apiKey + '&' + template;
        if (module.options.enableHeaderSott) {
          module.options.sott = decodeURIComponent(module.options.sott);
          registrationData.sottcheck = true;
        } else {
          url += '&sott=' + module.util.encodedString(module.options.sott);
        }
      }
    }

    if (url !== '') {
      module.util.ajaxCall('post', url, registrationData, function (regResponse) {
        if (regResponse && module.util.isObject(regResponse)) {
          regResponse = module.util.keyslowerToUpperCamelCase(regResponse);
        }
        if (regResponse.ErrorCode) {
          // eslint-disable-next-line no-magic-numbers
          if (regResponse.ErrorCode === 1049) {
            if (module.options.vNextUX) {
              defaultMessages['invalidSott'] = 'An error occurred, please refresh the page to proceed with registration.';
            }
            onError([
              commonFns.setMappedMessage(defaultMessages['invalidSott'])
            ]);
            module.log(regResponse.Description);
          } else {
            onError(commonFns.loginRadiusErrorTojsError(regResponse));
          }
        } else {
          var addSkipFieldinSchema = function (schema) {
            schema.push({
              type: 'button',
              name: 'skip',
              display: 'Skip',
              rules: '',
              permission: 'r',
              event: 'click',
              eventCallback: function (event) {
                commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
              }
            });
          };

          if (module.options.phoneLogin && (typeof data === 'string' || data instanceof String) && data.indexOf('phoneid') !== -1) {
            var phoneSchema = module.util.findInSchema(module.registrationFormSchema, 'name', 'phoneid');
            if (phoneSchema.rules.indexOf('required') === -1) {
              module.$hooks.register('beforeFormRender', function (name, schema) {
                if (name === 'otp' && !module.util.findInSchema(schema, 'name', 'skip')) {
                  addSkipFieldinSchema(schema);
                }
              });
            }
            commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
            commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;
            commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix);
            commonFns.resendOTP(data, container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp);
          } else {
            var parseData = module.util.parseQueryString(data);
            if (regResponse.Data) {
              regResponse = regResponse.Data;
              delete regResponse.Data;
              delete regResponse.IsPosted;
              module.options.askRequiredFieldForTraditionalLogin = false;
              if (!module.options.disabledEmailVerification && (!regResponse.Profile || !regResponse.Profile.EmailVerified) && commonFns.showOTPTemplateForm('Registration')) {
                module.$hooks.register('beforeFormRender', function (name, schema) {
                  if (name === 'otp' && !module.util.findInSchema(schema, 'name', 'skip')) {
                    addSkipFieldinSchema(schema);
                  }
                });
                var _onSuccess = function (response) {
                  if (!response.access_token) {
                    commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
                  } else {
                    commonFns.loginHandleToken(response, data, onSuccess, onError);
                  }
                };
                commonFns.otpEmailVerification(container, _onSuccess, onError, _classPrefix, parseData);
              } else {
                commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
              }
            } else {
              onSuccess(regResponse, parseData);
              if (commonFns.showOTPTemplateForm('Registration')) {
                commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, parseData);
              }
            }
          }
        }
      }, 'registration');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function periodicalPasswordRestController
  * @param {Object} resetData json object
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} userProfile user profile json data object
  * @param {Object} loginResponse account login service response json object
  * @param {Object} loginData login credentials object
  * @description This function will used to reset periodical password and login the account.
  */
  controllersModule.periodicalPasswordRestController = function (resetData, onSuccess, onError, userProfile, loginResponse, loginData) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/password/change?apiKey=' + module.options.apiKey + '&access_token=' + loginResponse.access_token, resetData, function (resetPasswordReeonse) {
      if (resetPasswordReeonse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(resetPasswordReeonse));
      } else {
        commonFns.loginHandleToken(loginResponse, loginData, onSuccess, onError);
      }
    }, 'periodicPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function changePasswordController
  * @param {String} data json object string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to change existing user account password.
  */
  controllersModule.changePasswordController = function (data, onSuccess, onError) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/password/change?apiKey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName), data, function (changePasswordResponse) {
      if (changePasswordResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(changePasswordResponse));
      } else {
        onSuccess(changePasswordResponse, module.util.parseQueryString(data));
      }
    }, 'changePassword');
  };
  /**
  * @memberof LoginRadiusControllers#
  * @function changePINController
  * @param {String} data json object string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to change existing user account pin.
  */
  controllersModule.changePINController = function (data, onSuccess, onError) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/pin/change?apiKey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName), data, function (changePINResponse) {
      if (changePINResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(changePINResponse));
      } else {
        onSuccess(changePINResponse, module.util.parseQueryString(data));
      }
    }, 'changePIN');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resendEmailVerificationController
  * @param {String} data json object string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to resend account email verification link on user email id.
  */
  controllersModule.resendEmailVerificationController = function (data, onSuccess, onError) {
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/register?apiKey=' + module.options.apiKey + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.verificationEmailTemplate, data, function (emailVerificationResponse) {
      if (emailVerificationResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(emailVerificationResponse));
      } else {
        onSuccess(emailVerificationResponse, module.util.parseQueryString(data));
        if (commonFns.showOTPTemplateForm('Registration') && module.currentLRContainer) {
          commonFns.otpEmailVerification(module.currentLRContainer, onSuccess, onError, '', data);
        }
      }
    }, 'resendVerificationEmail');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function addEmailController
  * @param {String} data json object string which hold email
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to add new email in user account and if email verification has enabled then handle the eamil verification process as well.
  */
  controllersModule.addEmailController = function (data, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (commonFns.isValidToken(token, onError)) {
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/email?apiKey=' + module.options.apiKey + '&access_token=' + token + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.addEmailTemplate, data, function (addEmailResponse) {
        if (addEmailResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(addEmailResponse));
        } else {
          onSuccess(addEmailResponse, module.util.parseQueryString(data));
          if (commonFns.showOTPTemplateForm('AddEmail')) {
            commonFns.otpEmailVerification(module.currentLRContainer, onSuccess, onError, '', data);
          }
        }
      }, 'addEmail');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function removeEmailController
  * @param {String} data json object string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to remove existing email from user account.
  */
  controllersModule.removeEmailController = function (data, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (commonFns.isValidToken(token, onError)) {
      module.util.ajaxCall('delete', LoginRadiusDefaults.apiDomain + '/auth/email?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (removeEmailResponse) {
        if (removeEmailResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(removeEmailResponse));
        } else {
          onSuccess(removeEmailResponse, module.util.parseQueryString(data));
        }
      }, 'removeEmail');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function changeUsernameController
  * @param {String} data json object string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to change existing user name of user account.
  */
  controllersModule.changeUsernameController = function (data, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (commonFns.isValidToken(token, onError)) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/username?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (changeUsernameResponse) {
        if (changeUsernameResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(changeUsernameResponse));
        } else {
          onSuccess(changeUsernameResponse, module.util.parseQueryString(data));
        }
      }, 'changeUsername');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPasswordController
  * @param {String} data json object string which contains resettoken, password and confirmpassword
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to reset user account password.
  */
  controllersModule.resetPasswordController = function (data, onSuccess, onError, container, _classPrefix) {
    data += '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate + '&ResetPasswordEmailTemplate=' + module.options.resetPasswordConfirmationEmailTemplate;
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/password/reset?apiKey=' + module.options.apiKey, data, function (resetPasswordResponse) {
      if (resetPasswordResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(resetPasswordResponse));
      } else {
        if (module.options.loginOnPasswordReset && resetPasswordResponse.Data && resetPasswordResponse.Data.access_token) {
          commonFns.loginHandleToken(resetPasswordResponse.Data, '', onSuccess, onError);
        } else {
          onSuccess(resetPasswordResponse, module.util.parseQueryString(data));
        }
      }
    }, 'resetPassword');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function duoVerifyController
  * @param {String} data json object string which contains state and code
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to verify the duo state and code.
  */
  controllersModule.duoVerifyController = function (data, onSuccess, onError, container, _classPrefix) {
    var url = LoginRadiusDefaults.apiDomain + '/auth/login/2fa/verification/duo?apiKey=' + module.options.apiKey + '&SecondFactorAuthenticationToken=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    module.util.ajaxCall('put', url, data, function (duoVerifyResponse) {
      module.duoLoginFlag = false;
      if (duoVerifyResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(duoVerifyResponse));
      } else {
        commonFns.loginHandleToken(duoVerifyResponse, '', onSuccess, onError);
      }
    }, 'login');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function duoVerifyByAccessTokenController
  * @param {String} data json object string which contains state and code
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to verify the duo state and code using access_token.
  */
  controllersModule.duoVerifyByAccessTokenController = function (data, onSuccess, onError, container, _classPrefix) {
    var url = LoginRadiusDefaults.apiDomain + '/auth/account/2fa/verification/duo?apiKey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    module.util.ajaxCall('put', url, data, function (duoVerifyResponse) {
      module.duoLoginFlag = false;
      if (duoVerifyResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(duoVerifyResponse));
      } else {
        onSuccess(duoVerifyResponse);
      }
    }, 'duoVerifyByAccessToken');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPINController
  * @param {String} data json object string which contains resettoken/email/username, pin and confirmpin
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @description This function will used to reset user account pin.
  */
  controllersModule.resetPINController = function (data, onSuccess, onError, container, _classPrefix) {
    var queryObj = module.util.parseQueryString(data);
    var url = '';
    if (queryObj.hasOwnProperty('resettoken')) {
      url = LoginRadiusDefaults.apiDomain + '/auth/pin/reset/token?apiKey=' + module.options.apiKey;
    } else {
      var mode = (queryObj.hasOwnProperty('username')) ? 'username' : 'email';
      url = LoginRadiusDefaults.apiDomain + '/auth/pin/reset/otp/' + mode + '?apiKey=' + module.options.apiKey;
    }
    data += '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate + '&ResetPINEmailTemplate=' + module.options.resetPINConfirmationEmailTemplate;
    module.util.ajaxCall('put', url, data, function (resetPINResponse) {
      if (resetPINResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(resetPINResponse));
      } else {
        onSuccess(resetPINResponse, module.util.parseQueryString(data));
      }
    }, 'resetPIN');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function emailVerificationController
  * @param {String} vtoken verification token string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @param {Boolean} flag to determine which method used to call api (GET with URL or PUT with param)
  * @description This function will used to verify user account email by using verification token.
  */
  controllersModule.emailVerificationController = function (vtoken, onSuccess, onError, container, _classPrefix, flag) {
    var method = 'get';
    if (vtoken) {
      //  var emailTokenFlag = flag == true ? '/smartlogin':'';
      var url = LoginRadiusDefaults.apiDomain + '/auth/email?apiKey=' + module.options.apiKey + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate;
      var params = '';
      if (flag) {
        method = 'put';
        params = vtoken;
      } else {
        url += '&verificationtoken=' + vtoken + '&url=' + module.options.verificationUrl;
      }
      var actionValue = '##otp';
      if (module.options.verifyEmailByOTP) {
        actionValue = '';
      }
      if (actionValue === '##otp') {
        if (!module.currentActionOptions) {
          module.currentActionOptions = {};
        }
        module.currentActionOptions['otp'] = {};
        module.currentActionOptions['otp']['onSuccess'] = onSuccess || function () { /* do nothing. */ };
        module.currentActionOptions['otp']['onError'] = onError || function () { /* do nothing. */ };
        module.currentActionOptions['otp']['classPrefix'] = _classPrefix || '';
      }
      if (((typeof vtoken !== 'string' && vtoken.oneClickSignIn) || (typeof vtoken === 'string' && vtoken.indexOf('oneClickSignIn=true') !== -1)) && module.options.templateVerificationTypes && module.options.templateVerificationTypes['OneClickSignin'] === 'OTP') {
        commonFns.passwordlessLoginVerification(vtoken, onSuccess, onError, _classPrefix, true);
      } else {
        module.util.ajaxCall(method, url, params, function (emailVerificationResponse) {
          if (emailVerificationResponse.ErrorCode) {
            onError(commonFns.loginRadiusErrorTojsError(emailVerificationResponse));
          } else {
            if (module.options.loginOnEmailVerification) {
              // eslint-disable-next-line no-eq-null
              if (emailVerificationResponse.Data == null) {
                onSuccess(emailVerificationResponse);
              } else {
                if (emailVerificationResponse.Data && emailVerificationResponse.Data.access_token) {
                  commonFns.loginHandleToken(emailVerificationResponse.Data, '', onSuccess, onError);
                } else if (emailVerificationResponse.Data) {
                  onSuccess(emailVerificationResponse);
                }
              }
            } else {
              if (module.options.logoutOnVerifyEmail) {
                commonFns.logout(onSuccess(emailVerificationResponse));
              } else {
                onSuccess(emailVerificationResponse);
              }
            }
          }
        }, 'verifyEmail' + actionValue);
      }
    } else {
      if (flag) {
        onError([defaultMessages['notFound']]);
      } else {
        onError([defaultMessages['vTokenError']]);
      }
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function deleteUserConfirmController
  * @param {String} vtoken verification token string
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to confirm user account delete. It handle confirmation call of user deletion.
  */
  controllersModule.deleteUserConfirmController = function (vtoken, onSuccess, onError) {
    if (vtoken) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/delete?apiKey=' + module.options.apiKey + '&deletetoken=' + vtoken, '', function (deleteConfirmResponse) {
        if (deleteConfirmResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(deleteConfirmResponse));
        } else {
          onSuccess(deleteConfirmResponse);
        }
      }, 'deleteUserConfirm');
    } else {
      onError([defaultMessages['vTokenError']]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function checkEmailAvailabilityController
  * @param {String} data json object string which hold email
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will check provided email has already registered or not.
  */
  controllersModule.checkEmailAvailabilityController = function checkEmailAvailabilityController (data, onSuccess, onError) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/email?apiKey=' + module.options.apiKey + '&' + data, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response);
      }
    }, 'checkEmail');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function checkUserNameAvailabilityController
  * @param {String} data json object string which hold username
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will check provided user name has already registered or not.
  */
  controllersModule.checkUserNameAvailabilityController = function (data, onSuccess, onError) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/username?apiKey=' + module.options.apiKey + '&' + data, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response);
      }
    }, 'checkUsername');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPasswordBySecurityQuestionController
  * @param {String} data json object string containing the value of either email/username/phone for the account, along with the desired passsword and the question and answer.
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will reset user account password by using security question.
  */
  controllersModule.resetPasswordBySecurityQuestionController = function (data, onSuccess, onError) {
    var securityObj = commonFns.sanitizeSecurityQuesData(data);
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/password/securityanswer/?apikey=' + module.options.apiKey, securityObj, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        if (module.options.loginOnPasswordReset && response.Data && response.Data.access_token) {
          commonFns.loginHandleToken(response.Data, '', onSuccess, onError);
        } else {
          onSuccess(response, data);
        }
      }
    }, 'resetPasswordBySecurityQuestion');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetPINBySecurityQuestionController
  * @param {String} data json object string containing the value of either email/username/phone for the account, along with the desired pin and the question and answer.
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will reset user account pin by using security question.
  */
  controllersModule.resetPINBySecurityQuestionController = function (data, onSuccess, onError) {
    var securityObj = commonFns.sanitizeSecurityQuesData(data);
    var mode = (securityObj.hasOwnProperty('email')) ? 'email' : (securityObj.hasOwnProperty('phone')) ? 'phone' : 'username';
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/pin/reset/securityanswer/' + mode + '?apikey=' + module.options.apiKey, securityObj, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, data);
      }
    }, 'resetPINBySecurityQuestion');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function getSecurityQuestionsController
  * @param {String} data json object string containing the value of either email/username/phone for the account.
  * @param {Function} schemaCallback success callback function
  * @param {Function} onError error callback function
  * @description This function will get user account security questions.
  */
  controllersModule.getSecurityQuestionsController = function (data, schemaCallback, onError) {
    var url = '/auth/securityquestion/';
    if (data.indexOf('username') !== -1) { url += 'username?apiKey='; } else if (data.indexOf('phone') !== -1) { url += 'phone?apiKey='; } else { url += 'email?apiKey='; }
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + url + module.options.apiKey + '&' + data, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        schemaCallback(getSecurityQuestions(response));
      }
    }, 'securityQuestion');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function getBackupCodeController
  * @param {String} token <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will get user account backup code further which can be use for login.
  */
  controllersModule.getBackupCodeController = function (token, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/2FA/backupcode?apikey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'backupCode');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function resetBackupCodeController
  * @param {String} token <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will reset user account backup code further which can be use for login.
  */
  controllersModule.resetBackupCodeController = function (token, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/2FA/backupcode/reset?apikey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'backupCode');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function getSocialDataController
  * @param {String} token <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} endpoint service endpoint url string e.g. /api/v2/message
  * @param {String} paramQueryString json object string e.g. &access_token?to=example%40example.com?subject=welcome?message=hello
  * @description This function will get user account social data from api.
  */
  controllersModule.getSocialDataController = function (token, onSuccess, onError, endpoint, paramQueryString) {
    if (token) {
      endpoint += '?access_token=' + token;
      if (paramQueryString) {
        endpoint = endpoint + '&' + paramQueryString;
      }
      module.util.ajaxCall('get', LoginRadiusDefaults.socialApiDomain + endpoint, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'socialAPI');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function postSocialDataController
  * @param {String} token <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} endpoint service endpoint url string  e.g. /api/v2/message
  * @param {String} paramQueryString json object string e.g. &access_token?to=example%40example.com?subject=welcome?message=hello
  * @param {String} postBodyJson The desired JSON for the POST body if there are any, otherwise leave this blank
  * @description This function is used to call any API from the Social APIs that require the "POST" method.
  */
  controllersModule.postSocialDataController = function (token, onSuccess, onError, endpoint, paramQueryString, postBodyJson) {
    if (token) {
      endpoint += '?access_token=' + token;
      if (paramQueryString) {
        endpoint = endpoint + '&' + paramQueryString;
      }
      module.util.ajaxCall('post', LoginRadiusDefaults.socialApiDomain + endpoint, postBodyJson, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'socialAPI');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function createCustomObjectController
  * @param {String} token <access_token>
  * @param {Object} customObjectJSON JSON that describes the object you would like to store
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function is used to create a custom object.
  */
  controllersModule.createCustomObjectController = function (token, customObjectJSON, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/customobject?apiKey=' + module.options.apiKey + '&access_token=' + token + '&objectname=' + module.options.customObjectName, customObjectJSON, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'createCustomObject');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @private
  * @function handleCustomObjectById
  * @param {String} method ajax call method name
  * @param {String} token <access_token>
  * @param {String} objectrecordid custom object record id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function is used to handle custom object operation(get, delete) by using objectrecord id.
  */
  function handleCustomObjectById (method, token, objectrecordid, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall(method, LoginRadiusDefaults.apiDomain + '/auth/customobject/' + objectrecordid + '?apiKey=' + module.options.apiKey + '&access_token=' + token + '&objectname=' + module.options.customObjectName, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'CustomObject');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  }

  /**
  * @memberof LoginRadiusControllers#
  * @function getCustomObjectByIdController
  * @param {String} token <access_token>
  * @param {String} objectrecordid custom object record id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function is used to get custom object by using its id.
  */
  controllersModule.getCustomObjectByIdController = function (token, objectrecordid, onSuccess, onError) {
    handleCustomObjectById('get', token, objectrecordid, onSuccess, onError);
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function getCustomObjectsController
  * @param {String} token <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function used to get all of the custom objects associated to a customer by using the access_token.
  */
  controllersModule.getCustomObjectsController = function (token, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/customobject?apiKey=' + module.options.apiKey + '&access_token=' + token + '&objectname=' + module.options.customObjectName, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'getCustomObject');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updateCustomObjectController
  * @param {String} token <access_token>
  * @param {String} objectrecordid custom object record id
  * @param {Object} customObjectJSON JSON that describes the object you would like to store
  * @param {String} updateType (Optional) You can pass either 'replace' (it will fully replace the custom object with new provided json) or 'partialreplace' (it will perform an upsert type operation)
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will update your custom objects by providing the access_token and the objectrecordid.
  */
  controllersModule.updateCustomObjectController = function (token, objectrecordid, customObjectJSON, updateType, onSuccess, onError) {
    if (token) {
      var field = '';
      if (updateType) {
        field = '&updatetype=' + updateType;
      }
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/customobject/' + objectrecordid + '?apiKey=' + module.options.apiKey + '&access_token=' + token + '&objectname=' + module.options.customObjectName + field, customObjectJSON, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'updateCustomObject');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function deleteCustomObjectController
  * @param {String} token <access_token>
  * @param {String} objectrecordid custom object record id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will update your custom objects by providing the access_token and the objectrecordid.
  */
  controllersModule.deleteCustomObjectController = function (token, objectrecordid, onSuccess, onError) {
    handleCustomObjectById('delete', token, objectrecordid, onSuccess, onError);
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updateData
  * @param {Object} responseObject service json object which hold user profile object
  * @param {String} container html dom element id
  * @param {Object} data object that represents the fields and their values of the profile that you are updating
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Array} schema schema for the fields being provided. You can leave schema as an empty array unless you're updating complex arrays
  * @param {String} actionName action name user wants Ex, 'updateData'
  * @param {String} tempToken temporary token
  * @description This function can be use for user account updates.
  */
  controllersModule.updateData = function (responseObject, container, data, onSuccess, onError, _classPrefix, schema, actionName, tempToken) {
    var userProfile = responseObject.Profile || responseObject.Data;
    var profileData = data;
    if (!module.lrApiFramework) {
      profileData = commonFns.mapRegistrationSchema(schema, data, userProfile);
    }
    if (module.options.isPINAuthentication && !(module.options.PINConfiguration.AskOnRegistration)) {
      profileData = commonFns.sanitizePinData(profileData);
    }
    var accessToken = responseObject.access_token;
    tempToken = tempToken || module.setHostedToken;
    actionName = actionName || 'updateData';
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
    if (Object.keys(profileData).length > 0) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + accessToken + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.verificationEmailTemplate, profileData, function (regResponse) {
        if (regResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(regResponse));
        } else {
          var handleUpdateDataResponse = function (callback) {
            var isemail;
            var isphone;
            isemail = profileData['emailid'] || profileData['email'];
            isphone = profileData['phone'] || profileData['phoneid'];
            var phoneSchema = module.util.findInSchema(schema, 'name', 'phoneid');
            var phonereq = (phoneSchema && (phoneSchema.rules.indexOf('required') !== -1));
            var emailSchema = module.util.findInSchema(schema, 'name', 'emailid');
            var emailreq = (emailSchema && (emailSchema.rules.indexOf('required') !== -1));
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedUidName, userProfile.Uid);
            var queryString = module.util.parseQueryString(window.location.search.replace('?', ''));
            if ((((isphone === undefined || isphone) && userProfile.PhoneIdVerified && isemail === undefined) || ((isemail === undefined || isemail) && userProfile.EmailVerified && isphone === undefined)) || (((isphone && !phonereq) || isphone === undefined) && (module.options.disabledEmailVerification || module.options.optionalEmailVerification))) {
              if (isemail && !userProfile.EmailVerified && queryString.return_url && queryString.return_url.toLowerCase().indexOf('/saml/') !== -1) {
                onError([
                  commonFns.setMappedMessage(defaultMessages['emailNotVerified'])
                ]);
              } else {
                delete regResponse.IsPosted;
                regResponse.access_token = accessToken;
                // onSuccess(regResponse, util.parseQueryString(data))
                callback();
                if (LoginRadiusDefaults.isSSOInitFired) {
                  commonFns.setToken(accessToken);
                }
              }
            } else if (isphone && userProfile && !userProfile.PhoneIdVerified) {
              // var phoneObj = {
              //   'phone': module.util.getQueryParameterByName('phoneid', data)
              // };
              var _onSuccess = function () {
                // eslint-disable-next-line no-undef
                var fns = new SetLoginRadiusCommonFunctions(module);
                fns.verifyOTP(data, container, onSuccess, onError, _classPrefix);
                fns.resendOTP(data + '&noPhoneVerified=false', container, onSuccess, onError, _classPrefix);
                if (module.options.isVoiceOtp) {
                  fns.resendOTP(data + '&noPhoneVerified=false', container, onSuccess, onError, _classPrefix, true);
                }
              };
              _onSuccess();
              // var recaptchaid = _classPrefix + LoginRadiusDefaults.idPrefix + "recaptcha_widget_verifyotp";
              // controllersModule.resendOTPController(phoneObj, _onSuccess, onError, recaptchaid, container, _classPrefix);
            } else if (isemail && emailreq && !userProfile.EmailVerified && !(module.options.disabledEmailVerification || module.options.optionalEmailVerification)) {
              onError([
                commonFns.setMappedMessage(defaultMessages['emailNotVerified'])
              ]);
            } else {
              // onSuccess(regResponse);
              callback();
            }
          };
          if (tempToken) {
            handleUpdateDataResponse(function () {
              responseObject.Data = responseObject.Profile;
              delete responseObject.Profile;
              if (regResponse.Data) {
                responseObject.Data = regResponse.Data;
              }
              commonFns.loginHandleToken(responseObject, data, onSuccess, onError);
            });
          } else {
            handleUpdateDataResponse(function () {
              if (regResponse.Data) {
                regResponse.Profile = regResponse.Data;
                delete regResponse.Data;
                delete regResponse.IsPosted;
              }
              if (regResponse.access_token) {
                commonFns.loginHandleToken(regResponse, data, onSuccess, onError);
              } else {
                onSuccess(regResponse, module.util.parseQueryString(data));
              }
            });
          }
        }
      }, actionName);
    } else {
      commonFns.loginHandleToken(responseObject, data, onSuccess, onError);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function oneTouchLoginController
  * @param {String} data json string which hold email and name info ex. "name=XXX&email=XXXXX.l%40mailazy.com"
  * @param {String} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Boolean} useUpdatedAPI to determine use updated API or not
  * @description This function will handle user account login via one touch login process.
  */
  controllersModule.oneTouchLoginController = function (data, container, onSuccess, onError, _classPrefix, useUpdatedAPI, verifyOTPApi, resendOTPApi) {
    var formattedData = module.util.checkPhoneOrEmailLogin(data);

    var parsedData = formattedData && typeof formattedData !== 'string' ? formattedData : module.util.parseQueryString(formattedData);
    if (!useUpdatedAPI) {
      module.log('Captcha should be enabled for one touch login');
    }
    var refield = function (userProfile, loginResponse, accessToken, _formattedData, _onSuccess, _onError) {
      commonFns.createForm(module.registrationFormSchema, 'loginRequiredFieldsUpdate', container, function (_formDataRes) {
        var responseObject = {};
        responseObject.Profile = userProfile;
        responseObject.access_token = accessToken;
        controllersModule.updateData(responseObject, container, _formDataRes, _onSuccess, _onError, _classPrefix, module.registrationFormSchema, 'login', true);
      }, function (errors) {
        _onError(commonFns.setMappedMessage(errors));
      });
    };
    var payloadData = '';
    if (parsedData.phone) {
      var oneTouchPhoneURL = LoginRadiusDefaults.apiDomain + '/auth/onetouchlogin/phone?apikey=' + module.options.apiKey + '&smstemplate=' + module.options.smsTemplateOneTouchLogin;
      payloadData = Object.assign({}, parsedData);
      module.util.ajaxCall('POST', oneTouchPhoneURL, payloadData, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response, data);
          commonFns.verifyOTP = verifyOTPApi || commonFns.verifyOTP;
          commonFns.resendOTP = resendOTPApi || commonFns.resendOTP;

          commonFns.verifyOTP(formattedData + '&onetouchloginflag=true', container, onSuccess, onError, _classPrefix, '', refield);
          commonFns.resendOTP(formattedData + '&onetouchloginflag=true', container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp, '', refield);
        }
      }, 'oneTouchLogin');
    } else {
      // eslint-disable-next-line no-magic-numbers
      var clientGuid = module.util.randomString(16);
      var emailTemplate = module.options.noRegistrationEmailTemplate || module.options.onetouchLoginEmailTemplate;
      var oneTouchEmailURL = LoginRadiusDefaults.apiDomain + '/auth/onetouchlogin/email?apikey=' + module.options.apiKey + '&onetouchloginemailtemplate=' + emailTemplate + '&welcomeemailtemplate=' + module.options.welcomeEmailTemplate + '&redirectUrl=' + module.options.onetouchLoginRedirectUrl;
      payloadData = Object.assign({}, parsedData, {
        'clientGuid': clientGuid
      });
      module.util.ajaxCall('POST', oneTouchEmailURL, payloadData, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          if (response.IsPosted) {
            onSuccess(response);
            var handleOneTouchLoginSuccess = function (_resp) {
              if (module.options.askRequiredFieldsOnPasswordLessLogin) {
                LoginRadiusDefaults.autoFilledFieldforPasswordLesLogin = true;
                controllersModule.handleFeatures(_resp, formattedData, refield, '', onSuccess, onError);
              } else {
                commonFns.loginHandleToken(_resp, '', onSuccess, onError, '', true);
              }
            };
            if (commonFns.showOTPTemplateForm('NoRegistrationPasswordlessLogin')) {
              var _onSuccess = function () {
                commonFns.pingForSmartLogin(clientGuid, handleOneTouchLoginSuccess, onError);
              };
              parsedData.onetouchlogin = true;
              commonFns.otpEmailVerification(container, _onSuccess, onError, _classPrefix, parsedData);
            } else {
              commonFns.pingForSmartLogin(clientGuid, handleOneTouchLoginSuccess, onError);
            }
          }
        }
      }, 'oneTouchLogin');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function smartLoginController
  * @param {String} data object that contains the 'email' parameter Ex. {email:"xyz@gmail.com"}
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will implement Smart Login.
  */
  controllersModule.smartLoginController = function (data, onSuccess, onError) {
    // eslint-disable-next-line no-magic-numbers
    var clientGuid = module.util.randomString(16);
    var redirectUrl = module.options.autoLoginRedirectUrl || module.options.smartLoginRedirectUrl;
    var emailTemplate = module.options.autoLoginEmailTemplate || module.options.smartLoginEmailTemplate;
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/login/smartlogin?apikey=' + module.options.apiKey + '&' + data + '&clientGuid=' + clientGuid + '&smartloginemailtemplate=' + emailTemplate + '&welcomeemailtemplate=' + module.options.welcomeEmailTemplate + '&redirectUrl=' + redirectUrl, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        if (response.IsPosted) {
          onSuccess(response);

          var handleSmartLoginSuccess = function (_resp) {
            commonFns.loginHandleToken(_resp, '', onSuccess, onError);
          };
          commonFns.pingForSmartLogin(clientGuid, handleSmartLoginSuccess, onError);
        }
      }
    }, 'smartLogin');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function verifyInstantOTP
  * @param {String} otpData one time password string
  * @param {Object} phoneData json object that contains the 'email' 'phone', 'username'
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} recaptchaid recaptcha html dom container id
  * @param {String} container html dom element id
  * @param {String} _classPrefix css class prefix string
  * @description This function will verify phone otp and login user account after successful verification of otp.
  */
  controllersModule.verifyInstantOTP = function (otpData, phoneData, onSuccess, onError, recaptchaid, container, _classPrefix) {
    var params = 'phone=' + phoneData.phone + '&' + otpData;
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/passwordlesslogin/otp/verify?apiKey=' + module.options.apiKey + '&smsTemplate=' + module.options.smsTemplateWelcome, params, function (loginResponse) {
      if (loginResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(loginResponse));
      } else {
        commonFns.loginHandleToken(loginResponse, otpData, onSuccess, onError);
      }
    }, 'login##otp');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function socialLoginReceiveToken
  * @param {String} tok <access_token>
  * @param {Object} container html dom element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} onMissingField callback function when the automated process of getting the social profile data was not able to fill out all of the required fields
  * @param {Array} regSchema array of user reg. fields objects
  * @param {String} _classPrefix css class prefix string
  * @description This function will Implement socail login process with access token and prompt missing fields if its there.
  */
  controllersModule.socialLoginReceiveToken = function (tok, container, onSuccess, onError, _classPrefix, onMissingField, regSchema, _profile) {
    module.currentLRContainer = container;
    module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
    module.storage.setBrowserStorage(LoginRadiusDefaults.storedTokenName, tok);
    var socialProfileHandler = function (_regSchema) {
      var registerSchema = JSON.parse(JSON.stringify(_regSchema));
      // Added to handle if profile is exists.
      var onSuccessHandler = function (userProfile) {
        module.LRCheckLogin = true;
        if (!userProfile.IsDeleted) {
          var responseObject = {};
          responseObject.Profile = userProfile;
          responseObject.access_token = tok;
          commonFns.setPasswordRule(module.util.findInSchema(registerSchema, 'name', 'password'));
          commonFns.setPasswordRule(module.util.findInSchema(registerSchema, 'name', 'confirmpassword'));
          var autoFilledField = false;
          if (module.options.autoFilledFieldForSocial) {
            autoFilledField = true;
            module.$hooks.register('beforeFormRender', function (name, schema) {
              if (name === 'socialRegistration') {
                var emailfield = module.util.findInSchema(schema, 'name', 'emailid');
                if (emailfield && emailfield.value) {
                  emailfield.disabled = true;
                }
                var phonefield = module.util.findInSchema(schema, 'name', 'phoneid');
                if (phonefield && phonefield.value) {
                  phonefield.disabled = true;
                }
              }
            });
          }
          module.registrationFormSchema = commonFns.mapSchema(registerSchema, userProfile, autoFilledField);
          module.$hooks.call('registrationSchemaFilter', registerSchema, userProfile);
          var safariLogin = module.storage.getBrowserStorage('LRTraditionalLogin');
          module.storage.removeBrowserStorage('LRTraditionalLogin');
          if (module.registrationFormSchema.length > 0 && !safariLogin) {
            if (container) {
              module.$hooks.call('socialLoginFormRender');
              commonFns.createForm(module.registrationFormSchema, 'socialRegistration', container, function (data) {
                controllersModule.updateData(responseObject, container, data, onSuccess, onError, _classPrefix, module.registrationFormSchema, 'socialLogin');
              }, function (errors) {
                onError(errors);
              }, _classPrefix);
            } else {
              onMissingField(tok, module.registrationFormSchema, userProfile);
            }
          } else {
            var phoneSchema = module.util.findInSchema(_regSchema, 'name', 'phoneid');
            var phonereq = (phoneSchema && (phoneSchema.rules.indexOf('required') !== -1));
            var isphone = phonereq ? (!!userProfile.PhoneIdVerified) : userProfile.PhoneIdVerified;
            var emailSchema = module.util.findInSchema(_regSchema, 'name', 'emailid');
            var emailreq = (emailSchema && (emailSchema.rules.indexOf('required') !== -1));
            var isemail = emailreq ? (!!userProfile.EmailVerified) : userProfile.EmailVerified;
            if (((isphone || !phonereq) && (isemail || !emailreq)) || ((isphone || !phonereq) && (module.options.disabledEmailVerification || module.options.optionalEmailVerification))) {
              module.storage.setBrowserStorage(LoginRadiusDefaults.storedUidName, userProfile.Uid);
              if (LoginRadiusDefaults.isSSOInitFired) {
                commonFns.setToken(tok);
              }
              // onSuccess(responseObject);
              commonFns.loginHandleToken(responseObject, '', onSuccess, onError);
            } else {
              // eslint-disable-next-line no-eq-null
              if (userProfile.Email != null && !userProfile.EmailVerified) {
                onError([
                  commonFns.setMappedMessage(defaultMessages['emailNotVerified'])
                ]);
              } else {
                var phoneObj = {
                  'phone': userProfile.PhoneId
                };
                onError([
                  commonFns.setMappedMessage(defaultMessages['phoneNotVerified'])
                ], phoneObj);
                var _onSuccess = function () {
                  module.socialLoginFlag = true;
                  commonFns.verifyOTP('phone=' + userProfile.PhoneId, container, onSuccess, onError, _classPrefix);
                  commonFns.resendOTP('phone=' + userProfile.PhoneId + '&noPhoneVerified=false', container, onSuccess, onError, _classPrefix, module.options.isVoiceOtp);
                };
                controllersModule.resendOTPController(phoneObj, _onSuccess, onError, _classPrefix);
              }
            }
          }
        } else {
          onError([
            commonFns.setMappedMessage(defaultMessages['blockedUser'])
          ]);
        }
      };

      if (!_profile) {
        module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + tok + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.verificationEmailTemplate + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate, '', function (userProfile) {
          if (userProfile.ErrorCode) {
            module.storage.removeBrowserStorage(LoginRadiusDefaults.storedOrganization);
            module.storage.removeBrowserStorage(LoginRadiusDefaults.storedTokenName);
            onError(commonFns.loginRadiusErrorTojsError(userProfile));
            // eslint-disable-next-line no-magic-numbers
            if (module.options.sendVerificationEmailForUnverifiedSocialLogin && userProfile.ErrorCode === 1026) {
              var sendVerficationEmailBtnFn = () => {
                controllersModule.sendVerificaionEmailForSocialController(tok, container, onSuccess, onError);
              };
              var sendVerficationEmailBtn = module.util.getButtonAttribute('sendverificationemail', _classPrefix, sendVerficationEmailBtnFn);
              if (sendVerficationEmailBtn.childNodes && sendVerficationEmailBtn.childNodes[0].id) {
                if (!document.getElementById(sendVerficationEmailBtn.childNodes[0].id)) {
                  module.util.addHTMLContent(container, sendVerficationEmailBtn, false);
                  module.$hooks.call('socialLoginFormRender');
                }
              }
            }
          } else {
            onSuccessHandler(userProfile);
          }
        }, 'socialLogin');
      } else {
        onSuccessHandler(_profile);
      }
    };
    regSchema = (regSchema && regSchema.length > 0) ? regSchema : module.options.RegistrationFormSchema;
    socialProfileHandler(regSchema);
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function accountLinkingReceiveToken
  * @param {String} tok <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will provide option to link the social accounts to user account.
  */
  controllersModule.accountLinkingReceiveToken = function (tok, onSuccess, onError) {
    if (!module.options.noCallbackForSocialLogin) {
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/socialidentity?apiKey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName), 'candidatetoken=' + tok, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'linkAccount');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function validateToken
  * @param {String} tok <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will allows you to validate an access_token.
  */
  controllersModule.validateToken = function (token, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/access_token/Validate?apikey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'validateToken');
    } else {
      onError([
        // eslint-disable-next-line no-undef
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function invalidateToken
  * @param {String} tok <access_token>
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will allows you to invalidate a token.
  */
  controllersModule.invalidateToken = function (token, onSuccess, onError) {
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/access_token/InValidate?apikey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'invalidateToken');
    } else {
      onError([
        // eslint-disable-next-line no-undef
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updatePrivacyPolicy
  * @param {String} accessToken <access_token>
  * @param {Object} result PrivacyPolicy service response object
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} flag will determine how set data varaible
  * @param {String} container html dom element if
  * @param {String} _classPrefix css class prefix string
  * @description This function will update PrivacyPolicy and login touser account.
  */
  controllersModule.updatePrivacyPolicy = function (accessToken, result, onSuccess, onError, flag, container, _classPrefix) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/privacypolicy/accept?apikey=' + module.options.apiKey + '&access_token=' + accessToken, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        var data;
        if (flag) {
          data = response;
        } else {
          data = result.Data || {};
          data.access_token = accessToken;
          data.Profile = response;
          data.Profile = Object.assign({}, data.Profile, {
            'IsLatestPrivacyPolicy': true
          });
        }
        // onSuccess(data);
        if (data.Profile) {
          if ((data.Profile.RegistrationProvider).toLowerCase() === 'email') {
            commonFns.loginHandleToken(data, '', onSuccess, onError);
          } else {
            controllersModule.socialLoginReceiveToken(accessToken, container, onSuccess, onError, _classPrefix);
          }
        }
      }
    }, 'updatePrivacyPolicy');
  };

  /**
 * @memberof LoginRadiusControllers#
 * @function configurePINController
 * @param {String} pinAuthToken pinAuthToken obbtained from core APIs if PIN is not configured adn mandatory to setup at login
 * @param {String} data Form data submitted by user
 * @param {Function} onSuccess success callback function
 * @param {Function} onError error callback function
 * @param {String} _classPrefix css class prefix string
 * @description This function will configure the PIN with pin auth token.
 */
  controllersModule.configurePINController = function (pinAuthToken, data, onSuccess, onError, container, _classPrefix) {
    module.util.ajaxCall('POST', LoginRadiusDefaults.apiDomain + '/auth/pin/set/pinauthtoken?apikey=' + module.options.apiKey + '&pinauthtoken=' + pinAuthToken, data, function (response) {
      if (response && response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        if (response && response.Profile) {
          if ((response.Profile.RegistrationProvider).toLowerCase() === 'email') {
            commonFns.loginHandleToken(response, '', onSuccess, onError);
          } else {
            controllersModule.socialLoginReceiveToken(response.access_token, container, onSuccess, onError, _classPrefix);
          }
        }
      }
    }, 'pinSetup');
  };
  /**
* @memberof LoginRadiusControllers#
* @function pinReauthController
* @param {String} data Form data submitted by user
* @param {Function} onSuccess success callback function
* @param {Function} onError error callback function
* @param {String} _classPrefix css class prefix string
* @description This function will verify the user pin.
*/
  controllersModule.pinReauthController = function (data, onSuccess, onError, _classPrefix) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/reauth/pin?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'pinreauthentication');
    }
  };

  /**
* @memberof LoginRadiusControllers#
* @function customEventConsentController
* @param {String} data Form data submitted by user
* @param {Function} onSuccess success callback function
* @param {Function} onError error callback function
* @param {String} _classPrefix css class prefix string
* @description This function will provide a way to end user to submit a consent form for particular event type.
*/
  controllersModule.customEventConsentController = function (data, onSuccess, onError, _classPrefix) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token) {
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/consent/profile?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'customeventconsent');
    }
  };

  /**
* @memberof LoginRadiusControllers#
* @function submitConsentController
* @param {String} data Form data submitted by user
* @param {Function} onSuccess success callback function
* @param {Function} onError error callback function
* @param {String} _classPrefix css class prefix string
* @description This function will verify the user pin.
*/
  controllersModule.submitConsentController = function (consentToken, data, onSuccess, onError, container, _classPrefix, action) {
    if (consentToken) {
      action = action || 'submitconsent';
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/consent/?apiKey=' + module.options.apiKey + '&consenttoken=' + consentToken, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          var requiredField = function (userProfile, loginResponse, accessToken, formData, _onSuccess, _onError) {
            commonFns.createForm(module.registrationFormSchema, 'loginRequiredFieldsUpdate', container, function (_formData) {
              var responseObject = {};
              responseObject.Profile = userProfile;
              responseObject.access_token = accessToken;
              controllersModule.updateData(responseObject, container, _formData, _onSuccess, _onError, _classPrefix, module.registrationFormSchema, 'login', true);
            }, function (errors) {
              _onError(commonFns.setMappedMessage(errors));
            });
          };
          if (response && response.Profile) {
            if ((response.Profile.RegistrationProvider).toLowerCase() === 'email') {
              controllersModule.handleFeatures(response, '', requiredField, '', onSuccess, onError, _classPrefix);
            } else {
              controllersModule.socialLoginReceiveToken(response.access_token, container, onSuccess, onError, _classPrefix, '', '', response.Profile);
            }
          }
        }
      }, action);
    }
  };

  /**
* @memberof LoginRadiusControllers#
* @function verifyConsentController
* @param {Object} data JSON Data submitted by user
* @param {Function} onSuccess success callback function
* @param {Function} onError error callback function
* @description This function will check if consent is submitted for a particular event or not.
*/
  controllersModule.verifyConsentController = function (data, onSuccess, onError) {
    var isCustom = data.isCustom ? data.isCustom : false;
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/consent/verify?apiKey=' + module.options.apiKey + '&access_token=' + token + '&event=' + data.event + '&isCustom=' + isCustom, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'verifyconsent');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function cosentLogsController
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function be used to fetch cosent logs.
  */
  controllersModule.consentLogsController = function (onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/consent/logs?apiKey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'cosentlogs');
    }
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function updateConsentController
  * @param {Object} data The array of objects conatining consents which needs to be updated
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function be used to fetch cosent logs.
  */
  controllersModule.updateConsentController = function (data, onSuccess, onError) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token) {
      module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/consent/?apiKey=' + module.options.apiKey + '&access_token=' + token, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          onSuccess(response);
        }
      }, 'updateconsent');
    }
  };

  controllersModule.sendMFAEmailOTPController = function (data, onSuccess, onError, container, _classPrefix, resend) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (token && !module.LRCheckLogin) {
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/2fa/otp/email?apiKey=' + module.options.apiKey + '&access_token=' + token + '&EmailId=' + data.EmailId + '&EmailTemplate2FA=' + module.options.EmailTemplate2FA, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          if (!resend) {
            data['mfaEmailToken'] = true;
            commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix);
          }
          onSuccess(response, data);
        }
      }, 'sendMFAEmailOTP');
    } else if (twoFactorToken) {
      module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/otp/email?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + twoFactorToken + '&EmailTemplate2FA=' + module.options.EmailTemplate2FA, data, function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          if (!resend) {
            data['mfaEmailToken'] = true;
            commonFns.verifyOTP(data, container, onSuccess, onError, _classPrefix);
          }
          onSuccess(response, data);
        }
      }, 'sendMFAEmailOTP');
    } else {
      onError([
        commonFns.setMappedMessage(defaultMessages['twofaTokenValid'])
      ]);
    }
  };
  controllersModule.submitMFASecurityQuestionsController = function (data, onSuccess, onError, passwordExpiry, requiredField) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    // Make common fn
    var securityQuestionAnswerObject = module.util.parseQueryString(data);
    var securityQuestionAnswerObjectvalues = [];

    for (var i = 0; i < module.options.securityQuestionsCount; i++) {
      securityQuestionAnswerObjectvalues.push({
        'QuestionId': securityQuestionAnswerObject['securityQuestion' + i],
        'Answer': securityQuestionAnswerObject['securityAnswer' + i]
      });
    }

    var securityQuestionObject = {
      'SecurityQuestionAnswer': securityQuestionAnswerObjectvalues
    };

    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/securityquestionanswer?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + twoFactorToken, securityQuestionObject, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.LRCheck2FA = false;
        controllersModule.handleFeatures(response, data, requiredField, passwordExpiry, onSuccess, onError);
      }
    }, 'submitMFASecurityQuestionsController');
  };
  controllersModule.verifyMFASecurityQuestionsController = function (data, onSuccess, onError, passwordExpiry, requiredField) {
    var twoFactorToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTwoFAToken);
    var securityQuestionAnswerObject = module.util.parseQueryString(data);
    var securityQuestionAnswerObjectvalues = [];
    for (var key in securityQuestionAnswerObject) {
      if (key !== 'setsecurityquestions') {
        securityQuestionAnswerObjectvalues.push({
          'QuestionId': key,
          'Answer': securityQuestionAnswerObject[key]
        });
      }
    }

    securityQuestionAnswerObject = {
      'SecurityQuestionAnswer': securityQuestionAnswerObjectvalues
    };
    var template = '';
    if (module.options.riskBasedAuthentication) {
      template += '&RbaOneclickEmailTemplate=' + module.options.rbaOneclickEmailTemplate + '&RbaOTPSmsTemplate=' + module.options.rbaOTPSmsTemplate + '&RbaCityEmailTemplate=' + module.options.rbaCityEmailTemplate + '&RbaCountryEmailTemplate=' + module.options.rbaCountryEmailTemplate + '&RbaBrowserEmailTemplate=' + module.options.rbaBrowserEmailTemplate + '&RbaIpEmailTemplate=' + module.options.rbaIpEmailTemplate + '&RbaDeviceEmailTemplate=' + module.options.rbaDeviceEmailTemplate + '&RbaCitySmsTemplate=' + module.options.rbaCitySmsTemplate + '&RbaCountrySmsTemplate=' + module.options.rbaCountrySmsTemplate;
      template += '&RbaBrowserSmsTemplate=' + module.options.rbaBrowserSmsTemplate + '&RbaIpSmsTemplate=' + module.options.rbaIpSmsTemplate + '&RbaDeviceSmsTemplate=' + module.options.rbaDeviceSmsTemplate;
    }
    module.util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/login/2fa/verification/securityquestionanswer?apiKey=' + module.options.apiKey + '&secondfactorauthenticationtoken=' + twoFactorToken + template, securityQuestionAnswerObject, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        module.LRCheck2FA = false;
        controllersModule.handleFeatures(response, data, requiredField, passwordExpiry, onSuccess, onError);
      }
    }, 'verifyMFASecurityQuestionsController');
  };
  controllersModule.verifyMFASecurityQuestionsByAccessTokenController = function (data, onSuccess, onError, haveSecurityQuestionOnProfile, mfaQuestions) {
    var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    var securityQuestionAnswerObject = {};
    if (data) {
      securityQuestionAnswerObject = module.util.parseQueryString(data);
      var securityQuestionAnswerObjectvalues = [];
      if (!mfaQuestions) {
        for (var i = 0; i < module.options.securityQuestionsCount; i++) {
          securityQuestionAnswerObjectvalues.push({
            'QuestionId': securityQuestionAnswerObject['securityQuestion' + i],
            'Answer': securityQuestionAnswerObject['securityAnswer' + i]
          });
        }
      } else {
        for (var key in securityQuestionAnswerObject) {
          securityQuestionAnswerObjectvalues.push({
            'QuestionId': key,
            'Answer': securityQuestionAnswerObject[key]
          });
        }
      }
      securityQuestionAnswerObject = {
        'SecurityQuestionAnswer': securityQuestionAnswerObjectvalues
      };
    }
    securityQuestionAnswerObject['ReplaceSecurityQuestionAnswer'] = !haveSecurityQuestionOnProfile;
    module.util.ajaxCall('put', LoginRadiusDefaults.apiDomain + '/auth/account/2fa/securityquestionanswer?apiKey=' + module.options.apiKey + '&access_token=' + token, securityQuestionAnswerObject, function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response, data);
      }
    }, 'verifyMFASecurityQuestionsController');
  };
  /**
 * @memberof LoginRadiusControllers#
 * @function emailVerificationController
 * @param {String} vtoken verification token string
 * @param {Function} onSuccess success callback function
 * @param {Function} onError error callback function
 * @param {String} container html dom element id
 * @param {String} _classPrefix css class prefix string
 * @param {Boolean} flag to determine which method used to call api (GET with URL or PUT with param)
 * @description This function will used to verify user account email by using verification token.
 */
  controllersModule.oneTouchLoginVerify = function (vtoken, onSuccess, onError) {
    var url = LoginRadiusDefaults.apiDomain + '/auth/email/smartlogin?apiKey=' + module.options.apiKey + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate;
    url += '&verificationtoken=' + vtoken;
    module.util.ajaxCall('get', url, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response);
      }
    }, 'oneTouchLoginVerify');
  };

  /**
  * @memberof LoginRadiusControllers#
  * @function oneTouchLoginEmailVerification
  * @param {String} vtoken verification token
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will Verify one touch login email by using verification token and login to account if verification successful.
  */
  controllersModule.oneTouchLoginEmailVerification = function (vtoken, onSuccess, onError, email) {
    if (vtoken) {
      var _email = email ? '&email=' + email : '';
      var route = email ? 'onetouchlogin' : 'smartlogin';
      module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/email/' + route + '?apiKey=' + module.options.apiKey + '&verificationtoken=' + vtoken + '&welcomeEmailTemplate=' + module.options.welcomeEmailTemplate + _email, '', function (response) {
        if (response.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(response));
        } else {
          if (email) {
            onSuccess(response);
          } else {
            commonFns.loginHandleToken(response, '', onSuccess, onError);
          }
        }
      }, 'smartlogin');
    }
  };

  /**
   * @memberof LoginRadiusControllers#
   * @function getInvitationDataController
   * @param {String} token invitation token
   * @param {Function} onSuccess success callback function
   * @param {Function} onError error callback function
   * @description This function will get invitation data by using invitation token.
   */
  controllersModule.getInvitationDataController = function (token, onSuccess, onError) {
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + `/auth/invitations/${token}?apiKey=` + module.options.apiKey, '', function (response) {
      if (response.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(response));
      } else {
        onSuccess(response);
      }
    }, 'getInvitationData');
  };

  controllersModule.sendVerificaionEmailForSocialController = function (tok, container, onSuccess, onError, flag) {
    var token = (flag === 'clientguid') ? '&clientguid=' + tok : '&access_token=' + tok;
    module.util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/email/sendverificationemail?apiKey=' + module.options.apiKey + token + '&verificationUrl=' + module.options.verificationUrl + '&emailTemplate=' + module.options.verificationEmailTemplate, '', function (emailVerificationResponse) {
      if (emailVerificationResponse.ErrorCode) {
        onError(commonFns.loginRadiusErrorTojsError(emailVerificationResponse));
      } else {
        LoginRadiusDefaults.isSSOInitFired = true;
        commonFns.logout(onSuccess(emailVerificationResponse));
        if (commonFns.showOTPTemplateForm('Registration') && container) {
          var uuid = emailVerificationResponse.UUID;
          commonFns.otpEmailVerification(container, onSuccess, onError, '', { uuid: uuid });
        }
      }
    }, 'sendVerificationEmail');
  };
}

/**
* @param {Object} lrOptions lr common options object
* @description Set global LoginRadiusV2.
* @constructor
*/
var LoginRadiusV2 = function (lrOptions) {
  this.global = window;
  //  var context = this;
  var module = this;
  // eslint-disable-next-line no-undef
  var commonFns = new SetLoginRadiusCommonFunctions(module);
  var controllers = new LoginRadiusControllers(module, commonFns);

  var defaultButtonsName = LoginRadiusDefaults.buttonNames;
  var defaultMessages = LoginRadiusDefaults.messages;

  var _uuidFormat = LoginRadiusDefaults._uuidFormat;

  // eslint-disable-next-line no-undef
  var lrToken = hash.get('lr-token');

  try {
    if (lrToken && window.opener && window.opener.html5passToken) {
      window.opener.html5passToken(lrToken);
      document.write("<style type='text/css'>body { display: none !important; } </style>");
      // eslint-disable-next-line no-undef
      hash.remove('lr-token');
      window.close();
    }
  } catch (err) {
    // continue regardless of error
  }
  var utilities = new LRNameSpace.Utilities();
  // eslint-disable-next-line no-undef
  module.util = new LoginRadiusUtility(module, lrOptions);
  module.storage = new LRNameSpace.Storage(module, LoginRadiusDefaults);
  // added for customer usecase fallback
  var util = module.util = Object.assign(utilities, module.util, module.storage);
  /**
  * @memberof LoginRadiusV2#
  * @function trackEvent
  * @param {String} event [optional, default is pageView] possible values -> pageView, click, hover, login, signup, logout, share and any other custom event you want
  * @param {String} provider [optional, default is null] user's login provider
  * @param {Object} customFields [optional, default is null] this will object, like { "cf_orderid" : "534552", "cf_productId" :"412412412" }
  * @description Can use custom events by using this function.
  */
  this.trackEvent = function () {
    if (module.options.debugMode) {
      // eslint-disable-next-line no-console
      console.warn('Anonymous login feature has been deprecated');
    }
  };

  /**
  * @memberof LoginRadiusUtility#
  * @function unLinkAccount
  * @param {String} provider user's login provider
  * @param {String} providerId user's login provider id
  * @param {Function} unlinkOnSuccess success callback function
  * @param {Function} unlinkOnError error callback function
  * @description This function will unlink social account.
  */
  util.unLinkAccount = function (provider, providerId, unlinkOnSuccess, unlinkOnError) {
    unlinkOnSuccess = unlinkOnSuccess || function () { /* do nothing. */ };
    unlinkOnError = unlinkOnError || function () { /* do nothing. */ };
    if (provider && providerId) {
      var data = {
        'provider': provider,
        'providerid': providerId
      };
      var tok = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
      if (!tok) {
        unlinkOnError([
          commonFns.setMappedMessage(defaultMessages['tokenValid'])
        ]);
      } else {
        util.ajaxCall('delete', LoginRadiusDefaults.apiDomain + '/auth/socialIdentity?apiKey=' + module.options.apiKey + '&access_token=' + tok, data, function (response) {
          if (response.ErrorCode) {
            unlinkOnError(commonFns.loginRadiusErrorTojsError(response));
          } else {
            unlinkOnSuccess(response, data);
          }
        }, 'unLinkAccount');
      }
    }
  };

  // eslint-disable-next-line no-undef
  LoginRadiusHooksModel(module);
  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function addRememberMeSchema
  * @param {Array} Schema array of schema field objects
  * @return {Array} Schema array of schema field objects
  * @description This function will add remember me on user account Schema.
  */
  function addRememberMeSchema (Schema) {
    if (module.options.stayLogin) {
      var addrememberMeCheck = true;
      for (var t = 0; t < Schema.length; t++) {
        if (Schema[t].name === 'stayLogin') {
          addrememberMeCheck = false;
        }
      }
      if (addrememberMeCheck) {
        var rememberMeObj = {
          type: 'multi',
          name: 'stayLogin',
          display: 'Remember me',
          rules: null,
          permission: 'w'
        };

        Schema.push(rememberMeObj);
      }
    }
    return Schema;
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function passwordlessLogin
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will implement passwordless login process.
  */
  function passwordlessLogin (onSuccess, onError, _classPrefix) {
    var vtoken = util.getHashParam('vtoken');
    var vtype = util.getHashParam('vtype');
    if ((vtype === 'oneclicksignin' || vtype === 'passwordlesslogin') && !module.passwordlessLoginFlag) {
      module.passwordlessLoginFlag = true;
      commonFns.passwordlessLoginVerification(vtoken, onSuccess, onError, _classPrefix);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function acceptPrivacyPolicy
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will prompt user to accept privacy policy.
  */
  function acceptPrivacyPolicy (container, onSuccess, onError, _classPrefix) {
    if (module.options.privacyPolicyConfiguration.IsEnabled) {
      var tok = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
      if (!tok) {
        onError([
          commonFns.setMappedMessage(defaultMessages['tokenValid'])
        ]);
      } else {
        var privacySchema = module.privacyPolicySchema.slice();
        privacySchema[0].rules = module.options.privacyPolicyConfiguration.Mode === 'Strict' ? 'required' : '';
        commonFns.createForm(privacySchema, 'privacyPolicyUpdate', container, function (data) {
          controllers.updatePrivacyPolicy(tok, '', onSuccess, onError, true, container, _classPrefix);
        }, function (errors) {
          onError(commonFns.setMappedMessage(errors));
        });
      }
    }
  }
  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function login
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize user login form.
  */
  function login (container, onSuccess, onError, _classPrefix) {
    var vtoken = util.getHashParam('vtoken');
    var vtype = util.getHashParam('vtype');
    var loginSchema;
    var sessionToken = module.getSessionToken();

    /** Duo Validation */
    try {
      const duoCode = util.getQueryParameterByName('duo_code');
      let duoState = util.getQueryParameterByName('duo_state');
      if (!duoState) {
        duoState = util.getQueryParameterByName('state');
      }
      if (duoCode && duoState && !module.duoLoginFlag) {
        module.duoLoginFlag = true;
        controllers.duoVerifyController({ Code: duoCode, State: encodeURIComponent(duoState) }, onSuccess, onError, container, _classPrefix);
      }
    } catch (err) {
    // continue regardless of error
    }
    var _requiredField = function (userProfile, loginResponse, accessToken, data, _onSuccess, _onError) {
      commonFns.createForm(module.registrationFormSchema, 'loginRequiredFieldsUpdate', container, function (_resData) {
        var responseObject = {};
        responseObject.Profile = userProfile;
        responseObject.access_token = accessToken;
        controllers.updateData(responseObject, container, _resData, _onSuccess, _onError, _classPrefix, module.registrationFormSchema, 'login', true);
      }, function (errors) {
        _onError(commonFns.setMappedMessage(errors));
      });
    };
    var renderLoginForm = function (schema, actionName) {
      commonFns.createForm(schema, actionName, container, function (loginData) {
        module.LRCheckLogin = true;
        if (window['lrpasswordlesslogin']) {
          commonFns.sendInstantSignInLink(loginData, (sdata, payloadData) => {
            if (commonFns.showOTPTemplateForm('OneClickSignin')) {
              commonFns.otpEmailVerification(container, onSuccess, onError, _classPrefix, payloadData);
            }
            onSuccess(sdata);
          }, onError, container, _classPrefix);
        } else if (window['lrpasswordlessloginotp']) {
          commonFns.sendInstantSignInOtp(loginData, onSuccess, onError, container, _classPrefix);
        } else {
          var _passwordExpiry = function (userProfile, loginResponse) {
            // this event fires only when periodic password reset enabled
            commonFns.createForm(module.changePasswordFormSchema, 'changepassword', container, function (resetData) {
              controllers.periodicalPasswordRestController(resetData, onSuccess, onError, userProfile, loginResponse, loginData);
            }, function (errors) {
              onError(errors);
            });
          };
          /* if (window['lrpasskeyAutofill']) {
            module.options.verificationEmailTemplate = module.options.emailTemplate || module.options.verificationEmailTemplate;
            const template = 'emailTemplate=' + module.options.verificationEmailTemplate + '&verificationUrl=' + module.options.verificationUrl;
            controllers.passkeyFinishController(loginData, template, { autofill: true }, container, onSuccess, onError, null, _requiredField, _classPrefix);
          } else  */
          if (window['lrpasskeylogin']) {
            controllers.passkeyLoginController(loginData, container, onSuccess, onError, _passwordExpiry, _requiredField, _classPrefix);
          } else if (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication) {
            controllers.login2FAController(loginData, container, onSuccess, onError, _classPrefix, _passwordExpiry, _requiredField);
          } else if (actionName === 'pinLogin') {
            controllers.loginPINController(loginData, container, onSuccess, onError, _classPrefix, _passwordExpiry, _requiredField, sessionToken);
          } else {
            controllers.loginController(loginData, container, onSuccess, onError, _passwordExpiry, _requiredField, _classPrefix);
          }
        }
      }, function (errors) {
        onError(commonFns.setMappedMessage(errors));
      }, _classPrefix);
    };
    module.currentLRContainer = container;
    if ((vtype === 'oneclicksignin' || vtype === 'passwordlesslogin') && !module.passwordlessLoginFlag) {
      module.passwordlessLoginFlag = true;
      commonFns.passwordlessLoginVerification(vtoken, onSuccess, onError, _classPrefix);
    }
    loginSchema = module.loginFormSchema;
    module.loginAction = true;
    getLoginEmailLabel(loginSchema);
    loginSchema = JSON.parse(JSON.stringify(addRememberMeSchema(loginSchema)));
    commonFns.setPasswordRule(loginSchema[1], module.loginAction);
    if (!module.passwordlessLoginFlag && !module.options.twoFactorAuthentication && !module.options.optionalTwoFactorAuthentication && module.options.isPINAuthentication && module.options.PINConfiguration && module.options.PINConfiguration.PINLogin && sessionToken) {
      var pinLoginSchema = module.pinLoginFormSchema.slice();
      var backBtnSchema = Object.assign({}, module.defaultBtnSchema, {
        name: 'backtologinform',
        display: LoginRadiusDefaults.buttonNames['pinloginbackbtn'],
        eventCallback: function (event) {
          renderLoginForm(loginSchema, 'login');
        }
      });
      pinLoginSchema.push(backBtnSchema);
      module.loginAction = true;
      loginSchema.rules = 'required';
      renderLoginForm(pinLoginSchema, 'pinLogin');
    } else {
      renderLoginForm(loginSchema, 'login');
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function showRegistrationForm
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Array} regSchema array of reg. form fields objects
  * @description This function will show user registration form.
  */
  function showRegistrationForm (container, onSuccess, onError, _classPrefix, regSchema) {
    module.$hooks.call('registrationSchemaFilter', regSchema);
    var recaptchaid = _classPrefix + LoginRadiusDefaults.idPrefix + 'recaptcha_widget_registration';
    if (!module.options.isConsentManagementEnabled) {
      util.captchaSchema(recaptchaid, regSchema);
    }
    if (module.options.privacyPolicyConfiguration.IsEnabled) {
      var privacySchema = module.privacyPolicySchema.slice();
      privacySchema[0].rules = module.options.privacyPolicyConfiguration.Mode === 'Strict' ? 'required' : '';
      regSchema.push(privacySchema[0]);
    }

    if (!(module.options.isPINAuthentication && module.options.PINConfiguration.AskOnRegistration)) {
      var updatedSchema = [];
      for (var i = 0; i < regSchema.length; i++) {
        if (regSchema[i].name !== 'pin' && regSchema[i].name !== 'confirmpin') {
          updatedSchema.push(regSchema[i]);
        }
      }
      regSchema = updatedSchema;
    } else {
      commonFns.setPINRule(util.findInSchema(regSchema, 'name', 'pin'));
      commonFns.setPINRule(util.findInSchema(regSchema, 'name', 'confirmpin'));
    }
    regSchema.push({
      type: 'html',
      name: 'termsandcondition',
      html: module.options.termsAndConditionHtml || ''
    });
    commonFns.setPasswordRule(util.findInSchema(regSchema, 'name', 'password'));
    commonFns.setPasswordRule(util.findInSchema(regSchema, 'name', 'confirmpassword'));
    module.registrationFormSchema = regSchema;
    if (module.options.isConsentManagementEnabled) {
      var callbackAction = function (consentObject) {
        var consentInterface = commonFns.createConsentInterface(consentObject['Register']);
        if (consentInterface !== '') {
          var consentSchema = {
            'html': consentInterface,
            'name': 'consent',
            'type': 'html'
          };
          regSchema.push(consentSchema);
        }
        util.captchaSchema(recaptchaid, regSchema);
        registrationFormRender(regSchema, container, onSuccess, onError, recaptchaid, _classPrefix, true);
        util.renderV2Recaptcha(recaptchaid, true);
      };
      module.getConsentConfiguration(callbackAction);
    } else {
      registrationFormRender(regSchema, container, onSuccess, onError, recaptchaid, _classPrefix, false);
      util.renderV2Recaptcha(recaptchaid, true);
    }
  }

  function passkeyRegitrationForm (passkeySchema, container, onSuccess, onError, _classPrefix, isConsentEnable) {
    commonFns.createForm(passkeySchema, 'passkeyregister', container, function (data) {
      const emailValue = module.util.getQueryParameterByName('email', data);
      if (window.lrpwdregister) {
        var emailfield = module.util.findInSchema(module.registrationFormSchema, 'name', 'emailid');
        if (emailfield && emailValue) {
          emailfield.value = emailValue.trim();
        }
        let regSchema = JSON.parse(JSON.stringify(module.registrationFormSchema));
        let codeSchema = [];

        for (var i = 0; i < regSchema.length; i++) {
          if (regSchema[i]) {
            if (module.options.showSplitForm && regSchema[i].DataSource && regSchema[i].DataSource !== null) {
              var recordObj = JSON.parse(JSON.stringify(regSchema[i]));
              var codeObj = JSON.parse(JSON.stringify(util.findInSchema(regSchema, 'name', 'cf_' + regSchema[i].DataSource + 'Code')));
              recordObj.name = 'recordid';
              codeObj.name = 'code';
              codeSchema.push(recordObj);
              codeSchema.push(codeObj);
            }
          }
        }
        if (codeSchema.length > 0 && module.options.showSplitForm) {
          commonFns.createForm(codeSchema, 'validatecode', container, function (data) {
            util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/registrationdata/validatecode?apiKey=' + module.options.apiKey, data, function (response) {
            // eslint-disable-next-line eqeqeq
              if (response.IsValid == true) {
                showRegistrationForm(container, onSuccess, onError, _classPrefix, regSchema);
              } else {
                onError(response);
              }
            }, 'registration');
          });
        } else {
          if (module.options.securityQuestionEnabled && module.options.SecurityQuestions) {
            commonFns.getSecurityQuestionSchema(regSchema, true);
          }
          showRegistrationForm(container, onSuccess, onError, _classPrefix, regSchema);
        }
      } else {
        var errors = [];
        if (isConsentEnable) {
          errors = commonFns.consentValidation(data, 'Register');
        }
        if (errors.length > 0) {
          onError(errors);
        } else {
          controllers.passkeyRegistrationController(data, container, onSuccess, onError, _classPrefix, passkeySchema);
        }
      }
    }, function (errors) {
      onError(errors);
    });
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function registrationFormRender
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @param {Boolean} isConsentEnable set flag for consent enable or disable
  * @description This function will initialize user registration form and show.
  */
  function registrationFormRender (regSchema, container, onSuccess, onError, recaptchaid, _classPrefix, isConsentEnable) {
    var invitation = module.util.getHashParam('invitation');
    var emailValue = module.util.getHashParam('email');
    if (invitation && module.options.isB2BEnabled) {
      var emailfield = module.util.findInSchema(regSchema, 'name', 'emailid');
      if (emailfield && emailValue) {
        emailfield.value = emailValue.trim();
        emailfield.disabled = true;
      }
    }

    commonFns.createForm(regSchema, 'registration', container, function (data) {
      var errors = [];
      if (isConsentEnable) {
        errors = commonFns.consentValidation(data, 'Register');
      }
      if (errors.length > 0) {
        onError(errors);
      } else {
        controllers.registrationController(data, container, function (loginResponse, formData) {
          if (window['hcaptcha'] && module.options.hCaptchaSiteKey && !module.options.invisibleRecaptcha) {
            window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
          } else if (window.grecaptcha && module.options.v2Recaptcha) {
            grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
          }
          onSuccess(loginResponse, formData);
        }, function (_err) {
          if (window['hcaptcha'] && module.options.hCaptchaSiteKey && !module.options.invisibleRecaptcha) {
            window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
          } else if (window.grecaptcha && module.options.v2Recaptcha) {
            grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
          }
          onError(_err);
        }, _classPrefix, regSchema);
      }
    }, function (_errors) {
      if (window['hcaptcha'] && module.options.hCaptchaSiteKey && !module.options.invisibleRecaptcha) {
        window.hcaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
      } else if (window.grecaptcha && module.options.v2Recaptcha) {
        grecaptcha.reset(window[recaptchaid + 'lr_recaptcha_widgets_idprefix']);
      }
      onError(_errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function registration
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize user registration form and show.
  */
  function registration (container, onSuccess, onError, _classPrefix) {
    var onRegistrationLoaded = function (_regSchema) {
      var regSchema = JSON.parse(JSON.stringify(_regSchema));
      var codeSchema = [];

      for (var i = 0; i < regSchema.length; i++) {
        if (regSchema[i]) {
          if (module.options.showSplitForm && regSchema[i].DataSource && regSchema[i].DataSource !== null) {
            var recordObj = JSON.parse(JSON.stringify(regSchema[i]));
            var codeObj = JSON.parse(JSON.stringify(util.findInSchema(regSchema, 'name', 'cf_' + regSchema[i].DataSource + 'Code')));
            recordObj.name = 'recordid';
            codeObj.name = 'code';
            codeSchema.push(recordObj);
            codeSchema.push(codeObj);
          }
        }
      }
      if (codeSchema.length > 0 && module.options.showSplitForm) {
        commonFns.createForm(codeSchema, 'validatecode', container, function (data) {
          util.ajaxCall('post', LoginRadiusDefaults.apiDomain + '/auth/registrationdata/validatecode?apiKey=' + module.options.apiKey, data, function (response) {
            // eslint-disable-next-line eqeqeq
            if (response.IsValid == true) {
              showRegistrationForm(container, onSuccess, onError, _classPrefix, regSchema);
            } else {
              onError(response);
            }
          }, 'registration');
        });
      } else {
        if (module.options.securityQuestionEnabled && module.options.SecurityQuestions) {
          commonFns.getSecurityQuestionSchema(regSchema, true);
        }
        showRegistrationForm(container, onSuccess, onError, _classPrefix, regSchema);
      }
    };
    var onPasskeysRegistration = function (_regSchema) {
      var regSchema = JSON.parse(JSON.stringify(_regSchema));
      var passKeySchema = [];
      var emailIndex = regSchema.findIndex((val) => {
        return val.name === 'emailid';
      });
      passKeySchema.push(regSchema[emailIndex]);
      if (module.options.privacyPolicyConfiguration.IsEnabled) {
        var privacySchema = module.privacyPolicySchema.slice();
        privacySchema[0].rules = module.options.privacyPolicyConfiguration.Mode === 'Strict' ? 'required' : '';
        passKeySchema.push(privacySchema[0]);
      }
      if (module.options.isConsentManagementEnabled) {
        var callbackAction = function (consentObject) {
          var consentInterface = commonFns.createConsentInterface(consentObject['Register']);
          if (consentInterface !== '') {
            var consentSchema = {
              'html': consentInterface,
              'name': 'consent',
              'type': 'html'
            };
            passKeySchema.push(consentSchema);
          }
          passkeyRegitrationForm(passKeySchema, container, onSuccess, onError, _classPrefix, true);
        };
        module.getConsentConfiguration(callbackAction);
      } else {
        passkeyRegitrationForm(passKeySchema, container, onSuccess, onError, _classPrefix, false);
      }
    };
    util.addRecaptchaJS();
    module.registrationFormSchema = (module.registrationFormSchema && module.registrationFormSchema.length > 0) ? module.registrationFormSchema : module.options.RegistrationFormSchema;
    if (module.options.isPassKeysEnabled) {
      onPasskeysRegistration(module.registrationFormSchema);
    } else {
      onRegistrationLoaded(module.registrationFormSchema);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function forgotPassword
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize forgotPassword form and show.
  */
  function forgotPassword (container, onSuccess, onError, _classPrefix) {
    var schema = module.forgotPasswordFormSchema;
    getLoginEmailLabel(schema);
    commonFns.createForm(schema, 'forgotpassword', container, function (data) {
      data = util.checkPhoneOrEmailLogin(data);
      if (data.indexOf('phoneApi=1') !== -1) {
        LoginRadiusDefaults.LRPhoneNo = data;
        controllers.forgotPasswordbyPhoneController(data, container, onSuccess, onError, _classPrefix);
      } else {
        controllers.forgotPasswordController(data, container, onSuccess, onError, _classPrefix);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function forgotPIN
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize forgotPIN form and show.
  */
  function forgotPIN (container, onSuccess, onError, _classPrefix) {
    var schema = module.forgotPINFormSchema;
    getLoginEmailLabel(schema);
    commonFns.createForm(schema, 'forgotPIN', container, function (data) {
      data = util.checkPhoneOrEmailLogin(data);
      if (data.indexOf('phoneApi=1') !== -1) {
        LoginRadiusDefaults.LRPhoneNo = data;
        controllers.forgotPINbyPhoneController(data, container, onSuccess, onError, _classPrefix);
      } else {
        controllers.forgotPINController(data, container, onSuccess, onError, _classPrefix);
      }
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function changePassword
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize changePassword form and show It.
  */
  function changePassword (container, onSuccess, onError, _classPrefix) {
    var schema = module.changePasswordFormSchema;
    commonFns.setPasswordRule(util.findInSchema(schema, 'name', 'newpassword'));
    commonFns.setPasswordRule(util.findInSchema(schema, 'name', 'confirmnewpassword'));
    commonFns.createForm(schema, 'changepassword', container, function (data) {
      controllers.changePasswordController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }
  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function changePIN
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize changePIN form and show It.
  */
  function changePIN (container, onSuccess, onError, _classPrefix) {
    var changePINFormSchema = module.changePINFormSchema.slice();
    commonFns.setPINRule(util.findInSchema(changePINFormSchema, 'name', 'newpin'));
    commonFns.setPINRule(util.findInSchema(changePINFormSchema, 'name', 'confirmnewpin'));
    commonFns.createForm(changePINFormSchema, 'changepin', container, function (data) {
      controllers.changePINController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function crossDeviceSSO
  * @param {String} container html element id
  * @param {String} expirytime QR code expirytime
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize crossDeviceSSO feature and show QR code.
  */
  function crossDeviceSSO (container, expirytime, onSuccess, onError, _classPrefix) {
    if (module.options.isCrossDeviceSSOEnabled) {
      var qrTimeInterval = setInterval(function () {
        if (module.CDSSOPingApiTimeout) {
          clearTimeout(module.CDSSOPingApiTimeout);
        }
        commonFns.generateCrossDeviceSSOCode(container, expirytime, onSuccess, onError, _classPrefix, function () {
          clearInterval(qrTimeInterval);
        });
        // eslint-disable-next-line no-magic-numbers
      }, expirytime * 1000);
      commonFns.generateCrossDeviceSSOCode(container, expirytime, onSuccess, onError, _classPrefix, function () {
        clearInterval(qrTimeInterval);
      });
    }
  }
  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function resendEmailVerification
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize resendEmailVerification form and show It.
  */
  function resendEmailVerification (container, onSuccess, onError, _classPrefix) {
    commonFns.createForm(module.emailSchema, 'resendEmailVerification', container, function (data) {
      controllers.resendEmailVerificationController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function addEmail
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize addEmail form and show It.
  */
  function addEmail (container, onSuccess, onError, _classPrefix) {
    commonFns.createForm(module.addEmailSchema, 'addemail', container, function (data) {
      controllers.addEmailController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function removeEmail
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize removeEmail form and show It.
  */
  function removeEmail (container, onSuccess, onError, _classPrefix) {
    commonFns.createForm(module.emailSchema, 'removeemail', container, function (data) {
      controllers.removeEmailController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function changeUsername
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize changeUsername form and show It.
  */
  function changeUsername (container, onSuccess, onError, _classPrefix) {
    commonFns.createForm(module.changeUsernameFormSchema, 'changeUsername', container, function (data) {
      controllers.changeUsernameController(data, onSuccess, onError);
    }, function (errors) {
      onError(errors);
    }, _classPrefix);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function emailVerification
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize emailVerification.
  */
  function emailVerification (onSuccess, onError, container, _classPrefix) {
    var handleVerifyEmail = function (data) {
      var vtoken = util.getHashParam('vtoken');
      if (module.options.verifyEmailByOTP) {
        var fdata = {};
        if (data) {
          fdata = util.mergeOptions(fdata, util.parseQueryString(data));
        }
        fdata.otp = vtoken;
        try {
          fdata.email = util.getQueryParameterByName('email').replace(/ /g, '+');
          controllers.emailVerificationController(fdata, onSuccess, onError, container, _classPrefix, true);
        } catch (err) {
          module.log(err);
        }
      } else {
        controllers.emailVerificationController(vtoken, onSuccess, onError, container, _classPrefix);
      }
    };
    if (container && module.options.loginLockedType === 'Captcha') {
      var schema = [];
      module.$hooks.register('afterFormRender', function (name, _container, _clsPrefix, form) {
        if (form && form.name === 'loginradius-verifyemail' && form[0].id === 'loginradius-submit-verify') {
          form[0].style.display = 'none';
        }
      });
      commonFns.createForm(schema, 'verifyemail', container, function (data) {
        handleVerifyEmail(data);
      }, function (errors) {
        onError(errors);
      }, _classPrefix);
    }

    handleVerifyEmail();
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function deleteUser
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will delete User.
  */
  function deleteUser (onSuccess, onError, container) {
    var vtoken = module.sessionData.getToken();
    if (vtoken) {
      util.ajaxCall('delete', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + vtoken + '&deleteUrl=' + module.options.deleteUrl + '&emailTemplate=' + module.options.deleteUserEmailTemplate, {}, function (regResponse) {
        if (regResponse.ErrorCode) {
          onError(commonFns.loginRadiusErrorTojsError(regResponse));
        } else {
          onSuccess(regResponse);
          if (commonFns.showOTPTemplateForm('DeleteAccount') && container) {
            commonFns.createForm(module.otpSchema, 'otp', container, function (data) {
              var _otp = module.util.parseQueryString(data);
              deleteUserConfirm(onSuccess, onError, _otp.otp);
            }, function (errors) {
              onError(errors);
            });
          }
        }
      }, 'deleteUser');
    } else {
      onError([defaultMessages['vTokenError']]);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function deleteUserConfirm
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This functionprivateFunctionsModule will Confirm delete User.
  */
  function deleteUserConfirm (onSuccess, onError, _vtoken) {
    var vtoken = _vtoken || util.getHashParam('vtoken');
    controllers.deleteUserConfirmController(vtoken, onSuccess, onError);
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function backupCodeButton
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize backupCodeButton.
  */
  function backupCodeButton (container, onSuccess, onError, _classPrefix) {
    let url = LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apikey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (module.options.duoAuthentication) {
      var encodedUrl = encodeURIComponent(module.options.callbackUrl);
      url = url + '&duoredirecturi=' + encodedUrl;
    }
    util.ajaxCall('get', url, '', function (response) {
      if (response.IsSecurityQuestionAuthenticatorVerified || response.IsEmailOtpAuthenticatorVerified || response.IsOTPAuthenticatorVerified || response.IsAuthenticatorVerified) {
        var action = 'generatebackupcodebutton';
        var backupCodeBtn = module.util.getButtonAttribute(action, _classPrefix);
        util.addHTMLContent(container, backupCodeBtn);
        util.addEvent('click', backupCodeBtn, function (event) {
          module.api.getBackupCode(module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName), onSuccess, onError);
        });
      }
    });
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function resetBackupCodeButton
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize resetBackupCode Button.
  */
  function resetBackupCodeButton (container, onSuccess, onError, _classPrefix) {
    let url = LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apikey=' + module.options.apiKey + '&access_token=' + module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (module.options.duoAuthentication) {
      var encodedUrl = encodeURIComponent(module.options.callbackUrl);
      url = url + '&duoredirecturi=' + encodedUrl;
    }
    util.ajaxCall('get', url, '', function (response) {
      if (response.IsSecurityQuestionAuthenticatorVerified || response.IsEmailOtpAuthenticatorVerified || response.IsOTPAuthenticatorVerified || response.IsAuthenticatorVerified) {
        var resetBackupCodeBtn = document.createElement('input');
        resetBackupCodeBtn.setAttribute('type', 'button');
        var buttonName = module.buttonsName['resetBackupCode'.toLowerCase()] || defaultButtonsName['resetBackupCode'];
        resetBackupCodeBtn.setAttribute('value', buttonName);
        util.addHTMLContent(container, resetBackupCodeBtn);
        util.addEvent('click', resetBackupCodeBtn, function (event) {
          module.api.resetBackupCode(module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName), onSuccess, onError);
        });
      }
    });
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function passkeyLogin
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize passkeyLogin form and show It.
  */
  function passkeyLogin (container, onSuccess, onError, _classPrefix_) {
    const handlePasskeyResponse = function () {
      if (!module.options.isPassKeysEnabled) {
        module.log('Passkey will not work, please enable pass key from admin console');
      } else {
        const accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
        util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account/passkey?apikey=' + module.options.apiKey + '&access_token=' + accessToken, '', function (response) {
          var _classPrefix = _classPrefix_ || LoginRadiusDefaults.classPrefix;
          var addpasskeybtn = document.createElement('input');
          addpasskeybtn.setAttribute('type', 'button');
          var buttonName = module.buttonsName['createPasskey'.toLowerCase()] || defaultButtonsName['createPasskey'];
          addpasskeybtn.setAttribute('value', buttonName);
          module.util.addEvent('click', addpasskeybtn, function (event) {
            commonFns.createAccountPasskey(onSuccess, onError);
          });
          var _innerHtml_ = false;
          if (response.ErrorCode) {
            const NO_PASSKEY_CODE = 1323;
            if (response.ErrorCode === NO_PASSKEY_CODE) {
              util.addHTMLContent(container, addpasskeybtn, _innerHtml_);
              _innerHtml_ = true;
            } else {
              onError(commonFns.loginRadiusErrorTojsError(response));
            }
          } else {
            const passkeys = response.Credentials;
            for (const passkey of passkeys) {
              var disablePasskey = module.util.getButtonAttribute(`passkey_${passkey.Id}`, _classPrefix, function () {
                commonFns.removePasskey(passkey.Id, onSuccess, onError);
              }, `Disable ${passkey.Authenticator || passkey.Id}`);
              module.util.addHTMLContent(container, disablePasskey, _innerHtml_);
              _innerHtml_ = true;
            }
            util.addHTMLContent(container, addpasskeybtn, _innerHtml_);
          }
        });
      }
    };
    handlePasskeyResponse();
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function createTwoFactorAuthentication
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize TwoFactorAuthentication(2FA) button.
  */
  function createTwoFactorAuthentication (container, onSuccess, onError, _classPrefix_) {
    var twoFactorButton = document.createElement('input');
    twoFactorButton.setAttribute('type', 'button');
    var buttonName = module.buttonsName['createTwoFactorAuthentication'.toLowerCase()] || defaultButtonsName['createtwofactorauthentication'];
    twoFactorButton.setAttribute('value', buttonName);
    var _classPrefix = _classPrefix_ || LoginRadiusDefaults.classPrefix;
    const accessToken = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (document.getElementsByName(_classPrefix + 'profileeditor')[0]) {
      if (module.options.showTwoFactorOnProfile) {
        var formElement = document.getElementsByName(_classPrefix + 'profileeditor')[0];
        formElement.appendChild(twoFactorButton);
      }
    } else if (module.options.twoFactorAuthentication || module.options.optionalTwoFactorAuthentication) {
      util.addHTMLContent(container, twoFactorButton);
    }

    /** Duo Validation */
    try {
      const duoCode = util.getQueryParameterByName('duo_code');
      let duoState = util.getQueryParameterByName('duo_state');
      if (!duoState) {
        duoState = util.getQueryParameterByName('state');
      }
      if (duoCode && duoState && !module.duoLoginFlag) {
        module.duoLoginFlag = true;
        controllers.duoVerifyByAccessTokenController({ Code: duoCode, State: encodeURIComponent(duoState) }, onSuccess, onError, container, _classPrefix);
      }
    } catch (err) {
    // continue regardless of error
    }

    var handleAccount2FaResponse = function () {
      var disableMFA = false;
      if (!module.options.optionalTwoFactorAuthentication && !module.options.twoFactorAuthentication) {
        module.log('Two Factor Authentication will not work, please set in commonOpitons either twoFactorAuthentication or optionalTwoFactorAuthentication');
      } else {
        var url = LoginRadiusDefaults.apiDomain + '/auth/account/2FA?apikey=' + module.options.apiKey;
        if (module.options.duoAuthentication) {
          var encodedUrl = encodeURIComponent(module.options.callbackUrl);
          url = url + '&duoredirecturi=' + encodedUrl;
        }
        util.ajaxCall('get', url + '&access_token=' + accessToken, '', function (response) {
          var addBackBtn = function () {
            module.$hooks.register('afterFormRender', function (name, container, _classPrefix, form) {
              const isButtonExist = form ? module.util.findInSchema(form, 'id', 'loginradius-button-backupcodebackbutton') : module.util.elementById('loginradius-button-backupcodebackbutton');
              form = form || module.util.elementById(container);
              if (form && module.LRCheck2FA) {
                if (!isButtonExist) {
                  var backBtn = module.util.getButtonAttribute('backupcodebackbutton', _classPrefix, function () {
                    LoginRadiusDefaults.pingCount = 0;
                    handleAccount2FaResponse();
                  });

                  form.appendChild(backBtn);
                }
              }
            });
          };
          addBackBtn();
          module.LRCheck2FA = true;
          module.LRCheckLogin = false;
          var _innerHtml_ = false;
          if (response.ErrorCode) {
            onError(commonFns.loginRadiusErrorTojsError(response));
          } else {
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedOTPAuth, response.IsOTPAuthenticatorVerified);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedGAAuth, response.IsAuthenticatorVerified);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedEmailOTPAuth, response.IsEmailOtpAuthenticatorVerified);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedSQAuth, response.IsSecurityQuestionAuthenticatorVerified);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedPushNotificationAuth, response.IsPushDeviceRegistered);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedDuoAuth, response.IsDuoAuthenticatorVerified);
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedPasskeyAuth, response.IsPasskeyAuthenticatorVerified);

            var updatedOtpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedOTPAuth);
            var gAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedGAAuth);
            var sqAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedSQAuth);
            var emailotpAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedEmailOTPAuth);
            var pushNotificationAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedPushNotificationAuth);
            var duoAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedDuoAuth);
            var passkeyAuth = module.storage.getBrowserStorage(LoginRadiusDefaults.storedPasskeyAuth);

            var IsOTPAuthenticatorVerified = response.IsOTPAuthenticatorVerified;
            var twoFAAccountemailotpCodeFn = function () {
              if (module.options.emailOTPAuthentication && response.Email && response.Email.length) {
                if (!response.IsEmailOtpAuthenticatorVerified) {
                  var emails = response.Email;
                  if (emails) {
                    var emailOtpForm = function (emailid) {
                      commonFns.addResendOTPBtn(!module.LRCheckLogin, onSuccess, onError);
                      controllers.sendMFAEmailOTPController({
                        EmailId: emailid
                      }, onSuccess, onError, container, _classPrefix);
                    };
                    var emailOtpClickFn = function (event) {
                      if (emails.length > 1) {
                        LoginRadiusDefaults.innerHTML = false;
                        var optionsArray = [];
                        for (var i = 0; i < emails.length; i++) {
                          if (emails[i]) {
                            var optionObject = {};
                            optionObject.text = emails[i];
                            optionObject.value = emails[i];
                            optionsArray.push(optionObject);
                          }
                        }
                        var secQObject = {};
                        secQObject.type = 'option';
                        secQObject.options = optionsArray;
                        secQObject.name = 'sendemailotp';
                        secQObject.rules = 'required';
                        secQObject.display = 'Select email to send verification code';
                        commonFns.createForm([secQObject], 'mfaselectemails', container, function (_mfaemail) {
                          _mfaemail = module.util.parseQueryString(_mfaemail);
                          emailOtpForm(_mfaemail.sendemailotp);
                        });
                      } else if (response.Email && response.Email[0]) {
                        emailOtpForm(response.Email[0]);
                      }
                    };
                    LoginRadiusDefaults.innerHTML = true;
                    var emailOtpBtn = module.util.getButtonAttribute('emailotp', _classPrefix, emailOtpClickFn);
                    module.util.addHTMLContent(container, emailOtpBtn, _innerHtml_);
                    _innerHtml_ = true;
                  }
                } else {
                  disableMFA = (updatedOtpAuth !== 'false' || gAuth !== 'false' || sqAuth !== 'false' || duoAuth !== 'false' || pushNotificationAuth !== 'false' || passkeyAuth !== 'false');
                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disableEmailAuth = module.util.getButtonAttribute('disableemailotpauthenticator', _classPrefix);
                    module.util.addHTMLContent(container, disableEmailAuth, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disableEmailAuth, function (event) {
                      commonFns.disableMFAOptions('emailotpauthenticator', onSuccess, onError);
                    });
                  }
                }
              }
            };
            var twoFAAccountsecurityquestionCodeFn = function () {
              if (module.options.securityQuestionAuthentication) {
                if (!response.IsSecurityQuestionAuthenticatorVerified) {
                  var secQAuthenticatorBtn = module.util.getButtonAttribute('securityquestionsauthenticator', _classPrefix, function () {
                    LoginRadiusDefaults.innerHTML = false;
                    commonFns.showMFASecurityQuestions(response, container, onSuccess, onError, _classPrefix);
                  });
                  module.util.addHTMLContent(container, secQAuthenticatorBtn, _innerHtml_);
                  _innerHtml_ = true;
                } else {
                  disableMFA = (updatedOtpAuth !== 'false' || emailotpAuth !== 'false' || gAuth !== 'false' || duoAuth !== 'false' || pushNotificationAuth !== 'false' || passkeyAuth !== 'false');
                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disableSQAuth = module.util.getButtonAttribute('disablesqauthenticator', _classPrefix);
                    module.util.addHTMLContent(container, disableSQAuth, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disableSQAuth, function () {
                      commonFns.disableMFAOptions('sqauthenticator', onSuccess, onError);
                    });
                  }
                }
              }
            };

            var twoFAAccountduoMFAFn = function () {
              if (module.options.duoAuthentication) {
                if (!response.IsDuoAuthenticatorVerified) {
                  var duoAuthEndpoint = response.DuoAuthEndpoint;
                  var handleDuoMFAClick = function (event) {
                    window.location.href = duoAuthEndpoint;
                  };
                  var duoMFAButton = module.util.getButtonAttribute('duomfa', _classPrefix, handleDuoMFAClick);
                  module.util.addHTMLContent(container, duoMFAButton, _innerHtml_);
                  // module.$hooks.call('afterFormRender', 'createTwoFactorAuthentication', container, _classPrefix);
                  _innerHtml_ = true;
                } else {
                  disableMFA = (updatedOtpAuth !== 'false' || emailotpAuth !== 'false' || gAuth !== 'false' || sqAuth !== 'false' || pushNotificationAuth !== 'false' || passkeyAuth !== 'false');
                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disableDuoAuth = module.util.getButtonAttribute('disableduoauthenticator', _classPrefix);
                    module.util.addHTMLContent(container, disableDuoAuth, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disableDuoAuth, function () {
                      commonFns.disableMFAOptions('duoauthenticator', onSuccess, onError);
                    });
                  }
                }
              }
            };

            var twoFAAccountgoogleauthCodeFn = function () {
              if (module.options.qrCodeAuthentication) {
                // LoginRadiusDefaults.innerHTML = true;
                if (!response.IsAuthenticatorVerified) {
                  var googleAuthenticatorBtn = module.util.getButtonAttribute('googleauthenticator', _classPrefix, function () {
                    LoginRadiusDefaults.innerHTML = false;
                    commonFns.showQRCode(response, container, onSuccess, onError, _classPrefix);
                  });
                  module.util.addHTMLContent(container, googleAuthenticatorBtn, _innerHtml_);
                  _innerHtml_ = true;
                } else {
                  disableMFA = updatedOtpAuth !== 'false' || emailotpAuth !== 'false' || duoAuth !== 'false' || sqAuth !== 'false' || pushNotificationAuth !== 'false' || passkeyAuth !== 'false';

                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disableGAAuth = module.util.getButtonAttribute('disablegoogleauthenticator', _classPrefix);
                    module.util.addHTMLContent(container, disableGAAuth, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disableGAAuth, function (event) {
                      commonFns.disableMFAOptions('authenticator', onSuccess, onError);
                    });
                  }
                }
                // commonFns.showQRCode(response, container, onSuccess, onError, _classPrefix);
              }
            };

            var twoFAAccountsmsCodeFn = function () {
              if (module.options.smsOTPAuthentication) {
                if (!IsOTPAuthenticatorVerified) {
                // commonFns.updatePhoneNumber(container, onSuccess, onError, _classPrefix, 'updatePhone2FA');
                  var otpAuthneticatorBtn = module.util.getButtonAttribute('otpauthenticator', _classPrefix, function () {
                    LoginRadiusDefaults.innerHTML = false;

                    commonFns.updatePhoneNumber(container, onSuccess, onError, _classPrefix, 'updatePhone2FA');
                  });
                  module.util.addHTMLContent(container, otpAuthneticatorBtn, _innerHtml_);
                  _innerHtml_ = true;
                } else {
                  LoginRadiusDefaults.innerHTML = true;
                  commonFns.changeNumberForm(container, '', onSuccess, onError, _classPrefix, LoginRadiusDefaults.innerHTML);
                  _innerHtml_ = true;
                }
              }
            };

            var twoFAAccountpushnotificationFn = function (pushNotificationResponse) {
              response = pushNotificationResponse || response;
              if (module.options.pushNotificationAuthentication) {
                if (!response.IsPushDeviceRegistered) {
                  let pushNotificationBtn = module.util.getButtonAttribute('pushnotification', _classPrefix, function () {
                    if (LoginRadiusDefaults.pingCount <= 1 && accessToken) {
                      commonFns.pingForPushNotification(accessToken, function (pushNotificationResponse) {
                        onSuccess(pushNotificationResponse);
                        if (pushNotificationResponse.IsRegistered) {
                          twoFAAccountpushnotificationFn(pushNotificationResponse);
                        }
                      }, onError);
                    }
                    let pushNotificationQRCode;
                    pushNotificationQRCode = document.createElement('img');
                    pushNotificationQRCode.type = 'image';
                    pushNotificationQRCode.src = response.PushQRCode;
                    module.util.addHTMLContent(container, pushNotificationQRCode, false);
                    module.$hooks.call('afterFormRender', 'createTwoFactorAuthentication', container, _classPrefix);
                  });
                  module.util.addHTMLContent(container, pushNotificationBtn, _innerHtml_);
                  _innerHtml_ = true;
                } else {
                  disableMFA = updatedOtpAuth !== 'false' || emailotpAuth !== 'false' || sqAuth !== 'false' || duoAuth !== 'false' || gAuth !== 'false' || passkeyAuth !== 'false';

                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disablePushNotification = module.util.getButtonAttribute('disablepushnotification', _classPrefix);
                    if (module.util.elementById('loginradius-button-backupcodebackbutton')) {
                      _innerHtml_ = false;
                    }
                    module.util.addHTMLContent(container, disablePushNotification, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disablePushNotification, function (event) {
                      commonFns.disableMFAOptions('pushnotificationauthenticator', onSuccess, onError);
                    });
                  }
                }
                // commonFns.showQRCode(response, container, onSuccess, onError, _classPrefix);
              }
            };

            var twoFAAccountpasskeyCodeFn = function () {
              if (module.options.passkeyAuthentication) {
                if (!response.IsPasskeyAuthenticatorVerified) {
                  var passkeyAuthBtn = module.util.getButtonAttribute('passkeyauthenticator', _classPrefix);
                  module.util.addHTMLContent(container, passkeyAuthBtn, _innerHtml_);
                  _innerHtml_ = true;
                  module.util.addEvent('click', passkeyAuthBtn, function (event) {
                    commonFns.createAccountMFAPasskey(onSuccess, onError);
                  });
                } else {
                  disableMFA = (updatedOtpAuth !== 'false' || gAuth !== 'false' || sqAuth !== 'false' || duoAuth !== 'false' || pushNotificationAuth !== 'false' || emailotpAuth !== 'false');
                  if ((disableMFA && module.options.twoFactorAuthentication) || module.options.optionalTwoFactorAuthentication) {
                    var disablePasskeyAuth = module.util.getButtonAttribute('disablepasskeyauthenticator', _classPrefix);
                    module.util.addHTMLContent(container, disablePasskeyAuth, _innerHtml_);
                    _innerHtml_ = true;
                    module.util.addEvent('click', disablePasskeyAuth, function (event) {
                      commonFns.disableMFAOptions('passkeyauthenticator', onSuccess, onError);
                    });
                  }
                }
              }
            };
            var authenticatorOptionsOrder = module.options.authenticatorOptionsOrder;
            for (var key in authenticatorOptionsOrder) {
              if (authenticatorOptionsOrder[key]) {
                if (authenticatorOptionsOrder[key] === 'emailotp') {
                  twoFAAccountemailotpCodeFn();
                } else if (authenticatorOptionsOrder[key] === 'sms') {
                  twoFAAccountsmsCodeFn();
                } else if (authenticatorOptionsOrder[key] === 'securityquestion') {
                  twoFAAccountsecurityquestionCodeFn();
                } else if (authenticatorOptionsOrder[key] === 'pushnotification') {
                  twoFAAccountpushnotificationFn();
                } else if (authenticatorOptionsOrder[key] === 'auth' || authenticatorOptionsOrder[key] === 'googleauth') {
                  twoFAAccountgoogleauthCodeFn();
                } else if (authenticatorOptionsOrder[key] === 'duomfa') {
                  twoFAAccountduoMFAFn();
                } else if (authenticatorOptionsOrder[key] === 'passkey') {
                  twoFAAccountpasskeyCodeFn();
                }
              }
            }
          }
        }, 'createTwoFactorAuthentication');
      }
    };
    util.addEvent('click', twoFactorButton, function (event) {
      handleAccount2FaResponse();
      if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
      }
    });
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function profileEditor
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} _classPrefix css class prefix string
  * @description This function will initialize profileEditor form and show.
  */
  function profileEditor (container, onSuccess, onError, _classPrefix) {
    var tok = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (!tok) {
      onError([
        commonFns.setMappedMessage(defaultMessages['tokenValid'])
      ]);
    } else {
      var handleProfileEditor = function (schema) {
        util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + tok, '', function (userProfile) {
          var _profileSchema = JSON.parse(JSON.stringify(schema));
          _profileSchema = commonFns.mapSchema(_profileSchema, userProfile, 'profileeditor');
          var editorSchema = [];
          var viewerSchema = [];
          var responseObject = {};
          responseObject.Profile = userProfile;
          responseObject.access_token = tok;

          for (var j = 0; j < _profileSchema.length; j++) {
            if (_profileSchema[j].name && _profileSchema[j].name.indexOf('emailid') === -1 && _profileSchema[j].name.indexOf('phoneid') === -1) {
              editorSchema.push(_profileSchema[j]);
            }

            if (_profileSchema[j].permission && _profileSchema[j].permission !== 'h') {
              viewerSchema.push(_profileSchema[j]);
            }
          }

          commonFns.createForm(editorSchema, 'profileeditor', container, function (data) {
            controllers.updateData(responseObject, container, data, onSuccess, onError, _classPrefix, editorSchema, 'profileEditor');
          }, function (errors) {
            onError(errors);
          }, _classPrefix);
          if (module.options.optionalTwoFactorAuthentication || module.options.twoFactorAuthentication) {
            createTwoFactorAuthentication(container, onSuccess, onError, _classPrefix);
          }
          module.$hooks.call('renderProfileEditorHook', userProfile, viewerSchema);
        }, 'profileEditor');
      };
      //  if (module.registrationFormSchema || module.options != '') {
      module.registrationFormSchema = (module.registrationFormSchema && module.registrationFormSchema.length > 0) ? module.registrationFormSchema : module.options.RegistrationFormSchema;
      if (module.progressiveProfiling.showInEditor) {
        module.progressiveProfiling.fetchSchema(function (progreessiveSchemaObject) {
          var finalSchema = module.registrationFormSchema.slice();
          if (progreessiveSchemaObject && progreessiveSchemaObject.ProfilingSteps) {
            for (var i = 0; i < progreessiveSchemaObject.ProfilingSteps.length; i++) {
              var progressiveSchema = progreessiveSchemaObject.ProfilingSteps[i].Schema;
              for (var j = 0; j < progressiveSchema.length; j++) {
                var flag = module.util.containsObject(finalSchema, progressiveSchema[j], 'name');
                if (!flag) {
                  finalSchema.push(progressiveSchema[j]);
                }
              }
            }
          }
          handleProfileEditor(finalSchema);
        });
      } else {
        handleProfileEditor(module.registrationFormSchema);
      }
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function accountLinking
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} templateName string
  * @description This function will initialize social account Linking and render linked social accounts.
  */
  function accountLinking (container, onSuccess, onError, templateName) {
    if (module.options.disableAccountLinking) {
      module.log(defaultMessages['disabledAccountLinking']);
    } else {
      var containerIds = container.split(',');
      var token = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
      if (!token) {
        onError([
          commonFns.setMappedMessage(defaultMessages['tokenValid'])
        ]);
      } else {
        util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + token, '', function (response) {
          if (!response.ErrorCode) {
            if (response.EmailVerified || response.PhoneIdVerified) {
              var providers = {};
              if (response.Identities) {
                for (var i = 0, len = response.Identities.length; i < len; i++) {
                  providers[response.Identities[i].Provider] = response.Identities[i].ID;
                }
              }

              if (containerIds.length === 1) {
                commonFns.renderCustomInterface(container, providers, templateName, '', true);
              } else {
                commonFns.renderCustomInterface(container, providers, module.options.linkedAccountsTemplate + ',' + module.options.notLinkedAccountsTemplate, true, true);
              }

              window.html5passToken = function (tok) {
                controllers.accountLinkingReceiveToken(tok, onSuccess, onError);
              };

              if (!module.options.isMobile && !module.options.noCallbackForSocialLogin) {
                util.addEvent('message', window, function (event) {
                  if (event.origin.indexOf(module.options.customDomain) === -1 && event.origin.indexOf(LoginRadiusDefaults.hubDomain) === -1) {
                    return;
                  }
                  if (typeof event.data === 'string' && (_uuidFormat.test(event.data) || util.isJWT(event.data))) {
                    controllers.accountLinkingReceiveToken(event.data, onSuccess, onError);
                  }
                });
              } else {
                module.$hooks.register('socialCalls', function (provider, clientGuid) {
                  if (module.options.noCallbackForSocialLogin) {
                    commonFns.pingForSocialIdentity(token, clientGuid, onSuccess, onError);
                  }
                });
              }
            } else {
              onError([
                commonFns.setMappedMessage(defaultMessages['unverifiedUser'])
              ]);
            }
          } else {
            onError(commonFns.loginRadiusErrorTojsError(response));
          }
        }, 'linkAccount');
      }
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function getLoginEmailLabel
  * @param {Array} schema array of login form fields objects
  * @description This function will get login form field object and set rules and display name.
  */
  function getLoginEmailLabel (schema) {
    if (module.options.duplicateEmailWithUniqueUsername) {
      var uSchema = util.findInSchema(schema, 'name', 'emailid');
      uSchema.display = 'Username';
      uSchema.rules = 'required';
    } else {
      var uSchema1;
      if (module.options.usernameLogin) {
        uSchema1 = util.findInSchema(schema, 'name', 'emailid');
        if (uSchema1.display.indexOf('/Username') === -1) {
          uSchema1.display = uSchema1.display + '/Username';
          uSchema1.rules = 'required';
        }
      }
      if (module.options.phoneLogin || module.options.passwordlessLoginOTP) {
        if (!uSchema1) {
          uSchema1 = util.findInSchema(schema, 'name', 'emailid');
          uSchema1.rules = 'required';
        }
        if (uSchema1.display.indexOf('/Phone') === -1) {
          uSchema1.display = uSchema1.display + '/Phone';
        }
      }
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function resetPasswordBySecurityQuestion
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} classPrefix css class prefix string
  * @description This function will initialize resetPasswordBySecurityQuestion form and display .
  */
  function resetPasswordBySecurityQuestion (container, onSuccess, onError, classPrefix) {
    if (module.options.securityQuestionEnabled) {
      var schema;
      var noSecurityQuestions = true;
      schema = module.getSecQSchema;
      getLoginEmailLabel(schema);
      commonFns.createForm(schema, 'securityquestions', container, function (data) {
        data = util.checkPhoneOrEmailLogin(data);
        controllers.getSecurityQuestionsController(data, function (_securitySchema) {
          if (_securitySchema.length > 0) {
            noSecurityQuestions = false;
          }
          var loginSchema = module.loginFormSchema.slice();
          commonFns.setPasswordRule(module.util.findInSchema(loginSchema, 'name', 'password'));
          commonFns.setPasswordRule(module.util.findInSchema(loginSchema, 'name', 'confirmpassword'));
          var securitySchema = util.mergeObjects(loginSchema, _securitySchema);
          if (!module.loginAction) {
            getLoginEmailLabel(securitySchema);
          }
          if (!noSecurityQuestions) {
            commonFns.createForm(securitySchema, 'resetpwdbysecq', container, function (formResponse) {
              formResponse = util.checkPhoneOrEmailLogin(formResponse);
              controllers.resetPasswordBySecurityQuestionController(formResponse, onSuccess, onError);
            },
            function (errors) {
              onError(errors);
            }, classPrefix);
          } else {
            onError([
              commonFns.setMappedMessage(defaultMessages['noSecurityQuestions'])
            ]);
          }
        }, function (error) {
          onError(error);
        });
      }, function (errors) {
        onError(errors);
      }, classPrefix);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function resetPINBySecurityQuestion
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} classPrefix css class prefix string
  * @description This function will initialize resetPINBySecurityQuestion form and display .
  */
  function resetPINBySecurityQuestion (container, onSuccess, onError, classPrefix) {
    if (module.options.securityQuestionEnabled) {
      var schema;
      var noSecurityQuestions = true;
      schema = module.getSecQSchema;
      getLoginEmailLabel(schema);
      commonFns.createForm(schema, 'securityquestions', container, function (data) {
        data = util.checkPhoneOrEmailLogin(data);
        controllers.getSecurityQuestionsController(data, function (_securitySchema) {
          if (_securitySchema.length > 0) {
            noSecurityQuestions = false;
          }
          // eslint-disable-next-line no-magic-numbers
          var resetPINSchema = module.resetPINFormSchema.slice(0, 1);
          resetPINSchema.push(module.loginFormSchema[0]);
          commonFns.setPINRule(module.util.findInSchema(resetPINSchema, 'name', 'pin'));
          var securitySchema = util.mergeObjects(resetPINSchema, _securitySchema);
          if (!module.loginAction) {
            getLoginEmailLabel(securitySchema);
          }
          if (!noSecurityQuestions) {
            commonFns.createForm(securitySchema, 'resetpinbysecq', container, function (formResponse) {
              formResponse = util.checkPhoneOrEmailLogin(formResponse);
              controllers.resetPINBySecurityQuestionController(formResponse, onSuccess, onError);
            },
            function (errors) {
              onError(errors);
            }, classPrefix);
          } else {
            onError([
              commonFns.setMappedMessage(defaultMessages['noSecurityQuestions'])
            ]);
          }
        }, function (error) {
          onError(error);
        });
      }, function (errors) {
        onError(errors);
      }, classPrefix);
    }
  }
  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function updateSecurityQuestion
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} classPrefix css class prefix string
  * @description This function will initialize updateSecurityQuestion form and display .
  */
  function updateSecurityQuestion (container, onSuccess, onError, _classPrefix) {
    var securityQuestionSchemaLoaded = function (_regSchema) {
      var noSecurityQuestions = true;
      var securityQuestionSchema = commonFns.getSecurityQuestionSchema(_regSchema);
      if (securityQuestionSchema && securityQuestionSchema.length > 0) {
        noSecurityQuestions = false;
      }
      if (!noSecurityQuestions) {
        commonFns.createForm(securityQuestionSchema, 'updatesecurityquestion', container, function (data) {
          controllers.updateSecurityQuestionController(data, onSuccess, onError);
        }, function (errors) {
          onError(errors);
        }, _classPrefix);
      } else {
        onError([
          commonFns.setMappedMessage(defaultMessages['noSecurityQuestions'])
        ]);
      }
    };
    if (module.options.securityQuestionEnabled) {
      module.registrationFormSchema = (module.registrationFormSchema && module.registrationFormSchema.length > 0) ? module.registrationFormSchema : module.options.RegistrationFormSchema;
      securityQuestionSchemaLoaded(module.registrationFormSchema);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function oneTouchLogin
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} classPrefix css class prefix string
  * @description This function will initialize oneTouchLogin form and display .
  */
  function oneTouchLogin (container, onSuccess, onError, classPrefix) {
    var vtoken = util.getHashParam('vtoken');
    var vtype = util.getHashParam('vtype');
    let isGoogleCaptchEnabled = module.options.isCaptchaEnabled || module.options.v2Recaptcha || module.options.invisibleRecaptcha;
    var captchaEnabled = isGoogleCaptchEnabled || module.options.tencentCaptcha || module.options.tencentCaptchaAsFallback;
    if (!captchaEnabled && module.options.privacyPolicyConfiguration.IsEnabled) {
      module.log('Captcha should be enabled for passwordless login if using with privacy policy');
    }
    if (vtype === 'noregistration' || vtype === 'onetouchlogin') {
      controllers.oneTouchLoginEmailVerification(vtoken, onSuccess, onError);
    }
    var schema = module.passwordLessLoginSchema;
    if (module.options.phoneLogin) {
      var uSchema = util.findInSchema(schema, 'name', 'emailid');

      uSchema.display = uSchema.display + '/Phone';
    }
    var recaptchaId;
    if (captchaEnabled) {
      util.addRecaptchaJS();
      recaptchaId = classPrefix + LoginRadiusDefaults.idPrefix + 'recaptcha_widget_onetouchlogin';
      util.captchaSchema(recaptchaId, schema);
    }
    commonFns.createForm(schema, 'oneTouchLogin', container, function (data) {
      controllers.oneTouchLoginController(data, container, onSuccess, onError, classPrefix, captchaEnabled);
    }, function (error) {
      onError(error);
    }, classPrefix);
    if (captchaEnabled) {
      util.renderV2Recaptcha(recaptchaId, true);
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function smartLogin
  * @param {String} container html element id
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @param {String} classPrefix css class prefix string
  * @description This function will initialize smartLogin form and display .
  */
  function smartLogin (container, onSuccess, onError, classPrefix) {
    var smartLoginSchema = module.smartLoginSchema;
    getLoginEmailLabel(smartLoginSchema);
    commonFns.createForm(smartLoginSchema, 'smartlogin', container, function (data) {
      var smartLoginData = util.checkPhoneOrEmailLogin(data);
      if (smartLoginData.indexOf('phone') !== -1) {
        controllers.loginOTPController(smartLoginData, container, onSuccess, onError, classPrefix);
      } else {
        controllers.smartLoginController(smartLoginData, onSuccess, onError);
      }
    }, function (error) {
      onError(error);
    }, classPrefix);
  }
  /**
 * @memberof LoginRadiusV2#
 * @private
 * @function pinReauthentication
 * @param {String} container html element id
 * @param {Function} onSuccess success callback function
 * @param {Function} onError error callback function
 * @param {String} classPrefix css class prefix string
 * @description This function will initialize pinReauthentication form.
 */
  function pinReauthentication (container, onSuccess, onError, classPrefix) {
    var pinAuthSchema = [];
    if (module.pinLoginFormSchema) {
      pinAuthSchema = module.pinLoginFormSchema.slice();
      pinAuthSchema.rules = 'required';
    }
    if (pinAuthSchema.length) {
      commonFns.createForm(pinAuthSchema, 'pinreauthentication', container, function (data) {
        controllers.pinReauthController(data, onSuccess, onError);
      }, function (error) {
        onError(error);
      }, classPrefix);
    } else {
      module.log('Pin schema is not defined');
    }
  }

  /**
 * @memberof LoginRadiusV2#
 * @private
 * @function customEventConsent
 * @param {String} container html element id
 * @param {String} event custom event of consent
 * @param {Function} onSuccess success callback function
 * @param {Function} onError error callback function
 * @param {String} classPrefix css class prefix string
 * @description This function will initialize consent Custom Events.
 */
  function customEventConsent (container, event, onSuccess, onError, classPrefix) {
    var callbackAction = function (consentObject) {
      var renderSchema = [];
      var consentInterface = commonFns.createConsentInterface(consentObject['custom_' + event]);
      if (consentInterface !== '') {
        var consentSchema = {
          'html': consentInterface,
          'name': 'consent',
          'type': 'html'
        };
        renderSchema.push(consentSchema);
        commonFns.createForm(renderSchema, 'customeventconsent', container, function (data) {
          var errors = commonFns.consentValidation(data, 'custom_' + event);
          if (errors.length > 0) {
            onError(errors);
          } else {
            var events = [];
            var customFieldsObj = commonFns.mapRegistrationSchema(null, data).Consents;
            events.push({
              'Event': event,
              'IsCustom': true
            });
            customFieldsObj.Events = events;
            controllers.customEventConsentController(customFieldsObj, onSuccess, onError);
          }
        }, function (error) {
          onError(error);
        }, classPrefix);
      }
    };
    module.getConsentConfiguration(callbackAction);
  }

  /**
* @memberof LoginRadiusV2#
* @private
* @function consentEditor
* @param {String} container html element id
* @param {String} event custom event of consent
* @param {Function} onSuccess success callback function
* @param {Function} onError error callback function
* @param {String} classPrefix css class prefix string
* @description This function will initialize consent Custom Events.
*/
  function consentEditor (container, onSuccess, onError, classPrefix) {
    var tok = module.storage.getBrowserStorage(LoginRadiusDefaults.storedTokenName);
    if (!tok) {
      onError([
        commonFns.setMappedMessage(defaultMessages['tokenValid'])
      ]);
    } else {
      var callbackAction = function (consentObject, userProfile) {
        var renderSchema = [];
        var acceptedConsents;
        var consentInterface = '';
        if (userProfile && userProfile.ConsentProfile && userProfile.ConsentProfile.Consents) {
          acceptedConsents = userProfile.ConsentProfile.Consents;
          consentInterface = commonFns.createConsentOptionInterface(module.consentsList, acceptedConsents);
        }
        var consentSchema = {
          'html': consentInterface,
          'name': 'consent',
          'type': 'html'
        };
        renderSchema.push(consentSchema);
        commonFns.createForm(renderSchema, 'consenteditor', container, function (data) {
          var errors = commonFns.consentValidation(data);
          if (errors.length > 0) {
            onError(errors);
          } else {
            var objData = module.util.parseQueryString(data);
            var consentOptions = [];
            for (var key in objData) {
              var newLey = key.replace('consent_', '');
              consentOptions.push({
                'ConsentOptionId': newLey,
                'IsAccepted': objData[key]
              });
            }
            objData = {};
            objData['Consents'] = consentOptions;
            controllers.updateConsentController(objData, onSuccess, onError);
          }
        }, function (error) {
          onError(error);
        }, classPrefix);
      };
      util.ajaxCall('get', LoginRadiusDefaults.apiDomain + '/auth/account?apiKey=' + module.options.apiKey + '&access_token=' + tok, '', function (userProfile) {
        module.getConsentConfiguration(function (consentObject) {
          callbackAction(consentObject, userProfile);
        });
      });
    }
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function actionHandler
  * @param {String} action action name ex. 'login'
  * @param {Object} options option object which hold callback function and other options
  * @description This function will handle all the V2JS actions.
  */
  function actionHandler (action, options) {
    options = options || {};
    var onSuccess = options.onSuccess || function () { /* do nothing. */ };
    var onError = options.onError || function () { /* do nothing. */ };
    var container = options.container || '';
    var classPrefix = options.classPrefix || '';
    var templateName = options.templateName || '';
    module.$hooks.register('getCurrentActionOptions', function (currentAction) {
      // eslint-disable-next-line eqeqeq
      if (action == currentAction) {
        window.LRSafarionSuccess = onSuccess || function () {
          //  do nothing.
        };
        window.LRSafarionError = onError || function () {
          // do nothing.
        };
      }
      if (!module.currentActionOptions) {
        module.currentActionOptions = {};
      }
      module.currentActionOptions[action] = {};
      module.currentActionOptions[action]['onSuccess'] = onSuccess || function () { /* do nothing. */ };
      module.currentActionOptions[action]['onError'] = onError || function () { /* do nothing. */ };
      module.currentActionOptions[action]['container'] = container;
      module.currentActionOptions[action]['classPrefix'] = classPrefix || '';
      module.currentActionOptions[action]['templateName'] = templateName || '';
    });
    module.getAppConfiguration(function (appConfig) {
      const allowActions = appConfig ? !appConfig.ErrorCode : true;
      if (allowActions) {
        if (action !== 'registration' && action !== 'updateSecurityQuestion') {
          module.$hooks.call('beforeInit', action);
        }
        var initAction = {};
        initAction['privacyPolicyUpdate'] = function () {
          acceptPrivacyPolicy(container, onSuccess, onError, classPrefix);
        };
        initAction['login'] = function () {
          login(container, onSuccess, onError, classPrefix);
        };
        initAction['registration'] = function () {
          var formInterval;
          var isClear = 1;
          formInterval = setInterval(
            function () {
              try {
                if (!LoginRadiusDefaults.isRegFormSchemaLock) {
                  LoginRadiusDefaults.isRegFormSchemaLock = true;
                  module.$hooks.call('beforeInit', action);
                  registration(container, onSuccess, onError, classPrefix);
                  if (isClear > 0) {
                    clearInterval(formInterval);
                  }
                }
              } catch (e) { clearInterval(formInterval); module.log(e); }
            // eslint-disable-next-line no-magic-numbers
            }, 1000);
        };
        initAction['resetPassword'] = function () {
          commonFns.resetPassword(container, onSuccess, onError, classPrefix);
        };
        initAction['resetPassKey'] = function () {
          commonFns.resetPassKey(container, onSuccess, onError, classPrefix);
        };
        initAction['resetPIN'] = function () {
          commonFns.resetPIN(container, onSuccess, onError, classPrefix);
        };
        initAction['forgotPassword'] = function () {
          forgotPassword(container, onSuccess, onError, classPrefix);
        };
        initAction['forgotPIN'] = function () {
          forgotPIN(container, onSuccess, onError, classPrefix);
        };
        initAction['verifyEmail'] = function () {
          emailVerification(onSuccess, onError, container, classPrefix);
        };
        initAction['changePassword'] = function () {
          changePassword(container, onSuccess, onError, classPrefix);
        };
        initAction['changePIN'] = function () {
          changePIN(container, onSuccess, onError, classPrefix);
        };
        initAction['crossDeviceSSO'] = function () {
          commonFns.loadQRCodeScript(function () {
          // Intiate the action once script has been loaded
            crossDeviceSSO(container, options.expirytime, onSuccess, onError, classPrefix);
          });
        };
        initAction['socialLogin'] = function () {
          var elem = util.elementById(container);
          if (elem) {
            util.addEvent('click', elem, function () {
              LoginRadiusDefaults.socialRegFormId = this.id;
            });
          }
          LoginRadiusDefaults.socialRegFormId = container;
          commonFns.socialLogin(container, onSuccess, onError, classPrefix);
        };
        initAction['linkAccount'] = function () {
          accountLinking(container, onSuccess, onError, templateName);
        };
        initAction['unLinkAccount'] = function () {
          var unlink = util.unLinkAccount;
          util.unLinkAccount = function (provider, providerId) {
            unlink(provider, providerId, onSuccess, onError);
          };
        };
        initAction['profileEditor'] = function () {
          profileEditor(container, onSuccess, onError, classPrefix);
        };
        initAction['deleteUser'] = function () {
          deleteUser(onSuccess, onError, container);
        };
        initAction['deleteUserConfirm'] = function () {
          deleteUserConfirm(onSuccess, onError);
        };
        initAction['updatePhone'] = function () {
          module.LRCheck2FA = false;
          commonFns.updatePhoneNumber(container, onSuccess, onError, classPrefix);
        };
        initAction['changeUsername'] = function () {
          changeUsername(container, onSuccess, onError, classPrefix);
        };
        initAction['resendVerificationEmail'] = function () {
          resendEmailVerification(container, onSuccess, onError, classPrefix);
        };
        initAction['addEmail'] = function () {
          addEmail(container, onSuccess, onError, classPrefix);
        };
        initAction['removeEmail'] = function () {
          removeEmail(container, onSuccess, onError, classPrefix);
        };
        initAction['createTwoFactorAuthentication'] = function () {
          createTwoFactorAuthentication(container, onSuccess, onError, classPrefix);
        };
        initAction['passkeylogin'] = function () {
          passkeyLogin(container, onSuccess, onError, classPrefix);
        };
        initAction['backupCodeButton'] = function () {
          backupCodeButton(container, onSuccess, onError, classPrefix);
        };
        initAction['resetBackupCodeButton'] = function () {
          resetBackupCodeButton(container, onSuccess, onError, classPrefix);
        };
        initAction['updateSecurityQuestion'] = function () {
          var _formInterval;
          var _isClear = 1;
          _formInterval = setInterval(
            function () {
              try {
                if (!LoginRadiusDefaults.isSecurityFormSchemaLock) {
                  LoginRadiusDefaults.isSecurityFormSchemaLock = true;
                  updateSecurityQuestion(container, onSuccess, onError, classPrefix);
                  if (_isClear > 0) {
                    clearInterval(_formInterval);
                  }
                }
              } catch (e) { clearInterval(_formInterval); module.log(e); }
            // eslint-disable-next-line no-magic-numbers
            }, 1000);
        };
        initAction['resetPasswordBySecurityQuestion'] = function () {
          resetPasswordBySecurityQuestion(container, onSuccess, onError, classPrefix);
        };
        initAction['resetPINBySecurityQuestion'] = function () {
          resetPINBySecurityQuestion(container, onSuccess, onError, classPrefix);
        };
        initAction['ssoLogin'] = function () {
          ssoLogin(onSuccess);
        };
        initAction['logout'] = function () {
          commonFns.logout(onSuccess);
        };
        initAction['ssoNotLoginThenLogout'] = function () {
          ssoNotLoginThenLogout(onError, onSuccess);
        };
        initAction['pinreauthentication'] = function () {
          pinReauthentication(container, onSuccess, onError, classPrefix);
        };
        initAction['customeventconsent'] = function () {
          customEventConsent(container, options.event, onSuccess, onError, classPrefix);
        };
        initAction['consenteditor'] = function () {
          consentEditor(container, onSuccess, onError, classPrefix);
        };
        var _passwordlessLogin = function () {
          passwordlessLogin(onSuccess, onError, classPrefix);
        };
        var _oneTouchLogin = function () {
          oneTouchLogin(container, onSuccess, onError, classPrefix);
        };
        var _smartLogin = function () {
          smartLogin(container, onSuccess, onError, classPrefix);
        };
        initAction['instantLinkLogin'] = _passwordlessLogin;
        initAction['passwordlessLoginValidate'] = _passwordlessLogin;
        initAction['autoLogin'] = _smartLogin;
        initAction['smartLogin'] = _smartLogin;
        initAction['noRegistrationPasswordLessLogin'] = _oneTouchLogin;
        initAction['onetouchLogin'] = _oneTouchLogin;
        initAction['default'] = function () {
          module.log('This action is not valid.');
        };
        // invoke actions
        (initAction[action] || initAction['default'])();
      }
    });
  }

  // eslint-disable-next-line no-undef
  setLoginRadiusModuleFunctions(module, lrOptions);

  /**
  * @memberof LoginRadiusV2#
  * @function module.init
  * @param {String} action action name ex. 'login'
  * @param {Object} options option object which hold callback function and other options
  * @description This function will initialize the user actions.
  */
  module.init = function (action, options) {
    module.useraction = action;
    if (lrOptions.maskSensitiveInput) {
      module.otpSchema = [{
        type: 'password',
        name: 'otp',
        display: 'Verification Code',
        rules: 'required',
        permission: 'r'
      }];
    } else {
      module.otpSchema = [{
        type: 'string',
        name: 'otp',
        display: 'Verification Code',
        rules: 'required',
        permission: 'r'
      }];
    }
    if (lrOptions.twoFactorAuthentication === 'required') {
      lrOptions.twoFactorAuthentication = true;
      lrOptions.optionalTwoFactorAuthentication = false;
    } else if (lrOptions.twoFactorAuthentication === 'optional') {
      lrOptions.twoFactorAuthentication = false;
      lrOptions.optionalTwoFactorAuthentication = true;
    }

    if ((action === 'ssoLogin' || action === 'logout' || action === 'ssoNotLoginThenLogout') && !LoginRadiusDefaults.isSSOInitFired) {
      LoginRadiusDefaults.isSSOInitFired = true;
      module.SSOinitFired = true;
    }
    if (action === 'organization' || action === 'login') {
      if (!module.currentActionOptions) {
        module.currentActionOptions = {};
      }
      module.currentActionOptions[action] = {};
      module.currentActionOptions[action]['onSuccess'] = options.onSuccess || function () { /* do nothing. */ };
      module.currentActionOptions[action]['container'] = options.container || '';
      module.currentActionOptions[action]['onError'] = options.onError || function () { /* do nothing. */ };
      module.currentActionOptions[action]['classPrefix'] = options._classPrefix || '';
    }
    if (!lrOptions.appName) {
      module.log('SSO will not work, please set option.appName for SSO');
    }

    lrOptions.formRenderDelay = lrOptions.formRenderDelay || 0;

    if (lrOptions.apiKey) {
      if (lrOptions.formRenderDelay > 0) {
        setTimeout(function () {
          actionHandler(action, options);
        }, lrOptions.formRenderDelay);
      } else {
        actionHandler(action, options);
      }
    } else {
      module.log('API key must be set.');
      // throw new Error("API key must be set.");
    }
  };

  // eslint-disable-next-line no-undef
  setLoginRadiusDefaultSchema(module);

  // API
  // eslint-disable-next-line no-undef
  module.api = new LoginRadiusApiFramework(module, controllers);

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function ssoLogin
  * @param {Function} onSuccess success callback function
  * @description This function will check if there is an activated SSO session going. If there is, the token for that activated session will be passed back, and the callback (onsuccess function) will be executed.
  */
  function ssoLogin (onSuccess) {
    commonFns.validateAndCall(function () {
      var domain = module.options.customDomain || module.options.appName + '.' + LoginRadiusDefaults.hubDomain;
      util.ajaxCall('get', 'https://' + domain + '/ssologin/login', '', function (data) {
        if (data.isauthenticated) {
          if (module.loginRadiusHtml5PassToken) {
            module.loginRadiusHtml5PassToken(data.token);
          } else {
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedTokenName, data.token);
            if (module.options.tokenType && module.options.tokenType.toLowerCase() === 'jwt') {
              LoginRadiusDefaults.lrResponseCounter++;
              LoginRadiusDefaults.lrCounterTokenResponse = {};
              var _onSuccess = function (JwtToken) {
                onSuccess(data.token, JwtToken);
              };
              commonFns.getJwtToken(data.token, _onSuccess);
            } else {
              onSuccess(data.token);
            }
          }
        }
        // Not sending action 'ssoLogin' to support old jsonpcall
      });
    });
  }

  /**
  * @memberof LoginRadiusV2#
  * @private
  * @function ssoLogin
  * @param {Function} onSuccess success callback function
  * @param {Function} onError error callback function
  * @description This function will used to verify that a user has been logged out from all websites.
  */
  function ssoNotLoginThenLogout (onError, onSuccess) {
    commonFns.validateAndCall(function () {
      var domain = module.options.customDomain || module.options.appName + '.' + LoginRadiusDefaults.hubDomain;
      util.ajaxCall('get', 'https://' + domain + '/ssologin/login', '', function (data) {
        if (data.isauthenticated) {
          var cookietoken = LRNameSpace.cookies.getItem(LoginRadiusDefaults.tokenCookie);
          // eslint-disable-next-line no-eq-null
          if (typeof cookietoken === 'undefined' || cookietoken == null) {
            commonFns.setToken(data.token);
            cookietoken = LRNameSpace.cookies.getItem(LoginRadiusDefaults.tokenCookie);
          }
          if (cookietoken && cookietoken !== data.token) {
            commonFns.setToken(data.token);
            // onError(data.token);
            onSuccess(data.token);
          } else {
            module.storage.setBrowserStorage(LoginRadiusDefaults.storedTokenName, data.token);
            if (module.options.tokenType && module.options.tokenType.toLowerCase() === 'jwt') {
              LoginRadiusDefaults.lrResponseCounter++;
              LoginRadiusDefaults.lrCounterTokenResponse = {};
              var _onSuccess = function (JwtToken) {
                onSuccess(data.token, JwtToken);
              };
              commonFns.getJwtToken(data.token, _onSuccess);
            } else {
              onSuccess(data.token);
            }
          }
        } else {
          LRNameSpace.cookies.removeItem(LoginRadiusDefaults.tokenCookie, module.options.appPath);
          onError();
        }
        // Not sending action 'ssoNotLoginThenLogout' to support old  jsonpcall
      });
    });
  }
  return module;
};
