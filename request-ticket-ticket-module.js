(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-ticket-ticket-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Ticket</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Allotment</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                    formControlName=\"id_untuk\">\r\n                                    <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                        nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Departure</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\" style=\"margin-right: 10px\"\r\n                                            formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label> Arrival</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            formControlName=\"tanggal_tiba\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Onduty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\" \" formControlName=\"ref_perjalanan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"dari\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Destination</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"tujuan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provider</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan nama provider\" formControlName=\"provider_tiket\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Price\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('harga') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"harga\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Tiket</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataTiket.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataTiket.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-borderless\">\r\n                <tbody>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee ID</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Position</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_jabatan}}\r\n                                    {{dataPosisi.nama_divisi}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Office</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_kantor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Booking Code</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.kode_booking}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Purchase Code</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.kode_pembelian}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_pembelian | date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request Date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.created_at | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">File </td>\r\n                                <td class=\"pr-0 text-left text-dark\">\r\n                                    <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataTiket.id_document\">\r\n                                    </erp-download-mode1>\r\n                                </td>\r\n                            </tr>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Allotment</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataUntuk.untuk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Departure Date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_berangkat | date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Arrival Date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_tiba | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Departure</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.dari}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Destination</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tujuan}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Provider</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.provider_tiket}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.harga | currency: 'Rp.'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Onduty</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.ref_perjalanan_dinas}}</td>\r\n                            </tr>\r\n                        </div>\r\n                    </div>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Ticket</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Allotment</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                    formControlName=\"id_untuk\">\r\n                                    <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                        nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Departure</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\" style=\"margin-right: 10px\"\r\n                                            formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label> Arrival</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            formControlName=\"tanggal_tiba\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Onduty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\" \" formControlName=\"ref_perjalanan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>From</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"dari\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Destination</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"tujuan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provider</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan nama provider\" formControlName=\"provider_tiket\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Price\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('harga') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"harga\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Ticket</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"listData\" [nzShowPagination]=\"false\"\r\n           >\r\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nomor\">ID</th>\r\n                    <th nzShowSort nzSortKey=\"untuk\">Allotment</th>\r\n                    <th nzShowSort nzSortKey=\"provider_tiket\">Provider</th>\r\n                    <th nzShowSort nzSortKey=\"created_at\">Request Date </th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>\r\n                        <nz-tag [nzColor]=\"data.status | status\">{{data.status?data.status:'pending' |titlecase}}</nz-tag>\r\n                    </td>\r\n                    <td>{{ data.nomor }}</td>\r\n                    <td>{{ data.untuk }}</td>\r\n                    <td>{{ data.provider_tiket }}</td>\r\n                    <td>{{ data.created_at |date }}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_tiket]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail',data.id_tiket]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_tiket)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/add/add.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/ticket/add/add.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Ticket</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Peruntukan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                    formControlName=\"id_untuk\">\r\n                                    <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                        nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Tanggal Penggunaan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\" style=\"margin-right: 10px\"\r\n                                    formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                    formControlName=\"tanggal_tiba\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Perjalanan Dinas</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\" \" formControlName=\"ref_perjalanan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Dari</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"dari\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tujuan</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"tujuan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provider</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan nama provider\" formControlName=\"provider_tiket\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Harga</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"harga\" formControlName=\"harga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/detail/detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/ticket/detail/detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Tiket</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataTiket.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataTiket.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-borderless\">\r\n                <tbody>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Jabatan</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_jabatan}}\r\n                                    {{dataPosisi.nama_divisi}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_kantor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kode Booking</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.kode_booking}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kode Pembelian</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.kode_pembelian}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal Pembelian</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_pembelian | date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal request</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.created_at | date}}</td>\r\n                            </tr>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Peruntukan</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataUntuk.untuk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal Keberangkatan</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_berangkat | date}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Tanggal Kembali</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tanggal_tiba | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Depture</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.dari}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Destination</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.tujuan}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Provider Tiket</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.provider_tiket}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Harga</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.harga}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Perjalanan Dinas</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTiket.ref_perjalanan_dinas}}</td>\r\n                            </tr>\r\n                        </div>\r\n                    </div>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"footer\">\r\n                <div class=\"row\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\r\n                    </div>\r\n                    <div class=\"d-flex flex-column justify-content-center\">\r\n                        <erp-approval-standar></erp-approval-standar>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/edit/edit.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/ticket/edit/edit.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Request</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Peruntukan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                    formControlName=\"id_untuk\">\r\n                                    <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                        nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Tanggal Penggunaan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\" style=\"margin-right: 10px\"\r\n                                    formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                    formControlName=\"tanggal_tiba\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Perjalanan Dinas</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\" \" formControlName=\"ref_perjalanan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Dari</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"dari\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tujuan</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"tujuan\" formControlName=\"tujuan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Provider</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan nama provider\" formControlName=\"provider_tiket\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Harga</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"harga\" formControlName=\"harga\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/ticket/list/list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Ticket</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"listData\" [nzShowPagination]=\"false\"\r\n           >\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                    <th>Peruntukan</th>\r\n                    <th nzShowSort nzSortKey=\"provider_hotel\">Provider</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_request\">tanggal Request </th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.status?data.status:'pending' }}</td>\r\n                    <td>{{ data.nomor }}</td>\r\n                    <td>{{ data.untuk }}</td>\r\n                    <td>{{ data.provider_hotel }}</td>\r\n                    <td>{{ data.created_at |date }}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_tiket]\">Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail',data.id_tiket]\">detail\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_tiket)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvdGlja2V0L2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(gaTiketService, gaUntukService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.listUntuk = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_tiba: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            provider_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            ref_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            harga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            dari: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.gaTiketService
            .postGaTikets(this.data)
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'ticket']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvdGlja2V0L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaTiketService, gaUntukService, pegawaiDetailService, direktoriVPegawaiPosisiService, spinner, routerActive, router, direktoriPegawaiService, toolsLogFlowService, standarApprovalService) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.id_tiket = '';
        this.id_pegawai = '';
        this.dataTiket = {};
        this.dataPegawai = {};
        this.dataPosisi = {};
        this.dataUntuk = {};
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
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id_tiket = params.get('id');
            }
            _this.getDetailTiket();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailTiket();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailTiket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTiketService.getGaTiketsId(this.id_tiket).subscribe(function (data) {
            _this.dataTiket = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getPosisi(data.data.id_pegawai);
            _this.getUntuk(data.data.id_untuk);
            _this.params = {
                id: data.data.id_tiket,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_tiket"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getPosisi = function (id_pegawai) {
        var _this = this;
        this.direktoriVPegawaiPosisiService.getDirektoriVPegawaiPosisisId(id_pegawai).subscribe(function (data) {
            _this.dataPosisi = data.data;
        });
    };
    DetailComponent.prototype.getUntuk = function (id_untuk) {
        var _this = this;
        this.gaUntukService.getGaUntuksId(id_untuk).subscribe(function (data) {
            _this.dataUntuk = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_tiket })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'ticket']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvdGlja2V0L2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(gaTiketService, gaUntukService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_tiket = '';
        this.listUntuk = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_tiket = this.activatedRoute.snapshot.paramMap.get('id');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getPreeData();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaTiketService.getGaTiketsId(this.id_tiket).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_tiba: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            provider_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            ref_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            harga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_pembelian: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kode_pembelian: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kode_booking: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_document: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            dari: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.gaTiketService
            .putGaTiketsId({ id: this.id_tiket, body: this.data })
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'ticket']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvdGlja2V0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(gaTiketService, router, pegawaiDetailService, nzMessageService, spinner) {
        this.gaTiketService = gaTiketService;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.listData = [];
        this.id_pegawai_biodata = '';
        this.id_pegawai = '';
        this.sortKey = null;
        this.sortValue = null;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getTiket();
    };
    ListComponent.prototype.getTiket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTiketService
            .getGaTikets(JSON.stringify({ id_pegawai: this.id_pegawai, sortKey: this.sortKey, sortValue: this.sortValue }))
            .subscribe(function (res) {
            _this.listData = res.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getTiket();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaTiketService
            .deleteGaTiketsId(id)
            .subscribe(function (data) {
            _this.getTiket();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/ticket-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/ticket-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRoutingModule", function() { return TicketRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
    },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
    },
];
var TicketRoutingModule = /** @class */ (function () {
    function TicketRoutingModule() {
    }
    TicketRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TicketRoutingModule);
    return TicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/ticket.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/ticket.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/ticket-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/ticket/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__["TicketRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ]
        })
    ], TicketModule);
    return TicketModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/add/add.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/add/add.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC90aWNrZXQvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/request/ticket/add/add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/add/add.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(gaTiketService, gaUntukService, spinner, notification, fb, pegawaiDetailService, pesan, router) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.listUntuk = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_tiba: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            provider_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            ref_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            harga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            dari: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.data = this.dataForm.value;
        this.gaTiketService
            .postGaTikets(this.data)
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
        this.router.navigate(['/profile/ticket/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/request/ticket/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_3__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/detail/detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/detail/detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC90aWNrZXQvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/request/ticket/detail/detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/detail/detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaTiketService, gaUntukService, pegawaiDetailService, direktoriVPegawaiPosisiService, spinner, routerActive, router, direktoriPegawaiService, toolsLogFlowService, standarApprovalService) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.id_tiket = '';
        this.id_pegawai = '';
        this.dataTiket = {};
        this.dataPegawai = {};
        this.dataPosisi = {};
        this.dataUntuk = {};
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
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id_tiket = params.get('id');
            }
            _this.getDetailTiket();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailTiket();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailTiket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTiketService.getGaTiketsId(this.id_tiket).subscribe(function (data) {
            _this.dataTiket = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getPosisi(data.data.id_pegawai);
            _this.getUntuk(data.data.id_untuk);
            _this.params = {
                id: data.data.id_tiket,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_tiket"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getPosisi = function (id_pegawai) {
        var _this = this;
        this.direktoriVPegawaiPosisiService.getDirektoriVPegawaiPosisisId(id_pegawai).subscribe(function (data) {
            _this.dataPosisi = data.data;
        });
    };
    DetailComponent.prototype.getUntuk = function (id_untuk) {
        var _this = this;
        this.gaUntukService.getGaUntuksId(id_untuk).subscribe(function (data) {
            _this.dataUntuk = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_tiket })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'ticket']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/request/ticket/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_7__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/edit/edit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/edit/edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC90aWNrZXQvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/request/ticket/edit/edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/edit/edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(gaTiketService, gaUntukService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.gaTiketService = gaTiketService;
        this.gaUntukService = gaUntukService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_tiket = '';
        this.listUntuk = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_tiket = this.activatedRoute.snapshot.paramMap.get('id');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.form();
        this.getPreeData();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaTiketService.getGaTiketsId(this.id_tiket).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tanggal_tiba: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            provider_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            ref_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            harga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_pembelian: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kode_pembelian: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            kode_booking: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_document: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_tiket: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            dari: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
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
        this.data = this.dataForm.value;
        this.gaTiketService
            .putGaTiketsId({ id: this.id_tiket, body: this.data })
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
        this.router.navigate(['/profile/ticket/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/request/ticket/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/list/list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/list/list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC90aWNrZXQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/request/ticket/list/list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/list/list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(gaTiketService, router, pegawaiDetailService, nzMessageService, spinner) {
        this.gaTiketService = gaTiketService;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.listData = [];
        this.id_pegawai_biodata = '';
        this.id_pegawai = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getTiket();
    };
    ListComponent.prototype.getTiket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTiketService
            .getGaTikets(JSON.stringify({ id_pegawai: this.id_pegawai }))
            .subscribe(function (res) {
            _this.listData = res.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaTiketService
            .deleteGaTiketsId(id)
            .subscribe(function (data) {
            _this.getTiket();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/ticket/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/request/ticket/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaTiketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_2__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/ticket-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/ticket-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRoutingModule", function() { return TicketRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/request/ticket/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/request/ticket/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/request/ticket/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/request/ticket/add/add.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
    },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
    },
];
var TicketRoutingModule = /** @class */ (function () {
    function TicketRoutingModule() {
    }
    TicketRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TicketRoutingModule);
    return TicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/ticket/ticket.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/request/ticket/ticket.module.ts ***!
  \***************************************************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-routing.module */ "./src/app/pages/profile/request/ticket/ticket-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/request/ticket/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/request/ticket/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/request/ticket/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/request/ticket/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");













var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__["TicketRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ]
        })
    ], TicketModule);
    return TicketModule;
}());



/***/ })

}]);
//# sourceMappingURL=request-ticket-ticket-module.js.map