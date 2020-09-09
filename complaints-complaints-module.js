(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-complaints-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/complaints/complaints.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/helpdesk/complaints/complaints.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/helpdesk/complaints/complaints-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/helpdesk/complaints/complaints-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ComplaintsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsRoutingModule", function() { return ComplaintsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complaints_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints.component */ "./src/app/pages/helpdesk/complaints/complaints.component.ts");




var routes = [
    {
        path: '',
        component: _complaints_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'ticketing'
            },
            {
                path: 'ticketing',
                loadChildren: function () { return __webpack_require__.e(/*! import() | ticketing-ticketing-module */ "ticketing-ticketing-module").then(__webpack_require__.bind(null, /*! ./ticketing/ticketing.module */ "./src/app/pages/helpdesk/complaints/ticketing/ticketing.module.ts")).then(function (m) { return m.TicketingModule; }); },
            },
        ]
    }
];
var ComplaintsRoutingModule = /** @class */ (function () {
    function ComplaintsRoutingModule() {
    }
    ComplaintsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComplaintsRoutingModule);
    return ComplaintsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/complaints/complaints.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/helpdesk/complaints/complaints.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHBkZXNrL2NvbXBsYWludHMvY29tcGxhaW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/helpdesk/complaints/complaints.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/helpdesk/complaints/complaints.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsComponent", function() { return ComplaintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");






var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent(store, menuService, pegawaiDetailService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '28fd0999-a842-4a79-9103-497f2545eb26';
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getSettings"])).subscribe(function (state) {
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
    ComplaintsComponent.prototype.ngOnInit = function () {
        this.pegawaiDetailService.setIdpegawai(this.id_pegawai);
        this.menuData = [
            {
                title: 'All',
                key: 'All',
                icon: 'fe fe-bookmark',
                url: 'list/all/all',
            },
            {
                title: 'HR',
                key: 'HR',
                icon: 'fe fe-user',
                children: [
                    {
                        title: 'Draft',
                        key: 'draft',
                        icon: 'fe fe-bookmark',
                        url: 'list/hr/draft',
                    },
                    {
                        title: 'Open',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/hr/confirm',
                    },
                    {
                        title: 'Process',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/hr/approved',
                    },
                    {
                        title: 'Close',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/hr/close',
                    },
                ]
            },
            {
                title: 'GA',
                key: 'GA',
                icon: 'fe fe-user',
                children: [
                    {
                        title: 'Draft',
                        key: 'draft',
                        icon: 'fe fe-bookmark',
                        url: 'list/GA/draft',
                    },
                    {
                        title: 'Open',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/GA/confirm',
                    },
                    {
                        title: 'Process',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/GA/approved',
                    },
                    {
                        title: 'Close',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/GA/close',
                    },
                ]
            },
            {
                title: 'IT',
                key: 'IT',
                icon: 'fe fe-user',
                children: [
                    {
                        title: 'Draft',
                        key: 'draft',
                        icon: 'fe fe-bookmark',
                        url: 'list/IT/draft',
                    },
                    {
                        title: 'Open',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/IT/confirm',
                    },
                    {
                        title: 'Process',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/IT/approved',
                    },
                    {
                        title: 'Close',
                        key: 'Confirm',
                        icon: 'fe fe-bookmark',
                        url: 'list/IT/close',
                    },
                ]
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Kalender' });
    };
    ComplaintsComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    ComplaintsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
        { type: _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"] }
    ]; };
    ComplaintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaints',
            template: __webpack_require__(/*! raw-loader!./complaints.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/complaints/complaints.component.html"),
            styles: [__webpack_require__(/*! ./complaints.component.scss */ "./src/app/pages/helpdesk/complaints/complaints.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"]])
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/complaints/complaints.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/helpdesk/complaints/complaints.module.ts ***!
  \****************************************************************/
/*! exports provided: ComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsModule", function() { return ComplaintsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-routing.module */ "./src/app/pages/helpdesk/complaints/complaints-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var _complaints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./complaints.component */ "./src/app/pages/helpdesk/complaints/complaints.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");














var ComplaintsModule = /** @class */ (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_complaints_component__WEBPACK_IMPORTED_MODULE_9__["ComplaintsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_8__["DocumentModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzRadioModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_6__["ApprovalModule"],
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__["SearchItemModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ],
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-complaints-module.js.map