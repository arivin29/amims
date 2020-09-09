(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lainnya-perjalanan-dinas-perjalanan-dinas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Onduty</h5>\r\n        </div>\r\n    </div>\r\n    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Destination</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"tujuan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Necessity</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Keperluan\" formControlName=\"keperluan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_kembali\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transportation</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"transportasi\" formControlName=\"transportasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Pocket money</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_saku\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transport</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_transport\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hotel</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_penginapan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_dll\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Detail</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose ron\" style=\"width: 100%\"\r\n                            [(ngModel)]=\"id_ron_kode\">\r\n                            <nz-option *ngFor=\"let item of listRon\" nzValue=\"{{item.id_ron}}\"\r\n                                nzLabel=\"{{item.ron}} | {{item.ron_code}} | {{item.default_nilai}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\" [(ngModel)]=\"tanggal\">\r\n                        </nz-date-picker>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambah_ron()\">Add Ron</button>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <nz-table #basicTable1 [nzData]=\"listPerjalananRon\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"text-sentencase\">RON</th>\r\n                            <th class=\"text-sentencase\">RON Code</th>\r\n                            <th class=\"text-sentencase\">Start</th>\r\n\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.ron}}</td>\r\n                            <td>{{data.ron_code}}</td>\r\n                            <td>{{data.tanggal | date}}</td>\r\n                                <td class=\"text-right\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <li nz-menu-item>\r\n                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                    nzPopconfirmPlacement=\"bottom\"\r\n                                                    (nzOnConfirm)=\"deleteRon(data.id_perjalanan_dinas_ron)\">Delete</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n                                </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Onduty</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataPerjalanan.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{dataPerjalanan.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Name</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Destination</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.tujuan_dinas}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Duty</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.keperluan_dinas}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Start date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">\r\n                                            :{{dataPerjalanan.tanggal_berangkat | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Untill date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.tanggal_kembali | date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Transport</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.transportasi}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Pocket money</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.uang_saku}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Transport money</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.uang_transport}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Hosterly</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.uang_penginapan}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Others</td>\r\n                                        <td class=\"pr-0 text-left text-dark\"> :{{dataPerjalanan.uang_dll}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h6 class=\"mb=0\">Detail</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable1 [nzData]=\"listPerjalananRon\" [nzShowPagination]=\"false\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"text-sentencase\">RON</th>\r\n                                <th class=\"text-sentencase\">RON Code</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable1.data\">\r\n                                <td>{{data.ron}}</td>\r\n                                <td>{{data.ron_code}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h6>Status\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"dataPerjalanan.status | status\">\r\n                            {{ dataPerjalanan.status | titlecase }}\r\n                        </nz-tag>\r\n                    </h6><br>\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h6>Activities</h6><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Onduty</h5>\r\n        </div>\r\n    </div>\r\n    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Destination</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"tujuan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Necessity</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Keperluan\" formControlName=\"keperluan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                            formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label></nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\"\r\n                                            style=\"margin-left: 10px\" formControlName=\"tanggal_kembali\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transportation</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"transportasi\" formControlName=\"transportasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Pocket money</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_saku\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transport</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_transport\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hotel</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_penginapan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_dll\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Detail</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose ron\" style=\"width: 100%\"\r\n                            [(ngModel)]=\"id_ron_kode\">\r\n                            <nz-option *ngFor=\"let item of listRon\" nzValue=\"{{item.id_ron}}\"\r\n                                nzLabel=\"{{item.ron}} | {{item.ron_code}} | {{item.default_nilai}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\" [(ngModel)]=\"tanggal\">\r\n                        </nz-date-picker>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambah_ron()\">Add Ron</button>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <nz-table #basicTable1 [nzData]=\"listPerjalananRon\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"text-sentencase\">RON</th>\r\n                            <th class=\"text-sentencase\">RON Code</th>\r\n                            <th class=\"text-sentencase\">Start</th>\r\n\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.ron}}</td>\r\n                            <td>{{data.ron_code}}</td>\r\n                            <td>{{data.tanggal | date}}</td>\r\n                                <td class=\"text-right\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <li nz-menu-item>\r\n                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                    nzPopconfirmPlacement=\"bottom\"\r\n                                                    (nzOnConfirm)=\"deleteRon(data.id_perjalanan_dinas_ron)\">Delete</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n                                </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Onduty</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add Onduty\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataPerjalanan\" [nzShowPagination]=\"true\">\r\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"tujuan_dinas\">Destination</th>\r\n                    <th nzShowSort nzSortKey=\"keperluan_dinas\">Necessity</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_berangkat\">From</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_kembali\">Untill</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>\r\n                        <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                    </td>\r\n                    <td>{{ data.tujuan_dinas }}</td>\r\n                    <td>{{ data.keperluan_dinas }}</td>\r\n                    <td>{{ data.tanggal_berangkat | date}}</td>\r\n                    <td>{{ data.tanggal_kembali | date}} </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_perjalanan_dinas]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail',data.id_perjalanan_dinas]\">\r\n                                    <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_perjalanan_dinas)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Onduty</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Destination</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"tujuan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Necessity</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Keperluan\" formControlName=\"keperluan_dinas\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Date</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                    formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                    formControlName=\"tanggal_kembali\"></nz-date-picker>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transportation</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"transportasi\" formControlName=\"transportasi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Pocket money</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_saku\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Transport</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_transport\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hotel</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_penginapan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_dll\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Detail</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Choose ron\" style=\"width: 100%\"\r\n                            [(ngModel)]=\"id_ron_kode\">\r\n                            <nz-option *ngFor=\"let item of listRon\" nzValue=\"{{item.id_ron}}\"\r\n                                nzLabel=\"{{item.ron}} | {{item.ron_code}} | {{item.default_nilai}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\" [(ngModel)]=\"tanggal\">\r\n                        </nz-date-picker>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambah_ron()\">Add Ron</button>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <nz-table #basicTable1 [nzData]=\"listPerjalananRon\" [nzShowPagination]=\"false\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"text-sentencase\">RON</th>\r\n                            <th class=\"text-sentencase\">RON Code</th>\r\n                            <th class=\"text-sentencase\">Start</th>\r\n                            <th class=\"text-sentencase\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.ron}}</td>\r\n                            <td>{{data.ron_code}}</td>\r\n                            <td>{{data.tanggal | date}}</td>\r\n                            <td>\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteRon(data.id_perjalanan_dinas_ron)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Perjalanan</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Tujuan</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input formControlName=\"tujuan_dinas\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Keperluan Dinas</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Keperluan\" formControlName=\"keperluan_dinas\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Tanggal Pelaksanaan</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Dari\"\r\n                                        formControlName=\"tanggal_berangkat\"></nz-date-picker>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Sampai\" style=\"margin-left: 10px\"\r\n                                        formControlName=\"tanggal_kembali\"></nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Transportasi yang digunakan</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"transportasi\" formControlName=\"transportasi\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Uang Saku</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_saku\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Uang Transport</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_transport\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Uang Penginapan</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_penginapan\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Uang Lain-lain</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <input nz-input placeholder=\"Masukan Nominal\" formControlName=\"uang_dll\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Onduty</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Add Onduty\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataPerjalanan\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Destination</th>\r\n                    <th>Necessity</th>\r\n                    <th>From</th>\r\n                    <th>Untill</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.tujuan_dinas }}</td>\r\n                    <td>{{ data.keperluan_dinas }}</td>\r\n                    <td>{{ data.tanggal_berangkat | date}}</td>\r\n                    <td>{{ data.tanggal_kembali | date}} </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../edit',data.id_perjalanan_dinas]\">\r\n                                    Edit\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_perjalanan_dinas)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvcGVyamFsYW5hbi1kaW5hcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPerjalananDinasService, direktoriPerjalananDinasRonService, absensiPilotRonService, notification, direktoriPegawaiMasterService, spinner, pegawaiDetailService, fb, pesan, router) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.direktoriPerjalananDinasRonService = direktoriPerjalananDinasRonService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.notification = notification;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataPerjalananDinas = {};
        this.dataPerjalananRon = [];
        this.id_perjalanan_dinas = '';
        this.listRon = [];
        this.id_pegawai = '';
        this.id_ron_kode = '';
        this.tanggal = '';
        this.listPerjalananRon = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log(_this.id_pegawai);
            _this.form();
            _this.getPreeData();
            _this.beforeCreate();
        });
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.listRon = data.data;
        });
    };
    AddComponent.prototype.tambah_ron = function () {
        var _this = this;
        if (this.id_ron_kode == '' || this.id_ron_kode == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriPerjalananDinasRonService.postDirektoriPerjalananDinasRons({
            id_perjalanan_dinas: this.id_perjalanan_dinas,
            id_ron_kode: this.id_ron_kode,
            tanggal: this.tanggal,
        }).subscribe(function (res) {
            _this.getRon();
        });
    };
    AddComponent.prototype.getRon = function () {
        var _this = this;
        var filter = {
            id_perjalanan_dinas: this.id_perjalanan_dinas,
        };
        this.direktoriPerjalananDinasRonService.getDirektoriPerjalananDinasRons(JSON.stringify(filter)).subscribe(function (res) {
            _this.listPerjalananRon = res.data;
        });
    };
    AddComponent.prototype.deleteRon = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasRonService.deleteDirektoriPerjalananDinasRonsId(id).subscribe(function (data) {
            _this.getRon();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.direktoriPerjalananDinasService.postDirektoriPerjalananDinas(this.dataPerjalananDinas).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_perjalanan_dinas = data.data.id_perjalanan_dinas;
            console.log(data.data);
            _this.getRon();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tujuan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            keperluan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_kembali: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            transportasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_dll: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_saku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_penginapan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.dataPerjalananDinas = this.dataForm.value;
        this.direktoriPerjalananDinasService
            .putDirektoriPerjalananDinasId({ id: this.id_perjalanan_dinas, body: this.dataPerjalananDinas })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'lainnya', 'perjalanan-dinas', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvcGVyamFsYW5hbi1kaW5hcy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriPegawaiMasterService, direktoriPerjalananDinasService, direktoriPerjalananDinasRonService, pegawaiDetailService, routerActive, router, spinner, standarApprovalService, toolsLogFlowService) {
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.direktoriPerjalananDinasRonService = direktoriPerjalananDinasRonService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.routerActive = routerActive;
        this.router = router;
        this.spinner = spinner;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_perjalanan_dinas = '';
        this.dataPerjalanan = {};
        this.dataPegawai = {};
        this.id_pegawai = '';
        this.params = null;
        this.id_data_flow = '';
        this.listPerjalananRon = [];
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id_perjalanan_dinas')) {
                _this.id_perjalanan_dinas = params.get('id_perjalanan_dinas');
            }
            _this.getDetailPerjalanan();
            _this.getLog();
            _this.getRon();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailPerjalanan();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailPerjalanan = function () {
        var _this = this;
        this.direktoriPerjalananDinasService.getDirektoriPerjalananDinasId(this.id_perjalanan_dinas).subscribe(function (data) {
            _this.dataPerjalanan = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.params = {
                id: data.data.id_perjalanan_dinas,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_perjalanan_dinas"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getRon = function () {
        var _this = this;
        var filter = {
            id_perjalanan_dinas: this.id_perjalanan_dinas,
        };
        this.direktoriPerjalananDinasRonService.getDirektoriPerjalananDinasRons(JSON.stringify(filter)).subscribe(function (res) {
            _this.listPerjalananRon = res.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_perjalanan_dinas })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'lainnya', 'perjalanan-dinas', 'list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__["StandarApprovalService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__["StandarApprovalService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvcGVyamFsYW5hbi1kaW5hcy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPerjalananDinasService, direktoriPerjalananDinasRonService, notification, direktoriPegawaiMasterService, absensiPilotRonService, spinner, pegawaiDetailService, fb, pesan, router, activatedRoute) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.direktoriPerjalananDinasRonService = direktoriPerjalananDinasRonService;
        this.notification = notification;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataPerjalanan = {};
        this.listRon = [];
        this.id_perjalanan_dinas = '';
        this.id_pegawai = '';
        this.id_ron_kode = '';
        this.tanggal = '';
        this.tanggal_selesai = '';
        this.listPerjalananRon = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_perjalanan_dinas')) {
                _this.id_perjalanan_dinas = data.get('id_perjalanan_dinas');
                console.log(data.get('id_perjalanan_dinas'));
                _this.form();
                _this.getData();
                _this.getRon();
                _this.getPreeData();
            }
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.listRon = data.data;
        });
    };
    EditComponent.prototype.tambah_ron = function () {
        var _this = this;
        if (this.id_ron_kode == '' || this.id_ron_kode == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriPerjalananDinasRonService.postDirektoriPerjalananDinasRons({
            id_perjalanan_dinas: this.id_perjalanan_dinas,
            id_ron_kode: this.id_ron_kode,
        }).subscribe(function (res) {
            _this.getRon();
        });
    };
    EditComponent.prototype.getRon = function () {
        var _this = this;
        var filter = {
            id_perjalanan_dinas: this.id_perjalanan_dinas,
        };
        this.direktoriPerjalananDinasRonService.getDirektoriPerjalananDinasRons(JSON.stringify(filter)).subscribe(function (res) {
            _this.listPerjalananRon = res.data;
        });
    };
    EditComponent.prototype.deleteRon = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasRonService.deleteDirektoriPerjalananDinasRonsId(id).subscribe(function (data) {
            _this.getRon();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasService.getDirektoriPerjalananDinasId(this.id_perjalanan_dinas).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            keperluan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_kembali: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            transportasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_penginapan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_saku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_dll: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataPerjalanan = this.dataForm.value;
        this.direktoriPerjalananDinasService
            .putDirektoriPerjalananDinasId({ id: this.id_perjalanan_dinas, body: this.dataPerjalanan })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'lainnya', 'perjalanan-dinas', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xhaW5ueWEvcGVyamFsYW5hbi1kaW5hcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPerjalananDinasService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataPerjalanan = [];
        this.id_perjalanan_dinas = '';
        this.sortKey = null;
        this.sortValue = null;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPerjalanan();
    };
    ListComponent.prototype.getPerjalanan = function () {
        var _this = this;
        this.direktoriPerjalananDinasService.getDirektoriPerjalananDinas(JSON.stringify({ id_pegawai: this.id_pegawai, sortKey: this.sortKey, sortValue: this.sortValue })).subscribe(function (data) {
            _this.dataPerjalanan = data.data;
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getPerjalanan();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasService
            .deleteDirektoriPerjalananDinasId(id)
            .subscribe(function (data) {
            _this.getPerjalanan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PerjalananDinasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerjalananDinasRoutingModule", function() { return PerjalananDinasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.ts");







var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
    {
        path: 'edit/:id_perjalanan_dinas',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
    },
    {
        path: 'detail/:id_perjalanan_dinas',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"],
    },
];
var PerjalananDinasRoutingModule = /** @class */ (function () {
    function PerjalananDinasRoutingModule() {
    }
    PerjalananDinasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], PerjalananDinasRoutingModule);
    return PerjalananDinasRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/perjalanan-dinas.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/perjalanan-dinas.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PerjalananDinasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerjalananDinasModule", function() { return PerjalananDinasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perjalanan_dinas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perjalanan-dinas-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lainnya/perjalanan-dinas/detail/detail.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var PerjalananDinasModule = /** @class */ (function () {
    function PerjalananDinasModule() {
    }
    PerjalananDinasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _perjalanan_dinas_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerjalananDinasRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_12__["ApprovalModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PerjalananDinasModule);
    return PerjalananDinasModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbGFpbm55YS9wZXJqYWxhbmFuLWRpbmFzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPerjalananDinasService, direktoriPerjalananDinasRonService, absensiPilotRonService, notification, direktoriPegawaiMasterService, spinner, pegawaiDetailService, fb, pesan, router) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.direktoriPerjalananDinasRonService = direktoriPerjalananDinasRonService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.notification = notification;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataPerjalananDinas = {};
        this.dataPerjalananRon = [];
        this.id_perjalanan_dinas = '';
        this.listRon = [];
        this.id_pegawai = '';
        this.id_ron_kode = '';
        this.tanggal = '';
        this.listPerjalananRon = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log(_this.id_pegawai);
            _this.form();
            _this.getPreeData();
            _this.beforeCreate();
        });
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.listRon = data.data;
        });
    };
    AddComponent.prototype.tambah_ron = function () {
        var _this = this;
        if (this.id_ron_kode == '' || this.id_ron_kode == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriPerjalananDinasRonService.postDirektoriPerjalananDinasRons({
            id_perjalanan_dinas: this.id_perjalanan_dinas,
            id_ron_kode: this.id_ron_kode,
            tanggal: this.tanggal
        }).subscribe(function (res) {
            _this.getRon();
        });
    };
    AddComponent.prototype.getRon = function () {
        var _this = this;
        var filter = {
            id_perjalanan_dinas: this.id_perjalanan_dinas,
        };
        this.direktoriPerjalananDinasRonService.getDirektoriPerjalananDinasRons(JSON.stringify(filter)).subscribe(function (res) {
            _this.listPerjalananRon = res.data;
        });
    };
    AddComponent.prototype.deleteRon = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasRonService.deleteDirektoriPerjalananDinasRonsId(id).subscribe(function (data) {
            _this.getRon();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.direktoriPerjalananDinasService.postDirektoriPerjalananDinas(this.dataPerjalananDinas).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_perjalanan_dinas = data.data.id_perjalanan_dinas;
            console.log(data.data);
            _this.getRon();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            tujuan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            keperluan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_kembali: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            transportasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_dll: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_saku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_penginapan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.dataPerjalananDinas = this.dataForm.value;
        this.direktoriPerjalananDinasService
            .putDirektoriPerjalananDinasId({ id: this.id_perjalanan_dinas, body: this.dataPerjalananDinas })
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
        this.router.navigate(['/profile/lainnya/perjalanan-dinas/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasRonService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbGFpbm55YS9wZXJqYWxhbmFuLWRpbmFzL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPerjalananDinasService, notification, direktoriPegawaiMasterService, spinner, pegawaiDetailService, fb, pesan, router, activatedRoute) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.notification = notification;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataPerjalanan = {};
        this.id_perjalanan_dinas = '';
        this.id_pegawai = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_perjalanan_dinas')) {
                _this.id_perjalanan_dinas = data.get('id_perjalanan_dinas');
                console.log(data.get('id_perjalanan_dinas'));
                _this.form();
                _this.getData();
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasService.getDirektoriPerjalananDinasId(this.id_perjalanan_dinas).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_perjalanan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tujuan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            keperluan_dinas: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_kembali: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            transportasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_penginapan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_saku: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            uang_dll: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            no_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataPerjalanan = this.dataForm.value;
        this.direktoriPerjalananDinasService
            .putDirektoriPerjalananDinasId({ id: this.id_perjalanan_dinas, body: this.dataPerjalanan })
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
        this.router.navigate(['/profile/lainnya/perjalanan-dinas/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbGFpbm55YS9wZXJqYWxhbmFuLWRpbmFzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPerjalananDinasService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.direktoriPerjalananDinasService = direktoriPerjalananDinasService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataPerjalanan = [];
        this.id_perjalanan_dinas = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPerjalanan();
    };
    ListComponent.prototype.getPerjalanan = function () {
        var _this = this;
        this.direktoriPerjalananDinasService.getDirektoriPerjalananDinas(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataPerjalanan = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPerjalananDinasService
            .deleteDirektoriPerjalananDinasId(id)
            .subscribe(function (data) {
            _this.getPerjalanan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPerjalananDinasService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PerjalananDinasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerjalananDinasRoutingModule", function() { return PerjalananDinasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
    {
        path: 'edit/:id_perjalanan_dinas',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"],
    },
];
var PerjalananDinasRoutingModule = /** @class */ (function () {
    function PerjalananDinasRoutingModule() {
    }
    PerjalananDinasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], PerjalananDinasRoutingModule);
    return PerjalananDinasRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/lainnya/perjalanan-dinas/perjalanan-dinas.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile/lainnya/perjalanan-dinas/perjalanan-dinas.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PerjalananDinasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerjalananDinasModule", function() { return PerjalananDinasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perjalanan_dinas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perjalanan-dinas-routing.module */ "./src/app/pages/profile/lainnya/perjalanan-dinas/perjalanan-dinas-routing.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/lainnya/perjalanan-dinas/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var PerjalananDinasModule = /** @class */ (function () {
    function PerjalananDinasModule() {
    }
    PerjalananDinasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _perjalanan_dinas_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerjalananDinasRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PerjalananDinasModule);
    return PerjalananDinasModule;
}());



/***/ })

}]);
//# sourceMappingURL=lainnya-perjalanan-dinas-perjalanan-dinas-module.js.map