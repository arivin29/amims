(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/company/company.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/company/company.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/company/company-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/hr/company/company-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component */ "./src/app/pages/hr/company/company.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: "",
        redirectTo: "module/kantor",
        pathMatch: "full"
    },
    {
        path: "module",
        component: _company_component__WEBPACK_IMPORTED_MODULE_1__["CompanyComponent"],
        children: [
            {
                path: "kantor",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-kantor-kantor-module */ "pengaturan-kantor-kantor-module").then(__webpack_require__.bind(null, /*! ./pengaturan/kantor/kantor.module */ "./src/app/pages/hr/company/pengaturan/kantor/kantor.module.ts")).then(function (mo) { return mo.KantorModule; }); }
            },
            {
                path: "jabatan",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-jabatan-jabatan-module */ "pengaturan-jabatan-jabatan-module").then(__webpack_require__.bind(null, /*! ./pengaturan/jabatan/jabatan.module */ "./src/app/pages/hr/company/pengaturan/jabatan/jabatan.module.ts")).then(function (mo) { return mo.JabatanModule; }); }
            },
            {
                path: "pangkat",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-pangkat-pangkat-module */ "pengaturan-pangkat-pangkat-module").then(__webpack_require__.bind(null, /*! ./pengaturan/pangkat/pangkat.module */ "./src/app/pages/hr/company/pengaturan/pangkat/pangkat.module.ts")).then(function (mo) { return mo.PangkatModule; }); }
            },
            {
                path: "divisi",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-divisi-divisi-module */ "pengaturan-divisi-divisi-module").then(__webpack_require__.bind(null, /*! ./pengaturan/divisi/divisi.module */ "./src/app/pages/hr/company/pengaturan/divisi/divisi.module.ts")).then(function (mo) { return mo.DivisiModule; }); }
            },
            {
                path: "departement",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-departement-departement-module */ "pengaturan-departement-departement-module").then(__webpack_require__.bind(null, /*! ./pengaturan/departement/departement.module */ "./src/app/pages/hr/company/pengaturan/departement/departement.module.ts")).then(function (mo) { return mo.DepartementModule; }); }
            },
            {
                path: "grade",
                loadChildren: function () { return __webpack_require__.e(/*! import() | pengaturan-grade-grade-module */ "pengaturan-grade-grade-module").then(__webpack_require__.bind(null, /*! ./pengaturan/grade/grade.module */ "./src/app/pages/hr/company/pengaturan/grade/grade.module.ts")).then(function (mo) { return mo.GradeModule; }); }
            },
            {
                path: "pengumuman",
                loadChildren: function () { return Promise.all(/*! import() | pengumuman-pengumuman-module */[__webpack_require__.e("common"), __webpack_require__.e("pengumuman-pengumuman-module")]).then(__webpack_require__.bind(null, /*! ./pengumuman/pengumuman.module */ "./src/app/pages/hr/company/pengumuman/pengumuman.module.ts")).then(function (mo) { return mo.PengumumanModule; }); }
            },
            {
                path: "lisensi",
                loadChildren: function () { return __webpack_require__.e(/*! import() | lisensi-lisensi-module */ "lisensi-lisensi-module").then(__webpack_require__.bind(null, /*! ./lisensi/lisensi.module */ "./src/app/pages/hr/company/lisensi/lisensi.module.ts")).then(function (mo) { return mo.LisensiModule; }); }
            },
            {
                path: "legal",
                loadChildren: function () { return __webpack_require__.e(/*! import() | legal-legal-module */ "legal-legal-module").then(__webpack_require__.bind(null, /*! ./legal/legal.module */ "./src/app/pages/hr/company/legal/legal.module.ts")).then(function (mo) { return mo.LegalModule; }); }
            },
            {
                path: "event",
                loadChildren: function () { return Promise.all(/*! import() | event-event-module */[__webpack_require__.e("common"), __webpack_require__.e("event-event-module")]).then(__webpack_require__.bind(null, /*! ./event/event.module */ "./src/app/pages/hr/company/event/event.module.ts")).then(function (mo) { return mo.EventModule; }); }
            },
            {
                path: "perusahaan",
                loadChildren: function () { return Promise.all(/*! import() | perusahaan-perusahaan-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("perusahaan-perusahaan-module")]).then(__webpack_require__.bind(null, /*! ./perusahaan/perusahaan.module */ "./src/app/pages/hr/company/perusahaan/perusahaan.module.ts")).then(function (mo) { return mo.PerusahaanModule; }); }
            },
            {
                path: "letters",
                loadChildren: function () { return __webpack_require__.e(/*! import() | letters-letters-module */ "letters-letters-module").then(__webpack_require__.bind(null, /*! ./letters/letters.module */ "./src/app/pages/hr/company/letters/letters.module.ts")).then(function (mo) { return mo.LettersModule; }); }
            },
        ]
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/company/company.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/hr/company/company.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/company/company.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hr/company/company.component.ts ***!
  \*******************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(store, menuService) {
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
    CompanyComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Company',
                key: 'perusahaan',
                icon: 'fe fe-home',
                url: 'perusahaan',
            },
            {
                title: 'Settings',
                key: 'pengaturan',
                icon: 'fe fe-settings',
                count: 6,
                children: [
                    {
                        title: 'Offices',
                        key: 'kantor',
                        url: '/hr/company/module/kantor',
                    },
                    {
                        title: 'Departments',
                        key: 'departement',
                        url: '/hr/company/module/departement',
                    },
                    {
                        title: 'Divisions',
                        key: 'divisi',
                        url: '/hr/company/module/divisi',
                    },
                    {
                        title: 'Positions',
                        key: 'jabatan',
                        url: '/hr/company/module/jabatan',
                    },
                    {
                        title: 'Job Grade +',
                        key: 'pangkat',
                        url: '/hr/company/module/pangkat',
                    }
                ],
            },
            // {
            //     category: true,
            //     title: 'Components',
            // },
            {
                title: 'announcements',
                key: 'pengumuman',
                icon: 'fe fe-mic',
                url: '/hr/company/module/pengumuman',
            },
            {
                title: 'events',
                key: 'event',
                icon: 'fe fe-calendar',
                url: '/hr/company/module/event',
            },
            {
                title: 'legal Documents',
                key: 'legal',
                icon: 'fe fe-file',
                url: '/hr/company/module/legal',
            },
            {
                title: 'Certificates',
                key: 'lisensi',
                icon: 'fe fe-award',
                url: '/hr/company/module/lisensi',
            },
            //{
            //    title: 'Letters',
            //    key: 'Letters',
            //    icon: 'fe fe-award',
            //    url: '/hr/company/module/lisensi',
            //},
            {
                title: 'Company Letters',
                key: 'letters',
                icon: 'fe fe-file-text',
                url: '/hr/company/module/letters',
            },
        ];
        this.menuService.menu.next(this.menuData);
    };
    CompanyComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    CompanyComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/company/company.component.html"),
            animations: [_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideFadeinUp"], _layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideFadeinRight"], _layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_1__["zoomFadein"], _layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_1__["fadein"]],
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/pages/hr/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/company/company.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/hr/company/company.module.ts ***!
  \****************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/pages/hr/company/company-routing.module.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.component */ "./src/app/pages/hr/company/company.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");









var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            ],
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map