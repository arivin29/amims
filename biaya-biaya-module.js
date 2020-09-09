(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biaya-biaya-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/add/add.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/request/biaya/add/add.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Expenses</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Employee</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Employee\"\r\n                                            formControlName=\"id_pegawai\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Allotment</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Allotment\"\r\n                                            formControlName=\"id_untuk\">\r\n                                            <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                                nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Total\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('total') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Insert value\"\r\n                                                formControlName=\"total\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan\"\r\n                                        [nzAutosize]=\"{ minRows: 3, maxRows: 6 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Expenses Item</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Allotment</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"keperluan\" [(ngModel)]=\"keperluan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"7\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Value\r\n                                        <i style=\"float: right\">\r\n                                            {{nilai | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Nilai item\"\r\n                                                [(ngModel)]=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"5\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Add</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <button nz-button nzType=\"primary\" (click)=\"tambahRincian()\">+Rincian</button>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <nz-table #basicTable1 [nzData]=\"listRincian\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Allotment</th>\r\n                                    <th>Value</th>\r\n                                    <th class=\"text-right\">\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.keperluan}}</td>\r\n                                    <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteRincian(data.id_biaya_rincian)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/detail/detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/request/biaya/detail/detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Expenses Detail</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                    {{dataBiaya.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataBiaya.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Employee </td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Employee Id</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Position</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_jabatan}}\r\n                                            {{dataPosisi.nama_divisi}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Office</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_kantor}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">File</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">\r\n                                            <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataBiaya.id_document\">\r\n                                            </erp-download-mode1>\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Request</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataBiaya.created_at | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Allotment</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataUntuk.untuk}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Total</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataBiaya.total| currency: 'Rp.'}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Description</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataBiaya.keterangan}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Expenses Item</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataRincian\" [nzShowPagination]=\"false\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Allotment</th>\r\n                                <th>Nilai</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.keperluan}}</td>\r\n                                <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <strong>Log History</strong><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} by {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/edit/edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/request/biaya/edit/edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Expense</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Employee</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Emplloyee\"\r\n                                            formControlName=\"id_pegawai\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Allotment</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Allotment\"\r\n                                            formControlName=\"id_untuk\">\r\n                                            <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk}}\"\r\n                                                nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Total\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('total') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Insert value\"\r\n                                                formControlName=\"total\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>change File</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <a nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i\r\n                                                nz-icon nzType=\"cloud-upload\"\r\n                                                nzTheme=\"outline\"></i>&nbsp;Upload</a>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan\"\r\n                                        [nzAutosize]=\"{ minRows: 3, maxRows: 6 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Expense Item</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Allotment</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Allotment\" [(ngModel)]=\"keperluan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"7\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Value\r\n                                        <i style=\"float: right\">\r\n                                            {{nilai | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Nilai item\"\r\n                                                [(ngModel)]=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"5\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Add</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <button nz-button nzType=\"primary\" (click)=\"tambahRincian()\">+Rincian</button>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <nz-table #basicTable1 [nzData]=\"listRincian\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Allotment</th>\r\n                                    <th>Value</th>\r\n                                    <th class=\"text-right\">\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.keperluan}}</td>\r\n                                    <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteRincian(data.id_biaya_rincian)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\" *ngIf=\"toogleUpload\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\" >\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/request/biaya/list/list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Expenses</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['/ga/module/biaya/add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">ID</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Employee</th>\r\n                        <th nzShowSort nzSortKey=\"created_at\">Request Date</th>\r\n                        <th>Allotment </th>\r\n                        <th nzShowSort nzSortKey=\"total\">Total</th>\r\n                        <th>File</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.created_at |date }}</td>\r\n                        <td>{{ data.untuk }}</td>\r\n                        <td>{{ data.total | currency: 'Rp.'}}</td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_document\"></erp-download-mode1>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item *ngIf=\"data.status == 'draft'\"\r\n                                        [routerLink]=\"['../edit',data.id_biaya]\"> <i nz-icon nzType=\"edit\"\r\n                                            nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_biaya]\"> <i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_biaya)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\"\r\n                                                nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ga/request/biaya/add/add.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/add/add.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL3JlcXVlc3QvYmlheWEvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/request/biaya/add/add.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/add/add.component.ts ***!
  \*************************************************************/
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
    function AddComponent(gaUntukService, gaBiayaService, gaBiayaRincianService, direktoriPegawaiMasterService, spinner, notification, fb, pesan, router) {
        this.gaUntukService = gaUntukService;
        this.gaBiayaService = gaBiayaService;
        this.gaBiayaRincianService = gaBiayaRincianService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataBiaya = {};
        this.dataRincian = [];
        this.id_biaya = '';
        this.listPegawai = [];
        this.listUntuk = [];
        //----------Rincian-----------------
        this.keperluan = '';
        this.nilai = '';
        this.listRincian = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getPreeData();
        this.form();
        this.beforeCreate();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    AddComponent.prototype.tambahRincian = function () {
        var _this = this;
        if (this.keperluan == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaBiayaRincianService
            .postGaBiayaRincians({
            id_biaya: this.id_biaya,
            keperluan: this.keperluan,
            nilai: this.nilai,
        })
            .subscribe(function (res) {
            _this.getRincian();
        });
    };
    AddComponent.prototype.getRincian = function () {
        var _this = this;
        var filter = {
            id_biaya: this.id_biaya,
        };
        this.gaBiayaRincianService.getGaBiayaRincians(JSON.stringify(filter)).subscribe(function (res) {
            _this.listRincian = res.data;
        });
    };
    AddComponent.prototype.deleteRincian = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaBiayaRincianService.deleteGaBiayaRinciansId(id).subscribe(function (data) {
            _this.getRincian();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.gaBiayaService.postGaBiayas(this.dataBiaya).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_biaya = data.data.id_biaya;
            console.log(data.data.id_biaya);
            _this.getRincian();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_biaya: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_document: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    AddComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    AddComponent.prototype.getNilai = function (key) {
        return (key).value;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBiaya = this.dataForm.value;
        this.gaBiayaService.putGaBiayasId({ id: this.id_biaya, body: this.dataBiaya }).subscribe(function (data) {
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
        this.router.navigate(['/ga/module/biaya/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaRincianService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/ga/request/biaya/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaRincianService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/biaya/biaya-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/biaya-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BiayaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiayaRoutingModule", function() { return BiayaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/request/biaya/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/request/biaya/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/request/biaya/add/add.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/request/biaya/list/list.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    {
        path: 'edit/:id_biaya',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"],
    },
    {
        path: 'detail/:id_biaya',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"],
    },
];
var BiayaRoutingModule = /** @class */ (function () {
    function BiayaRoutingModule() {
    }
    BiayaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        })
    ], BiayaRoutingModule);
    return BiayaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/biaya/biaya.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/biaya.module.ts ***!
  \********************************************************/
/*! exports provided: BiayaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiayaModule", function() { return BiayaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _biaya_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biaya-routing.module */ "./src/app/pages/ga/request/biaya/biaya-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/request/biaya/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/request/biaya/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/request/biaya/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/request/biaya/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var BiayaModule = /** @class */ (function () {
    function BiayaModule() {
    }
    BiayaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _biaya_routing_module__WEBPACK_IMPORTED_MODULE_4__["BiayaRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]],
        })
    ], BiayaModule);
    return BiayaModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/biaya/detail/detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/detail/detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL3JlcXVlc3QvYmlheWEvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/request/biaya/detail/detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/detail/detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaBiayaService, gaUntukService, gaBiayaRincianService, toolsLogFlowService, direktoriVPegawaiPosisiService, spinner, routerActive, router, direktoriPegawaiService, standarApprovalService) {
        this.gaBiayaService = gaBiayaService;
        this.gaUntukService = gaUntukService;
        this.gaBiayaRincianService = gaBiayaRincianService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.standarApprovalService = standarApprovalService;
        this.id_biaya = '';
        this.dataBiaya = {};
        this.dataPegawai = {};
        this.dataPosisi = {};
        this.dataUntuk = {};
        this.dataRincian = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.paramMap.subscribe(function (params) {
            console.log(params.get('id_biaya'));
            if (params.get('id_biaya')) {
                _this.id_biaya = params.get('id_biaya');
            }
            _this.getDetailBiaya();
            _this.getRincianBiaya();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailBiaya();
                _this.getRincianBiaya();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailBiaya = function () {
        var _this = this;
        this.spinner.show();
        this.gaBiayaService.getGaBiayasId(this.id_biaya).subscribe(function (data) {
            _this.dataBiaya = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getPosisi(data.data.id_pegawai);
            _this.getUntuk(data.data.id_untuk);
            _this.params = {
                id: data.data.id_biaya,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_biaya"
            };
            _this.standarApprovalService.param.next(_this.params);
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
    DetailComponent.prototype.getRincianBiaya = function () {
        var _this = this;
        this.gaBiayaRincianService.getGaBiayaRincians(JSON.stringify({ id_biaya: this.id_biaya })).subscribe(function (res) {
            _this.dataRincian = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_biaya })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/request/module/biaya/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaRincianService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/ga/request/biaya/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaUntukService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaBiayaRincianService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/biaya/edit/edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/edit/edit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL3JlcXVlc3QvYmlheWEvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/request/biaya/edit/edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/edit/edit.component.ts ***!
  \***************************************************************/
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
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(gaUntukService, gaBiayaService, gaBiayaRincianService, direktoriPegawaiMasterService, spinner, notification, fb, pesan, router, activatedRoute, singleUploadService) {
        this.gaUntukService = gaUntukService;
        this.gaBiayaService = gaBiayaService;
        this.gaBiayaRincianService = gaBiayaRincianService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.dataBiaya = {};
        this.dataRincian = [];
        this.id_biaya = '';
        this.toogleUpload = false;
        this.listPegawai = [];
        this.listUntuk = [];
        //----------Rincian-----------------
        this.keperluan = '';
        this.nilai = '';
        this.listRincian = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_biaya = this.activatedRoute.snapshot.paramMap.get('id_biaya');
        this.getPreeData();
        this.form();
        this.getData();
        this.getRincian();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'ga_biaya.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_document: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.gaUntukService.getGaUntuks().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    EditComponent.prototype.tambahRincian = function () {
        var _this = this;
        if (this.keperluan == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaBiayaRincianService
            .postGaBiayaRincians({
            id_biaya: this.id_biaya,
            keperluan: this.keperluan,
            nilai: this.nilai,
        })
            .subscribe(function (res) {
            _this.getRincian();
        });
    };
    EditComponent.prototype.getRincian = function () {
        var _this = this;
        var filter = {
            id_biaya: this.id_biaya,
        };
        this.gaBiayaRincianService.getGaBiayaRincians(JSON.stringify(filter)).subscribe(function (res) {
            _this.listRincian = res.data;
        });
    };
    EditComponent.prototype.deleteRincian = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaBiayaRincianService.deleteGaBiayaRinciansId(id).subscribe(function (data) {
            _this.getRincian();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaBiayaService.getGaBiayasId(this.id_biaya).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.singleUploadService.param.next({
                for_module: "ga_biaya",
                for_table: "erp_ga.biaya",
                for_module_id: data.data.id_biaya
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_biaya: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_document: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.getNilai = function (key) {
        return (key).value;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataBiaya = this.dataForm.value;
        this.gaBiayaService.putGaBiayasId({ id: this.id_biaya, body: this.dataBiaya }).subscribe(function (data) {
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
        this.router.navigate(['/ga/module/biaya/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaRincianService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/ga/request/biaya/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaUntukService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaRincianService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/biaya/list/list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/list/list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL3JlcXVlc3QvYmlheWEvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/request/biaya/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/request/biaya/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(gaBiayaService, spinner, nzMessageService, pesan) {
        this.gaBiayaService = gaBiayaService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.pesan = pesan;
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
        this.gaBiayaService
            .getGaBiayas(JSON.stringify({
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
            console.log(data.data);
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaBiayaService.deleteGaBiayasId(id).subscribe(function (data) {
            _this.searchData();
        }, function (err) {
            _this.pesan.pesanWarningForm('Data tidak boleh di delete');
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/biaya/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/ga/request/biaya/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaBiayaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=biaya-biaya-module.js.map