(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-pelamar-detail-pelamar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Biodata</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>PERSONAL INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Initial</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.initial}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Name</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.nama_depan}}\r\n                        {{dataPelamar.nama_belakang}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Gender</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.jenis_kelamin}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.kewarganegaraan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Place / Date of Birth</td>\r\n                    <td class=\"pr-0 text-right text-dark\">\r\n                            {{dataPelamar.tempat_lahir}}/{{dataPelamar.tanggal_lahir| date}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Religion</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.agama}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Marriage status</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.status_perkawinan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Phone Number</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{dataPelamar.phone}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Email</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.nama_depan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 1</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.hp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 2</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{dataPelamar.hp2}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>RESIDENCE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Current Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.alamat_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.provinsi_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_tinggal}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>NATIVE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.alamat_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.prvinsi_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_identitas}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>OTHERS INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Blood Type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.golongan_darah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Height</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.tinggi_badan}} cm</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Weight</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.berat_badan}} kg</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>SPECIAL IDENTITY</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Face</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.bentuk_wajah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Hair</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.warna_rambut}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Body</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.bentuk_tubuh}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Skin</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.warna_kulit}}</td>\r\n                </tr>\r\n                <!--\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Blood type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.golongan_darah}}</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Current addres</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.alamat_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City/regency</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.provinsi_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Identity number</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.no_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Valid untill</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.tanggal_berakhir_identitas| date}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Addres base on identity</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.alamat_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City/regency</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.prvinsi_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_identitas}}</td>\r\n                </tr>-->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Biodata</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Initial </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Initial\" formControlName=\"initial\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Residence Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_tinggal\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"provinsi_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Native Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_identitas\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"prvinsi_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Blood type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"golongan_darah\">\r\n                                    <nz-option nzLabel=\"A\" nzValue=\"A\"></nz-option>\r\n                                    <nz-option nzLabel=\"B\" nzValue=\"B\"></nz-option>\r\n                                    <nz-option nzLabel=\"AB\" nzValue=\"AB\"></nz-option>\r\n                                    <nz-option nzLabel=\"O\" nzValue=\"O\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Height</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Height\" formControlName=\"tinggi_badan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Weight </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Weight\" formControlName=\"berat_badan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Face</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\" formControlName=\"bentuk_wajah\">\r\n                                    <nz-option nzLabel=\"Oval\" nzValue=\"Oval\"></nz-option>\r\n                                    <nz-option nzLabel=\"Round\" nzValue=\"Round\"></nz-option>\r\n                                    <nz-option nzLabel=\"Square\" nzValue=\"Square\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hair</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\" formControlName=\"warna_rambut\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"Grey\" nzValue=\"Grey\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Body</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\" formControlName=\"bentuk_tubuh\">\r\n                                    <nz-option nzLabel=\"Ideal\" nzValue=\"Ideal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Fat\" nzValue=\"Fat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Thin\" nzValue=\"Thin\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Skin</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\" formControlName=\"warna_kulit\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"White\" nzValue=\"White\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n            <!--\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth place </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\" formControlName=\"tempat_lahir\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Birth date </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_lahir\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Religion</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"agama\">\r\n                                    <nz-option nzLabel=\"Islam\" nzValue=\"Islam\"></nz-option>\r\n                                    <nz-option nzLabel=\"Kristen\" nzValue=\"Kristen\"></nz-option>\r\n                                    <nz-option nzLabel=\"Katolik\" nzValue=\"Katolik\"></nz-option>\r\n                                    <nz-option nzLabel=\"Hindu\" nzValue=\"Hindu\"></nz-option>\r\n                                    <nz-option nzLabel=\"Budha\" nzValue=\"Budha\"></nz-option>\r\n                                    <nz-option nzLabel=\"Lainnya\" nzValue=\"Lainnya\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Marriage status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_perkawinan\">\r\n                                    <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                    <nz-option nzLabel=\"Menikah\" nzValue=\"Menikah\"></nz-option>\r\n                                    <nz-option nzLabel=\"Duda\" nzValue=\"Duda\"></nz-option>\r\n                                    <nz-option nzLabel=\"Janda\" nzValue=\"Janda\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Blood type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"golongan_darah\">\r\n                                    <nz-option nzLabel=\"A\" nzValue=\"A\"></nz-option>\r\n                                    <nz-option nzLabel=\"B\" nzValue=\"B\"></nz-option>\r\n                                    <nz-option nzLabel=\"AB\" nzValue=\"AB\"></nz-option>\r\n                                    <nz-option nzLabel=\"O\" nzValue=\"O\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Phone number </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Sesuai identitas\" formControlName=\"no_telepon\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Current addres</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_tinggal\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City/regency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provinsi</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"provinsi_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Identity number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Valid untill</nz-form-label>\r\n                            <nz-form-control>\r\n                                    <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_berakhir_identitas\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Address base on identity</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Tulis Alamat\" formControlName=\"alamat_identitas\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City/regency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"prvinsi_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>-->\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"8\">\r\n        <!-- <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex flex-wrap flex-column\r\n                        align-items-center\">\r\n                    <div class=\"air__utils__avatar\r\n                            air__utils__avatar--size64 mb-3\">\r\n                        <img class=\"img-responsive\" alt=\"example\"\r\n                            src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <div class=\"text-dark font-weight-bold\r\n                                font-size-18\">{{dataPelamar.nama_depan}} {{dataPelamar.nama_belakang}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex flex-wrap flex-column\r\n                    align-items-center\">\r\n                    <div class=\"air__utils__avatar\r\n                        air__utils__avatar--size64 mb-3 mt-3\" (click)=\"UpdateFoto()\">\r\n                        <img class=\"img-responsive\" alt=\"example\" src=\"{{foto}}\" />\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <div class=\"text-dark font-weight-bold\r\n                            font-size-18\">{{dataPelamar.nama_depan}} {{dataPelamar.nama_belakang}}</div>\r\n                    </div>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary\r\n                            btn-with-addon\">\r\n                            <span class=\"btn-addon\">\r\n                                <i class=\"btn-addon-icon fe fe-plus-circle\"></i>\r\n                            </span>\r\n                            Request Access\r\n                        </button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n\r\n\r\n            <div class=\"card-body\">\r\n                <h4>Job Applied</h4>\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Position</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataPermintaan.nama_jabatan}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Department</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataPermintaan.nama_departemen}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Majors</td>\r\n                            <td class=\"pr-0 text-left text-dark\">:</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Status</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataPermintaan.status_permintaan}}</td>\r\n                        </tr>\r\n                        <!--\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Lokasi</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataPermintaan.lokasi_kerja}}\r\n                            </td>\r\n                        </tr>-->\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"16\">\r\n        <nz-tabset nzLinkRouter>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./biodata/detail']\">Biodata</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./keluarga/list']\">Relations</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./id-card']\">ID Cards</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./pendidikan/list']\">Educations</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./keahlian/list']\">Skills</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./pengalaman/list']\">Experiences</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./penilaian/list']\">Assessment</a>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <a nz-tab-link [routerLink]=\"['./dokumen']\">Documents</a>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Documents</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" (click)=\"togleShowUpload()\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n            <erp-single-upload></erp-single-upload>\r\n        </div>\r\n        <nz-table #basicTable [nzData]=\"dataDokumen\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Filename</th>\r\n                    <th>Name of Document</th>\r\n                    <th>Revision</th>\r\n                    <th>File</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.nomor}}</td>\r\n                    <td>{{data.name}}</td>\r\n                    <td>{{data.revisi}}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_document)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <erp-single-upload></erp-single-upload>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9iaW9kYXRhL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPelamarBiodataService, direktoriPelamarService, router, pelamarServiceService, nzMessageService) {
        this.direktoriPelamarBiodataService = direktoriPelamarBiodataService;
        this.direktoriPelamarService = direktoriPelamarService;
        this.router = router;
        this.pelamarServiceService = pelamarServiceService;
        this.nzMessageService = nzMessageService;
        this.dataPelamar = {};
        this.biodata = {};
        this.id_pelamar_biodata = '';
        this.id_pelamar = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pelamar paja tu ' + _this.id_pelamar);
        });
        this.getPelamar();
    };
    DetailComponent.prototype.getPelamar = function () {
        var _this = this;
        this.direktoriPelamarService.getDirektoriPelamarsId(this.id_pelamar).subscribe(function (data) {
            _this.dataPelamar = data.data;
            _this.getBiodata(data.data.id_pelamar);
        });
    };
    DetailComponent.prototype.getBiodata = function (id_pelamar) {
        var _this = this;
        this.direktoriPelamarBiodataService
            .getDirektoriPelamarBiodatasId(id_pelamar)
            .subscribe(function (res) {
            _this.biodata = res.data;
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarBiodataService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarBiodataService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9iaW9kYXRhL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPelamarBiodataService, spinner, router, pesan, pelamarServiceService, fb) {
        this.direktoriPelamarBiodataService = direktoriPelamarBiodataService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.pelamarServiceService = pelamarServiceService;
        this.fb = fb;
        this.id_pelamar = '';
        this.pelamarBiodata = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.form();
        this.getBiodata();
    };
    EditComponent.prototype.getBiodata = function () {
        var _this = this;
        this.direktoriPelamarBiodataService
            .getDirektoriPelamarBiodatasId(this.id_pelamar)
            .subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pelamar_biodata: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            golongan_darah: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_telepon: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            alamat_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kota_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            provinsi_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_berakhir_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            alamat_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kode_pos_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kota_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bentuk_tubuh: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bentuk_wajah: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            berat_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            warna_kulit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            initial: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            warna_rambut: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tinggi_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            prvinsi_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kode_pos_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
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
        this.pelamarBiodata = this.dataForm.value;
        this.direktoriPelamarBiodataService
            .putDirektoriPelamarBiodatasId({ id: this.id_pelamar, body: this.pelamarBiodata })
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
        this.router.navigate(['/hr/direktori/detail-pelamar', this.id_pelamar,]);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarBiodataService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPelamarBiodataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_1__["PelamarServiceService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailPelamarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPelamarRoutingModule", function() { return DetailPelamarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dokumen/dokumen.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.ts");
/* harmony import */ var _biodata_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biodata/edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.ts");
/* harmony import */ var _biodata_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biodata/detail/detail.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.ts");
/* harmony import */ var _detail_pelamar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-pelamar.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.ts");








var routes = [
    {
        path: '',
        component: _detail_pelamar_component__WEBPACK_IMPORTED_MODULE_4__["DetailPelamarComponent"],
        children: [
            {
                path: '',
                redirectTo: 'biodata/detail'
            },
            {
                path: 'biodata/detail',
                component: _biodata_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
            },
            {
                path: 'biodata/edit',
                component: _biodata_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]
            },
            {
                path: 'dokumen',
                component: _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_1__["DokumenComponent"]
            },
            {
                path: 'foto',
                component: _foto_foto_component__WEBPACK_IMPORTED_MODULE_7__["FotoComponent"]
            },
            {
                path: 'keluarga',
                loadChildren: function () {
                    return Promise.all(/*! import() | keluarga-keluarga-module */[__webpack_require__.e("common"), __webpack_require__.e("keluarga-keluarga-module")]).then(__webpack_require__.bind(null, /*! ./keluarga/keluarga.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keluarga/keluarga.module.ts")).then(function (mod) { return mod.KeluargaModule; });
                },
            },
            {
                path: 'id-card',
                loadChildren: function () {
                    return Promise.all(/*! import() | id-card-id-card-module */[__webpack_require__.e("common"), __webpack_require__.e("id-card-id-card-module")]).then(__webpack_require__.bind(null, /*! ./id-card/id-card.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/id-card/id-card.module.ts")).then(function (mod) { return mod.IdCardModule; });
                },
            },
            {
                path: 'pendidikan',
                loadChildren: function () {
                    return Promise.all(/*! import() | pendidikan-pendidikan-module */[__webpack_require__.e("common"), __webpack_require__.e("pendidikan-pendidikan-module")]).then(__webpack_require__.bind(null, /*! ./pendidikan/pendidikan.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pendidikan/pendidikan.module.ts")).then(function (mod) { return mod.PendidikanModule; });
                },
            },
            {
                path: 'pengalaman',
                loadChildren: function () {
                    return Promise.all(/*! import() | pengalaman-pengalaman-module */[__webpack_require__.e("common"), __webpack_require__.e("pengalaman-pengalaman-module")]).then(__webpack_require__.bind(null, /*! ./pengalaman/pengalaman.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/pengalaman/pengalaman.module.ts")).then(function (mod) { return mod.PengalamanModule; });
                },
            },
            {
                path: 'penilaian',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | penilaian-penilaian-module */ "penilaian-penilaian-module").then(__webpack_require__.bind(null, /*! ./penilaian/penilaian.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/penilaian/penilaian.module.ts")).then(function (mod) { return mod.PenilaianModule; });
                },
            },
            {
                path: 'keahlian',
                loadChildren: function () {
                    return Promise.all(/*! import() | keahlian-keahlian-module */[__webpack_require__.e("common"), __webpack_require__.e("keahlian-keahlian-module")]).then(__webpack_require__.bind(null, /*! ./keahlian/keahlian.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/keahlian/keahlian.module.ts")).then(function (mod) { return mod.KeahlianModule; });
                },
            },
        ],
    },
];
var DetailPelamarRoutingModule = /** @class */ (function () {
    function DetailPelamarRoutingModule() {
    }
    DetailPelamarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], DetailPelamarRoutingModule);
    return DetailPelamarRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".air__utils__avatar {\n  height: 180px;\n  width: 180px;\n  padding: 0px;\n}\n.air__utils__avatar img {\n  margin-top: rem(5);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL2RldGFpbC1wZWxhbWFyL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxkaXJla3RvcmlcXGVtcGxveWVlXFxkZXRhaWwtcGVsYW1hclxcZGV0YWlsLXBlbGFtYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9kZXRhaWwtcGVsYW1hci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9kZXRhaWwtcGVsYW1hci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXJfX3V0aWxzX19hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHJlbSg1KTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCIuYWlyX191dGlsc19fYXZhdGFyIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWlyX191dGlsc19fYXZhdGFyIGltZyB7XG4gIG1hcmdpbi10b3A6IHJlbSg1KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DetailPelamarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPelamarComponent", function() { return DetailPelamarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-permintaan-pegawai-list.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");






var DetailPelamarComponent = /** @class */ (function () {
    function DetailPelamarComponent(direktoriPelamarService, direktoriPermintaanPegawaiListService, pelamarServiceService, activatedRoute, router) {
        this.direktoriPelamarService = direktoriPelamarService;
        this.direktoriPermintaanPegawaiListService = direktoriPermintaanPegawaiListService;
        this.pelamarServiceService = pelamarServiceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_pelamar = '';
        this.dataPelamar = {};
        this.dataPermintaan = {};
        this.foto = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
    DetailPelamarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id_pelamar')) {
                _this.id_pelamar = params.get('id_pelamar');
                _this.pelamarServiceService.setIdpelamar(_this.id_pelamar);
                console.log('sdasdas' + _this.id_pelamar);
            }
        });
        this.getPelamar();
    };
    DetailPelamarComponent.prototype.getPelamar = function () {
        var _this = this;
        this.direktoriPelamarService.getDirektoriPelamarsId(this.id_pelamar).subscribe(function (data) {
            _this.dataPelamar = data.data;
            _this.getPermintaan(data.data.id_permintaan_pegawai);
            if (data.data.foto) {
                _this.foto = "http://erp-document.vm.devetek.com/download?id_document=" + data.data.foto;
            }
        });
    };
    DetailPelamarComponent.prototype.getPermintaan = function (id_permintaan_pegawai) {
        var _this = this;
        this.direktoriPermintaanPegawaiListService.getDirektoriPermintaanPegawaiListsId(id_permintaan_pegawai).subscribe(function (data) {
            _this.dataPermintaan = data.data;
        });
    };
    DetailPelamarComponent.prototype.UpdateFoto = function () {
        this.router.navigate(['hr/direktori/employee/detail-pelamar', this.id_pelamar, 'foto']);
    };
    DetailPelamarComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriPelamarService"] },
        { type: src_app_sdk_hr_services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPermintaanPegawaiListService"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DetailPelamarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-detail-pelamar',
            template: __webpack_require__(/*! raw-loader!./detail-pelamar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.html"),
            styles: [__webpack_require__(/*! ./detail-pelamar.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriPelamarService"],
            src_app_sdk_hr_services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_1__["DirektoriPermintaanPegawaiListService"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailPelamarComponent);
    return DetailPelamarComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailPelamarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPelamarModule", function() { return DetailPelamarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_pelamar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-pelamar-routing.module */ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar-routing.module.ts");
/* harmony import */ var _detail_pelamar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-pelamar.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/detail-pelamar.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _biodata_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./biodata/detail/detail.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/detail/detail.component.ts");
/* harmony import */ var _biodata_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./biodata/edit/edit.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/biodata/edit/edit.component.ts");
/* harmony import */ var _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dokumen/dokumen.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.ts");













var DetailPelamarModule = /** @class */ (function () {
    function DetailPelamarModule() {
    }
    DetailPelamarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_pelamar_component__WEBPACK_IMPORTED_MODULE_4__["DetailPelamarComponent"], _biodata_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"], _biodata_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_10__["DokumenComponent"], _foto_foto_component__WEBPACK_IMPORTED_MODULE_12__["FotoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _detail_pelamar_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailPelamarRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__["DocumentModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]],
        })
    ], DetailPelamarModule);
    return DetailPelamarModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9kb2t1bWVuL2Rva3VtZW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DokumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DokumenComponent", function() { return DokumenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_document_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/document/services */ "./src/app/sdk/document/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");









var DokumenComponent = /** @class */ (function () {
    function DokumenComponent(fileDocumentService, router, pelamarServiceService, direktoriPelamarService, nzMessageService, spinner, singleUploadService) {
        this.fileDocumentService = fileDocumentService;
        this.router = router;
        this.pelamarServiceService = pelamarServiceService;
        this.direktoriPelamarService = direktoriPelamarService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.dataDokumen = [];
        this.dataPelamar = {};
        this.id_pelamar = '';
    }
    DokumenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
            console.log('id pelamar paja tu ' + _this.id_pelamar);
            _this.getDokumen();
            _this.getPalamar();
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pelamar_document.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.getDokumen();
            }
        });
    };
    DokumenComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    DokumenComponent.prototype.getPalamar = function () {
        var _this = this;
        this.direktoriPelamarService.getDirektoriPelamarsId(this.id_pelamar).subscribe(function (data) {
            _this.dataPelamar = data.data;
            _this.singleUploadService.param.next({
                for_module: "pelamar_document",
                for_table: "erp_hr_pelamar.pelamar",
                for_module_id: data.data.id_pelamar
            });
        });
    };
    DokumenComponent.prototype.getDokumen = function () {
        var _this = this;
        this.fileDocumentService.getFileDocuments(JSON.stringify({ id_pelamar: this.id_pelamar })).subscribe(function (data) {
            _this.dataDokumen = data.data;
        });
    };
    DokumenComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.fileDocumentService
            .deleteFileDocumentsId(id)
            .subscribe(function (data) {
            _this.getDokumen();
            _this.spinner.hide();
        });
    };
    DokumenComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    DokumenComponent.ctorParameters = function () { return [
        { type: src_app_sdk_document_services__WEBPACK_IMPORTED_MODULE_2__["FileDocumentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__["PelamarServiceService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPelamarService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_7__["SingleUploadService"] }
    ]; };
    DokumenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dokumen',
            template: __webpack_require__(/*! raw-loader!./dokumen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.html"),
            styles: [__webpack_require__(/*! ./dokumen.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/dokumen/dokumen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_document_services__WEBPACK_IMPORTED_MODULE_2__["FileDocumentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_4__["PelamarServiceService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_8__["DirektoriPelamarService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_7__["SingleUploadService"]])
    ], DokumenComponent);
    return DokumenComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9kZXRhaWwtcGVsYW1hci9mb3RvL2ZvdG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoComponent", function() { return FotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/pelamar-service.service */ "./src/app/pages/hr/direktori/employee/detail-pelamar/service/pelamar-service.service.ts");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var FotoComponent = /** @class */ (function () {
    function FotoComponent(direktoriPelamarService, pelamarServiceService, singleUploadService, spinner, fb, pesan, activatedRoute, router) {
        this.direktoriPelamarService = direktoriPelamarService;
        this.pelamarServiceService = pelamarServiceService;
        this.singleUploadService = singleUploadService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_pelamar = '';
        this.toogleUpload = false;
        this.dataPelamar = {};
        // togleShowUpload() {
        //     this.toogleUpload = true;
        // }
        this.foto = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
    FotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelamarServiceService.getIdPelamar().subscribe(function (data) {
            _this.id_pelamar = data;
        });
        this.getData();
        this.form();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'company.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ foto: data });
                _this.simpan();
            }
        });
    };
    FotoComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPelamarService.getDirektoriPelamarsId(this.id_pelamar).subscribe(function (data) {
            _this.dataPelamar = data.data;
            _this.dataForm.setValue(data.data);
            _this.singleUploadService.param.next({
                for_module: "hr_pelamar",
                for_table: "erp_hr.pelamar",
                for_module_id: data.data.id_pelamar
            });
            // if (data.data.foto) {
            //     this.foto = "http://erp-document.vm.devetek.com/download?id_document=" + data.data.foto
            // }
        });
    };
    FotoComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_permintaan_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pelamar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            Spesialisasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            majors: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    FotoComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPelamar = this.dataForm.value;
        this.direktoriPelamarService.putDirektoriPelamarsId({ id: this.id_pelamar, body: this.dataPelamar }).subscribe(function (data) {
            _this.toogleUpload = false;
            _this.getData();
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    FotoComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/detail-pelamar', this.id_pelamar]);
    };
    FotoComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarService"] },
        { type: _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__["SingleUploadService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    FotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foto',
            template: __webpack_require__(/*! raw-loader!./foto.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.html"),
            styles: [__webpack_require__(/*! ./foto.component.scss */ "./src/app/pages/hr/direktori/employee/detail-pelamar/foto/foto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarService"],
            _service_pelamar_service_service__WEBPACK_IMPORTED_MODULE_3__["PelamarServiceService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__["SingleUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], FotoComponent);
    return FotoComponent;
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
//# sourceMappingURL=detail-pelamar-detail-pelamar-module.js.map