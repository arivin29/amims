(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["laporan-laporan-module"],{

/***/ "./src/app/pages/hr/payroll/laporan/laporan-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/laporan-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: LaporanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporanRoutingModule", function() { return LaporanRoutingModule; });
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
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./payroll/payroll.module */ "./src/app/pages/hr/payroll/laporan/payroll/payroll.module.ts")).then(function (m) { return m.PayrollModule; }); }
    },
    {
        path: 'thr',
        loadChildren: function () { return Promise.all(/*! import() | thr-thr-module */[__webpack_require__.e("common"), __webpack_require__.e("thr-thr-module")]).then(__webpack_require__.bind(null, /*! ./thr/thr.module */ "./src/app/pages/hr/payroll/laporan/thr/thr.module.ts")).then(function (m) { return m.ThrModule; }); }
    },
    {
        path: 'payout',
        loadChildren: function () { return __webpack_require__.e(/*! import() | payout-payout-module */ "payout-payout-module").then(__webpack_require__.bind(null, /*! ./payout/payout.module */ "./src/app/pages/hr/payroll/laporan/payout/payout.module.ts")).then(function (m) { return m.PayoutModule; }); }
    },
    {
        path: 'bonus',
        loadChildren: function () { return Promise.all(/*! import() | bonus-bonus-module */[__webpack_require__.e("common"), __webpack_require__.e("bonus-bonus-module")]).then(__webpack_require__.bind(null, /*! ./bonus/bonus.module */ "./src/app/pages/hr/payroll/laporan/bonus/bonus.module.ts")).then(function (m) { return m.BonusModule; }); }
    },
    {
        path: 'onduty',
        loadChildren: function () { return Promise.all(/*! import() | onduty-onduty-module */[__webpack_require__.e("common"), __webpack_require__.e("onduty-onduty-module")]).then(__webpack_require__.bind(null, /*! ./onduty/onduty.module */ "./src/app/pages/hr/payroll/laporan/onduty/onduty.module.ts")).then(function (m) { return m.OndutyModule; }); }
    },
    {
        path: 'pilot',
        loadChildren: function () { return Promise.all(/*! import() | pilot-pilot-module */[__webpack_require__.e("common"), __webpack_require__.e("pilot-pilot-module")]).then(__webpack_require__.bind(null, /*! ./pilot/pilot.module */ "./src/app/pages/hr/payroll/laporan/pilot/pilot.module.ts")).then(function (m) { return m.PilotModule; }); }
    },
    {
        path: 'bulanan',
        loadChildren: function () { return __webpack_require__.e(/*! import() | bulanan-bulanan-module */ "bulanan-bulanan-module").then(__webpack_require__.bind(null, /*! ./bulanan/bulanan.module */ "./src/app/pages/hr/payroll/laporan/bulanan/bulanan.module.ts")).then(function (m) { return m.BulananModule; }); }
    },
    {
        path: 'tahunan',
        loadChildren: function () { return __webpack_require__.e(/*! import() | tahunan-tahunan-module */ "tahunan-tahunan-module").then(__webpack_require__.bind(null, /*! ./tahunan/tahunan.module */ "./src/app/pages/hr/payroll/laporan/tahunan/tahunan.module.ts")).then(function (m) { return m.TahunanModule; }); }
    }
];
var LaporanRoutingModule = /** @class */ (function () {
    function LaporanRoutingModule() {
    }
    LaporanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LaporanRoutingModule);
    return LaporanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/laporan.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/laporan.module.ts ***!
  \************************************************************/
/*! exports provided: LaporanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporanModule", function() { return LaporanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _laporan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laporan-routing.module */ "./src/app/pages/hr/payroll/laporan/laporan-routing.module.ts");




var LaporanModule = /** @class */ (function () {
    function LaporanModule() {
    }
    LaporanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _laporan_routing_module__WEBPACK_IMPORTED_MODULE_3__["LaporanRoutingModule"]
            ]
        })
    ], LaporanModule);
    return LaporanModule;
}());



/***/ })

}]);
//# sourceMappingURL=laporan-laporan-module.js.map