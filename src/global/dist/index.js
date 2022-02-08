"use strict";
exports.__esModule = true;
exports.globalRegister = void 0;
var register_element_1 = require("./register-element");
function globalRegister(app) {
    app.use(register_element_1["default"]);
}
exports.globalRegister = globalRegister;
