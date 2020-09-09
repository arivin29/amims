(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/employee.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/employee.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/employee-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/employee-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/pages/hr/direktori/employee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'pegawai'
            },
            {
                path: 'pegawai',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pegawai-pegawai-module */ "pegawai-pegawai-module").then(__webpack_require__.bind(null, /*! ./pegawai/pegawai.module */ "./src/app/pages/hr/direktori/employee/pegawai/pegawai.module.ts")).then(function (mo) { return mo.PegawaiModule; }); }
            },
            {
                path: 'permintaan-pegawai',
                loadChildren: function () { return Promise.all(/*! import() | permintaan-pegawai-permintaan-pegawai-module */[__webpack_require__.e("common"), __webpack_require__.e("permintaan-pegawai-permintaan-pegawai-module")]).then(__webpack_require__.bind(null, /*! ./permintaan-pegawai/permintaan-pegawai.module */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai.module.ts")).then(function (mo) { return mo.PermintaanPegawaiModule; }); }
            },
            {
                path: 'pegawai-detail/:id_pegawai',
                loadChildren: function () { return Promise.all(/*! import() | pegawi-detail-pegawi-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pegawi-detail-pegawi-detail-module")]).then(__webpack_require__.bind(null, /*! ./pegawi-detail/pegawi-detail.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pegawi-detail.module.ts")).then(function (mo) { return mo.PegawiDetailModule; }); }
            },
            {
                path: 'pelamar',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pelamar-pelamar-module */ "pelamar-pelamar-module").then(__webpack_require__.bind(null, /*! ./pelamar/pelamar.module */ "./src/app/pages/hr/direktori/employee/pelamar/pelamar.module.ts")).then(function (mod) { return mod.PelamarModule; });
                },
            },
            {
                path: 'detail-pelamar/:id_pelamar',
                loadChildren: function () {
                    return Promise.all(/*! import() | detail-pelamar-detail-pelamar-module */[__webpack_require__.e("common"), __webpack_require__.e("detail-pelamar-detail-pelamar-module")]).then(__webpack_require__.bind(null, /*! ./detail-pelamar/detail-pelamar.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.module.ts")).then(function (mod) { return mod.DetailPelamarModule; });
                },
            },
        ]
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/employee.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/employee.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/employee.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/employee.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__["getSettings"])).subscribe(function (state) {
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
    EmployeeComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'All Employee',
                key: 'staf',
                icon: 'fe  fe-users',
                url: '/hr/direktori/employee/pegawai/list/all',
            },
            {
                category: true,
                title: 'Status',
            },
            {
                title: 'Full time',
                key: 'fulltime',
                icon: 'fe fe-user-check',
                url: '/hr/direktori/employee/pegawai/list/1',
            },
            {
                title: 'Contract',
                key: 'kontrak',
                icon: 'fe fe-user-check',
                url: '/hr/direktori/employee/pegawai/list/2',
            },
            {
                title: 'Inactive',
                key: 'mantan',
                icon: 'fe fe-user-x',
                url: '/hr/direktori/employee/pegawai/list/4-5-6-7',
            },
            {
                category: true,
                title: 'Requirement',
            },
            {
                title: 'Applicants',
                key: 'pelamar',
                icon: 'fe fe-user-plus',
                url: '/hr/direktori/employee/pelamar',
            },
            {
                title: 'Manage Jobs',
                key: 'permintaan-pegawai',
                icon: 'fe fe-briefcase',
                url: '/hr/direktori/employee/permintaan-pegawai',
            }
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Direktori' });
    };
    EmployeeComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
    ]; };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/pages/hr/direktori/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/employee.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/employee.module.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/pages/hr/direktori/employee/employee-routing.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee.component */ "./src/app/pages/hr/direktori/employee/employee.component.ts");









var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            ],
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map