(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["direktori-direktori-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/direktori.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/direktori.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div [@slideFadeinUp]=\"routeAnimation(outletModule, 'slideFadeinUp')\"\r\n                [@slideFadeinRight]=\"routeAnimation(outletModule, 'slideFadeinRight')\"\r\n                [@zoomFadein]=\"routeAnimation(outletModule, 'zoomFadein')\" [@fadein]=\"routeAnimation(outletModule, 'fadein')\">\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/direktori-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/hr/direktori/direktori-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DirektoriRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirektoriRoutingModule", function() { return DirektoriRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'employee'
    },
    {
        path: 'employee',
        loadChildren: function () { return __webpack_require__.e(/*! import() | employee-employee-module */ "employee-employee-module").then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/pages/hr/direktori/employee/employee.module.ts")).then(function (mo) { return mo.EmployeeModule; }); }
    },
    {
        path: 'hr-management',
        loadChildren: function () { return __webpack_require__.e(/*! import() | hrmanagement-hrmanagement-module */ "hrmanagement-hrmanagement-module").then(__webpack_require__.bind(null, /*! ./hrmanagement/hrmanagement.module */ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.module.ts")).then(function (mo) { return mo.HrmanagementModule; }); }
    },
    {
        path: 'general',
        loadChildren: function () { return __webpack_require__.e(/*! import() | general-general-module */ "general-general-module").then(__webpack_require__.bind(null, /*! ./general/general.module */ "./src/app/pages/hr/direktori/general/general.module.ts")).then(function (mo) { return mo.GeneralModule; }); }
    },
    {
        path: 'development',
        loadChildren: function () { return __webpack_require__.e(/*! import() | development-development-module */ "development-development-module").then(__webpack_require__.bind(null, /*! ./development/development.module */ "./src/app/pages/hr/direktori/development/development.module.ts")).then(function (mo) { return mo.DevelopmentModule; }); }
    },
    {
        path: 'pengaturan',
        loadChildren: function () { return Promise.all(/*! import() | pengaturan-pengaturan-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("pengaturan-pengaturan-module")]).then(__webpack_require__.bind(null, /*! ./pengaturan/pengaturan.module */ "./src/app/pages/hr/direktori/pengaturan/pengaturan.module.ts")).then(function (mo) { return mo.PengaturanModule; }); }
    },
];
var DirektoriRoutingModule = /** @class */ (function () {
    function DirektoriRoutingModule() {
    }
    DirektoriRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DirektoriRoutingModule);
    return DirektoriRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/direktori.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/hr/direktori/direktori.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kaXJla3RvcmkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/direktori.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/hr/direktori/direktori.component.ts ***!
  \***********************************************************/
/*! exports provided: DirektoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirektoriComponent", function() { return DirektoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var DirektoriComponent = /** @class */ (function () {
    function DirektoriComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__["getSettings"])).subscribe(function (state) {
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
    DirektoriComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'All Staff',
                key: 'staf',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/pegawai',
            },
            {
                category: true,
                title: 'Status',
            },
            {
                title: 'contract',
                key: 'kontrak',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/module/kontrak',
            },
            {
                title: 'Non Active',
                key: 'mantan',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/module/mantan',
            },
            {
                category: true,
                title: 'Requirement',
            },
            {
                title: 'Applicants',
                key: 'pelamar',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/pelamar',
            },
            {
                title: 'Required Staff',
                key: 'permintaan-pegawai',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/permintaan-pegawai',
            },
            {
                category: true,
                title: 'Legal',
            },
            {
                title: 'training',
                key: 'training',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/training',
            },
            {
                title: 'license',
                key: 'lisensi',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/lisensi',
            },
            {
                title: 'project',
                key: 'proyek',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/proyek',
            },
            {
                title: 'kpi',
                key: 'kpi',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/module/kpi',
            },
            {
                title: 'setting',
                key: 'pengaturan',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'Employee status',
                        key: 'status',
                        url: '/hr/direktori/pengaturan/status',
                    },
                    {
                        title: 'warning',
                        key: 'sp',
                        url: '/hr/direktori/pengaturan/sp',
                    },
                    {
                        title: 'license',
                        key: 'jlisensi',
                        url: '/hr/direktori/pengaturan/jlisensi',
                    }
                ],
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Direktori' });
    };
    DirektoriComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    DirektoriComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    DirektoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-direktori',
            template: __webpack_require__(/*! raw-loader!./direktori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/direktori.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_2__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_2__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_2__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_2__["fadein"]],
            styles: [__webpack_require__(/*! ./direktori.component.scss */ "./src/app/pages/hr/direktori/direktori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], DirektoriComponent);
    return DirektoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/direktori.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/hr/direktori/direktori.module.ts ***!
  \********************************************************/
/*! exports provided: DirektoriModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirektoriModule", function() { return DirektoriModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _direktori_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./direktori-routing.module */ "./src/app/pages/hr/direktori/direktori-routing.module.ts");
/* harmony import */ var _direktori_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direktori.component */ "./src/app/pages/hr/direktori/direktori.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var DirektoriModule = /** @class */ (function () {
    function DirektoriModule() {
    }
    DirektoriModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_direktori_component__WEBPACK_IMPORTED_MODULE_5__["DirektoriComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _direktori_routing_module__WEBPACK_IMPORTED_MODULE_4__["DirektoriRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
            ],
        })
    ], DirektoriModule);
    return DirektoriModule;
}());



/***/ })

}]);
//# sourceMappingURL=direktori-direktori-module.js.map