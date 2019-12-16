const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");

/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

//const page = requier("/scripts/pages/survey")
const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    console.log("error " + OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack));
    alert({
        title: e.type || lang.applicationError,
        message: OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");
const router = require("./routes");
router.push("/pages/survey");
