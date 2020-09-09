(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["development-development-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/development.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/development/development.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/development-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/development-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DevelopmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentRoutingModule", function() { return DevelopmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _development_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./development.component */ "./src/app/pages/hr/direktori/development/development.component.ts");




var routes = [
    {
        path: '',
        component: _development_component__WEBPACK_IMPORTED_MODULE_3__["DevelopmentComponent"],
        children: [
            {
                path: '',
                redirectTo: 'training'
            },
            {
                path: 'training',
                loadChildren: function () { return Promise.all(/*! import() | training-training-module */[__webpack_require__.e("common"), __webpack_require__.e("training-training-module")]).then(__webpack_require__.bind(null, /*! ./training/training.module */ "./src/app/pages/hr/direktori/development/training/training.module.ts")).then(function (mo) { return mo.TrainingModule; }); }
            },
            {
                path: 'lisensi',
                loadChildren: function () { return __webpack_require__.e(/*! import() | lisensi-lisensi-module */ "lisensi-lisensi-module").then(__webpack_require__.bind(null, /*! ./lisensi/lisensi.module */ "./src/app/pages/hr/direktori/development/lisensi/lisensi.module.ts")).then(function (mo) { return mo.LisensiModule; }); }
            },
            {
                path: 'proyek',
                loadChildren: function () { return Promise.all(/*! import() | proyek-proyek-module */[__webpack_require__.e("common"), __webpack_require__.e("proyek-proyek-module")]).then(__webpack_require__.bind(null, /*! ./proyek/proyek.module */ "./src/app/pages/hr/direktori/development/proyek/proyek.module.ts")).then(function (mo) { return mo.ProyekModule; }); }
            },
        ]
    }
];
var DevelopmentRoutingModule = /** @class */ (function () {
    function DevelopmentRoutingModule() {
    }
    DevelopmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevelopmentRoutingModule);
    return DevelopmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/development.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/development.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kZXZlbG9wbWVudC9kZXZlbG9wbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/development.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/development.component.ts ***!
  \*************************************************************************/
/*! exports provided: DevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentComponent", function() { return DevelopmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var DevelopmentComponent = /** @class */ (function () {
    function DevelopmentComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_1__["getSettings"])).subscribe(function (state) {
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
    DevelopmentComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Training',
                key: 'Training',
                icon: 'fe fe-bookmark',
                children: [
                    {
                        title: 'Training Schedule',
                        key: 'schedule',
                        icon: 'fe fe-bookmark',
                        url: 'training/scedule',
                    },
                    {
                        title: 'List of Training',
                        key: 'schedule',
                        icon: 'fe fe-bookmark',
                        url: 'training',
                    },
                ]
            },
            {
                title: 'Project',
                key: 'proyek',
                icon: 'fe fe-bookmark',
                url: 'proyek',
            },
            {
                title: 'License',
                key: 'lisensi',
                icon: 'fe fe-bookmark',
                url: 'lisensi',
            },
            {
                title: 'File Management',
                key: 'kontrak',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/general/file',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Direktori' });
    };
    DevelopmentComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    DevelopmentComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    DevelopmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-development',
            template: __webpack_require__(/*! raw-loader!./development.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/development.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./development.component.scss */ "./src/app/pages/hr/direktori/development/development.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], DevelopmentComponent);
    return DevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/development.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/development.module.ts ***!
  \**********************************************************************/
/*! exports provided: DevelopmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentModule", function() { return DevelopmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _development_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./development-routing.module */ "./src/app/pages/hr/direktori/development/development-routing.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _development_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./development.component */ "./src/app/pages/hr/direktori/development/development.component.ts");









var DevelopmentModule = /** @class */ (function () {
    function DevelopmentModule() {
    }
    DevelopmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_development_component__WEBPACK_IMPORTED_MODULE_8__["DevelopmentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _development_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevelopmentRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            ]
        })
    ], DevelopmentModule);
    return DevelopmentModule;
}());



/***/ })

}]);
//# sourceMappingURL=development-development-module.js.map