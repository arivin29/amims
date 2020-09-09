(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onduty-onduty-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option *ngIf=\"jumlah > 0\" nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"jumlah > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Onduty Account</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                New Account\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataBankAccount\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Bank</th>\r\n                    <th>Account number</th>\r\n                    <th>Branch</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.nama_bank }}</td>\r\n                    <td>{{ data.no_rekening }}</td>\r\n                    <td>{{ data.cabang_bank}}</td>\r\n                    <td>{{ data.status_rekening}}</td>\r\n                    <td *ngIf=\"data.jumlah\">{{ data.jumlah | currency:'Rp.'}}</td>\r\n                    <td *ngIf=\"!data.jumlah\">Sisa</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_bank_account]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item *ngIf=\"data.jumlah\">\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_bank_account)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Onduty Period: {{periode | date: 'longDate'}} </h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                More\r\n                <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                <ul nz-menu nzSelectable>\r\n                    <li nz-menu-item>Download PDF*</li>\r\n                    <li nz-menu-item (click)=\"downloadReport()\">Download Excel</li>\r\n                    <li nz-menu-item>Resend Email*</li>\r\n                    <li nz-menu-item (click)=\"generatePayemnt()\" *ngIf=\"payment.close < 1\">Generate Payment</li>\r\n                    <li nz-menu-item (click)=\"downloadPayement()\" *ngIf=\"payment.close > 0 || payment.pending > 0\">\r\n                        Download Payment</li>\r\n                </ul>\r\n            </nz-dropdown-menu>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Empolye</th>\r\n                        <th>Onduty</th>\r\n                        <th>Tax</th>\r\n                        <th>Net Salary</th>\r\n                        <th>Onduty THP</th>\r\n                        <th nzWidth=\"60px\" nzRight=\"0px\">Action</th>\r\n                    </tr>\r\n\r\n                    <tr *ngFor=\"let data of rekap\">\r\n                        <th></th>\r\n                        <th>{{data.total_onduty | number}}</th>\r\n                        <th>{{data.pajak | number}}</th>\r\n                        <th>{{data.bersih | number}}</th>\r\n                        <th>{{data.total | currency:'Rp'}}</th>\r\n                        <th nzWidth=\"60px\" nzRight=\"0px\">-</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let data of listData; let index=index;\">\r\n                        <td>\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"p-1\">\r\n                                    <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                        nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                                    </nz-avatar>\r\n                                    <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                                </div>\r\n                                <div class=\"mr-auto pl-2\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                        {{data.nama_pegawai}}\r\n\r\n                                        <br>\r\n                                        {{ data.no_induk }}\r\n\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                                    Componet Payroll</a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                                    Componet THR </a>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n\r\n                        <td>{{data.total_onduty | number}}</td>\r\n                        <td>{{data.pajak | number}}</td>\r\n                        <td>{{data.bersih | currency:'Rp'}}</td>\r\n                        <td>{{data.total | currency:'Rp'}}</td>\r\n                        <td nzRight=\"0px\">\r\n                            <button title=\"Reload\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                (click)=\"resent(data.id_pegawai_payroll)\">\r\n                                <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>\r\n                            </button>\r\n                            <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                (click)=\"detailPerPegawai(data.id_pegawai_payroll)\">\r\n                                <i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/onduty/list/list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/onduty/list/list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Onduty Recapitulation </h5>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n\r\n        <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\"\r\n            [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n            (nzPageSizeChange)=\"searchData(true)\">\r\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"periode\">Period</th>\r\n                    <th nzShowSort nzSortKey=\"id_pegawai\">Recipients</th>\r\n                    <th nzShowSort nzSortKey=\"pajak\">Tax</th>\r\n                    <th nzShowSort nzSortKey=\"bersih\">Net Salary</th>\r\n                    <th nzShowSort nzSortKey=\"total\">Total THP</th>\r\n                    <th>#</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of ajaxTable.data\">\r\n\r\n                    <td>\r\n                        <nz-tag style=\"float: left;\" [nzColor]=\"data.status | status\">\r\n                            {{ data.status | titlecase }}\r\n                        </nz-tag>\r\n                    </td>\r\n                    <td>{{ data.periode }} </td>\r\n                    <td>{{ data.id_pegawai }} Recipients</td>\r\n                    <td>{{ data.pajak | currency:'Rp,' }}</td>\r\n                    <td>{{ data.bersih | currency:'Rp,' }}</td>\r\n                    <td>{{ data.total | currency:'Rp,' }}</td>\r\n                    <td>\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item>\r\n                                    <a [routerLink]=\"['../detail',data.periode]\">Detail</a>\r\n                                </li>\r\n                                <li nz-menu-item>Download</li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"!is_confirm\">Are you sure you want to complete this task?</h5>\r\n\r\n<button *ngIf=\"!is_confirm\" nz-button (click)=\"confirm()\" nzType=\"primary\" [nzSize]=\"'large'\" nzShape=\"round\">\r\n      <i nz-icon nzType=\"download\"></i>Confirm\r\n    </button>\r\n\r\n<h5 *ngIf=\"is_confirm\">On Duty calculations have been saved, follow the next step \"Click the Done button\"</h5>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button *ngIf=\"!cek_status\" nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap(true)\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"card\" *ngFor=\"let item of listData\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-nowrap align-items-start pt-4\">\r\n\r\n                <div class=\"flex-grow-1\">\r\n                    <div class=\"border-bottom\">\r\n                        <div class=\"d-flex flex-wrap mb-2 \">\r\n                            <div class=\"mr-auto \">\r\n                                <div class=\"text-gray-6 \">\r\n                                    <span class=\"text-dark font-weight-bold \">{{item.nama_pegawai}}</span>\r\n                                </div>\r\n                                <div>{{item.nama_divisi}} / {{item.nama_jabatan}}/ {{item.nama_kantor}}</div>\r\n                            </div>\r\n                            <div class=\"\">\r\n                                {{item.hash_posisi}} / {{item.ron_group}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n\r\n                            <div>\r\n\r\n                                <div class=\"row\" *ngFor=\"let x of item.item\">\r\n\r\n                                    <div class=\"col-md-6\">\r\n                                        <table class=\"table\">\r\n                                            <tr style=\"background-color: darkgray;\">\r\n                                                <th>Parameter</th>\r\n                                                <th>Jumlah</th>\r\n                                                <th>Nilai</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>autty_allow_count</td>\r\n                                                <td>{{x['autty_allow_count']}}</td>\r\n                                                <td>{{x['autty_allow'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>extra_duty</td>\r\n                                                <td>{{x['extra_duty_count']}}</td>\r\n                                                <td>{{x['extra_duty'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>hardship</td>\r\n                                                <td>{{x['hardship_count']}}</td>\r\n                                                <td>{{x['hardship'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>meal</td>\r\n                                                <td>{{x['meal_count']}}</td>\r\n                                                <td>{{x['meal'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n\r\n                                        </table>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-6\">\r\n                                        <table class=\"table\">\r\n                                            <tr style=\"background-color: darkgray;\">\r\n                                                <th>Parameter</th>\r\n                                                <th>Jumlah</th>\r\n                                                <th>Nilai</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>ovt_java</td>\r\n                                                <td>{{x['ovt_java_count']}}</td>\r\n                                                <td>{{x['ovt_java'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>o_1</td>\r\n                                                <td>{{x['o_1_count']}}</td>\r\n                                                <td>{{x['o_1'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>o_2</td>\r\n                                                <td>{{x['o_2_count']}}</td>\r\n                                                <td>{{x['o_2'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>o_3</td>\r\n                                                <td>{{x['o_3_count']}}</td>\r\n                                                <td>{{x['o_3'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>TOTAL</td>\r\n                                                <td> </td>\r\n                                                <td>{{x['total'] | currency:'Rp'}}</td>\r\n                                            </tr>\r\n\r\n                                        </table>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n\r\n\r\n    <nz-table #basicTable [nzData]=\"listData\">\r\n        <thead>\r\n            <tr>\r\n                <th>Employer</th>\r\n                <th>Index</th>\r\n                <th>Onduty</th>\r\n                <th>Tax</th>\r\n                <th>Net</th>\r\n                <th width=\"60px\" nzRight=\"0px\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of listData; let index=index;\">\r\n                <td>\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"p-1\">\r\n                            <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                            </nz-avatar>\r\n                            <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                        </div>\r\n                        <div class=\"mr-auto pl-2\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                {{data.nama_pegawai}}\r\n\r\n                                <br>\r\n                                {{ data.no_induk }}\r\n\r\n                            </a>\r\n                            <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                        Componet Payroll\r\n                                    </li>\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                        Componet THR\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>{{index}} </td>\r\n                <td>{{data.bersih | number}}</td>\r\n                <td>{{data.pajak | number}}</td>\r\n                <td>{{data.bersih | number}}</td>\r\n                <td>\r\n                    <button title=\"Reload\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                        (click)=\"prosessRekapOneByOne(data.id_pegawai_bonus)\">\r\n                        <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>\r\n                    </button>\r\n                    <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                        (click)=\"viewDetail(data.id_pegawai_bonus)\">\r\n                        <i nz-icon nzType=\"monitor\" nzTheme=\"outline\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </nz-table>\r\n\r\n\r\n\r\n    <nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" nzTitle=\"Detail Payroll\"\r\n        (nzOnClose)=\"close()\" [nzWidth]=\"720\">\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n    </nz-drawer>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"current==0\" style=\"width: 900px;\">\r\n    <div nz-col nzSpan=\"5\">\r\n        <nz-form-label>On Duty</nz-form-label>\r\n    </div>\r\n\r\n</div>\r\n\r\n<nz-steps [nzCurrent]=\"current\">\r\n    <nz-step nzTitle=\"Period\"></nz-step>\r\n    <nz-step nzTitle=\"Formula\"></nz-step>\r\n    <nz-step nzTitle=\"Component\"></nz-step>\r\n    <nz-step nzTitle=\"Finishing\"></nz-step>\r\n</nz-steps>\r\n\r\n\r\n\r\n<div class=\"steps-content\">\r\n\r\n    <div *ngIf=\"current==0\">\r\n        <nz-form-label>Select Period</nz-form-label>\r\n        <nz-month-picker [nzFormat]=\"'dd-MMMM-yyyy'\" [(ngModel)]=\"periode\" (ngModelChange)=\"ngModelChange()\">\r\n        </nz-month-picker>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"current==1\">\r\n        <app-tahap-komponen></app-tahap-komponen>\r\n    </div>\r\n\r\n    <div *ngIf=\"current==2\">\r\n        <app-tahap-review></app-tahap-review>\r\n    </div>\r\n    <div *ngIf=\"current==3\">\r\n        <app-tahap-confirm></app-tahap-confirm>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"steps-action\">\r\n    <button nz-button nzType=\"default\" (click)=\"pre()\" *ngIf=\"current > 0\">\r\n        <span>Previous</span>\r\n    </button>\r\n    <button nz-button nzType=\"default\" (click)=\"next()\" *ngIf=\"current < 3\">\r\n        <span>Next</span>\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"done()\" *ngIf=\"current === 3\">\r\n        <span>Done</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/add/add.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/onduty/add/add.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"dataBankAccount_cek.length > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Account</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 70%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Bank</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"nama_bank\">\r\n                                <nz-option nzLabel=\"BCA\" nzValue=\"BCA\"></nz-option>\r\n                                <nz-option nzLabel=\"BNI\" nzValue=\"BNI\"></nz-option>\r\n                                <nz-option nzLabel=\"BRI\" nzValue=\"BRI\"></nz-option>\r\n                                <nz-option nzLabel=\"Mandiri\" nzValue=\"Mandiri\"></nz-option>\r\n                                <nz-option nzLabel=\"BTN\" nzValue=\"BTN\"></nz-option>\r\n                                <nz-option nzLabel=\"BTPN\" nzValue=\"BTPN\"></nz-option>\r\n                                <nz-option nzLabel=\"Sinarmas\" nzValue=\"Sinarmas\"></nz-option>\r\n                                <nz-option nzLabel=\"Mega\" nzValue=\"Mega\"></nz-option>\r\n                                <nz-option nzLabel=\"Permata\" nzValue=\"Permata\"></nz-option>\r\n                                <nz-option nzLabel=\"Danamon\" nzValue=\"Danamon\"></nz-option>\r\n                                <nz-option nzLabel=\"CIMB Niaga\" nzValue=\"CIMB Niaga\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Account number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" formControlName=\"no_rekening\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Branch</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input nama cabang\" formControlName=\"cabang_bank\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"pilih tingkat\" formControlName=\"status_rekening\">\r\n                                <nz-option nzLabel=\"Active\" nzValue=\"Active\"></nz-option>\r\n                                <nz-option *ngIf=\"jumlah > 0\" nzLabel=\"Non Active\" nzValue=\"Non Active\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"jumlah > 0\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Amount\r\n                            <i style=\"float: right\">\r\n                                {{getValue('jumlah') | currency: 'Rp.'}}\r\n                            </i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                <input nz-input placeholder=\"input number\" formControlName=\"jumlah\" />\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/list/list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/bank/onduty/list/list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Onduty Account</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                New Account\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataBankAccount\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"tipe_lisensi\">Bank</th>\r\n                    <th>Account number</th>\r\n                    <th>Branch</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.nama_bank }}</td>\r\n                    <td>{{ data.no_rekening }}</td>\r\n                    <td>{{ data.cabang_bank}}</td>\r\n                    <td>{{ data.status_rekening}}</td>\r\n                    <td *ngIf=\"data.jumlah\">{{ data.jumlah | currency:'Rp.'}}</td>\r\n                    <td *ngIf=\"!data.jumlah\">Sisa</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit/',data.id_bank_account]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item *ngIf=\"data.jumlah\">\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_bank_account)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay9vbmR1dHkvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.ts ***!
  \****************************************************************************************************/
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
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('onduty'),
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'bank', 'list', 'onduty', 'list']);
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.scss")]
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

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay9vbmR1dHkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.ts ***!
  \******************************************************************************************************/
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
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('onduty'),
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'bank', 'list', 'onduty', 'list']);
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
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.scss")]
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

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvYmFuay9vbmR1dHkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.ts ***!
  \******************************************************************************************************/
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
        this.untuk = 'onduty';
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
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.scss")]
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

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: OndutyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyRoutingModule", function() { return OndutyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.ts");






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
var OndutyRoutingModule = /** @class */ (function () {
    function OndutyRoutingModule() {
    }
    OndutyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OndutyRoutingModule);
    return OndutyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty.module.ts ***!
  \************************************************************************************************/
/*! exports provided: OndutyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyModule", function() { return OndutyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onduty-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/onduty-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/bank/onduty/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var OndutyModule = /** @class */ (function () {
    function OndutyModule() {
    }
    OndutyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__["OndutyRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], OndutyModule);
    return OndutyModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9vbmR1dHkvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.ts ***!
  \****************************************************************************/
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
    function DetailComponent(spinner, activatedRoute, payrollPegawaiOndutyService, payrollBankOutService, pesan, notification, drawerService) {
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiOndutyService = payrollPegawaiOndutyService;
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
        this.payrollPegawaiOndutyService.getPayrollPegawaiOnduties(JSON.stringify(param)).subscribe(function (data) {
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
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPegawaiOndutyService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBankOutService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPegawaiOndutyService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBankOutService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/list/list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/list/list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9vbmR1dHkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/list/list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/list/list.component.ts ***!
  \************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(payrollReportPegawaiOndutiService, nzMessageService, spinner) {
        this.payrollReportPegawaiOndutiService = payrollReportPegawaiOndutiService;
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
        this.payrollReportPegawaiOndutiService
            .getPayrollReportPegawaiOnduties(JSON.stringify({
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
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollReportPegawaiOndutyService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/onduty/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/laporan/onduty/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollReportPegawaiOndutyService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/onduty-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/onduty-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: OndutyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyRoutingModule", function() { return OndutyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/onduty/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.ts");





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
var OndutyRoutingModule = /** @class */ (function () {
    function OndutyRoutingModule() {
    }
    OndutyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OndutyRoutingModule);
    return OndutyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/onduty/onduty.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/onduty/onduty.module.ts ***!
  \******************************************************************/
/*! exports provided: OndutyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyModule", function() { return OndutyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _onduty_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onduty-routing.module */ "./src/app/pages/hr/payroll/laporan/onduty/onduty-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/onduty/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/onduty/detail/detail.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");










var OndutyModule = /** @class */ (function () {
    function OndutyModule() {
    }
    OndutyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _onduty_routing_module__WEBPACK_IMPORTED_MODULE_5__["OndutyRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"]
            ]
        })
    ], OndutyModule);
    return OndutyModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/onduty-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/onduty-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OndutyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyRoutingModule", function() { return OndutyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.ts");




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
var OndutyRoutingModule = /** @class */ (function () {
    function OndutyRoutingModule() {
    }
    OndutyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OndutyRoutingModule);
    return OndutyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/onduty.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/onduty.module.ts ***!
  \*****************************************************************/
/*! exports provided: OndutyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyModule", function() { return OndutyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onduty-routing.module */ "./src/app/pages/hr/payroll/proses/onduty/onduty-routing.module.ts");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.ts");
/* harmony import */ var _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tahap-komponen/tahap-komponen.component */ "./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.ts");
/* harmony import */ var _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tahap-review/tahap-review.component */ "./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.ts");
/* harmony import */ var _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tahap-confirm/tahap-confirm.component */ "./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var OndutyModule = /** @class */ (function () {
    function OndutyModule() {
    }
    OndutyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__["TahapComponent"], _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_5__["TahapKomponenComponent"], _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_6__["TahapReviewComponent"], _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_7__["TahapConfirmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__["OndutyRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzStepsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzPopconfirmModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], OndutyModule);
    return OndutyModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL29uZHV0eS90YWhhcC1jb25maXJtL3RhaGFwLWNvbmZpcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TahapConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapConfirmComponent", function() { return TahapConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapConfirmComponent = /** @class */ (function () {
    function TahapConfirmComponent(tahapService, spinner, PayrollPegawaiOndutyService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.PayrollPegawaiOndutyService = PayrollPegawaiOndutyService;
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
        this.PayrollPegawaiOndutyService.putPayrollPegawaiOndutiesId({ id: '000', body: param }).subscribe(function (data) {
            _this.spinner.hide();
            _this.is_confirm = true;
            _this.tahapService.next.next(true);
        });
    };
    TahapConfirmComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-confirm',
            template: __webpack_require__(/*! raw-loader!./tahap-confirm.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.html"),
            styles: [__webpack_require__(/*! ./tahap-confirm.component.scss */ "./src/app/pages/hr/payroll/proses/onduty/tahap-confirm/tahap-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapConfirmComponent);
    return TahapConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL29uZHV0eS90YWhhcC1rb21wb25lbi90YWhhcC1rb21wb25lbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TahapKomponenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapKomponenComponent", function() { return TahapKomponenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapKomponenComponent = /** @class */ (function () {
    function TahapKomponenComponent(tahapService, spinner, payrollPegawaiOndutyDetailService, payrollPegawaiOndutyService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPegawaiOndutyDetailService = payrollPegawaiOndutyDetailService;
        this.payrollPegawaiOndutyService = payrollPegawaiOndutyService;
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
            reload: reload
        };
        this.payrollPegawaiOndutyDetailService.postPayrollPegawaiOndutyDetails(param).subscribe(function (data) {
            var datas = data.data['pegawai'];
            _this.listDataKomponen = data.data['komponen'];
            var komponens = data.data['komponen'];
            datas.forEach(function (item, index) {
                var id_pegawai = item.id_pegawai;
                var cek = komponens.filter(function (kom) {
                    if (kom.id_pegawai == id_pegawai) {
                        return true;
                    }
                    if (kom.total_onduty == null) {
                        _this.cek_status = false;
                    }
                });
                datas[index]['item'] = cek;
            });
            _this.listData = datas;
            _this.spinner.hide();
            console.log(_this.cek_status);
            _this.tahapService.next.next(_this.cek_status);
        });
    };
    TahapKomponenComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.spinner.show();
        this.listDataKomponen.forEach(function (element) {
            _this.prosessRekapOneByOne(element.id_pegawai_onduty, true);
        });
    };
    TahapKomponenComponent.prototype.prosessRekapOneByOne = function (id_pegawai_onduty, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            id_pegawai_onduty: id_pegawai_onduty,
        };
        this.payrollPegawaiOndutyService.putPayrollPegawaiOndutiesId({ id: id_pegawai_onduty, body: params }).subscribe(function (data) {
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
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapKomponenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-komponen',
            template: __webpack_require__(/*! raw-loader!./tahap-komponen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.html"),
            styles: [__webpack_require__(/*! ./tahap-komponen.component.scss */ "./src/app/pages/hr/payroll/proses/onduty/tahap-komponen/tahap-komponen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapKomponenComponent);
    return TahapKomponenComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcHJvc2VzL29uZHV0eS90YWhhcC1yZXZpZXcvdGFoYXAtcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TahapReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapReviewComponent", function() { return TahapReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapReviewComponent = /** @class */ (function () {
    function TahapReviewComponent(tahapService, spinner, payrollPegawaiOndutyService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPegawaiOndutyService = payrollPegawaiOndutyService;
        this.pesan = pesan;
        this.notification = notification;
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
        this.payrollPegawaiOndutyService.getPayrollPegawaiOnduties(JSON.stringify(param)).subscribe(function (data) {
            var datas = data.data;
            _this.listData = datas.list;
            _this.rekap = datas.rekap;
            _this.spinner.hide();
            _this.listData.forEach(function (item) {
                // if (item.bersih == null) {
                //     this.cek_status = false;
                // }
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
            _this.prosessRekapOneByOne(element.id_pegawai_onduty, true);
        });
    };
    TahapReviewComponent.prototype.prosessRekapOneByOne = function (id_pegawai_onduty, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            id_pegawai_onduty: id_pegawai_onduty,
        };
        this.spinner.show();
        this.payrollPegawaiOndutyService.putPayrollPegawaiOndutiesId({ id: id_pegawai_onduty, body: params }).subscribe(function (data) {
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
    TahapReviewComponent.prototype.viewDetail = function (id_pegawai_onduty) {
        this.visible = true;
    };
    TahapReviewComponent.prototype.close = function () {
        this.visible = false;
    };
    TahapReviewComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-review',
            template: __webpack_require__(/*! raw-loader!./tahap-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.html"),
            styles: [__webpack_require__(/*! ./tahap-review.component.scss */ "./src/app/pages/hr/payroll/proses/onduty/tahap-review/tahap-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiOndutyService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapReviewComponent);
    return TahapReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts ***!
  \*****************************************************************/
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
        this.nama_bonus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    TahapService.prototype.getPeriode = function () {
        return this.periode.asObservable();
    };
    TahapService.prototype.getNext = function () {
        return this.next.asObservable();
    };
    TahapService.prototype.getNamaBonus = function () {
        return this.nama_bonus.asObservable();
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

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}\n\nbutton {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wcm9zZXMvb25kdXR5L3RhaGFwL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxwYXlyb2xsXFxwcm9zZXNcXG9uZHV0eVxcdGFoYXBcXHRhaGFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3Byb3Nlcy9vbmR1dHkvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3Byb3Nlcy9vbmR1dHkvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iLCIuc3RlcHMtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3RlcHMtYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.ts ***!
  \*************************************************************************/
/*! exports provided: TahapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapComponent", function() { return TahapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/proses/onduty/tahap.service.ts");
/* harmony import */ var src_app_sdk_payroll_services_payroll_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-pegawai-onduty.service */ "./src/app/sdk/payroll/services/payroll-pegawai-onduty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");







var TahapComponent = /** @class */ (function () {
    function TahapComponent(tahapService, payrollPegawaiOndutyService, router, spinner, pesan) {
        this.tahapService = tahapService;
        this.payrollPegawaiOndutyService = payrollPegawaiOndutyService;
        this.router = router;
        this.spinner = spinner;
        this.pesan = pesan;
        this.periode = new Date();
        this.index = 'First-content';
        this.current = 0;
        this.if_next = true;
    }
    TahapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.periode.next(this.periode);
        this.tahapService.getNext().subscribe(function (data) {
            console.log(data);
            _this.if_next = data;
        });
    };
    TahapComponent.prototype.ngModelChange = function () {
        this.tahapService.periode.next(this.periode);
        this.cekApakahPeriodeAvaible();
    };
    TahapComponent.prototype.cekApakahPeriodeAvaible = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode,
            cek_data: this.periode
        };
        this.payrollPegawaiOndutyService.getPayrollPegawaiOnduties(JSON.stringify(param)).subscribe(function (data) {
            _this.spinner.hide();
            console.log(data.message);
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
                console.log(_this.if_next);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TahapComponent.prototype.pre = function () {
        this.if_next = true;
        this.current -= 1;
        this.changeContent();
    };
    TahapComponent.prototype.next = function () {
        var _this = this;
        if (this.current == 0) {
            this.spinner.show();
            var param = {
                periode: this.periode,
                cek_data: this.periode
            };
            this.payrollPegawaiOndutyService.getPayrollPegawaiOnduties(JSON.stringify(param)).subscribe(function (data) {
                console.log(data.data);
                _this.spinner.hide();
                console.log(data.message);
                if (data.message == 'stop') {
                    console.log(data.message);
                    _this.pesan.pesanWarningForm('Payroll periode ini belum ada, Buat payroll periode ini');
                    _this.if_next = false;
                    return false;
                }
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
            this.router.navigate(['/hr/payroll/module/laporan/onduty/list']);
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
        { type: src_app_sdk_payroll_services_payroll_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiOndutyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] }
    ]; };
    TahapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap',
            template: __webpack_require__(/*! raw-loader!./tahap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.html"),
            styles: [__webpack_require__(/*! ./tahap.component.scss */ "./src/app/pages/hr/payroll/proses/onduty/tahap/tahap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            src_app_sdk_payroll_services_payroll_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiOndutyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"]])
    ], TahapComponent);
    return TahapComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/onduty/add/add.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/add/add.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL29uZHV0eS9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/onduty/add/add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/add/add.component.ts ***!
  \************************************************************************/
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
            jumlah: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status_rekening: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('onduty'),
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
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/payroll/bank/onduty/add/add.component.scss")]
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

/***/ "./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL29uZHV0eS9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.ts ***!
  \**************************************************************************/
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
            untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('onduty'),
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
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.scss")]
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

/***/ "./src/app/pages/profile/payroll/bank/onduty/list/list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/list/list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9iYW5rL29uZHV0eS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/onduty/list/list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/list/list.component.ts ***!
  \**************************************************************************/
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
        this.untuk = 'onduty';
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
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/bank/onduty/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/bank/onduty/list/list.component.scss")]
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

/***/ "./src/app/pages/profile/payroll/bank/onduty/onduty-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/onduty-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: OndutyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyRoutingModule", function() { return OndutyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/onduty/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/bank/onduty/add/add.component.ts");






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
var OndutyRoutingModule = /** @class */ (function () {
    function OndutyRoutingModule() {
    }
    OndutyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OndutyRoutingModule);
    return OndutyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/bank/onduty/onduty.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/bank/onduty/onduty.module.ts ***!
  \********************************************************************/
/*! exports provided: OndutyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndutyModule", function() { return OndutyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onduty-routing.module */ "./src/app/pages/profile/payroll/bank/onduty/onduty-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/bank/onduty/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/bank/onduty/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/bank/onduty/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var OndutyModule = /** @class */ (function () {
    function OndutyModule() {
    }
    OndutyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _onduty_routing_module__WEBPACK_IMPORTED_MODULE_3__["OndutyRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], OndutyModule);
    return OndutyModule;
}());



/***/ })

}]);
//# sourceMappingURL=onduty-onduty-module.js.map