(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/maintenance.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/maintenance.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div [@slideFadeinUp]=\"routeAnimation(outletModule, 'slideFadeinUp')\" [@slideFadeinRight]=\"routeAnimation(outletModule, 'slideFadeinRight')\" [@zoomFadein]=\"routeAnimation(outletModule, 'zoomFadein')\" [@fadein]=\"routeAnimation(outletModule, 'fadein')\">\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/maintenance-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/maintenance-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.component */ "./src/app/pages/asset/maintenance/maintenance.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _maintenance_component__WEBPACK_IMPORTED_MODULE_1__["MaintenanceComponent"],
        children: [
            {
                path: 'repair',
                loadChildren: function () {
                    return Promise.all(/*! import() | repair-repair-module */[__webpack_require__.e("common"), __webpack_require__.e("repair-repair-module")]).then(__webpack_require__.bind(null, /*! ./repair/repair.module */ "./src/app/pages/asset/maintenance/repair/repair.module.ts")).then(function (mo) { return mo.RepairModule; });
                },
            },
        ]
    }
];
var MaintenanceRoutingModule = /** @class */ (function () {
    function MaintenanceRoutingModule() {
    }
    MaintenanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], MaintenanceRoutingModule);
    return MaintenanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/maintenance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/maintenance.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL21haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/maintenance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/maintenance.component.ts ***!
  \******************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(store, menuService) {
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
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                category: true,
                title: 'Maintenance',
            },
            {
                title: 'Service',
                key: 'item/all',
                icon: 'fe fe-bookmark',
                url: 'item/all',
            },
            {
                title: 'Inspection',
                key: 'item/Serviceable',
                icon: 'fe fe-bookmark',
                url: 'item/serviceable',
            },
            {
                title: 'Repair',
                key: 'repair',
                icon: 'fe fe-bookmark',
                url: 'repair',
            },
            {
                title: 'Upgrade',
                key: 'item/Pending',
                icon: 'fe fe-bookmark',
                url: 'item/pending',
            },
            {
                title: 'Calibration',
                key: 'item/Archived',
                icon: 'fe fe-bookmark',
                url: 'item/archived',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Asset' });
    };
    MaintenanceComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    MaintenanceComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    MaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! raw-loader!./maintenance.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/maintenance.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./maintenance.component.scss */ "./src/app/pages/asset/maintenance/maintenance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/maintenance.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/maintenance.module.ts ***!
  \***************************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/pages/asset/maintenance/maintenance-routing.module.ts");
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maintenance.component */ "./src/app/pages/asset/maintenance/maintenance.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");









var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["MaintenanceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_7__["ApiModule"].forRoot({ rootUrl: 'http://erp-asset.vm.devetek.com/api' }),
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_8__["SearchItemModule"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-maintenance-module.js.map