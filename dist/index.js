"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./config/mongoose");

// database
// Starting the server
_app["default"].listen(_app["default"].get("port"));

console.log("Server on port", _app["default"].get("port"));