(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asuransi-asuransi-module"],{

/***/ "./src/app/pages/hr/payroll/asuransi/asuransi-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/asuransi-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AsuransiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsuransiRoutingModule", function() { return AsuransiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'bpjs',
        loadChildren: function () { return Promise.all(/*! import() | bpjs-bpjs-module */[__webpack_require__.e("common"), __webpack_require__.e("bpjs-bpjs-module")]).then(__webpack_require__.bind(null, /*! ./bpjs/bpjs.module */ "./src/app/pages/hr/payroll/asuransi/bpjs/bpjs.module.ts")).then(function (m) { return m.BpjsModule; }); }
    }
];
var AsuransiRoutingModule = /** @class */ (function () {
    function AsuransiRoutingModule() {
    }
    AsuransiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AsuransiRoutingModule);
    return AsuransiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/asuransi.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/asuransi.module.ts ***!
  \**************************************************************/
/*! exports provided: AsuransiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsuransiModule", function() { return AsuransiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asuransi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asuransi-routing.module */ "./src/app/pages/hr/payroll/asuransi/asuransi-routing.module.ts");




var AsuransiModule = /** @class */ (function () {
    function AsuransiModule() {
    }
    AsuransiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _asuransi_routing_module__WEBPACK_IMPORTED_MODULE_3__["AsuransiRoutingModule"]
            ]
        })
    ], AsuransiModule);
    return AsuransiModule;
}());



/***/ })

}]);
//# sourceMappingURL=asuransi-asuransi-module.js.map