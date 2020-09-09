(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pendidikan-pendidikan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add New</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Join date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                            formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Graduate </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Graduate\" style=\"margin-left: 10px\"\r\n                                            formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Education</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Starts</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                            formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Graduate </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Graduate\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Education</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Join date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                            formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Graduate </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Graduate\" style=\"margin-left: 10px\"\r\n                                            formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Education</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Starts</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                            formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Graduate </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Graduate\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Education</h5>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Formal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable2 [nzData]=\"dataPendidikan\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Level</th>\r\n                    <th>Schooll name</th>\r\n                    <th>Graduation date</th>\r\n                    <th>Faculty</th>\r\n                    <th>Departement</th>\r\n                    <th>GPA</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable2.data\">\r\n                    <td>{{ data.tingkat_pendidkan }}</td>\r\n                    <td>{{ data.nama_sekolah }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.fakultas }}</td>\r\n                    <td>{{ data.jurusan }}</td>\r\n                    <td>{{ data.nilai }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_pelamar_pendidikan]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pelamar_pendidikan)\" (nzOnCancel)=\"batalDelete()\">\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Informal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-informal']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable3 [nzData]=\"dataPendidikanInformal\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Type</th>\r\n                    <th>Name</th>\r\n                    <th>starts</th>\r\n                    <th>End</th>\r\n                    <th>Organizer</th>\r\n                    <th>Veneu</th>\r\n                    <th>Remarks</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable3.data\">\r\n                    <td>{{ data.type }}</td>\r\n                    <td>{{ data.nama_pendidikan }}</td>\r\n                    <td>{{ data.tanggal_mulai }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.organizer }}</td>\r\n                    <td>{{ data.lokasi }}</td>\r\n                    <td>{{ data.remarks }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit-informal',data.id_pendidikan_informal]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"deleteInformal(data.id_pendidikan_informal)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"> <i nz-icon nzType=\"delete\"\r\n                                            nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add New</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Period</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Pendidikan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Period</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Detail Pendidikan</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tingkat Pendidikan</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.tingkat_pendidkan}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Nama Sekolah</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.nama_sekolah}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tanggal Masuk</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.tanggal_masuk | date}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tanggal Lulus</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.tanggal_selesai | date}}</td>\r\n                                </tr>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Alamat Sekolah</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.alamat_sekolah}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Fakultas</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.fakultas}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Jurusan</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.jurusan}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Nilai</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.nilai}}</td>\r\n                                </tr>\r\n                            </div>\r\n                        </div>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Period</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Pendidikan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Period</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Education</h5>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Formal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable2 [nzData]=\"dataPendidikan\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Level</th>\r\n                    <th>Schooll name</th>\r\n                    <th>Graduation date</th>\r\n                    <th>Faculty</th>\r\n                    <th>Departement</th>\r\n                    <th>GPA</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable2.data\">\r\n                    <td>{{ data.tingkat_pendidkan }}</td>\r\n                    <td>{{ data.nama_sekolah }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.fakultas }}</td>\r\n                    <td>{{ data.jurusan }}</td>\r\n                    <td>{{ data.nilai }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_pegawai_pendidikan]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pegawai_pendidikan)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Informal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-informal']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable3 [nzData]=\"dataPendidikanInformal\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Type</th>\r\n                    <th>Name</th>\r\n                    <th>starts</th>\r\n                    <th>End</th>\r\n                    <th>Organizer</th>\r\n                    <th>Veneu</th>\r\n                    <th>Remarks</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable3.data\">\r\n                    <td>{{ data.type }}</td>\r\n                    <td>{{ data.nama_pendidikan }}</td>\r\n                    <td>{{ data.tanggal_mulai }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.organizer }}</td>\r\n                    <td>{{ data.lokasi }}</td>\r\n                    <td>{{ data.remarks }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit-informal',data.id_pendidikan_informal]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"deleteInformal(data.id_pendidikan_informal)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add New</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Period</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                    formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                    formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/add/add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/add/add.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Pendidikan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Period</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                    formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                    formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/detail/detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/detail/detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Detail Pendidikan</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tingkat Pendidikan</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.tingkat_pendidkan}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Nama Sekolah</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.nama_sekolah}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tanggal Masuk</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.tanggal_masuk | date}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Tanggal Lulus</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.tanggal_selesai | date}}</td>\r\n                                </tr>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Alamat Sekolah</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.alamat_sekolah}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Fakultas</td>\r\n                                    <td class=\"pr-0 text-left text-dark\"> : {{dataPendidikan.fakultas}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Jurusan</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.jurusan}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Nilai</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPendidikan.nilai}}</td>\r\n                                </tr>\r\n                            </div>\r\n                        </div>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit </h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Type </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"type\">\r\n                                    <nz-option nzLabel=\"Courses\" nzValue=\"Courses\"></nz-option>\r\n                                    <nz-option nzLabel=\"Training\" nzValue=\"Training\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"name\" formControlName=\"nama_pendidikan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Period</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                    formControlName=\"tanggal_mulai\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                    formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Veneu </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"veneu\" formControlName=\"lokasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Organizer </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"organizer name\" formControlName=\"organizer\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Remarks</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"remarks\" formControlName=\"remarks\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/edit/edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/edit/edit.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Pendidikan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Education level </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\"\r\n                                    formControlName=\"tingkat_pendidkan\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nama sekolah\" formControlName=\"nama_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Period</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                    formControlName=\"tanggal_masuk\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                    formControlName=\"tanggal_selesai\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>School addres </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Kota sekolah\" formControlName=\"alamat_sekolah\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Faculty </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"fakultas\" formControlName=\"fakultas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"jurusan\" formControlName=\"jurusan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>GPA </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"nilai\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/pendidikan/list/list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Education</h5>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Formal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable2 [nzData]=\"dataPendidikan\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Level</th>\r\n                    <th>Schooll name</th>\r\n                    <th>Graduation date</th>\r\n                    <th>Faculty</th>\r\n                    <th>Departement</th>\r\n                    <th>GPA</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable2.data\">\r\n                    <td>{{ data.tingkat_pendidkan }}</td>\r\n                    <td>{{ data.nama_sekolah }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.fakultas }}</td>\r\n                    <td>{{ data.jurusan }}</td>\r\n                    <td>{{ data.nilai }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../pendidikan/edit/',data.id_pegawai_pendidikan]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pegawai_pendidikan)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb=0\">Informal Education</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-informal']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable3 [nzData]=\"dataPendidikanInformal\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Type</th>\r\n                    <th>Name</th>\r\n                    <th>starts</th>\r\n                    <th>End</th>\r\n                    <th>Organizer</th>\r\n                    <th>Veneu</th>\r\n                    <th>Remarks</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable3.data\">\r\n                    <td>{{ data.type }}</td>\r\n                    <td>{{ data.nama_pendidikan }}</td>\r\n                    <td>{{ data.tanggal_mulai }}</td>\r\n                    <td>{{ data.tanggal_selesai | date}}</td>\r\n                    <td>{{ data.organizer }}</td>\r\n                    <td>{{ data.lokasi }}</td>\r\n                    <td>{{ data.remarks }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit-informal',data.id_pendidikan_informal]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"deleteInformal(data.id_pendidikan_informal)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9wZW5kaWRpa2FuL2FkZC1pbmZvcm1hbC9hZGQtaW5mb3JtYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInformalComponent", function() { return AddInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddInformalComponent = /** @class */ (function () {
    function AddInformalComponent(direktoriPelamarPendidikanInformalService, spinner, notification, fb, pelamarServiceService, pesan, router) {
        this.direktoriPelamarPendidikanInformalService = direktoriPelamarPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.id_pelamar = '';
    }
    AddInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pegawai paja tu ' + _this.id_pelamar);
        });
        this.form();
    };
    AddInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pelamar),
        });
    };
    AddInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPelamarPendidikanInformalService
            .postDirektoriPelamarPendidikanInformals(this.dataPendidikanInformal)
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
    AddInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'pendidikan', 'list']);
    };
    AddInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-informal',
            template: __webpack_require__(/*! raw-loader!./add-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.html"),
            styles: [__webpack_require__(/*! ./add-informal.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddInformalComponent);
    return AddInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9wZW5kaWRpa2FuL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPelamarPendidikanService, spinner, notification, fb, pelamarServiceService, pesan, router) {
        this.direktoriPelamarPendidikanService = direktoriPelamarPendidikanService;
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
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPelamarPendidikanService
            .postDirektoriPelamarPendidikans(this.dataPendidikan)
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'pendidikan', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9wZW5kaWRpa2FuL2VkaXQtaW5mb3JtYWwvZWRpdC1pbmZvcm1hbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInformalComponent", function() { return EditInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");










var EditInformalComponent = /** @class */ (function () {
    function EditInformalComponent(direktoriPelamarPendidikanInformalService, spinner, notification, fb, pelamarServiceService, pesan, router, activatedRoute) {
        this.direktoriPelamarPendidikanInformalService = direktoriPelamarPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pelamar = '';
        this.id_pendidikan_informal = '';
    }
    EditInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pendidikan_informal = this.activatedRoute.snapshot.paramMap.get('id_pendidikan_informal');
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pegawai paja tu ' + _this.id_pelamar);
        });
        this.form();
        this.getData();
    };
    EditInformalComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarPendidikanInformalService.getDirektoriPelamarPendidikanInformalsId(this.id_pendidikan_informal).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pendidikan_informal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pelamar),
        });
    };
    EditInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPelamarPendidikanInformalService
            .putDirektoriPelamarPendidikanInformalsId({ id: this.id_pendidikan_informal, body: this.dataPendidikanInformal })
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
    EditInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'pendidikan', 'list']);
    };
    EditInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_9__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-informal',
            template: __webpack_require__(/*! raw-loader!./edit-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.html"),
            styles: [__webpack_require__(/*! ./edit-informal.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_9__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditInformalComponent);
    return EditInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9wZW5kaWRpa2FuL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.ts ***!
  \**********************************************************************************************/
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










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPelamarPendidikanService, spinner, notification, fb, pelamarServiceService, pesan, router, activatedRoute) {
        this.direktoriPelamarPendidikanService = direktoriPelamarPendidikanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pelamar = '';
        this.dataPendidikan = {};
        this.id_pelamar_pendidikan = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pelamar_pendidikan = this.activatedRoute.snapshot.paramMap.get('id_pelamar_pendidikan');
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pelamar paja tu ' + _this.id_pelamar);
        });
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarPendidikanService.getDirektoriPelamarPendidikansId(this.id_pelamar_pendidikan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPelamarPendidikanService
            .putDirektoriPelamarPendidikansId({ id: this.id_pelamar_pendidikan, body: this.dataPendidikan })
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'pendidikan', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9wZW5kaWRpa2FuL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pelamar-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan-informal.service.ts");








var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPelamarPendidikanService, direktoriPelamarPendidikanInformalService, router, pelamarServiceService, nzMessageService, spinner) {
        this.direktoriPelamarPendidikanService = direktoriPelamarPendidikanService;
        this.direktoriPelamarPendidikanInformalService = direktoriPelamarPendidikanInformalService;
        this.router = router;
        this.pelamarServiceService = pelamarServiceService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.dataPendidikan = [];
        this.dataPendidikanInformal = [];
        this.id_pelamar = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pelamar paja tu ' + _this.id_pelamar);
            _this.getPendidikan();
            _this.getPendidikanInformal();
        });
    };
    ListComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.direktoriPelamarPendidikanService.getDirektoriPelamarPendidikans(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.dataPendidikan = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarPendidikanService
            .deleteDirektoriPelamarPendidikansId(id)
            .subscribe(function (data) {
            _this.getPendidikan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.getPendidikanInformal = function () {
        var _this = this;
        this.direktoriPelamarPendidikanInformalService.getDirektoriPelamarPendidikanInformals(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.dataPendidikanInformal = data.data;
        });
    };
    ListComponent.prototype.deleteInformal = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarPendidikanInformalService
            .deleteDirektoriPelamarPendidikanInformalsId(id)
            .subscribe(function (data) {
            _this.getPendidikanInformal();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarPendidikanService"] },
        { type: src_app_sdk_hr_services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_7__["DirektoriPelamarPendidikanInformalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarPendidikanService"],
            src_app_sdk_hr_services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_7__["DirektoriPelamarPendidikanInformalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: PendidikanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanRoutingModule", function() { return PendidikanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.ts");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.ts");








var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'add-informal',
        component: _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__["AddInformalComponent"]
    },
    {
        path: 'edit/:id_pelamar_pendidikan',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'edit-informal/:id_pendidikan_informal',
        component: _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_6__["EditInformalComponent"]
    }
];
var PendidikanRoutingModule = /** @class */ (function () {
    function PendidikanRoutingModule() {
    }
    PendidikanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PendidikanRoutingModule);
    return PendidikanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PendidikanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanModule", function() { return PendidikanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendidikan-routing.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/add-informal/add-informal.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/edit-informal/edit-informal.component.ts");












var PendidikanModule = /** @class */ (function () {
    function PendidikanModule() {
    }
    PendidikanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_10__["AddInformalComponent"], _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_11__["EditInformalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PendidikanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], PendidikanModule);
    return PendidikanModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9hZGQtaW5mb3JtYWwvYWRkLWluZm9ybWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AddInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInformalComponent", function() { return AddInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");










var AddInformalComponent = /** @class */ (function () {
    function AddInformalComponent(direktoriPegawaiPendidikanInformalService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
    }
    AddInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
    };
    AddInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_pegawai),
        });
    };
    AddInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPegawaiPendidikanInformalService
            .postDirektoriPegawaiPendidikanInformals(this.dataPendidikanInformal)
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
    AddInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'pendidikan', 'list']);
    };
    AddInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-informal',
            template: __webpack_require__(/*! raw-loader!./add-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.html"),
            styles: [__webpack_require__(/*! ./add-informal.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddInformalComponent);
    return AddInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.ts ***!
  \***************************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPegawaiPendidikanService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
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
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPegawaiPendidikanService
            .postDirektoriPegawaiPendidikans(this.dataPendidikan)
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'pendidikan', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiPendidikanService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_pegawai_pendidikan = '';
        this.dataPendidikan = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_pendidikan')) {
                _this.id_pegawai_pendidikan = data.get('id_pegawai_pendidikan');
            }
        });
        this.getPendidikan();
    };
    DetailComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikansId(this.id_pegawai_pendidikan)
            .subscribe(function (data) {
            _this.dataPendidikan = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9lZGl0LWluZm9ybWFsL2VkaXQtaW5mb3JtYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EditInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInformalComponent", function() { return EditInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var EditInformalComponent = /** @class */ (function () {
    function EditInformalComponent(direktoriPegawaiPendidikanInformalService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_pendidikan_informal = '';
    }
    EditInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pendidikan_informal = this.activatedRoute.snapshot.paramMap.get('id_pendidikan_informal');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getData();
    };
    EditInformalComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanInformalService.getDirektoriPegawaiPendidikanInformalsId(this.id_pendidikan_informal).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pendidikan_informal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_pegawai),
        });
    };
    EditInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPegawaiPendidikanInformalService
            .putDirektoriPegawaiPendidikanInformalsId({ id: this.id_pendidikan_informal, body: this.dataPendidikanInformal })
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
    EditInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'pendidikan', 'list']);
    };
    EditInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-informal',
            template: __webpack_require__(/*! raw-loader!./edit-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.html"),
            styles: [__webpack_require__(/*! ./edit-informal.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditInformalComponent);
    return EditInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiPendidikanService, spinner, notification, fb, activatedRoute, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.dataPendidikan = {};
        this.id_pegawai_pendidikan = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_pendidikan')) {
                _this.id_pegawai_pendidikan = data.get('id_pegawai_pendidikan');
                console.log(data.get('id_pegawai_pendidikan'));
                _this.getData();
                _this.form();
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikansId(this.id_pegawai_pendidikan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_pegawai_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPegawaiPendidikanService
            .putDirektoriPegawaiPendidikansId({ id: this.id_pegawai_pendidikan, body: this.dataPendidikan })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'pendidikan', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvcGVuZGlkaWthbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.ts ***!
  \*****************************************************************************************************/
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
    function ListComponent(direktoriPegawaiPendidikanService, direktoriPegawaiPendidikanInformalService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataPendidikan = [];
        this.dataPendidikanInformal = [];
        this.id_pegawai_pendidikan = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPendidikan();
        this.getPendidikanInformal();
    };
    ListComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikan = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService
            .deleteDirektoriPegawaiPendidikansId(id)
            .subscribe(function (data) {
            _this.getPendidikan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.getPendidikanInformal = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanInformalService.getDirektoriPegawaiPendidikanInformals(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikanInformal = data.data;
        });
    };
    ListComponent.prototype.deleteInformal = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanInformalService
            .deleteDirektoriPegawaiPendidikanInformalsId(id)
            .subscribe(function (data) {
            _this.getPendidikanInformal();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PendidikanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanRoutingModule", function() { return PendidikanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'edit/:id_pegawai_pendidikan',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'edit-informal/:id_pendidikan_informal',
        component: _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_8__["EditInformalComponent"]
    },
    {
        path: 'detail/:id_pegawai_pendidikan',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'add-informal',
        component: _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__["AddInformalComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
];
var PendidikanRoutingModule = /** @class */ (function () {
    function PendidikanRoutingModule() {
    }
    PendidikanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PendidikanRoutingModule);
    return PendidikanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: PendidikanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanModule", function() { return PendidikanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendidikan-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/detail/detail.component.ts");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/add-informal/add-informal.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/edit-informal/edit-informal.component.ts");














var PendidikanModule = /** @class */ (function () {
    function PendidikanModule() {
    }
    PendidikanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"], _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_12__["AddInformalComponent"], _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_13__["EditInformalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PendidikanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PendidikanModule);
    return PendidikanModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2FkZC1pbmZvcm1hbC9hZGQtaW5mb3JtYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInformalComponent", function() { return AddInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");










var AddInformalComponent = /** @class */ (function () {
    function AddInformalComponent(direktoriPegawaiPendidikanInformalService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
    }
    AddInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
    };
    AddInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_pegawai),
        });
    };
    AddInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPegawaiPendidikanInformalService
            .postDirektoriPegawaiPendidikanInformals(this.dataPendidikanInformal)
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
    AddInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/biodata/pendidikan/list']);
    };
    AddInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-informal',
            template: __webpack_require__(/*! raw-loader!./add-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.html"),
            styles: [__webpack_require__(/*! ./add-informal.component.scss */ "./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddInformalComponent);
    return AddInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/add/add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/add/add.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/add/add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/add/add.component.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPegawaiPendidikanService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
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
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPegawaiPendidikanService
            .postDirektoriPegawaiPendidikans(this.dataPendidikan)
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
        this.router.navigate(['/profile/biodata/pendidikan/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/biodata/pendidikan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/detail/detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/detail/detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/detail/detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/detail/detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiPendidikanService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_pegawai_pendidikan = '';
        this.dataPendidikan = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_pendidikan')) {
                _this.id_pegawai_pendidikan = data.get('id_pegawai_pendidikan');
            }
        });
        this.getPendidikan();
    };
    DetailComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikansId(this.id_pegawai_pendidikan)
            .subscribe(function (data) {
            _this.dataPendidikan = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/biodata/pendidikan/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2VkaXQtaW5mb3JtYWwvZWRpdC1pbmZvcm1hbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditInformalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInformalComponent", function() { return EditInformalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");










var EditInformalComponent = /** @class */ (function () {
    function EditInformalComponent(direktoriPegawaiPendidikanInformalService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_pendidikan_informal = '';
    }
    EditInformalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pendidikan_informal = this.activatedRoute.snapshot.paramMap.get('id_pendidikan_informal');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getData();
    };
    EditInformalComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanInformalService.getDirektoriPegawaiPendidikanInformalsId(this.id_pendidikan_informal).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditInformalComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nama_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pendidikan_informal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            organizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.id_pegawai),
        });
    };
    EditInformalComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPendidikanInformal = this.dataForm.value;
        this.direktoriPegawaiPendidikanInformalService
            .putDirektoriPegawaiPendidikanInformalsId({ id: this.id_pendidikan_informal, body: this.dataPendidikanInformal })
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
    EditInformalComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/biodata/pendidikan/list']);
    };
    EditInformalComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditInformalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-informal',
            template: __webpack_require__(/*! raw-loader!./edit-informal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.html"),
            styles: [__webpack_require__(/*! ./edit-informal.component.scss */ "./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditInformalComponent);
    return EditInformalComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/edit/edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/edit/edit.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/edit/edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/edit/edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiPendidikanService, spinner, notification, fb, activatedRoute, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.dataPendidikan = {};
        this.id_pegawai_pendidikan = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_pendidikan')) {
                _this.id_pegawai_pendidikan = data.get('id_pegawai_pendidikan');
                console.log(data.get('id_pegawai_pendidikan'));
                _this.getData();
                _this.form();
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikansId(this.id_pegawai_pendidikan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tingkat_pendidkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            fakultas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jurusan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_pegawai_pendidikan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
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
        this.dataPendidikan = this.dataForm.value;
        this.direktoriPegawaiPendidikanService
            .putDirektoriPegawaiPendidikansId({ id: this.id_pegawai_pendidikan, body: this.dataPendidikan })
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
        this.router.navigate(['/profile/biodata/pendidikan/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiPendidikanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/biodata/pendidikan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiPendidikanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/list/list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/list/list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9wZW5kaWRpa2FuL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/list/list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/list/list.component.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiPendidikanService, direktoriPegawaiPendidikanInformalService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.direktoriPegawaiPendidikanInformalService = direktoriPegawaiPendidikanInformalService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataPendidikan = [];
        this.dataPendidikanInformal = [];
        this.id_pegawai_pendidikan = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPendidikan();
        this.getPendidikanInformal();
    };
    ListComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikan = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService
            .deleteDirektoriPegawaiPendidikansId(id)
            .subscribe(function (data) {
            _this.getPendidikan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.getPendidikanInformal = function () {
        var _this = this;
        this.direktoriPegawaiPendidikanInformalService.getDirektoriPegawaiPendidikanInformals(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikanInformal = data.data;
        });
    };
    ListComponent.prototype.deleteInformal = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanInformalService
            .deleteDirektoriPegawaiPendidikanInformalsId(id)
            .subscribe(function (data) {
            _this.getPendidikanInformal();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanInformalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/pendidikan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/biodata/pendidikan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanInformalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/pendidikan-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/pendidikan-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PendidikanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanRoutingModule", function() { return PendidikanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/biodata/pendidikan/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/biodata/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/biodata/pendidikan/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/biodata/pendidikan/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'edit/:id_pegawai_pendidikan',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'edit-informal/:id_pendidikan_informal',
        component: _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_8__["EditInformalComponent"]
    },
    {
        path: 'detail/:id_pegawai_pendidikan',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'add-informal',
        component: _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_7__["AddInformalComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
];
var PendidikanRoutingModule = /** @class */ (function () {
    function PendidikanRoutingModule() {
    }
    PendidikanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PendidikanRoutingModule);
    return PendidikanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/pendidikan/pendidikan.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/biodata/pendidikan/pendidikan.module.ts ***!
  \***********************************************************************/
/*! exports provided: PendidikanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendidikanModule", function() { return PendidikanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendidikan-routing.module */ "./src/app/pages/profile/biodata/pendidikan/pendidikan-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/biodata/pendidikan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/biodata/pendidikan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/biodata/pendidikan/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/biodata/pendidikan/detail/detail.component.ts");
/* harmony import */ var _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-informal/add-informal.component */ "./src/app/pages/profile/biodata/pendidikan/add-informal/add-informal.component.ts");
/* harmony import */ var _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-informal/edit-informal.component */ "./src/app/pages/profile/biodata/pendidikan/edit-informal/edit-informal.component.ts");














var PendidikanModule = /** @class */ (function () {
    function PendidikanModule() {
    }
    PendidikanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"], _add_informal_add_informal_component__WEBPACK_IMPORTED_MODULE_12__["AddInformalComponent"], _edit_informal_edit_informal_component__WEBPACK_IMPORTED_MODULE_13__["EditInformalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pendidikan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PendidikanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PendidikanModule);
    return PendidikanModule;
}());



/***/ })

}]);
//# sourceMappingURL=pendidikan-pendidikan-module.js.map