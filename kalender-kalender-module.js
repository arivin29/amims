(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kalender-kalender-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/kalender.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/kalender.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/kalender/kalender-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hr/kalender/kalender-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: KalenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalenderRoutingModule", function() { return KalenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kalender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kalender.component */ "./src/app/pages/hr/kalender/kalender.component.ts");




var routes = [
    {
        path: '',
        component: _kalender_component__WEBPACK_IMPORTED_MODULE_3__["KalenderComponent"],
        children: [
            {
                path: 'pengaturan/mastercuti',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pengaturan-mastercuti-mastercuti-module */ "pengaturan-mastercuti-mastercuti-module").then(__webpack_require__.bind(null, /*! ./pengaturan/mastercuti/mastercuti.module */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti.module.ts")).then(function (mo) { return mo.MastercutiModule; });
                },
            },
            {
                path: 'pengaturan/masterlembur',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pengaturan-masterlembur-masterlembur-module */ "pengaturan-masterlembur-masterlembur-module").then(__webpack_require__.bind(null, /*! ./pengaturan/masterlembur/masterlembur.module */ "./src/app/pages/hr/kalender/pengaturan/masterlembur/masterlembur.module.ts")).then(function (mo) { return mo.MasterlemburModule; });
                },
            },
            {
                path: 'pengaturan/jam-kerja',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pengaturan-jam-kerja-jam-kerja-module */ "pengaturan-jam-kerja-jam-kerja-module").then(__webpack_require__.bind(null, /*! ./pengaturan/jam-kerja/jam-kerja.module */ "./src/app/pages/hr/kalender/pengaturan/jam-kerja/jam-kerja.module.ts")).then(function (mo) { return mo.JamKerjaModule; });
                },
            },
            {
                path: 'absensi',
                loadChildren: function () { return Promise.all(/*! import() | absensi-absensi-module */[__webpack_require__.e("common"), __webpack_require__.e("absensi-absensi-module")]).then(__webpack_require__.bind(null, /*! ./absensi/absensi.module */ "./src/app/pages/hr/kalender/absensi/absensi.module.ts")).then(function (mo) { return mo.AbsensiModule; }); },
            },
            {
                path: 'cuti',
                loadChildren: function () { return Promise.all(/*! import() | cuti-cuti-module */[__webpack_require__.e("common"), __webpack_require__.e("cuti-cuti-module")]).then(__webpack_require__.bind(null, /*! ./cuti/cuti.module */ "./src/app/pages/hr/kalender/cuti/cuti.module.ts")).then(function (mo) { return mo.CutiModule; }); },
            },
            {
                path: 'lembur',
                loadChildren: function () { return Promise.all(/*! import() | lembur-lembur-module */[__webpack_require__.e("common"), __webpack_require__.e("lembur-lembur-module")]).then(__webpack_require__.bind(null, /*! ./lembur/lembur.module */ "./src/app/pages/hr/kalender/lembur/lembur.module.ts")).then(function (mo) { return mo.LemburModule; }); },
            },
            {
                path: 'perjalanan-dinas',
                loadChildren: function () { return Promise.all(/*! import() | perjalanan-dinas-perjalanan-dinas-module */[__webpack_require__.e("common"), __webpack_require__.e("perjalanan-dinas-perjalanan-dinas-module")]).then(__webpack_require__.bind(null, /*! ./perjalanan-dinas/perjalanan-dinas.module */ "./src/app/pages/hr/kalender/perjalanan-dinas/perjalanan-dinas.module.ts")).then(function (mo) { return mo.PerjalananDinasModule; }); },
            },
            {
                path: 'kalender-perusahaan',
                loadChildren: function () { return __webpack_require__.e(/*! import() | kalender-perusahaan-kalender-perusahaan-module */ "kalender-perusahaan-kalender-perusahaan-module").then(__webpack_require__.bind(null, /*! ./kalender-perusahaan/kalender-perusahaan.module */ "./src/app/pages/hr/kalender/kalender-perusahaan/kalender-perusahaan.module.ts")).then(function (mo) { return mo.KalenderPerusahaanModule; }); },
            },
            {
                path: 'pilot/absensi',
                loadChildren: function () { return Promise.all(/*! import() | pilot-absensi-absensi-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("pilot-absensi-absensi-module")]).then(__webpack_require__.bind(null, /*! ./pilot/absensi/absensi.module */ "./src/app/pages/hr/kalender/pilot/absensi/absensi.module.ts")).then(function (mo) { return mo.AbsensiModule; }); },
            },
            {
                path: 'pilot/dvr',
                loadChildren: function () { return Promise.all(/*! import() | pilot-dvr-dvr-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("pilot-dvr-dvr-module")]).then(__webpack_require__.bind(null, /*! ./pilot/dvr/dvr.module */ "./src/app/pages/hr/kalender/pilot/dvr/dvr.module.ts")).then(function (mo) { return mo.DvrModule; }); },
            },
            {
                path: 'pilot/summary',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pilot-summary-summary-module */ "pilot-summary-summary-module").then(__webpack_require__.bind(null, /*! ./pilot/summary/summary.module */ "./src/app/pages/hr/kalender/pilot/summary/summary.module.ts")).then(function (mo) { return mo.SummaryModule; }); },
            }
        ],
    },
];
var KalenderRoutingModule = /** @class */ (function () {
    function KalenderRoutingModule() {
    }
    KalenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], KalenderRoutingModule);
    return KalenderRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/kalender.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/hr/kalender/kalender.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL2thbGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/kalender.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/hr/kalender/kalender.component.ts ***!
  \*********************************************************/
/*! exports provided: KalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalenderComponent", function() { return KalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");





var KalenderComponent = /** @class */ (function () {
    function KalenderComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getSettings"])).subscribe(function (state) {
            _this.menuLayoutType = state.menuLayoutType;
            _this.isContentNoMaxWidth = state.isContentNoMaxWidth;
            _this.isAppMaxWidth = state.isAppMaxWidth;
            _this.isGrayBackground = state.isGrayBackground;
            _this.isSquaredBorders = state.isSquaredBorders;
            _this.isCardShadow = state.isCardShadow;
            _this.isBorderless = state.isBorderless;
            _this.isTopbarFixed = state.isTopbarFixed;
            _this.isGrayTopbar = state.isGrayTopbar;
            _this.routerAnimation = state.routerAnimation;
        });
    }
    KalenderComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Leave',
                key: 'cuti',
                icon: 'fe fe-file-plus',
                url: '/hr/kalender/cuti',
            },
            {
                title: 'Overtime',
                key: 'lembur',
                icon: 'fe fe-clock',
                url: '/hr/kalender/lembur',
            },
            {
                title: 'Attendance',
                key: 'absensi',
                icon: 'fe fe-bell',
                count: 6,
                children: [
                    {
                        title: 'Activity',
                        key: 'aktifitas',
                        url: 'absensi/aktifitas',
                    },
                    {
                        title: 'Report',
                        key: 'laporan',
                        url: '/hr/kalender/module/absensi/laporan',
                    },
                    {
                        title: 'Policy',
                        key: 'jamkerja',
                        url: '/hr/kalender/module/absensi/kebijakan',
                    },
                ]
            },
            {
                title: 'Schedule',
                key: 'Operation Department',
                icon: 'fe fe-calendar',
                count: 6,
                children: [
                    {
                        title: 'Pilot',
                        key: 'pilot',
                        url: '/hr/kalender/pilot/absensi/list/hash_pilot',
                    },
                    {
                        title: 'Maintenance',
                        key: 'maintenance',
                        url: '/hr/kalender/pilot/absensi/list/hash_maintenance',
                    },
                    {
                        title: 'Operation',
                        key: 'operation',
                        url: '/hr/kalender/pilot/absensi/list/hash_operation',
                    },
                ]
            },
            {
                title: 'On Duty',
                key: 'perjalanan-dinas',
                icon: 'fe fe-navigation',
                url: '/hr/kalender/perjalanan-dinas',
            },
            {
                title: 'DFR',
                key: 'dvr',
                icon: 'fe fe-file-text',
                url: '/hr/kalender/pilot/dvr',
            },
            {
                title: 'Settings',
                key: 'pengaturan',
                icon: 'fe fe-settings',
                count: 6,
                children: [
                    {
                        title: 'Holiday',
                        key: 'kalender-perusahaan',
                        url: '/hr/kalender/kalender-perusahaan',
                    },
                    {
                        title: 'Overtime',
                        key: 'pengaturan/masterlembur',
                        url: '/hr/kalender/pengaturan/masterlembur',
                    },
                    {
                        title: 'Working Schedule',
                        key: 'pengaturan/jam-kerja',
                        url: '/hr/kalender/pengaturan/jam-kerja/list',
                    },
                    {
                        title: 'Leave',
                        key: 'pengaturan/mastercuti',
                        url: '/hr/kalender/pengaturan/mastercuti',
                    },
                ],
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Kalender' });
    };
    KalenderComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    KalenderComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }
    ]; };
    KalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kalender',
            template: __webpack_require__(/*! raw-loader!./kalender.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/kalender.component.html"),
            animations: [],
            styles: [__webpack_require__(/*! ./kalender.component.scss */ "./src/app/pages/hr/kalender/kalender.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
    ], KalenderComponent);
    return KalenderComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/kalender.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/hr/kalender/kalender.module.ts ***!
  \******************************************************/
/*! exports provided: KalenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalenderModule", function() { return KalenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kalender_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kalender-routing.module */ "./src/app/pages/hr/kalender/kalender-routing.module.ts");
/* harmony import */ var _kalender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kalender.component */ "./src/app/pages/hr/kalender/kalender.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var KalenderModule = /** @class */ (function () {
    function KalenderModule() {
    }
    KalenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_kalender_component__WEBPACK_IMPORTED_MODULE_5__["KalenderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _kalender_routing_module__WEBPACK_IMPORTED_MODULE_4__["KalenderRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzRadioModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]],
        })
    ], KalenderModule);
    return KalenderModule;
}());



/***/ })

}]);
//# sourceMappingURL=kalender-kalender-module.js.map