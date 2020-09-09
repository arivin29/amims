(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proses-proses-module"],{

/***/ "./src/app/pages/hr/payroll/proses/proses-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/proses-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProsesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsesRoutingModule", function() { return ProsesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'payroll'
    },
    {
        path: 'payroll',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./payroll/payroll.module */ "./src/app/pages/hr/payroll/proses/payroll/payroll.module.ts")).then(function (m) { return m.PayrollModule; }); }
    },
    {
        path: 'thr',
        loadChildren: function () { return Promise.all(/*! import() | thr-thr-module */[__webpack_require__.e("common"), __webpack_require__.e("thr-thr-module")]).then(__webpack_require__.bind(null, /*! ./thr/thr.module */ "./src/app/pages/hr/payroll/proses/thr/thr.module.ts")).then(function (m) { return m.ThrModule; }); }
    },
    {
        path: 'bonus',
        loadChildren: function () { return Promise.all(/*! import() | bonus-bonus-module */[__webpack_require__.e("common"), __webpack_require__.e("bonus-bonus-module")]).then(__webpack_require__.bind(null, /*! ./bonus/bonus.module */ "./src/app/pages/hr/payroll/proses/bonus/bonus.module.ts")).then(function (m) { return m.BonusModule; }); }
    },
    {
        path: 'onduty',
        loadChildren: function () { return Promise.all(/*! import() | onduty-onduty-module */[__webpack_require__.e("common"), __webpack_require__.e("onduty-onduty-module")]).then(__webpack_require__.bind(null, /*! ./onduty/onduty.module */ "./src/app/pages/hr/payroll/proses/onduty/onduty.module.ts")).then(function (m) { return m.OndutyModule; }); }
    },
    {
        path: 'pilot',
        loadChildren: function () { return Promise.all(/*! import() | pilot-pilot-module */[__webpack_require__.e("common"), __webpack_require__.e("pilot-pilot-module")]).then(__webpack_require__.bind(null, /*! ./pilot/pilot.module */ "./src/app/pages/hr/payroll/proses/pilot/pilot.module.ts")).then(function (m) { return m.PilotModule; }); }
    }
];
var ProsesRoutingModule = /** @class */ (function () {
    function ProsesRoutingModule() {
    }
    ProsesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProsesRoutingModule);
    return ProsesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/proses.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/proses.module.ts ***!
  \**********************************************************/
/*! exports provided: ProsesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProsesModule", function() { return ProsesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proses-routing.module */ "./src/app/pages/hr/payroll/proses/proses-routing.module.ts");




var ProsesModule = /** @class */ (function () {
    function ProsesModule() {
    }
    ProsesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProsesRoutingModule"]
            ]
        })
    ], ProsesModule);
    return ProsesModule;
}());



/***/ })

}]);
//# sourceMappingURL=proses-proses-module.js.map