(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengaturan-mastercuti-mastercuti-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Kategori</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 60%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Nama Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Nama Cuti\" formControlName=\"cuti_kategori\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Cuti</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 60%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Nama Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Nama Cuti\" formControlName=\"nama_cuti\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Kode Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Kode Cuti\" formControlName=\"kode\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Perhitungan Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"perhitungan_cuti\">\r\n                            <nz-option nzLabel=\"1 bulan\" nzValue=\"1 bulan\"></nz-option>\r\n                            <nz-option nzLabel=\"1 tahun\" nzValue=\"1 tahun\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Jumlah saldo cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 10%\">\r\n                        <input nz-input formControlName=\"saldo_cuti\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <!-- <nz-form-item>\r\n                        <nz-form-label>Saldo cuti akan diperbaharui pada</nz-form-label>\r\n                        <nz-form-control style=\"width: 80%\">\r\n                            <nz-select nzShowSearch nzAllowClear formControlName=\"reload_cuti\">\r\n                                <nz-option nzLabel=\"1 Januari\" nzValue=\"1 Januari\"></nz-option>\r\n                                <nz-option nzLabel=\"Tanggal bergabung\" nzValue=\"Tanggal bergabung\"></nz-option>\r\n                                <nz-option nzLabel=\"Tanggal tertentu\" nzValue=\"Tanggal tertentu\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                    <nz-form-item>\r\n                        <nz-form-label>Masukan tanggal apabila diperbaharui pada tanggal tertentu</nz-form-label>\r\n                        <nz-form-control style=\"width: 80%\">\r\n                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                formControlName=\"if_tanggal_reload_cuti\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item> -->\r\n                <nz-form-item>\r\n                    <nz-form-label>Cuti ini berlaku untuk karyawan dengan jenis kelamin</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"jenis_kelamin\">\r\n                            <nz-option nzLabel=\"Laki-Laki\" nzValue=\"Laki-Laki\"></nz-option>\r\n                            <nz-option nzLabel=\"Wanita\" nzValue=\"Wanita\"></nz-option>\r\n                            <nz-option nzLabel=\"All\" nzValue=\"All\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <!-- <nz-form-item>\r\n                        <nz-form-control>\r\n                            <nz-radio-group formControlName=\"pro_rata\">\r\n                                <label nz-radio nzValue=\"1\">Kebijakan ini menggunakan sistem pro-rata</label>\r\n                            </nz-radio-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item> -->\r\n                <nz-form-item>\r\n                    <nz-form-label>Cuti ini dapat digunakan saat</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"minimal_gabung\">\r\n                            <nz-option nzLabel=\"saat mulai bergabung\" nzValue=\"0\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 1 bulan\" nzValue=\"1\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 3 bulan\" nzValue=\"3\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 6 bulan\" nzValue=\"6\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 9 bulan\" nzValue=\"9\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 1 tahun\" nzValue=\"12\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Kategori</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 60%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Nama Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Nama Cuti\" formControlName=\"cuti_kategori\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Cuti</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 60%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Nama Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Nama Cuti\" formControlName=\"nama_cuti\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Kode Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <input nz-input placeholder=\"Kode Cuti\" formControlName=\"kode\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Perhitungan Cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"perhitungan_cuti\">\r\n                            <nz-option nzLabel=\"1 bulan\" nzValue=\"1 bulan\"></nz-option>\r\n                            <nz-option nzLabel=\"1 tahun\" nzValue=\"1 tahun\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-label>Jumlah saldo cuti</nz-form-label>\r\n                    <nz-form-control style=\"width: 10%\">\r\n                        <input nz-input formControlName=\"saldo_cuti\" />\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <!-- <nz-form-item>\r\n                        <nz-form-label>Saldo cuti akan diperbaharui pada</nz-form-label>\r\n                        <nz-form-control style=\"width: 80%\">\r\n                            <nz-select nzShowSearch nzAllowClear formControlName=\"reload_cuti\">\r\n                                <nz-option nzLabel=\"1 Januari\" nzValue=\"1 Januari\"></nz-option>\r\n                                <nz-option nzLabel=\"Tanggal bergabung\" nzValue=\"Tanggal bergabung\"></nz-option>\r\n                                <nz-option nzLabel=\"Tanggal tertentu\" nzValue=\"Tanggal tertentu\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                    <nz-form-item>\r\n                        <nz-form-label>Masukan tanggal apabila diperbaharui pada tanggal tertentu</nz-form-label>\r\n                        <nz-form-control style=\"width: 80%\">\r\n                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                formControlName=\"if_tanggal_reload_cuti\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item> -->\r\n                <nz-form-item>\r\n                    <nz-form-label>Cuti ini berlaku untuk karyawan dengan jenis kelamin</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"jenis_kelamin\">\r\n                            <nz-option nzLabel=\"Laki-Laki\" nzValue=\"Laki-Laki\"></nz-option>\r\n                            <nz-option nzLabel=\"Wanita\" nzValue=\"Wanita\"></nz-option>\r\n                            <nz-option nzLabel=\"All\" nzValue=\"All\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <!-- <nz-form-item>\r\n                        <nz-form-control>\r\n                            <nz-radio-group formControlName=\"pro_rata\">\r\n                                <label nz-radio nzValue=\"1\">Kebijakan ini menggunakan sistem pro-rata</label>\r\n                            </nz-radio-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item> -->\r\n                <nz-form-item>\r\n                    <nz-form-label>Cuti ini dapat digunakan saat</nz-form-label>\r\n                    <nz-form-control style=\"width: 80%\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose\" formControlName=\"minimal_gabung\">\r\n                            <nz-option nzLabel=\"saat mulai bergabung\" nzValue=\"0\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 1 bulan\" nzValue=\"1\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 3 bulan\" nzValue=\"3\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 6 bulan\" nzValue=\"6\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 9 bulan\" nzValue=\"9\"></nz-option>\r\n                            <nz-option nzLabel=\"Setelah 1 tahun\" nzValue=\"12\"></nz-option>\r\n                        </nz-select>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Cuti</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-kategori']\" routerLinkActive=\"router-link-active\">\r\n                New Kategori\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\" *ngFor=\"let item of listCutiKategori\" id=\"form\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb=0\">{{item.cuti_kategori}}</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\"\r\n                    [routerLink]=\"['/hr/kalender/pengaturan/mastercuti/edit-kategori',item.id_cuti_kategori]\"\r\n                    routerLinkActive=\"router-link-active\">\r\n                    Edit\r\n                </a>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['../add', item.id_cuti_kategori]\"\r\n                    routerLinkActive=\"router-link-active\">\r\n                    Add\r\n                </a>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <a>\r\n                    <button class=\"btn btn-primary\" nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"hapus(item.id_cuti_kategori)\"\r\n                        (nzOnCancel)=\"batalDelete()\">Delete</button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n            <nz-table #smallTable nzSize=\"small\" [nzData]=\"item.pengaturan\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Kode</th>\r\n                        <th>Nama Pengaturan</th>\r\n                        <th>Saldo</th>\r\n                        <th>Perhitungan Cuti</th>\r\n                        <th class=\"text-right\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of smallTable.data\">\r\n                        <td>{{ data.kode }}</td>\r\n                        <td>{{ data.nama_cuti }}</td>\r\n                        <td>{{ data.saldo_cuti }} hari</td>\r\n                        <td>{{ data.perhitungan_cuti }}</td>\r\n                        <td class=\"text-right\">\r\n                            <button nz-button nzSize=\"small\" nzType=\"primary\"\r\n                                style=\"background-color: rgb(245, 245, 255);color: rgb(8, 4, 247);margin-right: 8px\"\r\n                                [routerLink]=\"['../edit/',data.id_cuti_pengaturan]\">Edit</button>\r\n                            <!-- <button nz-button nzSize=\"small\" nzType=\"primary\"\r\n                                style=\"background-color: rgb(245, 245, 255);color: rgb(8, 4, 247)\"\r\n                                [routerLink]=\"['../detail-pengaturan/',data.id_cuti_pengaturan]\">Detail</button> -->\r\n                            <button nz-button nzSize=\"small\" nzType=\"primary\"\r\n                                style=\"background-color: rgb(245, 245, 255);color: rgb(8, 4, 247);margin-left: 8px\"\r\n                                nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_cuti_pengaturan)\"\r\n                                (nzOnCancel)=\"batalDelete()\">Delete</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9hZGQta2F0ZWdvcmkvYWRkLWthdGVnb3JpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddKategoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKategoriComponent", function() { return AddKategoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddKategoriComponent = /** @class */ (function () {
    function AddKategoriComponent(kalenderCutiKategoriService, spinner, fb, pesan, router) {
        this.kalenderCutiKategoriService = kalenderCutiKategoriService;
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
            cuti_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
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
        this.kalenderCutiKategoriService.postKalenderCutiKategoris(this.data).subscribe(function (data) {
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
        this.router.navigate(['/hr/kalender/pengaturan/mastercuti/list']);
    };
    AddKategoriComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiKategoriService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddKategoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-kategori',
            template: __webpack_require__(/*! raw-loader!./add-kategori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.html"),
            styles: [__webpack_require__(/*! ./add-kategori.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiKategoriService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddKategoriComponent);
    return AddKategoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9hZGQtcGVuZ2F0dXJhbi9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(kalenderCutiPengaturanService, kalenderCutiKategoriService, spinner, fb, pesan, router, activatedRoute) {
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.kalenderCutiKategoriService = kalenderCutiKategoriService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_cuti_kategori = null;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form();
        // this.getCutiKategori()
        this.activatedRoute.paramMap.subscribe(function (param) {
            if (param.get('id_cuti_kategori')) {
                console.log(param.get('id_cuti_kategori'));
                _this.id_cuti_kategori = param.get('id_cuti_kategori');
                _this.dataForm.get('id_cuti_kategori').setValue(_this.id_cuti_kategori);
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            kode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            perhitungan_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            reload_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            if_tanggal_reload_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            saldo_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            minimal_gabung: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pro_rata: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_cuti_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.kalenderCutiPengaturanService.postKalenderCutiPengaturans(this.data).subscribe(function (data) {
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
        this.router.navigate(['/hr/kalender/pengaturan/mastercuti/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiKategoriService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiKategoriService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9kZXRhaWwtcGVuZ2F0dXJhbi9kZXRhaWwtcGVuZ2F0dXJhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DetailPengaturanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPengaturanComponent", function() { return DetailPengaturanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailPengaturanComponent = /** @class */ (function () {
    function DetailPengaturanComponent() {
    }
    DetailPengaturanComponent.prototype.ngOnInit = function () { };
    DetailPengaturanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-pengaturan',
            template: __webpack_require__(/*! raw-loader!./detail-pengaturan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.html"),
            styles: [__webpack_require__(/*! ./detail-pengaturan.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailPengaturanComponent);
    return DetailPengaturanComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9lZGl0LWthdGVnb3JpL2VkaXQta2F0ZWdvcmkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditKategoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditKategoriComponent", function() { return EditKategoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditKategoriComponent = /** @class */ (function () {
    function EditKategoriComponent(kalenderCutiKategoriService, spinner, fb, router, pesan, activatedRoute) {
        this.kalenderCutiKategoriService = kalenderCutiKategoriService;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
    }
    EditKategoriComponent.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.paramMap.get('id_cuti_kategori');
        this.form();
        this.getData();
    };
    EditKategoriComponent.prototype.getData = function () {
        var _this = this;
        this.kalenderCutiKategoriService.getKalenderCutiKategorisId(this.id).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditKategoriComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            cuti_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_cuti_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            is_lock: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.kalenderCutiKategoriService
            .putKalenderCutiKategorisId({
            id: this.id,
            body: this.data,
        })
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
    EditKategoriComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/kalender/pengaturan/mastercuti/list']);
    };
    EditKategoriComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiKategoriService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditKategoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-kategori',
            template: __webpack_require__(/*! raw-loader!./edit-kategori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.html"),
            styles: [__webpack_require__(/*! ./edit-kategori.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["KalenderCutiKategoriService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditKategoriComponent);
    return EditKategoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9lZGl0LXBlbmdhdHVyYW4vZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var EditComponent = /** @class */ (function () {
    function EditComponent(kalenderCutiPengaturanService, fb, router, spinner, activatedRoute) {
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.data = {};
        this.id = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.paramMap.get('id_cuti_pengaturan');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.kalenderCutiPengaturanService.getKalenderCutiPengaturansId(this.id).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            kode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            nama_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            perhitungan_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            saldo_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            if_tanggal_reload_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            id_cuti_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            id_cuti_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            minimal_gabung: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            id_aproval: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            pro_rata: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            reload_cuti: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
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
        this.kalenderCutiPengaturanService
            .putKalenderCutiPengaturansId({
            id: this.id,
            body: this.data,
        })
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
        this.router.navigate(['/hr/kalender/pengaturan/mastercuti/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BlbmdhdHVyYW4vbWFzdGVyY3V0aS9saXN0LXBlbmdhdHVyYW4vbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services/kalender-cuti-kategori.service */ "./src/app/sdk/hr/services/kalender-cuti-kategori.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(kalenderCutiKategoriService, kalenderCutiPengaturanService, spinner, nzMessageService) {
        this.kalenderCutiKategoriService = kalenderCutiKategoriService;
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.listCutiKategori = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getCutiKategori();
    };
    //   panggie kategori
    ListComponent.prototype.getCutiKategori = function () {
        var _this = this;
        this.kalenderCutiKategoriService.getKalenderCutiKategoris().subscribe(function (res) {
            _this.listCutiKategori = res.data;
            _this.listCutiKategori.forEach(function (item, index) {
                // panggie cuti prengaturan
                _this.kalenderCutiPengaturanService
                    .getKalenderCutiPengaturans(JSON.stringify({ id_cuti_kategori: item.id_cuti_kategori }))
                    .subscribe(function (dataRes) {
                    _this.listCutiKategori[index]['pengaturan'] = dataRes.data;
                });
            });
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.kalenderCutiPengaturanService.deleteKalenderCutiPengaturansId(id).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.hapus = function (id) {
        var _this = this;
        this.spinner.show();
        this.kalenderCutiKategoriService.deleteKalenderCutiKategorisId(id).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_3__["KalenderCutiKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["KalenderCutiPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_3__["KalenderCutiKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["KalenderCutiPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: MastercutiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastercutiRoutingModule", function() { return MastercutiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_pengaturan_detail_pengaturan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-pengaturan/detail-pengaturan.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.ts");
/* harmony import */ var _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-kategori/add-kategori.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.ts");
/* harmony import */ var _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-kategori/edit-kategori.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.ts");
/* harmony import */ var _add_pengaturan_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-pengaturan/add.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.ts");
/* harmony import */ var _edit_pengaturan_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-pengaturan/edit.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_pengaturan_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-pengaturan/list.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'list',
        component: _list_pengaturan_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
    },
    {
        path: 'edit/:id_cuti_pengaturan',
        component: _edit_pengaturan_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
    },
    {
        path: 'add/:id_cuti_kategori',
        component: _add_pengaturan_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
    },
    {
        path: 'add-kategori',
        component: _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_2__["AddKategoriComponent"],
    },
    {
        path: 'edit-kategori/:id_cuti_kategori',
        component: _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_3__["EditKategoriComponent"],
    },
    {
        path: 'detail-pengaturan/:id_cuti_pengaturan',
        component: _detail_pengaturan_detail_pengaturan_component__WEBPACK_IMPORTED_MODULE_1__["DetailPengaturanComponent"],
    },
];
var MastercutiRoutingModule = /** @class */ (function () {
    function MastercutiRoutingModule() {
    }
    MastercutiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        })
    ], MastercutiRoutingModule);
    return MastercutiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti.module.ts ***!
  \******************************************************************************/
/*! exports provided: MastercutiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastercutiModule", function() { return MastercutiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-radio.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mastercuti_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mastercuti-routing.module */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/mastercuti-routing.module.ts");
/* harmony import */ var _list_pengaturan_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-pengaturan/list.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/list-pengaturan/list.component.ts");
/* harmony import */ var _add_pengaturan_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-pengaturan/add.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-pengaturan/add.component.ts");
/* harmony import */ var _edit_pengaturan_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-pengaturan/edit.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-pengaturan/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-kategori/add-kategori.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/add-kategori/add-kategori.component.ts");
/* harmony import */ var _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-kategori/edit-kategori.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/edit-kategori/edit-kategori.component.ts");
/* harmony import */ var _detail_pengaturan_detail_pengaturan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail-pengaturan/detail-pengaturan.component */ "./src/app/pages/hr/kalender/pengaturan/mastercuti/detail-pengaturan/detail-pengaturan.component.ts");














var MastercutiModule = /** @class */ (function () {
    function MastercutiModule() {
    }
    MastercutiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _list_pengaturan_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _add_pengaturan_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
                _edit_pengaturan_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _add_kategori_add_kategori_component__WEBPACK_IMPORTED_MODULE_11__["AddKategoriComponent"],
                _edit_kategori_edit_kategori_component__WEBPACK_IMPORTED_MODULE_12__["EditKategoriComponent"],
                _detail_pengaturan_detail_pengaturan_component__WEBPACK_IMPORTED_MODULE_13__["DetailPengaturanComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _mastercuti_routing_module__WEBPACK_IMPORTED_MODULE_4__["MastercutiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]],
        })
    ], MastercutiModule);
    return MastercutiModule;
}());



/***/ }),

/***/ "./src/app/sdk/hr/services.ts":
/*!************************************!*\
  !*** ./src/app/sdk/hr/services.ts ***!
  \************************************/
/*! exports provided: AbsensiJadwalPegawaiTerjadwalService, AbsensiJadwalTipeService, AbsensiJadwalTipeNormalDetailService, AbsensiKehadiranService, AbsensiRekapKehadiranService, AbsensiPilotAircraftService, AbsensiPilotJadwalDetailService, AbsensiPilotRonService, AkunBillingService, AkunBillingCategoryService, AkunCashAdvanceService, AkunExpensesSummaryService, AkunExpensesSummaryItemService, AkunReimburseService, AkunReimburseItemService, AkunUntukAkunService, CompanyAcaraService, CompanyDepartemenService, CompanyDivisiService, CompanyJabatanService, CompanyKantorService, CompanyLettersService, CompanyLisensiService, CompanyPangkatService, CompanyPengumumanService, CompanyPerizinanService, CompanyPerusahaanService, DirektoriBankAccountService, DirektoriHrNotesService, DirektoriKalenderPerusahaanService, DirektoriLisensiTipeService, DirektoriPegawaiService, DirektoriPegawaiBiodataService, DirektoriPegawaiCardService, DirektoriPegawaiEmergencyService, DirektoriPegawaiKeahlianService, DirektoriPegawaiKeluargaService, DirektoriPegawaiKeluargalistService, DirektoriPegawaiLisensiService, DirektoriPegawaiMasterService, DirektoriPegawaiPendidikanService, DirektoriPegawaiPendidikanInformalService, DirektoriPegawaiPengalamanService, DirektoriPegawaiPosisiService, DirektoriPegawaiSpService, DirektoriPegawaiStatusService, DirektoriPegawaiTypeService, DirektoriPelamarService, DirektoriPelamarBiodataService, DirektoriPelamarEmergencyService, DirektoriPelamarIdcardService, DirektoriPelamarKeahlianService, DirektoriPelamarKeluargaService, DirektoriPelamarKeluargalistService, DirektoriPelamarPendidikanService, DirektoriPelamarPendidikanInformalService, DirektoriPelamarPengalamanService, DirektoriPenilaianPelamarService, DirektoriPerjalananDinasService, DirektoriPerjalananDinasAnggotaService, DirektoriPerjalananDinasRonService, DirektoriPermintaanPegawaiService, DirektoriPermintaanPegawaiListService, DirektoriProjekService, DirektoriProjekAnggotaService, DirektoriPromosiService, DirektoriResignService, DirektoriSpTipeService, DirektoriTerminationService, DirektoriTrainingService, DirektoriTrainingAnggotaService, DirektoriTrainingTrainerService, DirektoriVPegawaiPosisiService, FileDokumenService, FlowDataFlowService, FlowDataFlowDetailService, FlowLogFlowService, GaBiayaService, GaBiayaRincianService, GaHotelService, GaKlaimItemService, GaKlaimKategoriService, GaKlaimPengajuanService, GaKlaimPengaturanService, GaPembelianService, GaPembelianItemService, GaTiketService, GaTransportService, GaUniformService, GaUniformMasterService, GaUniformMasterxService, GaUntukService, KalenderCutiKategoriService, KalenderCutiPengajuanService, KalenderCutiPengajuanTanggalService, KalenderCutiPengaturanService, KalenderCutiPengaturanPerpegawaiService, KalenderLemburPengaturanService, KalenderLemburService, PayrollPtkpService, PayrollPilotMasterRatePilotService, PayrollPilotPekerjaanService, PayrollPilotRatePilotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/absensi-jadwal-pegawai-terjadwal.service */ "./src/app/sdk/hr/services/absensi-jadwal-pegawai-terjadwal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalPegawaiTerjadwalService", function() { return _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__["AbsensiJadwalPegawaiTerjadwalService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeService", function() { return _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiJadwalTipeService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe-normal-detail.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe-normal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeNormalDetailService", function() { return _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"]; });

/* harmony import */ var _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/absensi-kehadiran.service */ "./src/app/sdk/hr/services/absensi-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiKehadiranService", function() { return _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__["AbsensiKehadiranService"]; });

/* harmony import */ var _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/absensi-rekap-kehadiran.service */ "./src/app/sdk/hr/services/absensi-rekap-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiRekapKehadiranService", function() { return _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__["AbsensiRekapKehadiranService"]; });

/* harmony import */ var _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotAircraftService", function() { return _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotAircraftService"]; });

/* harmony import */ var _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/absensi-pilot-jadwal-detail.service */ "./src/app/sdk/hr/services/absensi-pilot-jadwal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotJadwalDetailService", function() { return _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__["AbsensiPilotJadwalDetailService"]; });

/* harmony import */ var _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/absensi-pilot-ron.service */ "./src/app/sdk/hr/services/absensi-pilot-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotRonService", function() { return _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__["AbsensiPilotRonService"]; });

/* harmony import */ var _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/akun-billing.service */ "./src/app/sdk/hr/services/akun-billing.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingService", function() { return _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__["AkunBillingService"]; });

/* harmony import */ var _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/akun-billing-category.service */ "./src/app/sdk/hr/services/akun-billing-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingCategoryService", function() { return _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__["AkunBillingCategoryService"]; });

/* harmony import */ var _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/akun-cash-advance.service */ "./src/app/sdk/hr/services/akun-cash-advance.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunCashAdvanceService", function() { return _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__["AkunCashAdvanceService"]; });

/* harmony import */ var _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/akun-expenses-summary.service */ "./src/app/sdk/hr/services/akun-expenses-summary.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryService", function() { return _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__["AkunExpensesSummaryService"]; });

/* harmony import */ var _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/akun-expenses-summary-item.service */ "./src/app/sdk/hr/services/akun-expenses-summary-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryItemService", function() { return _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__["AkunExpensesSummaryItemService"]; });

/* harmony import */ var _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/akun-reimburse.service */ "./src/app/sdk/hr/services/akun-reimburse.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseService", function() { return _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__["AkunReimburseService"]; });

/* harmony import */ var _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/akun-reimburse-item.service */ "./src/app/sdk/hr/services/akun-reimburse-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseItemService", function() { return _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__["AkunReimburseItemService"]; });

/* harmony import */ var _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/akun-untuk-akun.service */ "./src/app/sdk/hr/services/akun-untuk-akun.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunUntukAkunService", function() { return _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__["AkunUntukAkunService"]; });

/* harmony import */ var _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/company-acara.service */ "./src/app/sdk/hr/services/company-acara.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyAcaraService", function() { return _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__["CompanyAcaraService"]; });

/* harmony import */ var _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/company-departemen.service */ "./src/app/sdk/hr/services/company-departemen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDepartemenService", function() { return _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__["CompanyDepartemenService"]; });

/* harmony import */ var _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/company-divisi.service */ "./src/app/sdk/hr/services/company-divisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDivisiService", function() { return _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__["CompanyDivisiService"]; });

/* harmony import */ var _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/company-jabatan.service */ "./src/app/sdk/hr/services/company-jabatan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyJabatanService", function() { return _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__["CompanyJabatanService"]; });

/* harmony import */ var _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/company-kantor.service */ "./src/app/sdk/hr/services/company-kantor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyKantorService", function() { return _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__["CompanyKantorService"]; });

/* harmony import */ var _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/company-letters.service */ "./src/app/sdk/hr/services/company-letters.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLettersService", function() { return _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__["CompanyLettersService"]; });

/* harmony import */ var _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/company-lisensi.service */ "./src/app/sdk/hr/services/company-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLisensiService", function() { return _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__["CompanyLisensiService"]; });

/* harmony import */ var _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/company-pangkat.service */ "./src/app/sdk/hr/services/company-pangkat.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPangkatService", function() { return _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__["CompanyPangkatService"]; });

/* harmony import */ var _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/company-pengumuman.service */ "./src/app/sdk/hr/services/company-pengumuman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPengumumanService", function() { return _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__["CompanyPengumumanService"]; });

/* harmony import */ var _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/company-perizinan.service */ "./src/app/sdk/hr/services/company-perizinan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerizinanService", function() { return _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__["CompanyPerizinanService"]; });

/* harmony import */ var _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/company-perusahaan.service */ "./src/app/sdk/hr/services/company-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerusahaanService", function() { return _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__["CompanyPerusahaanService"]; });

/* harmony import */ var _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/direktori-bank-account.service */ "./src/app/sdk/hr/services/direktori-bank-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriBankAccountService", function() { return _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__["DirektoriBankAccountService"]; });

/* harmony import */ var _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/direktori-hr-notes.service */ "./src/app/sdk/hr/services/direktori-hr-notes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriHrNotesService", function() { return _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__["DirektoriHrNotesService"]; });

/* harmony import */ var _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/direktori-kalender-perusahaan.service */ "./src/app/sdk/hr/services/direktori-kalender-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriKalenderPerusahaanService", function() { return _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__["DirektoriKalenderPerusahaanService"]; });

/* harmony import */ var _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/direktori-lisensi-tipe.service */ "./src/app/sdk/hr/services/direktori-lisensi-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriLisensiTipeService", function() { return _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__["DirektoriLisensiTipeService"]; });

/* harmony import */ var _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiService", function() { return _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__["DirektoriPegawaiService"]; });

/* harmony import */ var _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/direktori-pegawai-biodata.service */ "./src/app/sdk/hr/services/direktori-pegawai-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiBiodataService", function() { return _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__["DirektoriPegawaiBiodataService"]; });

/* harmony import */ var _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/direktori-pegawai-card.service */ "./src/app/sdk/hr/services/direktori-pegawai-card.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiCardService", function() { return _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__["DirektoriPegawaiCardService"]; });

/* harmony import */ var _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/direktori-pegawai-emergency.service */ "./src/app/sdk/hr/services/direktori-pegawai-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiEmergencyService", function() { return _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__["DirektoriPegawaiEmergencyService"]; });

/* harmony import */ var _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/direktori-pegawai-keahlian.service */ "./src/app/sdk/hr/services/direktori-pegawai-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeahlianService", function() { return _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__["DirektoriPegawaiKeahlianService"]; });

/* harmony import */ var _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargaService", function() { return _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__["DirektoriPegawaiKeluargaService"]; });

/* harmony import */ var _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/direktori-pegawai-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargalistService", function() { return _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__["DirektoriPegawaiKeluargalistService"]; });

/* harmony import */ var _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/direktori-pegawai-lisensi.service */ "./src/app/sdk/hr/services/direktori-pegawai-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiLisensiService", function() { return _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__["DirektoriPegawaiLisensiService"]; });

/* harmony import */ var _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/direktori-pegawai-master.service */ "./src/app/sdk/hr/services/direktori-pegawai-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiMasterService", function() { return _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__["DirektoriPegawaiMasterService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanService", function() { return _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__["DirektoriPegawaiPendidikanService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanInformalService", function() { return _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__["DirektoriPegawaiPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/direktori-pegawai-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pegawai-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPengalamanService", function() { return _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__["DirektoriPegawaiPengalamanService"]; });

/* harmony import */ var _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/direktori-pegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-pegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPosisiService", function() { return _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__["DirektoriPegawaiPosisiService"]; });

/* harmony import */ var _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/direktori-pegawai-sp.service */ "./src/app/sdk/hr/services/direktori-pegawai-sp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiSpService", function() { return _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__["DirektoriPegawaiSpService"]; });

/* harmony import */ var _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiStatusService", function() { return _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__["DirektoriPegawaiStatusService"]; });

/* harmony import */ var _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/direktori-pegawai-type.service */ "./src/app/sdk/hr/services/direktori-pegawai-type.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiTypeService", function() { return _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__["DirektoriPegawaiTypeService"]; });

/* harmony import */ var _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/direktori-pelamar.service */ "./src/app/sdk/hr/services/direktori-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarService", function() { return _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__["DirektoriPelamarService"]; });

/* harmony import */ var _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/direktori-pelamar-biodata.service */ "./src/app/sdk/hr/services/direktori-pelamar-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarBiodataService", function() { return _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__["DirektoriPelamarBiodataService"]; });

/* harmony import */ var _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/direktori-pelamar-emergency.service */ "./src/app/sdk/hr/services/direktori-pelamar-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarEmergencyService", function() { return _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__["DirektoriPelamarEmergencyService"]; });

/* harmony import */ var _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/direktori-pelamar-idcard.service */ "./src/app/sdk/hr/services/direktori-pelamar-idcard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarIdcardService", function() { return _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__["DirektoriPelamarIdcardService"]; });

/* harmony import */ var _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/direktori-pelamar-keahlian.service */ "./src/app/sdk/hr/services/direktori-pelamar-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeahlianService", function() { return _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__["DirektoriPelamarKeahlianService"]; });

/* harmony import */ var _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/direktori-pelamar-keluarga.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargaService", function() { return _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__["DirektoriPelamarKeluargaService"]; });

/* harmony import */ var _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/direktori-pelamar-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargalistService", function() { return _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__["DirektoriPelamarKeluargalistService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanService", function() { return _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__["DirektoriPelamarPendidikanService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanInformalService", function() { return _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__["DirektoriPelamarPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/direktori-pelamar-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pelamar-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPengalamanService", function() { return _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__["DirektoriPelamarPengalamanService"]; });

/* harmony import */ var _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/direktori-penilaian-pelamar.service */ "./src/app/sdk/hr/services/direktori-penilaian-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPenilaianPelamarService", function() { return _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__["DirektoriPenilaianPelamarService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasService", function() { return _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__["DirektoriPerjalananDinasService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-anggota.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasAnggotaService", function() { return _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__["DirektoriPerjalananDinasAnggotaService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-ron.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasRonService", function() { return _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__["DirektoriPerjalananDinasRonService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiService", function() { return _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__["DirektoriPermintaanPegawaiService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai-list.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiListService", function() { return _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__["DirektoriPermintaanPegawaiListService"]; });

/* harmony import */ var _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./services/direktori-projek.service */ "./src/app/sdk/hr/services/direktori-projek.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekService", function() { return _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__["DirektoriProjekService"]; });

/* harmony import */ var _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./services/direktori-projek-anggota.service */ "./src/app/sdk/hr/services/direktori-projek-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekAnggotaService", function() { return _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__["DirektoriProjekAnggotaService"]; });

/* harmony import */ var _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./services/direktori-promosi.service */ "./src/app/sdk/hr/services/direktori-promosi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPromosiService", function() { return _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__["DirektoriPromosiService"]; });

/* harmony import */ var _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./services/direktori-resign.service */ "./src/app/sdk/hr/services/direktori-resign.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriResignService", function() { return _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__["DirektoriResignService"]; });

/* harmony import */ var _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./services/direktori-sp-tipe.service */ "./src/app/sdk/hr/services/direktori-sp-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriSpTipeService", function() { return _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__["DirektoriSpTipeService"]; });

/* harmony import */ var _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./services/direktori-termination.service */ "./src/app/sdk/hr/services/direktori-termination.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTerminationService", function() { return _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__["DirektoriTerminationService"]; });

/* harmony import */ var _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./services/direktori-training.service */ "./src/app/sdk/hr/services/direktori-training.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingService", function() { return _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__["DirektoriTrainingService"]; });

/* harmony import */ var _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./services/direktori-training-anggota.service */ "./src/app/sdk/hr/services/direktori-training-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingAnggotaService", function() { return _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__["DirektoriTrainingAnggotaService"]; });

/* harmony import */ var _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./services/direktori-training-trainer.service */ "./src/app/sdk/hr/services/direktori-training-trainer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingTrainerService", function() { return _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__["DirektoriTrainingTrainerService"]; });

/* harmony import */ var _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./services/direktori-vpegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-vpegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriVPegawaiPosisiService", function() { return _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__["DirektoriVPegawaiPosisiService"]; });

/* harmony import */ var _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./services/file-dokumen.service */ "./src/app/sdk/hr/services/file-dokumen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDokumenService", function() { return _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__["FileDokumenService"]; });

/* harmony import */ var _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./services/flow-data-flow.service */ "./src/app/sdk/hr/services/flow-data-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowService", function() { return _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__["FlowDataFlowService"]; });

/* harmony import */ var _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./services/flow-data-flow-detail.service */ "./src/app/sdk/hr/services/flow-data-flow-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowDetailService", function() { return _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__["FlowDataFlowDetailService"]; });

/* harmony import */ var _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/flow-log-flow.service */ "./src/app/sdk/hr/services/flow-log-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowLogFlowService", function() { return _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__["FlowLogFlowService"]; });

/* harmony import */ var _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./services/ga-biaya.service */ "./src/app/sdk/hr/services/ga-biaya.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaService", function() { return _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__["GaBiayaService"]; });

/* harmony import */ var _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./services/ga-biaya-rincian.service */ "./src/app/sdk/hr/services/ga-biaya-rincian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaRincianService", function() { return _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__["GaBiayaRincianService"]; });

/* harmony import */ var _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./services/ga-hotel.service */ "./src/app/sdk/hr/services/ga-hotel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaHotelService", function() { return _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__["GaHotelService"]; });

/* harmony import */ var _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./services/ga-klaim-item.service */ "./src/app/sdk/hr/services/ga-klaim-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimItemService", function() { return _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__["GaKlaimItemService"]; });

/* harmony import */ var _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./services/ga-klaim-kategori.service */ "./src/app/sdk/hr/services/ga-klaim-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimKategoriService", function() { return _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__["GaKlaimKategoriService"]; });

/* harmony import */ var _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./services/ga-klaim-pengajuan.service */ "./src/app/sdk/hr/services/ga-klaim-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengajuanService", function() { return _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__["GaKlaimPengajuanService"]; });

/* harmony import */ var _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./services/ga-klaim-pengaturan.service */ "./src/app/sdk/hr/services/ga-klaim-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengaturanService", function() { return _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__["GaKlaimPengaturanService"]; });

/* harmony import */ var _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./services/ga-pembelian.service */ "./src/app/sdk/hr/services/ga-pembelian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianService", function() { return _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__["GaPembelianService"]; });

/* harmony import */ var _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./services/ga-pembelian-item.service */ "./src/app/sdk/hr/services/ga-pembelian-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianItemService", function() { return _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__["GaPembelianItemService"]; });

/* harmony import */ var _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./services/ga-tiket.service */ "./src/app/sdk/hr/services/ga-tiket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTiketService", function() { return _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__["GaTiketService"]; });

/* harmony import */ var _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./services/ga-transport.service */ "./src/app/sdk/hr/services/ga-transport.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTransportService", function() { return _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__["GaTransportService"]; });

/* harmony import */ var _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./services/ga-uniform.service */ "./src/app/sdk/hr/services/ga-uniform.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformService", function() { return _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__["GaUniformService"]; });

/* harmony import */ var _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./services/ga-uniform-master.service */ "./src/app/sdk/hr/services/ga-uniform-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterService", function() { return _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__["GaUniformMasterService"]; });

/* harmony import */ var _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./services/ga-uniform-masterx.service */ "./src/app/sdk/hr/services/ga-uniform-masterx.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterxService", function() { return _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__["GaUniformMasterxService"]; });

/* harmony import */ var _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./services/ga-untuk.service */ "./src/app/sdk/hr/services/ga-untuk.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUntukService", function() { return _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__["GaUntukService"]; });

/* harmony import */ var _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./services/kalender-cuti-kategori.service */ "./src/app/sdk/hr/services/kalender-cuti-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiKategoriService", function() { return _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__["KalenderCutiKategoriService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanService", function() { return _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__["KalenderCutiPengajuanService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan-tanggal.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan-tanggal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanTanggalService", function() { return _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__["KalenderCutiPengajuanTanggalService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanService", function() { return _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__["KalenderCutiPengaturanService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan-perpegawai.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan-perpegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanPerpegawaiService", function() { return _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__["KalenderCutiPengaturanPerpegawaiService"]; });

/* harmony import */ var _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./services/kalender-lembur-pengaturan.service */ "./src/app/sdk/hr/services/kalender-lembur-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburPengaturanService", function() { return _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__["KalenderLemburPengaturanService"]; });

/* harmony import */ var _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./services/kalender-lembur.service */ "./src/app/sdk/hr/services/kalender-lembur.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburService", function() { return _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__["KalenderLemburService"]; });

/* harmony import */ var _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./services/payroll-ptkp.service */ "./src/app/sdk/hr/services/payroll-ptkp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPtkpService", function() { return _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__["PayrollPtkpService"]; });

/* harmony import */ var _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./services/payroll-pilot-master-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-master-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotMasterRatePilotService", function() { return _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__["PayrollPilotMasterRatePilotService"]; });

/* harmony import */ var _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./services/payroll-pilot-pekerjaan.service */ "./src/app/sdk/hr/services/payroll-pilot-pekerjaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotPekerjaanService", function() { return _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__["PayrollPilotPekerjaanService"]; });

/* harmony import */ var _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./services/payroll-pilot-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotRatePilotService", function() { return _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__["PayrollPilotRatePilotService"]; });










































































































/***/ })

}]);
//# sourceMappingURL=pengaturan-mastercuti-mastercuti-module.js.map