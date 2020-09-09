(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrmanagement-hrmanagement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/hrmanagement/hrmanagement-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: HrmanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmanagementRoutingModule", function() { return HrmanagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hrmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hrmanagement.component */ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.ts");




var routes = [
    {
        path: '',
        component: _hrmanagement_component__WEBPACK_IMPORTED_MODULE_3__["HrmanagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'notes',
                pathMatch: 'full'
            },
            {
                path: 'notes',
                loadChildren: function () { return Promise.all(/*! import() | notes-notes-module */[__webpack_require__.e("common"), __webpack_require__.e("notes-notes-module")]).then(__webpack_require__.bind(null, /*! ./notes/notes.module */ "./src/app/pages/hr/direktori/hrmanagement/notes/notes.module.ts")).then(function (mo) { return mo.NotesModule; }); }
            },
            {
                path: 'peringatan',
                loadChildren: function () { return Promise.all(/*! import() | peringatan-peringatan-module */[__webpack_require__.e("common"), __webpack_require__.e("peringatan-peringatan-module")]).then(__webpack_require__.bind(null, /*! ./peringatan/peringatan.module */ "./src/app/pages/hr/direktori/hrmanagement/peringatan/peringatan.module.ts")).then(function (mo) { return mo.PeringatanModule; }); }
            },
            {
                path: 'resign',
                loadChildren: function () { return Promise.all(/*! import() | resign-resign-module */[__webpack_require__.e("common"), __webpack_require__.e("resign-resign-module")]).then(__webpack_require__.bind(null, /*! ./resign/resign.module */ "./src/app/pages/hr/direktori/hrmanagement/resign/resign.module.ts")).then(function (mo) { return mo.ResignModule; }); }
            },
            {
                path: 'promosi',
                loadChildren: function () { return Promise.all(/*! import() | promosi-promosi-module */[__webpack_require__.e("common"), __webpack_require__.e("promosi-promosi-module")]).then(__webpack_require__.bind(null, /*! ./promosi/promosi.module */ "./src/app/pages/hr/direktori/hrmanagement/promosi/promosi.module.ts")).then(function (mo) { return mo.PromosiModule; }); }
            },
            {
                path: 'dipecat',
                loadChildren: function () { return Promise.all(/*! import() | dipecat-dipecat-module */[__webpack_require__.e("common"), __webpack_require__.e("dipecat-dipecat-module")]).then(__webpack_require__.bind(null, /*! ./dipecat/dipecat.module */ "./src/app/pages/hr/direktori/hrmanagement/dipecat/dipecat.module.ts")).then(function (mo) { return mo.DipecatModule; }); }
            },
        ]
    }
];
var HrmanagementRoutingModule = /** @class */ (function () {
    function HrmanagementRoutingModule() {
    }
    HrmanagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HrmanagementRoutingModule);
    return HrmanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9ocm1hbmFnZW1lbnQvaHJtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.ts ***!
  \***************************************************************************/
/*! exports provided: HrmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmanagementComponent", function() { return HrmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var HrmanagementComponent = /** @class */ (function () {
    function HrmanagementComponent(store, menuService) {
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
    HrmanagementComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'HR Notes +',
                key: 'notes',
                icon: 'fe fe-paperclip',
                url: 'notes',
            },
            {
                title: 'warning letter',
                key: 'peringatan',
                icon: 'fe fe-file-text',
                url: 'peringatan',
            },
            {
                title: 'promotion',
                key: 'promosi',
                icon: 'fe fe-file-plus',
                url: 'promosi',
            },
            {
                title: 'resignation',
                key: 'resign',
                icon: 'fe fe-file-minus',
                url: 'resign',
            },
            {
                title: 'termination',
                key: 'dipecat',
                icon: 'fe fe-file-minus',
                url: 'dipecat',
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Direktori' });
    };
    HrmanagementComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    HrmanagementComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    HrmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hrmanagement',
            template: __webpack_require__(/*! raw-loader!./hrmanagement.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./hrmanagement.component.scss */ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], HrmanagementComponent);
    return HrmanagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/hrmanagement/hrmanagement.module.ts ***!
  \************************************************************************/
/*! exports provided: HrmanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmanagementModule", function() { return HrmanagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hrmanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hrmanagement-routing.module */ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement-routing.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _hrmanagement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hrmanagement.component */ "./src/app/pages/hr/direktori/hrmanagement/hrmanagement.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var HrmanagementModule = /** @class */ (function () {
    function HrmanagementModule() {
    }
    HrmanagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hrmanagement_component__WEBPACK_IMPORTED_MODULE_8__["HrmanagementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hrmanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrmanagementRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            ],
        })
    ], HrmanagementModule);
    return HrmanagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrmanagement-hrmanagement-module.js.map