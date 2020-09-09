(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lembur-lembur-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"air__utils__heading card-header-flex\">\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\n            <h5 class=\"mb-0\">New Lembur</h5>\n        </div>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"row\">\n\n        <!-- LEFT CARD -->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>tanggal_lembur</nz-form-label>\n                                <nz-form-control>\n                                    {{tanggal_lembur}}\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>lama_lembur</nz-form-label>\n                                <nz-form-control>\n                                    <nz-input-group nzAddOnAfter=\"Hours\">\n                                        <nz-input-number style=\"width: 100%;\" formControlName=\"lama_lembur\" [nzMin]=\"1\"\n                                            [nzMax]=\"10\" [nzStep]=\"1\">\n                                        </nz-input-number>\n                                    </nz-input-group>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Type</nz-form-label>\n                                <nz-form-control>\n                                    <nz-select formControlName=\"id_lembur_pengaturan\" nzAllowClear\n                                        nzplaceholder=\"Types\">\n                                        <nz-option *ngFor=\"let item of listPengaturan\"\n                                            nzValue=\"{{item.id_lembur_pengaturan}}\"\n                                            nzLabel=\"{{item.lembur_pengaturan}}\"></nz-option>\n                                    </nz-select>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Keterangan</nz-form-label>\n                                <nz-form-control>\n                                    <textarea nz-input placeholder=\"Please insert description\"\n                                        formControlName=\"keterangan_lembur\"\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n\n                        <div class=\"footer\">\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- END LEFT CARD -->\n\n        <!-- RIGHT CARD -->\n        <div class=\"col-md-6\"></div>\n        <!-- END RIGHT CARD -->\n\n    </div>\n    <!-- END BODY -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"air__utils__heading card-header-flex\">\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\n            <h5 class=\"mb-0\">View Overtime</h5>\n        </div>\n\n        <div class=\"d-flex flex-column justify-content-center\">\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\n                    nzType=\"printer\"></i>Print</button>\n        </div>\n    </div>\n\n    <!-- BODY -->\n    <div nz-row nzGutter=\"8\">\n\n        <!-- LEFT CARD -->\n        <div nz-col nzSpan=\"16\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <table class=\"table table-borderless\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Name</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}} {{pegawai.nama_belakang}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Date</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.tanggal_lembur | date: 'fullDate'}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Status</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.status_lembur}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Claim</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.lama_lembur}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Approved</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.lama_disetujui}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Description</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.keterangan_lembur}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"footer\">\n                        <div class=\"row\">\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\n                                    style=\"margin-right: 8px;\">Back</button>\n\n                                <!--\n                                <button nz-button nzType=\"default\" *ngIf=\"expression\" (click)=\"call_approved()\"\n                                    style=\"margin-right: 8px;\">Process Approved</button>\n\n                                <button nz-button nzType=\"primary\" (click)=\"approved()\">Approved</button> -->\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END LEFT CARD -->\n\n\n\n    </div>\n    <!-- BODY -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"air__utils__heading card-header-flex\">\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\n            <h5 class=\"mb-0\">Edit Lembur</h5>\n        </div>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"row\">\n\n        <!-- LEFT CARD -->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>tanggal_lembur</nz-form-label>\n                                <nz-form-control>\n                                    {{dataForm.get('tanggal_lembur').value | date: 'mediumDate'}}\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>lama_lembur</nz-form-label>\n                                <nz-form-control>\n                                    <nz-input-group nzAddOnAfter=\"Hours\">\n                                        <nz-input-number style=\"width: 100%;\" formControlName=\"lama_lembur\" [nzMin]=\"1\"\n                                            [nzMax]=\"10\" [nzStep]=\"1\">\n                                        </nz-input-number>\n                                    </nz-input-group>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Type</nz-form-label>\n                                <nz-form-control>\n                                    <nz-select formControlName=\"id_lembur_pengaturan\" nzAllowClear\n                                        nzplaceholder=\"Types\">\n                                        <nz-option *ngFor=\"let item of listPengaturan\"\n                                            nzValue=\"{{item.id_lembur_pengaturan}}\"\n                                            nzLabel=\"{{item.lembur_pengaturan}}\"></nz-option>\n                                    </nz-select>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Keterangan</nz-form-label>\n                                <nz-form-control>\n                                    <textarea nz-input placeholder=\"Please insert description\"\n                                        formControlName=\"keterangan_lembur\"\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n\n                        <div class=\"footer\">\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- END LEFT CARD -->\n\n        <!-- RIGHT CARD -->\n        <div class=\"col-md-6\"></div>\n        <!-- END RIGHT CARD -->\n\n    </div>\n    <!-- END BODY -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Over Time</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <!-- <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                    <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n                </a> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\"\r\n                [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n                (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status_lembur\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"tanggal_lembur\">Date</th>\r\n                        <th>lembur_pengaturan</th>\r\n                        <th nzShowSort nzSortKey=\"lama_lembur\">lama_lembur</th>\r\n                        <th nzShowSort nzSortKey=\"lama_disetujui\">lama_disetujui</th>\r\n                        <!-- <th nzShowSort nzSortKey=\"keterangan_lembur\">keterangan_lembur</th> -->\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.status_lembur }}</td>\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status_lembur | status\">{{data.status_lembur |titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.tanggal_lembur | date  }}</td>\r\n                        <td>{{ data.lembur_pengaturan }}</td>\r\n                        <td>{{ data.lama_lembur }}H</td>\r\n                        <td>{{ data.lama_disetujui }}H</td>\r\n                        <!-- <td>{{ data.keterangan_lembur }}</td> -->\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_lembur]\"><i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i> View\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_lembur]\"><i nz-icon nzType=\"edit\"\r\n                                            nzTheme=\"outline\"></i> Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_lembur)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\"\r\n                                                nzTheme=\"outline\"></i> Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/detail/detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/lembur/detail/detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"air__utils__heading card-header-flex\">\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\n            <h5 class=\"mb-0\">View Overtime</h5>\n        </div>\n\n        <div class=\"d-flex flex-column justify-content-center\">\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\n                    nzType=\"printer\"></i>Print</button>\n        </div>\n    </div>\n\n    <!-- BODY -->\n    <div nz-row nzGutter=\"8\">\n\n        <!-- LEFT CARD -->\n        <div nz-col nzSpan=\"16\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <table class=\"table table-borderless\">\n                        <tbody>\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Name</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_depan}} {{pegawai.nama_belakang}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Date</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.tanggal_lembur | date: 'fullDate'}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Status</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.status_lembur}}</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Claim</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.lama_lembur}} H</td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Overtime Approved</td>\n                                <td *ngIf=\"!is_approved\" class=\"pr-0 text-right text-dark\"> {{lembur.lama_disetujui}} H\n                                </td>\n                                <td *ngIf=\"is_approved\" class=\"pr-0 text-right text-dark\">\n                                    <nz-input-number style=\"width: 100%;\" [(ngModel)]=\"lembur.lama_disetujui\"\n                                        [nzMin]=\"1\" [nzMax]=\"10\" [nzStep]=\"1\">\n                                    </nz-input-number>\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td class=\"text-gray-6 pl-0\">Description</td>\n                                <td class=\"pr-0 text-right text-dark\"> {{lembur.keterangan_lembur}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"footer\">\n\n                        <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\n\n\n                        <button nz-button nzType=\"default\" *ngIf=\"!is_approved\" (click)=\"call_approved()\"\n                            style=\"margin-right: 8px;\">Process Approved</button>\n\n                        <button nz-button nzType=\"primary\" *ngIf=\"is_approved\" (click)=\"approved()\">Approved</button>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END LEFT CARD -->\n\n\n\n    </div>\n    <!-- BODY -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/edit/edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/lembur/edit/edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"air__utils__heading card-header-flex\">\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\n            <h5 class=\"mb-0\">Edit Lembur</h5>\n        </div>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"row\">\n\n        <!-- LEFT CARD -->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>tanggal_lembur</nz-form-label>\n                                <nz-form-control>\n                                    {{dataForm.get('tanggal_lembur').value | date: 'mediumDate'}}\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>lama_lembur</nz-form-label>\n                                <nz-form-control>\n                                    <nz-input-group nzAddOnAfter=\"Hours\">\n                                        <nz-input-number style=\"width: 100%;\" formControlName=\"lama_lembur\" [nzMin]=\"1\"\n                                            [nzMax]=\"10\" [nzStep]=\"1\">\n                                        </nz-input-number>\n                                    </nz-input-group>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Type</nz-form-label>\n                                <nz-form-control>\n                                    <nz-select formControlName=\"id_lembur_pengaturan\" nzAllowClear\n                                        nzplaceholder=\"Types\">\n                                        <nz-option *ngFor=\"let item of listPengaturan\"\n                                            nzValue=\"{{item.id_lembur_pengaturan}}\"\n                                            nzLabel=\"{{item.lembur_pengaturan}}\"></nz-option>\n                                    </nz-select>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n                        <div nz-row nzGutter=\"8\">\n                            <nz-form-item>\n                                <nz-form-label>Keterangan</nz-form-label>\n                                <nz-form-control>\n                                    <textarea nz-input placeholder=\"Please insert description\"\n                                        formControlName=\"keterangan_lembur\"\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\n                                </nz-form-control>\n                            </nz-form-item>\n                        </div>\n\n                        <div class=\"footer\">\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- END LEFT CARD -->\n\n        <!-- RIGHT CARD -->\n        <div class=\"col-md-6\"></div>\n        <!-- END RIGHT CARD -->\n\n    </div>\n    <!-- END BODY -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/list/list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/lembur/list/list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Over Time</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <!-- <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                    <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n                </a> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\"\r\n                [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n                (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status_lembur\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Employe</th>\r\n                        <th nzShowSort nzSortKey=\"tanggal_lembur\">Date</th>\r\n                        <th>Overtime Setting</th>\r\n                        <th nzShowSort nzSortKey=\"lama_lembur\">Overtime</th>\r\n                        <th nzShowSort nzSortKey=\"lama_disetujui\">Overtime Approved</th>\r\n                        <!-- <th nzShowSort nzSortKey=\"keterangan_lembur\">keterangan_lembur</th> -->\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag style=\"float: right;\" [nzColor]=\"data.status_lembur | status\">\r\n                                {{ data.status_lembur | titlecase }}\r\n                            </nz-tag>\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"p-1\">\r\n                                    <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                        nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                                    </nz-avatar>\r\n                                    <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                                </div>\r\n                                <div class=\"mr-auto pl-2\">\r\n                                    <a [routerLink]=\"['/hr/direktori/employee/pegawai/pegawai-detail',data.id_pegawai]\">\r\n                                        <b>{{ data.nama_depan }} {{ data.nama_belakang }}</b>\r\n                                    </a>\r\n                                    <br>\r\n                                    {{ data.nama_jabatan }}\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>{{ data.tanggal_lembur | date  }}</td>\r\n                        <td>{{ data.lembur_pengaturan }}</td>\r\n                        <td>{{ data.lama_lembur }}H</td>\r\n                        <td>{{ data.lama_disetujui }}H</td>\r\n                        <!-- <td>{{ data.keterangan_lembur }}</td> -->\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_lembur]\"><i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i> View\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_lembur]\"><i nz-icon nzType=\"edit\"\r\n                                            nzTheme=\"outline\"></i> Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_lembur)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\"\r\n                                                nzTheme=\"outline\"></i> Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xlbWJ1ci9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.ts ***!
  \***************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var AddComponent = /** @class */ (function () {
    function AddComponent(kalenderLemburService, kalenderLemburPengaturanService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.kalenderLemburService = kalenderLemburService;
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.tanggal_lembur = '';
        this.listPengaturan = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tanggal_lembur = this.activatedRoute.snapshot.paramMap.get('tanggal');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log(data);
        });
        this.form();
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.listPengaturan = data.data;
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pegawai_posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_lembur_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lama_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            lama_disetujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_setujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.tanggal_lembur),
            keterangan_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ref_id_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.dataForm.patchValue({ tanggal_lembur: this.tanggal_lembur });
        if (this.dataForm.invalid) {
            console.log(this.dataForm.value);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.kalenderLemburService
            .postKalenderLemburs(this.dataForm.value)
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'lembur']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xlbWJ1ci9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(routerActive, kalenderLemburService, direktoriPegawaiService, kalenderLemburPengaturanService, spinner, router) {
        this.routerActive = routerActive;
        this.kalenderLemburService = kalenderLemburService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.spinner = spinner;
        this.router = router;
        this.lembur = {};
        this.lembur_pengaturan = {};
        this.id_lembur = '';
        this.pegawai = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id_lembur = this.routerActive.snapshot.paramMap.get('id_lembur');
        console.log(this.id_lembur);
        this.getData();
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.kalenderLemburService.getKalenderLembursId(this.id_lembur).subscribe(function (response) {
            _this.lembur = response.data;
            _this.spinner.hide();
            _this.getDetailPengaturan(response.data.id_lembur_pengaturan);
            _this.getPegawai(response.data.id_pegawai);
        });
    };
    DetailComponent.prototype.getDetailPengaturan = function (id_lembur_pengaturan) {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturansId(id_lembur_pengaturan).subscribe(function (data) {
            _this.lembur_pengaturan = data.data;
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.lembur.id_pegawai, 'lembur']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xlbWJ1ci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.ts ***!
  \*****************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(kalenderLemburService, kalenderLemburPengaturanService, spinner, notification, fb, pegawaiDetailService, pesan, router, activatedRoute) {
        this.kalenderLemburService = kalenderLemburService;
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_lembur = '';
        this.listPengaturan = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_lembur = this.activatedRoute.snapshot.paramMap.get('id_lembur');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.form();
        this.getPreeData();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.kalenderLemburService.getKalenderLembursId(this.id_lembur).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.listPengaturan = data.data;
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pegawai_posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_lembur_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lama_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            lama_disetujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_setujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            keterangan_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ref_id_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            console.log(this.dataForm.value);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.kalenderLemburService
            .putKalenderLembursId({ id: this.id_lembur, body: this.dataForm.value })
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
        this.router.navigate(['/hr/direktori/employee/pegawai-detail', this.id_pegawai, 'lembur']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_9__["PegawaiDetailService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/lembur-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/lembur-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: LemburRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LemburRoutingModule", function() { return LemburRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.ts");







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
        path: 'add/:tanggal',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_lembur',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'detail/:id_lembur',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"]
    }
];
var LemburRoutingModule = /** @class */ (function () {
    function LemburRoutingModule() {
    }
    LemburRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LemburRoutingModule);
    return LemburRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/lembur.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/lembur.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LemburModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LemburModule", function() { return LemburModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lembur_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lembur-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/lembur-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/detail/detail.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");












var LemburModule = /** @class */ (function () {
    function LemburModule() {
    }
    LemburModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lembur_routing_module__WEBPACK_IMPORTED_MODULE_3__["LemburRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"]
            ]
        })
    ], LemburModule);
    return LemburModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2xlbWJ1ci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(kalenderLemburService, spinner, nzMessageService, pegawaiDetailService) {
        this.kalenderLemburService = kalenderLemburService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
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
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.searchData();
        });
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
        this.kalenderLemburService
            .getKalenderLemburs(JSON.stringify({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search,
            id_pegawai: this.id_pegawai,
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
        this.kalenderLemburService.deleteKalenderLembursId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/lembur/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/detail/detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/detail/detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL2xlbWJ1ci9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/detail/detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/detail/detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(routerActive, kalenderLemburService, direktoriPegawaiService, kalenderLemburPengaturanService, spinner, router) {
        this.routerActive = routerActive;
        this.kalenderLemburService = kalenderLemburService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.spinner = spinner;
        this.router = router;
        this.lembur = {};
        this.lembur_pengaturan = {};
        this.id_lembur = '';
        this.pegawai = {};
        this.is_approved = false;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id_lembur = this.routerActive.snapshot.paramMap.get('id_lembur');
        console.log(this.id_lembur);
        this.getData();
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.kalenderLemburService.getKalenderLembursId(this.id_lembur).subscribe(function (response) {
            _this.lembur = response.data;
            _this.spinner.hide();
            _this.getDetailPengaturan(response.data.id_lembur_pengaturan);
            _this.getPegawai(response.data.id_pegawai);
        });
    };
    DetailComponent.prototype.getDetailPengaturan = function (id_lembur_pengaturan) {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturansId(id_lembur_pengaturan).subscribe(function (data) {
            _this.lembur_pengaturan = data.data;
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/kalender/lembur']);
    };
    DetailComponent.prototype.call_approved = function () {
        this.is_approved = !this.is_approved;
    };
    DetailComponent.prototype.approved = function () {
        var _this = this;
        this.spinner.show();
        this.kalenderLemburService.putKalenderLembursId({ id: this.id_lembur, body: this.lembur }).subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
            _this.is_approved = !_this.is_approved;
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/kalender/lembur/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_4__["KalenderLemburPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/edit/edit.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/edit/edit.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL2xlbWJ1ci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/edit/edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/edit/edit.component.ts ***!
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









var EditComponent = /** @class */ (function () {
    function EditComponent(kalenderLemburService, kalenderLemburPengaturanService, spinner, notification, fb, pesan, router, activatedRoute) {
        this.kalenderLemburService = kalenderLemburService;
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.id_lembur = '';
        this.listPengaturan = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_lembur = this.activatedRoute.snapshot.paramMap.get('id_lembur');
        this.form();
        this.getPreeData();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.kalenderLemburService.getKalenderLembursId(this.id_lembur).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_pegawai = data.data.id_pegawai;
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.listPengaturan = data.data;
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.id_pegawai, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_pegawai_posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_lembur_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lama_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            lama_disetujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_setujui: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            keterangan_lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ref_id_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            console.log(this.dataForm.value);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.kalenderLemburService
            .putKalenderLembursId({ id: this.id_lembur, body: this.dataForm.value })
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
        this.router.navigate(['/hr/kalender/lembur']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/kalender/lembur/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/lembur-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/lembur-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LemburRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LemburRoutingModule", function() { return LemburRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/kalender/lembur/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/kalender/lembur/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/kalender/lembur/detail/detail.component.ts");






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
        path: 'edit/:id_lembur',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
    {
        path: 'detail/:id_lembur',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
    }
];
var LemburRoutingModule = /** @class */ (function () {
    function LemburRoutingModule() {
    }
    LemburRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LemburRoutingModule);
    return LemburRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/lembur.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/lembur.module.ts ***!
  \***********************************************************/
/*! exports provided: LemburModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LemburModule", function() { return LemburModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lembur_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lembur-routing.module */ "./src/app/pages/hr/kalender/lembur/lembur-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/kalender/lembur/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/kalender/lembur/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/kalender/lembur/detail/detail.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");











var LemburModule = /** @class */ (function () {
    function LemburModule() {
    }
    LemburModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lembur_routing_module__WEBPACK_IMPORTED_MODULE_3__["LemburRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"]
            ]
        })
    ], LemburModule);
    return LemburModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/list/list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/list/list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL2xlbWJ1ci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/lembur/list/list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/hr/kalender/lembur/list/list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(kalenderLemburService, spinner, nzMessageService) {
        this.kalenderLemburService = kalenderLemburService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
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
        this.kalenderLemburService
            .getKalenderLemburs(JSON.stringify({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search
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
        this.kalenderLemburService.deleteKalenderLembursId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/lembur/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/kalender/lembur/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
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
//# sourceMappingURL=lembur-lembur-module.js.map