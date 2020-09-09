(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repair-repair-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-form-item>\r\n    <nz-form-label>Kode</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"disposisi.kode\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>disposisi</nz-form-label>\r\n    <nz-form-control>\r\n        <textarea nz-input placeholder=\"Insert disposisi\" [(ngModel)]=\"disposisi.disposisi\"\r\n            [nzAutosize]=\"{ minRows: 2, maxRows: 2 }\"></textarea>\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>To module</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"disposisi.to_module\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n\r\n<div class=\"footer\">\r\n    <button type=\"button\" (click)=\"addMaintenanceDisposisi()\"\r\n        class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/add/add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/add/add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Repair</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Title</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"insert title\" formControlName=\"title_maintenance\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Maintenance dispoisi\r\n                                        <i style=\"float: right;\" nz-tooltip nzTooltipTitle=\"Add more Maintenance\"><i\r\n                                                nz-icon (click)=\"openCode()\" nzType=\"plus-circle\"\r\n                                                nzTheme=\"outline\"></i></i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose disposisi\"\r\n                                            formControlName=\"id_maintenance_disposisi\">\r\n                                            <nz-option *ngFor=\"let item of listDisposisi\"\r\n                                                nzValue=\"{{item.id_maintenance_disposisi}}\"\r\n                                                nzLabel=\"{{item.kode}} | {{item.disposisi}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Maintenance Code</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose code\"\r\n                                            formControlName=\"ref_maintenance_code\">\r\n                                            <nz-option *ngFor=\"let item of listMaitenannceCode\"\r\n                                                nzValue=\"{{item.id_maintenance_code}}\"\r\n                                                nzLabel=\"{{item.code}} | {{item.work}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Start maintenance</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                            formControlName=\"tanggal_start_maintenance\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>End maintenance</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                            formControlName=\"tanggal_end_maintenance\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Cost\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('cost') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input placeholder=\"insert cost\" formControlName=\"cost\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Waranty</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                            formControlName=\"is_waranty\">\r\n                                            <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                            <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Vendor</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose vendor\"\r\n                                        formControlName=\"id_vendor\">\r\n                                        <nz-option *ngFor=\"let item of listVendor\" nzValue=\"{{item.id_vendor}}\"\r\n                                            nzLabel=\"{{item.name_vendor}}\"></nz-option>\r\n                                    </nz-select>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Note</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Insert note\" formControlName=\"note_maintenance\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Asset</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                                    <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                        [(ngModel)]=\"dataItem.sn\" />\r\n                                </nz-input-group>\r\n                                <ng-template #suffixIconButton>\r\n                                    <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                        routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                                </ng-template>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\" [hidden]=\"!id_asset\">\r\n                                <div nz-col nzSpan=\"8\">\r\n                                    {{dataModel.foto}}\r\n                                </div>\r\n                                <div nz-col nzSpan=\"16\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                            {{dataModel.life_limit_var}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.sn}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.purchase_date | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.purchase_number}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.price}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Bin location</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataBin.bin_location}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.qty}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/detail/detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/detail/detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Repair</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataMaintenance.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataMaintenance.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Title</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataMaintenance.title_maintenance}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Kode disposisi</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataDisposisi.kode}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Maintenance disposisi</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataDisposisi.disposisi}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Maintenance start</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataMaintenance.tanggal_start_maintenance | date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Maintenance end</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataMaintenance.tanggal_end_maintenance| date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Maintenance code</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataCode.code}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Waranty</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataMaintenance.is_waranty}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Maintenance code</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataMaintenance.cost}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                    <tr>\r\n                        <h6 class=\"text-gray-6 pl-0\">Description :</h6>\r\n                    </tr>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <tr>\r\n                                <td class=\"pr-0 text-left text-dark\">{{dataMaintenance.note_maintenance}}</td>\r\n                            </tr>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"16\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h5 class=\"mb=0\">Asset</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <table class=\"table table-borderless\">\r\n                            <tbody>\r\n                                <div nz-row nzGutter=\"8\">\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                                {{dataModel.life_limit_var}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </div>\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.sn}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_date | date}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_number}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.price}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.qty}}</td>\r\n                                        </tr>\r\n                                    </div>\r\n                                </div>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"footer\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                        style=\"margin-right: 8px;\">Back</button>\r\n                                </div>\r\n                                <div class=\"col-md-8 text-right\">\r\n                                    <erp-approval-standar></erp-approval-standar>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Repair</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Title</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"insert title\" formControlName=\"title_maintenance\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Maintenance dispoisi\r\n                                        <i style=\"float: right;\" nz-tooltip nzTooltipTitle=\"Add more Maintenance\"><i\r\n                                                nz-icon (click)=\"openCode()\" nzType=\"plus-circle\"\r\n                                                nzTheme=\"outline\"></i></i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose disposisi\"\r\n                                            formControlName=\"id_maintenance_disposisi\">\r\n                                            <nz-option *ngFor=\"let item of listDisposisi\"\r\n                                                nzValue=\"{{item.id_maintenance_disposisi}}\"\r\n                                                nzLabel=\"{{item.kode}} | {{item.disposisi}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Maintenance Code</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose code\"\r\n                                            formControlName=\"ref_maintenance_code\">\r\n                                            <nz-option *ngFor=\"let item of listMaitenannceCode\"\r\n                                                nzValue=\"{{item.id_maintenance_code}}\"\r\n                                                nzLabel=\"{{item.code}} | {{item.work}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Start maintenance</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                            formControlName=\"tanggal_start_maintenance\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>End maintenance</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select Time\"\r\n                                            formControlName=\"tanggal_end_maintenance\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Cost\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('cost') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input placeholder=\"insert cost\" formControlName=\"cost\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Waranty</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a priority\"\r\n                                            formControlName=\"is_waranty\">\r\n                                            <nz-option nzLabel=\"Ya\" nzValue=\"Ya\"></nz-option>\r\n                                            <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Vendor</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose vendor\"\r\n                                        formControlName=\"id_vendor\">\r\n                                        <nz-option *ngFor=\"let item of listVendor\" nzValue=\"{{item.id_vendor}}\"\r\n                                            nzLabel=\"{{item.name_vendor}}\"></nz-option>\r\n                                    </nz-select>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Note</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Insert note\" formControlName=\"note_maintenance\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Asset</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                                    <input type=\"text\" nz-input placeholder=\"input search text\" disabled\r\n                                        [(ngModel)]=\"dataItem.sn\" />\r\n                                </nz-input-group>\r\n                                <ng-template #suffixIconButton>\r\n                                    <button nz-button class=\"btn btn-primary\" (click)=\"selectAsset()\"\r\n                                        routerLinkActive=\"router-link-active\"><i nz-icon nzType=\"search\"></i></button>\r\n                                </ng-template>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\" [hidden]=\"!id_asset\">\r\n                                <div nz-col nzSpan=\"8\">\r\n                                    {{dataModel.foto}}\r\n                                </div>\r\n                                <div nz-col nzSpan=\"16\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                            {{dataModel.life_limit_var}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Type</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.sn}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.purchase_date | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.purchase_number}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Price</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.price}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Bin location</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataBin.bin_location}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataItem.qty}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Repair</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Repair\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th>Title</th>\r\n                        <th nzShowSort nzSortKey=\"name\">Asset SN</th>\r\n                        <th>Model</th>\r\n                        <th>Start</th>\r\n                        <th>End</th>\r\n                        <th>Disposisi</th>\r\n                        <th>Waranty</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.title_maintenance }}</td>\r\n                        <td>{{ data.sn }}</td>\r\n                        <td>{{ data.keyword }}</td>\r\n                        <td>{{ data.tanggal_start_maintenance }}</td>\r\n                        <td>{{ data.tanggal_end_maintenance }}</td>\r\n                        <td>{{ data.kode }}</td>\r\n                        <td>{{ data.is_waranty }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_maintenance]\">Detail </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_maintenance]\">Edit </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this task?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_maintenance)\"\r\n                                            (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"20\">\r\n            <nz-form-item>\r\n                <nz-form-label>Keyword / Part Number / SN</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"4\">\r\n            <nz-form-label>Search</nz-form-label><br>\r\n            <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon\r\n                    nzType=\"search\"></i></button>\r\n        </div>\r\n    </div>\r\n\r\n    <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\"\r\n        [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n        (nzPageSizeChange)=\"searchData(true)\">\r\n        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n            <tr>\r\n                <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n                <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n                <th nzShowSort nzSortKey=\"name_manufacture\">Serial number</th>\r\n                <th nzShowSort nzSortKey=\"part_id\">Quantity</th>\r\n                <th nzShowSort nzSortKey=\"part_id\">Status</th>\r\n                <th nzShowSort nzSortKey=\"part_id\">Part.id</th>\r\n                <th class=\"text-right\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of ajaxTable.data\">\r\n                <td>{{ data.keyword }}</td>\r\n                <td>{{ data.part_number }} </td>\r\n                <td>{{ data.sn }}</td>\r\n                <td>{{ data.qty }}</td>\r\n                <td>{{ data.status }}</td>\r\n                <td>{{ data.part_id }}</td>\r\n                <td class=\"text-right\">\r\n                    <button nz-button nzType=\"primary\" (click)=\"selectAsset(data.id_asset)\" nzShape=\"circle\"><i nz-icon\r\n                            nzType=\"check\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9hZGQtZGlzcG9zaXNpL2FkZC1kaXNwb3Npc2kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddDisposisiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDisposisiComponent", function() { return AddDisposisiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");






var AddDisposisiComponent = /** @class */ (function () {
    function AddDisposisiComponent(drawerRef, spinner, pesan, assetMaintenanceDisposisiService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.assetMaintenanceDisposisiService = assetMaintenanceDisposisiService;
        this.value = '';
        this.disposisi = {};
    }
    AddDisposisiComponent.prototype.ngOnInit = function () {
    };
    AddDisposisiComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    AddDisposisiComponent.prototype.addMaintenanceDisposisi = function () {
        var _this = this;
        this.spinner.show();
        this.assetMaintenanceDisposisiService.postAssetMaintenanceDisposisis(this.disposisi).subscribe(function (data) {
            _this.spinner.hide();
            _this.close();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Maintenance Code sudah ada');
        });
    };
    AddDisposisiComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetMaintenanceDisposisiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDisposisiComponent.prototype, "value", void 0);
    AddDisposisiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-disposisi',
            template: __webpack_require__(/*! raw-loader!./add-disposisi.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.html"),
            styles: [__webpack_require__(/*! ./add-disposisi.component.scss */ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetMaintenanceDisposisiService"]])
    ], AddDisposisiComponent);
    return AddDisposisiComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/add/add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/add/add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/add/add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/add/add.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../searh-asset/searh-asset.component */ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.ts");
/* harmony import */ var src_app_sdk_asset_services_asset_maintenance_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-maintenance-code.service */ "./src/app/sdk/asset/services/asset-maintenance-code.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-disposisi/add-disposisi.component */ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.ts");












var AddComponent = /** @class */ (function () {
    function AddComponent(assetMaintenanceService, assetMaintenanceDisposisiService, vendorVendorService, assetAssetService, assetMaintenanceCodeService, spinner, notification, fb, pesan, router, drawerService, assetPartIdService, assetLifeLimitService, assetModelxService, assetBinLocationService, vendorManufactureService, assetConditionMonitoringService) {
        this.assetMaintenanceService = assetMaintenanceService;
        this.assetMaintenanceDisposisiService = assetMaintenanceDisposisiService;
        this.vendorVendorService = vendorVendorService;
        this.assetAssetService = assetAssetService;
        this.assetMaintenanceCodeService = assetMaintenanceCodeService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.assetPartIdService = assetPartIdService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.assetModelxService = assetModelxService;
        this.assetBinLocationService = assetBinLocationService;
        this.vendorManufactureService = vendorManufactureService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.dataMaintenance = {};
        this.listDisposisi = [];
        this.listVendor = [];
        this.listMaitenannceCode = [];
        this.dataModel = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataBin = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.id_asset = '';
        this.dataItem = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        this.getPreeData();
        this.form();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.assetMaintenanceDisposisiService.getAssetMaintenanceDisposisis().subscribe(function (data) {
            _this.listDisposisi = data.data;
        });
        this.vendorVendorService.getVendorVendors().subscribe(function (data) {
            _this.listVendor = data.data;
        });
        this.assetMaintenanceCodeService.getAssetMaintenanceCodes().subscribe(function (data) {
            _this.listMaitenannceCode = data.data;
        });
    };
    AddComponent.prototype.openCode = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Add new Maintenance disposisi',
            nzContent: _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_11__["AddDisposisiComponent"],
            nzWidth: '320px'
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.getPreeData();
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_maintenance_disposisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_end_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_start_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            ref_maintenance_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            is_waranty: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            title_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            note_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    AddComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    AddComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_1__["SearhAssetComponent"],
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
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.purchase_date = data.data.purchase_date;
            _this.dataItem.purchase_number = data.data.purchase_number;
            _this.dataItem.price = data.data.price;
            _this.dataItem.id_bin_location = data.data.id_bin_location;
            _this.dataItem.id_vendor = data.data.id_vendor;
            _this.getModel(_this.dataItem.id_model);
            _this.getBin(_this.dataItem.id_bin_location);
            _this.getVendor(_this.dataItem.id_vendor);
        });
    };
    AddComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getConditionMonitoring(_this.dataModel.id_condition_monitoring);
            _this.getLifeLimit(_this.dataModel.id_life_limit);
            _this.getManufacture(_this.dataModel.id_manufacture);
        });
    };
    AddComponent.prototype.getPartId = function (id_part_id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id_part_id).subscribe(function (data) {
            _this.dataType = data.data;
        });
    };
    AddComponent.prototype.getLifeLimit = function (id_life_limit) {
        var _this = this;
        this.assetLifeLimitService.getAssetLifeLimitsId(id_life_limit).subscribe(function (data) {
            _this.dataLifelimit = data.data;
        });
    };
    AddComponent.prototype.getConditionMonitoring = function (id_condition_monitoring) {
        var _this = this;
        this.assetConditionMonitoringService.getAssetConditionMonitoringsId(id_condition_monitoring).subscribe(function (data) {
            _this.dataCondition = data.data;
        });
    };
    AddComponent.prototype.getManufacture = function (id_manufacture) {
        var _this = this;
        this.vendorManufactureService.getVendorManufacturesId(id_manufacture).subscribe(function (data) {
            _this.dataManufacture = data.data;
        });
    };
    AddComponent.prototype.getBin = function (id_bin_location) {
        var _this = this;
        this.assetBinLocationService.getAssetBinLocationsId(id_bin_location).subscribe(function (data) {
            _this.dataBin = data.data;
        });
    };
    AddComponent.prototype.getVendor = function (id_vendor) {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
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
        this.dataMaintenance = this.dataForm.value;
        this.assetMaintenanceService.postAssetMaintenances(this.dataMaintenance).subscribe(function (data) {
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
        this.router.navigate(['/asset/maintenance/repair/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetMaintenanceService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetMaintenanceDisposisiService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetAssetService"] },
        { type: src_app_sdk_asset_services_asset_maintenance_code_service__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetBinLocationService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorManufactureService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetConditionMonitoringService"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/asset/maintenance/repair/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetMaintenanceService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetMaintenanceDisposisiService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetAssetService"],
            src_app_sdk_asset_services_asset_maintenance_code_service__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetBinLocationService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorManufactureService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetConditionMonitoringService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/detail/detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/detail/detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/detail/detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/detail/detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(assetMaintenanceService, assetMaintenanceDisposisiService, assetMaintenanceCodeService, assetPartIdService, assetAssetService, assetLifeLimitService, vendorVendorService, assetModelxService, assetBinLocationService, assetStatusService, vendorManufactureService, assetConditionMonitoringService, toolsLogFlowService, standarApprovalService, router, activatedRoute, spinner) {
        this.assetMaintenanceService = assetMaintenanceService;
        this.assetMaintenanceDisposisiService = assetMaintenanceDisposisiService;
        this.assetMaintenanceCodeService = assetMaintenanceCodeService;
        this.assetPartIdService = assetPartIdService;
        this.assetAssetService = assetAssetService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.vendorVendorService = vendorVendorService;
        this.assetModelxService = assetModelxService;
        this.assetBinLocationService = assetBinLocationService;
        this.assetStatusService = assetStatusService;
        this.vendorManufactureService = vendorManufactureService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.id_maintenance = '';
        this.dataMaintenance = {};
        this.dataModel = {};
        this.dataDisposisi = {};
        this.dataCode = {};
        this.dataAsset = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataBin = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_maintenance = this.activatedRoute.snapshot.paramMap.get('id_maintenance');
        this.getMaintenance();
        this.getLog();
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getMaintenance();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getMaintenance = function () {
        var _this = this;
        this.spinner.show();
        this.assetMaintenanceService.getAssetMaintenancesId(this.id_maintenance).subscribe(function (data) {
            _this.dataMaintenance = data.data;
            _this.getAsset(_this.dataMaintenance.id_asset);
            _this.getCode(_this.dataMaintenance.ref_maintenance_code);
            _this.getDisposisi(_this.dataMaintenance.id_maintenance_disposisi);
            _this.getVendor(_this.dataMaintenance.id_vendor);
            _this.params = {
                id: data.data.id_maintenance,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_maintenance"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getCode = function (ref_maintenance_code) {
        var _this = this;
        this.assetMaintenanceCodeService.getAssetMaintenanceCodesId(ref_maintenance_code).subscribe(function (data) {
            _this.dataCode = data.data;
        });
    };
    DetailComponent.prototype.getDisposisi = function (id_maintenance_disposisi) {
        var _this = this;
        this.assetMaintenanceDisposisiService.getAssetMaintenanceDisposisisId(id_maintenance_disposisi).subscribe(function (data) {
            _this.dataDisposisi = data.data;
        });
    };
    DetailComponent.prototype.getAsset = function (id_asset) {
        var _this = this;
        this.assetAssetService.getAssetAssetsId(id_asset).subscribe(function (data) {
            _this.dataAsset = data.data;
            _this.getModel(_this.dataAsset.id_model);
            _this.getVendor(_this.dataAsset.id_vendor);
            _this.getModel(_this.dataAsset.id_model);
        });
    };
    DetailComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getConditionMonitoring(_this.dataModel.id_condition_monitoring);
            _this.getLifeLimit(_this.dataModel.id_life_limit);
            _this.getManufacture(_this.dataModel.id_manufacture);
        });
    };
    DetailComponent.prototype.getPartId = function (id_part_id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id_part_id).subscribe(function (data) {
            _this.dataType = data.data;
        });
    };
    DetailComponent.prototype.getLifeLimit = function (id_life_limit) {
        var _this = this;
        this.assetLifeLimitService.getAssetLifeLimitsId(id_life_limit).subscribe(function (data) {
            _this.dataLifelimit = data.data;
        });
    };
    DetailComponent.prototype.getConditionMonitoring = function (id_condition_monitoring) {
        var _this = this;
        this.assetConditionMonitoringService.getAssetConditionMonitoringsId(id_condition_monitoring).subscribe(function (data) {
            _this.dataCondition = data.data;
        });
    };
    DetailComponent.prototype.getManufacture = function (id_manufacture) {
        var _this = this;
        this.vendorManufactureService.getVendorManufacturesId(id_manufacture).subscribe(function (data) {
            _this.dataManufacture = data.data;
        });
    };
    DetailComponent.prototype.getBin = function (id_bin_location) {
        var _this = this;
        this.assetBinLocationService.getAssetBinLocationsId(id_bin_location).subscribe(function (data) {
            _this.dataBin = data.data;
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
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_maintenance })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/asset/maintenance/repair/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceDisposisiService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceCodeService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetBinLocationService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetConditionMonitoringService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/asset/maintenance/repair/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceDisposisiService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetMaintenanceCodeService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetBinLocationService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorManufactureService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetConditionMonitoringService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_5__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/edit/edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-disposisi/add-disposisi.component */ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../searh-asset/searh-asset.component */ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(assetMaintenanceService, assetMaintenanceDisposisiService, vendorVendorService, assetAssetService, assetMaintenanceCodeService, spinner, notification, fb, pesan, router, activatedRoute, drawerService, assetPartIdService, assetLifeLimitService, assetModelxService, assetBinLocationService, vendorManufactureService, assetConditionMonitoringService) {
        this.assetMaintenanceService = assetMaintenanceService;
        this.assetMaintenanceDisposisiService = assetMaintenanceDisposisiService;
        this.vendorVendorService = vendorVendorService;
        this.assetAssetService = assetAssetService;
        this.assetMaintenanceCodeService = assetMaintenanceCodeService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.drawerService = drawerService;
        this.assetPartIdService = assetPartIdService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.assetModelxService = assetModelxService;
        this.assetBinLocationService = assetBinLocationService;
        this.vendorManufactureService = vendorManufactureService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.dataMaintenance = {};
        this.id_maintenance = '';
        this.listDisposisi = [];
        this.listVendor = [];
        this.listMaitenannceCode = [];
        this.dataModel = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataBin = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.id_asset = '';
        this.dataItem = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_maintenance = this.activatedRoute.snapshot.paramMap.get('id_maintenance');
        this.getPreeData();
        this.getData();
        this.form();
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.assetMaintenanceDisposisiService.getAssetMaintenanceDisposisis().subscribe(function (data) {
            _this.listDisposisi = data.data;
        });
        this.vendorVendorService.getVendorVendors().subscribe(function (data) {
            _this.listVendor = data.data;
        });
        this.assetMaintenanceCodeService.getAssetMaintenanceCodes().subscribe(function (data) {
            _this.listMaitenannceCode = data.data;
        });
    };
    EditComponent.prototype.openCode = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Add new Maintenance disposisi',
            nzContent: _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_8__["AddDisposisiComponent"],
            nzWidth: '320px'
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.getPreeData();
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.assetMaintenanceService.getAssetMaintenancesId(this.id_maintenance).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_maintenance_disposisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_end_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_start_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_asset: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            ref_maintenance_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            is_waranty: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            title_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            note_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            from_id_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            from_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.selectAsset = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_10__["SearhAssetComponent"],
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
            _this.dataItem.id_model = data.data.id_model;
            _this.dataItem.purchase_date = data.data.purchase_date;
            _this.dataItem.purchase_number = data.data.purchase_number;
            _this.dataItem.price = data.data.price;
            _this.dataItem.id_bin_location = data.data.id_bin_location;
            _this.dataItem.id_vendor = data.data.id_vendor;
            _this.getModel(_this.dataItem.id_model);
            _this.getBin(_this.dataItem.id_bin_location);
            _this.getVendor(_this.dataItem.id_vendor);
        });
    };
    EditComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getConditionMonitoring(_this.dataModel.id_condition_monitoring);
            _this.getLifeLimit(_this.dataModel.id_life_limit);
            _this.getManufacture(_this.dataModel.id_manufacture);
        });
    };
    EditComponent.prototype.getPartId = function (id_part_id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id_part_id).subscribe(function (data) {
            _this.dataType = data.data;
        });
    };
    EditComponent.prototype.getLifeLimit = function (id_life_limit) {
        var _this = this;
        this.assetLifeLimitService.getAssetLifeLimitsId(id_life_limit).subscribe(function (data) {
            _this.dataLifelimit = data.data;
        });
    };
    EditComponent.prototype.getConditionMonitoring = function (id_condition_monitoring) {
        var _this = this;
        this.assetConditionMonitoringService.getAssetConditionMonitoringsId(id_condition_monitoring).subscribe(function (data) {
            _this.dataCondition = data.data;
        });
    };
    EditComponent.prototype.getManufacture = function (id_manufacture) {
        var _this = this;
        this.vendorManufactureService.getVendorManufacturesId(id_manufacture).subscribe(function (data) {
            _this.dataManufacture = data.data;
        });
    };
    EditComponent.prototype.getBin = function (id_bin_location) {
        var _this = this;
        this.assetBinLocationService.getAssetBinLocationsId(id_bin_location).subscribe(function (data) {
            _this.dataBin = data.data;
        });
    };
    EditComponent.prototype.getVendor = function (id_vendor) {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
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
        this.dataMaintenance = this.dataForm.value;
        this.assetMaintenanceService.putAssetMaintenancesId({ id: this.id_maintenance, body: this.dataMaintenance }).subscribe(function (data) {
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
        this.router.navigate(['/asset/maintenance/repair/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceDisposisiService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDrawerService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetBinLocationService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorManufactureService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetConditionMonitoringService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/asset/maintenance/repair/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceDisposisiService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDrawerService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetBinLocationService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorManufactureService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetConditionMonitoringService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services_asset_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-maintenance.service */ "./src/app/sdk/asset/services/asset-maintenance.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(assetMaintenanceService, nzMessageService, spinner) {
        this.assetMaintenanceService = assetMaintenanceService;
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
        this.assetMaintenanceService
            .getAssetMaintenances(JSON.stringify({
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
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetMaintenanceService.deleteAssetMaintenancesId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services_asset_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/asset/maintenance/repair/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services_asset_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/repair-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/repair-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RepairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairRoutingModule", function() { return RepairRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/maintenance/repair/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/maintenance/repair/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/maintenance/repair/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/maintenance/repair/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
    {
        path: 'edit/:id_maintenance',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'detail/:id_maintenance',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    },
];
var RepairRoutingModule = /** @class */ (function () {
    function RepairRoutingModule() {
    }
    RepairRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], RepairRoutingModule);
    return RepairRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/repair.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/repair.module.ts ***!
  \*****************************************************************/
/*! exports provided: RepairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairModule", function() { return RepairModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _repair_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repair-routing.module */ "./src/app/pages/asset/maintenance/repair/repair-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/asset/maintenance/repair/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/asset/maintenance/repair/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/asset/maintenance/repair/edit/edit.component.ts");
/* harmony import */ var _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searh-asset/searh-asset.component */ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.ts");
/* harmony import */ var _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-disposisi/add-disposisi.component */ "./src/app/pages/asset/maintenance/repair/add-disposisi/add-disposisi.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/maintenance/repair/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");














var RepairModule = /** @class */ (function () {
    function RepairModule() {
    }
    RepairModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_7__["SearhAssetComponent"], _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_8__["AddDisposisiComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _repair_routing_module__WEBPACK_IMPORTED_MODULE_3__["RepairRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_13__["ApprovalModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_12__["FormBuilderTypeSafe"]],
            entryComponents: [
                _searh_asset_searh_asset_component__WEBPACK_IMPORTED_MODULE_7__["SearhAssetComponent"], _add_disposisi_add_disposisi_component__WEBPACK_IMPORTED_MODULE_8__["AddDisposisiComponent"]
            ]
        })
    ], RepairModule);
    return RepairModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21haW50ZW5hbmNlL3JlcGFpci9zZWFyaC1hc3NldC9zZWFyaC1hc3NldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearhAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearhAssetComponent", function() { return SearhAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");




var SearhAssetComponent = /** @class */ (function () {
    function SearhAssetComponent(drawerRef, assetAssetlistService) {
        this.drawerRef = drawerRef;
        this.assetAssetlistService = assetAssetlistService;
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
    SearhAssetComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    SearhAssetComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    SearhAssetComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    SearhAssetComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetAssetlistService
            .getAssetAssetlists(JSON.stringify({
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
    SearhAssetComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearhAssetComponent.prototype.selectAsset = function (id_asset) {
        this.value = id_asset;
        this.close();
    };
    SearhAssetComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetlistService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearhAssetComponent.prototype, "value", void 0);
    SearhAssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searh-asset',
            template: __webpack_require__(/*! raw-loader!./searh-asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.html"),
            styles: [__webpack_require__(/*! ./searh-asset.component.scss */ "./src/app/pages/asset/maintenance/repair/searh-asset/searh-asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetlistService"]])
    ], SearhAssetComponent);
    return SearhAssetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=repair-repair-module.js.map