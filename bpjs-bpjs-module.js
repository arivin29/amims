(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bpjs-bpjs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Pengaturan BPJS</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"\">\r\n\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jkk?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jkk\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jkk?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jkk?.for_fild,pegawai.bpjs_jkk)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jkm?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jkm\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jkm?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jkm?.for_fild,pegawai.bpjs_jkm)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jht?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jht\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jht?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jht?.for_fild,pegawai.bpjs_jht)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jp?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jp\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jp?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jp?.for_fild,pegawai.bpjs_jp)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_kesehatan?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_kesehatan\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_kesehatan?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_kesehatan?.for_fild,pegawai.bpjs_kesehatan)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New BPJS {{jenis_bpjs}}</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"bpjs\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Policy Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" formControlName=\"nama_kebijakan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Covered by Employee</nz-form-label>\r\n                            <nz-input-group nzAddOnAfter=\"%\">\r\n                                <input type=\"number\" nz-input formControlName=\"pekerja\" />\r\n                            </nz-input-group>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Covered by Company</nz-form-label>\r\n                            <nz-input-group nzAddOnAfter=\"%\">\r\n                                <input type=\"number\" nz-input formControlName=\"perusahaan\" />\r\n                            </nz-input-group>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Basic Policy</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"dasar_premi\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option nzValue=\"gaji\" nzLabel=\"Gaji Pokok\"></nz-option>\r\n                                    <nz-option nzValue=\"komponen_payroll\" nzLabel=\"Komponen Payroll\"></nz-option>\r\n                                    <nz-option nzValue=\"umr\" nzLabel=\"UMR\"></nz-option>\r\n                                    <nz-option nzValue=\"jumlah_tertentu\" nzLabel=\"Jumlah Tertentu\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\" *ngIf=\"getValueForm('dasar_premi','jumlah_tertentu')\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Certain Amount</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input type=\"number\" nz-input formControlName=\"dasar_premi_value\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"24\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Description</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan_kebijakan\" [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Update BPJS {{jenis_bpjs}}</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"bpjs\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Policy Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" formControlName=\"nama_kebijakan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Covered by Employee</nz-form-label>\r\n                            <nz-input-group nzAddOnAfter=\"%\">\r\n                                <input type=\"number\" nz-input formControlName=\"pekerja\" />\r\n                            </nz-input-group>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Covered by Company</nz-form-label>\r\n                            <nz-input-group nzAddOnAfter=\"%\">\r\n                                <input type=\"number\" nz-input formControlName=\"perusahaan\" />\r\n                            </nz-input-group>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Basic Policy</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"dasar_premi\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option nzValue=\"gaji\" nzLabel=\"Gaji Pokok\"></nz-option>\r\n                                    <nz-option nzValue=\"komponen_payroll\" nzLabel=\"Komponen Payroll\"></nz-option>\r\n                                    <nz-option nzValue=\"umr\" nzLabel=\"UMR\"></nz-option>\r\n                                    <nz-option nzValue=\"jumlah_tertentu\" nzLabel=\"Jumlah Tertentu\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\" *ngIf=\"getValueForm('dasar_premi','jumlah_tertentu')\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Certain Amount</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input type=\"number\" nz-input formControlName=\"dasar_premi_value\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"24\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Description</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan_kebijakan\" [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">BPJS</h5>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\" *ngFor=\"let x of listBpjsJenis\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h5 class=\"mb-0\">{{x.bpjs_jenis}} -> {{x.keterangan_bpjs}}</h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" [routerLink]=\"['../add',x.bpjs_jenis]\" routerLinkActive=\"router-link-active\" routerLinkActive=\"router-link-active\">\r\n                        <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <nz-table #basicTable [nzData]=\"x.item\" [nzShowPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent\">Policy</th>\r\n                            <th class=\"bg-transparent\">Remarks</th>\r\n                            <th class=\"bg-transparent\">Company</th>\r\n                            <th class=\"bg-transparent\">Employee</th>\r\n                            <th class=\"bg-transparent\">Parameter</th>\r\n                            <th class=\"bg-transparent  text-right\">#</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable.data\">\r\n                            <td>{{data.nama_kebijakan}}</td>\r\n                            <td>{{data.keterangan_kebijakan}}</td>\r\n                            <td>{{data.perusahaan}}%</td>\r\n                            <td>{{data.pekerja}}%</td>\r\n                            <td>{{data.dasar_premi}} {{data.dasar_premi=='jumlah_tertentu' ? ( (data.dasar_premi_value*1) | currency: 'Rp'):''}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n                                    <i class=\"fe fe-more-vertical\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this this?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_bpjs_tk)\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                        </li>\r\n                                        <li nz-menu-divider></li>\r\n                                        <li nz-menu-item><a [routerLink]=\"['../edit',data.id_bpjs_tk]\" routerLinkActive=\"router-link-active\" href=\"javascript:;\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit</a></li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bpjs/list/list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bpjs/list/list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Pengaturan BPJS</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"\">\r\n\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jkk?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jkk\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jkk?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jkk?.for_fild,pegawai.bpjs_jkk)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jkm?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jkm\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jkm?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jkm?.for_fild,pegawai.bpjs_jkm)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jht?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jht\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jht?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jht?.for_fild,pegawai.bpjs_jht)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_jp?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_jp\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_jp?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_jp?.for_fild,pegawai.bpjs_jp)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- ## -->\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">{{bpjs?.bpjs_kesehatan?.bpjs_jenis}}</div>\r\n\r\n            <div class=\"card-header-flex\">\r\n\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <nz-select [(ngModel)]=\"pegawai.bpjs_kesehatan\" nzAllowClear nzplaceholder=\"please select\">\r\n                        <nz-option [nzValue]=\"null\" nzLabel=\"Tidak mengikuti\"></nz-option>\r\n                        <nz-option *ngFor=\"let x of bpjs?.bpjs_kesehatan?.item\" nzValue=\"{{x.id_bpjs_tk}}\" nzLabel=\"{{x.nama_kebijakan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary btn-sm\" (click)=\"update(bpjs?.bpjs_kesehatan?.for_fild,pegawai.bpjs_kesehatan)\">\r\n                        Update\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/bpjs-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/bpjs-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: BpjsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsRoutingModule", function() { return BpjsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var BpjsRoutingModule = /** @class */ (function () {
    function BpjsRoutingModule() {
    }
    BpjsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BpjsRoutingModule);
    return BpjsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/bpjs.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/bpjs.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BpjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsModule", function() { return BpjsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpjs-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/bpjs-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");








var BpjsModule = /** @class */ (function () {
    function BpjsModule() {
    }
    BpjsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__["BpjsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ]
        })
    ], BpjsModule);
    return BpjsModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-select {\n  margin-right: 8px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9icGpzL2xpc3QvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcaHJcXGRpcmVrdG9yaVxcZW1wbG95ZWVcXHBlZ2F3aS1kZXRhaWxcXHBheXJvbGxcXGJwanNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYnBqcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYnBqcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn0iLCJuei1zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");








var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollPegawaiBpjsService, spinner, router, direktoriPegawaiService, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiBpjsService = payrollPegawaiBpjsService;
        this.spinner = spinner;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.bpjs = {};
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPegawai();
        });
    };
    ListComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.spinner.hide();
            _this.getList('bpjs_jkk');
            _this.getList('bpjs_jkm');
            _this.getList('bpjs_jht');
            _this.getList('bpjs_jp');
            _this.getList('bpjs_kesehatan');
        });
    };
    ListComponent.prototype.getList = function (for_fild) {
        var _this = this;
        this.spinner.show();
        this.payrollPegawaiBpjsService.getPayrollPegawaiBpjs(JSON.stringify({ for_fild: for_fild })).subscribe(function (data) {
            _this.bpjs[for_fild] = data.data;
            _this.spinner.hide();
            console.log(_this.bpjs);
        });
    };
    ListComponent.prototype.update = function (for_fild, id_bpjs_tk) {
        var _this = this;
        var param = {
            id_bpjs_tk: id_bpjs_tk,
            id_pegawai: this.id_pegawai,
            jenis_bpjs: for_fild,
        };
        this.spinner.show();
        this.payrollPegawaiBpjsService.postPayrollPegawaiBpjs(param).subscribe(function (data) {
            _this.pesan.pesanBerhasilForm('Data berhasil di update');
            // this.getList()
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiBpjsService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bpjs/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiBpjsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvYXN1cmFuc2kvYnBqcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(fb, pesan, activatedRoute, payrollBpjsJenisService, payrollBpjsTkService, spinner, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollBpjsJenisService = payrollBpjsJenisService;
        this.payrollBpjsTkService = payrollBpjsTkService;
        this.spinner = spinner;
        this.router = router;
        this.jenis_bpjs = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('jenis_bpjs')) {
                _this.jenis_bpjs = data.get('jenis_bpjs');
                _this.form();
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.bpjs = this.fb.group({
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nama_kebijakan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_kebijakan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jenis_bpjs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.jenis_bpjs, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            pekerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            dasar_premi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('gaji'),
            dasar_premi_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    AddComponent.prototype.getValueForm = function (fild, compare) {
        if (this.bpjs.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.bpjs.invalid) {
            console.log(this.bpjs.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.payrollBpjsTkService.postPayrollBpjsTks(this.bpjs.value).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan, mohon cek Kode Komponen');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/asuransi/bpjs']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollBpjsJenisService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollBpjsTkService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollBpjsJenisService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollBpjsTkService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/bpjs-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/bpjs-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BpjsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsRoutingModule", function() { return BpjsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.ts");






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
        path: 'add/:jenis_bpjs',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_bpjs_tk',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var BpjsRoutingModule = /** @class */ (function () {
    function BpjsRoutingModule() {
    }
    BpjsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BpjsRoutingModule);
    return BpjsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/bpjs.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/bpjs.module.ts ***!
  \***************************************************************/
/*! exports provided: BpjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsModule", function() { return BpjsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpjs-routing.module */ "./src/app/pages/hr/payroll/asuransi/bpjs/bpjs-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.ts");










var BpjsModule = /** @class */ (function () {
    function BpjsModule() {
    }
    BpjsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__["BpjsRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"]
            ]
        })
    ], BpjsModule);
    return BpjsModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvYXN1cmFuc2kvYnBqcy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(fb, pesan, activatedRoute, payrollBpjsJenisService, payrollBpjsTkService, spinner, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollBpjsJenisService = payrollBpjsJenisService;
        this.payrollBpjsTkService = payrollBpjsTkService;
        this.spinner = spinner;
        this.router = router;
        this.jenis_bpjs = '';
        this.id_bpjs_tk = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_bpjs_tk')) {
                _this.id_bpjs_tk = data.get('id_bpjs_tk');
                _this.form();
                _this.getData();
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.payrollBpjsTkService.getPayrollBpjsTksId(this.id_bpjs_tk).subscribe(function (data) {
            _this.jenis_bpjs = data.data.jenis_bpjs;
            _this.bpjs.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.bpjs = this.fb.group({
            id_bpjs_tk: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nama_kebijakan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_kebijakan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jenis_bpjs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.jenis_bpjs, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('1'),
            pekerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            dasar_premi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('gaji'),
            dasar_premi_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    EditComponent.prototype.getValueForm = function (fild, compare) {
        if (this.bpjs.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.bpjs.invalid) {
            console.log(this.bpjs.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.payrollBpjsTkService.putPayrollBpjsTksId({ id: this.id_bpjs_tk, body: this.bpjs.value }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan, mohon cek Kode Komponen');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/asuransi/bpjs']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsJenisService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsTkService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/payroll/asuransi/bpjs/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsJenisService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsTkService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvYXN1cmFuc2kvYnBqcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services_payroll_bpjs_jenis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-bpjs-jenis.service */ "./src/app/sdk/payroll/services/payroll-bpjs-jenis.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollBpjsJenisService, payrollBpjsTkService, spinner, router) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollBpjsJenisService = payrollBpjsJenisService;
        this.payrollBpjsTkService = payrollBpjsTkService;
        this.spinner = spinner;
        this.router = router;
        this.listBpjsJenis = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollBpjsJenisService.getPayrollBpjsJenis().subscribe(function (data) {
            _this.listBpjsJenis = data.data;
            //cari anak anaknyo
            _this.listBpjsJenis.forEach(function (element, index) {
                _this.payrollBpjsTkService.getPayrollBpjsTks(JSON.stringify({ jenis_bpjs: element.bpjs_jenis })).subscribe(function (res) {
                    _this.listBpjsJenis[index]['item'] = res.data;
                });
            });
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.payrollBpjsTkService.deletePayrollBpjsTksId(id).subscribe(function (data) {
            _this.pesan.pesanBerhasilForm(data.message);
            _this.getList();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services_payroll_bpjs_jenis_service__WEBPACK_IMPORTED_MODULE_2__["PayrollBpjsJenisService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsTkService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/asuransi/bpjs/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_sdk_payroll_services_payroll_bpjs_jenis_service__WEBPACK_IMPORTED_MODULE_2__["PayrollBpjsJenisService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsTkService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bpjs/bpjs-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bpjs/bpjs-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BpjsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsRoutingModule", function() { return BpjsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bpjs/list/list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var BpjsRoutingModule = /** @class */ (function () {
    function BpjsRoutingModule() {
    }
    BpjsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BpjsRoutingModule);
    return BpjsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bpjs/bpjs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/payroll/bpjs/bpjs.module.ts ***!
  \***********************************************************/
/*! exports provided: BpjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsModule", function() { return BpjsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpjs-routing.module */ "./src/app/pages/profile/payroll/bpjs/bpjs-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bpjs/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");








var BpjsModule = /** @class */ (function () {
    function BpjsModule() {
    }
    BpjsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bpjs_routing_module__WEBPACK_IMPORTED_MODULE_3__["BpjsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ]
        })
    ], BpjsModule);
    return BpjsModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bpjs/list/list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bpjs/list/list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-select {\n  margin-right: 8px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL2JwanMvbGlzdC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwYXlyb2xsXFxicGpzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3BheXJvbGwvYnBqcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9icGpzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufSIsIm56LXNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICB3aWR0aDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bpjs/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bpjs/list/list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");








var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollPegawaiBpjsService, spinner, router, direktoriPegawaiService, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiBpjsService = payrollPegawaiBpjsService;
        this.spinner = spinner;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.bpjs = {};
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPegawai();
        });
    };
    ListComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
            _this.spinner.hide();
            _this.getList('bpjs_jkk');
            _this.getList('bpjs_jkm');
            _this.getList('bpjs_jht');
            _this.getList('bpjs_jp');
            _this.getList('bpjs_kesehatan');
        });
    };
    ListComponent.prototype.getList = function (for_fild) {
        var _this = this;
        this.spinner.show();
        this.payrollPegawaiBpjsService.getPayrollPegawaiBpjs(JSON.stringify({ for_fild: for_fild })).subscribe(function (data) {
            _this.bpjs[for_fild] = data.data;
            _this.spinner.hide();
            console.log(_this.bpjs);
        });
    };
    ListComponent.prototype.update = function (for_fild, id_bpjs_tk) {
        var _this = this;
        var param = {
            id_bpjs_tk: id_bpjs_tk,
            id_pegawai: this.id_pegawai,
            jenis_bpjs: for_fild,
        };
        this.spinner.show();
        this.payrollPegawaiBpjsService.postPayrollPegawaiBpjs(param).subscribe(function (data) {
            _this.pesan.pesanBerhasilForm('Data berhasil di update');
            // this.getList()
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiBpjsService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bpjs/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/bpjs/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiBpjsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bpjs-bpjs-module.js.map