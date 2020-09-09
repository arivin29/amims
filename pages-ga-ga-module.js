(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ga-ga-module"],{

/***/ "./src/app/pages/ga/ga-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ga/ga-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaRoutingModule", function() { return GaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'request',
    },
    {
        path: 'request',
        loadChildren: function () { return Promise.all(/*! import() | request-request-module */[__webpack_require__.e("common"), __webpack_require__.e("request-request-module")]).then(__webpack_require__.bind(null, /*! ./request/request.module */ "./src/app/pages/ga/request/request.module.ts")).then(function (m) { return m.RequestModule; }); },
    },
    {
        path: 'asset',
        loadChildren: function () { return Promise.all(/*! import() | asset-asset-module */[__webpack_require__.e("default~anggaran-anggaran-module~asset-asset-module~complaints-complaints-module~expeses-summary-exp~100adfcb"), __webpack_require__.e("asset-asset-module")]).then(__webpack_require__.bind(null, /*! ./asset/asset.module */ "./src/app/pages/ga/asset/asset.module.ts")).then(function (m) { return m.AssetModule; }); },
    },
    {
        path: 'account',
        loadChildren: function () { return Promise.all(/*! import() | account-akunting-module */[__webpack_require__.e("common"), __webpack_require__.e("account-akunting-module")]).then(__webpack_require__.bind(null, /*! ./account/akunting.module */ "./src/app/pages/ga/account/akunting.module.ts")).then(function (mod) { return mod.AkuntingModule; }); }
    },
];
var GaRoutingModule = /** @class */ (function () {
    function GaRoutingModule() {
    }
    GaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GaRoutingModule);
    return GaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/ga.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/ga/ga.module.ts ***!
  \***************************************/
/*! exports provided: GaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaModule", function() { return GaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ga_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ga-routing.module */ "./src/app/pages/ga/ga-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/api.module */ "./src/app/sdk/hr/api.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_role_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_role/jwt.interceptor */ "./src/app/_role/jwt.interceptor.ts");
/* harmony import */ var src_app_role_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_role/error.interceptor */ "./src/app/_role/error.interceptor.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var GaModule = /** @class */ (function () {
    function GaModule() {
    }
    GaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ga_routing_module__WEBPACK_IMPORTED_MODULE_3__["GaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
                src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"].forRoot({ rootUrl: 'http://erp-hr.vm.devetek.com/api' }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_app_role_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_app_role_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"], multi: true },
            ],
        })
    ], GaModule);
    return GaModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ga-ga-module.js.map