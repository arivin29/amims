(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/add/add.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/billing/add/add.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Billing</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Kategori</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih kategori\"\r\n                                    formControlName=\"id_billing_category\">\r\n                                    <nz-option *ngFor=\"let item of listKategori\" nzValue=\"{{item.id_billing_category}}\"\r\n                                        nzLabel=\"{{item.category}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nomor billing</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Insert billing number\" formControlName=\"no_billing\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Periode</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih periode\"\r\n                                    formControlName=\"periode\">\r\n                                    <nz-option nzValue=\"hari\" nzLabel=\"Hari\"></nz-option>\r\n                                    <nz-option nzValue=\"bulan\" nzLabel=\"Bulan\"></nz-option>\r\n                                    <nz-option nzValue=\"tahun\" nzLabel=\"Tahun\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Tanggal Cetak</nz-form-label>\r\n                            <nz-form-control *ngIf=\"getValue('periode')=='hari'\">\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                    formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                            <nz-form-control *ngIf=\"getValue('periode')=='bulan'\">\r\n                                <nz-date-picker nzFormat=\"dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                    formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                            <nz-form-control *ngIf=\"getValue('periode')=='tahun'\">\r\n                                <nz-date-picker nzFormat=\"MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                    formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Tanggal jatuh tempo</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-form-control *ngIf=\"getValue('periode')=='hari'\">\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                        formControlName=\"tanggal_jatuh_tempo\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                                <nz-form-control *ngIf=\"getValue('periode')=='bulan'\">\r\n                                    <nz-date-picker nzFormat=\"dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                        formControlName=\"tanggal_jatuh_tempo\"></nz-date-picker>\r\n                                </nz-form-control>\r\n                                <nz-form-control *ngIf=\"getValue('periode')=='tahun'\">\r\n                                    <nz-date-picker nzFormat=\"MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                        formControlName=\"tanggal_jatuh_tempo\"></nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Nilai\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('nilai') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"nilai\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provider</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Insert provider name\" formControlName=\"nama_provider\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Deskripsi</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/detail/detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/billing/detail/detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Billing</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataBilling.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataBilling.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kategori</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataKategori.category}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Provider</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.nama_provider}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">No. billing</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.no_billing}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal cetak</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.tanggal_cetak | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal jatuh tembo</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.tanggal_jatuh_tempo | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nilai</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.nilai| currency: 'Rp.'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Deskripsi</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataBilling.keterangan}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">File</td>\r\n                                <td class=\"pr-0 text-left text-dark\">\r\n                                    <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataBilling.id_dokumen\">\r\n                                    </erp-download-mode1>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <strong>Log History</strong><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/edit/edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/billing/edit/edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Billing</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Kategori</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih kategori\"\r\n                                            formControlName=\"id_billing_category\">\r\n                                            <nz-option *ngFor=\"let item of listKategori\"\r\n                                                nzValue=\"{{item.id_billing_category}}\" nzLabel=\"{{item.category}}\">\r\n                                            </nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Nomor billing</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Insert billing number\"\r\n                                            formControlName=\"no_billing\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Periode</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih periode\"\r\n                                            formControlName=\"periode\">\r\n                                            <nz-option nzValue=\"hari\" nzLabel=\"Hari\"></nz-option>\r\n                                            <nz-option nzValue=\"bulan\" nzLabel=\"Bulan\"></nz-option>\r\n                                            <nz-option nzValue=\"tahun\" nzLabel=\"Tahun\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tanggal Cetak</nz-form-label>\r\n                                    <nz-form-control *ngIf=\"getValue('periode')=='hari'\">\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                            formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                    <nz-form-control *ngIf=\"getValue('periode')=='bulan'\">\r\n                                        <nz-date-picker nzFormat=\"dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                            formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                    <nz-form-control *ngIf=\"getValue('periode')=='tahun'\">\r\n                                        <nz-date-picker nzFormat=\"MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                            formControlName=\"tanggal_cetak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tanggal jatuh tempo</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-form-control *ngIf=\"getValue('periode')=='hari'\">\r\n                                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                                formControlName=\"tanggal_jatuh_tempo\">\r\n                                            </nz-date-picker>\r\n                                        </nz-form-control>\r\n                                        <nz-form-control *ngIf=\"getValue('periode')=='bulan'\">\r\n                                            <nz-date-picker nzFormat=\"dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                                formControlName=\"tanggal_jatuh_tempo\"></nz-date-picker>\r\n                                        </nz-form-control>\r\n                                        <nz-form-control *ngIf=\"getValue('periode')=='tahun'\">\r\n                                            <nz-date-picker nzFormat=\"MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                                formControlName=\"tanggal_jatuh_tempo\"></nz-date-picker>\r\n                                        </nz-form-control>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Nilai\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('nilai') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input  type=\"number\" placeholder=\"Insert value\" formControlName=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Provider</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Insert provider name\"\r\n                                            formControlName=\"nama_provider\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>change File</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <a>\r\n                                            <div class=\"button\" nz-button nzType=\"primary\" nzBlock\r\n                                                (click)=\"togleShowUpload()\">\r\n                                                <i nz-icon nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload\r\n                                            </div>\r\n                                        </a>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Deskripsi</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\" *ngIf=\"toogleUpload\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/list/list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/billing/list/list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Billing</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th nzShowSort nzSortKey=\"category\">Kategori</th>\r\n                        <th nzShowSort nzSortKey=\"no_billing\">No. billing</th>\r\n                        <th nzShowSort nzSortKey=\"tanggal_cetak\">Tanggal Cetak </th>\r\n                        <th nzShowSort nzSortKey=\"tanggal_jatuh_tempo\">Tanggal Jatuh tempo </th>\r\n                        <th nzShowSort nzSortKey=\"nama_provider\">Provider</th>\r\n                        <th nzShowSort nzSortKey=\"nilai\">Nilai</th>\r\n                        <th>File</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.category }}</td>\r\n                        <td>{{ data.no_billing }}</td>\r\n                        <td>{{ data.tanggal_cetak | date }}</td>\r\n                        <td>{{ data.tanggal_jatuh_tempo | date }}</td>\r\n                        <td>{{ data.nama_provider }}</td>\r\n                        <td>{{ data.nilai | currency: 'Rp.'}}</td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item *ngIf=\"data.status == 'draft'\"\r\n                                        [routerLink]=\"['../edit',data.id_billing]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_billing]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_billing)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ga/account/billing/add/add.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/add/add.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvYmlsbGluZy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/account/billing/add/add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/add/add.component.ts ***!
  \***************************************************************/
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
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(akunBillingService, akunBillingCategoryService, spinner, notification, fb, pesan, router) {
        this.akunBillingService = akunBillingService;
        this.akunBillingCategoryService = akunBillingCategoryService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataBilling = {};
        this.listKategori = [];
        this.id_billing = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.getlistKategori();
    };
    AddComponent.prototype.getlistKategori = function () {
        var _this = this;
        this.akunBillingCategoryService.getAkunBillingCategories().subscribe(function (data) {
            _this.listKategori = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_billing_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            periode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('bulan', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_cetak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_jatuh_tempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_provider: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_billing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
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
        this.dataBilling = this.dataForm.value;
        this.akunBillingService.postAkunBillings(this.dataBilling).subscribe(function (data) {
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
        this.router.navigate(['/ga/account/billing/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingCategoryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/ga/account/billing/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingCategoryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/billing/billing-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/billing-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/billing/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/account/billing/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/account/billing/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/account/billing/detail/detail.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
    },
    {
        path: 'edit/:id_billing',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
    },
    {
        path: 'detail/:id_billing',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
    },
];
var BillingRoutingModule = /** @class */ (function () {
    function BillingRoutingModule() {
    }
    BillingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BillingRoutingModule);
    return BillingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/billing/billing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/billing.module.ts ***!
  \************************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/pages/ga/account/billing/billing-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/billing/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/account/billing/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/account/billing/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/account/billing/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _billing_routing_module__WEBPACK_IMPORTED_MODULE_4__["BillingRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_1__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]],
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/billing/detail/detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/detail/detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvYmlsbGluZy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/account/billing/detail/detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/detail/detail.component.ts ***!
  \*********************************************************************/
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
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(akunBillingService, akunBillingCategoryService, spinner, activatedRoute, router, toolsLogFlowService, standarApprovalService) {
        this.akunBillingService = akunBillingService;
        this.akunBillingCategoryService = akunBillingCategoryService;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.id_billing = '';
        this.dataBilling = {};
        this.dataKategori = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_billing = this.activatedRoute.snapshot.paramMap.get('id_billing');
        this.getBilling();
        this.getLog();
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getBilling();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getBilling = function () {
        var _this = this;
        this.spinner.show();
        this.akunBillingService.getAkunBillingsId(this.id_billing).subscribe(function (data) {
            _this.dataBilling = data.data;
            _this.getKategori(data.data.id_billing_category);
            _this.params = {
                id: data.data.id_billing,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_billing"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getKategori = function (id_billing_category) {
        var _this = this;
        this.akunBillingCategoryService.getAkunBillingCategoriesId(id_billing_category).subscribe(function (data) {
            _this.dataKategori = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_billing })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/account/billing/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunBillingService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunBillingCategoryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/ga/account/billing/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunBillingService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunBillingCategoryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/billing/edit/edit.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/edit/edit.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvYmlsbGluZy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/billing/edit/edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/edit/edit.component.ts ***!
  \*****************************************************************/
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
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(akunBillingService, akunBillingCategoryService, spinner, notification, fb, pesan, router, activatedRoute, singleUploadService) {
        this.akunBillingService = akunBillingService;
        this.akunBillingCategoryService = akunBillingCategoryService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.dataBilling = {};
        this.listKategori = [];
        this.id_billing = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_billing = this.activatedRoute.snapshot.paramMap.get('id_billing');
        this.form();
        this.getlistKategori();
        this.getData();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'akutansi_billing.finish') {
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
    EditComponent.prototype.getlistKategori = function () {
        var _this = this;
        this.akunBillingCategoryService.getAkunBillingCategories().subscribe(function (data) {
            _this.listKategori = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.akunBillingService.getAkunBillingsId(this.id_billing).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "akutansi_billing",
                for_table: "erp_akutansi.billing",
                for_module_id: data.data.id_billing
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_billing_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_cetak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_jatuh_tempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_provider: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_billing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            periode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_billing: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.dataBilling = this.dataForm.value;
        this.akunBillingService
            .putAkunBillingsId({ id: this.id_billing, body: this.dataBilling })
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
        this.router.navigate(['/ga/account/billing/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingCategoryService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/ga/account/billing/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingCategoryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/billing/list/list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/list/list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvYmlsbGluZy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/billing/list/list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/account/billing/list/list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(akunBillingService, nzMessageService, spinner) {
        this.akunBillingService = akunBillingService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
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
        this.akunBillingService
            .getAkunBillings(JSON.stringify({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search,
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data.data);
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.akunBillingService.deleteAkunBillingsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/billing/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/ga/account/billing/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunBillingService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=billing-billing-module.js.map