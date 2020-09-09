(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-data-flow-data-flow-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/add/add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/approval/data-flow/add/add.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Flow</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Flow name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"name_flow\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>For module</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"for_module\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Table name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"tabel_name\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Default status</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input formControlName=\"default_status\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Close status</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input formControlName=\"close_status\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Kantor</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select formControlName=\"id_kantor\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                            <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                                nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Divisi</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select formControlName=\"id_divisi\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                            <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                                nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_departemen\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"toogleEdit == false\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\"> Data Flow Detail </h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"toogleAddShow()\">\r\n                    Add\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd == true\">\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Status</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"status\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Pegawai</nz-form-label>\r\n                    <nz-select [(ngModel)]=\"id_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                        <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                            nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Sebagai</nz-form-label>\r\n                    <nz-select [(ngModel)]=\"sebagai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                        <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                            nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Next step</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"button_next_text\" />\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd\">\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Message</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"pesan\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Order</nz-form-label>\r\n                    <input nz-input type=\"number\" [(ngModel)]=\"order_by\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Reject</nz-form-label>\r\n                    <input nz-input type=\"number\" [(ngModel)]=\"reject\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Keterangan</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"keterangan\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-label>-</nz-form-label>\r\n                    <button nz-button nzType=\"primary\" (click)=\"tambahDetail()\">Add detail</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <nz-table #basicTable1 [nzData]=\"listDetail\" [nzShowPagination]=\"false\"\r\n            class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Status</th>\r\n                        <th>Pegawai</th>\r\n                        <th>Sebagai</th>\r\n                        <th>Next step</th>\r\n                        <th>Message</th>\r\n                        <th>Order</th>\r\n                        <th>Reject</th>\r\n                        <th>Keterangan</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.status}}</td>\r\n                        <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                        <td>{{data.sebagai}}</td>\r\n                        <td>{{data.button_next_text}}</td>\r\n                        <td>{{data.pesan}}</td>\r\n                        <td>{{data.order_by}}</td>\r\n                        <td>{{data.reject}}</td>\r\n                        <td>{{data.keterangan}}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item (click)=\"toogleEditShow(data.id_data_flow_detail)\">\r\n                                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"deleteDetail(data.id_data_flow_detail)\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n            <br/>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\" *ngIf=\"toogleEdit == true\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h6 class=\"mb=0\"> Edit Data Flow Detail </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"detailFlow\" >\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <input nz-input formControlName=\"status\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Pegawai</nz-form-label>\r\n                        <nz-select formControlName=\"id_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Sebagai</nz-form-label>\r\n                        <nz-select formControlName=\"sebagai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                                nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Next step</nz-form-label>\r\n                        <input nz-input formControlName=\"button_next_text\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Message</nz-form-label>\r\n                        <input nz-input formControlName=\"pesan\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Order</nz-form-label>\r\n                        <input nz-input type=\"number\" formControlName=\"order_by\" />\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Reject</nz-form-label>\r\n                        <input nz-input type=\"number\" formControlName=\"reject\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Keterangan</nz-form-label>\r\n                        <input nz-input formControlName=\"keterangan\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\" class=\"text-right\">\r\n                        <br />\r\n                        <br />\r\n                        <button type=\"button\" (click)=\"Cancel()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button (click)=\"UpdateDetail()\" class=\"ant-btn ant-btn-primary\"\r\n                            ><span>Update</span></button>\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/detail/detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/approval/data-flow/detail/detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Flow</h5>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-borderless\">\r\n                <tbody>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Nama</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.name_flow}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">For module</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.for_module}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Table</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.tabel_name}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Default status</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.default_status}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Close status</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.close_status}}</td>\r\n                            </tr>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataKantor.nama_kantor}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Divisi</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataDivisi.nama_divisi}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Departemen</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataDepartemen.nama_departemen}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-gray-6 pl-0\">Data flow status</td>\r\n                                <td class=\"pr-0 text-left text-dark\">: {{dataFlow.data_flow_status}}</td>\r\n                            </tr>\r\n                        </div>\r\n                    </div>\r\n                </tbody>\r\n            </table>\r\n            <h6 class=\"mb=0\">Deskripsi: </h6>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <tr class=\"text-gray-6 pl-0\">{{dataFlow.description}}</tr>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\"> Data Flow Detail </h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <nz-table #basicTable1 [nzData]=\"listDetail\" [nzShowPagination]=\"false\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Status</th>\r\n                        <th>Pegawai</th>\r\n                        <th>Sebagai</th>\r\n                        <th>Next step</th>\r\n                        <th>Message</th>\r\n                        <th>Order</th>\r\n                        <th>Reject</th>\r\n                        <th>Keterangan</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.status}}</td>\r\n                        <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                        <td>{{data.sebagai}}</td>\r\n                        <td>{{data.button_next_text}}</td>\r\n                        <td>{{data.pesan}}</td>\r\n                        <td>{{data.order_by}}</td>\r\n                        <td>{{data.reject}}</td>\r\n                        <td>{{data.keterangan}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Back</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/approval/data-flow/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Flow</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Flow name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"name_flow\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>For module</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"for_module\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Table name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"tabel_name\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Default status</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input formControlName=\"default_status\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Close status</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input formControlName=\"close_status\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Kantor</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select formControlName=\"id_kantor\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                            <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                                nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Divisi</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select formControlName=\"id_divisi\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                            <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                                nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departemen</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"id_departemen\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"toogleEdit == false\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\"> Data Flow Detail </h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"toogleAddShow()\">\r\n                    Add\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd == true\">\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Status</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"status\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Pegawai</nz-form-label>\r\n                    <nz-select [(ngModel)]=\"id_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                        <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                            nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Sebagai</nz-form-label>\r\n                    <nz-select [(ngModel)]=\"sebagai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                        <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                            nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                    </nz-select>\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Next step</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"button_next_text\" />\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd\">\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Message</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"pesan\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Order</nz-form-label>\r\n                    <input nz-input type=\"number\" [(ngModel)]=\"order_by\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Reject</nz-form-label>\r\n                    <input nz-input type=\"number\" [(ngModel)]=\"reject\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"5\">\r\n                    <nz-form-label>Keterangan</nz-form-label>\r\n                    <input nz-input [(ngModel)]=\"keterangan\" />\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-label>-</nz-form-label>\r\n                    <button nz-button nzType=\"primary\" (click)=\"tambahDetail()\">Add detail</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <nz-table #basicTable1 [nzData]=\"listDetail\" [nzShowPagination]=\"false\"\r\n            class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Status</th>\r\n                        <th>Pegawai</th>\r\n                        <th>Sebagai</th>\r\n                        <th>Next step</th>\r\n                        <th>Message</th>\r\n                        <th>Order</th>\r\n                        <th>Reject</th>\r\n                        <th>Keterangan</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.status}}</td>\r\n                        <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                        <td>{{data.sebagai}}</td>\r\n                        <td>{{data.button_next_text}}</td>\r\n                        <td>{{data.pesan}}</td>\r\n                        <td>{{data.order_by}}</td>\r\n                        <td>{{data.reject}}</td>\r\n                        <td>{{data.keterangan}}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item (click)=\"toogleEditShow(data.id_data_flow_detail)\">\r\n                                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"deleteDetail(data.id_data_flow_detail)\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n            <br/>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\" *ngIf=\"toogleEdit == true\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h6 class=\"mb=0\"> Edit Data Flow Detail </h6>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"detailFlow\" >\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <input nz-input formControlName=\"status\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Pegawai</nz-form-label>\r\n                        <nz-select formControlName=\"id_pegawai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Sebagai</nz-form-label>\r\n                        <nz-select formControlName=\"sebagai\" nzAllowClear nzPlaceHolder=\"Choose\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                                nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Next step</nz-form-label>\r\n                        <input nz-input formControlName=\"button_next_text\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Message</nz-form-label>\r\n                        <input nz-input formControlName=\"pesan\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Order</nz-form-label>\r\n                        <input nz-input type=\"number\" formControlName=\"order_by\" />\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Reject</nz-form-label>\r\n                        <input nz-input type=\"number\" formControlName=\"reject\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-label>Keterangan</nz-form-label>\r\n                        <input nz-input formControlName=\"keterangan\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\" class=\"text-right\">\r\n                        <br />\r\n                        <br />\r\n                        <button type=\"button\" (click)=\"Cancel()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button (click)=\"UpdateDetail()\" class=\"ant-btn ant-btn-primary\"\r\n                            ><span>Update</span></button>\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/approval/data-flow/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Data Flow</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Flow\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"name_flow\">Name</th>\r\n                        <th nzShowSort nzSortKey=\"for_module\">Module</th>\r\n                        <th nzShowSort nzSortKey=\"tabel_name\">Table name</th>\r\n                        <th nzShowSort nzSortKey=\"default_status\">Default status</th>\r\n                        <th nzShowSort nzSortKey=\"close_status\">Close status</th>\r\n                        <th nzShowSort nzSortKey=\"nama_kantor\">Kantor</th>\r\n                        <th nzShowSort nzSortKey=\"nama_divisi\">Divisi</th>\r\n                        <th nzShowSort nzSortKey=\"nama_departemen\">Departemen</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.name_flow }}</td>\r\n                        <td>{{ data.for_module}}</td>\r\n                        <td>{{ data.tabel_name}}</td>\r\n                        <td>{{ data.default_status}}</td>\r\n                        <td>{{ data.close_status}}</td>\r\n                        <td>{{ data.nama_kantor}}</td>\r\n                        <td>{{ data.nama_divisi}}</td>\r\n                        <td>{{ data.nama_departemen}}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item\r\n                                    [routerLink]=\"['../edit',data.id_data_flow]\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-item\r\n                                    [routerLink]=\"['../detail',data.id_data_flow]\">\r\n                                    <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"delete(data.id_data_flow)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/add/add.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/add/add.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2FwcHJvdmFsL2RhdGEtZmxvdy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/add/add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/add/add.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-master.service */ "./src/app/sdk/hr/services/direktori-pegawai-master.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AddComponent = /** @class */ (function () {
    function AddComponent(toolsDataFlowService, direktoriPegawaiMasterService, toolsDataFlowDetailService, companyDivisiService, companyJabatanService, companyDepartemenService, companyKantorService, spinner, notification, fb, Pesanservice, router) {
        this.toolsDataFlowService = toolsDataFlowService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.toolsDataFlowDetailService = toolsDataFlowDetailService;
        this.companyDivisiService = companyDivisiService;
        this.companyJabatanService = companyJabatanService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.Pesanservice = Pesanservice;
        this.router = router;
        this.dataFlow = {};
        this.listDetail = [];
        this.id_data_flow = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listJabatan = [];
        this.toogleEdit = false;
        this.toogleAdd = false;
        this.status = '';
        this.id_pegawai = '';
        this.sebagai = '';
        this.button_next_text = '';
        this.pesan = '';
        this.order_by = '';
        this.keterangan = '';
        this.reject = 1;
        this.id_data_flow_detai = '';
        this.flowDetail = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.beforeCreate();
        this.getPreeData();
    };
    AddComponent.prototype.toogleAddShow = function () {
        this.toogleAdd = true;
    };
    //-------------------------------------
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyDivisiService.getCompanyDivisis().subscribe(function (data) {
            _this.listDivisi = data.data;
        });
        this.companyJabatanService.getCompanyJabatans().subscribe(function (data) {
            _this.listJabatan = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.tambahDetail = function () {
        var _this = this;
        var param = {
            id_data_flow: this.id_data_flow,
            status: this.status,
            id_pegawai: this.id_pegawai,
            sebagai: this.sebagai,
            pesan: this.pesan,
            order_by: this.order_by,
            reject: this.reject,
            keterangan: this.keterangan,
            button_next_text: this.button_next_text,
        };
        this.toolsDataFlowDetailService.postToolsDataFlowDetails(param).subscribe(function (res) {
            _this.toogleAdd = false;
            _this.getDetail();
        });
    };
    AddComponent.prototype.toogleEditShow = function (id) {
        this.toogleEdit = true;
        this.colom();
        this.getFlowDetail(id);
    };
    AddComponent.prototype.getDetail = function () {
        var _this = this;
        var filter = {
            id_data_flow: this.id_data_flow
        };
        this.toolsDataFlowDetailService.getToolsDataFlowDetails(JSON.stringify(filter)).subscribe(function (res) {
            _this.listDetail = res.data;
        });
    };
    AddComponent.prototype.deleteDetail = function (id) {
        var _this = this;
        this.spinner.show();
        this.toolsDataFlowDetailService.deleteToolsDataFlowDetailsId(id).subscribe(function (data) {
            _this.getDetail();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.getFlowDetail = function (id) {
        var _this = this;
        this.toolsDataFlowDetailService.getToolsDataFlowDetailsId(id).subscribe(function (data) {
            _this.detailFlow.setValue(data.data);
            _this.id_data_flow_detai = data.data.id_data_flow_detail;
        });
    };
    AddComponent.prototype.colom = function () {
        this.detailFlow = this.fb.group({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            sebagai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            button_next_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            pesan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.id_data_flow),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            reject: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            order_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    AddComponent.prototype.UpdateDetail = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.Pesanservice.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.flowDetail = this.detailFlow.value;
        this.toolsDataFlowDetailService.putToolsDataFlowDetailsId({ id: this.id_data_flow_detai, body: this.flowDetail }).subscribe(function (data) {
            _this.toogleEdit = false;
            _this.getDetail();
            _this.spinner.hide();
        }, function (err) {
            _this.Pesanservice.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.Cancel = function () {
        this.toogleEdit = false;
        this.getDetail();
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.toolsDataFlowService.postToolsDataFlows(this.dataFlow).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_data_flow = data.data.id_data_flow;
            console.log(data.data.id_data_flow);
            _this.getDetail();
        }, function (err) {
            _this.Pesanservice.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tabel_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            default_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            for_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            close_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_departemen: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            data_flow_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.Pesanservice.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataFlow = this.dataForm.value;
        this.toolsDataFlowService.putToolsDataFlowsId({ id: this.id_data_flow, body: this.dataFlow }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.Pesanservice.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/users/approval/data-flow/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsDataFlowService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsDataFlowDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/users/approval/data-flow/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsDataFlowService"],
            src_app_sdk_hr_services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_4__["DirektoriPegawaiMasterService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsDataFlowDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/data-flow-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/data-flow-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DataFlowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFlowRoutingModule", function() { return DataFlowRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/approval/data-flow/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/approval/data-flow/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/approval/data-flow/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/approval/data-flow/list/list.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]
    },
    {
        path: 'edit/:id_data_flow',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'detail/:id_data_flow',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    }
];
var DataFlowRoutingModule = /** @class */ (function () {
    function DataFlowRoutingModule() {
    }
    DataFlowRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DataFlowRoutingModule);
    return DataFlowRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/data-flow.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/data-flow.module.ts ***!
  \********************************************************************/
/*! exports provided: DataFlowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFlowModule", function() { return DataFlowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/approval/data-flow/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_flow_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-flow-routing.module */ "./src/app/pages/users/approval/data-flow/data-flow-routing.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/approval/data-flow/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/approval/data-flow/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/approval/data-flow/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var DataFlowModule = /** @class */ (function () {
    function DataFlowModule() {
    }
    DataFlowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _data_flow_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataFlowRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], DataFlowModule);
    return DataFlowModule;
}());



/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/detail/detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/detail/detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2FwcHJvdmFsL2RhdGEtZmxvdy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/detail/detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/detail/detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var DetailComponent = /** @class */ (function () {
    function DetailComponent(toolsDataFlowService, direktoriPegawaiMasterService, toolsDataFlowDetailService, companyDivisiService, companyJabatanService, companyDepartemenService, companyKantorService, spinner, notification, fb, Pesanservice, router, activatedRoute) {
        this.toolsDataFlowService = toolsDataFlowService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.toolsDataFlowDetailService = toolsDataFlowDetailService;
        this.companyDivisiService = companyDivisiService;
        this.companyJabatanService = companyJabatanService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.Pesanservice = Pesanservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataFlow = {};
        this.listDetail = [];
        this.id_data_flow = '';
        this.listPegawai = {};
        this.dataKantor = {};
        this.dataDepartemen = {};
        this.dataDivisi = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id_data_flow = this.activatedRoute.snapshot.paramMap.get('id_data_flow');
        this.getData();
        this.getDetail();
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.toolsDataFlowService.getToolsDataFlowsId(this.id_data_flow).subscribe(function (data) {
            _this.dataFlow = data.data;
            _this.getKantor(data.data.id_kantor);
            _this.getDivisi(data.data.id_divisi);
            _this.getDepartemen(data.data.id_departemen);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getKantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailComponent.prototype.getDivisi = function (id_divisi) {
        var _this = this;
        this.companyDivisiService.getCompanyDivisisId(id_divisi).subscribe(function (data) {
            _this.dataDivisi = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (id_departemen) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(id_departemen).subscribe(function (data) {
            _this.dataDepartemen = data.data;
        });
    };
    DetailComponent.prototype.getDetail = function () {
        var _this = this;
        var filter = {
            id_data_flow: this.id_data_flow
        };
        this.toolsDataFlowDetailService.getToolsDataFlowDetails(JSON.stringify(filter)).subscribe(function (res) {
            _this.listDetail = res.data;
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/users/approval/data-flow/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/users/approval/data-flow/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2FwcHJvdmFsL2RhdGEtZmxvdy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/edit/edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EditComponent = /** @class */ (function () {
    function EditComponent(toolsDataFlowService, direktoriPegawaiMasterService, toolsDataFlowDetailService, companyDivisiService, companyJabatanService, companyDepartemenService, companyKantorService, spinner, notification, fb, Pesanservice, router, activatedRoute) {
        this.toolsDataFlowService = toolsDataFlowService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.toolsDataFlowDetailService = toolsDataFlowDetailService;
        this.companyDivisiService = companyDivisiService;
        this.companyJabatanService = companyJabatanService;
        this.companyDepartemenService = companyDepartemenService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.Pesanservice = Pesanservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataFlow = {};
        this.listDetail = [];
        this.id_data_flow = '';
        this.listPegawai = [];
        this.listKantor = [];
        this.listDepartemen = [];
        this.listDivisi = [];
        this.listJabatan = [];
        this.toogleEdit = false;
        this.toogleAdd = false;
        this.status = '';
        this.id_pegawai = '';
        this.sebagai = '';
        this.button_next_text = '';
        this.pesan = '';
        this.order_by = '';
        this.keterangan = '';
        this.reject = 1;
        this.id_data_flow_detai = '';
        this.flowDetail = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_data_flow = this.activatedRoute.snapshot.paramMap.get('id_data_flow');
        this.form();
        this.getData();
        this.getDetail();
        this.getPreeData();
    };
    EditComponent.prototype.toogleAddShow = function () {
        this.toogleAdd = true;
    };
    EditComponent.prototype.toogleEditShow = function (id) {
        this.toogleEdit = true;
        this.colom();
        this.getFlowDetail(id);
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
        this.companyDivisiService.getCompanyDivisis().subscribe(function (data) {
            _this.listDivisi = data.data;
        });
        this.companyJabatanService.getCompanyJabatans().subscribe(function (data) {
            _this.listJabatan = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.tambahDetail = function () {
        var _this = this;
        var param = {
            id_data_flow: this.id_data_flow,
            status: this.status,
            id_pegawai: this.id_pegawai,
            sebagai: this.sebagai,
            pesan: this.pesan,
            order_by: this.order_by,
            reject: this.reject,
            keterangan: this.keterangan,
            button_next_text: this.button_next_text,
        };
        this.toolsDataFlowDetailService.postToolsDataFlowDetails(param).subscribe(function (res) {
            _this.toogleAdd = false;
            _this.getDetail();
        });
    };
    EditComponent.prototype.getDetail = function () {
        var _this = this;
        var filter = {
            id_data_flow: this.id_data_flow
        };
        this.toolsDataFlowDetailService.getToolsDataFlowDetails(JSON.stringify(filter)).subscribe(function (res) {
            _this.listDetail = res.data;
        });
    };
    EditComponent.prototype.deleteDetail = function (id) {
        var _this = this;
        this.spinner.show();
        this.toolsDataFlowDetailService.deleteToolsDataFlowDetailsId(id).subscribe(function (data) {
            _this.getDetail();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.getFlowDetail = function (id) {
        var _this = this;
        this.toolsDataFlowDetailService.getToolsDataFlowDetailsId(id).subscribe(function (data) {
            _this.detailFlow.setValue(data.data);
            _this.id_data_flow_detai = data.data.id_data_flow_detail;
        });
    };
    EditComponent.prototype.colom = function () {
        this.detailFlow = this.fb.group({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            sebagai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            button_next_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            pesan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            reject: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            order_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    EditComponent.prototype.UpdateDetail = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.Pesanservice.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.flowDetail = this.detailFlow.value;
        this.toolsDataFlowDetailService.putToolsDataFlowDetailsId({ id: this.id_data_flow_detai, body: this.flowDetail }).subscribe(function (data) {
            _this.toogleEdit = false;
            _this.getDetail();
            _this.spinner.hide();
        }, function (err) {
            _this.Pesanservice.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.Cancel = function () {
        this.toogleEdit = false;
        this.getDetail();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.toolsDataFlowService.getToolsDataFlowsId(this.id_data_flow).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            tabel_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            default_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            for_module: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            close_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_kantor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_departemen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            data_flow_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.Pesanservice.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataFlow = this.dataForm.value;
        this.toolsDataFlowService.putToolsDataFlowsId({ id: this.id_data_flow, body: this.dataFlow }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.Pesanservice.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/users/approval/data-flow/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowDetailService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/users/approval/data-flow/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowDetailService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2FwcHJvdmFsL2RhdGEtZmxvdy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/approval/data-flow/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/approval/data-flow/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services_tools_data_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services/tools-data-flow.service */ "./src/app/sdk/user/services/tools-data-flow.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(toolsDataFlowService, spinner, nzMessageService) {
        this.toolsDataFlowService = toolsDataFlowService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
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
        this.toolsDataFlowService
            .getToolsDataFlows(JSON.stringify({
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
        this.toolsDataFlowService.deleteToolsDataFlowsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services_tools_data_flow_service__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/approval/data-flow/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/users/approval/data-flow/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services_tools_data_flow_service__WEBPACK_IMPORTED_MODULE_2__["ToolsDataFlowService"],
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
//# sourceMappingURL=approval-data-flow-data-flow-module.js.map