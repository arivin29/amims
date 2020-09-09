(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-bank-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset nzLinkRouter>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./gaji/list']\" >Payroll</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./bonus/list']\" >Bonus</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./onduty/list']\" >Onduty</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./thr/list']\" >THR</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./pilot/list']\" >Pilot</a>\r\n    </nz-tab>\r\n</nz-tabset>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/list/list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/list/list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset nzLinkRouter>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./gaji/list']\" >Payroll</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./bonus/list']\" >Bonus</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./onduty/list']\" >Onduty</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./thr/list']\" >THR</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./pilot/list']\" >Pilot</a>\r\n    </nz-tab>\r\n</nz-tabset>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bank-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bank-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BankRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankRoutingModule", function() { return BankRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
        children: [
            {
                path: '',
                redirectTo: 'gaji'
            },
            {
                path: 'gaji',
                loadChildren: function () { return Promise.all(/*! import() | gaji-gaji-module */[__webpack_require__.e("common"), __webpack_require__.e("gaji-gaji-module")]).then(__webpack_require__.bind(null, /*! ./gaji/gaji.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/gaji/gaji.module.ts")).then(function (mo) { return mo.GajiModule; }); },
            },
            {
                path: 'bonus',
                loadChildren: function () { return Promise.all(/*! import() | bonus-bonus-module */[__webpack_require__.e("common"), __webpack_require__.e("bonus-bonus-module")]).then(__webpack_require__.bind(null, /*! ./bonus/bonus.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bonus/bonus.module.ts")).then(function (mo) { return mo.BonusModule; }); },
            },
            {
                path: 'onduty',
                loadChildren: function () { return Promise.all(/*! import() | onduty-onduty-module */[__webpack_require__.e("common"), __webpack_require__.e("onduty-onduty-module")]).then(__webpack_require__.bind(null, /*! ./onduty/onduty.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty.module.ts")).then(function (mo) { return mo.OndutyModule; }); },
            },
            {
                path: 'thr',
                loadChildren: function () { return Promise.all(/*! import() | thr-thr-module */[__webpack_require__.e("common"), __webpack_require__.e("thr-thr-module")]).then(__webpack_require__.bind(null, /*! ./thr/thr.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr.module.ts")).then(function (mo) { return mo.ThrModule; }); },
            },
            {
                path: 'pilot',
                loadChildren: function () { return Promise.all(/*! import() | pilot-pilot-module */[__webpack_require__.e("common"), __webpack_require__.e("pilot-pilot-module")]).then(__webpack_require__.bind(null, /*! ./pilot/pilot.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/pilot/pilot.module.ts")).then(function (mo) { return mo.PilotModule; }); },
            },
        ]
    },
];
var BankRoutingModule = /** @class */ (function () {
    function BankRoutingModule() {
    }
    BankRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], BankRoutingModule);
    return BankRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bank.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bank.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModule", function() { return BankModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bank_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/bank-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");









var BankModule = /** @class */ (function () {
    function BankModule() {
    }
    BankModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BankRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__["FormBuilderTypeSafe"]
            ],
        })
    ], BankModule);
    return BankModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/bank-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/bank-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BankRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankRoutingModule", function() { return BankRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
        children: [
            {
                path: '',
                redirectTo: 'gaji'
            },
            {
                path: 'gaji',
                loadChildren: function () { return Promise.all(/*! import() | gaji-gaji-module */[__webpack_require__.e("common"), __webpack_require__.e("gaji-gaji-module")]).then(__webpack_require__.bind(null, /*! ./gaji/gaji.module */ "./src/app/pages/profile/payroll/bank/gaji/gaji.module.ts")).then(function (mo) { return mo.GajiModule; }); },
            },
            {
                path: 'bonus',
                loadChildren: function () { return Promise.all(/*! import() | bonus-bonus-module */[__webpack_require__.e("common"), __webpack_require__.e("bonus-bonus-module")]).then(__webpack_require__.bind(null, /*! ./bonus/bonus.module */ "./src/app/pages/profile/payroll/bank/bonus/bonus.module.ts")).then(function (mo) { return mo.BonusModule; }); },
            },
            {
                path: 'onduty',
                loadChildren: function () { return Promise.all(/*! import() | onduty-onduty-module */[__webpack_require__.e("common"), __webpack_require__.e("onduty-onduty-module")]).then(__webpack_require__.bind(null, /*! ./onduty/onduty.module */ "./src/app/pages/profile/payroll/bank/onduty/onduty.module.ts")).then(function (mo) { return mo.OndutyModule; }); },
            },
            {
                path: 'thr',
                loadChildren: function () { return Promise.all(/*! import() | thr-thr-module */[__webpack_require__.e("common"), __webpack_require__.e("thr-thr-module")]).then(__webpack_require__.bind(null, /*! ./thr/thr.module */ "./src/app/pages/profile/payroll/bank/thr/thr.module.ts")).then(function (mo) { return mo.ThrModule; }); },
            },
            {
                path: 'pilot',
                loadChildren: function () { return Promise.all(/*! import() | pilot-pilot-module */[__webpack_require__.e("common"), __webpack_require__.e("pilot-pilot-module")]).then(__webpack_require__.bind(null, /*! ./pilot/pilot.module */ "./src/app/pages/profile/payroll/bank/pilot/pilot.module.ts")).then(function (mo) { return mo.PilotModule; }); },
            },
        ]
    },
];
var BankRoutingModule = /** @class */ (function () {
    function BankRoutingModule() {
    }
    BankRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], BankRoutingModule);
    return BankRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/bank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/bank.module.ts ***!
  \***********************************************************/
/*! exports provided: BankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModule", function() { return BankModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bank_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-routing.module */ "./src/app/pages/profile/payroll/bank/bank-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");









var BankModule = /** @class */ (function () {
    function BankModule() {
    }
    BankModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BankRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__["FormBuilderTypeSafe"]
            ],
        })
    ], BankModule);
    return BankModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/list/list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/list/list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/list/list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/bank/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bank-bank-module.js.map