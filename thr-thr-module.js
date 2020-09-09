(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thr-thr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option *ngIf=\"jumlah > 0\" nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"jumlah > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">THR Account</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                New Account\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataBankAccount\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Bank</th>\r\n                    <th>Account number</th>\r\n                    <th>Branch</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.nama_bank }}</td>\r\n                    <td>{{ data.no_rekening }}</td>\r\n                    <td>{{ data.cabang_bank}}</td>\r\n                    <td>{{ data.status_rekening}}</td>\r\n                    <td *ngIf=\"data.jumlah\">{{ data.jumlah | currency:'Rp.'}}</td>\r\n                    <td *ngIf=\"!data.jumlah\">Sisa</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_bank_account]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item *ngIf=\"data.jumlah\">\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_bank_account)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Basic</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>General</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>* (Multiply), / (Divide), - (Subtract) , + (Add)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Comparison</td>\r\n                    <td class=\"text-right\">\r\n                        <strong> > , < ,=</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Logic</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>if( x Comparison, True, False)</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Company Component</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Basic Salary [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>gapok</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>The value of the component itself [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>nilai</strong>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td>UMR [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>umr</strong>\r\n                    </td>\r\n                </tr> -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_lembuer_param\">\r\n                    <td>{{item.lembur_pengaturan}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode_lembur}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Attendance</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Late [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>telat</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Absent [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>alfa</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Present [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hadir</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Total Leave [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cuti</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Early [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cabut</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Prorate [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>prorate(ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Tax ? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_pajak (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Holiday? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_holiday (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>22 Working Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja22 (22)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Actual Working Day [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja_real</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Calendar Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kalender</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_cuti_param\">\r\n                    <td>{{item.nama_cuti}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Komponen THR</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\"\r\n            *ngFor=\"let item of listKomponen; let i = index\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <div>\r\n\r\n                    </div>\r\n                    <h5 class=\"mb-0\">\r\n                        [ <b>{{item.kode_komponen}}</b>] {{item.komponen}}\r\n                    </h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <div>\r\n                        <nz-switch nzSize=\"small\" [(ngModel)]=\"item.enable\"\r\n                            (ngModelChange)=\"gantiModeEnable(item.enable,item.id_komponen_perusahaan)\"></nz-switch>\r\n                        Enable\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"mb-3\">\r\n\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                                <tbody>\r\n                                    <!-- <tr>\r\n                                        <td>Metode komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.metode}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen payroll ini akan diberlakukan prorate</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.prorate}}</strong>\r\n                                        </td>\r\n                                    </tr> -->\r\n\r\n                                    <!-- <tr>\r\n                                    <td>apakah perhitungan nilai fix?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{item.is_nilai}}</strong>\r\n                                    </td>\r\n                                </tr> -->\r\n                                    <!-- <tr>\r\n                                        <td>Nilai</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.nilai | currency:'Rp '}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Rumus Perhitungan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.rumus}}</strong>\r\n                                        </td>\r\n                                    </tr> -->\r\n\r\n\r\n                                    <!-- <tr>\r\n                                        <td>Jenis komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.jenis}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen dikenakan pajak?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.is_pajak}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Keterangan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.keterangan_komponen}}</strong>\r\n                                        </td>\r\n                                    </tr> -->\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"item.enable\">\r\n                        <div class=\"col-md-6 mb-4\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">Default</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"!item.default\">\r\n                            <div class=\"bg-info text-white text-uppercase px-3 py-1 mb-2\">\r\n                                <a (click)=\"gantiModeDefault(true,item.item.id_thr_komponen)\" class=\"pointer-event\">\r\n                                    set to custom >>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.default\">\r\n                            <div class=\"bg-gray-1 text-gray-6  px-3 py-1 mb-2\">\r\n                                Custom\r\n                                <a style=\"float: right;\" (click)=\"updatePegawaiKomponen(i, item.item.id_thr_komponen)\"\r\n                                    class=\"pointer-event\">\r\n                                    update >\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"table-responsive\" *ngIf=\"!item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus_thr}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"table-responsive\" *ngIf=\"item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Enable Custom Formula</b>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-radio-group [(ngModel)]=\"item.item.is_default\">\r\n                                                    <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                                    <label nz-radio nzValue=\"tidak\">No</label>\r\n                                                </nz-radio-group>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td style=\"padding-top: 10px;\"> Rumus <i clas=\"text-right\"\r\n                                                    style=\"cursor: pointer; float: right;\" (click)=\"open()\">Info</i>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><textarea nz-input [disabled]=\"item.item.is_default=='tidak'\"\r\n                                                    [(ngModel)]=\"item.item.rumus_thr\"></textarea></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n\r\n                                                <button nz-button nzType=\"primary\"\r\n                                                    (click)=\"simpanPegawaiKomponen(item.item.id_thr_komponen,item.item)\"><i\r\n                                                        nz-icon nzType=\"upload\"></i>Update</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" [nzWidth]=\"520\" nzTitle=\"Basic Rumus\"\r\n    (nzOnClose)=\"close()\">\r\n    <app-edit></app-edit>\r\n</nz-drawer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">THR Period: {{periode | date: 'longDate'}} </h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                More\r\n                <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                <ul nz-menu nzSelectable>\r\n                    <li nz-menu-item>Download PDF*</li>\r\n                    <li nz-menu-item (click)=\"downloadReport()\">Download Excel</li>\r\n                    <li nz-menu-item>Resend Email*</li>\r\n                    <li nz-menu-item (click)=\"generatePayemnt()\" *ngIf=\"payment.close < 1\">Generate Payment</li>\r\n                    <li nz-menu-item (click)=\"downloadPayement()\" *ngIf=\"payment.close > 0 || payment.pending > 0\">\r\n                        Download Payment</li>\r\n                </ul>\r\n            </nz-dropdown-menu>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Empolye</th>\r\n                        <th>THR</th>\r\n                        <th>Tax</th>\r\n                        <th>Net Salary</th>\r\n                        <th>THR THP</th>\r\n                        <th nzWidth=\"60px\" nzRight=\"0px\">Action</th>\r\n                    </tr>\r\n\r\n                    <tr *ngFor=\"let data of rekap\">\r\n                        <th></th>\r\n                        <th>{{data.total_thr | number}}</th>\r\n                        <th>{{data.pajak | number}}</th>\r\n                        <th>{{data.bersih | number}}</th>\r\n                        <th>{{data.total | currency:'Rp'}}</th>\r\n                        <th nzWidth=\"60px\" nzRight=\"0px\">-</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let data of listData; let index=index;\">\r\n                        <td>\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"p-1\">\r\n                                    <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                        nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                                    </nz-avatar>\r\n                                    <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                                </div>\r\n                                <div class=\"mr-auto pl-2\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                        {{data.nama_pegawai}}\r\n\r\n                                        <br>\r\n                                        {{ data.no_induk }}\r\n\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                                    Componet Payroll</a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                                    Componet THR </a>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n\r\n                        <td>{{data.total_thr | number}}</td>\r\n                        <td>{{data.pajak | number}}</td>\r\n                        <td>{{data.bersih | currency:'Rp'}}</td>\r\n                        <td>{{data.total | currency:'Rp'}}</td>\r\n                        <td nzRight=\"0px\">\r\n                            <button title=\"Reload\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                (click)=\"resent(data.id_pegawai_payroll)\">\r\n                                <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>\r\n                            </button>\r\n                            <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                (click)=\"detailPerPegawai(data.id_pegawai_payroll)\">\r\n                                <i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/thr/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/thr/list/list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">THR Recapitulation </h5>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n\r\n        <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\"\r\n            [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n            (nzPageSizeChange)=\"searchData(true)\">\r\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"periode\">Period</th>\r\n                    <th nzShowSort nzSortKey=\"id_pegawai\">Recipients</th>\r\n                    <th nzShowSort nzSortKey=\"pajak\">Tax</th>\r\n                    <th nzShowSort nzSortKey=\"bersih\">Net Salary</th>\r\n                    <th nzShowSort nzSortKey=\"total\">Total THP</th>\r\n                    <th>#</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of ajaxTable.data\">\r\n\r\n                    <td>\r\n                        <nz-tag style=\"float: left;\" [nzColor]=\"data.status | status\">\r\n                            {{ data.status | titlecase }}\r\n                        </nz-tag>\r\n                    </td>\r\n                    <td>{{ data.periode }} </td>\r\n                    <td>{{ data.id_pegawai }} Recipients</td>\r\n                    <td>{{ data.pajak | currency:'Rp,' }}</td>\r\n                    <td>{{ data.bersih | currency:'Rp,' }}</td>\r\n                    <td>{{ data.total | currency:'Rp,' }}</td>\r\n                    <td>\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item>\r\n                                    <a [routerLink]=\"['../detail',data.periode]\">Detail</a>\r\n                                </li>\r\n                                <li nz-menu-item>Download</li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"!is_confirm\">Are you sure you want to complete this task?</h5>\r\n\r\n<button *ngIf=\"!is_confirm\" nz-button (click)=\"confirm()\" nzType=\"primary\" [nzSize]=\"'large'\" nzShape=\"round\">\r\n      <i nz-icon nzType=\"download\"></i>Confirm\r\n    </button>\r\n\r\n<h5 *ngIf=\"is_confirm\">THR calculation has been saved, follow the next step \"Click the Done button\"</h5>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap(true)\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"card\" *ngFor=\"let item of listData\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-nowrap align-items-start pt-4\">\r\n\r\n                <div class=\"flex-grow-1\">\r\n                    <div class=\"border-bottom\">\r\n                        <div class=\"d-flex flex-wrap mb-2\">\r\n                            <div class=\"mr-auto\">\r\n                                <div class=\"text-gray-6\">\r\n                                    <span class=\"text-dark font-weight-bold\">{{item.nama_pegawai}}</span>\r\n                                </div>\r\n                                <div>{{item.no_induk}}</div>\r\n                            </div>\r\n                            <div class=\"nav-item dropdown\">\r\n                                <a href=\"javascript:;\" class=\"nav-link dropdown-toggle pt-sm-0\" nz-dropdown\r\n                                    [nzDropdownMenu]=\"menu\" nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n                                    Actions\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu>\r\n                                        <li nz-menu-item>\r\n                                            <a\r\n                                                [routerLink]=\"['/hr/direktori','employee','pegawai-detail',item.id_pegawai,'payroll','thr','list']\">Update\r\n                                                Component</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n\r\n                            <div>\r\n\r\n                                <nz-table #colSpanTable [nzData]=\"item.item\" nzBordered>\r\n                                    <thead>\r\n\r\n                                        <tr>\r\n                                            <th>No</th>\r\n                                            <th>Code</th>\r\n                                            <th>Component</th>\r\n\r\n                                            <th>Formula</th>\r\n                                            <th>Type</th>\r\n                                            <th>Tax</th>\r\n                                            <th>Total</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let x of colSpanTable.data; let i=index;\">\r\n                                            <td>{{i+1}}</td>\r\n                                            <td>{{x.kode_komponen}}</td>\r\n                                            <td>{{x.nama_komponen}}</td>\r\n\r\n                                            <td class=\"text-right\">\r\n                                                <i>{{x.rumus}}</i>\r\n                                            </td>\r\n\r\n                                            <td class=\"text-right\">\r\n                                                <i>{{x.jenis}}</i>\r\n                                            </td>\r\n                                            <td class=\"text-right\">\r\n                                                <i>{{x.is_pajak == 'ya' ? 'Yes': 'No'}}</i>\r\n                                            </td>\r\n                                            <td class=\"text-right\">\r\n                                                <strong>{{x.nilai_akhir | currency:'Rp.'}}</strong>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </nz-table>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap()\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n    <br />\r\n    <br />\r\n\r\n    <div>\r\n        <table class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"200px\" nzLeft=\"0px\">Employe</th>\r\n                    <th width=\"100px\">Index</th>\r\n                    <th width=\"150px\">Allowance(Tunjangan)</th>\r\n                    <th width=\"150px\">Deduction(Potongan)</th>\r\n                    <!-- <th width=\"150px\">Gross Salary(Kotor)</th> -->\r\n                    <th width=\"150px\">Tax</th>\r\n                    <th width=\"150px\">THR THP</th>\r\n                    <th width=\"60px\" nzRight=\"0px\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of listData; let index=index;\">\r\n                    <td>\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"p-1\">\r\n                                <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                    nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                                </nz-avatar>\r\n                                <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                            </div>\r\n                            <div class=\"mr-auto pl-2\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                    {{data.nama_pegawai}}\r\n\r\n                                    <br>\r\n                                    {{ data.no_induk }}\r\n\r\n                                </a>\r\n                                <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n\r\n                                        <li nz-menu-item\r\n                                            [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                            Componet Payroll\r\n                                        </li>\r\n                                        <li nz-menu-item\r\n                                            [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                            Componet THR\r\n                                        </li>\r\n\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                    <td>{{index}} </td>\r\n                    <td>{{data.tunjangan | number}}</td>\r\n                    <td>{{data.potongan | number}}</td>\r\n                    <!-- <td>{{data.kotor | number}}</td> -->\r\n                    <td>{{data.pajak | number}}</td>\r\n                    <td>{{data.bersih | number}}</td>\r\n                    <td nzRight=\"0px\">\r\n                        <button title=\"Reload\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                            (click)=\"prosessRekapOneByOne(data.id_pegawai_thr)\">\r\n                            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>\r\n                        </button>\r\n                        <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                            (click)=\"viewDetail(data.id_pegawai_thr)\">\r\n                            <i nz-icon nzType=\"monitor\" nzTheme=\"outline\"></i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n\r\n    <nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" nzTitle=\"Detail Payroll\"\r\n        (nzOnClose)=\"close()\" [nzWidth]=\"720\">\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n    </nz-drawer>\r\n\r\n\r\n    <!-- <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"\">\r\n\r\n                <nz-table #virtualTable2 [nzData]=\"listData\" nzBordered nzVirtualScroll [nzVirtualItemSize]=\"54\"\r\n                    [nzData]=\"listOfData\" [nzVirtualForTrackBy]=\"trackByIndex\" [nzFrontPagination]=\"false\"\r\n                    [nzShowPagination]=\"false\" [nzScroll]=\"{ x: '600px', y: '240px' }\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th width=\"50px\" nzLeft=\"0px\">No</th>\r\n                            <th width=\"100px\" nzLeft=\"200px\">NIK</th>\r\n                            <th width=\"100px\">Nama</th>\r\n                            <th width=\"100px\">gapok</th>\r\n                            <th width=\"100px\">tunjangan</th>\r\n                            <th width=\"100px\">potongan</th>\r\n                            <th width=\"100px\">kotor</th>\r\n                            <th width=\"100px\">pajak</th>\r\n                            <th width=\"100px\">bersih</th>\r\n                            <th width=\"100px\">tunjangan_thp</th>\r\n                            <th width=\"100px\">potongan_thp</th>\r\n                            <th width=\"100px\">Utang</th>\r\n                            <th width=\"100px\">THP</th>\r\n                            <th width=\"50px\" nzRight=\"0px\">#</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-template nz-virtual-scroll let-data let-index=\"index\">\r\n                            <tr>\r\n\r\n                                <td width=\"50px\" nzLeft=\"0px\">{{index+1}}</td>\r\n                                <td width=\"100px\" nzLeft=\"200px\">{{data.no_induk}}</td>\r\n                                <td width=\"100px\">{{data.nama_pegawai}} </td>\r\n                                <td width=\"100px\">{{data.gapok | number}}</td>\r\n                                <td width=\"100px\">{{data.tunjangan | number}}</td>\r\n                                <td width=\"100px\">{{data.potongan | number}}</td>\r\n                                <td width=\"100px\">{{data.kotor | number}}</td>\r\n                                <td width=\"100px\">{{data.pajak | number}}</td>\r\n                                <td width=\"100px\">{{data.bersih | number}}</td>\r\n                                <td width=\"100px\">{{data.tunjangan_thp | number}}</td>\r\n                                <td width=\"100px\">{{data.potongan_thp | number}}</td>\r\n                                <td width=\"100px\">{{data.utang | currency:'Rp'}}</td>\r\n                                <td width=\"100px\">{{data.pembulatan | currency:'Rp'}}</td>\r\n                                <td width=\"50\" nzRight=\"0px\">\r\n                                    <button title=\"Reload\" nz-button bu [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                        (click)=\"prosessRekapOneByOne(data.id_pegawai_thr)\">\r\n                                        <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>\r\n                                    </button>\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </ng-template>\r\n                    </tbody>\r\n                </nz-table>\r\n\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-steps [nzCurrent]=\"current\">\r\n    <nz-step nzTitle=\"THR Period\"></nz-step>\r\n    <nz-step nzTitle=\"Component\"></nz-step>\r\n    <nz-step nzTitle=\"Finishing\"></nz-step>\r\n</nz-steps>\r\n\r\n<div class=\"steps-content\">\r\n\r\n    <div *ngIf=\"current==0\">\r\n        <nz-form-label>Select Period (THR)</nz-form-label>\r\n        <nz-month-picker [nzFormat]=\"'MMMM-yyyy'\" [(ngModel)]=\"periode\" (ngModelChange)=\"ngModelChange()\"></nz-month-picker>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"current==1\">\r\n        <app-tahap-komponen></app-tahap-komponen>\r\n    </div>\r\n\r\n    <div *ngIf=\"current==2\">\r\n        <app-tahap-review></app-tahap-review>\r\n    </div>\r\n    <div *ngIf=\"current==3\">\r\n        <app-tahap-confirm></app-tahap-confirm>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"steps-action\">\r\n    <button nz-button nzType=\"default\" (click)=\"pre()\" *ngIf=\"current > 0\">\r\n        <span>Previous</span>\r\n    </button>\r\n    <button nz-button nzType=\"default\" (click)=\"next()\" *ngIf=\"current < 3\">\r\n        <span>Next</span>\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"done()\" *ngIf=\"current === 3\">\r\n        <span>Done</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/add/add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/thr/add/add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/thr/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option *ngIf=\"jumlah > 0\" nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"jumlah > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/thr/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">THR Account</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                New Account\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataBankAccount\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Bank</th>\r\n                    <th>Account number</th>\r\n                    <th>Branch</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.nama_bank }}</td>\r\n                    <td>{{ data.no_rekening }}</td>\r\n                    <td>{{ data.cabang_bank}}</td>\r\n                    <td>{{ data.status_rekening}}</td>\r\n                    <td *ngIf=\"data.jumlah\">{{ data.jumlah | currency:'Rp.'}}</td>\r\n                    <td *ngIf=\"!data.jumlah\">Sisa</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_bank_account]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item *ngIf=\"data.jumlah\">\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_bank_account)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/thr/edit/edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/thr/edit/edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/thr/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/thr/list/list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Komponen Peraturan Perusahaan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\" *ngFor=\"let item of listKomponen; let i = index\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <div>\r\n\r\n                    </div>\r\n                    <h5 class=\"mb-0\">\r\n                        [ <b>{{item.kode_komponen}}</b>] {{item.komponen}}\r\n                    </h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <div>\r\n                        <nz-switch nzSize=\"small\" [(ngModel)]=\"item.enable\" (ngModelChange)=\"gantiModeEnable(item.enable,item.id_komponen_perusahaan)\"></nz-switch>\r\n                        Enable\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"mb-3\">\r\n\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Metode komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.metode}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen payroll ini akan diberlakukan prorate</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.prorate}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- <tr>\r\n                                    <td>apakah perhitungan nilai fix?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{item.is_nilai}}</strong>\r\n                                    </td>\r\n                                </tr> -->\r\n                                    <!-- <tr>\r\n                                        <td>Nilai</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.nilai | currency:'Rp '}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Rumus Perhitungan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.rumus}}</strong>\r\n                                        </td>\r\n                                    </tr> -->\r\n                                    <tr>\r\n                                        <td>Jenis komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.jenis}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen dikenakan pajak?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.is_pajak}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Keterangan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.keterangan_komponen}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"item.enable\">\r\n                        <div class=\"col-md-6 mb-4\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">Default</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"!item.default\">\r\n                            <div class=\"bg-info text-white text-uppercase px-3 py-1 mb-2\">\r\n                                <a (click)=\"gantiModeDefault(true,item.item.id_thr_komponen)\" class=\"pointer-event\">\r\n                                    set to custom >>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.default\">\r\n                            <div class=\"bg-gray-1 text-gray-6  px-3 py-1 mb-2\">\r\n                                Custom\r\n                                <a style=\"float: right;\" (click)=\"updatePegawaiKomponen(i, item.item.id_thr_komponen)\" class=\"pointer-event\">\r\n                                    update >\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"table-responsive\" *ngIf=\"!item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus_thr}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"table-responsive\" *ngIf=\"item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Enable Custom Formula</b>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-radio-group [(ngModel)]=\"item.item.is_default\">\r\n                                                    <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                                    <label nz-radio nzValue=\"tidak\">No</label>\r\n                                                </nz-radio-group>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td style=\"padding-top: 10px;\"> Rumus <i clas=\"text-right\" style=\"cursor: pointer; float: right;\" (click)=\"open()\">Info</i>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><textarea nz-input [disabled]=\"item.item.is_default=='tidak'\" [(ngModel)]=\"item.item.rumus_thr\"></textarea></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n\r\n                                                <button nz-button nzType=\"primary\" (click)=\"simpanPegawaiKomponen(item.item.id_thr_komponen,item.item)\"><i\r\n                                                        nz-icon nzType=\"upload\"></i>Update</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" [nzWidth]=\"520\" nzTitle=\"Basic Rumus\" (nzOnClose)=\"close()\">\r\n    <app-edit></app-edit>\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay90aHIvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(payrollBankAccountService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.dataBankAccount_cek = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getBankAccount();
    };
    AddComponent.prototype.getBankAccount = function () {
        var _this = this;
        var param = {
            id_pegawai: this.id_pegawai,
            untuk: 'payroll'
        };
        this.payrollBankAccountService.getPayrollBankAccounts(JSON.stringify(param)).subscribe(function (data) {
            _this.dataBankAccount_cek = data.data;
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            cabang_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('thr'),
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
        });
    };
    AddComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBankAccount = this.dataForm.value;
        this.payrollBankAccountService
            .postPayrollBankAccounts(this.dataBankAccount)
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'bank', 'list', 'thr', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
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

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay90aHIvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(payrollBankAccountService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_bank_account = '';
        this.jumlah = 0;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.id_bank_account = this.activatedRoute.snapshot.paramMap.get('id_bank_account');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.payrollBankAccountService.getPayrollBankAccountsId(this.id_bank_account).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.jumlah = data.data.jumlah;
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_bank_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            cabang_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('thr'),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBankAccount = this.dataForm.value;
        this.payrollBankAccountService
            .putPayrollBankAccountsId({ id: this.id_bank_account, body: this.dataBankAccount })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'bank', 'list', 'thr', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay90aHIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(payrollBankAccountService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataBankAccount = [];
        this.untuk = 'thr';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getBankAccount();
    };
    ListComponent.prototype.getBankAccount = function () {
        var _this = this;
        var param = {
            id_pegawai: this.id_pegawai,
            untuk: this.untuk
        };
        this.payrollBankAccountService.getPayrollBankAccounts(JSON.stringify(param)).subscribe(function (data) {
            _this.dataBankAccount = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollBankAccountService
            .deletePayrollBankAccountsId(id)
            .subscribe(function (data) {
            _this.getBankAccount();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.ts");






var routes = [
    {
        path: 'edit/:id_bank_account',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
    },
];
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/thr-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/thr/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC90aHIvZWRpdC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxoclxcZGlyZWt0b3JpXFxlbXBsb3llZVxccGVnYXdpLWRldGFpbFxccGF5cm9sbFxcdGhyXFxlZGl0XFxlZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9kaXJla3RvcmkvZW1wbG95ZWUvcGVnYXdpLWRldGFpbC9wYXlyb2xsL3Roci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC90aHIvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcbiIsIi50YWJsZSB0ZCxcbi50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");



var EditComponent = /** @class */ (function () {
    function EditComponent(kalenderLemburPengaturanService, kalenderCutiPengaturanService) {
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.list_lembuer_param = [];
        this.list_cuti_param = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getParamaterLembur();
        this.getParamaterCuti();
    };
    EditComponent.prototype.getParamaterLembur = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.list_lembuer_param = data.data;
        });
    };
    EditComponent.prototype.getParamaterCuti = function () {
        var _this = this;
        this.kalenderCutiPengaturanService.getKalenderCutiPengaturans().subscribe(function (data) {
            _this.list_cuti_param = data.data;
        });
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC90aHIvbGlzdC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxoclxcZGlyZWt0b3JpXFxlbXBsb3llZVxccGVnYXdpLWRldGFpbFxccGF5cm9sbFxcdGhyXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9kaXJla3RvcmkvZW1wbG95ZWUvcGVnYXdpLWRldGFpbC9wYXlyb2xsL3Roci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC90aHIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiIsIi50YWJsZSB0ZCxcbi50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollThrKomponenService, spinner, router, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollThrKomponenService = payrollThrKomponenService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.listKomponen = [];
        this.pegawai_komponen = {};
        //DRAWER
        this.visible = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getList();
        });
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollThrKomponenService.getPayrollThrKomponens(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKomponen = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeEnable = function (status, id_komponen_perusahaan) {
        var _this = this;
        console.log(status);
        this.spinner.show();
        this.payrollThrKomponenService.postPayrollThrKomponens({
            is_enable: status,
            id_pegawai: this.id_pegawai,
            id_komponen_perusahaan: id_komponen_perusahaan
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeDefault = function (is_default, id_pegawai_komponen) {
        var _this = this;
        console.log(is_default);
        this.spinner.show();
        this.payrollThrKomponenService.postPayrollThrKomponens({
            is_default: is_default,
            id_pegawai: this.id_pegawai,
            id_thr_komponen: id_pegawai_komponen
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.updatePegawaiKomponen = function (index, id_pegawai_komponen) {
        var _this = this;
        this.listKomponen.forEach(function (element, i) {
            _this.listKomponen[i].on_editable = false;
        });
        this.spinner.show();
        this.payrollThrKomponenService.getPayrollThrKomponensId(id_pegawai_komponen).subscribe(function (data) {
            _this.pegawai_komponen = data.data;
            _this.listKomponen[index].on_editable = true;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.simpanPegawaiKomponen = function (id_pegawai_komponen, param) {
        var _this = this;
        if (param.rumus_thr == '' || param.rumus_thr == null) {
            if (param.is_default == 'ya') {
                this.pesan.pesanWarningForm('rumus tidak boleh kosong');
                return false;
            }
        }
        this.spinner.show();
        this.payrollThrKomponenService.putPayrollThrKomponensId({ id: id_pegawai_komponen, body: param }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
            _this.pesan.pesanBerhasilForm('Berhasil di perbarui');
        });
    };
    ListComponent.prototype.open = function () {
        this.visible = true;
    };
    ListComponent.prototype.close = function () {
        this.visible = false;
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollThrKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollThrKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/thr-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/thr-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.ts");




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
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/thr.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/thr.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/thr-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/thr/edit/edit.component.ts");









var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90aHIvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _shared_detail_payroll_detail_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/detail-payroll/detail-payroll.component */ "./src/app/pages/hr/payroll/shared/detail-payroll/detail-payroll.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);










var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var DetailComponent = /** @class */ (function () {
    function DetailComponent(spinner, activatedRoute, payrollPegawaiThrService, payrollBankOutService, pesan, notification, drawerService) {
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiThrService = payrollPegawaiThrService;
        this.payrollBankOutService = payrollBankOutService;
        this.pesan = pesan;
        this.notification = notification;
        this.drawerService = drawerService;
        this.listData = [];
        this.rekap = [];
        this.payment = {};
        this.listDwnloadPayment = [];
        // PREVIEW
        this.id_pegawai_payroll = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('periode')) {
                _this.periode = new Date(data.get('periode'));
                _this.getRekap();
            }
        });
    };
    DetailComponent.prototype.getRekap = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode,
        };
        this.payrollPegawaiThrService.getPayrollPegawaiThrs(JSON.stringify(param)).subscribe(function (data) {
            var datas = data.data;
            _this.listData = datas.list;
            _this.rekap = datas.rekap;
            _this.payment = datas.payment[0];
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.generatePayemnt = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode,
            perintah: 'generate',
            module: 'payroll'
        };
        this.payrollBankOutService.postPayrollBankOuts(param).subscribe(function (data) {
            _this.getRekap();
            _this.spinner.hide();
            _this.pesan.pesanBerhasilForm('payment berhasil di generate');
        });
    };
    DetailComponent.prototype.downloadReport = function () {
        //download / export ke excl
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.listData);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'Report ');
    };
    DetailComponent.prototype.downloadPayement = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode,
            module: 'payroll'
        };
        this.payrollBankOutService.getPayrollBankOuts(JSON.stringify(param)).subscribe(function (data) {
            _this.listDwnloadPayment = [];
            var payroll = _this.listData;
            var bank_out = data.data['out'];
            var nama_bank = data.data['nama_bank'];
            payroll.forEach(function (element, index) {
                _this.listDwnloadPayment.push(element);
                nama_bank.forEach(function (bank, index_bank) {
                    _this.listDwnloadPayment[index][bank.nama_bank] = 0;
                    _this.listDwnloadPayment[index][bank.nama_bank + '_rekening'] = '';
                });
                var share = 0;
                var terpakai = null;
                var cek = bank_out.filter(function (kom, i) {
                    if (kom.id_pegawai == element.id_pegawai) {
                        // bank_out[i]['share'] = bank_out[i].dari_nilai_total > share ? (bank_out[i].jumlah == null ? (bank_out[i].dari_nilai_total - share) : bank_out[i].jumlah) : 0;
                        // share = share + bank_out[i]['share'];
                        //jadiian kakiri
                        nama_bank.forEach(function (bank, index_bank) {
                            if (kom.nama_bank == bank.nama_bank) {
                                _this.listDwnloadPayment[index][bank.nama_bank] = bank_out[i]['jumlah_transfer'];
                                _this.listDwnloadPayment[index][bank.nama_bank + '_rekening'] = bank_out[i].no_rekening;
                            }
                        });
                        return true;
                    }
                    else {
                        share = 0;
                    }
                });
                // this.listDwnloadPayment[index]['item'] = cek;
            });
            //download / export ke excl
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(_this.listDwnloadPayment);
            var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, 'bank');
            _this.spinner.hide();
            console.log(_this.listDwnloadPayment);
        });
    };
    DetailComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](data, fileName + '_export_' + new Date().getTime() + '.xlsx');
    };
    DetailComponent.prototype.detailPerPegawai = function (id_pegawai_payroll) {
        this.id_pegawai_payroll = id_pegawai_payroll;
        this.openComponent();
    };
    DetailComponent.prototype.openComponent = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Detail Payroll',
            nzContent: _shared_detail_payroll_detail_payroll_component__WEBPACK_IMPORTED_MODULE_7__["DetailPayrollComponent"],
            nzWidth: '800px',
            nzContentParams: {
                value: this.id_pegawai_payroll
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.id_pegawai_payroll = data;
            }
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPegawaiThrService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBankOutService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPegawaiThrService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBankOutService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/list/list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/list/list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90aHIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/list/list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/list/list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services_payroll_report_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-report-pegawai-thr.service */ "./src/app/sdk/payroll/services/payroll-report-pegawai-thr.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(payrollReportPegawaiThrService, nzMessageService, spinner) {
        this.payrollReportPegawaiThrService = payrollReportPegawaiThrService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.payrollReportPegawaiThrService
            .getPayrollReportPegawaiThrs(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services_payroll_report_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_2__["PayrollReportPegawaiThrService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/thr/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/laporan/thr/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services_payroll_report_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_2__["PayrollReportPegawaiThrService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/thr-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/thr-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/thr/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.ts");





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
        path: 'detail/:periode',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
    }
];
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/thr/thr.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/thr/thr.module.ts ***!
  \************************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/hr/payroll/laporan/thr/thr-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/thr/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/thr/detail/detail.component.ts");










var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL3Roci90YWhhcC1jb25maXJtL3RhaGFwLWNvbmZpcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TahapConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapConfirmComponent", function() { return TahapConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/thr/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapConfirmComponent = /** @class */ (function () {
    function TahapConfirmComponent(tahapService, spinner, payrollPegawaiThrService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPegawaiThrService = payrollPegawaiThrService;
        this.pesan = pesan;
        this.notification = notification;
        this.periode = new Date();
        this.is_confirm = false;
    }
    TahapConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.getPeriode().subscribe(function (data) {
            if (data) {
                _this.periode = data;
            }
        });
        this.tahapService.next.next(false);
    };
    TahapConfirmComponent.prototype.confirm = function () {
        var _this = this;
        var param = {
            periode: this.periode,
            confirm: true
        };
        this.payrollPegawaiThrService.putPayrollPegawaiThrsId({ id: '000', body: param }).subscribe(function (data) {
            _this.spinner.hide();
            _this.is_confirm = true;
            _this.tahapService.next.next(true);
        });
    };
    TahapConfirmComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiThrService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-confirm',
            template: __webpack_require__(/*! raw-loader!./tahap-confirm.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.html"),
            styles: [__webpack_require__(/*! ./tahap-confirm.component.scss */ "./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiThrService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapConfirmComponent);
    return TahapConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL3Roci90YWhhcC1rb21wb25lbi90YWhhcC1rb21wb25lbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TahapKomponenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapKomponenComponent", function() { return TahapKomponenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/thr/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapKomponenComponent = /** @class */ (function () {
    function TahapKomponenComponent(tahapService, spinner, payrollTemplateKomponenService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollTemplateKomponenService = payrollTemplateKomponenService;
        this.pesan = pesan;
        this.notification = notification;
        this.listData = [];
        this.listDataKomponen = [];
        this.cek_status = true;
        this.listProsess = [];
    }
    TahapKomponenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.getPeriode().subscribe(function (data) {
            if (data) {
                _this.periode = data;
                _this.getRekap();
            }
        });
        this.tahapService.next.next(false);
    };
    TahapKomponenComponent.prototype.getRekap = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        this.cek_status = true;
        var param = {
            periode: this.periode,
            for_module: 'thr',
            reload: reload
        };
        this.payrollTemplateKomponenService.postPayrollTemplateKomponens(param).subscribe(function (data) {
            var datas = data.data['pegawai'];
            _this.listDataKomponen = data.data['komponen'];
            var komponens = data.data['komponen'];
            datas.forEach(function (item, index) {
                var id_pegawai = item.id_pegawai;
                var cek = komponens.filter(function (kom) {
                    if (kom.id_pegawai == id_pegawai) {
                        return true;
                    }
                    if (kom.nilai_akhir == null && kom.id_template != null) {
                        _this.cek_status = false;
                    }
                });
                datas[index]['item'] = cek;
                if (cek.length > 0) {
                    datas[index]['no_induk'] = cek[0].no_induk;
                }
            });
            _this.listData = datas;
            _this.spinner.hide();
            console.log(_this.cek_status);
            if (!_this.cek_status) {
                _this.tahapService.next.next(false);
            }
            else {
                _this.tahapService.next.next(true);
            }
        });
    };
    TahapKomponenComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.spinner.show();
        this.listDataKomponen.forEach(function (element) {
            if (element.id_template) {
                _this.prosessRekapOneByOne(element.id_template, element.id_pegawai, true);
            }
            else {
                _this.listProsess.push(1);
            }
        });
    };
    TahapKomponenComponent.prototype.prosessRekapOneByOne = function (id_template, id_pegawai, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            for_module: 'thr',
            id_pegawai: id_pegawai,
        };
        this.payrollTemplateKomponenService.putPayrollTemplateKomponensId({ id: id_template, body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                console.log('xx' + _this.listDataKomponen);
                if (_this.listProsess.length == _this.listDataKomponen.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.listDataKomponen.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapKomponenComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollTemplateKomponenService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapKomponenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-komponen',
            template: __webpack_require__(/*! raw-loader!./tahap-komponen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.html"),
            styles: [__webpack_require__(/*! ./tahap-komponen.component.scss */ "./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollTemplateKomponenService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapKomponenComponent);
    return TahapKomponenComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL3Roci90YWhhcC1yZXZpZXcvdGFoYXAtcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.ts ***!
  \************************************************************************************/
/*! exports provided: TahapReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapReviewComponent", function() { return TahapReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/thr/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var TahapReviewComponent = /** @class */ (function () {
    // listOfData: VirtualDataInterface[] = [];
    function TahapReviewComponent(tahapService, spinner, payrollPegawaiThrService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPegawaiThrService = payrollPegawaiThrService;
        this.pesan = pesan;
        this.notification = notification;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.listData = [];
        this.rekap = [];
        this.cek_status = true;
        this.listProsess = [];
        this.visible = false;
    }
    TahapReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.getPeriode().subscribe(function (data) {
            if (data) {
                _this.periode = data;
                _this.getRekap();
            }
        });
        this.tahapService.next.next(false);
    };
    TahapReviewComponent.prototype.getRekap = function () {
        var _this = this;
        this.cek_status = true;
        this.spinner.show();
        var param = {
            periode: this.periode,
        };
        this.payrollPegawaiThrService.getPayrollPegawaiThrs(JSON.stringify(param)).subscribe(function (data) {
            var datas = data.data;
            _this.listData = datas.list;
            _this.rekap = datas.rekap;
            _this.spinner.hide();
            _this.listData.forEach(function (item) {
                if (item.bersih == null) {
                    _this.cek_status = false;
                }
            });
            console.log(_this.cek_status);
            if (!_this.cek_status) {
                _this.tahapService.next.next(false);
            }
            else {
                _this.tahapService.next.next(true);
            }
        });
    };
    TahapReviewComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.spinner.show();
        this.listData.forEach(function (element) {
            _this.prosessRekapOneByOne(element.id_pegawai_thr, true);
        });
    };
    TahapReviewComponent.prototype.prosessRekapOneByOne = function (id_pegawai_thr, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            id_pegawai_thr: id_pegawai_thr,
        };
        this.spinner.show();
        this.payrollPegawaiThrService.putPayrollPegawaiThrsId({ id: id_pegawai_thr, body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                console.log('xx' + _this.listData);
                if (_this.listProsess.length == _this.listData.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.listData.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapReviewComponent.prototype.viewDetail = function (id_pegawai_thr) {
        this.visible = true;
    };
    TahapReviewComponent.prototype.close = function () {
        this.visible = false;
    };
    TahapReviewComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiThrService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('virtualTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzTableComponent"])
    ], TahapReviewComponent.prototype, "nzTableComponent", void 0);
    TahapReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-review',
            template: __webpack_require__(/*! raw-loader!./tahap-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.html"),
            styles: [__webpack_require__(/*! ./tahap-review.component.scss */ "./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiThrService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapReviewComponent);
    return TahapReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap.service.ts ***!
  \**************************************************************/
/*! exports provided: TahapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapService", function() { return TahapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TahapService = /** @class */ (function () {
    function TahapService() {
        this.periode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.next = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    TahapService.prototype.getPeriode = function () {
        return this.periode.asObservable();
    };
    TahapService.prototype.getNext = function () {
        return this.next.asObservable();
    };
    TahapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TahapService);
    return TahapService;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}\n\nbutton {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wcm9zZXMvdGhyL3RhaGFwL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxwYXlyb2xsXFxwcm9zZXNcXHRoclxcdGFoYXBcXHRhaGFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3Byb3Nlcy90aHIvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3Byb3Nlcy90aHIvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iLCIuc3RlcHMtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3RlcHMtYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.ts ***!
  \**********************************************************************/
/*! exports provided: TahapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapComponent", function() { return TahapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/thr/tahap.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");







var TahapComponent = /** @class */ (function () {
    function TahapComponent(tahapService, payrollPegawaiThrService, router, pesan, spinner) {
        this.tahapService = tahapService;
        this.payrollPegawaiThrService = payrollPegawaiThrService;
        this.router = router;
        this.pesan = pesan;
        this.spinner = spinner;
        this.periode = new Date();
        this.index = 'First-content';
        this.current = 0;
        this.if_next = true;
    }
    TahapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.periode.next(this.periode);
        this.tahapService.getNext().subscribe(function (data) {
            _this.if_next = data;
        });
    };
    TahapComponent.prototype.cekApakahPeriodeAvaible = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode,
            cek_data: this.periode
        };
        this.payrollPegawaiThrService.getPayrollPegawaiThrs(JSON.stringify(param)).subscribe(function (data) {
            console.log(data.data);
            _this.spinner.hide();
            if (data.message == 'stop') {
                console.log(data.message);
                _this.pesan.pesanWarningForm('Payroll periode ini belum ada, minimal buat draft');
                _this.if_next = false;
                return false;
            }
            if (data.data['total'] > 0) {
                _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                _this.if_next = false;
            }
            else {
                _this.if_next = true;
            }
            return false;
        }, function (err) {
            _this.spinner.hide();
            return false;
        });
    };
    TahapComponent.prototype.ngModelChange = function () {
        this.tahapService.periode.next(this.periode);
        this.cekApakahPeriodeAvaible();
    };
    TahapComponent.prototype.pre = function () {
        this.if_next = true;
        this.current -= 1;
        this.changeContent();
    };
    TahapComponent.prototype.next = function () {
        var _this = this;
        console.log(this.if_next);
        if (this.current == 0) {
            this.spinner.show();
            var param = {
                periode: this.periode,
                cek_data: this.periode
            };
            this.payrollPegawaiThrService.getPayrollPegawaiThrs(JSON.stringify(param)).subscribe(function (data) {
                console.log(data.data);
                _this.spinner.hide();
                if (data.data['total'] > 0) {
                    _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                    _this.if_next = false;
                    return false;
                }
                else {
                    _this.if_next = true;
                    _this.current += 1;
                    _this.changeContent();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            if (this.if_next) {
                this.current += 1;
                this.changeContent();
            }
            else {
                this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
            }
        }
    };
    TahapComponent.prototype.done = function () {
        if (this.if_next) {
            this.current += 1;
            this.router.navigate(['/hr/payroll/module/laporan/bonus/list']);
        }
        else {
            this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
        }
    };
    TahapComponent.prototype.changeContent = function () {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    };
    TahapComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_6__["PayrollPegawaiThrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    TahapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap',
            template: __webpack_require__(/*! raw-loader!./tahap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.html"),
            styles: [__webpack_require__(/*! ./tahap.component.scss */ "./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_6__["PayrollPegawaiThrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], TahapComponent);
    return TahapComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/thr-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/thr-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'tahap'
    },
    {
        path: 'tahap',
        component: _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__["TahapComponent"]
    }
];
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/thr/thr.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/thr/thr.module.ts ***!
  \***********************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/hr/payroll/proses/thr/thr-routing.module.ts");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/proses/thr/tahap/tahap.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tahap-komponen/tahap-komponen.component */ "./src/app/pages/hr/payroll/proses/thr/tahap-komponen/tahap-komponen.component.ts");
/* harmony import */ var _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tahap-review/tahap-review.component */ "./src/app/pages/hr/payroll/proses/thr/tahap-review/tahap-review.component.ts");
/* harmony import */ var _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tahap-confirm/tahap-confirm.component */ "./src/app/pages/hr/payroll/proses/thr/tahap-confirm/tahap-confirm.component.ts");











var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__["TahapComponent"], _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_8__["TahapKomponenComponent"], _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_9__["TahapReviewComponent"], _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_10__["TahapConfirmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzStepsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPopconfirmModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/add/add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/add/add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL3Roci9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/add/add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/add/add.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(payrollBankAccountService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.dataBankAccount_cek = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getBankAccount();
    };
    AddComponent.prototype.getBankAccount = function () {
        var _this = this;
        var param = {
            id_pegawai: this.id_pegawai,
            untuk: 'payroll'
        };
        this.payrollBankAccountService.getPayrollBankAccounts(JSON.stringify(param)).subscribe(function (data) {
            _this.dataBankAccount_cek = data.data;
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            cabang_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('thr'),
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
        });
    };
    AddComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBankAccount = this.dataForm.value;
        this.payrollBankAccountService
            .postPayrollBankAccounts(this.dataBankAccount)
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
        this.router.navigate(['/profile/payroll/bank/list/gaji/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/payroll/bank/thr/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
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

/***/ "./src/app/pages/profile/payroll/bank/thr/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL3Roci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/edit/edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(payrollBankAccountService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_bank_account = '';
        this.jumlah = 0;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.id_bank_account = this.activatedRoute.snapshot.paramMap.get('id_bank_account');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.payrollBankAccountService.getPayrollBankAccountsId(this.id_bank_account).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.jumlah = data.data.jumlah;
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            no_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_bank_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            cabang_bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('thr'),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBankAccount = this.dataForm.value;
        this.payrollBankAccountService
            .putPayrollBankAccountsId({ id: this.id_bank_account, body: this.dataBankAccount })
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
        this.router.navigate(['/profile/payroll/bank/list/gaji/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/payroll/bank/thr/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL3Roci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(payrollBankAccountService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.payrollBankAccountService = payrollBankAccountService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataBankAccount = [];
        this.untuk = 'thr';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getBankAccount();
    };
    ListComponent.prototype.getBankAccount = function () {
        var _this = this;
        var param = {
            id_pegawai: this.id_pegawai,
            untuk: this.untuk
        };
        this.payrollBankAccountService.getPayrollBankAccounts(JSON.stringify(param)).subscribe(function (data) {
            _this.dataBankAccount = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollBankAccountService
            .deletePayrollBankAccountsId(id)
            .subscribe(function (data) {
            _this.getBankAccount();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/thr/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/bank/thr/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBankAccountService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/thr-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/thr-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/bank/thr/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/thr/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/bank/thr/add/add.component.ts");






var routes = [
    {
        path: 'edit/:id_bank_account',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
    },
];
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/thr/thr.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/thr/thr.module.ts ***!
  \**************************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/profile/payroll/bank/thr/thr-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/thr/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/bank/thr/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/bank/thr/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/edit/edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/edit/edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC90aHIvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/edit/edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/edit/edit.component.ts ***!
  \******************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/thr/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/payroll/thr/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/list/list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/list/list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL3Roci9saXN0L0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHBheXJvbGxcXHRoclxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL3Roci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL3Roci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIiwiLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/list/list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/list/list.component.ts ***!
  \******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollThrKomponenService, spinner, router, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollThrKomponenService = payrollThrKomponenService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.listKomponen = [];
        this.pegawai_komponen = {};
        //DRAWER
        this.visible = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getList();
        });
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollThrKomponenService.getPayrollThrKomponens(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKomponen = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeEnable = function (status, id_komponen_perusahaan) {
        var _this = this;
        console.log(status);
        this.spinner.show();
        this.payrollThrKomponenService.postPayrollThrKomponens({
            is_enable: status,
            id_pegawai: this.id_pegawai,
            id_komponen_perusahaan: id_komponen_perusahaan
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeDefault = function (is_default, id_pegawai_komponen) {
        var _this = this;
        console.log(is_default);
        this.spinner.show();
        this.payrollThrKomponenService.postPayrollThrKomponens({
            is_default: is_default,
            id_pegawai: this.id_pegawai,
            id_thr_komponen: id_pegawai_komponen
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.updatePegawaiKomponen = function (index, id_pegawai_komponen) {
        var _this = this;
        this.listKomponen.forEach(function (element, i) {
            _this.listKomponen[i].on_editable = false;
        });
        this.spinner.show();
        this.payrollThrKomponenService.getPayrollThrKomponensId(id_pegawai_komponen).subscribe(function (data) {
            _this.pegawai_komponen = data.data;
            _this.listKomponen[index].on_editable = true;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.simpanPegawaiKomponen = function (id_pegawai_komponen, param) {
        var _this = this;
        if (param.rumus_thr == '' || param.rumus_thr == null) {
            if (param.is_default == 'ya') {
                this.pesan.pesanWarningForm('rumus tidak boleh kosong');
                return false;
            }
        }
        this.spinner.show();
        this.payrollThrKomponenService.putPayrollThrKomponensId({ id: id_pegawai_komponen, body: param }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
            _this.pesan.pesanBerhasilForm('Berhasil di perbarui');
        });
    };
    ListComponent.prototype.open = function () {
        this.visible = true;
    };
    ListComponent.prototype.close = function () {
        this.visible = false;
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollThrKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/thr/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/thr/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_2__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollThrKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/thr-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/thr-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ThrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrRoutingModule", function() { return ThrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/thr/list/list.component.ts");




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
var ThrRoutingModule = /** @class */ (function () {
    function ThrRoutingModule() {
    }
    ThrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThrRoutingModule);
    return ThrRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/thr/thr.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/payroll/thr/thr.module.ts ***!
  \*********************************************************/
/*! exports provided: ThrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrModule", function() { return ThrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thr-routing.module */ "./src/app/pages/profile/payroll/thr/thr-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/thr/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/thr/edit/edit.component.ts");









var ThrModule = /** @class */ (function () {
    function ThrModule() {
    }
    ThrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thr_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThrRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"]
            ]
        })
    ], ThrModule);
    return ThrModule;
}());



/***/ })

}]);
//# sourceMappingURL=thr-thr-module.js.map