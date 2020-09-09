(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-vendor-detail-vendor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/detail-vendor.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/detail-vendor.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-9 col-lg-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div class=\"col-xl-3 col-lg-12\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <div nz-col nzSpan=\"5\">\r\n\r\n                            <div class=\"d-flex flex-wrap flex-column\r\n                                        align-items-center mb-3\">\r\n                                <div class=\"air__utils__avatar\r\n                                air__utils__avatar--size64 mb-3 mt-3\">\r\n                                    <img class=\"img-responsive\" *ngIf=\"!dataVendor.pic\" alt=\"example\"\r\n                                        src=\"assets/images/avatars/1.jpg\" />\r\n                                    <img class=\"img-responsive\" *ngIf=\"dataVendor.pic\" alt=\"example\"\r\n                                        src=\"http://erp-document.vm.devetek.com/download?id_document={{dataVendor.logo}}\" />\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"footer\">\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card text-primary\">\r\n\r\n                <perfect-scrollbar>\r\n                    <div class=\"air__menuLeft__container\">\r\n                        <ul class=\"air__menuLeft__list\">\r\n\r\n                            <ng-container *ngFor=\"let item of menuData\">\r\n                                <ng-container *ngTemplateOutlet=\"itemTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"submenuTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"categoryTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                            </ng-container>\r\n                        </ul>\r\n\r\n                    </div>\r\n                </perfect-scrollbar>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #itemTpl let-item>\r\n    <ng-container *ngIf=\"!item.children && !item.category\">\r\n        <li class=\"air__menuLeft__item\" [ngClass]=\"{air__menuLeft__item__active:\r\n                    item.key === activeItem}\">\r\n            <a [routerLink]=\"item.url ? item.url : 'javascript: void(0)'\" class=\"air__menuLeft__link\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #submenuTpl let-item>\r\n    <ng-container *ngIf=\"item.children\">\r\n        <li class=\"air__menuLeft__item air__menuLeft__submenu\" [ngClass]=\"{air__menuLeft__submenu__active: item.key ===\r\n                    activeSubmenu}\">\r\n            <a href=\"javascript: void(0);\" class=\"air__menuLeft__link\" (click)=\"handleSubmenuClick(item.key)\"\r\n                (mouseenter)=\"handleFlyoutOver($event, item.key, item.children)\"\r\n                (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n            <ul class=\"air__menuLeft__list\">\r\n                <ng-container *ngFor=\"let item of item.children\">\r\n                    <ng-container *ngTemplateOutlet=\"itemTpl; context:\r\n                                {$implicit: item}\"></ng-container>\r\n                </ng-container>\r\n            </ul>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #categoryTpl let-item>\r\n    <ng-container *ngIf=\"item.category\">\r\n        <li class=\"air__menuLeft__category\">\r\n            <span>{{ item.title }}</span>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #flyoutTpl let-item>\r\n    <div @flyoutAnimation [ngStyle]=\"{\r\n                left: item.itemDimensions.left + item.itemDimensions.width - 10 + 'px',\r\n                top: item.itemDimensions.top + 'px'\r\n                }\" class=\"air__menuFlyout\" [ngClass]=\"{\r\n                air__menuFlyoutLeft: menuLayoutType === 'left',\r\n                air__menuFlyout__black: flyoutMenuColor === 'dark',\r\n                air__menuFlyout__white: flyoutMenuColor === 'white',\r\n                air__menuFlyout__gray: flyoutMenuColor === 'gray'\r\n                }\">\r\n        <ul class=\"air__menuLeft__list\" (mouseenter)=\"handleFlyoutContainerOver(item.key)\"\r\n            (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n            <ng-container *ngFor=\"let item of item.items\">\r\n                <ng-container *ngTemplateOutlet=\"itemTpl; context: {$implicit:\r\n                            item}\"></ng-container>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/detail/detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/detail/detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Vendor Detail</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <!-- <a class=\"btn btn-primary\" [routerLink]=\"['../../../master/model/edit',model.id_model]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Edit\r\n            </a> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\" style=\"width: 100%;\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Code</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.code}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Name</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Phone</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.phone}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Email</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.email}}</td>\r\n                        </tr>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Url</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.url}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Support Url </td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.support_url}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Country</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.country}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Address</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.address}}</td>\r\n                        </tr>\r\n                    </div>\r\n                </div>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/kategori/kategori.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/kategori/kategori.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Category</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" (click)=\"toogleAddShow()\" routerLinkActive=\"router-link-active\">\r\n                + Category\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd\">\r\n                <div nz-col nzSpan=\"20\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Category</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" style=\"width: 100%;\"\r\n                                [(ngModel)]=\"id_vendor_kategori_master\">\r\n                                <nz-option *ngFor=\"let item of listMaster\"\r\n                                    nzLabel=\"{{item.kategori_code}} | {{item.kategori}}\"\r\n                                    nzValue=\"{{item.id_vendor_kategori_master}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listCategory\" [nzShowPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Code</th>\r\n                        <th>Category</th>\r\n                        <th>Category desc</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.kategori_code}}</td>\r\n                        <td>{{data.kategori}}</td>\r\n                        <td>{{data.kategori_desc}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_vendor_kategori)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/owner/owner.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/owner/owner.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>owner works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Audit</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> New\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nz-table #middleTable nzSize=\"middle\" [nzData]=\"listOfData\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"tanggal_audit\">Date</th>\r\n                        <th  nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th>File</th>\r\n                        <!-- <th class=\"text-right\">Action</th> -->\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of middleTable.data\">\r\n                        <td>{{ data.tanggal_audit | date}}</td>\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{ data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                        </td>\r\n                        <!-- <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_vendor_audit]\">Edit </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_vendor_audit)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Purchased</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataPembelian.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataPembelian.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"10\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                        {{dataPegawai.nama_belakang}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataVendor.code}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataKantor.nama_kantor}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Request date</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.tanggal_direquest | date}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Purchased date</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.tanggal_pembelian | date}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Requested cost</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.biaya_diminta}}</td>\r\n                                </tr>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"14\">\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Real cost</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.biaya_realisasi}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Cost back</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.biaya_kembali}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Invoice number</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.no_invoice}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Invoice date</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.tanggal_invoice | date}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Store</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.nama_toko}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-gray-6 pl-0\">Store address</td>\r\n                                    <td class=\"pr-0 text-left text-dark\">: {{dataPembelian.alamat_toko}}</td>\r\n                                </tr>\r\n                            </div>\r\n                        </div>\r\n                    </tbody>\r\n                </table>\r\n                <tr>\r\n                    <h6 class=\"mb=0\">Description:</h6>\r\n                </tr>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <tr class=\"text-gray-6 pl-0\">{{dataPembelian.keterangan}}</tr>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h5 class=\"mb=0\">Purchased Item</h5>\r\n                    </div>\r\n                </div>\r\n                <nz-table #basicTable1 [nzData]=\"list_item\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"bg-transparent text-sentencase\">Keyword</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Part Number</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Quantity</th>\r\n                            <th class=\"bg-transparent text-sentencase\">Velue per unit</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty}}</td>\r\n                            <td>{{data.harga_satuan}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n                <div class=\"footer\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                style=\"margin-right: 8px;\">Back</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Purchase Order</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> New\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nama_kantor\">Kantor</th>\r\n                        <th nzShowSort nzSortKey=\"tanggal_direquest\">Request date</th>\r\n                        <th nzShowSort nzSortKey=\"nama_toko\">Purchased date</th>\r\n                        <th nzShowSort nzSortKey=\"nama_toko\">Store</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{ data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.nama_kantor }}</td>\r\n                        <td>{{ data.tanggal_direquest| date }}</td>\r\n                        <td>{{ data.tanggal_pembelian | date}}</td>\r\n                        <td>{{ data.nama_toko }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail-po',data.id_pembelian]\"><i nz-icon\r\n                                            nzType=\"edit\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                    <li nz-menu-item *ngIf=\"data.status == 'darft'\">\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_pembelian)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail-vendor-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail-vendor-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DetailVendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVendorRoutingModule", function() { return DetailVendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-vendor.component */ "./src/app/pages/vendor/detail-vendor/detail-vendor.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/vendor/detail-vendor/detail/detail.component.ts");
/* harmony import */ var _riwayat_po_po_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./riwayat/po/po.component */ "./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.ts");
/* harmony import */ var _kategori_kategori_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kategori/kategori.component */ "./src/app/pages/vendor/detail-vendor/kategori/kategori.component.ts");
/* harmony import */ var _riwayat_audit_audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./riwayat/audit/audit.component */ "./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.ts");
/* harmony import */ var _riwayat_detail_po_detail_po_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./riwayat/detail-po/detail-po.component */ "./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.ts");









var routes = [
    {
        path: '',
        component: _detail_vendor_component__WEBPACK_IMPORTED_MODULE_3__["DetailVendorComponent"],
        children: [
            {
                path: '',
                redirectTo: 'detail'
            },
            {
                path: 'detail',
                component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
            },
            {
                path: 'po',
                component: _riwayat_po_po_component__WEBPACK_IMPORTED_MODULE_5__["PoComponent"]
            },
            {
                path: 'detail-po/:id',
                component: _riwayat_detail_po_detail_po_component__WEBPACK_IMPORTED_MODULE_8__["DetailPoComponent"]
            },
            {
                path: 'audit',
                component: _riwayat_audit_audit_component__WEBPACK_IMPORTED_MODULE_7__["AuditComponent"]
            },
            {
                path: 'kategori',
                component: _kategori_kategori_component__WEBPACK_IMPORTED_MODULE_6__["KategoriComponent"]
            },
            {
                path: 'contact',
                loadChildren: function () {
                    return Promise.all(/*! import() | contact-contact-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/pages/vendor/detail-vendor/contact/contact.module.ts")).then(function (mod) { return mod.ContactModule; });
                },
            },
        ],
    },
];
var DetailVendorRoutingModule = /** @class */ (function () {
    function DetailVendorRoutingModule() {
    }
    DetailVendorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DetailVendorRoutingModule);
    return DetailVendorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail-vendor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail-vendor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".air__utils__avatar {\n  height: 550%;\n  width: 550%;\n  padding: 0px;\n}\n.air__utils__avatar img {\n  margin-top: rem(5);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.air__menuLeft {\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  min-height: 100%;\n  background: #161537;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .air__menuLeft {\n    position: fixed;\n    z-index: 997;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    overflow: visible;\n    margin-left: -240px;\n    -webkit-transition: -webkit-transform 0.2s ease-in-out;\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  }\n  .air__menuLeft__mobileToggleButton {\n    display: block !important;\n  }\n  .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__mobileToggled {\n    -webkit-transform: translateX(240px);\n            transform: translateX(240px);\n  }\n}\n.air__menuLeft__outer {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  height: 100%;\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.air__menuLeft__container {\n  padding-bottom: 1.33rem;\n}\n.air__menuLeft__backdrop {\n  position: fixed;\n  z-index: 996;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #161537;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out;\n}\n@media (max-width: 767px) {\n  .air__menuLeft__mobileToggled + .air__menuLeft__backdrop {\n    opacity: 0.2;\n    visibility: visible;\n  }\n}\n.air__menuLeft__mobileToggleButton {\n  position: absolute;\n  right: -2.67rem;\n  top: 9.46rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #161537;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  display: none;\n  text-align: center;\n  box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n}\n.air__menuLeft__mobileToggleButton span {\n  display: inline-block;\n  width: 14px;\n  height: 2px;\n  position: relative;\n  background: #fff;\n  -webkit-transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  top: 5px;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span {\n  background: transparent;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:before {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:after {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n.air__menuLeft__mobileToggleButton span:before, .air__menuLeft__mobileToggleButton span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  height: 2px;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.air__menuLeft__mobileToggleButton span:before {\n  top: -5px;\n}\n.air__menuLeft__mobileToggleButton span:after {\n  top: 5px;\n}\n.air__menuLeft__toggleButton {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.66rem;\n  z-index: 2;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n.air__menuLeft__toggled .air__menuLeft__toggleButton {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.air__menuLeft__toggleButton:hover span {\n  opacity: 1 !important;\n}\n.air__menuLeft__toggleButton span {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 0.9;\n}\n.air__menuLeft__toggleButton span:before, .air__menuLeft__toggleButton span:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 12px;\n  height: 3px;\n  background: #1b55e3;\n  border-radius: 5px;\n}\n.air__menuLeft__toggleButton span:before {\n  top: 14px;\n  left: 6px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.air__menuLeft__toggleButton span:after {\n  top: 21px;\n  left: 6px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__toggleButton span:first-child {\n  position: relative;\n  left: 3px;\n}\n.air__menuLeft__toggleButton span:last-child {\n  position: relative;\n  left: 11px;\n  opacity: 0.5;\n}\n.air__menuLeft__logo {\n  display: block;\n  padding: 1rem 1.33rem;\n  line-height: 1;\n  height: 4.26rem;\n}\n.air__menuLeft__logo img {\n  float: left;\n  margin-top: 0.33rem;\n}\n.air__menuLeft__logo__name {\n  font-weight: 900;\n  color: #fff;\n  font-size: 21px;\n  margin-left: 2.66rem;\n}\n.air__menuLeft__logo__descr {\n  color: #c3bedc;\n  margin-left: 2.66rem;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.air__menuLeft__user {\n  display: block;\n  padding: 1rem 1.33rem;\n  height: 4.8rem;\n  line-height: 1.3;\n}\n.air__menuLeft__user__avatar {\n  float: left;\n}\n.air__menuLeft__user__name {\n  margin-left: 4rem;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-top: 0.13rem;\n}\n.air__menuLeft__user__role {\n  margin-left: 4rem;\n  color: #786fa4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.air__menuLeft__banner {\n  margin: 2.66rem 1.33rem 1.33rem;\n  background: #1b55e3;\n  background: linear-gradient(45deg, #1b55e3 0%, #4877e9 100%);\n  border-radius: 6px;\n  padding: 1.33rem;\n  color: #fff;\n  box-shadow: 0 8px 15px -5px black;\n}\n.air__menuLeft__list {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.air__menuLeft__list .air__menuLeft__list .air__menuLeft__link {\n  padding-left: 3.26rem;\n}\n.air__menuLeft__category {\n  text-transform: uppercase;\n  color: #786fa4;\n  letter-spacing: 1px;\n  font-size: 0.8rem;\n  padding: 0.93rem 1.33rem;\n  overflow: hidden;\n  position: relative;\n}\n.air__menuLeft__category:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 1.33rem;\n  right: 1.33rem;\n  height: 1px;\n  background: #4a436a;\n  display: none;\n}\n.air__menuLeft__item {\n  display: block;\n}\n.air__menuLeft__item__active > .air__menuLeft__link {\n  background: #1b55e3;\n  color: #fff;\n}\n.air__menuLeft__item__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu > .air__menuLeft__link {\n  position: relative;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__submenu > .air__menuLeft__link:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1.33rem;\n  right: 1.33rem;\n  width: 6px;\n  height: 2px;\n  background: #786fa4;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transition: background 0.2s ease-in-out;\n  transition: background 0.2s ease-in-out;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:after {\n  right: 1.6rem;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__submenu__active {\n  background: #100f28;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__list {\n  display: block !important;\n}\n.air__menuLeft__submenu .air__menuLeft__list {\n  display: none;\n  padding-bottom: 0.66rem;\n}\n.air__menuLeft__link {\n  color: #aca6cc;\n  display: block;\n  padding: 0.6rem 2.66rem 0.6rem 1.33rem;\n  font-size: 1rem;\n}\n.air__menuLeft__link:hover, .air__menuLeft__link:focus {\n  color: #1b55e3;\n}\n.air__menuLeft__link:hover:before, .air__menuLeft__link:hover:after, .air__menuLeft__link:focus:before, .air__menuLeft__link:focus:after {\n  background: #fff;\n}\n.air__menuLeft__icon {\n  display: inline-block;\n  width: 1.66rem;\n}\n@media (min-width: 768px) {\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__logo {\n    visibility: hidden;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__toggleButton {\n    right: 1.33rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__name, .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__role {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link > span {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 1.4rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 1.2rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__icon {\n    width: 2.66rem;\n    text-align: center;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category {\n    text-indent: -999px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category:after {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .air__menuLeft__compact {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo {\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo img {\n    float: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo__name, .air__menuLeft__compact .air__menuLeft__logo__descr {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__user {\n    height: auto;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__avatar {\n    float: none;\n    margin-bottom: 0.66rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__name, .air__menuLeft__compact .air__menuLeft__user__role {\n    display: block;\n    margin-left: 0;\n  }\n  .air__menuLeft__compact .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link {\n    text-align: center;\n    padding: 0.6rem 1.33rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span {\n    display: block;\n    float: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span:global(.badge) {\n    display: inline-block;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: 2px;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -1px;\n  }\n  .air__menuLeft__compact .air__menuLeft__icon {\n    width: 2.66rem;\n    display: block;\n    margin: 0 auto 0.33rem;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__category {\n    display: none;\n  }\n}\n.air__menuLeft__unfixed {\n  display: -webkit-box;\n  display: flex;\n}\n.air__menuLeft__unfixed .air__menuLeft__outer {\n  height: auto;\n  position: static;\n}\n.air__menuLeft__shadow {\n  box-shadow: 0 0 100px -30px rgba(57, 55, 73, 0.3);\n}\n.air__menuLeft__blue {\n  background: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__category:after {\n  background: rgba(242, 244, 248, 0.1);\n}\n.air__menuLeft__blue .air__menuLeft__link {\n  color: #e4e9f0;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover {\n  color: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover:before, .air__menuLeft__blue .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active {\n  background: #184ccc;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__category, .air__menuLeft__blue .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__gray {\n  background: #f2f4f8;\n}\n.air__menuLeft__gray .air__menuLeft__category:after {\n  background: #e5e9f1;\n}\n.air__menuLeft__gray .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover:before, .air__menuLeft__gray .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__gray .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0 !important;\n}\n.air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__category, .air__menuLeft__gray .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__gray .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__white {\n  background: #fff;\n}\n.air__menuLeft__white .air__menuLeft__category:after {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__white .air__menuLeft__link:hover:before, .air__menuLeft__white .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__white .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8 !important;\n}\n.air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__category, .air__menuLeft__white .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__white .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 768px) {\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -3px;\n  }\n  .air__menuLeft__flyout .air__menuLeft__link:hover, .air__menuLeft__compact .air__menuLeft__link:hover, .air__menuLeft__toggled .air__menuLeft__link:hover {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__black .air__menuLeft__link:hover {\n    background: #161537;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover {\n    background: #f2f4f8;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover {\n    background: #fff;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuFlyout {\n    position: fixed;\n    z-index: 3000;\n    top: 100px;\n    box-shadow: 0 0 40px -10px rgba(22, 21, 55, 0.4);\n    background: #1b55e3;\n    -webkit-transform: translate3d(0, calc(-50% + 20px), 0);\n            transform: translate3d(0, calc(-50% + 20px), 0);\n    -webkit-transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out !important;\n    -webkit-transition-delay: 0 !important;\n            transition-delay: 0 !important;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  .air__menuFlyout .air__menuLeft__list {\n    max-width: 36rem;\n    display: block !important;\n    height: auto !important;\n  }\n  .air__menuFlyout .air__menuLeft__item {\n    float: left;\n    width: 12rem;\n    border-left: 1px solid rgba(242, 244, 248, 0.1);\n    border-bottom: 1px solid rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__item:nth-child(3n+1) {\n    border-left: none;\n  }\n  .air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link {\n    color: #fff;\n    padding: 1rem 2rem;\n  }\n  .air__menuFlyout .air__menuLeft__link:hover {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link > span {\n    display: block !important;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n}\n@media (min-width: 768px) and (min-width: 768px) {\n  .air__menuFlyout__black.air__menuFlyout {\n    background: #161537;\n  }\n  .air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout {\n    background: #fff;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #f2f4f8;\n    border-bottom: 1px solid #f2f4f8;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout {\n    background: #f2f4f8;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #e5e9f1;\n    border-bottom: 1px solid #e5e9f1;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yL2RldGFpbC12ZW5kb3IvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcdmVuZG9yXFxkZXRhaWwtdmVuZG9yXFxkZXRhaWwtdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92ZW5kb3IvZGV0YWlsLXZlbmRvci9kZXRhaWwtdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92ZW5kb3IvZGV0YWlsLXZlbmRvci9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhc3NldHNcXHN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ1I7QURJQTtFQUNJLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkVoQkk7RUZpQkosZ0JBQUE7QUNESjtBREVJO0VBUko7SUFTUSxlQUFBO0lBQ0EsWUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzREFBQTtJQUFBLDhDQUFBO0lBQUEsc0NBQUE7SUFBQSwwRUFBQTtFQ0NOO0VEQU07SUFDSSx5QkFBQTtFQ0VWO0VEQU07SUFDSSxhQUFBO0VDRVY7RURDVTtJQUNJLG9DQUFBO1lBQUEsNEJBQUE7RUNDZDtBQUNGO0FER0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNEUjtBRElJO0VBQ0ksdUJBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJFL0RBO0VGZ0VBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7QUNGUjtBRElZO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUNGbEI7QUFDRjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJFbkZBO0VGb0ZBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtGRW5ERztBRDhDWDtBRE1RO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JFL0ZKO0VGZ0dJLHdFQUFBO0VBQUEsZ0VBQUE7RUFDQSxRQUFBO0FDSlo7QURNZ0I7RUFDSSx1QkFBQTtBQ0pwQjtBREtvQjtFQUNJLGdEQUFBO1VBQUEsd0NBQUE7QUNIeEI7QURLb0I7RUFDSSxrREFBQTtVQUFBLDBDQUFBO0FDSHhCO0FET1k7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JFbEhSO0VGbUhRLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0VBQUE7RUFBQSx1RUFBQTtFQUFBLCtEQUFBO0VBQUEsNEhBQUE7QUNMaEI7QURPWTtFQUNJLFNBQUE7QUNMaEI7QURPWTtFQUNJLFFBQUE7QUNMaEI7QURVSTtFQVFJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDZlI7QURJZ0I7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0FDRnBCO0FEY1k7RUFDSSxxQkFBQTtBQ1hoQjtBRGNRO0VFcEZOLHdDQUFBO0VBQUEsZ0NBQUE7RUZzRlUsWUFBQTtBQ1paO0FEYVk7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkU1SlQ7RUY2SlMsa0JBQUE7QUNaaEI7QURjWTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ1poQjtBRGNZO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDWmhCO0FEY1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNaaEI7QURjWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNaaEI7QURpQkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2ZSO0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDZFo7QURnQlE7RUFDSSxnQkFBQTtFQUNBLFdFbE1KO0VGbU1JLGVBQUE7RUFDQSxvQkFBQTtBQ2RaO0FEZ0JRO0VBQ0ksY0VoTUg7RUZpTUcsb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2RaO0FEa0JJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDaEJSO0FEaUJRO0VBQ0ksV0FBQTtBQ2ZaO0FEaUJRO0VBQ0ksaUJBQUE7RUFDQSxXRXpOSjtFRjBOSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2ZaO0FEaUJRO0VBQ0ksaUJBQUE7RUFDQSxjRXhOSDtFRnlORyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNmWjtBRG1CSTtFQUNJLCtCQUFBO0VBQ0EsbUJFeE9EO0VGeU9DLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdFOU9BO0VGK09BLGlDQUFBO0FDakJSO0FEb0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ2xCUjtBRG9CWTtFQUNJLHFCQUFBO0FDbEJoQjtBRHNCSTtFQUNJLHlCQUFBO0VBQ0EsY0VyUEM7RUZzUEQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3BCUjtBRHFCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNuQlo7QURzQkk7RUFDSSxjQUFBO0FDcEJSO0FEc0JZO0VBQ0ksbUJFalJUO0VGa1JTLFdFcFJSO0FEZ1FSO0FEcUJnQjtFQUNJLFdFdFJaO0FEbVFSO0FEeUJRO0VBQ0ksa0JBQUE7QUN2Qlo7QUR3Qlk7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRTlSUDtFRitSTyxpQ0FBQTtVQUFBLHlCQUFBO0VFcFBkLCtDQUFBO0VBQUEsdUNBQUE7QUQ4TkY7QUR5Qlk7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ3ZCaEI7QUQwQlE7RUFDSSxtQkFBQTtBQ3hCWjtBRHlCWTtFQUNJLFdFblRSO0FENFJSO0FEd0JnQjtFQUVJLGdCRXRUWjtBRCtSUjtBRHlCZ0I7RUFDSSxXRXpUWjtBRGtTUjtBRDBCWTtFQUNJLHlCQUFBO0FDeEJoQjtBRDJCUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ3pCWjtBRDRCSTtFQUNJLGNFOVRDO0VGK1RELGNBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7QUMxQlI7QUQyQlE7RUFFSSxjRTFVTDtBRGdUUDtBRDJCWTtFQUVJLGdCRS9VUjtBRHFUUjtBRDhCSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQzVCUjtBRGdDUTtFQUNJO0lBQ0ksbUJBQUE7WUFBQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDOUJkO0VEZ0NrQjtJQUNJLG1CQUFBO1lBQUEsY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQzlCdEI7RURnQ2tCO0lBQ0ksa0JBQUE7RUM5QnRCO0VEZ0NrQjtJQUNJLGNBQUE7RUM5QnRCO0VEaUNzQjtJQUVJLGFBQUE7RUNoQzFCO0VEbUNrQjtJQUNJLGFBQUE7RUNqQ3RCO0VEb0NzQjtJQUNJLG1CRXJYckI7RURtVkw7RURvQ3NCO0lBQ0ksd0JBQUE7RUNsQzFCO0VEc0NzQjtJQUNJLGFBQUE7RUNwQzFCO0VEc0NzQjtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDcEMxQjtFRHNDc0I7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ3BDMUI7RUR1Q2tCO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VDckN0QjtFRHVDa0I7SUFDSSxtQkFBQTtFQ3JDdEI7RURzQ3NCO0lBQ0ksY0FBQTtFQ3BDMUI7QUFDRjtBRDRDUTtFQUNJO0lBQ0ksbUJBQUE7WUFBQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUMxQ2Q7RUQ0Q2tCO0lBQ0ksbUJBQUE7WUFBQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUMxQ3RCO0VENENrQjtJQUNJLGtCQUFBO0VDMUN0QjtFRDJDc0I7SUFDSSxXQUFBO0VDekMxQjtFRDJDc0I7SUFFSSxhQUFBO0VDMUMxQjtFRDZDa0I7SUFDSSxhQUFBO0VDM0N0QjtFRDZDa0I7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUMzQ3RCO0VENENzQjtJQUNJLFdBQUE7SUFDQSxzQkFBQTtFQzFDMUI7RUQ0Q3NCO0lBRUksY0FBQTtJQUNBLGNBQUE7RUMzQzFCO0VEOENrQjtJQUNJLGFBQUE7RUM1Q3RCO0VEK0NzQjtJQUNJLG1CRXBjckI7RUR1Wkw7RUQrQ3NCO0lBQ0ksd0JBQUE7RUM3QzFCO0VEZ0RrQjtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7RUM5Q3RCO0VEK0NzQjtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQzdDMUI7RUQ4QzBCO0lBQ0kscUJBQUE7RUM1QzlCO0VEK0NzQjtJQUNJLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFQzdDMUI7RUQrQ3NCO0lBQ0ksYUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtFQzdDMUI7RURnRGtCO0lBQ0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VDOUN0QjtFRGdEa0I7SUFDSSxhQUFBO0VDOUN0QjtBQUNGO0FEcURRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDbkRaO0FEb0RZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDbERoQjtBRHdEUTtFQUNJLGlERXBkRDtBRCtaWDtBRDJEUTtFQUNJLG1CRWhnQkw7QUR3Y1A7QUQ0RHdCO0VBRUksZ0JFeGdCcEI7QUQ2Y1I7QUQrRHdCO0VBRUksZ0JFOWdCcEI7QURnZFI7QURtRW9CO0VBQ0ksb0NBQUE7QUNqRXhCO0FEb0VnQjtFQUNJLGNFbmhCWDtBRGlkVDtBRG1Fb0I7RUFDSSxjRXhoQmpCO0FEdWRQO0FEa0V3QjtFQUVJLDJCQUFBO0FDakU1QjtBRHNFb0I7RUFDSSxtQkFBQTtBQ3BFeEI7QURxRXdCO0VBQ0ksV0VyaUJwQjtBRGtlUjtBRG9FNEI7RUFFSSwyQkFBQTtBQ25FaEM7QUR3RXdCO0VBRUksbUJFdmlCbkI7QURnZVQ7QUQyRWdCO0VBRUksY0U3aUJYO0FEbWVUO0FENEVnQjtFQUNJLDhDQUFBO0FDMUVwQjtBRCtFUTtFQUNJLG1CRTFqQkg7QUQ4ZVQ7QUQrRW9CO0VBQ0ksbUJBQUE7QUM3RXhCO0FEZ0ZnQjtFQUNJLGNFN2pCWDtBRCtlVDtBRCtFb0I7RUFDSSxXRXhrQmhCO0VGeWtCZ0IsbUJFdmtCakI7QUQwZlA7QUQ4RXdCO0VBRUksMkJBQUE7QUM3RTVCO0FEbUZ3QjtFQUNJLFdFbmxCcEI7QURrZ0JSO0FEc0ZvQjtFQUNJLG1CRXBsQmY7QURnZ0JUO0FEc0Y0QjtFQUNJLGNFbmxCdkI7QUQrZlQ7QUR1RmdDO0VBQ0ksV0VobUI1QjtBRDJnQlI7QUQyRmdDO0VBQ0ksOEJBQUE7QUN6RnBDO0FEK0Z3QjtFQUVJLG1CRXZtQm5CO0FEMGdCVDtBRGlHZ0I7RUFFSSxjRTVtQlg7QUQ0Z0JUO0FEa0dnQjtFQUNJLGNFaG5CWDtBRGdoQlQ7QURrR2dCO0VBQ0ksY0UxbkJaO0FEMGhCUjtBRGtHZ0I7RUFDSSw4Q0FBQTtBQ2hHcEI7QURxR1E7RUFDSSxnQkVwb0JKO0FEa2lCUjtBRHFHb0I7RUFDSSxtQkVwb0JmO0FEaWlCVDtBRHNHZ0I7RUFDSSxjRW5vQlg7QUQraEJUO0FEcUdvQjtFQUNJLFdFOW9CaEI7RUYrb0JnQixtQkU3b0JqQjtBRDBpQlA7QURvR3dCO0VBRUksMkJBQUE7QUNuRzVCO0FEeUd3QjtFQUNJLFdFenBCcEI7QURrakJSO0FENEdvQjtFQUNJLG1CRTNwQmY7QURpakJUO0FENEc0QjtFQUNJLGNFenBCdkI7QUQraUJUO0FENkdnQztFQUNJLFdFdHFCNUI7QUQyakJSO0FEaUhnQztFQUNJLDhCQUFBO0FDL0dwQztBRHFId0I7RUFFSSxtQkU3cUJuQjtBRDBqQlQ7QUR1SGdCO0VBRUksY0VsckJYO0FENGpCVDtBRHdIZ0I7RUFDSSxjRXRyQlg7QURna0JUO0FEd0hnQjtFQUNJLGNFaHNCWjtBRDBrQlI7QUR3SGdCO0VBQ0ksOENBQUE7QUN0SHBCO0FENEhJO0VBSWdCO0lBQ0ksbUJFN3NCakI7RURpbEJMO0VENkhzQjtJQUNJLFdFanRCcEI7RURzbEJOO0VENEgwQjtJQUNJLFdFbnRCeEI7RUR5bEJOO0VEOEhrQjtJQUNJLHdCQUFBO0VDNUh0QjtFRGdJa0I7SUFDSSxhQUFBO0lBQ0EsUUFBQTtFQzlIdEI7RURnSWtCO0lBQ0ksYUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtFQzlIdEI7RUQwSWtCO0lBQ0ksbUJFOXVCakI7RURzbUJMO0VEaUowQjtJQUNJLG1CRXp2QnhCO0VEMG1CTjtFRHdKMEI7SUFDSSxtQkVod0J2QjtJRml3QnVCLGNFbndCekI7RUQ2bUJMO0VEdUo4QjtJQUVJLG1CRXR3QjdCO0VEZ25CTDtFRGdLMEI7SUFDSSxnQkVueEJ4QjtJRm94QndCLGNFbHhCekI7RURvbkJMO0VEK0o4QjtJQUVJLG1CRXJ4QjdCO0VEdW5CTDtFRHdLVTtJQUNJLGVBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGdERTV2Qkw7SUY2dkJLLG1CRXB5QlQ7SUZxeUJTLHVEQUFBO1lBQUEsK0NBQUE7SUFDQSxpRUFBQTtJQUFBLHlEQUFBO0lBQUEsaURBQUE7SUFBQSxxRkFBQTtJQUNBLHNDQUFBO1lBQUEsOEJBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0VDdEtkO0VEd0trQjtJQUNJLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSx1QkFBQTtFQ3RLdEI7RUR3S2tCO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDdEt0QjtFRHVLc0I7SUFDSSxpQkFBQTtFQ3JLMUI7RUR3SzBCO0lBQ0ksb0NBQUE7RUN0SzlCO0VEMEtrQjtJQUNJLFdFaDBCaEI7SUZpMEJnQixrQkFBQTtFQ3hLdEI7RUR5S3NCO0lBQ0ksb0NBQUE7RUN2SzFCO0VEeUtzQjtJQUNJLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VDdksxQjtBQUNGO0FENEtvQjtFQUlZO0lBQ0ksbUJFbjFCNUI7RURzcUJOO0VEcUwwQztJQUVJLDhCQUFBO0VDcEw5QztFRDJMOEM7SUFDSSxjRXAyQjdDO0VEMnFCTDtFRDBMa0Q7SUFDSSxjRXQyQmpEO0VEOHFCTDtFRCtMOEI7SUFDSSxnQkVoM0I1QjtJRmkzQjRCLGtGRTMwQnpCO0VEOG9CVDtFRCtMc0M7SUFDSSw4QkFBQTtJQUNBLGdDQUFBO0VDN0wxQztFRCtMc0M7SUFDSSxjRXQzQnJDO0VEeXJCTDtFRDhMMEM7SUFDSSxjQUFBO0lBQ0Esb0NBQUE7RUM1TDlDO0VEOExrRDtJQUNJLG9DQUFBO0VDNUx0RDtFRHlNMEM7SUFFSSw4QkFBQTtFQ3hNOUM7RUQrTThDO0lBQ0ksY0VuNUI3QztFRHNzQkw7RUQ4TWtEO0lBQ0ksY0VyNUJqRDtFRHlzQkw7RURtTjhCO0lBQ0ksbUJFMzVCM0I7SUY0NUIyQixrRkUxM0J6QjtFRHlxQlQ7RURtTnNDO0lBQ0ksOEJBQUE7SUFDQSxnQ0FBQTtFQ2pOMUM7RURtTjhDO0lBQ0ksb0NBQUE7RUNqTmxEO0VEcU5zQztJQUNJLGNFMTZCckM7RUR1dEJMO0VEb04wQztJQUNJLGNBQUE7SUFDQSxvQ0FBQTtFQ2xOOUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL2RldGFpbC12ZW5kb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWlyX191dGlsc19fYXZhdGFyIHtcclxuICAgIGhlaWdodDogNTUwJTtcclxuICAgIHdpZHRoOiA1NTAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogcmVtKDUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW1wb3J0ICdzcmMvYXNzZXRzL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcbi5haXJfX21lbnVMZWZ0IHtcclxuICAgIGZsZXg6IDAgMCAyNDBweDtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtLW1heC13aWR0aCkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiA5OTc7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgJl9fbW9iaWxlVG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjQwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZml4ZWQgY29udGFpbmVyXHJcbiAgICAmX19vdXRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4OiAwIDAgMjQwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAvLyBtZW51IGNvbnRhaW5lclxyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogcmVtKDIwKTtcclxuICAgIH1cclxuICAgICZfX2JhY2tkcm9wIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTk2O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbS1tYXgtd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkICsgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtb2JpbGUgdG9nZ2xlIGJ1dHRvblxyXG4gICAgJl9fbW9iaWxlVG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IHJlbSgtNDApO1xyXG4gICAgICAgIHRvcDogcmVtKDE0Mik7XHJcbiAgICAgICAgd2lkdGg6IHJlbSg0MCk7XHJcbiAgICAgICAgaGVpZ2h0OiByZW0oNDApO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0yO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCAmIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdG9nZ2xlIGJ1dHRvblxyXG4gICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X190b2dnbGVkIHtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogcmVtKDEyKTtcclxuICAgICAgICByaWdodDogcmVtKDEwKTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLXNsb3coKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2xvZ29cclxuICAgICZfX2xvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSgxNSkgcmVtKDIwKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBoZWlnaHQ6IHJlbSg2NCk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHJlbSg1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHJlbSg0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2Rlc2NyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LTQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiByZW0oNDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlclxyXG4gICAgJl9fdXNlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDE1KSByZW0oMjApO1xyXG4gICAgICAgIGhlaWdodDogcmVtKDcyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICZfX2F2YXRhciB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHJlbSg2MCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiByZW0oMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3JvbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogcmVtKDYwKTtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LTY7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGJhbm5lclxyXG4gICAgJl9fYmFubmVyIHtcclxuICAgICAgICBtYXJnaW46IHJlbSg0MCkgcmVtKDIwKSByZW0oMjApO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHByaW1hcnkgMCUsIGxpZ2h0ZW4oJHByaW1hcnksIDEwJSkgMTAwJSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSgyMCk7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuICAgIC8vIG1lbnUgaXRlbXNcclxuICAgICZfX2xpc3Qge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fbGlzdCB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogcmVtKDQ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NhdGVnb3J5IHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDEyKTtcclxuICAgICAgICBwYWRkaW5nOiByZW0oMTQpIHJlbSgyMCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiByZW0oMjApO1xyXG4gICAgICAgICAgICByaWdodDogcmVtKDIwKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdGV4dCwgMjAlKTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogcmVtKDIwKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktNjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVtKDI0KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJsYWNrLCA0JSk7XHJcbiAgICAgICAgICAgID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHJlbSgxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbGluayB7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LTU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSg0MCkgcmVtKDkpIHJlbSgyMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTUpO1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiByZW0oMjUpO1xyXG4gICAgfVxyXG4gICAgLy8gdG9nZ2xlZCBtZW51XHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgODBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX291dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3VzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJlbSgyMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmVtKDE4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmVtKDE4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlbSg0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29tcGFjdCBtZW51XHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3Qge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fb3V0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2Rlc2NyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiByZW0oMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX3JvbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19zdWJtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpnbG9iYWwoLmJhZGdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmVtKDE4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlbSg0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byByZW0oNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVuZml4ZWRcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fdW5maXhlZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19vdXRlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWVudSBzaGFkb3dcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fc2hhZG93IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG1lbnUgdGhlbWVzXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgLy8gYmx1ZSB0aGVtZVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktMSwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktMjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeSwgNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAmX191c2VyX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBncmF5IHRoZW1lXHJcbiAgICAgICAgLmFpcl9fbWVudUxlZnRfX2dyYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xO1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVMZWZ0X19ncmF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgJl9fdXNlcl9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fdXNlcl9fcm9sZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19sb2dvX19uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoaXRlIHRoZW1lXHJcbiAgICAgICAgLmFpcl9fbWVudUxlZnRfX3doaXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVMZWZ0X193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX3JvbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbG9nb19fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZseW91dCBtZW51IHN0eWxlc1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAmX19mbHlvdXQ6bm90KC5haXJfX21lbnVMZWZ0X190b2dnbGVkKSB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtZW51IGl0ZW0gaG92ZXIgc3R5bGVzXHJcbiAgICAgICAgJl9fZmx5b3V0LFxyXG4gICAgICAgICZfX2NvbXBhY3QsXHJcbiAgICAgICAgJl9fdG9nZ2xlZCB7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAvLyBibGFja1xyXG4gICAgICAgICAgICAgICAgJl9fYmxhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBncmF5XHJcbiAgICAgICAgICAgICAgICAmX19ncmF5IHtcclxuICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHdoaXRlXHJcbiAgICAgICAgICAgICAgICAmX193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmbHlvdXQgY29udGFpbmVyXHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwMDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy01O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIGNhbGMoLTUwJSArIDIwcHgpLCAwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogcmVtKDU0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiByZW0oMTgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDNuICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHJlbSgxNSkgcmVtKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmx5b3V0IHRoZW1lc1xyXG4gICAgICAgICAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc20tbWluLXdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVGbHlvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2JsYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19zdWJtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktMywgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTMsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBncmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19ncmF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0zLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTMsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5haXJfX3V0aWxzX19hdmF0YXIge1xuICBoZWlnaHQ6IDU1MCU7XG4gIHdpZHRoOiA1NTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWlyX191dGlsc19fYXZhdGFyIGltZyB7XG4gIG1hcmdpbi10b3A6IHJlbSg1KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5haXJfX21lbnVMZWZ0IHtcbiAgZmxleDogMCAwIDI0MHB4O1xuICBtYXgtd2lkdGg6IDI0MHB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFpcl9fbWVudUxlZnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjQwcHgpO1xuICB9XG59XG4uYWlyX19tZW51TGVmdF9fb3V0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAwIDAgMjQwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5haXJfX21lbnVMZWZ0X19jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zM3JlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk2O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkICsgLmFpcl9fbWVudUxlZnRfX2JhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yLjY3cmVtO1xuICB0b3A6IDkuNDZyZW07XG4gIHdpZHRoOiAyLjY2cmVtO1xuICBoZWlnaHQ6IDIuNjZyZW07XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMzhweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjA1KTtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XG4gIHRvcDogNXB4O1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdG9wOiAtNXB4O1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgdG9wOiA1cHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOHJlbTtcbiAgcmlnaHQ6IDAuNjZyZW07XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVkIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uOmhvdmVyIHNwYW4ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiA2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YWZ0ZXIge1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzcHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46bGFzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTFweDtcbiAgb3BhY2l0eTogMC41O1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjMzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgaGVpZ2h0OiA0LjI2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ28gaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDAuMzNyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbG9nb19fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyLjY2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ29fX2Rlc2NyIHtcbiAgY29sb3I6ICNjM2JlZGM7XG4gIG1hcmdpbi1sZWZ0OiAyLjY2cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uYWlyX19tZW51TGVmdF9fdXNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDEuMzNyZW07XG4gIGhlaWdodDogNC44cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX2F2YXRhciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUge1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tdG9wOiAwLjEzcmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgY29sb3I6ICM3ODZmYTQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gIG1hcmdpbjogMi42NnJlbSAxLjMzcmVtIDEuMzNyZW07XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFiNTVlMyAwJSwgIzQ4NzdlOSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxLjMzcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IGJsYWNrO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5haXJfX21lbnVMZWZ0X19saXN0IC5haXJfX21lbnVMZWZ0X19saXN0IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjI2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3ODZmYTQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjkzcmVtIDEuMzNyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDEuMzNyZW07XG4gIHJpZ2h0OiAxLjMzcmVtO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzRhNDM2YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5haXJfX21lbnVMZWZ0X19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjMzcmVtO1xuICByaWdodDogMS4zM3JlbTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM3ODZmYTQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICByaWdodDogMS42cmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzEwMGYyODtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjZyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjYWNhNmNjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC42cmVtIDIuNjZyZW0gMC42cmVtIDEuMzNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX2xpbms6Zm9jdXM6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fbGluazpmb2N1czphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuNjZyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSB7XG4gICAgZmxleDogMCAwIDgwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19vdXRlciB7XG4gICAgZmxleDogMCAwIDgwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19sb2dvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgICByaWdodDogMS4zM3JlbTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X191c2VyX19yb2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiAxLjRyZW07XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDEuMnJlbTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgICB3aWR0aDogMi42NnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnkge1xuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnk6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3Qge1xuICAgIGZsZXg6IDAgMCAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19vdXRlciB7XG4gICAgZmxleDogMCAwIDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbG9nbyBpbWcge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19sb2dvX19uYW1lLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbG9nb19fZGVzY3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlcl9fYXZhdGFyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2cmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjMzcmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rID4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW46Z2xvYmFsKC5iYWRnZSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIHdpZHRoOiAyLjY2cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDAuMzNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFpcl9fbWVudUxlZnRfX3VuZml4ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFpcl9fbWVudUxlZnRfX3VuZml4ZWQgLmFpcl9fbWVudUxlZnRfX291dGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uYWlyX19tZW51TGVmdF9fc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IC0zMHB4IHJnYmEoNTcsIDU1LCA3MywgMC4zKTtcbn1cblxuLmFpcl9fbWVudUxlZnRfX2JsdWUge1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2U0ZTlmMDtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxODRjY2M7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBjb2xvcjogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fZ3JheSB7XG4gIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlOWYxO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlNGU5ZjA7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U0ZTlmMCAhaW1wb3J0YW50O1xufVxuXG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhY2E2Y2M7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnksIC5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lIHtcbiAgY29sb3I6ICM3ODZmYTQ7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gIGNvbG9yOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xvZ29fX25hbWUge1xuICBjb2xvcjogIzE2MTUzNztcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2YyZjRmODtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjJmNGY4ICFpbXBvcnRhbnQ7XG59XG5cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lIHtcbiAgY29sb3I6ICM3ODZmYTQ7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBjb2xvcjogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbG9nb19fbmFtZSB7XG4gIGNvbG9yOiAjMTYxNTM3O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogNTAlO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQ6bm90KC5haXJfX21lbnVMZWZ0X190b2dnbGVkKSAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMzAwMDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IC0xMHB4IHJnYmEoMjIsIDIxLCA1NSwgMC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgY2FsYygtNTAlICsgMjBweCksIDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgICBtYXgtd2lkdGg6IDM2cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbTpudGgtY2hpbGQoM24rMSkge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWlyX19tZW51Rmx5b3V0X19ibGFjay5haXJfX21lbnVGbHlvdXQge1xuICAgIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMyAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzhweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjA1KTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjRmODtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjRmODtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxNjQ0YjU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjEsIDIyNiwgMjM2LCAwLjMpO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluazpob3Zlcl9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTMgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkuYWlyX19tZW51Rmx5b3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDM4cHggMCByZ2JhKDIyLCAyMSwgNTUsIDAuMTEpLCAwIDAgMjFweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4wNSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTlmMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTlmMTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5LmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzE2NDRiNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbn0iLCIvLyBDb2xvcnNcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMxNjE1Mzc7XHJcbiRibHVlOiAjMWI1NWUzO1xyXG4kYmx1ZS1saWdodDogIzNkNmVlNztcclxuJGdyYXktMTogI2YyZjRmODtcclxuJGdyYXktMjogI2U0ZTlmMDtcclxuJGdyYXktMzogI2RkZTJlYztcclxuJGdyYXktNDogI2MzYmVkYztcclxuJGdyYXktNTogI2FjYTZjYztcclxuJGdyYXktNjogIzc4NmZhNDtcclxuJHllbGxvdzogI2ZmMDtcclxuJG9yYW5nZTogI2YyYTY1NDtcclxuJHJlZDogI2YwMDtcclxuJHBpbms6ICNmZDM5OTU7XHJcbiRwdXJwbGU6ICM2NTJlZmY7XHJcblxyXG4kdGV4dDogJGdyYXktNjtcclxuJGJvcmRlcjogJGdyYXktMjtcclxuXHJcbi8vIEFjY2VudCBjb2xvcnNcclxuJGRlZmF1bHQ6ICRncmF5LTQ7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJHNlY29uZGFyeTogIzZhN2E4NDtcclxuJHN1Y2Nlc3M6ICM0NmJlOGE7XHJcbiRpbmZvOiAjMDg4N2M5O1xyXG4kd2FybmluZzogI2YzOTgzNDtcclxuJGRhbmdlcjogI2ZiNDM0YTtcclxuJGxpZ2h0OiAkZ3JheS0xO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuLy8gRm9udCBGYW1pbHlcclxuJGJhc2UtZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplXHJcbiRiYXNlLWZvbnQtc2l6ZTogMTUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTaGFkb3dzXHJcbiRzaGFkb3c6IDAgMCA0MHB4IC0xMHB4IHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4kc2hhZG93LTI6IDAgNHB4IDM4cHggMCByZ2JhKCRibGFjaywgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgkYmxhY2ssIDAuMDUpO1xyXG4kc2hhZG93LTM6IDAgMCAxMDBweCAtMzBweCByZ2JhKDU3LCA1NSwgNzMsIDAuMyk7XHJcbiRzaGFkb3ctNDogMCA0cHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjAzKSwgMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4wMik7XHJcbiRzaGFkb3ctNTogMCAwIDQwcHggLTEwcHggcmdiYSgkYmxhY2ssIDAuNCk7XHJcbiRzaGFkb3ctYW50OiAwIDEwcHggMzVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4vLyBDb252ZXJ0IHZhbHVlIG9mIHJlbSgpIHNhc3MgbWl4aW4gZnVuY3Rpb25cclxuQGZ1bmN0aW9uIHJlbSgkcHgsICRiYXNlOiAkYmFzZS1mb250LXNpemUpIHtcclxuICBAcmV0dXJuICN7Zmxvb3IoKCRweC8kYmFzZSkgKiAxMDApIC8gMTAwfXJlbTsgLy8gdG8gUkVNc1xyXG4gIC8vIEByZXR1cm4gI3skcHh9cHg7IC8vIHRvIFBYJ3NcclxufVxyXG5cclxuLy8gVHJhbnNpdGlvbnNcclxuQG1peGluIHRyYW5zaXRpb24tYmcoKSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uLWNvbG9yKCkge1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tZmFzdCgpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tbWlkZGxlKCkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uLXNsb3coKSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgdXRpbHNcclxuJHh4bC1taW4td2lkdGg6IDE2MDBweDtcclxuJHh4bC1tYXgtd2lkdGg6IDE1OTlweDtcclxuJHhsLW1pbi13aWR0aDogMTIwMHB4O1xyXG4keGwtbWF4LXdpZHRoOiAxMTk5cHg7XHJcbiRtZC1taW4td2lkdGg6IDk5MnB4O1xyXG4kbWQtbWF4LXdpZHRoOiA5OTFweDtcclxuJHNtLW1pbi13aWR0aDogNzY4cHg7XHJcbiRzbS1tYXgtd2lkdGg6IDc2N3B4O1xyXG4keHMtbWluLXdpZHRoOiA1NDRweDtcclxuJHhzLW1heC13aWR0aDogNTQzcHg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail-vendor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail-vendor.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVendorComponent", function() { return DetailVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor-service/service.service */ "./src/app/pages/vendor/detail-vendor/vendor-service/service.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var DetailVendorComponent = /** @class */ (function () {
    function DetailVendorComponent(menuService, router, activatedRoute, serviceService, vendorVendorService) {
        this.menuService = menuService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serviceService = serviceService;
        this.vendorVendorService = vendorVendorService;
        this.menuData = [];
        this.activeSubmenu = '';
        this.activeItem = '';
        this.renderedFlyoutItems = {};
        this.flyoutTimers = {};
        this.flyoutActive = false;
        this.objectKeys = Object.keys;
        this.id_vendor = '';
        this.dataVendor = {};
    }
    DetailVendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id_vendor')) {
                _this.id_vendor = params.get('id_vendor');
                _this.serviceService.setIdVendor(_this.id_vendor);
            }
            _this.getVendor();
        });
        this.menuData = [
            {
                title: 'Details',
                key: 'detail',
                icon: 'fe fe-bookmark',
                url: 'detail',
            },
            {
                title: 'Riwayat',
                key: 'Lainnya',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'Purchase Order',
                        key: 'po',
                        icon: 'fe fe-bookmark',
                        url: 'po',
                    },
                    {
                        title: 'Audit',
                        key: 'audit',
                        icon: 'fe fe-bookmark',
                        url: 'audit',
                    }
                ],
            },
            {
                title: 'Contact',
                key: 'contact',
                icon: 'fe fe-bookmark',
                url: 'contact',
            },
            {
                title: 'Category',
                key: 'kategori',
                icon: 'fe fe-bookmark',
                url: 'kategori',
            },
        ];
        // this.setActiveItems(this.router.url)
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]; }))
            .subscribe(function (event) {
            // this.setActiveItems(event.url ? event.url : null)
        });
    };
    DetailVendorComponent.prototype.toggleMobileMenu = function () { };
    DetailVendorComponent.prototype.toggleMenu = function () { };
    DetailVendorComponent.prototype.toggleSettings = function () { };
    DetailVendorComponent.prototype.handleSubmenuClick = function (key) {
        var currentKey = this.activeSubmenu;
        if (this.flyoutActive) {
            return;
        }
        this.activeSubmenu = currentKey === key ? '' : key;
    };
    DetailVendorComponent.prototype.setActiveItems = function (pathname) {
        var menuData = this.menuData;
        var flattenItems = function (items, key) {
            return items.reduce(function (flattenedItems, item) {
                flattenedItems.push(item);
                if (Array.isArray(item[key])) {
                    return flattenedItems.concat(flattenItems(item[key], key));
                }
                return flattenedItems;
            }, []);
        };
        var activeItem = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](flattenItems(menuData, 'children'), ['url', pathname]);
        var activeSubmenu = menuData.reduce(function (key, parent) {
            if (Array.isArray(parent.children)) {
                parent.children.map(function (child) {
                    if (child.key === activeItem.key) {
                        key = parent;
                    }
                    return '';
                });
            }
            return key;
        });
        this.activeItem = activeItem.key;
        this.activeSubmenu = activeSubmenu.key;
    };
    DetailVendorComponent.prototype.handleFlyoutOver = function (event, key, items) {
        var _a;
        if (this.flyoutActive) {
            clearInterval(this.flyoutTimers[key]);
            var item = event.currentTarget;
            var itemDimensions = item.getBoundingClientRect();
            this.renderedFlyoutItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.renderedFlyoutItems, (_a = {}, _a[key] = {
                key: key,
                itemDimensions: itemDimensions,
                items: items,
            }, _a));
        }
    };
    DetailVendorComponent.prototype.handleFlyoutOut = function (key) {
        var _this = this;
        if (this.flyoutActive) {
            this.flyoutTimers[key] = setTimeout(function () {
                var updatedFlyoutItems = Object.assign({}, _this.renderedFlyoutItems);
                delete updatedFlyoutItems[key];
                _this.renderedFlyoutItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFlyoutItems);
            }, 100);
        }
    };
    DetailVendorComponent.prototype.handleFlyoutContainerOver = function (key) {
        clearInterval(this.flyoutTimers[key]);
    };
    DetailVendorComponent.prototype.getVendor = function () {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(this.id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
        });
    };
    DetailVendorComponent.ctorParameters = function () { return [
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__["VendorVendorService"] }
    ]; };
    DetailVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-vendor',
            template: __webpack_require__(/*! raw-loader!./detail-vendor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/detail-vendor.component.html"),
            styles: [__webpack_require__(/*! ./detail-vendor.component.scss */ "./src/app/pages/vendor/detail-vendor/detail-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__["VendorVendorService"]])
    ], DetailVendorComponent);
    return DetailVendorComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail-vendor.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail-vendor.module.ts ***!
  \********************************************************************/
/*! exports provided: DetailVendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVendorModule", function() { return DetailVendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-vendor-routing.module */ "./src/app/pages/vendor/detail-vendor/detail-vendor-routing.module.ts");
/* harmony import */ var _detail_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-vendor.component */ "./src/app/pages/vendor/detail-vendor/detail-vendor.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/vendor/detail-vendor/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _riwayat_po_po_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./riwayat/po/po.component */ "./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/pages/vendor/detail-vendor/owner/owner.component.ts");
/* harmony import */ var _kategori_kategori_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kategori/kategori.component */ "./src/app/pages/vendor/detail-vendor/kategori/kategori.component.ts");
/* harmony import */ var _riwayat_audit_audit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./riwayat/audit/audit.component */ "./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var _riwayat_detail_po_detail_po_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./riwayat/detail-po/detail-po.component */ "./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");

















var DetailVendorModule = /** @class */ (function () {
    function DetailVendorModule() {
    }
    DetailVendorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_vendor_component__WEBPACK_IMPORTED_MODULE_4__["DetailVendorComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _riwayat_po_po_component__WEBPACK_IMPORTED_MODULE_10__["PoComponent"], _owner_owner_component__WEBPACK_IMPORTED_MODULE_11__["OwnerComponent"], _kategori_kategori_component__WEBPACK_IMPORTED_MODULE_12__["KategoriComponent"], _riwayat_audit_audit_component__WEBPACK_IMPORTED_MODULE_13__["AuditComponent"], _riwayat_detail_po_detail_po_component__WEBPACK_IMPORTED_MODULE_15__["DetailPoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _detail_vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailVendorRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_14__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_16__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
        })
    ], DetailVendorModule);
    return DetailVendorModule;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail/detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail/detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/detail/detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/detail/detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor-service/service.service */ "./src/app/pages/vendor/detail-vendor/vendor-service/service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(vendorVendorService, serviceService, spinner, fb, pesan, router, activatedRoute) {
        this.vendorVendorService = vendorVendorService;
        this.serviceService = serviceService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataVendor = {};
        this.id_vendor = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getIdVendor().subscribe(function (data) {
            _this.id_vendor = data;
            _this.getData();
        });
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.vendorVendorService.getVendorVendorsId(this.id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"] },
        { type: _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/vendor/detail-vendor/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"],
            _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/kategori/kategori.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/kategori/kategori.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL2thdGVnb3JpL2thdGVnb3JpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/kategori/kategori.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/kategori/kategori.component.ts ***!
  \***************************************************************************/
/*! exports provided: KategoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KategoriComponent", function() { return KategoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor-service/service.service */ "./src/app/pages/vendor/detail-vendor/vendor-service/service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var KategoriComponent = /** @class */ (function () {
    function KategoriComponent(vendorVendorKategoriMasterService, vendorVendorKategoriService, serviceService, spinner, notification, fb, pesan, router) {
        this.vendorVendorKategoriMasterService = vendorVendorKategoriMasterService;
        this.vendorVendorKategoriService = vendorVendorKategoriService;
        this.serviceService = serviceService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.listCategory = [];
        this.listMaster = [];
        this.id_vendor = null;
        this.toogleAdd = false;
        this.id_vendor_kategori_master = '';
    }
    KategoriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getIdVendor().subscribe(function (data) {
            if (data) {
                _this.id_vendor = data;
                _this.getListKategori();
                _this.getMaster();
            }
        });
    };
    KategoriComponent.prototype.toogleAddShow = function () {
        this.toogleAdd = true;
    };
    KategoriComponent.prototype.getListKategori = function () {
        var _this = this;
        this.vendorVendorKategoriService.getVendorVendorKategoris(JSON.stringify({ id_vendor: this.id_vendor })).subscribe(function (data) {
            _this.listCategory = data.data;
        });
    };
    KategoriComponent.prototype.getMaster = function () {
        var _this = this;
        this.vendorVendorKategoriMasterService.getVendorVendorKategoriMasters().subscribe(function (data) {
            _this.listMaster = data.data;
        });
    };
    KategoriComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.vendorVendorKategoriService.deleteVendorVendorKategorisId(id).subscribe(function (data) {
            _this.getListKategori();
            _this.spinner.hide();
        });
    };
    KategoriComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_vendor: this.id_vendor,
            id_vendor_kategori_master: this.id_vendor_kategori_master
        };
        this.spinner.show();
        this.vendorVendorKategoriService.postVendorVendorKategoris(param).subscribe(function (data) {
            _this.toogleAdd = false;
            _this.getListKategori();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    KategoriComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorKategoriMasterService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorKategoriService"] },
        { type: _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    KategoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kategori',
            template: __webpack_require__(/*! raw-loader!./kategori.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/kategori/kategori.component.html"),
            styles: [__webpack_require__(/*! ./kategori.component.scss */ "./src/app/pages/vendor/detail-vendor/kategori/kategori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorKategoriMasterService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorKategoriService"],
            _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], KategoriComponent);
    return KategoriComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/owner/owner.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/owner/owner.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL293bmVyL293bmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/owner/owner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/owner/owner.component.ts ***!
  \*********************************************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OwnerComponent = /** @class */ (function () {
    function OwnerComponent() {
    }
    OwnerComponent.prototype.ngOnInit = function () {
    };
    OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! raw-loader!./owner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.scss */ "./src/app/pages/vendor/detail-vendor/owner/owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL3Jpd2F5YXQvYXVkaXQvYXVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vendor-service/service.service */ "./src/app/pages/vendor/detail-vendor/vendor-service/service.service.ts");







var AuditComponent = /** @class */ (function () {
    function AuditComponent(vendorVendorAuditService, serviceService, filterFuctionService, nzMessageService, spinner) {
        this.vendorVendorAuditService = vendorVendorAuditService;
        this.serviceService = serviceService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.id_vendor = '';
        this.listOfDisplayData = [];
        this.listOfData = [];
        this.sortKey = null;
        this.sortValue = null;
    }
    AuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getIdVendor().subscribe(function (data) {
            _this.id_vendor = data;
        });
        this.getData();
    };
    AuditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.vendorVendorAuditService.getVendorVendorAudits(JSON.stringify({ id_vendor: this.id_vendor, sortKey: this.sortKey, sortValue: this.sortValue, })).subscribe(function (data) {
            _this.listOfDisplayData = data.data;
            _this.listOfData = data.data;
            _this.spinner.hide();
        });
    };
    AuditComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.getData();
    };
    AuditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorAuditService"] },
        { type: _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    AuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audit',
            template: __webpack_require__(/*! raw-loader!./audit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.html"),
            styles: [__webpack_require__(/*! ./audit.component.scss */ "./src/app/pages/vendor/detail-vendor/riwayat/audit/audit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorAuditService"],
            _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], AuditComponent);
    return AuditComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL3Jpd2F5YXQvZGV0YWlsLXBvL2RldGFpbC1wby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailPoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPoComponent", function() { return DetailPoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var DetailPoComponent = /** @class */ (function () {
    function DetailPoComponent(gaPembelianService, vendorVendorService, gaPembelianItemService, direktoriPegawaiService, companyKantorService, assetModelxService, spinner, notification, pesan, router, activatedRoute) {
        this.gaPembelianService = gaPembelianService;
        this.vendorVendorService = vendorVendorService;
        this.gaPembelianItemService = gaPembelianItemService;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.companyKantorService = companyKantorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataPembelian = {};
        this.list_item = [];
        this.id_pembelian = '';
        this.dataPegawai = {};
        this.dataKantor = {};
        this.dataVendor = {};
        this.id_vendor = '';
    }
    DetailPoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            if (params.get('id')) {
                _this.id_pembelian = params.get('id');
            }
            _this.getDetailPembelian();
            _this.getDetailItem();
        });
    };
    DetailPoComponent.prototype.getDetailPembelian = function () {
        var _this = this;
        this.spinner.show();
        this.gaPembelianService.getGaPembeliansId(this.id_pembelian).subscribe(function (data) {
            _this.dataPembelian = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getkantor(data.data.id_kantor);
            _this.getVendor(data.data.id_vendor);
            _this.id_vendor = data.data.id_vendor;
            _this.spinner.hide();
        });
    };
    DetailPoComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    DetailPoComponent.prototype.getkantor = function (id_kantor) {
        var _this = this;
        this.companyKantorService.getCompanyKantorsId(id_kantor).subscribe(function (data) {
            _this.dataKantor = data.data;
        });
    };
    DetailPoComponent.prototype.getVendor = function (id_vendor) {
        var _this = this;
        this.vendorVendorService.getVendorVendorsId(id_vendor).subscribe(function (data) {
            _this.dataVendor = data.data;
        });
    };
    DetailPoComponent.prototype.getDetailItem = function () {
        var _this = this;
        this.gaPembelianItemService.getGaPembelianItems(JSON.stringify({ id_pembelian: this.id_pembelian })).subscribe(function (res) {
            _this.list_item = res.data;
            _this.spinner.hide();
        });
    };
    DetailPoComponent.prototype.goToBack = function () {
        this.router.navigate(['/vendor/detail-vendor/', this.id_vendor, 'po']);
    };
    DetailPoComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    DetailPoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-po',
            template: __webpack_require__(/*! raw-loader!./detail-po.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.html"),
            styles: [__webpack_require__(/*! ./detail-po.component.scss */ "./src/app/pages/vendor/detail-vendor/riwayat/detail-po/detail-po.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["CompanyKantorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], DetailPoComponent);
    return DetailPoComponent;
}());



/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9kZXRhaWwtdmVuZG9yL3Jpd2F5YXQvcG8vcG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.ts ***!
  \***********************************************************************/
/*! exports provided: PoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoComponent", function() { return PoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendor-service/service.service */ "./src/app/pages/vendor/detail-vendor/vendor-service/service.service.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");







var PoComponent = /** @class */ (function () {
    function PoComponent(gaPembelianService, serviceService, filterFuctionService, nzMessageService, spinner) {
        this.gaPembelianService = gaPembelianService;
        this.serviceService = serviceService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.id_vendor = '';
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
    PoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getIdVendor().subscribe(function (data) {
            _this.id_vendor = data;
        });
        this.searchData();
    };
    PoComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    PoComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.gaPembelianService
            .getGaPembelians(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search, id_vendor: this.id_vendor
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.listOfData = data.data.data;
            _this.total = data.data.total;
        });
    };
    PoComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    PoComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaPembelianService.deleteGaPembeliansId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    PoComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    PoComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["GaPembelianService"] },
        { type: _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    PoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-po',
            template: __webpack_require__(/*! raw-loader!./po.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.html"),
            styles: [__webpack_require__(/*! ./po.component.scss */ "./src/app/pages/vendor/detail-vendor/riwayat/po/po.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_6__["GaPembelianService"],
            _vendor_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PoComponent);
    return PoComponent;
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
//# sourceMappingURL=detail-vendor-detail-vendor-module.js.map