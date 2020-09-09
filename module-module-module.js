(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-module-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/add/add.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/module/add/add.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Module</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Name</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"name_module\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"id_module_parent==''\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Parent</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select formControlName=\"id_module_parent\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                <nz-option *ngFor=\"let item of listModule\" nzValue=\"{{item.id_module}}\" nzLabel=\"{{item.name_module}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"id_module_parent!=''\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Parent</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"id_module_parent\" disabled />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>key</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"key\"/>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Url</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"url\">\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Order by</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"order_by\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </form>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/detail/detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/module/detail/detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Module Detail</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\" style=\"width: 100%\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Module Name</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModule.name_module}} </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Module Parent</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataParent.name_module}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Order by</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModule.order_by}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Back</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\" style=\"width: 100%\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h5 class=\"mb-0\">Sub-detail</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/edit/edit.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/module/edit/edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Module</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Name</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"name_module\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Parent</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select formControlName=\"id_module_parent\" nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                <nz-option *ngFor=\"let item of listModule\" nzValue=\"{{item.id_module}}\" nzLabel=\"{{item.name_module}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>key</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"key\"/>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Url</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"url\"/>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Order by</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"order_by\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </form>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/list/list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/module/list/list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Module</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add/parent']\" routerLinkActive=\"router-link-active\">\r\n                New Module\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n            <nz-input-group [nzSuffix]=\"suffixIcon\">\r\n                <input type=\"text\" nz-input placeholder=\"Search\" [(ngModel)]=\"search\" />\r\n            </nz-input-group>\r\n            <ng-template #suffixIcon>\r\n                <i nz-icon nzType=\"search\"></i>\r\n            </ng-template>\r\n\r\n            <!-- <nz-tree [nzData]=\"listOfData\" [nzSearchValue]=\"search\" nzShowLine (nzClick)=\"nzEvent($event)\"> </nz-tree> -->\r\n\r\n            <nz-tree [nzData]=\"listOfData\" [nzSearchValue]=\"search\" (nzClick)=\"activeNode($event)\" (nzDblClick)=\"openFolder($event)\" [nzTreeTemplate]=\"nzTreeTemplate\"></nz-tree>\r\n\r\n            <ng-template #nzTreeTemplate let-node>\r\n                <div class=\"custom-node \" [class.active]=\"activedNode?.key === node.key\">\r\n                    <div *ngIf=\"!node.isLeaf\" (contextmenu)=\"contextMenu($event,node.key,node.isLeaf, menu)\">\r\n                        <i nz-icon [nzType]=\"node.isExpanded ? 'folder-open' : 'folder'\" (click)=\"openFolder(node)\"></i>\r\n                        <span class=\"folder-name\">{{ node.title }}</span>\r\n                    </div>\r\n                    <div *ngIf=\"node.isLeaf\" (contextmenu)=\"contextMenu($event,node.key,node.isLeaf, menu)\">\r\n                        <i nz-icon nzType=\"file\"></i>\r\n                        <span class=\"file-name\">{{ node.title }}</span>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                <ul nz-menu>\r\n                    <li nz-menu-item (click)=\"addChild()\">Add Child</li>\r\n                    <li nz-menu-item (click)=\"delete()\">Delete</li>\r\n                    <li nz-menu-item (click)=\"edit()\">Edit</li>\r\n                </ul>\r\n            </nz-dropdown-menu>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/users/module/add/add.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/users/module/add/add.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL21vZHVsZS9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/module/add/add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/users/module/add/add.component.ts ***!
  \*********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(userModuleService, userModuleAppService, spinner, fb, pesan, router, activeRouter) {
        this.userModuleService = userModuleService;
        this.userModuleAppService = userModuleAppService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activeRouter = activeRouter;
        this.dataModule = {};
        this.listModule = [];
        this.id_module_parent = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (data) {
            if (data.get('id_module_parent')) {
                if (data.get('id_module_parent') != 'parent') {
                    _this.id_module_parent = data.get('id_module_parent');
                }
                else {
                    _this.getPreeData();
                }
            }
        });
        this.form();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.userModuleAppService.getUserModuleApps().subscribe(function (data) {
            _this.listModule = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_module_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_module_parent),
            order_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataModule = this.dataForm.value;
        this.userModuleService
            .postUserModules(this.dataModule)
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['users/module/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleAppService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/users/module/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleAppService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/module/detail/detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/module/detail/detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL21vZHVsZS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/module/detail/detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/module/detail/detail.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(routerActive, userModuleAppService, userModuleService, spinner, router) {
        this.routerActive = routerActive;
        this.userModuleAppService = userModuleAppService;
        this.userModuleService = userModuleService;
        this.spinner = spinner;
        this.router = router;
        this.dataModule = {};
        this.dataParent = {};
        this.id_module = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id_module = this.routerActive.snapshot.paramMap.get('id_module');
        this.getModule();
    };
    DetailComponent.prototype.getModule = function () {
        var _this = this;
        this.spinner.show();
        this.userModuleService.getUserModulesId(this.id_module).subscribe(function (response) {
            _this.dataModule = response.data;
            _this.getParent(response.data.id_module_parent);
        });
    };
    DetailComponent.prototype.getParent = function (id_module_parent) {
        var _this = this;
        this.userModuleAppService.getUserModuleAppsId(id_module_parent).subscribe(function (response) {
            _this.dataParent = response.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/users/module/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleAppService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/users/module/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleAppService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/module/edit/edit.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/module/edit/edit.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL21vZHVsZS9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/module/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/users/module/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(userModuleService, userModuleAppService, spinner, fb, pesan, router, activatedRoute) {
        this.userModuleService = userModuleService;
        this.userModuleAppService = userModuleAppService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_module = '';
        this.dataModule = {};
        this.listModule = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_module = this.activatedRoute.snapshot.paramMap.get('id_module');
        this.form();
        this.getPreeData();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.userModuleAppService.getUserModuleApps().subscribe(function (data) {
            _this.listModule = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.userModuleService.getUserModulesId(this.id_module).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_module_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            order_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataModule = this.dataForm.value;
        this.userModuleService
            .putUserModulesId({ id: this.id_module, body: this.dataModule })
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['users/module/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleAppService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/users/module/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleAppService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/module/list/list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/module/list/list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-tree {\n  overflow: hidden;\n  margin: 0 -24px;\n  padding: 0 24px;\n}\n\n:host ::ng-deep .ant-tree li {\n  padding: 4px 0 0 0;\n}\n\n.custom-node {\n  cursor: pointer;\n  line-height: 24px;\n  margin-left: 4px;\n  display: inline-block;\n  margin: 0 -1000px;\n  padding: 0 1000px;\n}\n\n.active {\n  background: #1890ff;\n  color: #fff;\n}\n\n.file-name,\n.folder-name {\n  margin-left: 4px;\n}\n\n.file-desc,\n.folder-desc {\n  padding: 0 8px;\n  display: inline-block;\n  background: #87ceff;\n  color: #ffffff;\n  position: relative;\n  left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvbW9kdWxlL2xpc3QvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXG1vZHVsZVxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMvbW9kdWxlL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQztFQUNHLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7O0VBRUksZ0JBQUE7QUNDSjs7QURFQTs7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL21vZHVsZS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDAgLTI0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbiA6aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlIGxpIHtcclxuICAgIHBhZGRpbmc6IDRweCAwIDAgMDtcclxufVxyXG5cclxuLmN1c3RvbS1ub2RlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAtMTAwMHB4O1xyXG4gICAgcGFkZGluZzogMCAxMDAwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzE4OTBmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZmlsZS1uYW1lLFxyXG4uZm9sZGVyLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmZpbGUtZGVzYyxcclxuLmZvbGRlci1kZXNjIHtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzg3Y2VmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTJweDtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIC0yNHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUgbGkge1xuICBwYWRkaW5nOiA0cHggMCAwIDA7XG59XG5cbi5jdXN0b20tbm9kZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIC0xMDAwcHg7XG4gIHBhZGRpbmc6IDAgMTAwMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5maWxlLW5hbWUsXG4uZm9sZGVyLW5hbWUge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uZmlsZS1kZXNjLFxuLmZvbGRlci1kZXNjIHtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzg3Y2VmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/users/module/list/list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/users/module/list/list.component.ts ***!
  \***********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(userModuleService, spinner, nzMessageService, nzContextMenuService, router, pesan) {
        this.userModuleService = userModuleService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.nzContextMenuService = nzContextMenuService;
        this.router = router;
        this.pesan = pesan;
        this.listOfData = [];
        this.search = '';
        this.id = '';
        this.isLeaf = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    ListComponent.prototype.nzEvent = function (event) {
        console.log(event);
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        this.spinner.show();
        this.userModuleService
            .getUserModules()
            .subscribe(function (datas) {
            function unflatten(arr) {
                var tree = [], mappedArr = {}, arrElem, mappedElem;
                // First map the nodes of the array to an object -> create a hash table.
                for (var i = 0, len = arr.length; i < len; i++) {
                    arrElem = arr[i];
                    mappedArr[arrElem.key] = arrElem;
                    // mappedArr[arrElem.key]['children'] = [];
                }
                for (var key in mappedArr) {
                    if (mappedArr.hasOwnProperty(key)) {
                        mappedElem = mappedArr[key];
                        // If the element is not at the root level, add it to its parent array of children.
                        if (mappedElem.parent) {
                            if (!mappedArr[mappedElem['parent']].hasOwnProperty('children')) {
                                mappedArr[mappedElem['parent']]['children'] = [];
                                mappedArr[mappedElem['parent']]['isLeaf'] = false;
                            }
                            if (!mappedElem.hasOwnProperty('children')) {
                                mappedElem['isLeaf'] = true;
                            }
                            mappedArr[mappedElem['parent']]['children'].push(mappedElem);
                        }
                        // If the element is at the root level, add it to first level elements array.
                        else {
                            tree.push(mappedElem);
                        }
                    }
                }
                return tree;
            }
            var listData = datas.data;
            listData.forEach(function (item, index) {
                listData[index] = {
                    title: item.name_module,
                    key: item.id_module,
                    parent: item.id_module_parent,
                    // children: [],
                    expanded: true,
                };
            });
            _this.listOfData = unflatten(listData);
            console.log(_this.listOfData);
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function () {
        var _this = this;
        if (!this.isLeaf) {
            this.pesan.pesanWarningForm('tidak bisa di hapus, harus anak paling kecil!');
            return false;
        }
        this.spinner.show();
        this.userModuleService.deleteUserModulesId(this.id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.openFolder = function (data) {
        // do something if u want
        if (data instanceof ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            var node = data.node;
            if (node) {
                node.isExpanded = !node.isExpanded;
            }
        }
    };
    ListComponent.prototype.activeNode = function (data) {
        this.activedNode = data.node;
    };
    ListComponent.prototype.contextMenu = function ($event, key, isLeaf, menu) {
        this.id = key;
        this.isLeaf = isLeaf;
        this.nzContextMenuService.create($event, menu);
    };
    ListComponent.prototype.addChild = function () {
        // do something
        this.router.navigate(['/users/module/add', this.id]);
    };
    ListComponent.prototype.edit = function () {
        // do something
        this.router.navigate(['/users/module/edit', this.id]);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzContextMenuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/module/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/users/module/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserModuleService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzContextMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/module/module-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/module/module-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleRoutingModule", function() { return ModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/module/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/module/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/module/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/module/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
    {
        path: 'edit/:id_module',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add/:id_module_parent',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'detail/:id_module',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    }
];
var ModuleRoutingModule = /** @class */ (function () {
    function ModuleRoutingModule() {
    }
    ModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], ModuleRoutingModule);
    return ModuleRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/users/module/module.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/module/module.module.ts ***!
  \*****************************************************/
/*! exports provided: ModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleModule", function() { return ModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-routing.module */ "./src/app/pages/users/module/module-routing.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/module/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/module/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/module/detail/detail.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/module/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var ModuleModule = /** @class */ (function () {
    function ModuleModule() {
    }
    ModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _module_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModuleRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], ModuleModule);
    return ModuleModule;
}());



/***/ })

}]);
//# sourceMappingURL=module-module-module.js.map