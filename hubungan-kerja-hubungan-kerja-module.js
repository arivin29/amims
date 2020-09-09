(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hubungan-kerja-hubungan-kerja-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Position</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Sk number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Input number\" formControlName=\"nomor_sk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_status\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\"\r\n                                        nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"id_departement\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Divisi\"\r\n                                    (ngModelChange)=\"getJabatan()\" formControlName=\"id_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Positions</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Jabatan\"\r\n                                    formControlName=\"id_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Kantor\"\r\n                                    formControlName=\"id_kantor\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Direct supervisor\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Atasan\"\r\n                                    formControlName=\"id_pegawai_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"from\"\r\n                                            formControlName=\"tanggal_diangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>until</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"until\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_dicabut\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Posisi</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{pegawai_posisi.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{pegawai_posisi.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"14\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">SK number</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.nomor_sk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Name</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                                    {{pegawai.nama_belakang}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee Id</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Position</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{jabatan.nama_jabatan}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Division</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{divisi.nama_divisi}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Departement</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{departement.nama_departemen}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Grade</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{pangkat.position_level}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Office</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{kantor.nama_kantor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Direct supervisor</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{PegawaiMaster.nama_depan}} {{PegawaiMaster.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee status</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{dataStatus.status}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Start date</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.tanggal_diangkat| date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Untill date</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.tanggal_dicabut| date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">File :</td>\r\n                                <td class=\"pr-0 text-right text-dark\">\r\n                                    <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"pegawai_posisi.id_dokumen\">\r\n                                    </erp-download-mode1>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h6>Status\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"pegawai_posisi.status | status\">\r\n                            {{ pegawai_posisi.status | titlecase }}\r\n                        </nz-tag>\r\n                    </h6><br>\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h6>Activities</h6><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Position</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Sk number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Input number\" formControlName=\"nomor_sk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_status\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\"\r\n                                        nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"id_departement\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Divisi\"  [nzDisabled] = \"listDivisi.length < 1\"\r\n                                    (ngModelChange)=\"getJabatan()\" formControlName=\"id_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Positions</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Jabatan\" [nzDisabled] = \"listJabatan.length < 1\"\r\n                                    formControlName=\"id_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Kantor\"\r\n                                    formControlName=\"id_kantor\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Direct supervisor </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Atasan\"\r\n                                    formControlName=\"id_pegawai_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"from\"\r\n                                            formControlName=\"tanggal_diangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>until</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"until\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_dicabut\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-form-item>\r\n                    <nz-form-label>change File</nz-form-label>\r\n                    <nz-form-control>\r\n                        <button nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i nz-icon\r\n                                nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</button>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                <erp-single-upload></erp-single-upload>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Position Records</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Positions\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataPosisi\" [nzShowPagination]=\"true\">\r\n            <thead  (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nomor_sk\">ID</th>\r\n                    <th nzShowSort nzSortKey=\"nama_jabatan\">Position</th>\r\n                    <th nzShowSort nzSortKey=\"kode_kantor\">Office</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_diangkat\">Start date</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_dicabut\">Untill date</th>\r\n                    <th >Direct Spv</th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>\r\n                        <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                    </td>\r\n                    <td>{{ data.nomor_sk }}</td>\r\n                    <td>{{ data.nama_jabatan }}</td>\r\n                    <td>{{ data.kode_kantor }}</td>\r\n                    <td>{{ data.tanggal_diangkat | date }}</td>\r\n                    <td>{{ data.tanggal_dicabut?data.tanggal_dicabut:'Now'}}</td>\r\n                    <td>{{ data?.pegawai?.nama_depan}} {{ data?.pegawai?.nama_belakang}}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_pegawai_posisi]\"\r\n                                    *ngIf=\"data.status == 'draft'\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail/',data.id_pegawai_posisi]\">\r\n                                    <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pegawai_posisi)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/add/add.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/hubungan-kerja/add/add.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Position</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Sk number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Input number\" formControlName=\"nomor_sk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_status\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\"\r\n                                        nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"id_departement\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Divisi\"\r\n                                    (ngModelChange)=\"getJabatan()\" formControlName=\"id_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Positions</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Jabatan\"\r\n                                    formControlName=\"id_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Kantor\"\r\n                                    formControlName=\"id_kantor\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Direct supervisor\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Atasan\"\r\n                                    formControlName=\"id_pegawai_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"from\"\r\n                                            formControlName=\"tanggal_diangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>until</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"until\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_dicabut\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/detail/detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/hubungan-kerja/detail/detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Posisi</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{pegawai_posisi.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{pegawai_posisi.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"14\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">SK number</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.nomor_sk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Name</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                                    {{pegawai.nama_belakang}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee Id</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Position</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{jabatan.nama_jabatan}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Division</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{divisi.nama_divisi}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Departement</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{departement.nama_departemen}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Grade</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{pangkat.position_level}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Office</td>\r\n                                <td class=\"pr-0 text-right text-dark\">{{kantor.nama_kantor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Direct supervisor</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{PegawaiMaster.nama_depan}} {{PegawaiMaster.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee status</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{dataStatus.status}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Start date</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.tanggal_diangkat| date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Untill date</td>\r\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai_posisi.tanggal_dicabut| date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center\">\r\n                                <erp-approval-standar></erp-approval-standar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"10\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} by {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/edit/edit.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/hubungan-kerja/edit/edit.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Position</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Sk number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Input number\" formControlName=\"nomor_sk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_status\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\"\r\n                                        nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"id_departement\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Divisi\"  [nzDisabled] = \"listDivisi.length < 1\"\r\n                                    (ngModelChange)=\"getJabatan()\" formControlName=\"id_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Positions</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Jabatan\" [nzDisabled] = \"listJabatan.length < 1\"\r\n                                    formControlName=\"id_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Departemen\"\r\n                                    formControlName=\"id_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Kantor\"\r\n                                    formControlName=\"id_kantor\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Direct supervisor </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih Atasan\"\r\n                                    formControlName=\"id_pegawai_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"from\"\r\n                                            formControlName=\"tanggal_diangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>until</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"until\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_dicabut\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-form-item>\r\n                    <nz-form-label>change File</nz-form-label>\r\n                    <nz-form-control>\r\n                        <button nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i nz-icon\r\n                                nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</button>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                <erp-single-upload></erp-single-upload>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/hubungan-kerja/list/list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Position Records</h5>\r\n            </div>\r\n            <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                    routerLinkActive=\"router-link-active\">\r\n                    New Positions\r\n                </a>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nz-table #basicTable [nzData]=\"dataPosisi\" [nzShowPagination]=\"true\">\r\n                <thead>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">ID</th>\r\n                        <th nzShowSort nzSortKey=\"tipe_lisensi\">Position</th>\r\n                        <th>Office</th>\r\n                        <th>Start date</th>\r\n                        <th>Untill date</th>\r\n                        <th>Direct Spv</th>\r\n                        <th>File</th>\r\n                        <!-- <th class=\"text-right\">Action</th> -->\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable.data\">\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_jabatan }}</td>\r\n                        <td>{{ data.nama_kantor }}</td>\r\n                        <td>{{ data.tanggal_diangkat | date }}</td>\r\n                        <td>{{ data.tanggal_dicabut | date}}</td>\r\n                        <td>{{ data.nama_depan}} {{ data.nama_belakang}}</td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                        </td>\r\n                        <!-- <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit/',data.id_pegawai_posisi]\" *ngIf=\"data.status == 'draft'\">\r\n                                        Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail/',data.id_pegawai_posisi]\">\r\n                                        Detail\r\n                                    </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pegawai_posisi)\"\r\n                                            (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2h1YnVuZ2FuLWtlcmphL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(companyDepartemenService, companyJabatanService, companyKantorService, companyDivisiService, companyPangkatService, direktoriPegawaiStatusService, direktoriPegawaiPosisiService, direktoriPegawaiMasterService, spinner, router, pesan, pegawaiDetailService, fb) {
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyDivisiService = companyDivisiService;
        this.companyPangkatService = companyPangkatService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.id_pegawai = '';
        this.pegawai_posisi = {};
        this.listPegawai = [];
        this.listJabatan = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listPangkat = [];
        this.listStatus = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPreeData();
        this.getDepartemen();
        this.form();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
    };
    AddComponent.prototype.getDepartemen = function () {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.id_departement,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    AddComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.id_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_departement: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_diangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dicabut: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_sk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_posisi = this.dataForm.value;
        this.direktoriPegawaiPosisiService
            .postDirektoriPegawaiPosisis(this.pegawai_posisi)
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2h1YnVuZ2FuLWtlcmphL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");









var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, direktoriPegawaiMasterService, direktoriPegawaiStatusService, companyJabatanService, companyKantorService, companyPangkatService, companyDepartemenService, companyDivisiService, direktoriPegawaiPosisiService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService, standarApprovalService, toolsLogFlowService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyPangkatService = companyPangkatService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyDivisiService = companyDivisiService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.PegawaiMaster = {};
        this.jabatan = {};
        this.departement = {};
        this.divisi = {};
        this.pangkat = {};
        this.kantor = {};
        this.dataStatus = {};
        this.pegawai_posisi = {};
        this.id_pegawai_posisi = '';
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_posisi')) {
                _this.id_pegawai_posisi = data.get('id_pegawai_posisi');
                console.log(data.get('id_pegawai_posisi'));
            }
            _this.getPosisi();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getPosisi();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getPosisi = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisisId(this.id_pegawai_posisi)
            .subscribe(function (data) {
            _this.pegawai_posisi = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getJabatan(data.data.id_jabatan);
            _this.getDepartemen(data.data.id_departement);
            _this.getDivisi(data.data.id_divisi);
            _this.getPangkat(data.data.id_pangkat);
            _this.getKantor(data.data.id_kantor);
            _this.getPegawaiMaster(data.data.id_pegawai_atasan);
            _this.getStatus(data.data.id_status);
            _this.params = {
                id: data.data.id_pegawai_posisi,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_pegawai_posisi"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
        });
    };
    DetailComponent.prototype.getPegawaiMaster = function (id_pegawai_atasan) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(id_pegawai_atasan).subscribe(function (data) {
            _this.PegawaiMaster = data.data;
        });
    };
    DetailComponent.prototype.getJabatan = function (id_jabatan) {
        var _this = this;
        this.companyJabatanService.getCompanyJabatansId(id_jabatan).subscribe(function (data) {
            _this.jabatan = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (id_departement) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(id_departement).subscribe(function (data) {
            _this.departement = data.data;
        });
    };
    DetailComponent.prototype.getDivisi = function (id_divisi) {
        var _this = this;
        this.companyDivisiService.getCompanyDivisisId(id_divisi).subscribe(function (data) {
            _this.divisi = data.data;
        });
    };
    DetailComponent.prototype.getPangkat = function (id_pangkat) {
        var _this = this;
        this.companyPangkatService.getCompanyPangkatsId(id_pangkat).subscribe(function (data) {
            _this.pangkat = data.data;
        });
    };
    DetailComponent.prototype.getKantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.kantor = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getStatus = function (id_status) {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatusesId(id_status).subscribe(function (data) {
            _this.dataStatus = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_pegawai_posisi })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2h1YnVuZ2FuLWtlcmphL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(companyDepartemenService, companyJabatanService, companyKantorService, companyDivisiService, companyPangkatService, direktoriPegawaiStatusService, direktoriPegawaiPosisiService, direktoriPegawaiMasterService, spinner, router, pesan, activatedRoute, pegawaiDetailService, fb, singleUploadService) {
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyDivisiService = companyDivisiService;
        this.companyPangkatService = companyPangkatService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.singleUploadService = singleUploadService;
        this.id_pegawai = '';
        this.pegawai_posisi = {};
        this.id_pegawai_posisi = '';
        this.toogleUpload = false;
        this.listPegawai = [];
        this.listJabatan = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listPangkat = [];
        this.listStatus = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_posisi')) {
                _this.id_pegawai_posisi = data.get('id_pegawai_posisi');
                console.log(data.get('id_pegawai_posisi'));
                _this.getPreeData();
                _this.getData();
                _this.form();
            }
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pegawai_posisi.finish') {
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
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.id_departement,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    EditComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.id_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisisId(this.id_pegawai_posisi).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "pegawai_posisi",
                for_table: "erp_hr.pegawai_posisi",
                for_module_id: data.data.id_pegawai_posisi
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_departement: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tipe_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_diangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dicabut: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pegawai_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_sk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_posisi = this.dataForm.value;
        this.direktoriPegawaiPosisiService
            .putDirektoriPegawaiPosisisId({ id: this.id_pegawai_posisi, body: this.pegawai_posisi })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/hubungan-kerja-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/hubungan-kerja-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HubunganKerjaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubunganKerjaRoutingModule", function() { return HubunganKerjaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.ts");







var routes = [
    {
        path: 'detail/:id_pegawai_posisi',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
    },
    {
        path: 'edit/:id_pegawai_posisi',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    },
];
var HubunganKerjaRoutingModule = /** @class */ (function () {
    function HubunganKerjaRoutingModule() {
    }
    HubunganKerjaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], HubunganKerjaRoutingModule);
    return HubunganKerjaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/hubungan-kerja.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/hubungan-kerja.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: HubunganKerjaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubunganKerjaModule", function() { return HubunganKerjaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hubungan_kerja_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hubungan-kerja-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/hubungan-kerja-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");















var HubunganKerjaModule = /** @class */ (function () {
    function HubunganKerjaModule() {
    }
    HubunganKerjaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hubungan_kerja_routing_module__WEBPACK_IMPORTED_MODULE_3__["HubunganKerjaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], HubunganKerjaModule);
    return HubunganKerjaModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2h1YnVuZ2FuLWtlcmphL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiPosisiService, spinner, router, pegawaiDetailService, nzMessageService, direktoriPegawaiService) {
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.id_pegawai = '';
        this.dataPosisi = [];
        this.id_pegawai_posisi = '';
        this.sortKey = null;
        this.sortValue = null;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPosisi();
    };
    ListComponent.prototype.getPosisi = function () {
        var _this = this;
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisis(JSON.stringify({ id_pegawai: this.id_pegawai, sortKey: this.sortKey, sortValue: this.sortValue })).subscribe(function (data) {
            _this.dataPosisi = data.data;
            _this.dataPosisi.forEach(function (item, index) {
                _this.getPegawai(index, item.id_pegawai_atasan);
            });
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getPosisi();
    };
    ListComponent.prototype.getPegawai = function (index, id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPosisi[index]['pegawai'] = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService
            .deleteDirektoriPegawaiPosisisId(id)
            .subscribe(function (data) {
            _this.getPosisi();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'detail']);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/hubungan-kerja/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/add/add.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/add/add.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaHVidW5nYW4ta2VyamEvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/add/add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/add/add.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(companyDepartemenService, companyJabatanService, companyKantorService, companyDivisiService, companyPangkatService, direktoriPegawaiStatusService, direktoriPegawaiPosisiService, direktoriPegawaiMasterService, spinner, router, pesan, pegawaiDetailService, fb) {
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyDivisiService = companyDivisiService;
        this.companyPangkatService = companyPangkatService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.id_pegawai = '';
        this.pegawai_posisi = {};
        this.listPegawai = [];
        this.listJabatan = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listPangkat = [];
        this.listStatus = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPreeData();
        this.getDepartemen();
        this.form();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
    };
    AddComponent.prototype.getDepartemen = function () {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.id_departement,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    AddComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.id_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_departement: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_diangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dicabut: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_sk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_posisi = this.dataForm.value;
        this.direktoriPegawaiPosisiService
            .postDirektoriPegawaiPosisis(this.pegawai_posisi)
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/hubungan-kerja/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/detail/detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/detail/detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaHVidW5nYW4ta2VyamEvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/detail/detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/detail/detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");









var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, direktoriPegawaiMasterService, direktoriPegawaiStatusService, companyJabatanService, companyKantorService, companyPangkatService, companyDepartemenService, companyDivisiService, direktoriPegawaiPosisiService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService, standarApprovalService, toolsLogFlowService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyPangkatService = companyPangkatService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyDivisiService = companyDivisiService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.PegawaiMaster = {};
        this.jabatan = {};
        this.departement = {};
        this.divisi = {};
        this.pangkat = {};
        this.kantor = {};
        this.dataStatus = {};
        this.pegawai_posisi = {};
        this.id_pegawai_posisi = '';
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_posisi')) {
                _this.id_pegawai_posisi = data.get('id_pegawai_posisi');
                console.log(data.get('id_pegawai_posisi'));
            }
            _this.getPosisi();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getPosisi();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getPosisi = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisisId(this.id_pegawai_posisi)
            .subscribe(function (data) {
            _this.pegawai_posisi = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getJabatan(data.data.id_jabatan);
            _this.getDepartemen(data.data.id_departement);
            _this.getDivisi(data.data.id_divisi);
            _this.getPangkat(data.data.id_pangkat);
            _this.getKantor(data.data.id_kantor);
            _this.getPegawaiMaster(data.data.id_pegawai_atasan);
            _this.getStatus(data.data.id_status);
            _this.params = {
                id: data.data.id_pegawai_posisi,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_pegawai_posisi"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
        });
    };
    DetailComponent.prototype.getPegawaiMaster = function (id_pegawai_atasan) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(id_pegawai_atasan).subscribe(function (data) {
            _this.PegawaiMaster = data.data;
        });
    };
    DetailComponent.prototype.getJabatan = function (id_jabatan) {
        var _this = this;
        this.companyJabatanService.getCompanyJabatansId(id_jabatan).subscribe(function (data) {
            _this.jabatan = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (id_departement) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(id_departement).subscribe(function (data) {
            _this.departement = data.data;
        });
    };
    DetailComponent.prototype.getDivisi = function (id_divisi) {
        var _this = this;
        this.companyDivisiService.getCompanyDivisisId(id_divisi).subscribe(function (data) {
            _this.divisi = data.data;
        });
    };
    DetailComponent.prototype.getPangkat = function (id_pangkat) {
        var _this = this;
        this.companyPangkatService.getCompanyPangkatsId(id_pangkat).subscribe(function (data) {
            _this.pangkat = data.data;
        });
    };
    DetailComponent.prototype.getKantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.kantor = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getStatus = function (id_status) {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatusesId(id_status).subscribe(function (data) {
            _this.dataStatus = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_pegawai_posisi })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/hubungan-kerja/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_8__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/edit/edit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/edit/edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaHVidW5nYW4ta2VyamEvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/edit/edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/edit/edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(companyDepartemenService, companyJabatanService, companyKantorService, companyDivisiService, companyPangkatService, direktoriPegawaiStatusService, direktoriPegawaiPosisiService, direktoriPegawaiMasterService, spinner, router, pesan, activatedRoute, pegawaiDetailService, fb, singleUploadService) {
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyKantorService = companyKantorService;
        this.companyDivisiService = companyDivisiService;
        this.companyPangkatService = companyPangkatService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.singleUploadService = singleUploadService;
        this.id_pegawai = '';
        this.pegawai_posisi = {};
        this.id_pegawai_posisi = '';
        this.toogleUpload = false;
        this.listPegawai = [];
        this.listJabatan = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listPangkat = [];
        this.listStatus = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_posisi')) {
                _this.id_pegawai_posisi = data.get('id_pegawai_posisi');
                console.log(data.get('id_pegawai_posisi'));
                _this.getPreeData();
                _this.getData();
                _this.form();
            }
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pegawai_posisi.finish') {
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
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.id_departement,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    EditComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.id_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisisId(this.id_pegawai_posisi).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "pegawai_posisi",
                for_table: "erp_hr.pegawai_posisi",
                for_module_id: data.data.id_pegawai_posisi
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_departement: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tipe_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_diangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dicabut: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pegawai_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_sk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_posisi = this.dataForm.value;
        this.direktoriPegawaiPosisiService
            .putDirektoriPegawaiPosisisId({ id: this.id_pegawai_posisi, body: this.pegawai_posisi })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'hubungan-kerja', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/hubungan-kerja/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/hubungan-kerja-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/hubungan-kerja-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HubunganKerjaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubunganKerjaRoutingModule", function() { return HubunganKerjaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/hubungan-kerja/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/hubungan-kerja/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/hubungan-kerja/edit/edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/hubungan-kerja/detail/detail.component.ts");







var routes = [
    {
        path: 'detail/:id_pegawai_posisi',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
    },
    {
        path: 'edit/:id_pegawai_posisi',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    },
];
var HubunganKerjaRoutingModule = /** @class */ (function () {
    function HubunganKerjaRoutingModule() {
    }
    HubunganKerjaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], HubunganKerjaRoutingModule);
    return HubunganKerjaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/hubungan-kerja.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/hubungan-kerja.module.ts ***!
  \***********************************************************************/
/*! exports provided: HubunganKerjaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubunganKerjaModule", function() { return HubunganKerjaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hubungan_kerja_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hubungan-kerja-routing.module */ "./src/app/pages/profile/hubungan-kerja/hubungan-kerja-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/hubungan-kerja/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/hubungan-kerja/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/hubungan-kerja/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/hubungan-kerja/list/list.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");














var HubunganKerjaModule = /** @class */ (function () {
    function HubunganKerjaModule() {
    }
    HubunganKerjaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hubungan_kerja_routing_module__WEBPACK_IMPORTED_MODULE_3__["HubunganKerjaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__["DocumentModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], HubunganKerjaModule);
    return HubunganKerjaModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/list/list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/list/list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaHVidW5nYW4ta2VyamEvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/hubungan-kerja/list/list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/hubungan-kerja/list/list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiPosisiService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiPosisiService = direktoriPegawaiPosisiService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataPosisi = [];
        this.id_pegawai_posisi = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPosisi();
    };
    ListComponent.prototype.getPosisi = function () {
        var _this = this;
        this.direktoriPegawaiPosisiService.getDirektoriPegawaiPosisis(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPosisi = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPosisiService
            .deleteDirektoriPegawaiPosisisId(id)
            .subscribe(function (data) {
            _this.getPosisi();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'detail']);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/hubungan-kerja/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/hubungan-kerja/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=hubungan-kerja-hubungan-kerja-module.js.map