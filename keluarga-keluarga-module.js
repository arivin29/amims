(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["keluarga-keluarga-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Emergency Calls</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"phone\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Relationship</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                        formControlName=\"hubungan\">\r\n                                        <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                        <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                        <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                        <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                        <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                        <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                    </nz-select>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                 <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Dependents</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth Place </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Birth place\" formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"birth date\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                    <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                    <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Employment</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n                <!--\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth place</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\"\r\n                                    formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Ayah\" nzValue=\"ayah\"></nz-option>\r\n                                    <nz-option nzLabel=\"Ibu\" nzValue=\"ibu\"></nz-option>\r\n                                    <nz-option nzLabel=\"Saudara\" nzValue=\"saudara\"></nz-option>\r\n                                    <nz-option nzLabel=\"Anak\" nzValue=\"anak\"></nz-option>\r\n                                    <nz-option nzLabel=\"Istri\" nzValue=\"istri\"></nz-option>\r\n                                    <nz-option nzLabel=\"Suami\" nzValue=\"suami\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Last education</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"pendidikan_terakhir_keluarga\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Dependent status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_tanggungan\">\r\n                                    <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Marriage status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                formControlName=\"status_perkawinan_keluarga\">\r\n                                <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                <nz-option nzLabel=\"Menikah\" nzValue=\"Menikah\"></nz-option>\r\n                                <nz-option nzLabel=\"Duda\" nzValue=\"Duda\"></nz-option>\r\n                                <nz-option nzLabel=\"Janda\" nzValue=\"Janda\"></nz-option>\r\n                            </nz-select>\r\n\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Profession</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Company name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"perusahaan_pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>-->\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Emergency Calls</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Full Name </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Full Name\" formControlName=\"nama\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Mobile </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input formControlName=\"phone\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Relationship</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                            formControlName=\"hubungan\">\r\n                                            <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                            <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                            <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                            <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                            <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                            <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat\"\r\n                                    [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                     <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Dependents</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth Place </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Birth place\" formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"birth date\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                    <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                    <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Employment</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Emergency Calls</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-emergency']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataEmergency\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Full Name</th>\r\n                    <th>Address</th>\r\n                    <th>Mobile Number</th>\r\n                    <th>Relationship</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.nama}}</td>\r\n                    <td>{{data.alamat}}</td>\r\n                    <td>{{data.phone}}</td>\r\n                    <td>{{data.hubungan}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit-emergency',data.id_pelamar_emergency]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pelamar_emergency)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                        Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex \">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Dependents Information</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable1 [nzData]=\"dataKeluarga\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Full Name</th>\r\n                    <th>Gender</th>\r\n                    <th>Place / Date of Birth</th>\r\n                    <th>Relation</th>\r\n                    <th>Employment</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable1.data\">\r\n                    <td>{{data.nama_keluarga}}</td>\r\n                    <td>{{data.jenis_kelamin_keluarga}}</td>\r\n                    <td>{{data.tempat_lahir_keluarga}}/{{data.tanggal_lahir_keluarga}}</td>\r\n                    <td>{{data.hubungan_keluarga}}</td>\r\n                    <td>{{data.pekerjaan_keluarga}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_pelamar_keluarga]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pelamar_keluarga)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                        Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Emergency Calls</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" formControlName=\"phone\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Relationship</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                        formControlName=\"hubungan\">\r\n                                        <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                        <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                        <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                        <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                        <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                        <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                    </nz-select>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                 <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Dependents</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth Place </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Birth place\" formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"birth date\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                    <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                    <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Employment</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Dependent status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_tanggungan\">\r\n                                    <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Emergency Calls</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Full Name </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Full Name\" formControlName=\"nama\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Mobile </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input type=\"number\" formControlName=\"phone\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Relationship</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                            formControlName=\"hubungan\">\r\n                                            <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                            <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                            <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                            <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                            <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                            <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat\"\r\n                                    [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                     <div class=\"footer\">\r\n                        <button (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Dependents</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Full Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Full Name\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth Place </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Birth place\" formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"birth date\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Mobile </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Relationship\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Parents\" nzValue=\"parents\"></nz-option>\r\n                                    <nz-option nzLabel=\"Siblings\" nzValue=\"siblings\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"husband\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Biological Children\" nzValue=\"children\"></nz-option>\r\n                                    <nz-option nzLabel=\"Relative\" nzValue=\"relative\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Employment</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Dependent status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_tanggungan\">\r\n                                    <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Emergency Calls</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-emergency']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataEmergency\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Full Name</th>\r\n                    <th>Address</th>\r\n                    <th>Mobile Number</th>\r\n                    <th>Relationship</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.nama}}</td>\r\n                    <td>{{data.alamat}}</td>\r\n                    <td>{{data.phone}}</td>\r\n                    <td>{{data.hubungan}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit-emergency',data.id_pegawai_emergency]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"deleteE(data.id_pegawai_emergency)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                        Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header card-header-flex \">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Dependents Information</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable1 [nzData]=\"dataKeluarga\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Full Name</th>\r\n                    <th>Gender</th>\r\n                    <th>Place / Date of Birth</th>\r\n                    <th>Relation</th>\r\n                    <th>Employment</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable1.data\">\r\n                    <td>{{data.nama_keluarga}}</td>\r\n                    <td>{{data.jenis_kelamin_keluarga}}</td>\r\n                    <td>{{data.tempat_lahir_keluarga}}/{{data.tanggal_lahir_keluarga}}</td>\r\n                    <td>{{data.hubungan_keluarga}}</td>\r\n                    <td>{{data.pekerjaan_keluarga}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_pegawai_keluarga]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pegawai_keluarga)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                        Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Family</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Male\" nzValue=\"Male\"></nz-option>\r\n                                    <nz-option nzLabel=\"Female\" nzValue=\"Female\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth place</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\"\r\n                                    formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Father\" nzValue=\"Father\"></nz-option>\r\n                                    <nz-option nzLabel=\"Mother\" nzValue=\"Mother\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brother\" nzValue=\"Brother\"></nz-option>\r\n                                    <nz-option nzLabel=\"Child\" nzValue=\"anChildak\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"Wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"Husband\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Last education</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"pendidikan_terakhir_keluarga\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Dependent status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_tanggungan\">\r\n                                    <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Marriage status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                formControlName=\"status_perkawinan_keluarga\">\r\n                                <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                <nz-option nzLabel=\"Married\" nzValue=\"Married\"></nz-option>\r\n                                <nz-option nzLabel=\"Widower\" nzValue=\"Widower\"></nz-option>\r\n                                <nz-option nzLabel=\"Widow\" nzValue=\"Widow\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Profession</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Company name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"perusahaan_pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Family</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\" formControlName=\"nama_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin_keluarga\">\r\n                                    <nz-option nzLabel=\"Male\" nzValue=\"Male\"></nz-option>\r\n                                    <nz-option nzLabel=\"Female\" nzValue=\"Female\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth place</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\"\r\n                                    formControlName=\"tempat_lahir_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_lahir_keluarga\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"hubungan_keluarga\">\r\n                                    <nz-option nzLabel=\"Father\" nzValue=\"Father\"></nz-option>\r\n                                    <nz-option nzLabel=\"Mother\" nzValue=\"Mother\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brother\" nzValue=\"Brother\"></nz-option>\r\n                                    <nz-option nzLabel=\"Child\" nzValue=\"anChildak\"></nz-option>\r\n                                    <nz-option nzLabel=\"Wife\" nzValue=\"Wife\"></nz-option>\r\n                                    <nz-option nzLabel=\"Husband\" nzValue=\"Husband\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Last education</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"pendidikan_terakhir_keluarga\">\r\n                                    <nz-option nzLabel=\"SD\" nzValue=\"SD\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMP\" nzValue=\"SMP\"></nz-option>\r\n                                    <nz-option nzLabel=\"SMA\" nzValue=\"SMA\"></nz-option>\r\n                                    <nz-option nzLabel=\"D1\" nzValue=\"D1\"></nz-option>\r\n                                    <nz-option nzLabel=\"D2\" nzValue=\"D2\"></nz-option>\r\n                                    <nz-option nzLabel=\"D3\" nzValue=\"D3\"></nz-option>\r\n                                    <nz-option nzLabel=\"D4\" nzValue=\"D4\"></nz-option>\r\n                                    <nz-option nzLabel=\"S1\" nzValue=\"S1\"></nz-option>\r\n                                    <nz-option nzLabel=\"S2\" nzValue=\"S2\"></nz-option>\r\n                                    <nz-option nzLabel=\"S3\" nzValue=\"S3\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_telepon_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Dependent status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_tanggungan\">\r\n                                    <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Marriage status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                formControlName=\"status_perkawinan_keluarga\">\r\n                                <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                <nz-option nzLabel=\"Married\" nzValue=\"Married\"></nz-option>\r\n                                <nz-option nzLabel=\"Widower\" nzValue=\"Widower\"></nz-option>\r\n                                <nz-option nzLabel=\"Widow\" nzValue=\"Widow\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Profession</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Company name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"perusahaan_pekerjaan_keluarga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_keluarga\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/keluarga/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Family</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add-keluarga']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataKeluarga\" [nzShowPagination]=\"false\"\r\n            class=\"air__utils__scrollTable mb-4\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"bg-transparent text-sentencase\">Name</th>\r\n                    <th class=\"bg-transparent text-sentencase\">Gender</th>\r\n                    <th class=\"bg-transparent text-sentencase \">Relationship</th>\r\n                    <th class=\"bg-transparent text-sentencase \">Profession</th>\r\n                    <th class=\"bg-transparent text-sentencase \">Phone</th>\r\n                    <th class=\"bg-transparent text-sentencase \">Claim category</th>\r\n                    <th class=\"bg-transparent text-sentencase text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.nama_keluarga}}</td>\r\n                    <td>{{data.jenis_kelamin}}</td>\r\n                    <td>{{data.hubungan_keluarga}}</td>\r\n                    <td>{{data.pekerjaan_keluarga}}</td>\r\n                    <td>{{data.no_telepon}}</td>\r\n                    <td>{{data.klaim_kategori}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item\r\n                                    [routerLink]=\"['../edit-keluarga/',data.id_pegawai_keluarga]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\"\r\n                                        (nzOnConfirm)=\"delete(data.id_pegawai_keluarga)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9rZWx1YXJnYS9hZGQtZW1lcmdlbmN5L2FkZC1lbWVyZ2VuY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddEmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmergencyComponent", function() { return AddEmergencyComponent; });
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










var AddEmergencyComponent = /** @class */ (function () {
    function AddEmergencyComponent(direktoriPelamarEmergencyService, spinner, notification, fb, pelamarServiceService, pesan, router) {
        this.direktoriPelamarEmergencyService = direktoriPelamarEmergencyService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.id_pelamar = '';
    }
    AddEmergencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.form();
    };
    AddEmergencyComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            alamat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hubungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pelamar),
        });
    };
    AddEmergencyComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPelamarEmergencyService
            .postDirektoriPelamarEmergencies(this.dataKeluarga)
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
    AddEmergencyComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'keluarga', 'list']);
    };
    AddEmergencyComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarEmergencyService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddEmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-emergency',
            template: __webpack_require__(/*! raw-loader!./add-emergency.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.html"),
            styles: [__webpack_require__(/*! ./add-emergency.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarEmergencyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddEmergencyComponent);
    return AddEmergencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9rZWx1YXJnYS9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pelamar-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluargalist.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPelamarKeluargalistService, spinner, notification, fb, pelamarServiceService, pesan, router) {
        this.direktoriPelamarKeluargalistService = direktoriPelamarKeluargalistService;
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
        });
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPelamarKeluargalistService
            .postDirektoriPelamarKeluargalists(this.dataKeluarga)
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'keluarga', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargalistService"] },
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargalistService"],
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

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9rZWx1YXJnYS9lZGl0LWVtZXJnZW5jeS9lZGl0LWVtZXJnZW5jeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditEmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmergencyComponent", function() { return EditEmergencyComponent; });
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










var EditEmergencyComponent = /** @class */ (function () {
    function EditEmergencyComponent(direktoriPelamarEmergencyService, spinner, notification, fb, pelamarServiceService, pesan, router, activatedRoute) {
        this.direktoriPelamarEmergencyService = direktoriPelamarEmergencyService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pelamar = '';
        this.id_pelamar_emergency = '';
    }
    EditEmergencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pelamar_emergency = this.activatedRoute.snapshot.paramMap.get('id_pelamar_emergency');
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.form();
        this.getData();
    };
    EditEmergencyComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarEmergencyService.getDirektoriPelamarEmergenciesId(this.id_pelamar_emergency).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditEmergencyComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            alamat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hubungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar_emergency: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pelamar),
        });
    };
    EditEmergencyComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.direktoriPelamarEmergencyService
            .putDirektoriPelamarEmergenciesId({ id: this.id_pelamar_emergency, body: this.data })
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
    EditEmergencyComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'keluarga', 'list']);
    };
    EditEmergencyComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarEmergencyService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditEmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-emergency',
            template: __webpack_require__(/*! raw-loader!./edit-emergency.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.html"),
            styles: [__webpack_require__(/*! ./edit-emergency.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarEmergencyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_6__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditEmergencyComponent);
    return EditEmergencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9rZWx1YXJnYS9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pelamar-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluargalist.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPelamarKeluargalistService, spinner, notification, fb, pelamarServiceService, pesan, router, activatedRoute) {
        this.direktoriPelamarKeluargalistService = direktoriPelamarKeluargalistService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pelamarServiceService = pelamarServiceService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pelamar = '';
        this.id_pelamar_keluarga = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pelamar_keluarga = this.activatedRoute.snapshot.paramMap.get('id_pelamar_keluarga');
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarKeluargalistService.getDirektoriPelamarKeluargalistsId(this.id_pelamar_keluarga).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_identitas_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            pendidikan_terakhir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_perkawinan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPelamarKeluargalistService
            .putDirektoriPelamarKeluargalistsId({ id: this.id_pelamar_keluarga, body: this.dataKeluarga })
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar, 'keluarga', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargalistService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_7__["PelamarServiceService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargalistService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_7__["PelamarServiceService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: KeluargaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaRoutingModule", function() { return KeluargaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-emergency/edit-emergency.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.ts");
/* harmony import */ var _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-emergency/add-emergency.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    },
    {
        path: 'add-emergency',
        component: _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_2__["AddEmergencyComponent"]
    },
    {
        path: 'edit/:id_pelamar_emergency',
        component: _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_1__["EditEmergencyComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_pelamar_keluarga',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    }
];
var KeluargaRoutingModule = /** @class */ (function () {
    function KeluargaRoutingModule() {
    }
    KeluargaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], KeluargaRoutingModule);
    return KeluargaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga.module.ts ***!
  \****************************************************************************************/
/*! exports provided: KeluargaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaModule", function() { return KeluargaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keluarga-routing.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit/edit.component.ts");
/* harmony import */ var _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-emergency/add-emergency.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/add-emergency/add-emergency.component.ts");
/* harmony import */ var _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-emergency/edit-emergency.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/edit-emergency/edit-emergency.component.ts");












var KeluargaModule = /** @class */ (function () {
    function KeluargaModule() {
    }
    KeluargaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_10__["AddEmergencyComponent"], _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_11__["EditEmergencyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__["KeluargaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]],
        })
    ], KeluargaModule);
    return KeluargaModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9rZWx1YXJnYS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.ts ***!
  \********************************************************************************************/
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







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPelamarKeluargaService, direktoriPelamarEmergencyService, router, pelamarServiceService, nzMessageService, spinner) {
        this.direktoriPelamarKeluargaService = direktoriPelamarKeluargaService;
        this.direktoriPelamarEmergencyService = direktoriPelamarEmergencyService;
        this.router = router;
        this.pelamarServiceService = pelamarServiceService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.dataKeluarga = [];
        this.dataEmergency = [];
        this.id_pelamar = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pelamar paja tu ' + _this.id_pelamar);
            _this.getKeluarga();
            _this.getEmergency();
        });
    };
    ListComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.direktoriPelamarKeluargaService.getDirektoriPelamarKeluargas(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.dataKeluarga = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarKeluargaService
            .deleteDirektoriPelamarKeluargasId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.getEmergency = function () {
        var _this = this;
        this.direktoriPelamarEmergencyService.getDirektoriPelamarEmergencies(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.dataEmergency = data.data;
        });
    };
    ListComponent.prototype.deleteE = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPelamarEmergencyService
            .deleteDirektoriPelamarEmergenciesId(id)
            .subscribe(function (data) {
            _this.getEmergency();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarEmergencyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarKeluargaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarEmergencyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEva2VsdWFyZ2EvYWRkLWVtZXJnZW5jeS9hZGQtZW1lcmdlbmN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AddEmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmergencyComponent", function() { return AddEmergencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var AddEmergencyComponent = /** @class */ (function () {
    function AddEmergencyComponent(direktoriPegawaiEmergencyService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiEmergencyService = direktoriPegawaiEmergencyService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
    }
    AddEmergencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.form();
    };
    AddEmergencyComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            alamat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hubungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
        });
    };
    AddEmergencyComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPegawaiEmergencyService
            .postDirektoriPegawaiEmergencies(this.dataKeluarga)
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
    AddEmergencyComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'keluarga', 'list']);
    };
    AddEmergencyComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddEmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-emergency',
            template: __webpack_require__(/*! raw-loader!./add-emergency.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.html"),
            styles: [__webpack_require__(/*! ./add-emergency.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddEmergencyComponent);
    return AddEmergencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEva2VsdWFyZ2EvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.ts ***!
  \*************************************************************************************************/
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
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPegawaiKeluargaService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
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
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPegawaiKeluargaService
            .postDirektoriPegawaiKeluargas(this.dataKeluarga)
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'keluarga', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiKeluargaService"] },
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiKeluargaService"],
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

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEva2VsdWFyZ2EvZWRpdC1lbWVyZ2VuY3kvZWRpdC1lbWVyZ2VuY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EditEmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmergencyComponent", function() { return EditEmergencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var EditEmergencyComponent = /** @class */ (function () {
    function EditEmergencyComponent(direktoriPegawaiEmergencyService, pegawaiDetailService, spinner, notification, fb, pesan, router, activatedRoute) {
        this.direktoriPegawaiEmergencyService = direktoriPegawaiEmergencyService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_pegawai_emergency = '';
        this.data = {};
    }
    EditEmergencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pegawai_emergency = this.activatedRoute.snapshot.paramMap.get('id');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.form();
        this.getData();
    };
    EditEmergencyComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiEmergencyService.getDirektoriPegawaiEmergenciesId(this.id_pegawai_emergency).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditEmergencyComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            alamat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hubungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_emergency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
        });
    };
    EditEmergencyComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.data = this.dataForm.value;
        this.direktoriPegawaiEmergencyService
            .putDirektoriPegawaiEmergenciesId({ id: this.id_pegawai_emergency, body: this.data })
            .subscribe(function (data) {
            _this.spinner.hide();
            _this.goToBack();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditEmergencyComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'keluarga', 'list']);
    };
    EditEmergencyComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditEmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-emergency',
            template: __webpack_require__(/*! raw-loader!./edit-emergency.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.html"),
            styles: [__webpack_require__(/*! ./edit-emergency.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditEmergencyComponent);
    return EditEmergencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEva2VsdWFyZ2EvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPegawaiKeluargaService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_pegawai_keluarga = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_pegawai_keluarga = this.activatedRoute.snapshot.paramMap.get('id');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiKeluargaService.getDirektoriPegawaiKeluargasId(this.id_pegawai_keluarga).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_identitas_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pendidikan_terakhir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_perkawinan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPegawaiKeluargaService
            .putDirektoriPegawaiKeluargasId({ id: this.id_pegawai_keluarga, body: this.dataKeluarga })
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'biodata', 'keluarga', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiKeluargaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_9__["DirektoriPegawaiKeluargaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: KeluargaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaRoutingModule", function() { return KeluargaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-emergency/edit-emergency.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.ts");
/* harmony import */ var _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-emergency/add-emergency.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.ts");
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
        path: 'add-emergency',
        component: _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_2__["AddEmergencyComponent"]
    },
    {
        path: 'edit-emergency/:id',
        component: _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_1__["EditEmergencyComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    }
];
var KeluargaRoutingModule = /** @class */ (function () {
    function KeluargaRoutingModule() {
    }
    KeluargaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], KeluargaRoutingModule);
    return KeluargaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: KeluargaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaModule", function() { return KeluargaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keluarga-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit/edit.component.ts");
/* harmony import */ var _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-emergency/add-emergency.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/add-emergency/add-emergency.component.ts");
/* harmony import */ var _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-emergency/edit-emergency.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/edit-emergency/edit-emergency.component.ts");












var KeluargaModule = /** @class */ (function () {
    function KeluargaModule() {
    }
    KeluargaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _add_emergency_add_emergency_component__WEBPACK_IMPORTED_MODULE_10__["AddEmergencyComponent"], _edit_emergency_edit_emergency_component__WEBPACK_IMPORTED_MODULE_11__["EditEmergencyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__["KeluargaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]],
        })
    ], KeluargaModule);
    return KeluargaModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEva2VsdWFyZ2EvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiKeluargaService, direktoriPegawaiEmergencyService, router, pegawaiDetailService, nzMessageService, spinner) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.direktoriPegawaiEmergencyService = direktoriPegawaiEmergencyService;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.dataKeluarga = [];
        this.dataEmergency = [];
        this.id_pegawai = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getKeluarga();
            _this.getEmergency();
        });
    };
    ListComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.direktoriPegawaiKeluargaService.getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataKeluarga = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .deleteDirektoriPegawaiKeluargasId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.prototype.getEmergency = function () {
        var _this = this;
        this.direktoriPegawaiEmergencyService.getDirektoriPegawaiEmergencies(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataEmergency = data.data;
        });
    };
    ListComponent.prototype.deleteE = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiEmergencyService
            .deleteDirektoriPegawaiEmergenciesId(id)
            .subscribe(function (data) {
            _this.getEmergency();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiEmergencyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9rZWx1YXJnYS9hZGQta2VsdWFyZ2EvYWRkLWtlbHVhcmdhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddKeluargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKeluargaComponent", function() { return AddKeluargaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");










var AddKeluargaComponent = /** @class */ (function () {
    function AddKeluargaComponent(direktoriPegawaiKeluargaService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
    }
    AddKeluargaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
    };
    AddKeluargaComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pendidikan_terakhir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai),
        });
    };
    AddKeluargaComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPegawaiKeluargaService
            .postDirektoriPegawaiKeluargas(this.dataKeluarga)
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
    AddKeluargaComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/biodata/keluarga/list']);
    };
    AddKeluargaComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiKeluargaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddKeluargaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-keluarga',
            template: __webpack_require__(/*! raw-loader!./add-keluarga.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.html"),
            styles: [__webpack_require__(/*! ./add-keluarga.component.scss */ "./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiKeluargaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddKeluargaComponent);
    return AddKeluargaComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9rZWx1YXJnYS9lZGl0LWtlbHVhcmdhL2VkaXQta2VsdWFyZ2EuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditKeluargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditKeluargaComponent", function() { return EditKeluargaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");










var EditKeluargaComponent = /** @class */ (function () {
    function EditKeluargaComponent(direktoriPegawaiKeluargaService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.dataKeluarga = {};
        this.id_pegawai_keluarga = '';
        this.listKlaimKategori = [];
    }
    EditKeluargaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai_keluarga')) {
                _this.id_pegawai_keluarga = data.get('id_pegawai_keluarga');
            }
        });
        this.form();
        this.getData();
        this.getKlaimKategori();
    };
    EditKeluargaComponent.prototype.getKlaimKategori = function () {
    };
    EditKeluargaComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiKeluargaService
            .getDirektoriPegawaiKeluargasId(this.id_pegawai_keluarga)
            .subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditKeluargaComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            jenis_kelamin_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_identitas_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tempat_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lahir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hubungan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pendidikan_terakhir_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_telepon_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            perusahaan_pekerjaan_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            alamat_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditKeluargaComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataKeluarga = this.dataForm.value;
        this.direktoriPegawaiKeluargaService
            .putDirektoriPegawaiKeluargasId({
            id: this.id_pegawai_keluarga,
            body: this.dataKeluarga,
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
    EditKeluargaComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/biodata/keluarga/list']);
    };
    EditKeluargaComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditKeluargaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-keluarga',
            template: __webpack_require__(/*! raw-loader!./edit-keluarga.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.html"),
            styles: [__webpack_require__(/*! ./edit-keluarga.component.scss */ "./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditKeluargaComponent);
    return EditKeluargaComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/keluarga-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/keluarga-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: KeluargaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaRoutingModule", function() { return KeluargaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_keluarga_edit_keluarga_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-keluarga/edit-keluarga.component */ "./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.ts");
/* harmony import */ var _add_keluarga_add_keluarga_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-keluarga/add-keluarga.component */ "./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/biodata/keluarga/list/list.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'edit/:id_pegawai_pegawai_keluarga',
        component: _edit_keluarga_edit_keluarga_component__WEBPACK_IMPORTED_MODULE_1__["EditKeluargaComponent"]
    },
    {
        path: 'add-keluarga',
        component: _add_keluarga_add_keluarga_component__WEBPACK_IMPORTED_MODULE_2__["AddKeluargaComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    },
];
var KeluargaRoutingModule = /** @class */ (function () {
    function KeluargaRoutingModule() {
    }
    KeluargaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], KeluargaRoutingModule);
    return KeluargaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/keluarga.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/keluarga.module.ts ***!
  \*******************************************************************/
/*! exports provided: KeluargaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeluargaModule", function() { return KeluargaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keluarga-routing.module */ "./src/app/pages/profile/biodata/keluarga/keluarga-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/biodata/keluarga/list/list.component.ts");
/* harmony import */ var _edit_keluarga_edit_keluarga_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-keluarga/edit-keluarga.component */ "./src/app/pages/profile/biodata/keluarga/edit-keluarga/edit-keluarga.component.ts");
/* harmony import */ var _add_keluarga_add_keluarga_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-keluarga/add-keluarga.component */ "./src/app/pages/profile/biodata/keluarga/add-keluarga/add-keluarga.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var KeluargaModule = /** @class */ (function () {
    function KeluargaModule() {
    }
    KeluargaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_keluarga_add_keluarga_component__WEBPACK_IMPORTED_MODULE_6__["AddKeluargaComponent"], _edit_keluarga_edit_keluarga_component__WEBPACK_IMPORTED_MODULE_5__["EditKeluargaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _keluarga_routing_module__WEBPACK_IMPORTED_MODULE_3__["KeluargaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], KeluargaModule);
    return KeluargaModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9rZWx1YXJnYS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/keluarga/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/biodata/keluarga/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPegawaiKeluargaService, router, pegawaiDetailService, nzMessageService, spinner) {
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pegawai = {};
        this.dataKeluarga = [];
        this.id_pegawai_biodata = '';
        this.id_pegawai = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getKeluarga();
    };
    ListComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai }))
            .subscribe(function (res) {
            _this.dataKeluarga = res.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .deleteDirektoriPegawaiKeluargasId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/keluarga/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/biodata/keluarga/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=keluarga-keluarga-module.js.map