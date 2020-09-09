(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-helpdesk-helpdesk-module"],{

/***/ "./src/app/pages/helpdesk/helpdesk-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/helpdesk/helpdesk-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HelpdeskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskRoutingModule", function() { return HelpdeskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'complaints',
        loadChildren: function () { return Promise.all(/*! import() | complaints-complaints-module */[__webpack_require__.e("default~anggaran-anggaran-module~asset-asset-module~complaints-complaints-module~expeses-summary-exp~100adfcb"), __webpack_require__.e("common"), __webpack_require__.e("complaints-complaints-module")]).then(__webpack_require__.bind(null, /*! ./complaints/complaints.module */ "./src/app/pages/helpdesk/complaints/complaints.module.ts")).then(function (m) { return m.ComplaintsModule; }); },
    },
    {
        path: 'healthcare',
        loadChildren: function () { return Promise.all(/*! import() | healthcare-healthcare-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("common"), __webpack_require__.e("healthcare-healthcare-module")]).then(__webpack_require__.bind(null, /*! ./healthcare/healthcare.module */ "./src/app/pages/helpdesk/healthcare/healthcare.module.ts")).then(function (mod) { return mod.HealthcareModule; }); }
    },
    {
        path: 'uniform',
        loadChildren: function () { return Promise.all(/*! import() | uniform-uniform-module */[__webpack_require__.e("common"), __webpack_require__.e("uniform-uniform-module")]).then(__webpack_require__.bind(null, /*! ./uniform/uniform.module */ "./src/app/pages/helpdesk/uniform/uniform.module.ts")).then(function (mod) { return mod.UniformModule; }); }
    },
];
var HelpdeskRoutingModule = /** @class */ (function () {
    function HelpdeskRoutingModule() {
    }
    HelpdeskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HelpdeskRoutingModule);
    return HelpdeskRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/helpdesk.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/helpdesk/helpdesk.module.ts ***!
  \***************************************************/
/*! exports provided: HelpdeskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskModule", function() { return HelpdeskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/api.module */ "./src/app/sdk/hr/api.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var src_app_sdk_payroll_api_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/api.module */ "./src/app/sdk/payroll/api.module.ts");
/* harmony import */ var src_app_sdk_document_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/document/api.module */ "./src/app/sdk/document/api.module.ts");
/* harmony import */ var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpdesk-routing.module */ "./src/app/pages/helpdesk/helpdesk-routing.module.ts");








var HelpdeskModule = /** @class */ (function () {
    function HelpdeskModule() {
    }
    HelpdeskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_7__["HelpdeskRoutingModule"],
                src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"].forRoot({ rootUrl: 'http://erp-hr.vm.devetek.com/api' }),
                src_app_sdk_payroll_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"].forRoot({ rootUrl: 'http://erp-payroll.vm.devetek.com/api' }),
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"].forRoot({ rootUrl: 'http://erp-user.vm.devetek.com/api' }),
                src_app_sdk_document_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"].forRoot({ rootUrl: 'http://erp-document.vm.devetek.com/api' }),
            ]
        })
    ], HelpdeskModule);
    return HelpdeskModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-pages-helpdesk-helpdesk-module.js.map