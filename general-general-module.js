(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-general-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/general.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/general/general.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/general-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/general-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general.component */ "./src/app/pages/hr/direktori/general/general.component.ts");




var routes = [
    {
        path: '',
        component: _general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"],
        children: [
            {
                path: 'anggaran',
                loadChildren: function () { return Promise.all(/*! import() | anggaran-anggaran-module */[__webpack_require__.e("default~anggaran-anggaran-module~asset-asset-module~complaints-complaints-module~expeses-summary-exp~100adfcb"), __webpack_require__.e("common"), __webpack_require__.e("anggaran-anggaran-module")]).then(__webpack_require__.bind(null, /*! ./anggaran/anggaran.module */ "./src/app/pages/hr/direktori/general/anggaran/anggaran.module.ts")).then(function (mo) { return mo.AnggaranModule; }); }
            },
            {
                path: 'proyek',
                loadChildren: function () { return Promise.all(/*! import() | proyek-proyek-module */[__webpack_require__.e("common"), __webpack_require__.e("proyek-proyek-module")]).then(__webpack_require__.bind(null, /*! ./proyek/proyek.module */ "./src/app/pages/hr/direktori/general/proyek/proyek.module.ts")).then(function (mo) { return mo.ProyekModule; }); }
            },
        ]
    }
];
var GeneralRoutingModule = /** @class */ (function () {
    function GeneralRoutingModule() {
    }
    GeneralRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GeneralRoutingModule);
    return GeneralRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/general.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/general.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9nZW5lcmFsL2dlbmVyYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/general.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/general.component.ts ***!
  \*****************************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var GeneralComponent = /** @class */ (function () {
    function GeneralComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getSettings"])).subscribe(function (state) {
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
    GeneralComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Budget',
                key: 'anggaran',
                icon: 'fe fe-bookmark',
                url: 'anggaran',
            },
            {
                title: 'Project',
                key: 'proyek',
                icon: 'fe fe-bookmark',
                url: 'proyek',
            },
            {
                title: 'File Management',
                key: 'file',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/general/file',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HRD', child: 'General' });
    };
    GeneralComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    GeneralComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general',
            template: __webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/general.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/pages/hr/direktori/general/general.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], GeneralComponent);
    return GeneralComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/general.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/general.module.ts ***!
  \**************************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _general_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-routing.module */ "./src/app/pages/hr/direktori/general/general-routing.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general.component */ "./src/app/pages/hr/direktori/general/general.component.ts");









var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _general_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            ]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ })

}]);
//# sourceMappingURL=general-general-module.js.map