(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biodata-biodata-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Biodata</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-biodata']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>PERSONAL INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Initial</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.initial}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Name</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                        {{pegawai.nama_belakang}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Gender</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_kelamin}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.kewarganegaraan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Place / Date of Birth </td>\r\n                    <td class=\"pr-0 text-right text-dark\">\r\n                        {{pegawai.tempat_lahir}} / {{pegawai.tanggal_lahir| date}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Religion</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.agama}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Martial Status</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.status_perkawinan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Email</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.email}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Phone</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.phone}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 1</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 2</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp2}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>RESIDENCE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Current Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.alamat_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.provinsi_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_tinggal}}</td>\r\n                </tr>\r\n                <!--\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Identity Number</td>\r\n                                    <td class=\"pr-0 text-right text-dark\"> {{biodata.no_identitas}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Expired Date</td>\r\n                                    <td class=\"pr-0 text-right text-dark\"> {{biodata.tanggal_berakhir_identitas| date}}\r\n                                    </td>\r\n                                </tr>\r\n                                -->\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>NATIVE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.alamat_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.prvinsi_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_identitas}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>OTHERS INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Blood Type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.golongan_darah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Height</td>\r\n                    <td class=\"pr-0 text-right text-dark\">  {{biodata.tinggi_badan}} cm</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Weight</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.berat_badan}} kg</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>SPECIAL IDENTITY</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Face</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.bentuk_wajah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Hair</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.warna_rambut}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Body</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.bentuk_tubuh}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Skin</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.warna_kulit}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Documents</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" (click)=\"togleShowUpload()\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n            <erp-single-upload></erp-single-upload>\r\n        </div>\r\n        <nz-table #basicTable [nzData]=\"dataDokumen\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Filename</th>\r\n                    <th>Name of Document</th>\r\n                    <th>Revision</th>\r\n                    <th>File</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.for_module}}</td>\r\n                    <td>{{data.name}}</td>\r\n                    <td>{{data.revisi}}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_document)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Biodata</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Initial </nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"initial\" formControlName=\"initial\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Residence Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_tinggal\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"provinsi_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Native Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_identitas\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"prvinsi_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Height</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"cm\">\r\n                                    <input nz-input placeholder=\"Height\" formControlName=\"tinggi_badan\" />\r\n                                  </nz-input-group>\r\n                             </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Weight </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"kg\">\r\n                                    <input nz-input placeholder=\"Weight\" formControlName=\"berat_badan\" />\r\n                                  </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Face</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\"\r\n                                    formControlName=\"bentuk_wajah\">\r\n                                    <nz-option nzLabel=\"Oval\" nzValue=\"Oval\"></nz-option>\r\n                                    <nz-option nzLabel=\"Round\" nzValue=\"Round\"></nz-option>\r\n                                    <nz-option nzLabel=\"Square\" nzValue=\"Square\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hair</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\"\r\n                                    formControlName=\"warna_rambut\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"Grey\" nzValue=\"Grey\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Body</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\"\r\n                                    formControlName=\"bentuk_tubuh\">\r\n                                    <nz-option nzLabel=\"Ideal\" nzValue=\"Ideal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Fat\" nzValue=\"Fat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Thin\" nzValue=\"Thin\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Skin</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\" formControlName=\"warna_kulit\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"White\" nzValue=\"White\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Blood type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"golongan_darah\">\r\n                                    <nz-option nzLabel=\"A\" nzValue=\"A\"></nz-option>\r\n                                    <nz-option nzLabel=\"B\" nzValue=\"B\"></nz-option>\r\n                                    <nz-option nzLabel=\"AB\" nzValue=\"AB\"></nz-option>\r\n                                    <nz-option nzLabel=\"O\" nzValue=\"O\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <!--\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Identity number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Valid untill</nz-form-label>\r\n                            <nz-form-control>\r\n                                    <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_berakhir_identitas\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>-->\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\" *ngIf=\"toogleUpload == false\">\r\n    <div class=\"card-body\">\r\n        <div class=\"d-flex flex-wrap flex-column\r\n                            align-items-center mb-3\">\r\n            <div class=\"air__utils__avatar\">\r\n                <img class=\"img-responsive\" alt=\"example\" src=\"{{foto}}\" />\r\n            </div>\r\n            <div class=\"d-flex flex-wrap align-items-center mt-3\">\r\n\r\n                <a nz-button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 9px;\"><span>Back</span></a>\r\n                <a nz-button nzType=\"primary\" (click)=\"togleShowUpload()\"><i nz-icon nzType=\"cloud-upload\"\r\n                        nzTheme=\"outline\"></i>&nbsp;Replace</a>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div> -->\r\n<div class=\"card\" >\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <erp-single-upload></erp-single-upload>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/detail/detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/detail/detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Biodata</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-biodata']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>PERSONAL INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Initial</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.initial}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Name</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}}\r\n                        {{pegawai.nama_belakang}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Gender</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_kelamin}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{pegawai.kewarganegaraan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Place / Date of Birth </td>\r\n                    <td class=\"pr-0 text-right text-dark\">\r\n                        {{pegawai.tempat_lahir}} / {{pegawai.tanggal_lahir| date}}\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Religion</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.agama}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Martial Status</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.status_perkawinan}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Email</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.email}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Phone</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.phone}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 1</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Mobile Phone Number 2</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{pegawai.hp2}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>RESIDENCE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Current Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.alamat_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.provinsi_tinggal}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_tinggal}}</td>\r\n                </tr>\r\n                <!--\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Identity Number</td>\r\n                                    <td class=\"pr-0 text-right text-dark\"> {{biodata.no_identitas}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Expired Date</td>\r\n                                    <td class=\"pr-0 text-right text-dark\"> {{biodata.tanggal_berakhir_identitas| date}}\r\n                                    </td>\r\n                                </tr>\r\n                                -->\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>NATIVE ADDRESS</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Address</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.alamat_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">City</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kota_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Province</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.prvinsi_identitas}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Postal Code</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.kode_pos_identitas}}</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>OTHERS INFORMATION</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Blood Type</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.golongan_darah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Height</td>\r\n                    <td class=\"pr-0 text-right text-dark\">  {{biodata.tinggi_badan}} cm</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Weight</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.berat_badan}} kg</td>\r\n                </tr>\r\n                <br>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\"><b>SPECIAL IDENTITY</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Face</td>\r\n                    <td class=\"pr-0 text-right text-dark\">{{biodata.bentuk_wajah}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Hair</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.warna_rambut}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Body</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.bentuk_tubuh}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-gray-6 pl-0\">Skin</td>\r\n                    <td class=\"pr-0 text-right text-dark\"> {{biodata.warna_kulit}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Biodata</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Initial </nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"initial\" formControlName=\"initial\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Residence Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_tinggal\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"provinsi_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_tinggal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Native Address</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Address\" formControlName=\"alamat_identitas\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>City</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kota_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Province</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"prvinsi_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Postal Code</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"kode_pos_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Height</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Height\" formControlName=\"tinggi_badan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Weight </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Weight\" formControlName=\"berat_badan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Face</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\"\r\n                                    formControlName=\"bentuk_wajah\">\r\n                                    <nz-option nzLabel=\"Oval\" nzValue=\"Oval\"></nz-option>\r\n                                    <nz-option nzLabel=\"Round\" nzValue=\"Round\"></nz-option>\r\n                                    <nz-option nzLabel=\"Square\" nzValue=\"Square\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hair</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\"\r\n                                    formControlName=\"warna_rambut\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"Grey\" nzValue=\"Grey\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Body</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Face\"\r\n                                    formControlName=\"bentuk_tubuh\">\r\n                                    <nz-option nzLabel=\"Ideal\" nzValue=\"Ideal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Fat\" nzValue=\"Fat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Thin\" nzValue=\"Thin\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Skin</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Hair\" formControlName=\"warna_kulit\">\r\n                                    <nz-option nzLabel=\"Black\" nzValue=\"Black\"></nz-option>\r\n                                    <nz-option nzLabel=\"Brown\" nzValue=\"Brown\"></nz-option>\r\n                                    <nz-option nzLabel=\"White\" nzValue=\"White\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Blood type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"golongan_darah\">\r\n                                    <nz-option nzLabel=\"A\" nzValue=\"A\"></nz-option>\r\n                                    <nz-option nzLabel=\"B\" nzValue=\"B\"></nz-option>\r\n                                    <nz-option nzLabel=\"AB\" nzValue=\"AB\"></nz-option>\r\n                                    <nz-option nzLabel=\"O\" nzValue=\"O\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <!--\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Identity number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"no_identitas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Valid untill</nz-form-label>\r\n                            <nz-form-control>\r\n                                    <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                    formControlName=\"tanggal_berakhir_identitas\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>-->\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/biodata-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/biodata-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: BiodataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiodataRoutingModule", function() { return BiodataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.ts");
/* harmony import */ var _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-biodata/edit-biodata.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.ts");
/* harmony import */ var _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dokumen/dokumen.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.ts");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.ts");







var routes = [
    {
        path: 'dokumen',
        component: _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_5__["DokumenComponent"],
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    },
    {
        path: 'foto',
        component: _foto_foto_component__WEBPACK_IMPORTED_MODULE_6__["FotoComponent"]
    },
    {
        path: 'edit-biodata',
        component: _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_4__["EditBiodataComponent"],
    },
    {
        path: 'pendidikan',
        loadChildren: function () { return Promise.all(/*! import() | pendidikan-pendidikan-module */[__webpack_require__.e("common"), __webpack_require__.e("pendidikan-pendidikan-module")]).then(__webpack_require__.bind(null, /*! ./pendidikan/pendidikan.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pendidikan/pendidikan.module.ts")).then(function (mo) { return mo.PendidikanModule; }); },
    },
    {
        path: 'keluarga',
        loadChildren: function () { return Promise.all(/*! import() | keluarga-keluarga-module */[__webpack_require__.e("common"), __webpack_require__.e("keluarga-keluarga-module")]).then(__webpack_require__.bind(null, /*! ./keluarga/keluarga.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keluarga/keluarga.module.ts")).then(function (mo) { return mo.KeluargaModule; }); },
    },
    {
        path: 'pengalaman',
        loadChildren: function () { return Promise.all(/*! import() | pengalaman-pengalaman-module */[__webpack_require__.e("common"), __webpack_require__.e("pengalaman-pengalaman-module")]).then(__webpack_require__.bind(null, /*! ./pengalaman/pengalaman.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/pengalaman/pengalaman.module.ts")).then(function (mo) { return mo.PengalamanModule; }); },
    },
    {
        path: 'sertifikasi',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sertifikasi-sertifikasi-module */ "sertifikasi-sertifikasi-module").then(__webpack_require__.bind(null, /*! ./sertifikasi/sertifikasi.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/sertifikasi/sertifikasi.module.ts")).then(function (mo) { return mo.SertifikasiModule; }); },
    },
    {
        path: 'id-card',
        loadChildren: function () { return Promise.all(/*! import() | id-card-id-card-module */[__webpack_require__.e("common"), __webpack_require__.e("id-card-id-card-module")]).then(__webpack_require__.bind(null, /*! ./id-card/id-card.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/id-card/id-card.module.ts")).then(function (mo) { return mo.IdCardModule; }); },
    },
    {
        path: 'keahlian',
        loadChildren: function () { return Promise.all(/*! import() | keahlian-keahlian-module */[__webpack_require__.e("common"), __webpack_require__.e("keahlian-keahlian-module")]).then(__webpack_require__.bind(null, /*! ./keahlian/keahlian.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/keahlian/keahlian.module.ts")).then(function (mo) { return mo.KeahlianModule; }); },
    },
];
var BiodataRoutingModule = /** @class */ (function () {
    function BiodataRoutingModule() {
    }
    BiodataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BiodataRoutingModule);
    return BiodataRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/biodata.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/biodata.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BiodataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiodataModule", function() { return BiodataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _biodata_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biodata-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/biodata-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-biodata/edit-biodata.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dokumen/dokumen.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.ts");













var BiodataModule = /** @class */ (function () {
    function BiodataModule() {
    }
    BiodataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
                _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_8__["EditBiodataComponent"],
                _dokumen_dokumen_component__WEBPACK_IMPORTED_MODULE_10__["DokumenComponent"],
                _foto_foto_component__WEBPACK_IMPORTED_MODULE_12__["FotoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _biodata_routing_module__WEBPACK_IMPORTED_MODULE_3__["BiodataRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__["DocumentModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], BiodataModule);
    return BiodataModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");









var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, direktoriPegawaiBiodataService, direktoriPegawaiKeluargaService, direktoriPegawaiPendidikanService, direktoriPegawaiPengalamanService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiBiodataService = direktoriPegawaiBiodataService;
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.direktoriPegawaiPengalamanService = direktoriPegawaiPengalamanService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.pegawai = {};
        this.biodata = {};
        this.pegawai_posisi = {};
        this.dataKeluarga = [];
        this.dataPendidikan = [];
        this.dataPengalaman = [];
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
        this.getKeluarga();
        this.getPendidikan();
        this.getPengalaman();
    };
    DetailComponent.prototype.getPegawai = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getBiodata(data.data.id_pegawai);
        });
    };
    DetailComponent.prototype.getBiodata = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiBiodataService
            .getDirektoriPegawaiBiodatasId(id_pegawai)
            .subscribe(function (res) {
            _this.biodata = res.data;
        });
    };
    //------------------------------------------------Keluarga------------------------------------------------------//
    DetailComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai }))
            .subscribe(function (res) {
            _this.dataKeluarga = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .deleteDirektoriPegawaiKeluargasId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    //------------------------------------------------Pendidikan------------------------------------------------------//
    DetailComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikan = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.deletePendidikan = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService
            .deleteDirektoriPegawaiPendidikansId(id)
            .subscribe(function (data) {
            _this.getPendidikan();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDeletePendidikan = function () {
        this.nzMessageService.info('click cancel');
    };
    //------------------------------------------------Pengalaman------------------------------------------------------//
    DetailComponent.prototype.getPengalaman = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPengalamanService.getDirektoriPegawaiPengalamen(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPengalaman = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.deletePengalaman = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPengalamanService
            .deleteDirektoriPegawaiPengalamenId(id)
            .subscribe(function (data) {
            _this.getPengalaman();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDeletePengalaman = function () {
        this.nzMessageService.info('click cancel');
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiBiodataService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiKeluargaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPengalamanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiBiodataService"],
            src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiKeluargaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPengalamanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvZG9rdW1lbi9kb2t1bWVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DokumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DokumenComponent", function() { return DokumenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_document_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/document/services */ "./src/app/sdk/document/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");









var DokumenComponent = /** @class */ (function () {
    function DokumenComponent(fileDocumentService, router, pegawaiDetailService, direktoriPegawaiService, nzMessageService, spinner, singleUploadService) {
        this.fileDocumentService = fileDocumentService;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.dataDokumen = [];
        this.dataPegawai = {};
        this.id_pegawai = '';
    }
    DokumenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getDokumen();
            _this.getPegawai();
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'pegawai_document.finish') {
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
    DokumenComponent.prototype.getPegawai = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
            _this.singleUploadService.param.next({
                for_module: "pegawai_document",
                for_table: "erp_hr_pegawai.pegawai",
                for_module_id: data.data.id_pegawai
            });
        });
    };
    DokumenComponent.prototype.getDokumen = function () {
        var _this = this;
        this.fileDocumentService.getFileDocuments(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
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
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["DirektoriPegawaiService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_6__["SingleUploadService"] }
    ]; };
    DokumenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dokumen',
            template: __webpack_require__(/*! raw-loader!./dokumen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.html"),
            styles: [__webpack_require__(/*! ./dokumen.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/dokumen/dokumen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_document_services__WEBPACK_IMPORTED_MODULE_2__["FileDocumentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_8__["PegawaiDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["DirektoriPegawaiService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_6__["SingleUploadService"]])
    ], DokumenComponent);
    return DokumenComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvZWRpdC1iaW9kYXRhL2VkaXQtYmlvZGF0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditBiodataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBiodataComponent", function() { return EditBiodataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");









var EditBiodataComponent = /** @class */ (function () {
    function EditBiodataComponent(direktoriPegawaiBiodataService, spinner, router, pesan, pegawaiDetailService, fb) {
        this.direktoriPegawaiBiodataService = direktoriPegawaiBiodataService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.id_pegawai = '';
        this.pegawai_biodata = {};
    }
    EditBiodataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getBiodata();
    };
    EditBiodataComponent.prototype.getBiodata = function () {
        var _this = this;
        this.direktoriPegawaiBiodataService
            .getDirektoriPegawaiBiodatasId(this.id_pegawai)
            .subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditBiodataComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            id_pegawai_biodata: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            golongan_darah: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            no_telepon: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            alamat_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kota_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            provinsi_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            no_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tanggal_berakhir_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            alamat_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kode_pos_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kota_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prvinsi_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kode_pos_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hp1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bentuk_tubuh: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bentuk_wajah: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            warna_kulit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            warna_rambut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            initial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tinggi_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            berat_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    EditBiodataComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_biodata = this.dataForm.value;
        this.direktoriPegawaiBiodataService
            .putDirektoriPegawaiBiodatasId({ id: this.id_pegawai, body: this.pegawai_biodata })
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
    EditBiodataComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'biodata', 'detail']);
    };
    EditBiodataComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiBiodataService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"] }
    ]; };
    EditBiodataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-biodata',
            template: __webpack_require__(/*! raw-loader!./edit-biodata.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.html"),
            styles: [__webpack_require__(/*! ./edit-biodata.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/edit-biodata/edit-biodata.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiBiodataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"]])
    ], EditBiodataComponent);
    return EditBiodataComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2Jpb2RhdGEvZm90by9mb3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoComponent", function() { return FotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var FotoComponent = /** @class */ (function () {
    function FotoComponent(direktoriPegawaiService, pegawaiDetailService, singleUploadService, spinner, fb, pesan, activatedRoute, router) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.singleUploadService = singleUploadService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_pegawai = '';
        this.toogleUpload = false;
        this.dataPegawai = {};
        // togleShowUpload() {
        //     this.toogleUpload = true;
        // }
        this.foto = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
    FotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
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
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
            _this.dataForm.setValue(data.data);
            _this.singleUploadService.param.next({
                for_module: "hr_pegawai",
                for_table: "erp_hr.pegawai",
                for_module_id: data.data.id_pegawai
            });
            // if (data.data.foto) {
            //     this.foto = "http://erp-document.vm.devetek.com/download?id_document=" + data.data.foto
            // }
        });
    };
    FotoComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            no_induk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            no_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            type_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_ptkp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jadwal_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_kesehatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jht: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_keluar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
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
        this.dataPegawai = this.dataForm.value;
        this.direktoriPegawaiService.putDirektoriPegawaisId({ id: this.id_pegawai, body: this.dataPegawai }).subscribe(function (data) {
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai]);
    };
    FotoComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_3__["SingleUploadService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    FotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foto',
            template: __webpack_require__(/*! raw-loader!./foto.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.html"),
            styles: [__webpack_require__(/*! ./foto.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/biodata/foto/foto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_3__["SingleUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], FotoComponent);
    return FotoComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/biodata-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile/biodata/biodata-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BiodataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiodataRoutingModule", function() { return BiodataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/biodata/detail/detail.component.ts");
/* harmony import */ var _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-biodata/edit-biodata.component */ "./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.ts");





var routes = [
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    },
    {
        path: 'edit-biodata',
        component: _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_4__["EditBiodataComponent"],
    },
    {
        path: 'pendidikan',
        loadChildren: function () { return Promise.all(/*! import() | pendidikan-pendidikan-module */[__webpack_require__.e("common"), __webpack_require__.e("pendidikan-pendidikan-module")]).then(__webpack_require__.bind(null, /*! ./pendidikan/pendidikan.module */ "./src/app/pages/profile/biodata/pendidikan/pendidikan.module.ts")).then(function (mo) { return mo.PendidikanModule; }); },
    },
    {
        path: 'keluarga',
        loadChildren: function () { return Promise.all(/*! import() | keluarga-keluarga-module */[__webpack_require__.e("common"), __webpack_require__.e("keluarga-keluarga-module")]).then(__webpack_require__.bind(null, /*! ./keluarga/keluarga.module */ "./src/app/pages/profile/biodata/keluarga/keluarga.module.ts")).then(function (mo) { return mo.KeluargaModule; }); },
    },
    {
        path: 'pengalaman',
        loadChildren: function () { return Promise.all(/*! import() | pengalaman-pengalaman-module */[__webpack_require__.e("common"), __webpack_require__.e("pengalaman-pengalaman-module")]).then(__webpack_require__.bind(null, /*! ./pengalaman/pengalaman.module */ "./src/app/pages/profile/biodata/pengalaman/pengalaman.module.ts")).then(function (mo) { return mo.PengalamanModule; }); },
    },
    {
        path: 'sertifikasi',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sertifikasi-sertifikasi-module */ "sertifikasi-sertifikasi-module").then(__webpack_require__.bind(null, /*! ./sertifikasi/sertifikasi.module */ "./src/app/pages/profile/biodata/sertifikasi/sertifikasi.module.ts")).then(function (mo) { return mo.SertifikasiModule; }); },
    },
];
var BiodataRoutingModule = /** @class */ (function () {
    function BiodataRoutingModule() {
    }
    BiodataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BiodataRoutingModule);
    return BiodataRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/biodata.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/biodata/biodata.module.ts ***!
  \*********************************************************/
/*! exports provided: BiodataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiodataModule", function() { return BiodataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _biodata_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biodata-routing.module */ "./src/app/pages/profile/biodata/biodata-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/biodata/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-biodata/edit-biodata.component */ "./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var BiodataModule = /** @class */ (function () {
    function BiodataModule() {
    }
    BiodataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
                _edit_biodata_edit_biodata_component__WEBPACK_IMPORTED_MODULE_8__["EditBiodataComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _biodata_routing_module__WEBPACK_IMPORTED_MODULE_3__["BiodataRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], BiodataModule);
    return BiodataModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/detail/detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/biodata/detail/detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/detail/detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/biodata/detail/detail.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");









var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiService, direktoriPegawaiBiodataService, direktoriPegawaiKeluargaService, direktoriPegawaiPendidikanService, direktoriPegawaiPengalamanService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.direktoriPegawaiBiodataService = direktoriPegawaiBiodataService;
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.direktoriPegawaiPendidikanService = direktoriPegawaiPendidikanService;
        this.direktoriPegawaiPengalamanService = direktoriPegawaiPengalamanService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.pegawai = {};
        this.biodata = {};
        this.pegawai_posisi = {};
        this.dataKeluarga = [];
        this.dataPendidikan = [];
        this.dataPengalaman = [];
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
        this.getKeluarga();
        this.getPendidikan();
        this.getPengalaman();
    };
    DetailComponent.prototype.getPegawai = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getBiodata(data.data.id_pegawai);
        });
    };
    DetailComponent.prototype.getBiodata = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiBiodataService
            .getDirektoriPegawaiBiodatasId(id_pegawai)
            .subscribe(function (res) {
            _this.biodata = res.data;
        });
    };
    //------------------------------------------------Keluarga------------------------------------------------------//
    DetailComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai }))
            .subscribe(function (res) {
            _this.dataKeluarga = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiKeluargaService
            .deleteDirektoriPegawaiKeluargasId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    //------------------------------------------------Pendidikan------------------------------------------------------//
    DetailComponent.prototype.getPendidikan = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService.getDirektoriPegawaiPendidikans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPendidikan = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.deletePendidikan = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPendidikanService
            .deleteDirektoriPegawaiPendidikansId(id)
            .subscribe(function (data) {
            _this.getPendidikan();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDeletePendidikan = function () {
        this.nzMessageService.info('click cancel');
    };
    //------------------------------------------------Pengalaman------------------------------------------------------//
    DetailComponent.prototype.getPengalaman = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPengalamanService.getDirektoriPegawaiPengalamen(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPengalaman = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.deletePengalaman = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiPengalamanService
            .deleteDirektoriPegawaiPengalamenId(id)
            .subscribe(function (data) {
            _this.getPengalaman();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.batalDeletePengalaman = function () {
        this.nzMessageService.info('click cancel');
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiBiodataService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiKeluargaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPengalamanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/biodata/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiBiodataService"],
            src_app_sdk_hr_services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_8__["DirektoriPegawaiKeluargaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPendidikanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["DirektoriPegawaiPengalamanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmlvZGF0YS9lZGl0LWJpb2RhdGEvZWRpdC1iaW9kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditBiodataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBiodataComponent", function() { return EditBiodataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");









var EditBiodataComponent = /** @class */ (function () {
    function EditBiodataComponent(direktoriPegawaiBiodataService, spinner, router, pesan, pegawaiDetailService, fb) {
        this.direktoriPegawaiBiodataService = direktoriPegawaiBiodataService;
        this.spinner = spinner;
        this.router = router;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.id_pegawai = '';
        this.pegawai_biodata = {};
    }
    EditBiodataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getBiodata();
    };
    EditBiodataComponent.prototype.getBiodata = function () {
        var _this = this;
        this.direktoriPegawaiBiodataService
            .getDirektoriPegawaiBiodatasId(this.id_pegawai)
            .subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditBiodataComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            id_pegawai_biodata: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            golongan_darah: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            no_telepon: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            alamat_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kota_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            provinsi_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            no_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tanggal_berakhir_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            alamat_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kode_pos_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kota_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prvinsi_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kode_pos_identitas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hp1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bentuk_tubuh: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bentuk_wajah: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            warna_kulit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            warna_rambut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            initial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tinggi_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            berat_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    EditBiodataComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form tidak valid');
            this.spinner.hide();
            return;
        }
        this.pegawai_biodata = this.dataForm.value;
        this.direktoriPegawaiBiodataService
            .putDirektoriPegawaiBiodatasId({ id: this.id_pegawai, body: this.pegawai_biodata })
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
    EditBiodataComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/biodata/detail']);
    };
    EditBiodataComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiBiodataService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"] }
    ]; };
    EditBiodataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-biodata',
            template: __webpack_require__(/*! raw-loader!./edit-biodata.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.html"),
            styles: [__webpack_require__(/*! ./edit-biodata.component.scss */ "./src/app/pages/profile/biodata/edit-biodata/edit-biodata.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiBiodataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"]])
    ], EditBiodataComponent);
    return EditBiodataComponent;
}());



/***/ })

}]);
//# sourceMappingURL=biodata-biodata-module.js.map