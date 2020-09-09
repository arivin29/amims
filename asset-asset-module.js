(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/asset.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/asset.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div [@slideFadeinUp]=\"routeAnimation(outletModule, 'slideFadeinUp')\" [@slideFadeinRight]=\"routeAnimation(outletModule, 'slideFadeinRight')\" [@zoomFadein]=\"routeAnimation(outletModule, 'zoomFadein')\" [@fadein]=\"routeAnimation(outletModule, 'fadein')\">\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>"

/***/ }),

/***/ "./src/app/pages/ga/asset/asset-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ga/asset/asset-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AssetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function() { return AssetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _asset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset.component */ "./src/app/pages/ga/asset/asset.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        redirectTo: 'module/dashboard'
    },
    {
        path: 'module',
        component: _asset_component__WEBPACK_IMPORTED_MODULE_1__["AssetComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/ga/asset/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'purchase',
                loadChildren: function () { return Promise.all(/*! import() | purchase-purchase-module */[__webpack_require__.e("common"), __webpack_require__.e("purchase-purchase-module")]).then(__webpack_require__.bind(null, /*! ./purchase/purchase.module */ "./src/app/pages/ga/asset/purchase/purchase.module.ts")).then(function (m) { return m.PurchaseModule; }); }
            },
            {
                path: 'received',
                loadChildren: function () { return __webpack_require__.e(/*! import() | received-received-module */ "received-received-module").then(__webpack_require__.bind(null, /*! ./received/received.module */ "./src/app/pages/ga/asset/received/received.module.ts")).then(function (m) { return m.ReceivedModule; }); }
            },
            {
                path: 'request',
                loadChildren: function () { return Promise.all(/*! import() | request-request-module */[__webpack_require__.e("common"), __webpack_require__.e("request-request-module")]).then(__webpack_require__.bind(null, /*! ./request/request.module */ "./src/app/pages/ga/asset/request/request.module.ts")).then(function (m) { return m.RequestModule; }); }
            },
            {
                path: 'ticket',
                loadChildren: function () { return Promise.all(/*! import() | ticket-ticket-module */[__webpack_require__.e("common"), __webpack_require__.e("ticket-ticket-module")]).then(__webpack_require__.bind(null, /*! ./ticket/ticket.module */ "./src/app/pages/ga/asset/ticket/ticket.module.ts")).then(function (m) { return m.TicketModule; }); }
            }
        ]
    }
];
var AssetRoutingModule = /** @class */ (function () {
    function AssetRoutingModule() {
    }
    AssetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AssetRoutingModule);
    return AssetRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/asset.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ga/asset/asset.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/asset/asset.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ga/asset/asset.component.ts ***!
  \***************************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var AssetComponent = /** @class */ (function () {
    function AssetComponent(store, menuService) {
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
    AssetComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Dashboard',
                key: 'dashboard',
                icon: 'fe fe-bookmark',
                url: 'dashboard',
            },
            {
                title: 'Assets',
                key: 'Assets',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'All',
                        key: 'item/all',
                        url: 'item/all',
                    },
                    {
                        title: 'Serviceable',
                        key: 'item/Serviceable',
                        url: 'item/serviceable',
                    },
                    {
                        title: 'Unserviceable',
                        key: 'item/Unserviceable',
                        url: 'item/unserviceable',
                    },
                    {
                        title: 'Pending',
                        key: 'item/Pending',
                        url: 'item/pending',
                    },
                    {
                        title: 'Archived',
                        key: 'item/Archived',
                        url: 'item/archived',
                    },
                ],
            },
            {
                title: 'Maintenace',
                key: 'Maintenace',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'Service',
                        key: 'item/all',
                        url: 'item/all',
                    },
                    {
                        title: 'Inspection',
                        key: 'item/Serviceable',
                        url: 'item/serviceable',
                    },
                    {
                        title: 'Repair',
                        key: 'item/Unserviceable',
                        url: 'item/unserviceable',
                    },
                    {
                        title: 'Upgrade',
                        key: 'item/Pending',
                        url: 'item/pending',
                    },
                    {
                        title: 'Calibration',
                        key: 'item/Archived',
                        url: 'item/archived',
                    },
                ],
            },
            {
                title: 'Complain',
                key: 'ticket',
                icon: 'fe fe-bookmark',
                url: 'ticket',
            },
            {
                title: 'Purchase',
                key: 'purchase',
                icon: 'fe fe-bookmark',
                url: 'purchase',
            },
            {
                title: 'Received',
                key: 'received',
                icon: 'fe fe-bookmark',
                url: 'received',
            },
            {
                title: 'Request',
                key: 'request',
                icon: 'fe fe-bookmark',
                url: 'request',
            }
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Asset' });
    };
    AssetComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    AssetComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    AssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! raw-loader!./asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/asset.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./asset.component.scss */ "./src/app/pages/ga/asset/asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/asset.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/ga/asset/asset.module.ts ***!
  \************************************************/
/*! exports provided: AssetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetModule", function() { return AssetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asset_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-routing.module */ "./src/app/pages/ga/asset/asset-routing.module.ts");
/* harmony import */ var _asset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset.component */ "./src/app/pages/ga/asset/asset.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_sdk_asset_api_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/asset/api.module */ "./src/app/sdk/asset/api.module.ts");
/* harmony import */ var src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sdk/hr/api.module */ "./src/app/sdk/hr/api.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");












var AssetModule = /** @class */ (function () {
    function AssetModule() {
    }
    AssetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_asset_component__WEBPACK_IMPORTED_MODULE_4__["AssetComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _asset_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                src_app_sdk_asset_api_module__WEBPACK_IMPORTED_MODULE_9__["ApiModule"].forRoot({ rootUrl: 'http://erp-asset.vm.devetek.com/api' }),
                src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_10__["ApiModule"].forRoot({ rootUrl: 'http://erp-hr.vm.devetek.com/api' }),
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_11__["SearchItemModule"]
            ]
        })
    ], AssetModule);
    return AssetModule;
}());



/***/ })

}]);
//# sourceMappingURL=asset-asset-module.js.map