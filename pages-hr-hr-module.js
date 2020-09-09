(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hr-hr-module"],{

/***/ "./src/app/pages/hr/hr-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/hr/hr-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRoutingModule", function() { return HrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'company'
    },
    {
        path: 'company',
        loadChildren: function () { return __webpack_require__.e(/*! import() | company-company-module */ "company-company-module").then(__webpack_require__.bind(null, /*! ./company/company.module */ "./src/app/pages/hr/company/company.module.ts")).then(function (mod) { return mod.CompanyModule; }); }
    },
    {
        path: 'direktori',
        loadChildren: function () { return __webpack_require__.e(/*! import() | direktori-direktori-module */ "direktori-direktori-module").then(__webpack_require__.bind(null, /*! ./direktori/direktori.module */ "./src/app/pages/hr/direktori/direktori.module.ts")).then(function (mod) { return mod.DirektoriModule; }); }
    },
    {
        path: 'kalender',
        loadChildren: function () { return __webpack_require__.e(/*! import() | kalender-kalender-module */ "kalender-kalender-module").then(__webpack_require__.bind(null, /*! ./kalender/kalender.module */ "./src/app/pages/hr/kalender/kalender.module.ts")).then(function (mod) { return mod.KalenderModule; }); }
    },
    {
        path: 'payroll',
        loadChildren: function () {
            return Promise.all(/*! import() | payroll-payroll-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("payroll-payroll-module")]).then(__webpack_require__.bind(null, /*! ./payroll/payroll.module */ "./src/app/pages/hr/payroll/payroll.module.ts")).then(function (mod) { return mod.PayrollModule; });
        },
    },
];
var HrRoutingModule = /** @class */ (function () {
    function HrRoutingModule() {
    }
    HrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HrRoutingModule);
    return HrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/hr.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/hr/hr.module.ts ***!
  \***************************************/
/*! exports provided: HrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function() { return HrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-routing.module */ "./src/app/pages/hr/hr-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/api.module */ "./src/app/sdk/hr/api.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var src_app_sdk_payroll_api_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/payroll/api.module */ "./src/app/sdk/payroll/api.module.ts");
/* harmony import */ var src_app_sdk_document_api_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/document/api.module */ "./src/app/sdk/document/api.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_role_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_role/jwt.interceptor */ "./src/app/_role/jwt.interceptor.ts");
/* harmony import */ var src_app_role_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_role/error.interceptor */ "./src/app/_role/error.interceptor.ts");












var HrModule = /** @class */ (function () {
    function HrModule() {
    }
    HrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
                // ApiModule.forRoot({ rootUrl: 'http://erp-hr.vm.devetek.com/api' }),
                src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"].forRoot({ rootUrl: 'http://erp-hr.vm.devetek.com/api' }),
                src_app_sdk_payroll_api_module__WEBPACK_IMPORTED_MODULE_7__["ApiModule"].forRoot({ rootUrl: 'http://erp-payroll.vm.devetek.com/api' }),
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"].forRoot({ rootUrl: 'http://erp-user.vm.devetek.com/api' }),
                src_app_sdk_document_api_module__WEBPACK_IMPORTED_MODULE_8__["ApiModule"].forRoot({ rootUrl: 'http://erp-document.vm.devetek.com/api' }),
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: src_app_role_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: src_app_role_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true },
            ],
        })
    ], HrModule);
    return HrModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-hr-hr-module.js.map