(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/add/add.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/master/status/add/add.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Status</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%;\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status type</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose status type\"\r\n                                formControlName=\"id_status_type\">\r\n                                <nz-option *ngFor=\"let item of listStatusType\" nzValue=\"{{item.id_status_type}}\"\r\n                                    nzLabel=\"{{item.status_type}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" formControlName=\"status\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Colour</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input type=\"color\" placeholder=\"\" formControlName=\"color\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Description\" formControlName=\"status_desc\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/edit/edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/master/status/edit/edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Status</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%;\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status type</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose status type\"\r\n                                formControlName=\"id_status_type\">\r\n                                <nz-option *ngFor=\"let item of listStatusType\" nzValue=\"{{item.id_status_type}}\"\r\n                                    nzLabel=\"{{item.status_type}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" formControlName=\"status\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Colour</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input type=\"color\" placeholder=\"\" formControlName=\"color\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Description\" formControlName=\"status_desc\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/master/status/list/list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Status</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Status\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"getData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #middleTable nzSize=\"middle\" [nzData]=\"listOfDisplayData\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status_type\">Status type</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th>Colour</th>\r\n                        <th>Description</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of middleTable.data\">\r\n                        <td>{{ data.status_type }}</td>\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.color }}</td>\r\n                        <td>{{ data.status_desc }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['../edit',data.id_status]\"> <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this task?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_status)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"> <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/add/add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/pengaturan/status/add/add.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Status</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Code</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"Code Status\" formControlName=\"code\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"New Status\" formControlName=\"status\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Status</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Code</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"Code Status\" formControlName=\"code\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"New Status\" formControlName=\"status\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/list/list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/pengaturan/status/list/list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Employee status</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Status\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"getData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #middleTable nzSize=\"middle\" [nzData]=\"listOfDisplayData\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"code\">Code</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th>Description</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of middleTable.data\">\r\n                        <td>{{ data.code }}</td>\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.keterangan }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['/hr/direktori/pengaturan/status/edit/',data.id_pegawai_status]\">Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item >\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this task?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pegawai_status)\"\r\n                                            (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/master/status/add/add.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/master/status/add/add.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hc3Rlci9zdGF0dXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/master/status/add/add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/asset/master/status/add/add.component.ts ***!
  \****************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_asset_services_asset_status_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-status-type.service */ "./src/app/sdk/asset/services/asset-status-type.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(assetStatusService, assetStatusTypeService, spinner, fb, pesan, router) {
        this.assetStatusService = assetStatusService;
        this.assetStatusTypeService = assetStatusTypeService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.listStatusType = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getPreeData();
        this.form();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.assetStatusTypeService.getAssetStatusTypes().subscribe(function (data) {
            _this.listStatusType = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_status_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.assetStatusService.postAssetStatuses(this.data).subscribe(function (data) {
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
        this.router.navigate(['/asset/master/status/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"] },
        { type: src_app_sdk_asset_services_asset_status_type_service__WEBPACK_IMPORTED_MODULE_3__["AssetStatusTypeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/asset/master/status/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"],
            src_app_sdk_asset_services_asset_status_type_service__WEBPACK_IMPORTED_MODULE_3__["AssetStatusTypeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/status/edit/edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/master/status/edit/edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hc3Rlci9zdGF0dXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/master/status/edit/edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/master/status/edit/edit.component.ts ***!
  \******************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(assetStatusService, assetStatusTypeService, spinner, fb, pesan, router, activatedRoute) {
        this.assetStatusService = assetStatusService;
        this.assetStatusTypeService = assetStatusTypeService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_status = '';
        this.listStatusType = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_status = this.activatedRoute.snapshot.paramMap.get('id_status');
        this.getPreeData();
        this.form();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.assetStatusTypeService.getAssetStatusTypes().subscribe(function (data) {
            _this.listStatusType = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.assetStatusService.getAssetStatusesId(this.id_status).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_status_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.assetStatusService
            .putAssetStatusesId({ id: this.id_status, body: this.data })
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
        this.router.navigate(['/asset/master/status/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusTypeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/asset/master/status/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusTypeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/status/list/list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/master/status/list/list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hc3Rlci9zdGF0dXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/master/status/list/list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/master/status/list/list.component.ts ***!
  \******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services_asset_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-status.service */ "./src/app/sdk/asset/services/asset-status.service.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(assetStatusService, filterFuctionService, nzMessageService, spinner) {
        this.assetStatusService = assetStatusService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.listOfDisplayData = [];
        this.listOfData = [];
        this.sortKey = null;
        this.sortValue = null;
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.assetStatusService.getAssetStatuses(JSON.stringify({ sortKey: this.sortKey, sortValue: this.sortValue, search: this.search })).subscribe(function (data) {
            _this.listOfDisplayData = data.data;
            _this.listOfData = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getData();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetStatusService.deleteAssetStatusesId(id).subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services_asset_status_service__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/master/status/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/asset/master/status/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services_asset_status_service__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/status/status-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/master/status/status-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: StatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusRoutingModule", function() { return StatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/master/status/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/master/status/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/master/status/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
    {
        path: 'edit/:id_status',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"],
    },
];
var StatusRoutingModule = /** @class */ (function () {
    function StatusRoutingModule() {
    }
    StatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        })
    ], StatusRoutingModule);
    return StatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/master/status/status.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/asset/master/status/status.module.ts ***!
  \************************************************************/
/*! exports provided: StatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModule", function() { return StatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-routing.module */ "./src/app/pages/asset/master/status/status-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/master/status/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/master/status/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/master/status/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var StatusModule = /** @class */ (function () {
    function StatusModule() {
    }
    StatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _status_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatusRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], StatusModule);
    return StatusModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/add/add.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/add/add.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9wZW5nYXR1cmFuL3N0YXR1cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/add/add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/add/add.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPegawaiStatusService, spinner, fb, pesan, router) {
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
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
        this.data = this.dataForm.value;
        this.direktoriPegawaiStatusService.postDirektoriPegawaiStatuses(this.data).subscribe(function (data) {
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
        this.router.navigate(['/hr/direktori/pengaturan/status/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/pengaturan/status/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9wZW5nYXR1cmFuL3N0YXR1cy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiStatusService, spinner, fb, router, pesan, activatedRoute) {
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatusesId(this.id).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.direktoriPegawaiStatusService.putDirektoriPegawaiStatusesId({
            id: this.id,
            body: this.data
        }).subscribe(function (data) {
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
        this.router.navigate(['/hr/direktori/pengaturan/status/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/list/list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/list/list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9wZW5nYXR1cmFuL3N0YXR1cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/list/list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/list/list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiStatusService, filterFuctionService, nzMessageService, spinner) {
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.listOfDisplayData = [];
        this.listOfData = [];
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses(JSON.stringify({ sortKey: this.sortKey, sortValue: this.sortValue, search: this.search })).subscribe(function (data) {
            _this.listOfDisplayData = data.data;
            _this.listOfData = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getData();
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.getData();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiStatusService.deleteDirektoriPegawaiStatusesId(id).subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/status/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/pengaturan/status/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/status-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/status-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: StatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusRoutingModule", function() { return StatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/pengaturan/status/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/pengaturan/status/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }
];
var StatusRoutingModule = /** @class */ (function () {
    function StatusRoutingModule() {
    }
    StatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatusRoutingModule);
    return StatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/status/status.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/status/status.module.ts ***!
  \***********************************************************************/
/*! exports provided: StatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModule", function() { return StatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-routing.module */ "./src/app/pages/hr/direktori/pengaturan/status/status-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/pengaturan/status/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/pengaturan/status/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/pengaturan/status/add/add.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var StatusModule = /** @class */ (function () {
    function StatusModule() {
    }
    StatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _status_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatusRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ]
        })
    ], StatusModule);
    return StatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-status-module.js.map