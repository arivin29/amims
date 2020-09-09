(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["id-card-id-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add ID Cards</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Type </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"type of id card\" formControlName=\"jenis\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                          <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>ID Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"id card number\" formControlName=\"id_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Valid from</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berlaku\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Untill</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_expired\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add ID Cards</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Type </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"type of id card\" formControlName=\"jenis\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>ID Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"id card number\" formControlName=\"id_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Valid from</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berlaku\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Untill</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_expired\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Chang file</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i nz-icon\r\n                                    nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">ID Cards</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"data\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Type</th>\r\n                    <th>Valid from</th>\r\n                    <th>Until</th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.jenis }}</td>\r\n                    <td>{{ data.tanggal_berlaku }}</td>\r\n                    <td>{{ data.tanggal_expired }}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_pelamar_id_card]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pelamar_id_card)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add ID Cards</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Type </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"type of id card\" formControlName=\"jenis\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                          <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>ID Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"id card number\" formControlName=\"id_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Valid from</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berlaku\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Untill</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_expired\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add ID Cards</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Type </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"type of id card\" formControlName=\"jenis\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>ID Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"id card number\" formControlName=\"id_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Valid from</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berlaku\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Untill</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_expired\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Chang file</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i nz-icon\r\n                                    nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">ID Cards</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"data\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Type</th>\r\n                    <th>Valid from</th>\r\n                    <th>Until</th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.jenis }}</td>\r\n                    <td>{{ data.tanggal_berlaku }}</td>\r\n                    <td>{{ data.tanggal_expired }}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_pegawai_card]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pegawai_card)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9pZC1jYXJkL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPelamarIdcardService, spinner, notification, fb, pelamarServiceService, pesan, router) {
        this.direktoriPelamarIdcardService = direktoriPelamarIdcardService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.id_pelamar = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pegawai paja tu ' + _this.id_pelamar);
        });
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_berlaku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_expired: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pelamar),
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
        this.direktoriPelamarIdcardService
            .postDirektoriPelamarIdcards(this.data)
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'id-card']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarIdcardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarIdcardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9pZC1jYXJkL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPelamarIdcardService, spinner, notification, fb, pelamarServiceService, pesan, router, activatedRoute, singleUploadService) {
        this.direktoriPelamarIdcardService = direktoriPelamarIdcardService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.id_pelamar = '';
        this.id_pelamar_id_card = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pelamar_id_card = this.activatedRoute.snapshot.paramMap.get('id');
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pegawai paja tu ' + _this.id_pelamar);
        });
        this.form();
        this.getData();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pelamar_idcard.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_dokumen: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarIdcardService.getDirektoriPelamarIdcardsId(this.id_pelamar_id_card).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "pelamar_idcard",
                for_table: "erp_hr_pelamar.pelamar_idcard",
                for_module_id: data.data.id_pelamar_id_card
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_berlaku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_expired: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar_id_card: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pelamar),
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
        this.direktoriPelamarIdcardService
            .putDirektoriPelamarIdcardsId({ id: this.id_pelamar_id_card, body: this.data })
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'id-card']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarIdcardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarIdcardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: IdCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCardRoutingModule", function() { return IdCardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.ts");






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
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var IdCardRoutingModule = /** @class */ (function () {
    function IdCardRoutingModule() {
    }
    IdCardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IdCardRoutingModule);
    return IdCardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card.module.ts ***!
  \**************************************************************************************/
/*! exports provided: IdCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCardModule", function() { return IdCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _id_card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./id-card-routing.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");











var IdCardModule = /** @class */ (function () {
    function IdCardModule() {
    }
    IdCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _id_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["IdCardRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_10__["DocumentModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], IdCardModule);
    return IdCardModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9pZC1jYXJkL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pelamar-idcard.service */ "./src/app/sdk/hr/services/direktori-pelamar-idcard.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPelamarIdcardService, spinner, router, pelamarServiceService, nzMessageService) {
        this.direktoriPelamarIdcardService = direktoriPelamarIdcardService;
        this.spinner = spinner;
        this.router = router;
        this.pelamarServiceService = pelamarServiceService;
        this.nzMessageService = nzMessageService;
        this.id_pelamar = '';
        this.data = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarIdcardService.getDirektoriPelamarIdcards(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.data = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarIdcardService
            .deleteDirektoriPelamarIdcardsId(id)
            .subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'id-cards']);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_6__["DirektoriPelamarIdcardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__["PelamarServiceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_6__["DirektoriPelamarIdcardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__["PelamarServiceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvaWQtY2FyZC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-card.service */ "./src/app/sdk/hr/services/direktori-pegawai-card.service.ts");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPegawaiCardService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiCardService = direktoriPegawaiCardService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            tanggal_berlaku: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_expired: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_pegawai),
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
        this.direktoriPegawaiCardService
            .postDirektoriPegawaiCards(this.data)
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'id-card', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiCardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiCardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvaWQtY2FyZC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiCardService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute, singleUploadService) {
        this.direktoriPegawaiCardService = direktoriPegawaiCardService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.id_pegawai = '';
        this.id_pegawai_card = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pegawai_card = this.activatedRoute.snapshot.paramMap.get('id');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getData();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pelamar_idcard.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_dokumen: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiCardService.getDirektoriPegawaiCardsId(this.id_pegawai_card).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "pegawai_card",
                for_table: "erp_hr.pegawai_idcard",
                for_module_id: data.data.id_pegawai_card
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            tanggal_berlaku: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_expired: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_card: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
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
        this.direktoriPegawaiCardService
            .putDirektoriPegawaiCardsId({ id: this.id_pegawai_card, body: this.data })
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'id-card', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiCardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiCardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: IdCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCardRoutingModule", function() { return IdCardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.ts");






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
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var IdCardRoutingModule = /** @class */ (function () {
    function IdCardRoutingModule() {
    }
    IdCardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IdCardRoutingModule);
    return IdCardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: IdCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCardModule", function() { return IdCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _id_card_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./id-card-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");











var IdCardModule = /** @class */ (function () {
    function IdCardModule() {
    }
    IdCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _id_card_routing_module__WEBPACK_IMPORTED_MODULE_3__["IdCardRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_10__["DocumentModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], IdCardModule);
    return IdCardModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvaWQtY2FyZC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiCardService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiCardService = direktoriPegawaiCardService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.data = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiCardService.getDirektoriPegawaiCards(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.data = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiCardService
            .deleteDirektoriPegawaiCardsId(id)
            .subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pegawai, 'id-cards']);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiCardService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiCardService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=id-card-id-card-module.js.map