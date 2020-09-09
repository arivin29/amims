(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-complaints-complaints-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Complaint</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Title</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert title\" formControlName=\"judul\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    (ngModelChange)=\"toogleShow()\" formControlName=\"type_request\">\r\n                                    <nz-option nzLabel=\"Asset\" nzValue=\"Asset\"></nz-option>\r\n                                    <nz-option nzLabel=\"Others\" nzValue=\"Others\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request For</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    formControlName=\"jenis\">\r\n                                    <nz-option nzLabel=\"HR\" nzValue=\"HR\"></nz-option>\r\n                                    <nz-option nzLabel=\"GA\" nzValue=\"GA\"></nz-option>\r\n                                    <nz-option nzLabel=\"IT\" nzValue=\"IT\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>To departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose departemen\"\r\n                                    formControlName=\"departemen_tujuan\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Urgency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select urgency kategory\"\r\n                                    formControlName=\"urgency\">\r\n                                    <nz-option nzLabel=\"Urgent\" nzValue=\"Urgent\"></nz-option>\r\n                                    <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Not urgent\" nzValue=\"Not urgent\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Priority</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                    formControlName=\"priority\">\r\n                                    <nz-option nzLabel=\"I\" nzValue=\"I\"></nz-option>\r\n                                    <nz-option nzLabel=\"II\" nzValue=\"II\"></nz-option>\r\n                                    <nz-option nzLabel=\"III\" nzValue=\"III\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAsset == true\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Asset</nz-form-label>\r\n                    <nz-form-control>\r\n                        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                            <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                [(ngModel)]=\"dataItem.sn\" />\r\n                        </nz-input-group>\r\n                        <ng-template #suffixIconButton>\r\n                            <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                        </ng-template>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Describe about your request\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Complain</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataTicket.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataTicket.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"14\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Requester</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Employee ID</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Request</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Title</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.judul}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Category</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.jenis}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.type_request}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.tanggal_diajukan | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Uregency</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.urgency}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Priority</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.priority}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">To departement</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataDepartemen.nama_departemen}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Description</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.keterangan}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"10\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h6>Status\r\n                            <nz-tag style=\"float: right;\" [nzColor]=\"dataTicket.status | status\">\r\n                                {{ dataTicket.status | titlecase }}\r\n                            </nz-tag>\r\n                        </h6><br>\r\n                        <erp-approval-standar></erp-approval-standar>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <h6>Activities</h6><br><br>\r\n                        <nz-timeline nzMode=\"left\">\r\n                            <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                                <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                        </nz-timeline>\r\n                        <ng-template #dotTemplate>\r\n                            <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                        </ng-template>\r\n                    </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"dataTicket.id_asset\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Asset</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                    {{dataModel.life_limit_var}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.sn}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Status</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataStatus.status}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_date | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_number}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.price}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.qty}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Complaint</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Title</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert title\" formControlName=\"judul\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    (ngModelChange)=\"toogleShow()\" formControlName=\"type_request\">\r\n                                    <nz-option nzLabel=\"Asset\" nzValue=\"Asset\"></nz-option>\r\n                                    <nz-option nzLabel=\"Others\" nzValue=\"Others\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request For</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    formControlName=\"jenis\">\r\n                                    <nz-option nzLabel=\"HR\" nzValue=\"HR\"></nz-option>\r\n                                    <nz-option nzLabel=\"GA\" nzValue=\"GA\"></nz-option>\r\n                                    <nz-option nzLabel=\"IT\" nzValue=\"IT\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>To departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose departemen\"\r\n                                    formControlName=\"departemen_tujuan\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Urgency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select urgency kategory\"\r\n                                    formControlName=\"urgency\">\r\n                                    <nz-option nzLabel=\"Urgent\" nzValue=\"Urgent\"></nz-option>\r\n                                    <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Not urgent\" nzValue=\"Not urgent\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Priority</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                    formControlName=\"priority\">\r\n                                    <nz-option nzLabel=\"I\" nzValue=\"I\"></nz-option>\r\n                                    <nz-option nzLabel=\"II\" nzValue=\"II\"></nz-option>\r\n                                    <nz-option nzLabel=\"III\" nzValue=\"III\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAsset == true\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Asset</nz-form-label>\r\n                    <nz-form-control>\r\n                        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                            <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                [(ngModel)]=\"dataItem.sn\" />\r\n                        </nz-input-group>\r\n                        <ng-template #suffixIconButton>\r\n                            <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                        </ng-template>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Describe about your request\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Complaints</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"listData\" [nzShowPagination]=\"false\"           >\r\n            <thead  (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"judul\">Title</th>\r\n                    <th nzShowSort nzSortKey=\"jenis\">Request For</th>\r\n                    <th nzShowSort nzSortKey=\"type_request\">Request type</th>\r\n                    <th nzShowSort nzSortKey=\"nama_departemen\">To Departemen</th>\r\n                    <th nzShowSort nzSortKey=\"created_at\">Request date</th>\r\n                    <th nzShowSort nzSortKey=\"urgency\">Urgency</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>\r\n                        <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                    </td>\r\n                    <td>{{ data.judul }}</td>\r\n                    <td>{{ data.jenis }}</td>\r\n                    <td>{{ data.type_request }}</td>\r\n                    <td>{{ data.nama_departemen }}</td>\r\n                    <td>{{ data.created_at | date }}</td>\r\n                    <td>{{ data.urgency }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_ticketing]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail',data.id_ticketing]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_ticketing)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/add/add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/complaints/add/add.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Complaint</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Title</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert title\" formControlName=\"judul\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    (ngModelChange)=\"toogleShow()\" formControlName=\"type_request\">\r\n                                    <nz-option nzLabel=\"Asset\" nzValue=\"Asset\"></nz-option>\r\n                                    <nz-option nzLabel=\"Others\" nzValue=\"Others\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request For</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    formControlName=\"jenis\">\r\n                                    <nz-option nzLabel=\"HR\" nzValue=\"HR\"></nz-option>\r\n                                    <nz-option nzLabel=\"GA\" nzValue=\"GA\"></nz-option>\r\n                                    <nz-option nzLabel=\"IT\" nzValue=\"IT\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>To departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose departemen\"\r\n                                    formControlName=\"departemen_tujuan\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Urgency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select urgency kategory\"\r\n                                    formControlName=\"urgency\">\r\n                                    <nz-option nzLabel=\"Urgent\" nzValue=\"Urgent\"></nz-option>\r\n                                    <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Not urgent\" nzValue=\"Not urgent\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Priority</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                    formControlName=\"priority\">\r\n                                    <nz-option nzLabel=\"I\" nzValue=\"I\"></nz-option>\r\n                                    <nz-option nzLabel=\"II\" nzValue=\"II\"></nz-option>\r\n                                    <nz-option nzLabel=\"III\" nzValue=\"III\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAsset == true\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Asset</nz-form-label>\r\n                    <nz-form-control>\r\n                        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                            <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                [(ngModel)]=\"dataItem.sn\" />\r\n                        </nz-input-group>\r\n                        <ng-template #suffixIconButton>\r\n                            <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                        </ng-template>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Describe about your request\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/detail/detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/complaints/detail/detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Complain</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataTicket.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataTicket.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Requester</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataKantor.nama_kantor}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Request</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Judul</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.judul}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Jenis</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.jenis}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request type</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.type_request}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.tanggal_diajukan | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Uregency</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.urgency}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Priority</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataTicket.priority}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">To departement</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataDepartemen.nama_departemen}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <tr>\r\n                        <h6 class=\"text-gray-6 pl-0\">Deskripsi :</h6>\r\n                    </tr>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <tr>\r\n                                <td class=\"pr-0 text-left text-dark\">{{dataTicket.keterangan}}</td>\r\n                            </tr>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                            <div class=\"d-flex flex-column justify-content-center\">\r\n                                <erp-approval-standar></erp-approval-standar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"card\" *ngIf=\"dataTicket.jenis == 'Asset'\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Asset</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                    {{dataModel.life_limit_var}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.sn}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Status</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataStatus.status}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_date | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_number}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.price}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataAsset.qty}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/edit/edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/complaints/edit/edit.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Complaint</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Title</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert title\" formControlName=\"judul\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Type</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    (ngModelChange)=\"toogleShow()\" formControlName=\"type_request\">\r\n                                    <nz-option nzLabel=\"Asset\" nzValue=\"Asset\"></nz-option>\r\n                                    <nz-option nzLabel=\"Others\" nzValue=\"Others\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request For</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                    formControlName=\"jenis\">\r\n                                    <nz-option nzLabel=\"HR\" nzValue=\"HR\"></nz-option>\r\n                                    <nz-option nzLabel=\"GA\" nzValue=\"GA\"></nz-option>\r\n                                    <nz-option nzLabel=\"IT\" nzValue=\"IT\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>To departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose departemen\"\r\n                                    formControlName=\"departemen_tujuan\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Urgency</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select urgency kategory\"\r\n                                    formControlName=\"urgency\">\r\n                                    <nz-option nzLabel=\"Urgent\" nzValue=\"Urgent\"></nz-option>\r\n                                    <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                    <nz-option nzLabel=\"Not urgent\" nzValue=\"Not urgent\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Priority</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                    formControlName=\"priority\">\r\n                                    <nz-option nzLabel=\"I\" nzValue=\"I\"></nz-option>\r\n                                    <nz-option nzLabel=\"II\" nzValue=\"II\"></nz-option>\r\n                                    <nz-option nzLabel=\"III\" nzValue=\"III\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAsset == true\">\r\n                <nz-form-item>\r\n                    <nz-form-label>Asset</nz-form-label>\r\n                    <nz-form-control>\r\n                        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                            <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                [(ngModel)]=\"dataItem.sn\" />\r\n                        </nz-input-group>\r\n                        <ng-template #suffixIconButton>\r\n                            <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                        </ng-template>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Describe about your request\" formControlName=\"keterangan\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/request/complaints/list/list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Complaints</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"listData\" [nzShowPagination]=\"false\"\r\n           >\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                    <th>Kantor</th>\r\n                    <th>Judul</th>\r\n                    <th>Request For</th>\r\n                    <th>Request type</th>\r\n                    <th>To Departemen</th>\r\n                    <th>Request date</th>\r\n                    <th>Urgency</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.status }}</td>\r\n                    <td>{{ data.nomor }}</td>\r\n                    <td>{{ data.nama_kantor }}</td>\r\n                    <td>{{ data.judul }}</td>\r\n                    <td>{{ data.jenis }}</td>\r\n                    <td>{{ data.type_request }}</td>\r\n                    <td>{{ data.nama_departemen }}</td>\r\n                    <td>{{ data.tanggal_diajukan | date }}</td>\r\n                    <td>{{ data.urgency }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_ticketing]\">Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail',data.id_ticketing]\">detail\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_ticketing)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvY29tcGxhaW50cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");












var AddComponent = /** @class */ (function () {
    function AddComponent(gaTicketingService, assetAssetService, companyDepartemenService, companyKantorService, spinner, notification, fb, pegawaiDetailService, pesan, router, drawerService) {
        this.gaTicketingService = gaTicketingService;
        this.assetAssetService = assetAssetService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.dataTicket = {};
        this.toogleAsset = false;
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.id_pegawai = '';
        this.id_asset = '';
        this.dataItem = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
        this.form();
    };
    AddComponent.prototype.toogleShow = function () {
        this.toogleAsset = false;
        if (this.dataForm.value.type_request == 'Asset') {
            this.toogleAsset = true;
        }
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            judul: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            urgency: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_diajukan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            departemen_tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    AddComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__["SearchAssetComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_asset = data;
                _this.dataForm.patchValue({ id_asset: _this.id_asset });
                _this.beforeAsset();
            }
        });
    };
    AddComponent.prototype.beforeAsset = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.id_asset = data.data.id_asset;
            console.log(_this.dataItem);
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
        this.dataTicket = this.dataForm.value;
        this.gaTicketingService.postGaTicketings(this.dataTicket).subscribe(function (data) {
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'complaints']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/complaints-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/complaints-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComplaintsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsRoutingModule", function() { return ComplaintsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.ts");







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
var ComplaintsRoutingModule = /** @class */ (function () {
    function ComplaintsRoutingModule() {
    }
    ComplaintsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComplaintsRoutingModule);
    return ComplaintsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/complaints.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/complaints.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsModule", function() { return ComplaintsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/complaints-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");















var ComplaintsModule = /** @class */ (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__["SearchItemModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ],
            entryComponents: []
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvY29tcGxhaW50cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");











var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaTicketingService, vendorVendorService, assetAssetService, assetModelxService, assetStatusService, assetPartIdService, vendorManufactureService, direktoriPegawaiService, companyKantorService, companyDepartemenService, pegawaiDetailService, spinner, notification, pesan, router, activatedRoute, toolsLogFlowService, standarApprovalService) {
        this.gaTicketingService = gaTicketingService;
        this.vendorVendorService = vendorVendorService;
        this.assetAssetService = assetAssetService;
        this.assetModelxService = assetModelxService;
        this.assetStatusService = assetStatusService;
        this.assetPartIdService = assetPartIdService;
        this.vendorManufactureService = vendorManufactureService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.companyKantorService = companyKantorService;
        this.companyDepartemenService = companyDepartemenService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.dataTicket = {};
        this.id_ticketing = '';
        this.id_pegawai = '';
        this.dataPegawai = {};
        this.dataKantor = {};
        this.dataDepartemen = {};
        this.dataModel = {};
        this.dataStatus = {};
        this.dataAsset = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id_ticketing = params.get('id');
            }
            _this.getDetailTicket();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailTicket();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailTicket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService.getGaTicketingsId(this.id_ticketing).subscribe(function (data) {
            _this.dataTicket = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getkantor(data.data.id_kantor);
            _this.getDepartemen(data.data.departemen_tujuan);
            _this.getAsset(data.data.id_asset);
            _this.spinner.hide();
            _this.params = {
                id: data.data.id_ticketing,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_ticketing"
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
    DetailComponent.prototype.getkantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (departemen_tujuan) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(departemen_tujuan).subscribe(function (data) {
            _this.dataDepartemen = data.data;
        });
    };
    DetailComponent.prototype.getAsset = function (id_asset) {
        var _this = this;
        this.assetAssetService.getAssetAssetsId(id_asset).subscribe(function (data) {
            _this.dataAsset = data.data;
            _this.getModel(_this.dataAsset.id_model);
            _this.getStatus(_this.dataAsset.id_status);
            _this.getVendor(_this.dataAsset.id_vendor);
        });
    };
    DetailComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getManufacture(_this.dataModel.id_manufacture);
        });
    };
    DetailComponent.prototype.getPartId = function (id_part_id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id_part_id).subscribe(function (data) {
            _this.dataType = data.data;
        });
    };
    DetailComponent.prototype.getManufacture = function (id_manufacture) {
        var _this = this;
        this.vendorManufactureService.getVendorManufacturesId(id_manufacture).subscribe(function (data) {
            _this.dataManufacture = data.data;
        });
    };
    DetailComponent.prototype.getStatus = function (id_status) {
        var _this = this;
        this.assetStatusService.getAssetStatusesId(id_status).subscribe(function (data) {
            _this.dataStatus = data.data;
        });
    };
    DetailComponent.prototype.getVendor = function (id_vendor) {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_ticketing })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'complaints']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyDepartemenService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyDepartemenService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvY29tcGxhaW50cy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");












var EditComponent = /** @class */ (function () {
    function EditComponent(gaTicketingService, assetAssetService, companyDepartemenService, companyKantorService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute, drawerService) {
        this.gaTicketingService = gaTicketingService;
        this.assetAssetService = assetAssetService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.drawerService = drawerService;
        this.dataTicket = {};
        this.toogleAsset = false;
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.id_pegawai = '';
        this.id_ticketing = '';
        this.id_asset = '';
        this.dataItem = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.id_ticketing = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPreeData();
        this.getData();
        this.form();
    };
    EditComponent.prototype.toogleShow = function () {
        this.toogleAsset = false;
        if (this.dataForm.value.type_request == 'Asset') {
            this.toogleAsset = true;
        }
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaTicketingService.getGaTicketingsId(this.id_ticketing).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.id_pegawai),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            judul: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            type_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            urgency: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_diajukan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            departemen_tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_ticketing: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_close: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    EditComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__["SearchAssetComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_asset = data;
                _this.dataForm.patchValue({ id_asset: _this.id_asset });
                _this.beforeAsset();
            }
        });
    };
    EditComponent.prototype.beforeAsset = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.id_asset = data.data.id_asset;
            console.log(_this.dataItem);
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
        this.dataTicket = this.dataForm.value;
        this.gaTicketingService.putGaTicketingsId({ id: this.id_ticketing, body: this.dataTicket }).subscribe(function (data) {
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'complaints']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3JlcXVlc3QvY29tcGxhaW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(gaTicketingService, spinner, nzMessageService, pegawaiDetailService) {
        this.gaTicketingService = gaTicketingService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.pegawaiDetailService = pegawaiDetailService;
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
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService
            .getGaTicketings(JSON.stringify({ id_pegawai: this.id_pegawai, sortKey: this.sortKey, sortValue: this.sortValue }))
            .subscribe(function (res) {
            _this.listData = res.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getData();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService
            .deleteGaTicketingsId(id)
            .subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/request/complaints/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/add/add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/add/add.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC9jb21wbGFpbnRzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/request/complaints/add/add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/add/add.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");












var AddComponent = /** @class */ (function () {
    function AddComponent(gaTicketingService, assetAssetService, companyDepartemenService, companyKantorService, spinner, notification, fb, pegawaiDetailService, pesan, router, drawerService) {
        this.gaTicketingService = gaTicketingService;
        this.assetAssetService = assetAssetService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.dataTicket = {};
        this.toogleAsset = false;
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.id_pegawai = '';
        this.id_asset = '';
        this.dataItem = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
        this.form();
    };
    AddComponent.prototype.toogleShow = function () {
        this.toogleAsset = false;
        if (this.dataForm.value.type_request == 'Asset') {
            this.toogleAsset = true;
        }
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            judul: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            type_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            urgency: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_diajukan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            departemen_tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    AddComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__["SearchAssetComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_asset = data;
                _this.dataForm.patchValue({ id_asset: _this.id_asset });
                _this.beforeAsset();
            }
        });
    };
    AddComponent.prototype.beforeAsset = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.id_asset = data.data.id_asset;
            console.log(_this.dataItem);
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
        this.dataTicket = this.dataForm.value;
        this.gaTicketingService.postGaTicketings(this.dataTicket).subscribe(function (data) {
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
        this.router.navigate(['/profile/complaints/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/request/complaints/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/complaints-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/complaints-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ComplaintsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsRoutingModule", function() { return ComplaintsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/request/complaints/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/request/complaints/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/request/complaints/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/request/complaints/add/add.component.ts");







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
var ComplaintsRoutingModule = /** @class */ (function () {
    function ComplaintsRoutingModule() {
    }
    ComplaintsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComplaintsRoutingModule);
    return ComplaintsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/complaints.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/complaints.module.ts ***!
  \***********************************************************************/
/*! exports provided: ComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsModule", function() { return ComplaintsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints-routing.module */ "./src/app/pages/profile/request/complaints/complaints-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/request/complaints/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/request/complaints/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/request/complaints/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/profile/request/complaints/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");














var ComplaintsModule = /** @class */ (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _complaints_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplaintsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_10__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_13__["SearchItemModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ],
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/detail/detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/detail/detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC9jb21wbGFpbnRzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/request/complaints/detail/detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/detail/detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");











var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaTicketingService, vendorVendorService, assetAssetService, assetModelxService, assetStatusService, assetPartIdService, vendorManufactureService, direktoriPegawaiService, companyKantorService, companyDepartemenService, pegawaiDetailService, spinner, notification, pesan, router, activatedRoute, toolsLogFlowService, standarApprovalService) {
        this.gaTicketingService = gaTicketingService;
        this.vendorVendorService = vendorVendorService;
        this.assetAssetService = assetAssetService;
        this.assetModelxService = assetModelxService;
        this.assetStatusService = assetStatusService;
        this.assetPartIdService = assetPartIdService;
        this.vendorManufactureService = vendorManufactureService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.companyKantorService = companyKantorService;
        this.companyDepartemenService = companyDepartemenService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.dataTicket = {};
        this.id_ticketing = '';
        this.id_pegawai = '';
        this.dataPegawai = {};
        this.dataKantor = {};
        this.dataDepartemen = {};
        this.dataModel = {};
        this.dataStatus = {};
        this.dataAsset = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id_ticketing = params.get('id');
            }
            _this.getDetailTicket();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailTicket();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailTicket = function () {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService.getGaTicketingsId(this.id_ticketing).subscribe(function (data) {
            _this.dataTicket = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getkantor(data.data.id_kantor);
            _this.getDepartemen(data.data.departemen_tujuan);
            _this.getAsset(data.data.id_asset);
            _this.params = {
                id: data.data.id_ticketing,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_ticketing"
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
    DetailComponent.prototype.getkantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (departemen_tujuan) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(departemen_tujuan).subscribe(function (data) {
            _this.dataDepartemen = data.data;
        });
    };
    DetailComponent.prototype.getAsset = function (id_asset) {
        var _this = this;
        this.assetAssetService.getAssetAssetsId(id_asset).subscribe(function (data) {
            _this.dataAsset = data.data;
            _this.getModel(_this.dataAsset.id_model);
            _this.getStatus(_this.dataAsset.id_status);
            _this.getVendor(_this.dataAsset.id_vendor);
        });
    };
    DetailComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getManufacture(_this.dataModel.id_manufacture);
        });
    };
    DetailComponent.prototype.getPartId = function (id_part_id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id_part_id).subscribe(function (data) {
            _this.dataType = data.data;
        });
    };
    DetailComponent.prototype.getManufacture = function (id_manufacture) {
        var _this = this;
        this.vendorManufactureService.getVendorManufacturesId(id_manufacture).subscribe(function (data) {
            _this.dataManufacture = data.data;
        });
    };
    DetailComponent.prototype.getStatus = function (id_status) {
        var _this = this;
        this.assetStatusService.getAssetStatusesId(id_status).subscribe(function (data) {
            _this.dataStatus = data.data;
        });
    };
    DetailComponent.prototype.getVendor = function (id_vendor) {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_ticketing })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/complaints/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyDepartemenService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/profile/request/complaints/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyDepartemenService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_10__["PegawaiDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_9__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/edit/edit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/edit/edit.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC9jb21wbGFpbnRzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/request/complaints/edit/edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/edit/edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");












var EditComponent = /** @class */ (function () {
    function EditComponent(gaTicketingService, assetAssetService, companyDepartemenService, companyKantorService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute, drawerService) {
        this.gaTicketingService = gaTicketingService;
        this.assetAssetService = assetAssetService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.drawerService = drawerService;
        this.dataTicket = {};
        this.toogleAsset = false;
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.id_pegawai = '';
        this.id_ticketing = '';
        this.id_asset = '';
        this.dataItem = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.id_ticketing = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPreeData();
        this.getData();
        this.form();
    };
    EditComponent.prototype.toogleShow = function () {
        this.toogleAsset = false;
        if (this.dataForm.value.type_request == 'Asset') {
            this.toogleAsset = true;
        }
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaTicketingService.getGaTicketingsId(this.id_ticketing).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.id_pegawai),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            judul: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            type_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            urgency: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_diajukan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            departemen_tujuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_ticketing: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_close: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    EditComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_11__["SearchAssetComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_asset = data;
                _this.dataForm.patchValue({ id_asset: _this.id_asset });
                _this.beforeAsset();
            }
        });
    };
    EditComponent.prototype.beforeAsset = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.id_asset = data.data.id_asset;
            console.log(_this.dataItem);
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
        this.dataTicket = this.dataForm.value;
        this.gaTicketingService.putGaTicketingsId({ id: this.id_ticketing, body: this.dataTicket }).subscribe(function (data) {
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
        this.router.navigate(['/profile/complaints/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/request/complaints/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/request/complaints/list/list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/list/list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcmVxdWVzdC9jb21wbGFpbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/request/complaints/list/list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/request/complaints/list/list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(gaTicketingService, spinner, nzMessageService, pegawaiDetailService) {
        this.gaTicketingService = gaTicketingService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.pegawaiDetailService = pegawaiDetailService;
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
        this.getKeluarga();
    };
    ListComponent.prototype.getKeluarga = function () {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService
            .getGaTicketings(JSON.stringify({ id_pegawai: this.id_pegawai }))
            .subscribe(function (res) {
            _this.listData = res.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService
            .deleteGaTicketingsId(id)
            .subscribe(function (data) {
            _this.getKeluarga();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/request/complaints/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/request/complaints/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=request-complaints-complaints-module.js.map