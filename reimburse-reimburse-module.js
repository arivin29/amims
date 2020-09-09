(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reimburse-reimburse-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/add/add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/reimburse/add/add.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Reimburse</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"18\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Pegawai</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih pegawai\"\r\n                                            formControlName=\"id_pegawai\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Peruntukan</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                            formControlName=\"id_untuk\">\r\n                                            <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk_akun}}\"\r\n                                                nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Total\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('total') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"total\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Deskripsi</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan\"\r\n                                        [nzAutosize]=\"{ minRows: 3, maxRows: 6 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h5 class=\"mb=0\">Reimburse item</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"8\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Item</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Item\" [(ngModel)]=\"reimburse_item\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"7\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tanggal Item</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                            [(ngModel)]=\"tanggal_item\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                <nz-form-label>\r\n                                    Nilai\r\n                                    <i style=\"float: right\">\r\n                                        {{nilai | currency: 'Rp.'}}\r\n                                    </i>\r\n                                </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                        <input nz-input type=\"number\" placeholder=\"Nilai item\" [(ngModel)]=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"3\">\r\n                                <nz-form-label>Add</nz-form-label>\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                            </div>\r\n                        </div>\r\n                        <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"false\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th >Item</th>\r\n                                    <th >Tanggal</th>\r\n                                    <th >Nilai</th>\r\n                                    <th class=\"text-right\">\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.reimburse_item}}</td>\r\n                                    <td>{{data.tanggal_item | date}}</td>\r\n                                    <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_reimburse_item)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"14\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/detail/detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/reimburse/detail/detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Reimburse</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataReimburse.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataReimburse.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">No. Induk</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Jabatan</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawaiPosisi.nama_jabatan}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Divisi</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawaiPosisi.nama_divisi}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Departemen</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawaiPosisi.nama_departemen}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawaiPosisi.nama_kantor}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Peruntukan</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataUntuk.untuk}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Total</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataReimburse.total| currency: 'Rp.'}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Tanggal Pengajuan</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataReimburse.created_at | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Deskripsi</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataReimburse.keterangan}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">File</td>\r\n                                        <td class=\"pr-0 text-right text-dark\">\r\n                                            <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataReimburse.id_dokumen\">\r\n                                            </erp-download-mode1>\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataReimburseItem\" [nzShowPagination]=\"false\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th >Item</th>\r\n                                <th >Nilai</th>\r\n                                <th >Tanggal</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.reimburse_item}}</td>\r\n                                <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                                <td>{{data.tanggal_item | date}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <strong>Log History</strong><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/edit/edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/reimburse/edit/edit.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Reimburse</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Pegawai</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih pegawai\"\r\n                                            formControlName=\"id_pegawai\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.nama_depan}} {{item.nama_belakang}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Peruntukan</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih peruntukan\"\r\n                                            formControlName=\"id_untuk\">\r\n                                            <nz-option *ngFor=\"let item of listUntuk\" nzValue=\"{{item.id_untuk_akun}}\"\r\n                                                nzLabel=\"{{item.untuk}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>\r\n                                        Total\r\n                                        <i style=\"float: right\">\r\n                                            {{getValue('total') | currency: 'Rp.'}}\r\n                                        </i>\r\n                                    </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"total\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>change File</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <a>\r\n                                            <div class=\"button\" nz-button nzType=\"primary\" nzBlock\r\n                                                (click)=\"togleShowUpload()\">\r\n                                                <i nz-icon nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload\r\n                                            </div>\r\n                                        </a>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Deskripsi</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan\"\r\n                                        [nzAutosize]=\"{ minRows: 3, maxRows: 6 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h5 class=\"mb=0\">Reimburse item</h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"8\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Item</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Item\" [(ngModel)]=\"reimburse_item\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"7\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Tanggal Item</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih tanggal\"\r\n                                            [(ngModel)]=\"tanggal_item\">\r\n                                        </nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"6\">\r\n                                <nz-form-item>\r\n                                <nz-form-label>\r\n                                    Nilai\r\n                                    <i style=\"float: right\">\r\n                                        {{nilai | currency: 'Rp.'}}\r\n                                    </i>\r\n                                </nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                        <input nz-input type=\"number\" placeholder=\"Nilai item\" [(ngModel)]=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"3\">\r\n                                <br />\r\n                                <br />\r\n                                <nz-form-label></nz-form-label>\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                            </div>\r\n                        </div>\r\n                        <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"false\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Item</th>\r\n                                    <th>Tanggal</th>\r\n                                    <th>Nilai</th>\r\n                                    <th class=\"text-right\">\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.reimburse_item}}</td>\r\n                                    <td>{{data.tanggal_item | date}}</td>\r\n                                    <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_reimburse_item)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                form=\"ngForm\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\" *ngIf=\"toogleUpload\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/list/list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ga/account/reimburse/list/list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Reimburse</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                        [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                        (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                            <tr>\r\n                                <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                                <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                                <th nzShowSort nzSortKey=\"nama_depan\">Nama Pegawai</th>\r\n                                <th>Peruntukan</th>\r\n                                <th nzShowSort nzSortKey=\"created_at\">Tanggal Pengajuan </th>\r\n                                <th nzShowSort nzSortKey=\"total\">Nilai</th>\r\n                                <th>File</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of ajaxTable.data\">\r\n                                <td>\r\n                                    <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                                </td>\r\n                                <td>{{ data.nomor }}</td>\r\n                                <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                                <td>{{ data.untuk }}</td>\r\n                                <td>{{ data.created_at|date }}</td>\r\n                                <td>{{ data.total | currency: 'Rp.'}}</td>\r\n                                <td>\r\n                                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                                    </td>\r\n                                <td class=\"text-right\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <li nz-menu-item *ngIf=\"data.status == 'draft'\"\r\n                                                [routerLink]=\"['../edit',data.id_reimburse]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                            </li>\r\n                                            <li nz-menu-item\r\n                                                [routerLink]=\"['../detail',data.id_reimburse]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                            </li>\r\n                                            <li nz-menu-divider></li>\r\n                                            <li nz-menu-item >\r\n                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                    nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_reimburse)\"\r\n                                                    (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/add/add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/add/add.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcmVpbWJ1cnNlL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/add/add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/add/add.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(akunReimburseService, direktoriPegawaiMasterService, akunReimburseItemService, akunUntukAkunService, spinner, notification, fb, pesan, router) {
        this.akunReimburseService = akunReimburseService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.akunReimburseItemService = akunReimburseItemService;
        this.akunUntukAkunService = akunUntukAkunService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataReimburse = {};
        this.dataReimburseItem = [];
        this.id_reimburse = '';
        this.listPegawai = [];
        this.listUntuk = [];
        //----------Anggota-----------------
        this.reimburse_item = '';
        this.tanggal_item = '';
        this.nilai = '';
        this.listItem = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.beforeCreate();
        //anggota
        this.getListPegawai();
        this.getListUntuk();
    };
    //-------------------------------------
    AddComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    AddComponent.prototype.getListUntuk = function () {
        var _this = this;
        this.akunUntukAkunService.getAkunUntukAkuns().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    AddComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.reimburse_item == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.akunReimburseItemService
            .postAkunReimburseItems({
            reimburse_item: this.reimburse_item,
            id_reimburse: this.id_reimburse,
            tanggal_item: this.tanggal_item,
            nilai: this.nilai,
        })
            .subscribe(function (res) {
            _this.getItem();
        });
    };
    AddComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_reimburse: this.id_reimburse,
        };
        this.akunReimburseItemService
            .getAkunReimburseItems(JSON.stringify(filter))
            .subscribe(function (res) {
            _this.listItem = res.data;
        });
    };
    AddComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.akunReimburseItemService.deleteAkunReimburseItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.akunReimburseService.postAkunReimburses(this.dataReimburse).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_reimburse = data.data.id_reimburse;
            console.log(data.data.id_reimburse);
            _this.getItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_reimburse: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
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
        this.dataReimburse = this.dataForm.value;
        this.akunReimburseService
            .putAkunReimbursesId({ id: this.id_reimburse, body: this.dataReimburse })
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
        this.router.navigate(['/ga/account/reimburse/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunReimburseService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunReimburseItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunUntukAkunService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/ga/account/reimburse/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunReimburseService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunReimburseItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["AkunUntukAkunService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/detail/detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/detail/detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcmVpbWJ1cnNlL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/detail/detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/detail/detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(akunReimburseService, akunUntukAkunService, akunReimburseItemService, direktoriPegawaiMasterService, direktoriVPegawaiPosisiService, spinner, activatedRoute, router, toolsLogFlowService, standarApprovalService) {
        this.akunReimburseService = akunReimburseService;
        this.akunUntukAkunService = akunUntukAkunService;
        this.akunReimburseItemService = akunReimburseItemService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toolsLogFlowService = toolsLogFlowService;
        this.standarApprovalService = standarApprovalService;
        this.id_reimburse = '';
        this.dataReimburse = {};
        this.dataPegawai = {};
        this.dataUntuk = {};
        this.dataPegawaiPosisi = {};
        this.dataReimburseItem = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_reimburse = this.activatedRoute.snapshot.paramMap.get('id_reimburse');
        this.getReimburse();
        this.getReimburseItem();
        this.getLog();
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getReimburse();
                _this.getReimburseItem();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getReimburse = function () {
        var _this = this;
        this.spinner.show();
        this.akunReimburseService.getAkunReimbursesId(this.id_reimburse).subscribe(function (data) {
            _this.dataReimburse = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getUntuk(data.data.id_untuk);
            _this.getPegawaiPosisi(data.data.id_pegawai);
            _this.params = {
                id: data.data.id_reimburse,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_reimburse"
            };
            _this.standarApprovalService.param.next(_this.params);
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMastersId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailComponent.prototype.getUntuk = function (id_untuk) {
        var _this = this;
        this.akunUntukAkunService.getAkunUntukAkunsId(id_untuk).subscribe(function (data) {
            _this.dataUntuk = data.data;
        });
    };
    DetailComponent.prototype.getPegawaiPosisi = function (id_pegawai) {
        var _this = this;
        this.direktoriVPegawaiPosisiService.getDirektoriVPegawaiPosisisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawaiPosisi = data.data;
        });
    };
    DetailComponent.prototype.getReimburseItem = function () {
        var _this = this;
        this.spinner.show();
        this.akunReimburseItemService.getAkunReimburseItems(JSON.stringify({ id_reimburse: this.id_reimburse })).subscribe(function (res) {
            _this.dataReimburseItem = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_reimburse })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/ga/account/reimburse/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunUntukAkunService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/ga/account/reimburse/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunUntukAkunService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/edit/edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/edit/edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcmVpbWJ1cnNlL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/edit/edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/edit/edit.component.ts ***!
  \*******************************************************************/
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
    function EditComponent(akunReimburseService, direktoriPegawaiMasterService, akunReimburseItemService, akunUntukAkunService, spinner, notification, fb, pesan, router, activatedRoute, singleUploadService) {
        this.akunReimburseService = akunReimburseService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.akunReimburseItemService = akunReimburseItemService;
        this.akunUntukAkunService = akunUntukAkunService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.toogleUpload = false;
        this.dataReimburse = {};
        this.dataReimburseItem = [];
        this.id_reimburse = '';
        this.listPegawai = [];
        this.listUntuk = [];
        //----------Anggota-----------------
        this.reimburse_item = '';
        this.tanggal_item = '';
        this.nilai = '';
        this.listItem = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_reimburse = this.activatedRoute.snapshot.paramMap.get('id_reimburse');
        this.form();
        this.getData();
        this.getListPegawai();
        this.getListUntuk();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'akutansi_reimburse.finish') {
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
    EditComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    EditComponent.prototype.getListUntuk = function () {
        var _this = this;
        this.akunUntukAkunService.getAkunUntukAkuns().subscribe(function (data) {
            _this.listUntuk = data.data;
        });
    };
    EditComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.reimburse_item == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.akunReimburseItemService
            .postAkunReimburseItems({
            reimburse_item: this.reimburse_item,
            id_reimburse: this.id_reimburse,
            tanggal_item: this.tanggal_item,
            nilai: this.nilai,
        })
            .subscribe(function (res) {
            _this.getItem();
        });
    };
    EditComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_reimburse: this.id_reimburse,
        };
        this.akunReimburseItemService
            .getAkunReimburseItems(JSON.stringify(filter))
            .subscribe(function (res) {
            _this.listItem = res.data;
        });
    };
    EditComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.akunReimburseItemService.deleteAkunReimburseItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.akunReimburseService.getAkunReimbursesId(this.id_reimburse).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.getItem();
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "akutansi_reimburse",
                for_table: "erp_akutansi.reimburse",
                for_module_id: data.data.id_reimburse
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_reimburse: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_untuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.getValue = function (key) {
        return this.dataForm.get(key).value;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.dataReimburse = this.dataForm.value;
        this.akunReimburseService
            .putAkunReimbursesId({ id: this.id_reimburse, body: this.dataReimburse })
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
        this.router.navigate(['/ga/account/reimburse/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunUntukAkunService"] },
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
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/ga/account/reimburse/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunReimburseItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AkunUntukAkunService"],
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

/***/ "./src/app/pages/ga/account/reimburse/list/list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/list/list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhL2FjY291bnQvcmVpbWJ1cnNlL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/list/list.component.ts ***!
  \*******************************************************************/
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
    function ListComponent(akunReimburseService, spinner, nzMessageService, pesan) {
        this.akunReimburseService = akunReimburseService;
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
        this.akunReimburseService
            .getAkunReimburses(JSON.stringify({
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
        this.akunReimburseService.deleteAkunReimbursesId(id).subscribe(function (data) {
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
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AkunReimburseService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ga/account/reimburse/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/ga/account/reimburse/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AkunReimburseService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_1__["PesanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/reimburse-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/reimburse-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ReimburseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimburseRoutingModule", function() { return ReimburseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/account/reimburse/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/account/reimburse/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/account/reimburse/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/reimburse/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    {
        path: 'edit/:id_reimburse',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"],
    },
    {
        path: 'detail/:id_reimburse',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"],
    },
];
var ReimburseRoutingModule = /** @class */ (function () {
    function ReimburseRoutingModule() {
    }
    ReimburseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        })
    ], ReimburseRoutingModule);
    return ReimburseRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ga/account/reimburse/reimburse.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ga/account/reimburse/reimburse.module.ts ***!
  \****************************************************************/
/*! exports provided: ReimburseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimburseModule", function() { return ReimburseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reimburse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reimburse-routing.module */ "./src/app/pages/ga/account/reimburse/reimburse-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/ga/account/reimburse/detail/detail.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/ga/account/reimburse/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/ga/account/reimburse/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/ga/account/reimburse/add/add.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var ReimburseModule = /** @class */ (function () {
    function ReimburseModule() {
    }
    ReimburseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reimburse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReimburseRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]],
        })
    ], ReimburseModule);
    return ReimburseModule;
}());



/***/ })

}]);
//# sourceMappingURL=reimburse-reimburse-module.js.map