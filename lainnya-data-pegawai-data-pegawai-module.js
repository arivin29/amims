(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lainnya-data-pegawai-data-pegawai-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Employee Information</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Name</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                        {{pegawai.nama_belakang}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">No Induk</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_induk}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">No Absensi</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_absensi}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.kewarganegaraan}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Gender</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_kelamin}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">HP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Email</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.email}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Join date</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_masuk | date}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Resign date</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_keluar?pegawai.tanggal_keluar: '-'}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Status</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{status.status}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{type.type}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Schedule type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{jadwal.tipe}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JKK</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jkk}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JKM</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jkm}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JHT</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jht}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS Kesehatan</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_kesehatan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Claim category</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{claim.nama_kategori}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">PTKP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{ptkp.jenis_tk}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">NPWP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.npwp}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Employee</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee ID</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Employee ID\" formControlName=\"no_induk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Attendance Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Attendance number\" formControlName=\"no_absensi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>First Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"First Name\" formControlName=\"nama_depan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Last Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Last Name\" formControlName=\"nama_belakang\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Gender\" formControlName=\"jenis_kelamin\">\r\n                                    <nz-option nzLabel=\"Male\" nzValue=\"laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Female\" nzValue=\"wanita\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nationality</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nationality\" formControlName=\"kewarganegaraan\">\r\n                                    <nz-option nzLabel=\"Indonesian Citizens (WNI)\" nzValue=\"wni\"></nz-option>\r\n                                    <nz-option nzLabel=\"Foreign Nationals (WNA)\" nzValue=\"wna\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Place of Birth </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Place of Birth\" formControlName=\"tempat_lahir\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth of Date </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Birth of Date\"\r\n                                    formControlName=\"tanggal_lahir\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Religion</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Religion\" formControlName=\"agama\">\r\n                                    <nz-option nzLabel=\"Moslem\" nzValue=\"Moslem\"></nz-option>\r\n                                    <nz-option nzLabel=\"Catholic\" nzValue=\"Catholic\"></nz-option>\r\n                                    <nz-option nzLabel=\"Christian\" nzValue=\"Christian\"></nz-option>\r\n                                    <nz-option nzLabel=\"Buddha\" nzValue=\"Buddha\"></nz-option>\r\n                                    <nz-option nzLabel=\"Hindu\" nzValue=\"Hindu\"></nz-option>\r\n                                    <nz-option nzLabel=\"Konghuchu\" nzValue=\"Konghuchu\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Martial Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Martial Status\"\r\n                                    formControlName=\"status_perkawinan\">\r\n                                    <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                    <nz-option nzLabel=\"Married\" nzValue=\"Menikah\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/1\" nzValue=\"m1\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/2\" nzValue=\"m2\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/3\" nzValue=\"m3\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/4\" nzValue=\"m4\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/5\" nzValue=\"m5\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/6\" nzValue=\"m6\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/7\" nzValue=\"m7\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/8\" nzValue=\"m8\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/9\" nzValue=\"m9\"></nz-option>\r\n                                    <nz-option nzLabel=\"Widower\" nzValue=\"Widower\"></nz-option>\r\n                                    <nz-option nzLabel=\"Widow\" nzValue=\"Widow\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Email</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Email Address\" formControlName=\"email\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"Phone\" formControlName=\"phone\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile (1)</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"Mobile\" formControlName=\"hp\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile (2) </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"Mobile\" formControlName=\"hp2\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"status_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\" nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"type_pegawai\" nzAllowClear nzPlaceHolder=\"Employee Type\">\r\n                                    <nz-option *ngFor=\"let item of listType\" nzValue=\"{{item.id_pegawai_type}}\" nzLabel=\"{{item.type}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Joining Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Joining Date\" formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>PTKP Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_ptkp\" nzAllowClear nzPlaceHolder=\"PTKP Code\">\r\n                                    <nz-option *ngFor=\"let item of listPTKP\" nzValue=\"{{item.id_ptkp}}\" nzLabel=\"{{item.jenis_tk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Schedule Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_jadwal_tipe\" nzAllowClear nzPlaceHolder=\"Schedule Type\">\r\n                                    <nz-option *ngFor=\"let item of listJadwalTipe\" nzValue=\"{{item.id_jadwal_tipe}}\" nzLabel=\"{{item.tipe}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Claim Category</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_klaim_kategori\" nzAllowClear nzPlaceHolder=\"Claim Category\">\r\n                                    <nz-option *ngFor=\"let item of listKlaimKategori\" nzValue=\"{{item.id_klaim_kategori}}\" nzLabel=\"{{item.nama_kategori}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JKK</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jkk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JKM</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jkm\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JHT</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jht\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JP</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jp\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS Kesehatan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_kesehatan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>NPWP</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"npwp\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Employee Information</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Name</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                        {{pegawai.nama_belakang}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">No Induk</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_induk}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">No Absensi</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_absensi}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.kewarganegaraan}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Gender</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_kelamin}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">HP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Email</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.email}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Join date</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_masuk | date}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Resign date</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_keluar?pegawai.tanggal_keluar: '-'}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Status</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{status.status}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{type.type}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Schedule type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{jadwal.tipe}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JKK</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jkk}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JKM</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jkm}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JHT</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jht}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS JP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_jp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">BPJS Kesehatan</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.bpjs_kesehatan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Claim category</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{claim.nama_kategori}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">PTKP</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{ptkp.jenis_tk}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Employee</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee ID</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Employee ID\" formControlName=\"no_induk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Attendance Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Attendance number\" formControlName=\"no_absensi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>First Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"First Name\" formControlName=\"nama_depan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Last Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Last Name\" formControlName=\"nama_belakang\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Gender\" formControlName=\"jenis_kelamin\">\r\n                                    <nz-option nzLabel=\"Male\" nzValue=\"laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Female\" nzValue=\"wanita\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nationality</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nationality\" formControlName=\"kewarganegaraan\">\r\n                                    <nz-option nzLabel=\"Indonesian Citizens (WNI)\" nzValue=\"wni\"></nz-option>\r\n                                    <nz-option nzLabel=\"Foreign Nationals (WNA)\" nzValue=\"wna\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Place of Birth </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Place of Birth\" formControlName=\"tempat_lahir\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth of Date </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Birth of Date\"\r\n                                    formControlName=\"tanggal_lahir\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Religion</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Religion\" formControlName=\"agama\">\r\n                                    <nz-option nzLabel=\"Moslem\" nzValue=\"Moslem\"></nz-option>\r\n                                    <nz-option nzLabel=\"Catholic\" nzValue=\"Catholic\"></nz-option>\r\n                                    <nz-option nzLabel=\"Christian\" nzValue=\"Christian\"></nz-option>\r\n                                    <nz-option nzLabel=\"Buddha\" nzValue=\"Buddha\"></nz-option>\r\n                                    <nz-option nzLabel=\"Hindu\" nzValue=\"Hindu\"></nz-option>\r\n                                    <nz-option nzLabel=\"Konghuchu\" nzValue=\"Konghuchu\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Martial Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Martial Status\"\r\n                                    formControlName=\"status_perkawinan\">\r\n                                    <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                    <nz-option nzLabel=\"Married\" nzValue=\"Menikah\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/1\" nzValue=\"m1\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/2\" nzValue=\"m2\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/3\" nzValue=\"m3\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/4\" nzValue=\"m4\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/5\" nzValue=\"m5\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/6\" nzValue=\"m6\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/7\" nzValue=\"m7\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/8\" nzValue=\"m8\"></nz-option>\r\n                                    <nz-option nzLabel=\"M/9\" nzValue=\"m9\"></nz-option>\r\n                                    <nz-option nzLabel=\"Widower\" nzValue=\"Widower\"></nz-option>\r\n                                    <nz-option nzLabel=\"Widow\" nzValue=\"Widow\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Email</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Email Address\" formControlName=\"email\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Phone\" formControlName=\"phone\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile (1)</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Mobile\" formControlName=\"hp\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile (2) </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Mobile\" formControlName=\"hp2\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"status_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option *ngFor=\"let item of listStatus\" nzValue=\"{{item.id_pegawai_status}}\" nzLabel=\"{{item.status}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"type_pegawai\" nzAllowClear nzPlaceHolder=\"Employee Type\">\r\n                                    <nz-option *ngFor=\"let item of listType\" nzValue=\"{{item.id_pegawai_type}}\" nzLabel=\"{{item.type}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Joining Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Joining Date\" formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>PTKP Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_ptkp\" nzAllowClear nzPlaceHolder=\"PTKP Code\">\r\n                                    <nz-option *ngFor=\"let item of listPTKP\" nzValue=\"{{item.id_ptkp}}\" nzLabel=\"{{item.jenis_tk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Schedule Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_jadwal_tipe\" nzAllowClear nzPlaceHolder=\"Schedule Type\">\r\n                                    <nz-option *ngFor=\"let item of listJadwalTipe\" nzValue=\"{{item.id_jadwal_tipe}}\" nzLabel=\"{{item.tipe}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Claim Category</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_klaim_kategori\" nzAllowClear nzPlaceHolder=\"Claim Category\">\r\n                                    <nz-option *ngFor=\"let item of listKlaimKategori\" nzValue=\"{{item.id_klaim_kategori}}\" nzLabel=\"{{item.nama_kategori}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JKK</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jkk\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JKM</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jkm\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JHT</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jht\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS JP</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_jp\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>BPJS Kesehatan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Number\" formControlName=\"bpjs_kesehatan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/data-pegawai-routing.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/data-pegawai-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DataPegawaiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPegawaiRoutingModule", function() { return DataPegawaiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'detail'
    },
    {
        path: 'edit',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
    }
];
var DataPegawaiRoutingModule = /** @class */ (function () {
    function DataPegawaiRoutingModule() {
    }
    DataPegawaiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DataPegawaiRoutingModule);
    return DataPegawaiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/data-pegawai.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/data-pegawai.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DataPegawaiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPegawaiModule", function() { return DataPegawaiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-pegawai-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/data-pegawai-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var DataPegawaiModule = /** @class */ (function () {
    function DataPegawaiModule() {
    }
    DataPegawaiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _data_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataPegawaiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], DataPegawaiModule);
    return DataPegawaiModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvZGF0YS1wZWdhd2FpL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, gaKlaimKategoriService, direktoriPegawaiStatusService, payrollPtkpService, absensiJadwalTipeService, direktoriPegawaiTypeService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.payrollPtkpService = payrollPtkpService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.direktoriPegawaiTypeService = direktoriPegawaiTypeService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.pegawai = {};
        this.claim = {};
        this.ptkp = {};
        this.status = {};
        this.jadwal = {};
        this.type = {};
        this.id_pegawai_biodata = '';
        this.id_pegawai = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
    };
    DetailComponent.prototype.getPegawai = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getKlaim(data.data.id_klaim_kategori);
            _this.getPtkp(data.data.id_ptkp);
            _this.getStatus(data.data.status_pegawai);
            _this.getType(data.data.type_pegawai);
            _this.getJadwal(data.data.id_jadwal_tipe);
        });
    };
    DetailComponent.prototype.getKlaim = function (id_klaim_kategori) {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategorisId(id_klaim_kategori).subscribe(function (data) {
            _this.claim = data.data;
        });
    };
    DetailComponent.prototype.getPtkp = function (id_ptkp) {
        var _this = this;
        this.payrollPtkpService.getPayrollPtkpsId(id_ptkp).subscribe(function (data) {
            _this.ptkp = data.data;
        });
    };
    DetailComponent.prototype.getType = function (type_pegawai) {
        var _this = this;
        this.direktoriPegawaiTypeService.getDirektoriPegawaiTypesId(type_pegawai).subscribe(function (data) {
            _this.type = data.data;
        });
    };
    DetailComponent.prototype.getJadwal = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwal = data.data;
        });
    };
    DetailComponent.prototype.getStatus = function (status_pegawai) {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatusesId(status_pegawai).subscribe(function (data) {
            _this.status = data.data;
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiTypeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"],
            src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiTypeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvZGF0YS1wZWdhd2FpL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.ts ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiService, direktoriPegawaiStatusService, direktoriPegawaiTypeService, payrollPtkpService, gaKlaimKategoriService, absensiJadwalTipeService, spinner, notification, pegawaiDetailService, fb, pesan, activatedRoute, router) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiTypeService = direktoriPegawaiTypeService;
        this.payrollPtkpService = payrollPtkpService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_pegawai = '';
        this.dataPegawai = {};
        this.listStatus = [];
        this.listPTKP = [];
        this.listType = [];
        this.listJadwalTipe = [];
        this.listKlaimKategori = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPreeData();
        this.form();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listJadwalTipe = data.data;
        });
        this.payrollPtkpService.getPayrollPtkps().subscribe(function (data) {
            _this.listPTKP = data.data;
        });
        this.gaKlaimKategoriService.getGaKlaimKategoris().subscribe(function (data) {
            _this.listKlaimKategori = data.data;
        });
        this.direktoriPegawaiTypeService.getDirektoriPegawaiTypes().subscribe(function (data) {
            _this.listType = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            no_induk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_ptkp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_jadwal_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_kesehatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jkm: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jkk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jht: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            npwp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_keluar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
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
        this.dataPegawai = this.dataForm.value;
        this.direktoriPegawaiService
            .putDirektoriPegawaisId({ id: this.id_pegawai, body: this.dataPegawai })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'data-pegawai']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiTypeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPtkpService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/data-pegawai/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiTypeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPtkpService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/data-pegawai-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/data-pegawai-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DataPegawaiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPegawaiRoutingModule", function() { return DataPegawaiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'detail'
    },
    {
        path: 'edit',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
    }
];
var DataPegawaiRoutingModule = /** @class */ (function () {
    function DataPegawaiRoutingModule() {
    }
    DataPegawaiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DataPegawaiRoutingModule);
    return DataPegawaiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/data-pegawai.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/data-pegawai.module.ts ***!
  \***************************************************************************/
/*! exports provided: DataPegawaiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPegawaiModule", function() { return DataPegawaiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-pegawai-routing.module */ "./src/app/pages/profile/lainnya/data-pegawai/data-pegawai-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var DataPegawaiModule = /** @class */ (function () {
    function DataPegawaiModule() {
    }
    DataPegawaiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _data_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataPegawaiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], DataPegawaiModule);
    return DataPegawaiModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbGFpbm55YS9kYXRhLXBlZ2F3YWkvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, gaKlaimKategoriService, direktoriPegawaiStatusService, payrollPtkpService, absensiJadwalTipeService, direktoriPegawaiTypeService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.payrollPtkpService = payrollPtkpService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.direktoriPegawaiTypeService = direktoriPegawaiTypeService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.pegawai = {};
        this.claim = {};
        this.ptkp = {};
        this.status = {};
        this.jadwal = {};
        this.type = {};
        this.id_pegawai_biodata = '';
        this.id_pegawai = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
    };
    DetailComponent.prototype.getPegawai = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getKlaim(data.data.id_klaim_kategori);
            _this.getPtkp(data.data.id_ptkp);
            _this.getStatus(data.data.status_pegawai);
            _this.getType(data.data.type_pegawai);
            _this.getJadwal(data.data.id_jadwal_tipe);
        });
    };
    DetailComponent.prototype.getKlaim = function (id_klaim_kategori) {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategorisId(id_klaim_kategori).subscribe(function (data) {
            _this.claim = data.data;
        });
    };
    DetailComponent.prototype.getPtkp = function (id_ptkp) {
        var _this = this;
        this.payrollPtkpService.getPayrollPtkpsId(id_ptkp).subscribe(function (data) {
            _this.ptkp = data.data;
        });
    };
    DetailComponent.prototype.getType = function (type_pegawai) {
        var _this = this;
        this.direktoriPegawaiTypeService.getDirektoriPegawaiTypesId(type_pegawai).subscribe(function (data) {
            _this.type = data.data;
        });
    };
    DetailComponent.prototype.getJadwal = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwal = data.data;
        });
    };
    DetailComponent.prototype.getStatus = function (status_pegawai) {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatusesId(status_pegawai).subscribe(function (data) {
            _this.status = data.data;
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiTypeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/lainnya/data-pegawai/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"],
            src_app_sdk_hr_services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiTypeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbGFpbm55YS9kYXRhLXBlZ2F3YWkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.ts ***!
  \***************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiService, direktoriPegawaiStatusService, direktoriPegawaiTypeService, payrollPtkpService, gaKlaimKategoriService, absensiJadwalTipeService, spinner, notification, pegawaiDetailService, fb, pesan, activatedRoute, router) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiStatusService = direktoriPegawaiStatusService;
        this.direktoriPegawaiTypeService = direktoriPegawaiTypeService;
        this.payrollPtkpService = payrollPtkpService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_pegawai = '';
        this.dataPegawai = {};
        this.listStatus = [];
        this.listPTKP = [];
        this.listType = [];
        this.listJadwalTipe = [];
        this.listKlaimKategori = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPreeData();
        this.form();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiStatusService.getDirektoriPegawaiStatuses().subscribe(function (data) {
            _this.listStatus = data.data;
        });
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listJadwalTipe = data.data;
        });
        this.payrollPtkpService.getPayrollPtkps().subscribe(function (data) {
            _this.listPTKP = data.data;
        });
        this.gaKlaimKategoriService.getGaKlaimKategoris().subscribe(function (data) {
            _this.listKlaimKategori = data.data;
        });
        this.direktoriPegawaiTypeService.getDirektoriPegawaiTypes().subscribe(function (data) {
            _this.listType = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            no_induk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_ptkp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_jadwal_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_kesehatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jkm: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jkk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            bpjs_jht: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_keluar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
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
        this.dataPegawai = this.dataForm.value;
        this.direktoriPegawaiService
            .putDirektoriPegawaisId({ id: this.id_pegawai, body: this.dataPegawai })
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
        this.router.navigate(['/profile/data-pegawai/detail']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiTypeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPtkpService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/lainnya/data-pegawai/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiStatusService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiTypeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPtkpService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=lainnya-data-pegawai-data-pegawai-module.js.map