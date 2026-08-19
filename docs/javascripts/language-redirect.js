(function () {
  "use strict";

  var COOKIE_NAME = "preferred_lang";
  var COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
  var DE_PATH = "/de/";
  var EN_PATH = "/welcome/";

  function getCookie(name) {
    var match = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value) {
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; max-age=" +
      COOKIE_MAX_AGE +
      "; path=/; SameSite=Lax";
  }

  function isOnLanding(pathname) {
    if (!pathname) return false;
    var normalized = pathname.replace(/\/index\.html?$/, "/").replace(/\/{2,}/g, "/");
    return normalized === "/" || normalized === "" || normalized === "/index.html";
  }

  function redirect(lang) {
    var target = lang === "de" ? DE_PATH : EN_PATH;
    var current = window.location.pathname;
    var normalized = current.replace(/\/index\.html?$/, "/").replace(/\/{2,}/g, "/");
    if (normalized === "/" || normalized === "") {
      window.location.replace(target);
    }
  }

  function prefersGerman() {
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || (navigator.userLanguage || "")];
    for (var i = 0; i < langs.length; i++) {
      if (typeof langs[i] === "string" && langs[i].toLowerCase().indexOf("de") === 0) {
        return true;
      }
    }
    return false;
  }

  function init() {
    if (!isOnLanding(window.location.pathname)) {
      return;
    }

    var stored = getCookie(COOKIE_NAME);
    if (stored === "de" || stored === "en") {
      redirect(stored);
      return;
    }

    if (prefersGerman()) {
      setCookie(COOKIE_NAME, "de");
      redirect("de");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.setPreferredLanguage = function (lang) {
    if (lang !== "de" && lang !== "en") return;
    setCookie(COOKIE_NAME, lang);
  };
})();
