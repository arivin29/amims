(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-asset-asset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/list/list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">LIST : {{partId ?.part_id}}</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" routerLinkActive=\"router-link-active\">\r\n                FIlter\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <!-- <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\"> -->\r\n                        <input nz-input placeholder=\"Search\" [(ngModel)]=\"search\" />\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n                        <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n                        <th>SN</th>\r\n                        <th nzShowSort nzSortKey=\"qty\">Qty</th>\r\n                        <!-- <th>Number PO</th> -->\r\n                        <th>Date Purchase</th>\r\n                        <th>Location</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td [style.border-left]=\"'4px solid ' + data.color\">{{ data.status }}</td>\r\n                        <td>{{ data.keyword }}</td>\r\n                        <td>{{ data.part_number }}</td>\r\n                        <td>{{ data.sn }}</td>\r\n                        <td>{{ data.qty }} {{ data.unit }}</td>\r\n                        <!-- <td>{{ data.purchase_number }}</td> -->\r\n                        <td>{{ data.purchase_date |date}}</td>\r\n                        <td>{{ data.location }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" [nzPlacement]=\"'bottomRight'\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../../detail',data.id_asset]\"> <i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i>Asset Detail </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item [routerLink]=\"['../../model',data.id_model]\"> <i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i>Model Detail </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/asset-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/asset/asset-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AssetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function() { return AssetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _asset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset.component */ "./src/app/pages/asset/asset.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/list/list.component.ts");





var routes = [
    {
        path: '',
        component: _asset_component__WEBPACK_IMPORTED_MODULE_1__["AssetComponent"],
        children: [
            {
                path: 'model/:id_model',
                loadChildren: function () {
                    return Promise.all(/*! import() | model-detail-model-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("model-detail-model-detail-module")]).then(__webpack_require__.bind(null, /*! ./model-detail/model-detail.module */ "./src/app/pages/asset/model-detail/model-detail.module.ts")).then(function (mo) { return mo.ModelDetailModule; });
                },
            },
            {
                path: 'list/:id_part_id',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
            },
            {
                path: 'detail/:id_asset',
                loadChildren: function () {
                    return Promise.all(/*! import() | asset-detail-asset-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("asset-detail-asset-detail-module")]).then(__webpack_require__.bind(null, /*! ./asset-detail/asset-detail.module */ "./src/app/pages/asset/asset-detail/asset-detail.module.ts")).then(function (mo) { return mo.AssetDetailModule; });
                },
            },
            {
                path: 'transaction',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | transaction-transaction-module */ "transaction-transaction-module").then(__webpack_require__.bind(null, /*! ./transaction/transaction.module */ "./src/app/pages/asset/transaction/transaction.module.ts")).then(function (mo) { return mo.TransactionModule; });
                },
            },
            {
                path: 'archived',
                loadChildren: function () {
                    return Promise.all(/*! import() | archived-archived-module */[__webpack_require__.e("common"), __webpack_require__.e("archived-archived-module")]).then(__webpack_require__.bind(null, /*! ./archived/archived.module */ "./src/app/pages/asset/archived/archived.module.ts")).then(function (mo) { return mo.ArchivedModule; });
                },
            }
        ],
    },
    {
        path: 'master',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | master-master-module */ "master-master-module").then(__webpack_require__.bind(null, /*! ./master/master.module */ "./src/app/pages/asset/master/master.module.ts")).then(function (mo) { return mo.MasterModule; });
        },
    },
    {
        path: 'management',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | management-management-module */ "management-management-module").then(__webpack_require__.bind(null, /*! ./management/management.module */ "./src/app/pages/asset/management/management.module.ts")).then(function (mo) { return mo.ManagementModule; });
        },
    },
    {
        path: 'maintenance',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | maintenance-maintenance-module */ "maintenance-maintenance-module").then(__webpack_require__.bind(null, /*! ./maintenance/maintenance.module */ "./src/app/pages/asset/maintenance/maintenance.module.ts")).then(function (mo) { return mo.MaintenanceModule; });
        },
    },
];
var AssetRoutingModule = /** @class */ (function () {
    function AssetRoutingModule() {
    }
    AssetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], AssetRoutingModule);
    return AssetRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/asset/asset.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/asset.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/asset/asset.component.ts ***!
  \************************************************/
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
                title: 'Transactions',
                key: 'masuk',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'In',
                        key: 'transaction_checkin',
                        icon: 'fe fe-bookmark',
                        url: 'transaction/checkin',
                    },
                    {
                        title: 'Out',
                        key: 'transaction_checkout',
                        icon: 'fe fe-bookmark',
                        url: 'transaction/checkout',
                    },
                ],
            },
            {
                title: 'Assets',
                key: 'Assets',
                icon: 'fe fe-bookmark',
                url: 'list/asset',
            },
            {
                title: 'Component',
                key: 'Component',
                icon: 'fe fe-bookmark',
                url: 'list/componen',
            },
            {
                title: 'Licensi',
                key: 'Licensi',
                icon: 'fe fe-bookmark',
                url: 'list/license',
            },
            {
                title: 'Consumable',
                key: 'Consumable',
                icon: 'fe fe-bookmark',
                url: 'list/consumable',
            },
            {
                title: 'Voucher (tiket,hotel,dll)',
                key: 'voucher',
                icon: 'fe fe-bookmark',
                url: 'list/voucher',
            },
            {
                title: 'Account',
                key: 'account',
                icon: 'fe fe-bookmark',
                url: 'list/account',
            },
        ];
        this.menuService.menu.next(this.menuData);
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
            template: __webpack_require__(/*! raw-loader!./asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./asset.component.scss */ "./src/app/pages/asset/asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/asset/asset.module.ts ***!
  \*********************************************/
/*! exports provided: AssetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetModule", function() { return AssetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asset_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-routing.module */ "./src/app/pages/asset/asset-routing.module.ts");
/* harmony import */ var _asset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset.component */ "./src/app/pages/asset/asset.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_sdk_asset_api_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sdk/asset/api.module */ "./src/app/sdk/asset/api.module.ts");
/* harmony import */ var src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sdk/hr/api.module */ "./src/app/sdk/hr/api.module.ts");
/* harmony import */ var src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/sdk/user/api.module */ "./src/app/sdk/user/api.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");

















var AssetModule = /** @class */ (function () {
    function AssetModule() {
    }
    AssetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_asset_component__WEBPACK_IMPORTED_MODULE_5__["AssetComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _asset_routing_module__WEBPACK_IMPORTED_MODULE_4__["AssetRoutingModule"],
                src_app_sdk_asset_api_module__WEBPACK_IMPORTED_MODULE_11__["ApiModule"].forRoot({ rootUrl: 'http://erp-asset.vm.devetek.com/api' }),
                src_app_sdk_hr_api_module__WEBPACK_IMPORTED_MODULE_12__["ApiModule"].forRoot({ rootUrl: 'https://erp-etos.devetek.site:8443/hr/api' }),
                src_app_sdk_user_api_module__WEBPACK_IMPORTED_MODULE_13__["ApiModule"].forRoot({ rootUrl: 'https://erp-etos.devetek.site:8443/hr/api' }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_15__["SearchItemModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__["PipeModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], AssetModule);
    return AssetModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/list/list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/asset/list/list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/list/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/asset/list/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(assetAssetService, assetPartIdService, nzMessageService, spinner, activeRouter) {
        this.assetAssetService = assetAssetService;
        this.assetPartIdService = assetPartIdService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.activeRouter = activeRouter;
        this.partId = {};
        this.id_part_id = '';
        this.filter = {};
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (data) {
            console.log(data.get('id_part_id'));
            _this.filter.id_part_id = null;
            _this.id_part_id = null;
            if (data.get('id_part_id')) {
                _this.id_part_id = data.get('id_part_id');
                _this.filter.id_part_id = _this.id_part_id;
                _this.searchData();
                _this.getPartId();
            }
        });
    };
    ListComponent.prototype.getPartId = function () {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(this.id_part_id).subscribe(function (data) {
            _this.partId = data.data;
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        this.spinner.show();
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetAssetService
            .getAssetAssets(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search, id_part_id: this.id_part_id
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/asset/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-asset-asset-module.js.map