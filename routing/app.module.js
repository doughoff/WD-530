"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var routing_component_1 = require("./routing.component");
var ROUTES = [
    { path: '', redirectTo: 'aPath', pathMatch: 'full' },
    { path: 'aPath', component: routing_component_1.A },
    { path: 'bPath', component: routing_component_1.B },
    { path: 'cPath', component: routing_component_1.C },
    { path: 'dPath', redirectTo: 'cPath' },
    { path: '**', component: routing_component_1.A }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(ROUTES, { enableTracing: true, useHash: false })],
        declarations: [routing_component_1.Routing, routing_component_1.A, routing_component_1.B, routing_component_1.C],
        bootstrap: [routing_component_1.Routing]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map