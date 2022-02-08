"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var global_1 = require("./global");
vue_1.createApp(App_vue_1["default"]).use(store_1["default"]).use(router_1["default"]).use(global_1.globalRegister).mount('#app');
