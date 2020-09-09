(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-item/search-item/search-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-item/search-item/search-item.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"10\">\r\n        <nz-form-item>\r\n            <nz-form-label>Keyword / Part Number</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"10\">\r\n        <nz-form-item>\r\n            <nz-form-label>Part</nz-form-label>\r\n            <nz-form-control>\r\n                <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Choose part id\" [(ngModel)]=\"id_part_id\">\r\n                    <nz-option *ngFor=\"let item of listPartId\" nzValue=\"{{item.id_part_id}}\" nzLabel=\"{{item.part_id}} \"></nz-option>\r\n                </nz-select>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-label>Search</nz-form-label><br>\r\n        <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon nzType=\"search\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n        <tr>\r\n            <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n            <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n            <th nzShowSort nzSortKey=\"name_manufacture\">Manufacture</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Type</th>\r\n            <th class=\"text-right\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of ajaxTable.data\">\r\n            <td>{{ data.part_number }} </td>\r\n            <td>{{ data.keyword }}</td>\r\n            <td>{{ data.name_manufacture }}</td>\r\n            <td>{{ data.part_id }}</td>\r\n            <td class=\"text-right\">\r\n                <button nz-button nzType=\"primary\" (click)=\"selectModel(data.id_model)\" nzShape=\"circle\"><i nz-icon nzType=\"check\"></i></button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/add/add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/request/add/add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Request</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Pegawai</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Pegawai\"\r\n                                    formControlName=\"id_pegawai\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Office\"\r\n                                    formControlName=\"kantor_request\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keperluan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert cost\" formControlName=\"request_for\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Choose date\"\r\n                                    formControlName=\"tanggal_request\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h4 class=\"mb=0\">Request Item</h4>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_model\">\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keyword</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Part Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Qty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" type=\"number\" [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            <th class=\"bg-transparent text-sentencase text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteItem(data.id_purchase_request_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/detail/detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/request/detail/detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Purchased</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataRequest.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataRequest.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataKantor.nama_kantor}}</td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataRequest.tanggal_request | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Keperluan</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataRequest.request_for}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h5 class=\"mb=0\">Purchased Item</h5>\r\n                        </div>\r\n                    </div>\r\n                    <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"true\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable1.data\">\r\n                                <td>{{data.keyword}}</td>\r\n                                <td>{{data.part_number}}</td>\r\n                                <td>{{data.qty}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                            <div class=\"col-md-8 text-right\">\r\n                                <erp-approval-standar></erp-approval-standar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/request/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Request</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Pegawai</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Pegawai\"\r\n                                    formControlName=\"id_pegawai\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Office\"\r\n                                    formControlName=\"kantor_request\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keperluan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert cost\" formControlName=\"request_for\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Choose date\"\r\n                                    formControlName=\"tanggal_request\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h4 class=\"mb=0\">Request Item</h4>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_model\">\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keyword</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Part Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Qty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" type=\"number\" [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            <th class=\"bg-transparent text-sentencase text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteItem(data.id_purchase_request_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/request/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Request</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Request\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Pegawai</th>\r\n                        <th>Kantor</th>\r\n                        <th>Tanggal request</th>\r\n                        <th>Keperluan</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.nama_kantor }}</td>\r\n                        <td>{{ data.tanggal_request | date }}</td>\r\n                        <td>{{ data.request_for }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_purchase_request]\">Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_purchase_request]\">detail\r\n                                    </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"delete(data.id_purchase_request)\"\r\n                                            (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/search-item/search-item.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/management/request/search-item/search-item.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"20\">\r\n        <nz-form-item>\r\n            <nz-form-label>Keyword / Part Number</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-label>Search</nz-form-label><br>\r\n        <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon nzType=\"search\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n        <tr>\r\n            <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n            <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n            <th nzShowSort nzSortKey=\"name_manufacture\">Manufacture</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Type</th>\r\n            <th class=\"text-right\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of ajaxTable.data\">\r\n            <td>{{ data.part_number }} </td>\r\n            <td>{{ data.keyword }}</td>\r\n            <td>{{ data.name_manufacture }}</td>\r\n            <td>{{ data.part_id }}</td>\r\n            <td class=\"text-right\">\r\n                <button nz-button nzType=\"primary\" (click)=\"selectModel(data.id_model)\" nzShape=\"circle\"><i nz-icon nzType=\"check\"></i></button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/add/add.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/request/add/add.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Request</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Pegawai</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Pegawai\"\r\n                                    formControlName=\"pegawai_request\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Office\"\r\n                                    formControlName=\"kantor_request\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keperluan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert cost\" formControlName=\"request_for\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Choose date\"\r\n                                    formControlName=\"tanggal_request\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h4 class=\"mb=0\">Request Item</h4>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_model\">\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keyword</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Part Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Qty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" type=\"number\" [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            <th class=\"bg-transparent text-sentencase text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteItem(data.id_purchase_request_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/detail/detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/request/detail/detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Purchased</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataRequest.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataRequest.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                    {{dataPegawai.nama_belakang}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataKantor.nama_kantor}}</td>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Request date</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataRequest.tanggal_request | date}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Keperluan</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataRequest.request_for}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h5 class=\"mb=0\">Purchased Item</h5>\r\n                        </div>\r\n                    </div>\r\n                    <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"true\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable1.data\">\r\n                                <td>{{data.keyword}}</td>\r\n                                <td>{{data.part_number}}</td>\r\n                                <td>{{data.qty}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                            <div class=\"col-md-8 text-right\">\r\n                                <erp-approval-standar></erp-approval-standar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/edit/edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/request/edit/edit.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Request</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Pegawai</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Pegawai\"\r\n                                    formControlName=\"id_pegawai\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Office</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose Office\"\r\n                                    formControlName=\"kantor_request\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <!-- <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keperluan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"insert cost\" formControlName=\"request_for\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div> -->\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Request Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Choose date\"\r\n                                    formControlName=\"tanggal_request\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h4 class=\"mb=0\">Request Item</h4>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_model\">\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Keyword</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Part Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Qty</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" type=\"number\" [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            <th class=\"bg-transparent text-sentencase text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteItem(data.id_purchase_request_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/request/list/list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Request</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Request\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Pegawai</th>\r\n                        <th>Kantor</th>\r\n                        <th>Tanggal request</th>\r\n                        <th>Keperluan</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.nama_kantor }}</td>\r\n                        <td>{{ data.tanggal_request | date }}</td>\r\n                        <td>{{ data.request_for }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_purchase_request]\">Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_purchase_request]\">detail\r\n                                    </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"delete(data.id_purchase_request)\"\r\n                                            (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/search-item/search-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/asset/request/search-item/search-item.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"20\">\r\n        <nz-form-item>\r\n            <nz-form-label>Keyword / Part Number</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-label>Search</nz-form-label><br>\r\n        <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon nzType=\"search\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n        <tr>\r\n            <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n            <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n            <th nzShowSort nzSortKey=\"name_manufacture\">Manufacture</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Type</th>\r\n            <th class=\"text-right\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of ajaxTable.data\">\r\n            <td>{{ data.part_number }} </td>\r\n            <td>{{ data.keyword }}</td>\r\n            <td>{{ data.name_manufacture }}</td>\r\n            <td>{{ data.part_id }}</td>\r\n            <td class=\"text-right\">\r\n                <button nz-button nzType=\"primary\" (click)=\"selectModel(data.id_model)\" nzShape=\"circle\"><i nz-icon nzType=\"check\"></i></button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/request.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/request/request.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/components/search-item/search-item/search-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/search-item/search-item/search-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-item/search-item/search-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-item/search-item/search-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");




var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent(drawerRef, assetModelxService, assetPartIdService) {
        this.drawerRef = drawerRef;
        this.assetModelxService = assetModelxService;
        this.assetPartIdService = assetPartIdService;
        this.value = '';
        this.listPartId = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
        this.id_part_id = null;
    }
    SearchItemComponent.prototype.ngOnInit = function () {
        this.searchData();
        this.getPartId();
    };
    SearchItemComponent.prototype.getPartId = function () {
        var _this = this;
        this.assetPartIdService.getAssetPartIds().subscribe(function (data) {
            _this.listPartId = data.data;
        });
    };
    SearchItemComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    SearchItemComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    SearchItemComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        var param = {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search,
            id_part_id: this.id_part_id,
        };
        if (!this.id_part_id) {
            delete param.id_part_id;
        }
        this.loading = true;
        this.assetModelxService
            .getAssetModelxes(JSON.stringify(param))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
        });
    };
    SearchItemComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearchItemComponent.prototype.selectModel = function (id_model) {
        this.value = id_model;
        this.close();
    };
    SearchItemComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchItemComponent.prototype, "value", void 0);
    SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'erp-search-item',
            template: __webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-item/search-item/search-item.component.html"),
            styles: [__webpack_require__(/*! ./search-item.component.scss */ "./src/app/components/search-item/search-item/search-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"]])
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/add/add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/management/request/add/add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvcmVxdWVzdC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/management/request/add/add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/management/request/add/add.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AddComponent = /** @class */ (function () {
    function AddComponent(gaPurchaseRequestItemService, gaPurchaseRequestService, direktoriPegawaiMasterService, companyKantorService, assetModelxService, spinner, notification, fb, pesan, router, drawerService) {
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listModel = [];
        // ## LIST ITEM -----------------------------------
        this.id_model = null;
        this.dataItem = {};
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
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.gaPurchaseRequestService.postGaPurchaseRequests(this.dataRequest).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_purchase_request = data.data.id_purchase_request;
            _this.getListItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            // kantor_request: new FormControl(''),
            id_purchase_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            // request_for: new FormControl(''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    AddComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_1__["SearchItemComponent"],
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
                _this.id_model = data;
                _this.beforeModel();
            }
        });
    };
    AddComponent.prototype.getListItem = function () {
        var _this = this;
        var param = {
            id_purchase_request: this.id_purchase_request
        };
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify(param)).subscribe(function (data) {
            _this.list_item = data.data;
        });
    };
    AddComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestItemService.deleteGaPurchaseRequestItemsId(id).subscribe(function (data) {
            _this.getListItem();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.qty = 1;
            console.log(_this.dataItem);
        });
    };
    AddComponent.prototype.simpan_item = function () {
        var _this = this;
        if (this.dataItem.qty < 1) {
            alert('tidak boleh kosong');
            return false;
        }
        var param = {
            id_model: this.dataItem.id_model,
            qty: this.dataItem.qty,
            id_purchase_request: this.id_purchase_request
        };
        this.spinner.show();
        //simpan ka server
        this.gaPurchaseRequestItemService.postGaPurchaseRequestItems(param).subscribe(function (data) {
            _this.id_model = null;
            _this.spinner.hide();
            _this.getListItem();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    // ## END  LIST ITEM -----------------------------------
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        if (this.list_item.length < 1) {
            this.pesan.pesanWarningForm('Anda harus pilih Item Pembelian!');
            this.spinner.hide();
            return;
        }
        this.dataRequest = this.dataForm.value;
        this.gaPurchaseRequestService.putGaPurchaseRequestsId({ id: this.id_purchase_request, body: this.dataRequest }).subscribe(function (data) {
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
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/asset/management/request/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestItemService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/detail/detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/detail/detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvcmVxdWVzdC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/management/request/detail/detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/detail/detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");










var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaPurchaseRequestService, gaPurchaseRequestItemService, direktoriPegawaiMasterService, companyKantorService, toolsLogFlowService, assetModelxService, spinner, notification, pesan, router, activatedRoute, standarApprovalService) {
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.standarApprovalService = standarApprovalService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.dataPegawai = {};
        this.dataKantor = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params.get('id_purchase_request'));
            if (params.get('id_purchase_request')) {
                _this.id_purchase_request = params.get('id_purchase_request');
            }
            _this.getDetailRequest();
            _this.getDetailItem();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailRequest();
                _this.getDetailItem();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailRequest = function () {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestService.getGaPurchaseRequestsId(this.id_purchase_request).subscribe(function (data) {
            _this.dataRequest = data.data;
            _this.getPegawai(data.data['pegawai_request']);
            _this.getkantor(data.data['kantor_request']);
            _this.spinner.hide();
            _this.params = {
                id: data.data.id_purchase_request,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_purchase_request"
            };
            _this.standarApprovalService.param.next(_this.params);
        });
    };
    DetailComponent.prototype.getPegawai = function (pegawai_request) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(pegawai_request).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getkantor = function (kantor_request) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(kantor_request).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailComponent.prototype.getDetailItem = function () {
        var _this = this;
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify({ id_purchase_request: this.id_purchase_request })).subscribe(function (res) {
            _this.list_item = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_purchase_request })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__["ToolsLogFlowService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/asset/management/request/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__["ToolsLogFlowService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvcmVxdWVzdC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/management/request/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/management/request/edit/edit.component.ts ***!
  \***********************************************************************/
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
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(gaPurchaseRequestItemService, gaPurchaseRequestService, direktoriPegawaiMasterService, companyKantorService, assetModelxService, spinner, notification, fb, pesan, router, activatedRoute, drawerService) {
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.drawerService = drawerService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listModel = [];
        // ## LIST ITEM -----------------------------------
        this.id_model = null;
        this.dataItem = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_purchase_request = this.activatedRoute.snapshot.paramMap.get('id_purchase_request');
        this.getPreeData();
        this.form();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaPurchaseRequestService.getGaPurchaseRequestsId(this.id_purchase_request).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.getListItem();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            // kantor_request: new FormControl(''),
            id_purchase_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            // request_for: new FormControl(''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    EditComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__["SearchItemComponent"],
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
                _this.id_model = data;
                _this.beforeModel();
            }
        });
    };
    EditComponent.prototype.getListItem = function () {
        var _this = this;
        var param = {
            id_purchase_request: this.id_purchase_request
        };
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify(param)).subscribe(function (data) {
            _this.list_item = data.data;
        });
    };
    EditComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestItemService.deleteGaPurchaseRequestItemsId(id).subscribe(function (data) {
            _this.getListItem();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.qty = 1;
            console.log(_this.dataItem);
        });
    };
    EditComponent.prototype.simpan_item = function () {
        var _this = this;
        if (this.dataItem.qty < 1) {
            alert('tidak boleh kosong');
            return false;
        }
        var param = {
            id_model: this.dataItem.id_model,
            qty: this.dataItem.qty,
            id_purchase_request: this.id_purchase_request
        };
        this.spinner.show();
        //simpan ka server
        this.gaPurchaseRequestItemService.postGaPurchaseRequestItems(param).subscribe(function (data) {
            _this.id_model = null;
            _this.spinner.hide();
            _this.getListItem();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    // ## END  LIST ITEM -----------------------------------
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        if (this.list_item.length < 1) {
            this.pesan.pesanWarningForm('Anda harus pilih Item Pembelian!');
            this.spinner.hide();
            return;
        }
        this.dataRequest = this.dataForm.value;
        this.gaPurchaseRequestService.putGaPurchaseRequestsId({ id: this.id_purchase_request, body: this.dataRequest }).subscribe(function (data) {
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
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/asset/management/request/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvcmVxdWVzdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/management/request/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/management/request/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(gaPurchaseRequestService, spinner, nzMessageService, pesan) {
        this.gaPurchaseRequestService = gaPurchaseRequestService;
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
        this.gaPurchaseRequestService
            .getGaPurchaseRequests(JSON.stringify({
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
        this.gaPurchaseRequestService.deleteGaPurchaseRequestsId(id).subscribe(function (data) {
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
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/asset/management/request/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/request-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/request-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/management/request/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/management/request/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/management/request/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/management/request/detail/detail.component.ts");







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
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_purchase_request',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'detail/:id_purchase_request',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"]
    }
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/request.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/management/request/request.module.ts ***!
  \******************************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/pages/asset/management/request/request-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/management/request/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/management/request/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/management/request/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/management/request/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-item/search-item.component */ "./src/app/pages/asset/management/request/search-item/search-item.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");














var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__["SearchItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _request_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__["ApprovalModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ],
            entryComponents: [
                _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__["SearchItemComponent"]
            ]
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/management/request/search-item/search-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/search-item/search-item.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21hbmFnZW1lbnQvcmVxdWVzdC9zZWFyY2gtaXRlbS9zZWFyY2gtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/management/request/search-item/search-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/management/request/search-item/search-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");




var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent(drawerRef, assetModelxService) {
        this.drawerRef = drawerRef;
        this.assetModelxService = assetModelxService;
        this.value = '';
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    SearchItemComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    SearchItemComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    SearchItemComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    SearchItemComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetModelxService
            .getAssetModelxes(JSON.stringify({
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
        });
    };
    SearchItemComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearchItemComponent.prototype.selectModel = function (id_model) {
        this.value = id_model;
        this.close();
    };
    SearchItemComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchItemComponent.prototype, "value", void 0);
    SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-item',
            template: __webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/management/request/search-item/search-item.component.html"),
            styles: [__webpack_require__(/*! ./search-item.component.scss */ "./src/app/pages/asset/management/request/search-item/search-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"]])
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/add/add.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/add/add.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L3JlcXVlc3QvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/asset/request/add/add.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/add/add.component.ts ***!
  \*************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AddComponent = /** @class */ (function () {
    function AddComponent(gaPurchaseRequestItemService, gaPurchaseRequestService, direktoriPegawaiMasterService, companyKantorService, assetModelxService, spinner, notification, fb, pesan, router, drawerService) {
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listModel = [];
        // ## LIST ITEM -----------------------------------
        this.id_model = null;
        this.dataItem = {};
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
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.gaPurchaseRequestService.postGaPurchaseRequests(this.dataRequest).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_purchase_request = data.data.id_purchase_request;
            _this.getListItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            // kantor_request: new FormControl(''),
            id_purchase_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            // request_for: new FormControl(''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    AddComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_1__["SearchItemComponent"],
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
                _this.id_model = data;
                _this.beforeModel();
            }
        });
    };
    AddComponent.prototype.getListItem = function () {
        var _this = this;
        var param = {
            id_purchase_request: this.id_purchase_request
        };
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify(param)).subscribe(function (data) {
            _this.list_item = data.data;
        });
    };
    AddComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestItemService.deleteGaPurchaseRequestItemsId(id).subscribe(function (data) {
            _this.getListItem();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.qty = 1;
            console.log(_this.dataItem);
        });
    };
    AddComponent.prototype.simpan_item = function () {
        var _this = this;
        if (this.dataItem.qty < 1) {
            alert('tidak boleh kosong');
            return false;
        }
        var param = {
            id_model: this.dataItem.id_model,
            qty: this.dataItem.qty,
            id_purchase_request: this.id_purchase_request
        };
        this.spinner.show();
        //simpan ka server
        this.gaPurchaseRequestItemService.postGaPurchaseRequestItems(param).subscribe(function (data) {
            _this.id_model = null;
            _this.spinner.hide();
            _this.getListItem();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    // ## END  LIST ITEM -----------------------------------
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        if (this.list_item.length < 1) {
            this.pesan.pesanWarningForm('Anda harus pilih Item Pembelian!');
            this.spinner.hide();
            return;
        }
        this.dataRequest = this.dataForm.value;
        this.gaPurchaseRequestService.putGaPurchaseRequestsId({ id: this.id_purchase_request, body: this.dataRequest }).subscribe(function (data) {
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
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/ga/asset/request/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestItemService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/detail/detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/detail/detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L3JlcXVlc3QvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/asset/request/detail/detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/detail/detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");










var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaPurchaseRequestService, gaPurchaseRequestItemService, direktoriPegawaiMasterService, companyKantorService, toolsLogFlowService, assetModelxService, spinner, notification, pesan, router, activatedRoute, standarApprovalService) {
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.standarApprovalService = standarApprovalService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.dataPegawai = {};
        this.dataKantor = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params.get('id_purchase_request'));
            if (params.get('id_purchase_request')) {
                _this.id_purchase_request = params.get('id_purchase_request');
            }
            _this.getDetailRequest();
            _this.getDetailItem();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailRequest();
                _this.getDetailItem();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailRequest = function () {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestService.getGaPurchaseRequestsId(this.id_purchase_request).subscribe(function (data) {
            _this.dataRequest = data.data;
            _this.getPegawai(data.data.id_pegawai);
            // this.getkantor(data.data.kantor_request);
            _this.spinner.hide();
            _this.params = {
                id: data.data.id_purchase_request,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_purchase_request"
            };
            _this.standarApprovalService.param.next(_this.params);
        });
    };
    DetailComponent.prototype.getPegawai = function (pegawai_request) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(pegawai_request).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getkantor = function (kantor_request) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(kantor_request).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailComponent.prototype.getDetailItem = function () {
        var _this = this;
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify({ id_purchase_request: this.id_purchase_request })).subscribe(function (res) {
            _this.list_item = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_purchase_request })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__["ToolsLogFlowService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/ga/asset/request/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["CompanyKantorService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_9__["ToolsLogFlowService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/edit/edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/edit/edit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L3JlcXVlc3QvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/asset/request/edit/edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/edit/edit.component.ts ***!
  \***************************************************************/
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
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(gaPurchaseRequestItemService, gaPurchaseRequestService, direktoriPegawaiMasterService, companyKantorService, assetModelxService, spinner, notification, fb, pesan, router, activatedRoute, drawerService) {
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.gaPurchaseRequestService = gaPurchaseRequestService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.companyKantorService = companyKantorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.drawerService = drawerService;
        this.dataRequest = {};
        this.list_item = [];
        this.id_purchase_request = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listModel = [];
        // ## LIST ITEM -----------------------------------
        this.id_model = null;
        this.dataItem = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_purchase_request = this.activatedRoute.snapshot.paramMap.get('id_purchase_request');
        this.getPreeData();
        this.form();
        this.getData();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.gaPurchaseRequestService.getGaPurchaseRequestsId(this.id_purchase_request).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.getListItem();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            // kantor_request: new FormControl(''),
            id_purchase_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            // request_for: new FormControl(''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_request: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    EditComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__["SearchItemComponent"],
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
                _this.id_model = data;
                _this.beforeModel();
            }
        });
    };
    EditComponent.prototype.getListItem = function () {
        var _this = this;
        var param = {
            id_purchase_request: this.id_purchase_request
        };
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify(param)).subscribe(function (data) {
            _this.list_item = data.data;
        });
    };
    EditComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaPurchaseRequestItemService.deleteGaPurchaseRequestItemsId(id).subscribe(function (data) {
            _this.getListItem();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.qty = 1;
            console.log(_this.dataItem);
        });
    };
    EditComponent.prototype.simpan_item = function () {
        var _this = this;
        if (this.dataItem.qty < 1) {
            alert('tidak boleh kosong');
            return false;
        }
        var param = {
            id_model: this.dataItem.id_model,
            qty: this.dataItem.qty,
            id_purchase_request: this.id_purchase_request
        };
        this.spinner.show();
        //simpan ka server
        this.gaPurchaseRequestItemService.postGaPurchaseRequestItems(param).subscribe(function (data) {
            _this.id_model = null;
            _this.spinner.hide();
            _this.getListItem();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    // ## END  LIST ITEM -----------------------------------
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        if (this.list_item.length < 1) {
            this.pesan.pesanWarningForm('Anda harus pilih Item Pembelian!');
            this.spinner.hide();
            return;
        }
        this.dataRequest = this.dataForm.value;
        this.gaPurchaseRequestService.putGaPurchaseRequestsId({ id: this.id_purchase_request, body: this.dataRequest }).subscribe(function (data) {
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
        this.router.navigate(['/ga/asset/module/request/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/ga/asset/request/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestItemService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPurchaseRequestService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/list/list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/list/list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L3JlcXVlc3QvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ga/asset/request/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(gaPurchaseRequestService, spinner, nzMessageService, pesan) {
        this.gaPurchaseRequestService = gaPurchaseRequestService;
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
        this.gaPurchaseRequestService
            .getGaPurchaseRequests(JSON.stringify({
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
        this.gaPurchaseRequestService.deleteGaPurchaseRequestsId(id).subscribe(function (data) {
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
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/ga/asset/request/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["GaPurchaseRequestService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/request-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/request-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/asset/request/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/asset/request/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/asset/request/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/asset/request/detail/detail.component.ts");







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
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_purchase_request',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'detail/:id_purchase_request',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"]
    }
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/request.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ga/asset/request/request.module.ts ***!
  \**********************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/pages/ga/asset/request/request-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/asset/request/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/asset/request/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/asset/request/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/asset/request/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-item/search-item.component */ "./src/app/pages/ga/asset/request/search-item/search-item.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");














var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__["SearchItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _request_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__["ApprovalModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_11__["FormBuilderTypeSafe"]
            ],
            entryComponents: [
                _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__["SearchItemComponent"]
            ]
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/asset/request/search-item/search-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/search-item/search-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2Fzc2V0L3JlcXVlc3Qvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/asset/request/search-item/search-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ga/asset/request/search-item/search-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");




var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent(drawerRef, assetModelxService) {
        this.drawerRef = drawerRef;
        this.assetModelxService = assetModelxService;
        this.value = '';
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    SearchItemComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    SearchItemComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    SearchItemComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    SearchItemComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetModelxService
            .getAssetModelxes(JSON.stringify({
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
        });
    };
    SearchItemComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearchItemComponent.prototype.selectModel = function (id_model) {
        this.value = id_model;
        this.close();
    };
    SearchItemComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchItemComponent.prototype, "value", void 0);
    SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-item',
            template: __webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/asset/request/search-item/search-item.component.html"),
            styles: [__webpack_require__(/*! ./search-item.component.scss */ "./src/app/pages/ga/asset/request/search-item/search-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"]])
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/request-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ga/request/request-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.component */ "./src/app/pages/ga/request/request.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'module/biaya',
    },
    {
        path: 'module',
        component: _request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"],
        children: [
            {
                path: 'biaya',
                loadChildren: function () { return __webpack_require__.e(/*! import() | biaya-biaya-module */ "biaya-biaya-module").then(__webpack_require__.bind(null, /*! ./biaya/biaya.module */ "./src/app/pages/ga/request/biaya/biaya.module.ts")).then(function (mod) { return mod.BiayaModule; }); },
            },
            {
                path: 'hotel',
                loadChildren: function () { return __webpack_require__.e(/*! import() | hotel-hotel-module */ "hotel-hotel-module").then(__webpack_require__.bind(null, /*! ./hotel/hotel.module */ "./src/app/pages/ga/request/hotel/hotel.module.ts")).then(function (mod) { return mod.HotelModule; }); },
            },
            {
                path: 'pengaturan/untuk',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pengaturan-untuk-untuk-module */ "pengaturan-untuk-untuk-module").then(__webpack_require__.bind(null, /*! ./pengaturan/untuk/untuk.module */ "./src/app/pages/ga/request/pengaturan/untuk/untuk.module.ts")).then(function (mod) { return mod.UntukModule; });
                },
            },
            {
                path: 'pengaturan/uniform',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | pengaturan-uniform-uniform-module */ "pengaturan-uniform-uniform-module").then(__webpack_require__.bind(null, /*! ./pengaturan/uniform/uniform.module */ "./src/app/pages/ga/request/pengaturan/uniform/uniform.module.ts")).then(function (mod) { return mod.UniformModule; });
                },
            },
            {
                path: 'tiket',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tiket-tiket-module */ "tiket-tiket-module").then(__webpack_require__.bind(null, /*! ./tiket/tiket.module */ "./src/app/pages/ga/request/tiket/tiket.module.ts")).then(function (mod) { return mod.TiketModule; }); },
            },
            {
                path: 'transport',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | transport-transport-module */ "transport-transport-module").then(__webpack_require__.bind(null, /*! ./transport/transport.module */ "./src/app/pages/ga/request/transport/transport.module.ts")).then(function (mod) { return mod.TransportModule; });
                },
            },
            {
                path: 'uniform',
                loadChildren: function () {
                    return Promise.all(/*! import() | uniform-uniform-module */[__webpack_require__.e("common"), __webpack_require__.e("uniform-uniform-module")]).then(__webpack_require__.bind(null, /*! ./uniform/uniform.module */ "./src/app/pages/ga/request/uniform/uniform.module.ts")).then(function (mod) { return mod.UniformModule; });
                },
            },
        ],
    },
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/request.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/ga/request/request.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/request/request.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ga/request/request.component.ts ***!
  \*******************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var RequestComponent = /** @class */ (function () {
    function RequestComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getSettings"])).subscribe(function (state) {
            _this.menuLayoutType = state.menuLayoutType;
            _this.isContentNoMaxWidth = state.isContentNoMaxWidth;
            _this.isAppMaxWidth = state.isAppMaxWidth;
            _this.isGrayBackground = state.isGrayBackground;
            _this.isSquaredBorders = state.isSquaredBorders;
            _this.isCardShadow = state.isCardShadow;
            _this.isBorderless = state.isBorderless;
            _this.isTopbarFixed = state.isTopbarFixed;
            _this.isGrayTopbar = state.isGrayTopbar;
            _this.routerAnimation = state.routerAnimation;
        });
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Expenses',
                key: 'biaya',
                icon: 'fe fe-bookmark',
                url: 'biaya/list',
            },
            {
                title: 'Hotel',
                key: 'hotel',
                icon: 'fe fe-bookmark',
                url: 'hotel/list',
            },
            {
                title: 'Ticket',
                key: 'tiket',
                icon: 'fe fe-bookmark',
                url: 'tiket/list',
            },
            {
                title: 'Transport',
                key: 'transport',
                icon: 'fe fe-bookmark',
                url: 'transport/list',
            },
            {
                title: 'Uniform',
                key: 'uniform',
                icon: 'fe fe-bookmark',
                url: 'uniform',
            },
            {
                title: 'Settings',
                key: 'pengaturan',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'Expenses Allotment',
                        key: 'pengaturan/untuk',
                        url: 'pengaturan/untuk/list',
                    },
                    {
                        title: 'uniform',
                        key: 'pengaturan/uniform',
                        url: 'pengaturan/uniform/list',
                    }
                ],
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'QA', child: 'Request' });
    };
    RequestComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    RequestComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/request/request.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/pages/ga/request/request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/request/request.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/ga/request/request.module.ts ***!
  \****************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/pages/ga/request/request-routing.module.ts");
/* harmony import */ var _request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request.component */ "./src/app/pages/ga/request/request.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");












var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_request_component__WEBPACK_IMPORTED_MODULE_5__["RequestComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _request_routing_module__WEBPACK_IMPORTED_MODULE_4__["RequestRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]],
        })
    ], RequestModule);
    return RequestModule;
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
//# sourceMappingURL=request-request-module.js.map