(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-master-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/master.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/master/master.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/master/master-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/asset/master/master-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.component */ "./src/app/pages/asset/master/master.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: "",
        component: _master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"],
        children: [
            {
                path: "",
                redirectTo: "model"
            },
            {
                path: 'category',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/pages/asset/master/category/category.module.ts")).then(function (mo) { return mo.CategoryModule; });
                },
            },
            {
                path: 'model',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | model-model-module */ "model-model-module").then(__webpack_require__.bind(null, /*! ./model/model.module */ "./src/app/pages/asset/master/model/model.module.ts")).then(function (mo) { return mo.ModelModule; });
                },
            },
            {
                path: 'owner',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | owner-owner-module */ "owner-owner-module").then(__webpack_require__.bind(null, /*! ./owner/owner.module */ "./src/app/pages/asset/master/owner/owner.module.ts")).then(function (mo) { return mo.OwnerModule; });
                },
            },
            {
                path: 'status',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | status-status-module */ "status-status-module").then(__webpack_require__.bind(null, /*! ./status/status.module */ "./src/app/pages/asset/master/status/status.module.ts")).then(function (mo) { return mo.StatusModule; });
                },
            },
            {
                path: 'maintenance-code',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | maintenance-code-maintenance-code-module */ "maintenance-code-maintenance-code-module").then(__webpack_require__.bind(null, /*! ./maintenance-code/maintenance-code.module */ "./src/app/pages/asset/master/maintenance-code/maintenance-code.module.ts")).then(function (mo) { return mo.MaintenanceCodeModule; });
                },
            },
        ]
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/master.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/asset/master/master.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/master/master.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/asset/master/master.component.ts ***!
  \********************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var MasterComponent = /** @class */ (function () {
    function MasterComponent(store, menuService) {
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
    MasterComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                category: true,
                title: 'Maintenance',
            },
            {
                title: 'Status',
                key: 'master/status',
                icon: 'fe fe-bookmark',
                url: 'status',
            },
            {
                title: 'Model',
                key: 'model',
                icon: 'fe fe-bookmark',
                url: 'model',
            },
            {
                title: 'Maintenance Code',
                key: 'maintenance-code',
                icon: 'fe fe-bookmark',
                url: 'maintenance-code',
            },
            {
                title: 'Owner',
                key: 'owner',
                icon: 'fe fe-bookmark',
                url: 'owner',
            },
            {
                title: 'category',
                key: 'owner',
                icon: 'fe fe-bookmark',
                url: 'category',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'ASSET', child: 'Libray' });
    };
    MasterComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    MasterComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/master.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/pages/asset/master/master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/master.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/asset/master/master.module.ts ***!
  \*****************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/pages/asset/master/master-routing.module.ts");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master.component */ "./src/app/pages/asset/master/master.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");









var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_master_component__WEBPACK_IMPORTED_MODULE_4__["MasterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _master_routing_module__WEBPACK_IMPORTED_MODULE_3__["MasterRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_7__["ApiModule"].forRoot({ rootUrl: 'http://erp-asset.vm.devetek.com/api' }),
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_8__["SearchItemModule"]
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-master-module.js.map