(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/management.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/management.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/management/management-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/management/management-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management.component */ "./src/app/pages/asset/management/management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _management_component__WEBPACK_IMPORTED_MODULE_1__["ManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'ticket'
            },
            {
                path: 'ticket',
                loadChildren: function () { return Promise.all(/*! import() | ticket-ticket-module */[__webpack_require__.e("common"), __webpack_require__.e("ticket-ticket-module")]).then(__webpack_require__.bind(null, /*! ./ticket/ticket.module */ "./src/app/pages/asset/management/ticket/ticket.module.ts")).then(function (m) { return m.TicketModule; }); }
            },
            {
                path: 'purchase',
                loadChildren: function () { return Promise.all(/*! import() | purchase-purchase-module */[__webpack_require__.e("common"), __webpack_require__.e("purchase-purchase-module")]).then(__webpack_require__.bind(null, /*! ./purchase/purchase.module */ "./src/app/pages/asset/management/purchase/purchase.module.ts")).then(function (m) { return m.PurchaseModule; }); }
            },
            {
                path: 'request',
                loadChildren: function () { return Promise.all(/*! import() | request-request-module */[__webpack_require__.e("common"), __webpack_require__.e("request-request-module")]).then(__webpack_require__.bind(null, /*! ./request/request.module */ "./src/app/pages/asset/management/request/request.module.ts")).then(function (m) { return m.RequestModule; }); }
            },
            {
                path: 'received',
                loadChildren: function () { return __webpack_require__.e(/*! import() | received-received-module */ "received-received-module").then(__webpack_require__.bind(null, /*! ./received/received.module */ "./src/app/pages/asset/management/received/received.module.ts")).then(function (m) { return m.ReceivedModule; }); }
            },
            {
                path: 'issued',
                loadChildren: function () { return Promise.all(/*! import() | issued-issued-module */[__webpack_require__.e("common"), __webpack_require__.e("issued-issued-module")]).then(__webpack_require__.bind(null, /*! ./issued/issued.module */ "./src/app/pages/asset/management/issued/issued.module.ts")).then(function (m) { return m.IssuedModule; }); }
            }
        ]
    }
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/management.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/management/management.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/management/management.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/asset/management/management.component.ts ***!
  \****************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");






var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(store, menuService) {
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
    ManagementComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Complaints',
                key: 'ticket',
                icon: 'fe fe-bookmark',
                url: 'ticket',
            },
            {
                category: true,
                title: 'Purchase',
            },
            // {
            //     title: 'Request',
            //     key: 'request',
            //     icon: 'fe fe-bookmark',
            //     url: 'request',
            // },
            {
                title: 'Purchase Order',
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
                category: true,
                title: 'Store',
            },
            // {
            //     title: 'Transfer',
            //     key: 'received',
            //     icon: 'fe fe-bookmark',
            //     url: 'received',
            // },
            {
                title: 'Issued',
                key: 'issued',
                icon: 'fe fe-bookmark',
                url: 'issued',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'ASSET', child: 'Management' });
    };
    ManagementComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    ManagementComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
    ]; };
    ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/management.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_5__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_5__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_5__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_5__["fadein"]],
            styles: [__webpack_require__(/*! ./management.component.scss */ "./src/app/pages/asset/management/management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/management.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/asset/management/management.module.ts ***!
  \*************************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management-routing.module */ "./src/app/pages/asset/management/management-routing.module.ts");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./management.component */ "./src/app/pages/asset/management/management.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");










var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_management_component__WEBPACK_IMPORTED_MODULE_5__["ManagementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _management_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManagementRoutingModule"],
                _components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_8__["ApiModule"].forRoot({ rootUrl: 'http://erp-asset.vm.devetek.com/api' }),
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_9__["SearchItemModule"]
            ]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=management-management-module.js.map