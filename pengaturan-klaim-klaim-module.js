(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengaturan-klaim-klaim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Kategori</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 100%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Kategori</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Nama kategori\" formControlName=\"nama_kategori\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Jumlah keluarga ditanggung</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input type=\"number\" placeholder=\"input number\"\r\n                                            formControlName=\"jumlah_keluarga_ditanggung\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tanggal reload</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"pilih tanggal\"\r\n                                            formControlName=\"tanggal_reload_klaim\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Plafon</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 100%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Plafon</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Nama plafon\" formControlName=\"nama_plafon\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Saldo plafon\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('plafon_klaim') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input placeholder=\"Insert value\" formControlName=\"plafon_klaim\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Kategori</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 100%\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Nama Kategori</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Nama kategori\" formControlName=\"nama_kategori\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-label>Jumlah keluarga ditanggung</nz-form-label>\r\n                                        <nz-form-control>\r\n                                            <input nz-input type=\"number\" placeholder=\"input number\"\r\n                                                formControlName=\"jumlah_keluarga_ditanggung\" />\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-label>Tanggal reload</nz-form-label>\r\n                                        <nz-form-control>\r\n                                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"pilih tanggal\"\r\n                                                formControlName=\"tanggal_reload_klaim\"></nz-date-picker>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Plafon</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 100%\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Nama Plafon</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Nama plafon\" formControlName=\"nama_plafon\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>\r\n                                    Saldo plafon\r\n                                    <i style=\"float: right\">\r\n                                        {{getValue('plafon_klaim') | currency: 'Rp.'}}\r\n                                    </i>\r\n                                </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                        <input nz-input placeholder=\"Insert value\" formControlName=\"plafon_klaim\" />\r\n                                    </nz-input-group>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/list/list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/pengaturan/klaim/list/list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Claim</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-kategori']\" routerLinkActive=\"router-link-active\">\r\n                New Kategori\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\" *ngFor=\"let item of listClaimCategory\" id=\"form\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb=0\">{{item.nama_kategori}}</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\"\r\n                    [routerLink]=\"['../edit-kategori',item.id_klaim_kategori]\"\r\n                    routerLinkActive=\"router-link-active\">\r\n                    Edit\r\n                </a>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['../add-pengaturan', item.id_klaim_kategori]\"\r\n                    routerLinkActive=\"router-link-active\">\r\n                    Add\r\n                </a>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <a>\r\n                    <button class=\"btn btn-primary\" nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"hapus(item.id_klaim_kategori)\"\r\n                        (nzOnCancel)=\"batalDelete()\">Delete</button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n            <nz-table #smallTable nzSize=\"small\" [nzData]=\"item.claimPengaturan\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Nama Plafon</th>\r\n                        <th>plafon</th>\r\n                        <th class=\"text-right\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of smallTable.data\">\r\n                        <td>{{ data.nama_plafon }}</td>\r\n                        <td>{{ data.plafon_klaim | currency: 'Rp.'}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button nz-button nzSize=\"small\" nzType=\"primary\"\r\n                                style=\"background-color: rgb(245, 245, 255);color: rgb(8, 4, 247);margin-right: 8px\"\r\n                                [routerLink]=\"['../edit-pengaturan',data.id_klaim_pengaturan]\">Edit</button>\r\n                            <button nz-button nzSize=\"small\" nzType=\"primary\"\r\n                                style=\"background-color: rgb(245, 245, 255);color: rgb(8, 4, 247);margin-left: 8px\"\r\n                                nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_klaim_pengaturan)\"\r\n                                (nzOnCancel)=\"batalDelete()\">Delete</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcGVuZ2F0dXJhbi9rbGFpbS9hZGQta2F0ZWdvcmkvYWRkLWthdGVnb3JpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddKategoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKategoriComponent", function() { return AddKategoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddKategoriComponent = /** @class */ (function () {
    function AddKategoriComponent(gaKlaimKategoriService, spinner, fb, pesan, router) {
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
    }
    AddKategoriComponent.prototype.ngOnInit = function () {
        this.form();
    };
    AddKategoriComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jumlah_keluarga_ditanggung: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_reload_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    AddKategoriComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.gaKlaimKategoriService.postGaKlaimKategoris(this.data).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddKategoriComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/request/module/pengaturan/klaim/list']);
    };
    AddKategoriComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["GaKlaimKategoriService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddKategoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-kategori',
            template: __webpack_require__(/*! raw-loader!./add-kategori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.html"),
            styles: [__webpack_require__(/*! ./add-kategori.component.scss */ "./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["GaKlaimKategoriService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddKategoriComponent);
    return AddKategoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcGVuZ2F0dXJhbi9rbGFpbS9hZGQtcGVuZ2F0dXJhbi9hZGQtcGVuZ2F0dXJhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddPengaturanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPengaturanComponent", function() { return AddPengaturanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddPengaturanComponent = /** @class */ (function () {
    function AddPengaturanComponent(gaKlaimPengaturanService, spinner, notification, fb, pesan, router, activatedRoute) {
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.data = {};
        this.id_klaim_kategori = '';
    }
    AddPengaturanComponent.prototype.ngOnInit = function () {
        this.id_klaim_kategori = this.activatedRoute.snapshot.paramMap.get('id_klaim_kategori');
        this.form();
    };
    AddPengaturanComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_plafon: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            plafon_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_klaim_kategori),
        });
    };
    AddPengaturanComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    AddPengaturanComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.gaKlaimPengaturanService.postGaKlaimPengaturans(this.data).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddPengaturanComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/request/module/pengaturan/klaim/list']);
    };
    AddPengaturanComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["GaKlaimPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AddPengaturanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-pengaturan',
            template: __webpack_require__(/*! raw-loader!./add-pengaturan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.html"),
            styles: [__webpack_require__(/*! ./add-pengaturan.component.scss */ "./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["GaKlaimPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddPengaturanComponent);
    return AddPengaturanComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcGVuZ2F0dXJhbi9rbGFpbS9lZGl0LWthdGVnb3JpL2VkaXQta2F0ZWdvcmkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditKategoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditKategoriComponent", function() { return EditKategoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditKategoriComponent = /** @class */ (function () {
    function EditKategoriComponent(gaKlaimKategoriService, spinner, fb, pesan, router, activatedRoute) {
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_klaim_kategori = '';
    }
    EditKategoriComponent.prototype.ngOnInit = function () {
        this.id_klaim_kategori = this.activatedRoute.snapshot.paramMap.get('id_klaim_kategori');
        this.form();
        this.getData();
    };
    EditKategoriComponent.prototype.getData = function () {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategorisId(this.id_klaim_kategori).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditKategoriComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jumlah_keluarga_ditanggung: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_reload_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    EditKategoriComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.gaKlaimKategoriService.putGaKlaimKategorisId({ id: this.id_klaim_kategori, body: this.data }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditKategoriComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/request/module/pengaturan/klaim/list']);
    };
    EditKategoriComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditKategoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-kategori',
            template: __webpack_require__(/*! raw-loader!./edit-kategori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.html"),
            styles: [__webpack_require__(/*! ./edit-kategori.component.scss */ "./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditKategoriComponent);
    return EditKategoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcGVuZ2F0dXJhbi9rbGFpbS9lZGl0LXBlbmdhdHVyYW4vZWRpdC1wZW5nYXR1cmFuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditPengaturanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPengaturanComponent", function() { return EditPengaturanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var EditPengaturanComponent = /** @class */ (function () {
    function EditPengaturanComponent(gaKlaimPengaturanService, spinner, notification, fb, pesan, router, activatedRoute) {
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.data = {};
        this.id_klaim_pengaturan = '';
    }
    EditPengaturanComponent.prototype.ngOnInit = function () {
        this.id_klaim_pengaturan = this.activatedRoute.snapshot.paramMap.get('id_klaim_pengaturan');
        this.form();
        this.getData();
    };
    EditPengaturanComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengaturanService.getGaKlaimPengaturansId(this.id_klaim_pengaturan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
        });
    };
    EditPengaturanComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_plafon: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            plafon_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_klaim_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditPengaturanComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditPengaturanComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.gaKlaimPengaturanService.putGaKlaimPengaturansId({ id: this.id_klaim_pengaturan, body: this.data }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditPengaturanComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/request/module/pengaturan/klaim/list']);
    };
    EditPengaturanComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditPengaturanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-pengaturan',
            template: __webpack_require__(/*! raw-loader!./edit-pengaturan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.html"),
            styles: [__webpack_require__(/*! ./edit-pengaturan.component.scss */ "./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditPengaturanComponent);
    return EditPengaturanComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/klaim-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/klaim-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: KlaimRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimRoutingModule", function() { return KlaimRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-kategori/edit-kategori.component */ "./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.ts");
/* harmony import */ var _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-kategori/add-kategori.component */ "./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.ts");
/* harmony import */ var _edit_pengaturan_edit_pengaturan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-pengaturan/edit-pengaturan.component */ "./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.ts");
/* harmony import */ var _add_pengaturan_add_pengaturan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-pengaturan/add-pengaturan.component */ "./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/pengaturan/klaim/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    },
    {
        path: 'add-pengaturan/:id_klaim_kategori',
        component: _add_pengaturan_add_pengaturan_component__WEBPACK_IMPORTED_MODULE_4__["AddPengaturanComponent"]
    },
    {
        path: 'edit-pengaturan/:id_klaim_pengaturan',
        component: _edit_pengaturan_edit_pengaturan_component__WEBPACK_IMPORTED_MODULE_3__["EditPengaturanComponent"]
    },
    {
        path: 'add-kategori',
        component: _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_2__["AddKategoriComponent"]
    },
    {
        path: 'edit-kategori/:id_klaim_kategori',
        component: _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_1__["EditKategoriComponent"]
    }
];
var KlaimRoutingModule = /** @class */ (function () {
    function KlaimRoutingModule() {
    }
    KlaimRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], KlaimRoutingModule);
    return KlaimRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/klaim.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/klaim.module.ts ***!
  \*******************************************************************/
/*! exports provided: KlaimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimModule", function() { return KlaimModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klaim-routing.module */ "./src/app/pages/ga/account/pengaturan/klaim/klaim-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/pengaturan/klaim/list/list.component.ts");
/* harmony import */ var _add_pengaturan_add_pengaturan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-pengaturan/add-pengaturan.component */ "./src/app/pages/ga/account/pengaturan/klaim/add-pengaturan/add-pengaturan.component.ts");
/* harmony import */ var _edit_pengaturan_edit_pengaturan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-pengaturan/edit-pengaturan.component */ "./src/app/pages/ga/account/pengaturan/klaim/edit-pengaturan/edit-pengaturan.component.ts");
/* harmony import */ var _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-kategori/edit-kategori.component */ "./src/app/pages/ga/account/pengaturan/klaim/edit-kategori/edit-kategori.component.ts");
/* harmony import */ var _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-kategori/add-kategori.component */ "./src/app/pages/ga/account/pengaturan/klaim/add-kategori/add-kategori.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");












var KlaimModule = /** @class */ (function () {
    function KlaimModule() {
    }
    KlaimModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_pengaturan_add_pengaturan_component__WEBPACK_IMPORTED_MODULE_5__["AddPengaturanComponent"], _edit_pengaturan_edit_pengaturan_component__WEBPACK_IMPORTED_MODULE_6__["EditPengaturanComponent"], _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_7__["EditKategoriComponent"], _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_8__["AddKategoriComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__["KlaimRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]],
        })
    ], KlaimModule);
    return KlaimModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/list/list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/list/list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcGVuZ2F0dXJhbi9rbGFpbS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/pengaturan/klaim/list/list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/ga/account/pengaturan/klaim/list/list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(gaKlaimKategoriService, gaKlaimPengaturanService, spinner, nzMessageService) {
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.listClaimCategory = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getCutiKategori();
    };
    //   panggie kategori
    ListComponent.prototype.getCutiKategori = function () {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategoris().subscribe(function (res) {
            _this.listClaimCategory = res.data;
            _this.listClaimCategory.forEach(function (item, index) {
                _this.gaKlaimPengaturanService
                    .getGaKlaimPengaturans(JSON.stringify({ id_klaim_kategori: item.id_klaim_kategori }))
                    .subscribe(function (dataRes) {
                    _this.listClaimCategory[index]['claimPengaturan'] = dataRes.data;
                });
            });
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengaturanService.deleteGaKlaimPengaturansId(id).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.hapus = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimKategoriService.deleteGaKlaimKategorisId(id).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/pengaturan/klaim/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/ga/account/pengaturan/klaim/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pengaturan-klaim-klaim-module.js.map