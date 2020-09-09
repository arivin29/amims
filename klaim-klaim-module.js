(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["klaim-klaim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Claim</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Patient</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Pasien\"\r\n                                    formControlName=\"id_pegawai_keluarga\">\r\n                                    <nz-option *ngFor=\"let item of listKeluarga\" nzValue=\"{{item.id_pegawai_keluarga}}\"\r\n                                        nzLabel=\"{{item.nama_keluarga}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Transaction date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_berobat\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Submission date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_pengajuan\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Amount\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('nilai') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"nilai\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Nama rumah sakit\" formControlName=\"nama_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Alamat rumah sakit\" formControlName=\"alamat_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <nz-form-item>\r\n                    <nz-form-label>Claim description</nz-form-label>\r\n                    <nz-form-control>\r\n                        <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan_klaim\"\r\n                            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Claim Item</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"14\">\r\n                        <nz-form-label>Item</nz-form-label>\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama plafon\" [(ngModel)]=\"id_klaim_pengaturan\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listKlaimPengaturan\" nzValue=\"{{item.id_klaim_pengaturan}}\"\r\n                                nzLabel=\"{{item.nama_plafon}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Nilai\r\n                                <i style=\"float: right\">\r\n                                    {{nilai | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" [(ngModel)]=\"nilai\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"3\">\r\n                            <nz-form-label>Add</nz-form-label>\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                    </div>\r\n                </div>\r\n                <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Claim</th>\r\n                            <th>Amount</th>\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.nama_plafon}}</td>\r\n                            <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteTanggal(data.id_klaim_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Claim</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataKlaim.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataKlaim.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Employee</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                        {{dataPegawai.nama_belakang}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Employee Id</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Position</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_jabatan}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Office</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_kantor}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Patient</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{DataKeluarga.nama_keluarga}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Claim Category</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKategori.nama_kategori}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Amount</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.nilai| currency: 'Rp.'}}</td>\r\n                                </tr>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Hospital Address</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.nama_rumah_sakit}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Home Address</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.alamat_rumah_sakit}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Date of Treatment</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.tanggal_berobat | date}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Request Date</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.tanggal_pengajuan | date}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Description</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.keterangan_klaim}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">File :</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">\r\n                                        <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataKlaim.id_dokumen\">\r\n                                        </erp-download-mode1>\r\n                                    </td>\r\n                                </tr>\r\n                            </div>\r\n                        </div>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h6 class=\"mb=0\">Claim Item</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataItem\" [nzShowPagination]=\"false\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Item</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Value</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.nama_plafon}}</td>\r\n                                <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h6>Status\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"dataKlaim.status | status\">\r\n                            {{ dataKlaim.status | titlecase }}\r\n                        </nz-tag>\r\n                    </h6><br>\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h6>Activities</h6><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Claim</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Patient</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Pasien\"\r\n                                    formControlName=\"id_pegawai_keluarga\">\r\n                                    <nz-option *ngFor=\"let item of listKeluarga\" nzValue=\"{{item.id_pegawai_keluarga}}\"\r\n                                        nzLabel=\"{{item.nama_keluarga}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Transaction date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_berobat\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Submission date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_pengajuan\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Amount\r\n                                <i style=\"float: right\">\r\n                                    {{getValue('nilai') | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" formControlName=\"nilai\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Nama rumah sakit\" formControlName=\"nama_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Alamat rumah sakit\" formControlName=\"alamat_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <nz-form-item>\r\n                    <nz-form-label>Claim description</nz-form-label>\r\n                    <nz-form-control>\r\n                        <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan_klaim\"\r\n                            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Claim Item</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"14\">\r\n                        <nz-form-label>Item</nz-form-label>\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama plafon\"\r\n                            [(ngModel)]=\"id_klaim_pengaturan\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listKlaimPengaturan\" nzValue=\"{{item.id_klaim_pengaturan}}\"\r\n                                nzLabel=\"{{item.nama_plafon}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>\r\n                                Nilai\r\n                                <i style=\"float: right\">\r\n                                    {{nilai | currency: 'Rp.'}}\r\n                                </i>\r\n                            </nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input nz-input type=\"number\" placeholder=\"Insert value\" [(ngModel)]=\"nilai\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-label>Add item</nz-form-label>\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                    </div>\r\n                </div>\r\n                <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Claim</th>\r\n                            <th>Amount</th>\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.nama_plafon}}</td>\r\n                            <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteTanggal(data.id_klaim_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>change File</nz-form-label>\r\n                        <nz-form-control>\r\n                            <a>\r\n                                <div class=\"button\" nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\">\r\n                                    <i nz-icon nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</div>\r\n                            </a>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                    <erp-single-upload></erp-single-upload>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Claim</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Claim\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataKlaimPengajuan\" [nzShowPagination]=\"true\">\r\n            <thead  (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nama_keluarga\">Patient</th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_berobat\">Transaction</th>\r\n                    <th nzShowSort nzSortKey=\"nilai\">Amount </th>\r\n                    <th nzShowSort nzSortKey=\"tanggal_pengajuan\">Submission date</th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>\r\n                        <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                    </td>\r\n                    <td>{{ data.nama_keluarga}}</td>\r\n                    <td>{{ data.tanggal_berobat | date}}</td>\r\n                    <td>{{ data.nilai | currency: 'Rp.'}}</td>\r\n                    <td>{{ data.tanggal_pengajuan | date}}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item *ngIf=\"data.status == 'draft'\" [routerLink]=\"['../edit/',data.id_klaim_pengajuan]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail/',data.id_klaim_pengajuan]\">\r\n                                    <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_klaim_pengajuan)\"\r\n                                        (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/add/add.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/klaim/add/add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Claim</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Patient</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Pasien\"\r\n                                    formControlName=\"id_pegawai_keluarga\">\r\n                                    <nz-option *ngFor=\"let item of listKeluarga\" nzValue=\"{{item.id_pegawai_keluarga}}\"\r\n                                        nzLabel=\"{{item.nama_keluarga}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Transaction date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_berobat\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Submission date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_pengajuan\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Amount</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Nama rumah sakit\" formControlName=\"nama_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Alamat rumah sakit\" formControlName=\"alamat_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <nz-form-item>\r\n                    <nz-form-label>Claim description</nz-form-label>\r\n                    <nz-form-control>\r\n                        <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan_klaim\"\r\n                            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Claim Item</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"14\">\r\n                        <nz-form-label>Item</nz-form-label>\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama plafon\" [(ngModel)]=\"id_klaim_pengaturan\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listKlaimPengaturan\" nzValue=\"{{item.id_klaim_pengaturan}}\"\r\n                                nzLabel=\"{{item.nama_plafon}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-label>Nilai</nz-form-label>\r\n                        <input style=\"width: 100%\" nz-input type=\"number\" placeholder=\"nilai\" [(ngModel)]=\"nilai\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                            <nz-form-label></nz-form-label>\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                    </div>\r\n                </div>\r\n                <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Claim</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Amount</th>\r\n                            <th class=\"bg-transparent text-sentencase\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.nama_plafon}}</td>\r\n                            <td>{{data.nilai}}</td>\r\n                            <td>\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteTanggal(data.id_klaim_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/edit/edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/klaim/edit/edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Claim</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Patient</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Pasien\"\r\n                                    formControlName=\"id_pegawai_keluarga\">\r\n                                    <nz-option *ngFor=\"let item of listKeluarga\" nzValue=\"{{item.id_pegawai_keluarga}}\"\r\n                                        nzLabel=\"{{item.nama_keluarga}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Transaction date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_berobat\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Submission date</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Pilih Tanggal\"\r\n                                        formControlName=\"tanggal_pengajuan\">\r\n                                    </nz-date-picker>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Amount</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"\" formControlName=\"nilai\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Nama rumah sakit\" formControlName=\"nama_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Hospital Address</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Alamat rumah sakit\" formControlName=\"alamat_rumah_sakit\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <nz-form-item>\r\n                    <nz-form-label>Claim description</nz-form-label>\r\n                    <nz-form-control>\r\n                        <textarea nz-input placeholder=\"Deskripsi\" formControlName=\"keterangan_klaim\"\r\n                            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb=0\">Claim Item</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"14\">\r\n                        <nz-form-label>Item</nz-form-label>\r\n                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama plafon\"\r\n                            [(ngModel)]=\"id_klaim_pengaturan\" style=\"width: 100%\">\r\n                            <nz-option *ngFor=\"let item of listKlaimPengaturan\" nzValue=\"{{item.id_klaim_pengaturan}}\"\r\n                                nzLabel=\"{{item.nama_plafon}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"6\">\r\n                        <nz-form-label>Nilai</nz-form-label>\r\n                        <input style=\"width: 100%\" nz-input type=\"number\" placeholder=\"nilai\" [(ngModel)]=\"nilai\" />\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-label>Add item</nz-form-label>\r\n                        <button nz-button nzType=\"primary\" (click)=\"tambahItem()\">+Item</button>\r\n                    </div>\r\n                </div>\r\n                <nz-table #basicTable1 [nzData]=\"listItem\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Claim</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Amount</th>\r\n                            <th class=\"bg-transparent text-sentencase\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.nama_plafon}}</td>\r\n                            <td>{{data.nilai}}</td>\r\n                            <td>\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"deleteTanggal(data.id_klaim_item)\">Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>change File</nz-form-label>\r\n                        <nz-form-control>\r\n                            <a>\r\n                                <div class=\"button\" nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\">\r\n                                    <i nz-icon nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</div>\r\n                            </a>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                    <erp-single-upload></erp-single-upload>\r\n                </div>\r\n\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/list/list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/klaim/list/list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Claim</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New Claim\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nz-table #basicTable [nzData]=\"dataKlaimPengajuan\" [nzShowPagination]=\"true\">\r\n            <thead>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"nomor\">ID</th>\r\n                    <th>Patient</th>\r\n                    <th>Transaction</th>\r\n                    <th>Amount </th>\r\n                    <th>Submission date</th>\r\n                    <th>File</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{ data.status }}</td>\r\n                    <td>{{ data.nomor }}</td>\r\n                    <td>{{ data.nama_keluarga}}</td>\r\n                    <td>{{ data.tanggal_berobat }}</td>\r\n                    <td>{{ data.nilai }}</td>\r\n                    <td>{{ data.tanggal_pengajuan }}</td>\r\n                    <td>\r\n                        <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item *ngIf=\"data.status == 'draft'\" [routerLink]=\"['../edit/',data.id_klaim_pengajuan]\">Edit\r\n                                </li>\r\n                                <li nz-menu-item [routerLink]=\"['../detail/',data.id_klaim_pengajuan]\">\r\n                                    detail\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                        nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_klaim_pengajuan)\"\r\n                                        (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                </li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2tsYWltL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services/ga-klaim-item.service */ "./src/app/sdk/hr/services/ga-klaim-item.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluargalist.service.ts");












var AddComponent = /** @class */ (function () {
    function AddComponent(gaKlaimPengajuanService, gaKlaimPengaturanService, gaKlaimItemService, direktoriPegawaiKeluargalistService, direktoriPegawaiService, spinner, notification, pegawaiDetailService, fb, pesan, router) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.gaKlaimItemService = gaKlaimItemService;
        this.direktoriPegawaiKeluargalistService = direktoriPegawaiKeluargalistService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.id_klaim_pengajuan = '';
        this.pengajuan = {};
        this.listKlaimPengaturan = [];
        this.listKeluarga = [];
        this.id_klaim_pengaturan = '';
        this.nilai = '';
        this.listItem = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPreeData();
            _this.form();
            _this.beforeCreate();
        });
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaKlaimPengaturanService.getGaKlaimPengaturans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKlaimPengaturan = data.data;
        });
        this.direktoriPegawaiKeluargalistService.getDirektoriPegawaiKeluargalists(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKeluarga = data.data;
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.gaKlaimPengajuanService.postGaKlaimPengajuans(this.pengajuan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_klaim_pengajuan = data.data.id_klaim_pengajuan;
            console.log(data.data);
            _this.getItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.id_klaim_pengaturan == '' || this.id_klaim_pengaturan == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaKlaimItemService.postGaKlaimItems({
            id_klaim_pengajuan: this.id_klaim_pengajuan,
            id_klaim_pengaturan: this.id_klaim_pengaturan, nilai: this.nilai
        }).subscribe(function (res) {
            _this.getItem();
        });
    };
    AddComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_klaim_pengajuan: this.id_klaim_pengajuan,
        };
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify(filter)).subscribe(function (res) {
            _this.listItem = res.data;
        });
    };
    AddComponent.prototype.deleteTanggal = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimItemService.deleteGaKlaimItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            keterangan_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_klaim_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_berobat: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nama_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            alamat_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
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
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.pengajuan = this.dataForm.value;
        this.gaKlaimPengajuanService
            .putGaKlaimPengajuansId({
            id: this.id_klaim_pengajuan,
            body: this.pengajuan,
        })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'klaim', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__["DirektoriPegawaiKeluargalistService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"],
            src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__["DirektoriPegawaiKeluargalistService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2tsYWltL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(gaKlaimItemService, gaKlaimKategoriService, gaKlaimPengajuanService, toolsLogFlowService, direktoriVPegawaiPosisiService, direktoriPegawaiKeluargalistService, spinner, pegawaiDetailService, routerActive, router, direktoriPegawaiService, standarApprovalService) {
        this.gaKlaimItemService = gaKlaimItemService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.direktoriPegawaiKeluargalistService = direktoriPegawaiKeluargalistService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.standarApprovalService = standarApprovalService;
        this.id_klaim_pengajuan = '';
        this.dataKlaim = {};
        this.dataPegawai = {};
        this.dataPosisi = {};
        this.dataKategori = {};
        this.DataKeluarga = {};
        this.dataItem = [];
        this.id_pegawai = '';
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.id_klaim_pengajuan = params.get('id');
            }
            _this.getDetailKlaim();
            _this.getKlaimItem();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailKlaim();
                _this.getKlaimItem();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getDetailKlaim = function () {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService.getGaKlaimPengajuansId(this.id_klaim_pengajuan).subscribe(function (data) {
            _this.dataKlaim = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getPosisi(data.data.id_pegawai);
            _this.getKeluarga(data.data.id_pegawai_keluarga);
            _this.spinner.hide();
            _this.params = {
                id: data.data.id_klaim_pengajuan,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_klaim_pengajuan"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
            _this.getKlaimKategori(data.data.id_klaim_kategori);
        });
    };
    DetailComponent.prototype.getKlaimKategori = function (id_klaim_kategori) {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategorisId(id_klaim_kategori).subscribe(function (data) {
            _this.dataKategori = data.data;
        });
    };
    DetailComponent.prototype.getPosisi = function (id_pegawai) {
        var _this = this;
        this.direktoriVPegawaiPosisiService.getDirektoriVPegawaiPosisisId(id_pegawai).subscribe(function (data) {
            _this.dataPosisi = data.data;
        });
    };
    DetailComponent.prototype.getKeluarga = function (id_pegawai_keluarga) {
        var _this = this;
        this.direktoriPegawaiKeluargalistService.getDirektoriPegawaiKeluargalistsId(id_pegawai_keluarga).subscribe(function (data) {
            _this.DataKeluarga = data.data;
        });
    };
    DetailComponent.prototype.getKlaimItem = function () {
        var _this = this;
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify({ id_klaim_pengajuan: this.id_klaim_pengajuan })).subscribe(function (res) {
            _this.dataItem = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_klaim_pengajuan })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'klaim', 'list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargalistService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_3__["ToolsLogFlowService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriVPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargalistService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_6__["StandarApprovalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2tsYWltL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.ts ***!
  \****************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(gaKlaimPengajuanService, gaKlaimPengaturanService, gaKlaimItemService, direktoriPegawaiKeluargaService, spinner, notification, pegawaiDetailService, fb, pesan, router, activatedRoute, singleUploadService) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.gaKlaimItemService = gaKlaimItemService;
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.id_pegawai = '';
        this.id_klaim_pengajuan = '';
        this.pengajuan = {};
        this.toogleUpload = false;
        this.listKlaimPengaturan = [];
        this.listKeluarga = [];
        this.id_klaim_pengaturan = '';
        this.nilai = '';
        this.listItem = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_klaim_pengajuan = this.activatedRoute.snapshot.paramMap.get('id_klaim_pengajuan');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPreeData();
            _this.form();
            _this.getData();
            _this.getItem();
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaKlaimPengaturanService.getGaKlaimPengaturans().subscribe(function (data) {
            _this.listKlaimPengaturan = data.data;
        });
        this.direktoriPegawaiKeluargaService.getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKeluarga = data.data;
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'klaim_pengajuan.finish') {
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
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService.getGaKlaimPengajuansId(this.id_klaim_pengajuan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "klaim_pengajuan",
                for_table: "erp_ga.klaim_pengajuan",
                for_module_id: data.data.id_klaim_pengajuan
            });
        });
    };
    EditComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.id_klaim_pengaturan == '' || this.id_klaim_pengaturan == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaKlaimItemService.postGaKlaimItems({
            id_klaim_pengajuan: this.id_klaim_pengajuan,
            id_klaim_pengaturan: this.id_klaim_pengaturan, nilai: this.nilai
        }).subscribe(function (res) {
            _this.getItem();
        });
    };
    EditComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_klaim_pengajuan: this.id_klaim_pengajuan,
        };
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify(filter)).subscribe(function (res) {
            _this.listItem = res.data;
        });
    };
    EditComponent.prototype.deleteTanggal = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimItemService.deleteGaKlaimItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            keterangan_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_klaim_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berobat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.pengajuan = this.dataForm.value;
        this.gaKlaimPengajuanService
            .putGaKlaimPengajuansId({
            id: this.id_klaim_pengajuan,
            body: this.pengajuan,
        })
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
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'klaim', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/klaim-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/klaim-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: KlaimRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimRoutingModule", function() { return KlaimRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.ts");







var routes = [
    {
        path: 'edit/:id_klaim_pengajuan',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
    },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
    },
];
var KlaimRoutingModule = /** @class */ (function () {
    function KlaimRoutingModule() {
    }
    KlaimRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KlaimRoutingModule);
    return KlaimRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/klaim.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/klaim.module.ts ***!
  \*********************************************************************************/
/*! exports provided: KlaimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimModule", function() { return KlaimModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klaim-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/klaim-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/detail/detail.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");















var KlaimModule = /** @class */ (function () {
    function KlaimModule() {
    }
    KlaimModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__["KlaimRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_14__["ApprovalModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], KlaimModule);
    return KlaimModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL2tsYWltL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.ts ***!
  \****************************************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(gaKlaimPengajuanService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataKlaimPengajuan = [];
        this.sortKey = null;
        this.sortValue = null;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPengajuan();
    };
    ListComponent.prototype.getPengajuan = function () {
        var _this = this;
        this.gaKlaimPengajuanService.getGaKlaimPengajuans(JSON.stringify({ id_pegawai: this.id_pegawai, sortKey: this.sortKey, sortValue: this.sortValue })).subscribe(function (data) {
            _this.dataKlaimPengajuan = data.data;
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getPengajuan();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService
            .deleteGaKlaimPengajuansId(id)
            .subscribe(function (data) {
            _this.getPengajuan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/klaim/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/klaim/add/add.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/klaim/add/add.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUva2xhaW0vYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/klaim/add/add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/profile/klaim/add/add.component.ts ***!
  \**********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services/ga-klaim-item.service */ "./src/app/sdk/hr/services/ga-klaim-item.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluargalist.service.ts");












var AddComponent = /** @class */ (function () {
    function AddComponent(gaKlaimPengajuanService, gaKlaimPengaturanService, gaKlaimItemService, direktoriPegawaiKeluargalistService, direktoriPegawaiService, spinner, notification, pegawaiDetailService, fb, pesan, router) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.gaKlaimItemService = gaKlaimItemService;
        this.direktoriPegawaiKeluargalistService = direktoriPegawaiKeluargalistService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.id_pegawai = '';
        this.id_klaim_pengajuan = '';
        this.pengajuan = {};
        this.listKlaimPengaturan = [];
        this.listKeluarga = [];
        this.id_klaim_pengaturan = '';
        this.nilai = '';
        this.listItem = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPreeData();
            _this.form();
            _this.beforeCreate();
        });
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaKlaimPengaturanService.getGaKlaimPengaturans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKlaimPengaturan = data.data;
        });
        this.direktoriPegawaiKeluargalistService.getDirektoriPegawaiKeluargalists(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKeluarga = data.data;
        });
    };
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.gaKlaimPengajuanService.postGaKlaimPengajuans(this.pengajuan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_klaim_pengajuan = data.data.id_klaim_pengajuan;
            console.log(data.data);
            _this.getItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.id_klaim_pengaturan == '' || this.id_klaim_pengaturan == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaKlaimItemService.postGaKlaimItems({
            id_klaim_pengajuan: this.id_klaim_pengajuan,
            id_klaim_pengaturan: this.id_klaim_pengaturan, nilai: this.nilai
        }).subscribe(function (res) {
            _this.getItem();
        });
    };
    AddComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_klaim_pengajuan: this.id_klaim_pengajuan,
        };
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify(filter)).subscribe(function (res) {
            _this.listItem = res.data;
        });
    };
    AddComponent.prototype.deleteTanggal = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimItemService.deleteGaKlaimItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            keterangan_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_klaim_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_berobat: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            nama_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            alamat_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](''),
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
        this.pengajuan = this.dataForm.value;
        this.gaKlaimPengajuanService
            .putGaKlaimPengajuansId({
            id: this.id_klaim_pengajuan,
            body: this.pengajuan,
        })
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
        this.router.navigate(['/profile/klaim/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__["DirektoriPegawaiKeluargalistService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/klaim/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            src_app_sdk_hr_services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"],
            src_app_sdk_hr_services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_11__["DirektoriPegawaiKeluargalistService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/klaim/edit/edit.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/klaim/edit/edit.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUva2xhaW0vZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/klaim/edit/edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/klaim/edit/edit.component.ts ***!
  \************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(gaKlaimPengajuanService, gaKlaimPengaturanService, gaKlaimItemService, direktoriPegawaiKeluargaService, spinner, notification, pegawaiDetailService, fb, pesan, router, activatedRoute, singleUploadService) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.gaKlaimPengaturanService = gaKlaimPengaturanService;
        this.gaKlaimItemService = gaKlaimItemService;
        this.direktoriPegawaiKeluargaService = direktoriPegawaiKeluargaService;
        this.spinner = spinner;
        this.notification = notification;
        this.pegawaiDetailService = pegawaiDetailService;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.singleUploadService = singleUploadService;
        this.id_pegawai = '';
        this.id_klaim_pengajuan = '';
        this.pengajuan = {};
        this.toogleUpload = false;
        this.listKlaimPengaturan = [];
        this.listKeluarga = [];
        this.id_klaim_pengaturan = '';
        this.nilai = '';
        this.listItem = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_klaim_pengajuan = this.activatedRoute.snapshot.paramMap.get('id_klaim_pengajuan');
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getPreeData();
            _this.form();
            _this.getData();
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.gaKlaimPengaturanService.getGaKlaimPengaturans().subscribe(function (data) {
            _this.listKlaimPengaturan = data.data;
        });
        this.direktoriPegawaiKeluargaService.getDirektoriPegawaiKeluargas(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKeluarga = data.data;
        });
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'klaim_pengajuan.finish') {
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
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService.getGaKlaimPengajuansId(this.id_klaim_pengajuan).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "klaim_pengajuan",
                for_table: "erp_ga.klaim_pengajuan",
                for_module_id: data.data.id_klaim_pengajuan
            });
        });
    };
    EditComponent.prototype.tambahItem = function () {
        var _this = this;
        if (this.id_klaim_pengaturan == '' || this.id_klaim_pengaturan == null) {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.gaKlaimItemService.postGaKlaimItems({
            id_klaim_pengajuan: this.id_klaim_pengajuan,
            id_klaim_pengaturan: this.id_klaim_pengaturan, nilai: this.nilai
        }).subscribe(function (res) {
            _this.getItem();
        });
    };
    EditComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_klaim_pengajuan: this.id_klaim_pengajuan,
        };
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify(filter)).subscribe(function (res) {
            _this.listItem = res.data;
            _this.getItem();
        });
    };
    EditComponent.prototype.deleteTanggal = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimItemService.deleteGaKlaimItemsId(id).subscribe(function (data) {
            _this.getItem();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            keterangan_klaim: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_klaim_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_pegawai_keluarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_berobat: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            tanggal_pengajuan: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nama_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            alamat_rumah_sakit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.id_pegawai),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
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
        this.dataForm.patchValue({ id_pegawai: this.id_pegawai });
        this.pengajuan = this.dataForm.value;
        this.gaKlaimPengajuanService
            .putGaKlaimPengajuansId({
            id: this.id_klaim_pengajuan,
            body: this.pengajuan,
        })
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
        this.router.navigate(['/profile/klaim/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/klaim/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiKeluargaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_10__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/klaim/klaim-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/klaim/klaim-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: KlaimRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimRoutingModule", function() { return KlaimRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/klaim/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/klaim/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/klaim/add/add.component.ts");






var routes = [
    {
        path: 'edit/:id_klaim_pengajuan',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
    },
];
var KlaimRoutingModule = /** @class */ (function () {
    function KlaimRoutingModule() {
    }
    KlaimRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KlaimRoutingModule);
    return KlaimRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/klaim/klaim.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/klaim/klaim.module.ts ***!
  \*****************************************************/
/*! exports provided: KlaimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimModule", function() { return KlaimModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klaim-routing.module */ "./src/app/pages/profile/klaim/klaim-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/klaim/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/klaim/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/klaim/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");












var KlaimModule = /** @class */ (function () {
    function KlaimModule() {
    }
    KlaimModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _klaim_routing_module__WEBPACK_IMPORTED_MODULE_3__["KlaimRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_11__["DocumentModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], KlaimModule);
    return KlaimModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/klaim/list/list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/klaim/list/list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUva2xhaW0vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/klaim/list/list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/klaim/list/list.component.ts ***!
  \************************************************************/
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
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(gaKlaimPengajuanService, spinner, router, pegawaiDetailService, nzMessageService) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.dataKlaimPengajuan = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPengajuan();
    };
    ListComponent.prototype.getPengajuan = function () {
        var _this = this;
        this.gaKlaimPengajuanService.getGaKlaimPengajuans(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.dataKlaimPengajuan = data.data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService
            .deleteGaKlaimPengajuansId(id)
            .subscribe(function (data) {
            _this.getPengajuan();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/klaim/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/klaim/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=klaim-klaim-module.js.map