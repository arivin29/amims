(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-detail-asset-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/asset-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/asset-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-9 col-lg-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div class=\"col-xl-3 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n\r\n                    <div class=\"d-flex flex-wrap flex-column\r\n                                align-items-center\">\r\n                        <div class=\"air__utils__avatar\r\n                                    air__utils__avatar--size110 mb-3\">\r\n                            <img class=\"img-responsive\" alt=\"example\"\r\n                                src=\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\" />\r\n                        </div>\r\n                        <div class=\"text-center\">\r\n                            <div class=\"text-dark font-weight-bold\r\n                                        font-size-18\">{{asset.sn}} </div>\r\n                            <div class=\"text-uppercase font-size-12 mb-3\">\r\n                                <a [routerLink]=\"['../../model',asset.id_model]\" target=\"_blank\">\r\n                                    {{model.part_number}}<br>{{model.keyword}}\r\n                                </a>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-primary\r\n                                        btn-with-addon\" nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                                <span class=\"btn-addon\">\r\n                                    <i class=\"btn-addon-icon fe fe-plus-circle\"></i>\r\n                                </span>\r\n                                Request Access\r\n                            </button>\r\n\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item>\r\n                                        <a [routerLink]=\"['../../transaction/checkin-add', model.id_model]\"\r\n                                            routerLinkActive=\"router-link-active\">Clone</a>\r\n                                    </li>\r\n                                    <li nz-menu-item>2nd menu item</li>\r\n                                    <li nz-menu-item>3rd menu item</li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"card text-primary\">\r\n\r\n                <perfect-scrollbar>\r\n                    <div class=\"air__menuLeft__container\">\r\n                        <ul class=\"air__menuLeft__list\">\r\n\r\n                            <ng-container *ngFor=\"let item of menuData\">\r\n                                <ng-container *ngTemplateOutlet=\"itemTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"submenuTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"categoryTpl;\r\n                                            context: {$implicit: item}\"></ng-container>\r\n                            </ng-container>\r\n                        </ul>\r\n\r\n                    </div>\r\n                </perfect-scrollbar>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #itemTpl let-item>\r\n    <ng-container *ngIf=\"!item.children && !item.category\">\r\n        <li class=\"air__menuLeft__item\" [ngClass]=\"{air__menuLeft__item__active:\r\n                    item.key === activeItem}\">\r\n            <a [routerLink]=\"item.url ? item.url : 'javascript: void(0)'\" class=\"air__menuLeft__link\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #submenuTpl let-item>\r\n    <ng-container *ngIf=\"item.children\">\r\n        <li class=\"air__menuLeft__item air__menuLeft__submenu\" [ngClass]=\"{air__menuLeft__submenu__active: item.key ===\r\n                    activeSubmenu}\">\r\n            <a href=\"javascript: void(0);\" class=\"air__menuLeft__link\" (click)=\"handleSubmenuClick(item.key)\"\r\n                (mouseenter)=\"handleFlyoutOver($event, item.key, item.children)\"\r\n                (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n            <ul class=\"air__menuLeft__list\">\r\n                <ng-container *ngFor=\"let item of item.children\">\r\n                    <ng-container *ngTemplateOutlet=\"itemTpl; context:\r\n                                {$implicit: item}\"></ng-container>\r\n                </ng-container>\r\n            </ul>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #categoryTpl let-item>\r\n    <ng-container *ngIf=\"item.category\">\r\n        <li class=\"air__menuLeft__category\">\r\n            <span>{{ item.title }}</span>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #flyoutTpl let-item>\r\n    <div @flyoutAnimation [ngStyle]=\"{\r\n                left: item.itemDimensions.left + item.itemDimensions.width - 10 + 'px',\r\n                top: item.itemDimensions.top + 'px'\r\n                }\" class=\"air__menuFlyout\" [ngClass]=\"{\r\n                air__menuFlyoutLeft: menuLayoutType === 'left',\r\n                air__menuFlyout__black: flyoutMenuColor === 'dark',\r\n                air__menuFlyout__white: flyoutMenuColor === 'white',\r\n                air__menuFlyout__gray: flyoutMenuColor === 'gray'\r\n                }\">\r\n        <ul class=\"air__menuLeft__list\" (mouseenter)=\"handleFlyoutContainerOver(item.key)\"\r\n            (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n            <ng-container *ngFor=\"let item of item.items\">\r\n                <ng-container *ngTemplateOutlet=\"itemTpl; context: {$implicit:\r\n                            item}\"></ng-container>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/component/component.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/component/component.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Componen</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" [hidden]=\"!id_parent\">\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Serial number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.sn\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Avaiable quantity</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.qty\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Quantity needed</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input type=\"number\" placeholder=\"\"  [(ngModel)]=\"qty_asset\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listAssetChild\" [nzShowPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Keyword</th>\r\n                        <th>Part Number</th>\r\n                        <th>Quantity needed</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.keyword}}</td>\r\n                        <td>{{data.part_number}}</td>\r\n                        <td>{{data.qty_asset}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_asset_template_child)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                    <h5 class=\"mb-0\">Consumsiable</h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_parent\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Serial number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.sn\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Avaiable quantity</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Quantity needed</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"\"  [(ngModel)]=\"qty_asset\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"listAssetChild\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Keyword</th>\r\n                            <th>Part Number</th>\r\n                            <th>Quantity needed</th>\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty_asset}}</td>\r\n                            <td class=\"text-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                    (click)=\"deleteItem(data.id_asset_template_child)\">\r\n                                    <i class=\"fe fe-trash\"></i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/detail/detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/detail/detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Asset Detail</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../../../master/model/edit',model.id_model]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Edit\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                {{dataModel.life_limit_var}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Type</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataManufacture.name_manufacture}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Serian number</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.sn}}</td>\r\n                        </tr>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Vendor</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Status</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataStatus.status}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Purchase date</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_date | date}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Pusrchase number</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.purchase_number}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Price</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.price}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Bin location</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataBin.bin_location}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Quantity</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataAsset.qty}}</td>\r\n                        </tr>\r\n                    </div>\r\n                </div>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/license/license.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/license/license.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                    <h5 class=\"mb-0\">License</h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                    <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                        + Item\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div nz-row nzGutter=\"8\" [hidden]=\"!id_parent\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Serial number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.sn\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Avaiable quantity</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.qty\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Quantity needed</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input type=\"number\" placeholder=\"\"  [(ngModel)]=\"qty_asset\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"4\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>-</nz-form-label>\r\n                            <nz-form-control>\r\n                                <button type=\"button\" (click)=\"simpan_item()\"\r\n                                    class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <nz-table #basicTable1 [nzData]=\"listAssetChild\" [nzShowPagination]=\"true\"\r\n                    class=\"air__utils__scrollTable mb-4\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Keyword</th>\r\n                            <th>Part Number</th>\r\n                            <th>Quantity needed</th>\r\n                            <th class=\"text-right\">\r\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of basicTable1.data\">\r\n                            <td>{{data.keyword}}</td>\r\n                            <td>{{data.part_number}}</td>\r\n                            <td>{{data.qty_asset}}</td>\r\n                            <td class=\"text-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                    (click)=\"deleteItem(data.id_asset_template_child)\">\r\n                                    <i class=\"fe fe-trash\"></i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Checkout</h5>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"checkout_date\">Date</th>\r\n                        <th nzShowSort nzSortKey=\"from_module\">From Module</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"qty\">QTY</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.checkout_date | date }}</td>\r\n                        <td>{{ data.from_module }}</td>\r\n                        <td>{{ data.status }} / {{ data.status_type }}</td>\r\n                        <td>{{ data.qty }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Complaints</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" *ngIf=\"jenis =='all'\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../../../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Pegawai</th>\r\n                        <th nzShowSort nzSortKey=\"judul\">Judul</th>\r\n                        <th nzShowSort nzSortKey=\"jenis\">Type</th>\r\n                        <th nzShowSort nzSortKey=\"created_at\">Request date</th>\r\n                        <!-- <th class=\"text-right\">Action</th> -->\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.judul }}</td>\r\n                        <td>{{ data.jenis }}</td>\r\n                        <td>{{ data.created_at | date }}</td>\r\n                        <!-- <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../edit',data.id_ticketing]\"><i nz-icon\r\n                                            nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                    </li>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_ticketing]\"><i nz-icon\r\n                                            nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                    <li nz-menu-divider> </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_ticketing)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\"\r\n                                                nzTheme=\"outline\"></i>Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/search-item/search-item.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/search-item/search-item.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"20\">\r\n        <nz-form-item>\r\n            <nz-form-label>Keyword / Part Number / SN</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-label>Search</nz-form-label><br>\r\n        <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon\r\n                nzType=\"search\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\"\r\n    [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n    (nzPageSizeChange)=\"searchData(true)\">\r\n    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n        <tr>\r\n            <th nzShowSort nzSortKey=\"keyword\">Keyword</th>\r\n            <th nzShowSort nzSortKey=\"part_number\">Part Number</th>\r\n            <th nzShowSort nzSortKey=\"name_manufacture\">Serial number</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Quantity</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Status</th>\r\n            <th nzShowSort nzSortKey=\"part_id\">Part.id</th>\r\n            <th class=\"text-right\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of ajaxTable.data\">\r\n            <td>{{ data.keyword }}</td>\r\n            <td>{{ data.part_number }} </td>\r\n            <td>{{ data.sn }}</td>\r\n            <td>{{ data.qty }}</td>\r\n            <td>{{ data.status }}</td>\r\n            <td>{{ data.part_id }}</td>\r\n            <td class=\"text-right\">\r\n                <button nz-button nzType=\"primary\" (click)=\"selectAsset(data.id_asset)\" nzShape=\"circle\"><i nz-icon\r\n                        nzType=\"check\"></i></button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Spesification</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <!-- <a class=\"btn btn-primary\"  routerLinkActive=\"router-link-active\">\r\n                    FIlter\r\n                </a> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n\r\n\r\n            <nz-table #basicTable [nzData]=\"listSpesifikasi\" [nzFrontPagination]=\"false\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"\" style=\"width:60px\"></th>\r\n                        <th class=\"\">Name</th>\r\n                        <th class=\"\">Value</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable.data\">\r\n                        <td *ngIf=\"!data.edit\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"edit(data.id_model_specification,data.id_asset_specification)\">\r\n                                <i class=\"fe fe-edit\"></i>\r\n                            </button>\r\n                        </td>\r\n                        <td *ngIf=\"data.edit\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"SimpanUpdate(data.id_model_specification,data.id_asset_specification,data.value_spesification)\">\r\n                                <i class=\"fe fe-save\"></i>\r\n                            </button>\r\n                        </td>\r\n                        <td>\r\n                            {{data.field_label}}\r\n                        </td>\r\n\r\n\r\n                        <td class=\"text-right\" *ngIf=\"!data.edit\">\r\n                            {{data.value_spesification?data.value_spesification:data.value_default}} {{data.end_render}}\r\n                        </td>\r\n                        <td class=\"text-right\" *ngIf=\"data.edit\">\r\n                            <nz-input-group [nzAddOnAfter]=\"data.end_render\" nzAddOnAfter=\".com\">\r\n\r\n                                <input type=\"text\" *ngIf=\"data.field_type =='input'\" nz-input\r\n                                    [(ngModel)]=\"data.value_spesification\" />\r\n\r\n                                <nz-select style=\"width: 100%;\" *ngIf=\"data.field_type =='select'\" nzShowSearch\r\n                                    nzAllowClear nzPlaceHolder=\"Choose Custom Field\"\r\n                                    [(ngModel)]=\"data.value_spesification\">\r\n                                    <nz-option *ngFor=\"let item of data.option_value \" nzValue=\"{{item}}\"\r\n                                        nzLabel=\"{{item}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/asset-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/asset-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AssetDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailRoutingModule", function() { return AssetDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _riwayat_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riwayat/complaints/complaints.component */ "./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.ts");
/* harmony import */ var _riwayat_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riwayat/check-out/check-out.component */ "./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./license/license.component */ "./src/app/pages/asset/asset-detail/license/license.component.ts");
/* harmony import */ var _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consumsiable/consumsiable.component */ "./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.ts");
/* harmony import */ var _component_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/component.component */ "./src/app/pages/asset/asset-detail/component/component.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asset_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset-detail.component */ "./src/app/pages/asset/asset-detail/asset-detail.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/asset-detail/detail/detail.component.ts");
/* harmony import */ var _spesifikasi_spesifikasi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spesifikasi/spesifikasi.component */ "./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.ts");











var routes = [
    {
        path: '',
        component: _asset_detail_component__WEBPACK_IMPORTED_MODULE_8__["AssetDetailComponent"],
        children: [
            {
                path: '',
                redirectTo: 'detail'
            },
            {
                path: 'detail',
                component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]
            },
            {
                path: 'spesifikasi',
                component: _spesifikasi_spesifikasi_component__WEBPACK_IMPORTED_MODULE_10__["SpesifikasiComponent"]
            },
            {
                path: 'component',
                component: _component_component_component__WEBPACK_IMPORTED_MODULE_5__["ComponentComponent"]
            },
            {
                path: 'consumsiable',
                component: _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_4__["ConsumsiableComponent"]
            },
            {
                path: 'license',
                component: _license_license_component__WEBPACK_IMPORTED_MODULE_3__["LicenseComponent"]
            },
            {
                path: 'checkout',
                component: _riwayat_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_2__["CheckOutComponent"]
            },
            {
                path: 'complaints',
                component: _riwayat_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_1__["ComplaintsComponent"]
            },
        ]
    }
];
var AssetDetailRoutingModule = /** @class */ (function () {
    function AssetDetailRoutingModule() {
    }
    AssetDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AssetDetailRoutingModule);
    return AssetDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/asset-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/asset-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".air__menuLeft {\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  min-height: 100%;\n  background: #161537;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .air__menuLeft {\n    position: fixed;\n    z-index: 997;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    overflow: visible;\n    margin-left: -240px;\n    -webkit-transition: -webkit-transform 0.2s ease-in-out;\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  }\n  .air__menuLeft__mobileToggleButton {\n    display: block !important;\n  }\n  .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__mobileToggled {\n    -webkit-transform: translateX(240px);\n            transform: translateX(240px);\n  }\n}\n.air__menuLeft__outer {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  height: 100%;\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.air__menuLeft__container {\n  padding-bottom: 1.33rem;\n}\n.air__menuLeft__backdrop {\n  position: fixed;\n  z-index: 996;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #161537;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out;\n}\n@media (max-width: 767px) {\n  .air__menuLeft__mobileToggled + .air__menuLeft__backdrop {\n    opacity: 0.2;\n    visibility: visible;\n  }\n}\n.air__menuLeft__mobileToggleButton {\n  position: absolute;\n  right: -2.67rem;\n  top: 9.46rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #161537;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  display: none;\n  text-align: center;\n  box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n}\n.air__menuLeft__mobileToggleButton span {\n  display: inline-block;\n  width: 14px;\n  height: 2px;\n  position: relative;\n  background: #fff;\n  -webkit-transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  top: 5px;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span {\n  background: transparent;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:before {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:after {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n.air__menuLeft__mobileToggleButton span:before, .air__menuLeft__mobileToggleButton span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  height: 2px;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.air__menuLeft__mobileToggleButton span:before {\n  top: -5px;\n}\n.air__menuLeft__mobileToggleButton span:after {\n  top: 5px;\n}\n.air__menuLeft__toggleButton {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.66rem;\n  z-index: 2;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n.air__menuLeft__toggled .air__menuLeft__toggleButton {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.air__menuLeft__toggleButton:hover span {\n  opacity: 1 !important;\n}\n.air__menuLeft__toggleButton span {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 0.9;\n}\n.air__menuLeft__toggleButton span:before, .air__menuLeft__toggleButton span:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 12px;\n  height: 3px;\n  background: #1b55e3;\n  border-radius: 5px;\n}\n.air__menuLeft__toggleButton span:before {\n  top: 14px;\n  left: 6px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.air__menuLeft__toggleButton span:after {\n  top: 21px;\n  left: 6px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__toggleButton span:first-child {\n  position: relative;\n  left: 3px;\n}\n.air__menuLeft__toggleButton span:last-child {\n  position: relative;\n  left: 11px;\n  opacity: 0.5;\n}\n.air__menuLeft__logo {\n  display: block;\n  padding: 1rem 1.33rem;\n  line-height: 1;\n  height: 4.26rem;\n}\n.air__menuLeft__logo img {\n  float: left;\n  margin-top: 0.33rem;\n}\n.air__menuLeft__logo__name {\n  font-weight: 900;\n  color: #fff;\n  font-size: 21px;\n  margin-left: 2.66rem;\n}\n.air__menuLeft__logo__descr {\n  color: #c3bedc;\n  margin-left: 2.66rem;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.air__menuLeft__user {\n  display: block;\n  padding: 1rem 1.33rem;\n  height: 4.8rem;\n  line-height: 1.3;\n}\n.air__menuLeft__user__avatar {\n  float: left;\n}\n.air__menuLeft__user__name {\n  margin-left: 4rem;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-top: 0.13rem;\n}\n.air__menuLeft__user__role {\n  margin-left: 4rem;\n  color: #786fa4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.air__menuLeft__banner {\n  margin: 2.66rem 1.33rem 1.33rem;\n  background: #1b55e3;\n  background: linear-gradient(45deg, #1b55e3 0%, #4877e9 100%);\n  border-radius: 6px;\n  padding: 1.33rem;\n  color: #fff;\n  box-shadow: 0 8px 15px -5px black;\n}\n.air__menuLeft__list {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.air__menuLeft__list .air__menuLeft__list .air__menuLeft__link {\n  padding-left: 3.26rem;\n}\n.air__menuLeft__category {\n  text-transform: uppercase;\n  color: #786fa4;\n  letter-spacing: 1px;\n  font-size: 0.8rem;\n  padding: 0.93rem 1.33rem;\n  overflow: hidden;\n  position: relative;\n}\n.air__menuLeft__category:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 1.33rem;\n  right: 1.33rem;\n  height: 1px;\n  background: #4a436a;\n  display: none;\n}\n.air__menuLeft__item {\n  display: block;\n}\n.air__menuLeft__item__active > .air__menuLeft__link {\n  background: #1b55e3;\n  color: #fff;\n}\n.air__menuLeft__item__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu > .air__menuLeft__link {\n  position: relative;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__submenu > .air__menuLeft__link:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1.33rem;\n  right: 1.33rem;\n  width: 6px;\n  height: 2px;\n  background: #786fa4;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transition: background 0.2s ease-in-out;\n  transition: background 0.2s ease-in-out;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:after {\n  right: 1.6rem;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__submenu__active {\n  background: #100f28;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__list {\n  display: block !important;\n}\n.air__menuLeft__submenu .air__menuLeft__list {\n  display: none;\n  padding-bottom: 0.66rem;\n}\n.air__menuLeft__link {\n  color: #aca6cc;\n  display: block;\n  padding: 0.6rem 2.66rem 0.6rem 1.33rem;\n  font-size: 1rem;\n}\n.air__menuLeft__link:hover, .air__menuLeft__link:focus {\n  color: #1b55e3;\n}\n.air__menuLeft__link:hover:before, .air__menuLeft__link:hover:after, .air__menuLeft__link:focus:before, .air__menuLeft__link:focus:after {\n  background: #fff;\n}\n.air__menuLeft__icon {\n  display: inline-block;\n  width: 1.66rem;\n}\n@media (min-width: 768px) {\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__logo {\n    visibility: hidden;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__toggleButton {\n    right: 1.33rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__name, .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__role {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link > span {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 1.4rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 1.2rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__icon {\n    width: 2.66rem;\n    text-align: center;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category {\n    text-indent: -999px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category:after {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .air__menuLeft__compact {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo {\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo img {\n    float: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo__name, .air__menuLeft__compact .air__menuLeft__logo__descr {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__user {\n    height: auto;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__avatar {\n    float: none;\n    margin-bottom: 0.66rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__name, .air__menuLeft__compact .air__menuLeft__user__role {\n    display: block;\n    margin-left: 0;\n  }\n  .air__menuLeft__compact .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link {\n    text-align: center;\n    padding: 0.6rem 1.33rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span {\n    display: block;\n    float: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span:global(.badge) {\n    display: inline-block;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: 2px;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -1px;\n  }\n  .air__menuLeft__compact .air__menuLeft__icon {\n    width: 2.66rem;\n    display: block;\n    margin: 0 auto 0.33rem;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__category {\n    display: none;\n  }\n}\n.air__menuLeft__unfixed {\n  display: -webkit-box;\n  display: flex;\n}\n.air__menuLeft__unfixed .air__menuLeft__outer {\n  height: auto;\n  position: static;\n}\n.air__menuLeft__shadow {\n  box-shadow: 0 0 100px -30px rgba(57, 55, 73, 0.3);\n}\n.air__menuLeft__blue {\n  background: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__category:after {\n  background: rgba(242, 244, 248, 0.1);\n}\n.air__menuLeft__blue .air__menuLeft__link {\n  color: #e4e9f0;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover {\n  color: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover:before, .air__menuLeft__blue .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active {\n  background: #184ccc;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__category, .air__menuLeft__blue .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__gray {\n  background: #f2f4f8;\n}\n.air__menuLeft__gray .air__menuLeft__category:after {\n  background: #e5e9f1;\n}\n.air__menuLeft__gray .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover:before, .air__menuLeft__gray .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__gray .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0 !important;\n}\n.air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__category, .air__menuLeft__gray .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__gray .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__white {\n  background: #fff;\n}\n.air__menuLeft__white .air__menuLeft__category:after {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__white .air__menuLeft__link:hover:before, .air__menuLeft__white .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__white .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8 !important;\n}\n.air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__category, .air__menuLeft__white .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__white .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 768px) {\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -3px;\n  }\n  .air__menuLeft__flyout .air__menuLeft__link:hover, .air__menuLeft__compact .air__menuLeft__link:hover, .air__menuLeft__toggled .air__menuLeft__link:hover {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__black .air__menuLeft__link:hover {\n    background: #161537;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover {\n    background: #f2f4f8;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover {\n    background: #fff;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuFlyout {\n    position: fixed;\n    z-index: 3000;\n    top: 100px;\n    box-shadow: 0 0 40px -10px rgba(22, 21, 55, 0.4);\n    background: #1b55e3;\n    -webkit-transform: translate3d(0, calc(-50% + 20px), 0);\n            transform: translate3d(0, calc(-50% + 20px), 0);\n    -webkit-transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out !important;\n    -webkit-transition-delay: 0 !important;\n            transition-delay: 0 !important;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  .air__menuFlyout .air__menuLeft__list {\n    max-width: 36rem;\n    display: block !important;\n    height: auto !important;\n  }\n  .air__menuFlyout .air__menuLeft__item {\n    float: left;\n    width: 12rem;\n    border-left: 1px solid rgba(242, 244, 248, 0.1);\n    border-bottom: 1px solid rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__item:nth-child(3n+1) {\n    border-left: none;\n  }\n  .air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link {\n    color: #fff;\n    padding: 1rem 2rem;\n  }\n  .air__menuFlyout .air__menuLeft__link:hover {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link > span {\n    display: block !important;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n}\n@media (min-width: 768px) and (min-width: 768px) {\n  .air__menuFlyout__black.air__menuFlyout {\n    background: #161537;\n  }\n  .air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout {\n    background: #fff;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #f2f4f8;\n    border-bottom: 1px solid #f2f4f8;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout {\n    background: #f2f4f8;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #e5e9f1;\n    border-bottom: 1px solid #e5e9f1;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXQvYXNzZXQtZGV0YWlsL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGFzc2V0XFxhc3NldC1kZXRhaWxcXGFzc2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXQvYXNzZXQtZGV0YWlsL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXQvYXNzZXQtZGV0YWlsL2Fzc2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkNMSTtFRE1KLGdCQUFBO0FFQUo7QUZDSTtFQVJKO0lBU1EsZUFBQTtJQUNBLFlBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0RBQUE7SUFBQSw4Q0FBQTtJQUFBLHNDQUFBO0lBQUEsMEVBQUE7RUVFTjtFRkRNO0lBQ0kseUJBQUE7RUVHVjtFRkRNO0lBQ0ksYUFBQTtFRUdWO0VGQVU7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VFRWQ7QUFDRjtBRkVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FFQVI7QUZHSTtFQUNJLHVCQUFBO0FFRFI7QUZHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQ3BEQTtFRHFEQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0FFRFI7QUZHWTtFQUNJO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0VFRGxCO0FBQ0Y7QUZNSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQ3hFQTtFRHlFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRkN4Q0c7QUNvQ1g7QUZLUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQ3BGSjtFRHFGSSx3RUFBQTtFQUFBLGdFQUFBO0VBQ0EsUUFBQTtBRUhaO0FGS2dCO0VBQ0ksdUJBQUE7QUVIcEI7QUZJb0I7RUFDSSxnREFBQTtVQUFBLHdDQUFBO0FFRnhCO0FGSW9CO0VBQ0ksa0RBQUE7VUFBQSwwQ0FBQTtBRUZ4QjtBRk1ZO0VBRUksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQ3ZHUjtFRHdHUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtFQUFBO0VBQUEsdUVBQUE7RUFBQSwrREFBQTtFQUFBLDRIQUFBO0FFSmhCO0FGTVk7RUFDSSxTQUFBO0FFSmhCO0FGTVk7RUFDSSxRQUFBO0FFSmhCO0FGU0k7RUFRSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRWRSO0FGR2dCO0VBQ0ksaUNBQUE7VUFBQSx5QkFBQTtBRURwQjtBRmFZO0VBQ0kscUJBQUE7QUVWaEI7QUZhUTtFQ3pFTix3Q0FBQTtFQUFBLGdDQUFBO0VEMkVVLFlBQUE7QUVYWjtBRllZO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJDakpUO0VEa0pTLGtCQUFBO0FFWGhCO0FGYVk7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUVYaEI7QUZhWTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBRVhoQjtBRmFZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FFWGhCO0FGYVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FFWGhCO0FGZ0JJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVkUjtBRmVRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FFYlo7QUZlUTtFQUNJLGdCQUFBO0VBQ0EsV0N2TEo7RUR3TEksZUFBQTtFQUNBLG9CQUFBO0FFYlo7QUZlUTtFQUNJLGNDckxIO0VEc0xHLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUViWjtBRmlCSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRWZSO0FGZ0JRO0VBQ0ksV0FBQTtBRWRaO0FGZ0JRO0VBQ0ksaUJBQUE7RUFDQSxXQzlNSjtFRCtNSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRWRaO0FGZ0JRO0VBQ0ksaUJBQUE7RUFDQSxjQzdNSDtFRDhNRyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVkWjtBRmtCSTtFQUNJLCtCQUFBO0VBQ0EsbUJDN05EO0VEOE5DLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdDbk9BO0VEb09BLGlDQUFBO0FFaEJSO0FGbUJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBRWpCUjtBRm1CWTtFQUNJLHFCQUFBO0FFakJoQjtBRnFCSTtFQUNJLHlCQUFBO0VBQ0EsY0MxT0M7RUQyT0QsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRW5CUjtBRm9CUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUVsQlo7QUZxQkk7RUFDSSxjQUFBO0FFbkJSO0FGcUJZO0VBQ0ksbUJDdFFUO0VEdVFTLFdDelFSO0FDc1BSO0FGb0JnQjtFQUNJLFdDM1FaO0FDeVBSO0FGd0JRO0VBQ0ksa0JBQUE7QUV0Qlo7QUZ1Qlk7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQ25SUDtFRG9STyxpQ0FBQTtVQUFBLHlCQUFBO0VDek9kLCtDQUFBO0VBQUEsdUNBQUE7QUNvTkY7QUZ3Qlk7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBRXRCaEI7QUZ5QlE7RUFDSSxtQkFBQTtBRXZCWjtBRndCWTtFQUNJLFdDeFNSO0FDa1JSO0FGdUJnQjtFQUVJLGdCQzNTWjtBQ3FSUjtBRndCZ0I7RUFDSSxXQzlTWjtBQ3dSUjtBRnlCWTtFQUNJLHlCQUFBO0FFdkJoQjtBRjBCUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRXhCWjtBRjJCSTtFQUNJLGNDblRDO0VEb1RELGNBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7QUV6QlI7QUYwQlE7RUFFSSxjQy9UTDtBQ3NTUDtBRjBCWTtFQUVJLGdCQ3BVUjtBQzJTUjtBRjZCSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRTNCUjtBRitCUTtFQUNJO0lBQ0ksbUJBQUE7WUFBQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VFN0JkO0VGK0JrQjtJQUNJLG1CQUFBO1lBQUEsY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFRTdCdEI7RUYrQmtCO0lBQ0ksa0JBQUE7RUU3QnRCO0VGK0JrQjtJQUNJLGNBQUE7RUU3QnRCO0VGZ0NzQjtJQUVJLGFBQUE7RUUvQjFCO0VGa0NrQjtJQUNJLGFBQUE7RUVoQ3RCO0VGbUNzQjtJQUNJLG1CQzFXckI7RUN5VUw7RUZtQ3NCO0lBQ0ksd0JBQUE7RUVqQzFCO0VGcUNzQjtJQUNJLGFBQUE7RUVuQzFCO0VGcUNzQjtJQUNJLGFBQUE7SUFDQSxXQUFBO0VFbkMxQjtFRnFDc0I7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFRW5DMUI7RUZzQ2tCO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VFcEN0QjtFRnNDa0I7SUFDSSxtQkFBQTtFRXBDdEI7RUZxQ3NCO0lBQ0ksY0FBQTtFRW5DMUI7QUFDRjtBRjJDUTtFQUNJO0lBQ0ksbUJBQUE7WUFBQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUV6Q2Q7RUYyQ2tCO0lBQ0ksbUJBQUE7WUFBQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUV6Q3RCO0VGMkNrQjtJQUNJLGtCQUFBO0VFekN0QjtFRjBDc0I7SUFDSSxXQUFBO0VFeEMxQjtFRjBDc0I7SUFFSSxhQUFBO0VFekMxQjtFRjRDa0I7SUFDSSxhQUFBO0VFMUN0QjtFRjRDa0I7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUUxQ3RCO0VGMkNzQjtJQUNJLFdBQUE7SUFDQSxzQkFBQTtFRXpDMUI7RUYyQ3NCO0lBRUksY0FBQTtJQUNBLGNBQUE7RUUxQzFCO0VGNkNrQjtJQUNJLGFBQUE7RUUzQ3RCO0VGOENzQjtJQUNJLG1CQ3pickI7RUM2WUw7RUY4Q3NCO0lBQ0ksd0JBQUE7RUU1QzFCO0VGK0NrQjtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7RUU3Q3RCO0VGOENzQjtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFRTVDMUI7RUY2QzBCO0lBQ0kscUJBQUE7RUUzQzlCO0VGOENzQjtJQUNJLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFRTVDMUI7RUY4Q3NCO0lBQ0ksYUFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtFRTVDMUI7RUYrQ2tCO0lBQ0ksY0FBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VFN0N0QjtFRitDa0I7SUFDSSxhQUFBO0VFN0N0QjtBQUNGO0FGb0RRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FFbERaO0FGbURZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FFakRoQjtBRnVEUTtFQUNJLGlEQ3pjRDtBQ3FaWDtBRjBEUTtFQUNJLG1CQ3JmTDtBQzhiUDtBRjJEd0I7RUFFSSxnQkM3ZnBCO0FDbWNSO0FGOER3QjtFQUVJLGdCQ25nQnBCO0FDc2NSO0FGa0VvQjtFQUNJLG9DQUFBO0FFaEV4QjtBRm1FZ0I7RUFDSSxjQ3hnQlg7QUN1Y1Q7QUZrRW9CO0VBQ0ksY0M3Z0JqQjtBQzZjUDtBRmlFd0I7RUFFSSwyQkFBQTtBRWhFNUI7QUZxRW9CO0VBQ0ksbUJBQUE7QUVuRXhCO0FGb0V3QjtFQUNJLFdDMWhCcEI7QUN3ZFI7QUZtRTRCO0VBRUksMkJBQUE7QUVsRWhDO0FGdUV3QjtFQUVJLG1CQzVoQm5CO0FDc2RUO0FGMEVnQjtFQUVJLGNDbGlCWDtBQ3lkVDtBRjJFZ0I7RUFDSSw4Q0FBQTtBRXpFcEI7QUY4RVE7RUFDSSxtQkMvaUJIO0FDb2VUO0FGOEVvQjtFQUNJLG1CQUFBO0FFNUV4QjtBRitFZ0I7RUFDSSxjQ2xqQlg7QUNxZVQ7QUY4RW9CO0VBQ0ksV0M3akJoQjtFRDhqQmdCLG1CQzVqQmpCO0FDZ2ZQO0FGNkV3QjtFQUVJLDJCQUFBO0FFNUU1QjtBRmtGd0I7RUFDSSxXQ3hrQnBCO0FDd2ZSO0FGcUZvQjtFQUNJLG1CQ3prQmY7QUNzZlQ7QUZxRjRCO0VBQ0ksY0N4a0J2QjtBQ3FmVDtBRnNGZ0M7RUFDSSxXQ3JsQjVCO0FDaWdCUjtBRjBGZ0M7RUFDSSw4QkFBQTtBRXhGcEM7QUY4RndCO0VBRUksbUJDNWxCbkI7QUNnZ0JUO0FGZ0dnQjtFQUVJLGNDam1CWDtBQ2tnQlQ7QUZpR2dCO0VBQ0ksY0NybUJYO0FDc2dCVDtBRmlHZ0I7RUFDSSxjQy9tQlo7QUNnaEJSO0FGaUdnQjtFQUNJLDhDQUFBO0FFL0ZwQjtBRm9HUTtFQUNJLGdCQ3puQko7QUN3aEJSO0FGb0dvQjtFQUNJLG1CQ3puQmY7QUN1aEJUO0FGcUdnQjtFQUNJLGNDeG5CWDtBQ3FoQlQ7QUZvR29CO0VBQ0ksV0Nub0JoQjtFRG9vQmdCLG1CQ2xvQmpCO0FDZ2lCUDtBRm1Hd0I7RUFFSSwyQkFBQTtBRWxHNUI7QUZ3R3dCO0VBQ0ksV0M5b0JwQjtBQ3dpQlI7QUYyR29CO0VBQ0ksbUJDaHBCZjtBQ3VpQlQ7QUYyRzRCO0VBQ0ksY0M5b0J2QjtBQ3FpQlQ7QUY0R2dDO0VBQ0ksV0MzcEI1QjtBQ2lqQlI7QUZnSGdDO0VBQ0ksOEJBQUE7QUU5R3BDO0FGb0h3QjtFQUVJLG1CQ2xxQm5CO0FDZ2pCVDtBRnNIZ0I7RUFFSSxjQ3ZxQlg7QUNrakJUO0FGdUhnQjtFQUNJLGNDM3FCWDtBQ3NqQlQ7QUZ1SGdCO0VBQ0ksY0NyckJaO0FDZ2tCUjtBRnVIZ0I7RUFDSSw4Q0FBQTtBRXJIcEI7QUYySEk7RUFJZ0I7SUFDSSxtQkNsc0JqQjtFQ3VrQkw7RUY0SHNCO0lBQ0ksV0N0c0JwQjtFQzRrQk47RUYySDBCO0lBQ0ksV0N4c0J4QjtFQytrQk47RUY2SGtCO0lBQ0ksd0JBQUE7RUUzSHRCO0VGK0hrQjtJQUNJLGFBQUE7SUFDQSxRQUFBO0VFN0h0QjtFRitIa0I7SUFDSSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0VFN0h0QjtFRnlJa0I7SUFDSSxtQkNudUJqQjtFQzRsQkw7RUZnSjBCO0lBQ0ksbUJDOXVCeEI7RUNnbUJOO0VGdUowQjtJQUNJLG1CQ3J2QnZCO0lEc3ZCdUIsY0N4dkJ6QjtFQ21tQkw7RUZzSjhCO0lBRUksbUJDM3ZCN0I7RUNzbUJMO0VGK0owQjtJQUNJLGdCQ3h3QnhCO0lEeXdCd0IsY0N2d0J6QjtFQzBtQkw7RUY4SjhCO0lBRUksbUJDMXdCN0I7RUM2bUJMO0VGdUtVO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsZ0RDanZCTDtJRGt2QkssbUJDenhCVDtJRDB4QlMsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGlFQUFBO0lBQUEseURBQUE7SUFBQSxpREFBQTtJQUFBLHFGQUFBO0lBQ0Esc0NBQUE7WUFBQSw4QkFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUVyS2Q7RUZ1S2tCO0lBQ0ksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0VFckt0QjtFRnVLa0I7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLCtDQUFBO0lBQ0EsaURBQUE7RUVyS3RCO0VGc0tzQjtJQUNJLGlCQUFBO0VFcEsxQjtFRnVLMEI7SUFDSSxvQ0FBQTtFRXJLOUI7RUZ5S2tCO0lBQ0ksV0NyekJoQjtJRHN6QmdCLGtCQUFBO0VFdkt0QjtFRndLc0I7SUFDSSxvQ0FBQTtFRXRLMUI7RUZ3S3NCO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUV0SzFCO0FBQ0Y7QUYyS29CO0VBSVk7SUFDSSxtQkN4MEI1QjtFQzRwQk47RUZvTDBDO0lBRUksOEJBQUE7RUVuTDlDO0VGMEw4QztJQUNJLGNDejFCN0M7RUNpcUJMO0VGeUxrRDtJQUNJLGNDMzFCakQ7RUNvcUJMO0VGOEw4QjtJQUNJLGdCQ3IyQjVCO0lEczJCNEIsa0ZDaDBCekI7RUNvb0JUO0VGOExzQztJQUNJLDhCQUFBO0lBQ0EsZ0NBQUE7RUU1TDFDO0VGOExzQztJQUNJLGNDMzJCckM7RUMrcUJMO0VGNkwwQztJQUNJLGNBQUE7SUFDQSxvQ0FBQTtFRTNMOUM7RUY2TGtEO0lBQ0ksb0NBQUE7RUUzTHREO0VGd00wQztJQUVJLDhCQUFBO0VFdk05QztFRjhNOEM7SUFDSSxjQ3g0QjdDO0VDNHJCTDtFRjZNa0Q7SUFDSSxjQzE0QmpEO0VDK3JCTDtFRmtOOEI7SUFDSSxtQkNoNUIzQjtJRGk1QjJCLGtGQy8yQnpCO0VDK3BCVDtFRmtOc0M7SUFDSSw4QkFBQTtJQUNBLGdDQUFBO0VFaE4xQztFRmtOOEM7SUFDSSxvQ0FBQTtFRWhObEQ7RUZvTnNDO0lBQ0ksY0MvNUJyQztFQzZzQkw7RUZtTjBDO0lBQ0ksY0FBQTtJQUNBLG9DQUFBO0VFak45QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXQvYXNzZXQtZGV0YWlsL2Fzc2V0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL21peGlucy5zY3NzJztcclxuLmFpcl9fbWVudUxlZnQge1xyXG4gICAgZmxleDogMCAwIDI0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc20tbWF4LXdpZHRoKSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5NztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAmX19tb2JpbGVUb2dnbGVCdXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190b2dnbGVCdXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmaXhlZCBjb250YWluZXJcclxuICAgICZfX291dGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDAgMCAyNDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC8vIG1lbnUgY29udGFpbmVyXHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiByZW0oMjApO1xyXG4gICAgfVxyXG4gICAgJl9fYmFja2Ryb3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiA5OTY7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtLW1heC13aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgKyAmIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG1vYmlsZSB0b2dnbGUgYnV0dG9uXHJcbiAgICAmX19tb2JpbGVUb2dnbGVCdXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogcmVtKC00MCk7XHJcbiAgICAgICAgdG9wOiByZW0oMTQyKTtcclxuICAgICAgICB3aWR0aDogcmVtKDQwKTtcclxuICAgICAgICBoZWlnaHQ6IHJlbSg0MCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LTI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkICYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0b2dnbGUgYnV0dG9uXHJcbiAgICAmX190b2dnbGVCdXR0b24ge1xyXG4gICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQge1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiByZW0oMTIpO1xyXG4gICAgICAgIHJpZ2h0OiByZW0oMTApO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tc2xvdygpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbG9nb1xyXG4gICAgJl9fbG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDE1KSByZW0oMjApO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGhlaWdodDogcmVtKDY0KTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogcmVtKDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19uYW1lIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogcmVtKDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZGVzY3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyYXktNDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHJlbSg0MCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1c2VyXHJcbiAgICAmX191c2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiByZW0oMTUpIHJlbSgyMCk7XHJcbiAgICAgICAgaGVpZ2h0OiByZW0oNzIpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgJl9fYXZhdGFyIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogcmVtKDYwKTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHJlbSgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcm9sZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiByZW0oNjApO1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyYXktNjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYmFubmVyXHJcbiAgICAmX19iYW5uZXIge1xyXG4gICAgICAgIG1hcmdpbjogcmVtKDQwKSByZW0oMjApIHJlbSgyMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAkcHJpbWFyeSAwJSwgbGlnaHRlbigkcHJpbWFyeSwgMTAlKSAxMDAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDIwKTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG4gICAgLy8gbWVudSBpdGVtc1xyXG4gICAgJl9fbGlzdCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiByZW0oNDkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTIpO1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSgxNCkgcmVtKDIwKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IHJlbSgyMCk7XHJcbiAgICAgICAgICAgIHJpZ2h0OiByZW0oMjApO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0ZXh0LCAyMCUpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogcmVtKDIwKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktNjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVtKDI0KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJsYWNrLCA0JSk7XHJcbiAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fbGlzdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiByZW0oMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2xpbmsge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS01O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oNDApIHJlbSg5KSByZW0oMjApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDE1KTtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2ljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogcmVtKDI1KTtcclxuICAgIH1cclxuICAgIC8vIHRvZ2dsZWQgbWVudVxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc20tbWluLXdpZHRoKSB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAmX19vdXRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX191c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fcm9sZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmVtKDE4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmVtKDIxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVtKDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb21wYWN0IG1lbnVcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNtLW1pbi13aWR0aCkge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAmX19vdXRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fZGVzY3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX190b2dnbGVCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX191c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2F2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHJlbSgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fcm9sZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiByZW0oOSkgcmVtKDIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpnbG9iYWwoLmJhZGdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmVtKDE4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlbSg0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byByZW0oNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVuZml4ZWRcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fdW5maXhlZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19vdXRlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWVudSBzaGFkb3dcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fc2hhZG93IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG1lbnUgdGhlbWVzXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgLy8gYmx1ZSB0aGVtZVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktMSwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktMjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeSwgNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgJl9fdXNlcl9fcm9sZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ3JheSB0aGVtZVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19ncmF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGdyYXktMSwgNCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVMZWZ0X19ncmF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAmX191c2VyX19uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX191c2VyX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xvZ29fX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpdGUgdGhlbWVcclxuICAgICAgICAuYWlyX19tZW51TGVmdF9fd2hpdGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19zdWJtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51TGVmdF9fd2hpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX3JvbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbG9nb19fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZseW91dCBtZW51IHN0eWxlc1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAmX19mbHlvdXQ6bm90KC5haXJfX21lbnVMZWZ0X190b2dnbGVkKSB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWVudSBpdGVtIGhvdmVyIHN0eWxlc1xyXG4gICAgICAgICZfX2ZseW91dCxcclxuICAgICAgICAmX19jb21wYWN0LFxyXG4gICAgICAgICZfX3RvZ2dsZWQge1xyXG4gICAgICAgICAgICAvLyBkZWZhdWx0XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5haXJfX21lbnVGbHlvdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gYmxhY2tcclxuICAgICAgICAgICAgICAgICZfX2JsYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZ3JheVxyXG4gICAgICAgICAgICAgICAgJl9fZ3JheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB3aGl0ZVxyXG4gICAgICAgICAgICAgICAgJl9fd2hpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmx5b3V0IGNvbnRhaW5lclxyXG4gICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctNTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBjYWxjKC01MCUgKyAyMHB4KSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHJlbSg1NDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVtKDE4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgkZ3JheS0xLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkZ3JheS0xLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0xLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiByZW0oMTUpIHJlbSgzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0xLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5zcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmx5b3V0IHRoZW1lc1xyXG4gICAgICAgICAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc20tbWluLXdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVGbHlvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2JsYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19zdWJtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0zLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktMywgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2dyYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZW4oJGdyYXktMSwgNCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZW4oJGdyYXktMSwgNCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktMywgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0zLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMxNjE1Mzc7XHJcbiRibHVlOiAjMWI1NWUzO1xyXG4kYmx1ZS1saWdodDogIzNkNmVlNztcclxuJGdyYXktMTogI2YyZjRmODtcclxuJGdyYXktMjogI2U0ZTlmMDtcclxuJGdyYXktMzogI2RkZTJlYztcclxuJGdyYXktNDogI2MzYmVkYztcclxuJGdyYXktNTogI2FjYTZjYztcclxuJGdyYXktNjogIzc4NmZhNDtcclxuJHllbGxvdzogI2ZmMDtcclxuJG9yYW5nZTogI2YyYTY1NDtcclxuJHJlZDogI2YwMDtcclxuJHBpbms6ICNmZDM5OTU7XHJcbiRwdXJwbGU6ICM2NTJlZmY7XHJcblxyXG4kdGV4dDogJGdyYXktNjtcclxuJGJvcmRlcjogJGdyYXktMjtcclxuXHJcbi8vIEFjY2VudCBjb2xvcnNcclxuJGRlZmF1bHQ6ICRncmF5LTQ7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJHNlY29uZGFyeTogIzZhN2E4NDtcclxuJHN1Y2Nlc3M6ICM0NmJlOGE7XHJcbiRpbmZvOiAjMDg4N2M5O1xyXG4kd2FybmluZzogI2YzOTgzNDtcclxuJGRhbmdlcjogI2ZiNDM0YTtcclxuJGxpZ2h0OiAkZ3JheS0xO1xyXG4kZGFyazogJGJsYWNrO1xyXG5cclxuLy8gRm9udCBGYW1pbHlcclxuJGJhc2UtZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplXHJcbiRiYXNlLWZvbnQtc2l6ZTogMTUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTaGFkb3dzXHJcbiRzaGFkb3c6IDAgMCA0MHB4IC0xMHB4IHJnYmEoJGJsYWNrLCAwLjIpO1xyXG4kc2hhZG93LTI6IDAgNHB4IDM4cHggMCByZ2JhKCRibGFjaywgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgkYmxhY2ssIDAuMDUpO1xyXG4kc2hhZG93LTM6IDAgMCAxMDBweCAtMzBweCByZ2JhKDU3LCA1NSwgNzMsIDAuMyk7XHJcbiRzaGFkb3ctNDogMCA0cHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjAzKSwgMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4wMik7XHJcbiRzaGFkb3ctNTogMCAwIDQwcHggLTEwcHggcmdiYSgkYmxhY2ssIDAuNCk7XHJcbiRzaGFkb3ctYW50OiAwIDEwcHggMzVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4vLyBDb252ZXJ0IHZhbHVlIG9mIHJlbSgpIHNhc3MgbWl4aW4gZnVuY3Rpb25cclxuQGZ1bmN0aW9uIHJlbSgkcHgsICRiYXNlOiAkYmFzZS1mb250LXNpemUpIHtcclxuICBAcmV0dXJuICN7Zmxvb3IoKCRweC8kYmFzZSkgKiAxMDApIC8gMTAwfXJlbTsgLy8gdG8gUkVNc1xyXG4gIC8vIEByZXR1cm4gI3skcHh9cHg7IC8vIHRvIFBYJ3NcclxufVxyXG5cclxuLy8gVHJhbnNpdGlvbnNcclxuQG1peGluIHRyYW5zaXRpb24tYmcoKSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uLWNvbG9yKCkge1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tZmFzdCgpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tbWlkZGxlKCkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uLXNsb3coKSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgdXRpbHNcclxuJHh4bC1taW4td2lkdGg6IDE2MDBweDtcclxuJHh4bC1tYXgtd2lkdGg6IDE1OTlweDtcclxuJHhsLW1pbi13aWR0aDogMTIwMHB4O1xyXG4keGwtbWF4LXdpZHRoOiAxMTk5cHg7XHJcbiRtZC1taW4td2lkdGg6IDk5MnB4O1xyXG4kbWQtbWF4LXdpZHRoOiA5OTFweDtcclxuJHNtLW1pbi13aWR0aDogNzY4cHg7XHJcbiRzbS1tYXgtd2lkdGg6IDc2N3B4O1xyXG4keHMtbWluLXdpZHRoOiA1NDRweDtcclxuJHhzLW1heC13aWR0aDogNTQzcHg7XHJcbiIsIi5haXJfX21lbnVMZWZ0IHtcbiAgZmxleDogMCAwIDI0MHB4O1xuICBtYXgtd2lkdGg6IDI0MHB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFpcl9fbWVudUxlZnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjQwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjQwcHgpO1xuICB9XG59XG4uYWlyX19tZW51TGVmdF9fb3V0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAwIDAgMjQwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5haXJfX21lbnVMZWZ0X19jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zM3JlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk2O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkICsgLmFpcl9fbWVudUxlZnRfX2JhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yLjY3cmVtO1xuICB0b3A6IDkuNDZyZW07XG4gIHdpZHRoOiAyLjY2cmVtO1xuICBoZWlnaHQ6IDIuNjZyZW07XG4gIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMzhweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjA1KTtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XG4gIHRvcDogNXB4O1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdG9wOiAtNXB4O1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgdG9wOiA1cHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOHJlbTtcbiAgcmlnaHQ6IDAuNjZyZW07XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVkIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uOmhvdmVyIHNwYW4ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlIHtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiA2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YWZ0ZXIge1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzcHg7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46bGFzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTFweDtcbiAgb3BhY2l0eTogMC41O1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXJlbSAxLjMzcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgaGVpZ2h0OiA0LjI2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ28gaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDAuMzNyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbG9nb19fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyLjY2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2xvZ29fX2Rlc2NyIHtcbiAgY29sb3I6ICNjM2JlZGM7XG4gIG1hcmdpbi1sZWZ0OiAyLjY2cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uYWlyX19tZW51TGVmdF9fdXNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDEuMzNyZW07XG4gIGhlaWdodDogNC44cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX2F2YXRhciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUge1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tdG9wOiAwLjEzcmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgY29sb3I6ICM3ODZmYTQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gIG1hcmdpbjogMi42NnJlbSAxLjMzcmVtIDEuMzNyZW07XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFiNTVlMyAwJSwgIzQ4NzdlOSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxLjMzcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IGJsYWNrO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5haXJfX21lbnVMZWZ0X19saXN0IC5haXJfX21lbnVMZWZ0X19saXN0IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjI2cmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3ODZmYTQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjkzcmVtIDEuMzNyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDEuMzNyZW07XG4gIHJpZ2h0OiAxLjMzcmVtO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzRhNDM2YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5haXJfX21lbnVMZWZ0X19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjMzcmVtO1xuICByaWdodDogMS4zM3JlbTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM3ODZmYTQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICByaWdodDogMS42cmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzEwMGYyODtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjZyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjYWNhNmNjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC42cmVtIDIuNjZyZW0gMC42cmVtIDEuMzNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX2xpbms6Zm9jdXM6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fbGluazpmb2N1czphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuNjZyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSB7XG4gICAgZmxleDogMCAwIDgwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19vdXRlciB7XG4gICAgZmxleDogMCAwIDgwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19sb2dvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgICByaWdodDogMS4zM3JlbTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X191c2VyX19yb2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiAxLjRyZW07XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDEuMnJlbTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgICB3aWR0aDogMi42NnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnkge1xuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnk6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3Qge1xuICAgIGZsZXg6IDAgMCAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19vdXRlciB7XG4gICAgZmxleDogMCAwIDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbG9nbyBpbWcge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19sb2dvX19uYW1lLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbG9nb19fZGVzY3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlcl9fYXZhdGFyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2cmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjMzcmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rID4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW46Z2xvYmFsKC5iYWRnZSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIHdpZHRoOiAyLjY2cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDAuMzNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFpcl9fbWVudUxlZnRfX3VuZml4ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFpcl9fbWVudUxlZnRfX3VuZml4ZWQgLmFpcl9fbWVudUxlZnRfX291dGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uYWlyX19tZW51TGVmdF9fc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IC0zMHB4IHJnYmEoNTcsIDU1LCA3MywgMC4zKTtcbn1cblxuLmFpcl9fbWVudUxlZnRfX2JsdWUge1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2U0ZTlmMDtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxODRjY2M7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBjb2xvcjogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fZ3JheSB7XG4gIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlOWYxO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlNGU5ZjA7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U0ZTlmMCAhaW1wb3J0YW50O1xufVxuXG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhY2E2Y2M7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnksIC5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lIHtcbiAgY29sb3I6ICM3ODZmYTQ7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gIGNvbG9yOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xvZ29fX25hbWUge1xuICBjb2xvcjogIzE2MTUzNztcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2YyZjRmODtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbmsgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjJmNGY4ICFpbXBvcnRhbnQ7XG59XG5cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSwgLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X191c2VyX19uYW1lIHtcbiAgY29sb3I6ICM3ODZmYTQ7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICBjb2xvcjogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbG9nb19fbmFtZSB7XG4gIGNvbG9yOiAjMTYxNTM3O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19iYW5uZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogNTAlO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQ6bm90KC5haXJfX21lbnVMZWZ0X190b2dnbGVkKSAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUZseW91dF9fYmxhY2sgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMzAwMDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IC0xMHB4IHJnYmEoMjIsIDIxLCA1NSwgMC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgY2FsYygtNTAlICsgMjBweCksIDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saXN0IHtcbiAgICBtYXgtd2lkdGg6IDM2cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbTpudGgtY2hpbGQoM24rMSkge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0NCwgMjQ4LCAwLjEpO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluayA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWlyX19tZW51Rmx5b3V0X19ibGFjay5haXJfX21lbnVGbHlvdXQge1xuICAgIGJhY2tncm91bmQ6ICMxNjE1Mzc7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMyAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzhweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjA1KTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjRmODtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjRmODtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxNjQ0YjU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjEsIDIyNiwgMjM2LCAwLjMpO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluazpob3Zlcl9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTMgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkuYWlyX19tZW51Rmx5b3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDM4cHggMCByZ2JhKDIyLCAyMSwgNTUsIDAuMTEpLCAwIDAgMjFweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4wNSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2l0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTlmMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTlmMTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5LmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzE2NDRiNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/asset-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/asset-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: AssetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailComponent", function() { return AssetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");








var AssetDetailComponent = /** @class */ (function () {
    function AssetDetailComponent(menuService, router, activatedRoute, assetModelxService, assetAssetService, assetStatusService, assetPartIdService, assetLifeLimitService, assetConditionMonitoringService, vendorVendorService, assetDetailService) {
        this.menuService = menuService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.assetModelxService = assetModelxService;
        this.assetAssetService = assetAssetService;
        this.assetStatusService = assetStatusService;
        this.assetPartIdService = assetPartIdService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.vendorVendorService = vendorVendorService;
        this.assetDetailService = assetDetailService;
        this.menuData = [];
        this.activeSubmenu = '';
        this.activeItem = '';
        this.renderedFlyoutItems = {};
        this.flyoutTimers = {};
        this.flyoutActive = false;
        this.objectKeys = Object.keys;
        this.id_asset = '';
        this.model = {};
        this.asset = {};
        this.partId = {};
        this.status = {};
    }
    AssetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id_asset')) {
                _this.id_asset = params.get('id_asset');
                _this.assetDetailService.setIAsset(_this.id_asset);
                _this.getAsset();
            }
        });
        this.menuData = [
            {
                title: 'Dashboard',
                key: 'dashboard',
                icon: 'fe fe-bookmark',
                url: 'dashboard',
            },
            {
                title: 'Detail',
                key: 'datadiri',
                icon: 'fe fe-bookmark',
                url: 'detail',
            },
            {
                title: 'History',
                key: 'Lainnya',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'check out',
                        key: 'checkout',
                        icon: 'fe fe-bookmark',
                        url: 'checkout',
                    },
                    {
                        title: 'Complaints',
                        key: 'complaints',
                        icon: 'fe fe-bookmark',
                        url: 'complaints',
                    }
                ],
            },
            {
                category: true,
                title: 'lain lain',
            },
            {
                title: 'Spesification',
                key: 'pengaturan-absensi',
                icon: 'fe fe-bookmark',
                url: 'spesifikasi',
            },
            {
                title: 'Perbaikan',
                key: 'dipecat',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/module/dipecat',
            },
            {
                title: 'Component',
                key: 'component',
                icon: 'fe fe-bookmark',
                url: 'component',
            },
            {
                title: 'Consumable',
                key: 'consumsiable',
                icon: 'fe fe-bookmark',
                url: 'consumsiable',
            },
            {
                title: 'License',
                key: 'license',
                icon: 'fe fe-bookmark',
                url: 'license',
            }
        ];
        // this.setActiveItems(this.router.url)
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]; }))
            .subscribe(function (event) {
            // this.setActiveItems(event.url ? event.url : null)
        });
    };
    AssetDetailComponent.prototype.getAsset = function () {
        var _this = this;
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.asset = data.data;
            _this.getModel(_this.asset.id_model);
            _this.getStatus(_this.asset.id_status);
        });
    };
    AssetDetailComponent.prototype.getModel = function (id_model) {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(id_model).subscribe(function (data) {
            _this.model = data.data;
            _this.getPartId(_this.model.id_part_id);
        });
    };
    AssetDetailComponent.prototype.getPartId = function (id) {
        var _this = this;
        this.assetPartIdService.getAssetPartIdsId(id).subscribe(function (data) {
            _this.partId = data.data;
        });
    };
    AssetDetailComponent.prototype.getStatus = function (id) {
        var _this = this;
        this.assetStatusService.getAssetStatusesId(id).subscribe(function (data) {
            _this.status = data.data;
        });
    };
    AssetDetailComponent.prototype.toggleMobileMenu = function () { };
    AssetDetailComponent.prototype.toggleMenu = function () { };
    AssetDetailComponent.prototype.toggleSettings = function () { };
    AssetDetailComponent.prototype.handleSubmenuClick = function (key) {
        var currentKey = this.activeSubmenu;
        if (this.flyoutActive) {
            return;
        }
        this.activeSubmenu = currentKey === key ? '' : key;
    };
    AssetDetailComponent.prototype.setActiveItems = function (pathname) {
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
    AssetDetailComponent.prototype.handleFlyoutOver = function (event, key, items) {
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
    AssetDetailComponent.prototype.handleFlyoutOut = function (key) {
        var _this = this;
        if (this.flyoutActive) {
            this.flyoutTimers[key] = setTimeout(function () {
                var updatedFlyoutItems = Object.assign({}, _this.renderedFlyoutItems);
                delete updatedFlyoutItems[key];
                _this.renderedFlyoutItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFlyoutItems);
            }, 100);
        }
    };
    AssetDetailComponent.prototype.handleFlyoutContainerOver = function (key) {
        clearInterval(this.flyoutTimers[key]);
    };
    AssetDetailComponent.ctorParameters = function () { return [
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetConditionMonitoringService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorVendorService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__["AssetDetailService"] }
    ]; };
    AssetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-detail',
            template: __webpack_require__(/*! raw-loader!./asset-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/asset-detail.component.html"),
            styles: [__webpack_require__(/*! ./asset-detail.component.scss */ "./src/app/pages/asset/asset-detail/asset-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetConditionMonitoringService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["VendorVendorService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__["AssetDetailService"]])
    ], AssetDetailComponent);
    return AssetDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/asset-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/asset-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: AssetDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailModule", function() { return AssetDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-detail-routing.module */ "./src/app/pages/asset/asset-detail/asset-detail-routing.module.ts");
/* harmony import */ var _asset_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-detail.component */ "./src/app/pages/asset/asset-detail/asset-detail.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/asset-detail/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _spesifikasi_spesifikasi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spesifikasi/spesifikasi.component */ "./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.ts");
/* harmony import */ var _component_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/component.component */ "./src/app/pages/asset/asset-detail/component/component.component.ts");
/* harmony import */ var _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consumsiable/consumsiable.component */ "./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./license/license.component */ "./src/app/pages/asset/asset-detail/license/license.component.ts");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-item/search-item.component */ "./src/app/pages/asset/asset-detail/search-item/search-item.component.ts");
/* harmony import */ var _riwayat_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./riwayat/check-out/check-out.component */ "./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.ts");
/* harmony import */ var _riwayat_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./riwayat/complaints/complaints.component */ "./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");


















var AssetDetailModule = /** @class */ (function () {
    function AssetDetailModule() {
    }
    AssetDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_asset_detail_component__WEBPACK_IMPORTED_MODULE_4__["AssetDetailComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _spesifikasi_spesifikasi_component__WEBPACK_IMPORTED_MODULE_10__["SpesifikasiComponent"], _component_component_component__WEBPACK_IMPORTED_MODULE_11__["ComponentComponent"], _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_12__["ConsumsiableComponent"], _license_license_component__WEBPACK_IMPORTED_MODULE_13__["LicenseComponent"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_14__["SearchItemComponent"], _riwayat_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_15__["CheckOutComponent"], _riwayat_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_16__["ComplaintsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetDetailRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_17__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
            entryComponents: [_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_14__["SearchItemComponent"]]
        })
    ], AssetDetailModule);
    return AssetDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/asset-detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/asset-detail.service.ts ***!
  \******************************************************************/
/*! exports provided: AssetDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailService", function() { return AssetDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AssetDetailService = /** @class */ (function () {
    function AssetDetailService() {
        this.idAsset = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    AssetDetailService.prototype.getIdAsset = function () {
        return this.idAsset.asObservable();
    };
    AssetDetailService.prototype.setIAsset = function (id_model) {
        this.idAsset.next(id_model);
    };
    AssetDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetDetailService);
    return AssetDetailService;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/component/component.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/component/component.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9jb21wb25lbnQvY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/component/component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/component/component.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentComponent", function() { return ComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");










var ComponentComponent = /** @class */ (function () {
    function ComponentComponent(assetAssetTemplateChildService, assetDetailService, assetAssetService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetAssetTemplateChildService = assetAssetTemplateChildService;
        this.assetDetailService = assetDetailService;
        this.assetAssetService = assetAssetService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listAssetChild = [];
        this.id_asset = '';
        this.id_parent = null;
        this.id_part_id = 'componen';
        this.dataItem = {};
    }
    ComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            if (data) {
                _this.id_asset = data;
                _this.getlistChild();
            }
        });
    };
    ComponentComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__["SearchAssetComponent"],
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
                _this.id_parent = data;
                _this.beforeModel();
            }
        });
    };
    ComponentComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_part_id: this.id_part_id
        };
        this.assetAssetTemplateChildService.getAssetAssetTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listAssetChild = data.data;
        });
    };
    ComponentComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetAssetTemplateChildService.deleteAssetAssetTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    ComponentComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetAssetService.getAssetAssetsId(this.id_parent).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.qty = data.data.qty;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    ComponentComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_asset: this.id_parent,
            qty_asset: this.qty_asset
        };
        this.spinner.show();
        //simpan ka server
        this.assetAssetTemplateChildService.postAssetAssetTemplateChildren(param).subscribe(function (data) {
            _this.id_parent = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    ComponentComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetTemplateChildService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_1__["AssetDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    ComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-component',
            template: __webpack_require__(/*! raw-loader!./component.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/component/component.component.html"),
            styles: [__webpack_require__(/*! ./component.component.scss */ "./src/app/pages/asset/asset-detail/component/component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetTemplateChildService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_1__["AssetDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], ComponentComponent);
    return ComponentComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9jb25zdW1zaWFibGUvY29uc3Vtc2lhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsumsiableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumsiableComponent", function() { return ConsumsiableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");










var ConsumsiableComponent = /** @class */ (function () {
    function ConsumsiableComponent(assetAssetTemplateChildService, assetDetailService, assetAssetService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetAssetTemplateChildService = assetAssetTemplateChildService;
        this.assetDetailService = assetDetailService;
        this.assetAssetService = assetAssetService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listAssetChild = [];
        this.id_asset = '';
        this.id_parent = null;
        this.id_part_id = 'cosumable';
        this.dataItem = {};
    }
    ConsumsiableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            if (data) {
                _this.id_asset = data;
                _this.getlistChild();
            }
        });
    };
    ConsumsiableComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__["SearchAssetComponent"],
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
                _this.id_parent = data;
                _this.beforeModel();
            }
        });
    };
    ConsumsiableComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_part_id: this.id_part_id
        };
        this.assetAssetTemplateChildService.getAssetAssetTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listAssetChild = data.data;
        });
    };
    ConsumsiableComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetAssetTemplateChildService.deleteAssetAssetTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    ConsumsiableComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetAssetService.getAssetAssetsId(this.id_parent).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.qty = data.data.qty;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    ConsumsiableComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_asset: this.id_parent,
            qty_asset: this.qty_asset
        };
        this.spinner.show();
        //simpan ka server
        this.assetAssetTemplateChildService.postAssetAssetTemplateChildren(param).subscribe(function (data) {
            _this.id_parent = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    ConsumsiableComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetTemplateChildService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__["AssetDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    ConsumsiableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consumsiable',
            template: __webpack_require__(/*! raw-loader!./consumsiable.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.html"),
            styles: [__webpack_require__(/*! ./consumsiable.component.scss */ "./src/app/pages/asset/asset-detail/consumsiable/consumsiable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetTemplateChildService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__["AssetDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], ConsumsiableComponent);
    return ConsumsiableComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/detail/detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/detail/detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/detail/detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/detail/detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(assetPartIdService, assetAssetService, assetLifeLimitService, vendorVendorService, assetModelxService, assetBinLocationService, assetStatusService, vendorManufactureService, assetConditionMonitoringService, assetDetailService, router, activatedRoute) {
        this.assetPartIdService = assetPartIdService;
        this.assetAssetService = assetAssetService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.vendorVendorService = vendorVendorService;
        this.assetModelxService = assetModelxService;
        this.assetBinLocationService = assetBinLocationService;
        this.assetStatusService = assetStatusService;
        this.vendorManufactureService = vendorManufactureService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.assetDetailService = assetDetailService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_asset = '';
        this.dataModel = {};
        this.dataStatus = {};
        this.dataAsset = {};
        this.dataType = {};
        this.dataVendor = {};
        this.dataManufacture = {};
        this.dataBin = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_asset = this.activatedRoute.snapshot.paramMap.get('id_asset');
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            if (data) {
                _this.id_asset = data;
                _this.getAsset();
            }
        });
    };
    DetailComponent.prototype.getAsset = function () {
        var _this = this;
        this.assetAssetService.getAssetAssetsId(this.id_asset).subscribe(function (data) {
            _this.dataAsset = data.data;
            _this.getBin(_this.dataAsset.id_bin_location);
            _this.getStatus(_this.dataAsset.id_status);
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
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetBinLocationService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetStatusService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["VendorManufactureService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetConditionMonitoringService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__["AssetDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/asset/asset-detail/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetBinLocationService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetStatusService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["VendorManufactureService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetConditionMonitoringService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_2__["AssetDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/license/license.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/license/license.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9saWNlbnNlL2xpY2Vuc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/license/license.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/license/license.component.ts ***!
  \***********************************************************************/
/*! exports provided: LicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseComponent", function() { return LicenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-asset/search-asset.component */ "./src/app/components/search-item/search-asset/search-asset.component.ts");










var LicenseComponent = /** @class */ (function () {
    function LicenseComponent(assetAssetTemplateChildService, assetDetailService, assetAssetService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetAssetTemplateChildService = assetAssetTemplateChildService;
        this.assetDetailService = assetDetailService;
        this.assetAssetService = assetAssetService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listAssetChild = [];
        this.id_asset = '';
        this.id_parent = null;
        this.id_part_id = 'license';
        this.dataItem = {};
    }
    LicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            if (data) {
                _this.id_asset = data;
                _this.getlistChild();
            }
        });
    };
    LicenseComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Asset',
            nzContent: src_app_components_search_item_search_asset_search_asset_component__WEBPACK_IMPORTED_MODULE_9__["SearchAssetComponent"],
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
                _this.id_parent = data;
                _this.beforeModel();
            }
        });
    };
    LicenseComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_part_id: this.id_part_id
        };
        this.assetAssetTemplateChildService.getAssetAssetTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listAssetChild = data.data;
        });
    };
    LicenseComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetAssetTemplateChildService.deleteAssetAssetTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    LicenseComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetAssetService.getAssetAssetsId(this.id_parent).subscribe(function (data) {
            _this.dataItem.sn = data.data.sn;
            _this.dataItem.qty = data.data.qty;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    LicenseComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_parent: this.id_asset,
            id_asset: this.id_parent,
            qty_asset: this.qty_asset
        };
        this.spinner.show();
        //simpan ka server
        this.assetAssetTemplateChildService.postAssetAssetTemplateChildren(param).subscribe(function (data) {
            _this.id_parent = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    LicenseComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetTemplateChildService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_3__["AssetDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    LicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-license',
            template: __webpack_require__(/*! raw-loader!./license.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/license/license.component.html"),
            styles: [__webpack_require__(/*! ./license.component.scss */ "./src/app/pages/asset/asset-detail/license/license.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetTemplateChildService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_3__["AssetDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetAssetService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], LicenseComponent);
    return LicenseComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9yaXdheWF0L2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");






var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(assetCheckoutService, assetDetailService, nzMessageService, spinner) {
        this.assetCheckoutService = assetCheckoutService;
        this.assetDetailService = assetDetailService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.id_asset = '';
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
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            _this.id_asset = data;
        });
        this.searchData();
    };
    CheckOutComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    CheckOutComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetCheckoutService
            .getAssetCheckouts(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search, id_asset: this.id_asset
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
        });
    };
    CheckOutComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    CheckOutComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetCheckoutService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__["AssetDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.scss */ "./src/app/pages/asset/asset-detail/riwayat/check-out/check-out.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetCheckoutService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__["AssetDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9yaXdheWF0L2NvbXBsYWludHMvY29tcGxhaW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsComponent", function() { return ComplaintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");






var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent(gaTicketingService, spinner, nzMessageService, assetDetailService) {
        this.gaTicketingService = gaTicketingService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.assetDetailService = assetDetailService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
        this.status = 'all';
        this.jenis = 'all';
        this.type_request = 'Asset';
        this.id_asset = '';
    }
    ComplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            _this.id_asset = data;
        });
        this.searchData();
    };
    ComplaintsComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ComplaintsComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.gaTicketingService
            .getGaTicketings(JSON.stringify({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search,
            status: this.status,
            jenis: this.jenis,
            type_request: this.type_request,
            id_asset: this.id_asset,
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data);
        });
    };
    ComplaintsComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ComplaintsComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.gaTicketingService.deleteGaTicketingsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ComplaintsComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ComplaintsComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__["AssetDetailService"] }
    ]; };
    ComplaintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaints',
            template: __webpack_require__(/*! raw-loader!./complaints.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.html"),
            styles: [__webpack_require__(/*! ./complaints.component.scss */ "./src/app/pages/asset/asset-detail/riwayat/complaints/complaints.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaTicketingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_5__["AssetDetailService"]])
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/search-item/search-item.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/search-item/search-item.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9zZWFyY2gtaXRlbS9zZWFyY2gtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/search-item/search-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/search-item/search-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_asset_services_asset_assetlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-assetlist.service */ "./src/app/sdk/asset/services/asset-assetlist.service.ts");




var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent(drawerRef, assetAssetlistService) {
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
    SearchItemComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearchItemComponent.prototype.selectAsset = function (id_asset) {
        this.value = id_asset;
        this.close();
    };
    SearchItemComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services_asset_assetlist_service__WEBPACK_IMPORTED_MODULE_3__["AssetAssetlistService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchItemComponent.prototype, "value", void 0);
    SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-item',
            template: __webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/search-item/search-item.component.html"),
            styles: [__webpack_require__(/*! ./search-item.component.scss */ "./src/app/pages/asset/asset-detail/search-item/search-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_asset_services_asset_assetlist_service__WEBPACK_IMPORTED_MODULE_3__["AssetAssetlistService"]])
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L2Fzc2V0LWRldGFpbC9zcGVzaWZpa2FzaS9zcGVzaWZpa2FzaS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SpesifikasiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpesifikasiComponent", function() { return SpesifikasiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _model_detail_model_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model-detail/model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asset-detail.service */ "./src/app/pages/asset/asset-detail/asset-detail.service.ts");








var SpesifikasiComponent = /** @class */ (function () {
    function SpesifikasiComponent(assetAssetService, assetAssetSpecificationService, modelDetailService, router, activatedRoute, spinner, pesan, assetDetailService) {
        this.assetAssetService = assetAssetService;
        this.assetAssetSpecificationService = assetAssetSpecificationService;
        this.modelDetailService = modelDetailService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.pesan = pesan;
        this.assetDetailService = assetDetailService;
        this.id_model = '';
        this.id_asset = '';
        this.listSpesifikasi = [];
    }
    SpesifikasiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetDetailService.getIdAsset().subscribe(function (data) {
            if (data) {
                _this.id_asset = data;
                _this.getAsset();
            }
        });
    };
    SpesifikasiComponent.prototype.getAsset = function () {
        var _this = this;
        this.assetAssetSpecificationService.getAssetAssetSpecifications(JSON.stringify({ id_asset: this.id_asset })).subscribe(function (data) {
            _this.listSpesifikasi = data.data;
            data.data.forEach(function (item, index) {
                if ('select' == item['field_type']) {
                    _this.listSpesifikasi[index]['option_value'] = JSON.parse(item['option_value']);
                    console.log(_this.listSpesifikasi[index]['option_value']);
                }
            });
        });
    };
    SpesifikasiComponent.prototype.edit = function (id_model_specification, id_asset_specification) {
        var _this = this;
        this.listSpesifikasi.forEach(function (item, index) {
            _this.listSpesifikasi[index]['edit'] = false;
            if (id_model_specification == item.id_model_specification) {
                _this.listSpesifikasi[index]['edit'] = true;
            }
        });
    };
    SpesifikasiComponent.prototype.SimpanUpdate = function (id_model_specification, id_asset_specification, value_spesification) {
        var _this = this;
        this.spinner.show();
        var params = {
            id_asset_specification: id_asset_specification,
            id_model_specification: id_model_specification,
            id_asset: this.id_asset,
            value_spesification: value_spesification
        };
        this.assetAssetSpecificationService.putAssetAssetSpecificationsId({ id: '1', body: params }).subscribe(function (data) {
            _this.spinner.hide();
            _this.listSpesifikasi.forEach(function (item, index) {
                if (id_model_specification == item.id_model_specification) {
                    _this.listSpesifikasi[index]['edit'] = false;
                }
            });
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Data tidak valid');
        });
    };
    SpesifikasiComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_6__["AssetAssetService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_6__["AssetAssetSpecificationService"] },
        { type: _model_detail_model_detail_service__WEBPACK_IMPORTED_MODULE_5__["ModelDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__["AssetDetailService"] }
    ]; };
    SpesifikasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spesifikasi',
            template: __webpack_require__(/*! raw-loader!./spesifikasi.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.html"),
            styles: [__webpack_require__(/*! ./spesifikasi.component.scss */ "./src/app/pages/asset/asset-detail/spesifikasi/spesifikasi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_6__["AssetAssetService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_6__["AssetAssetSpecificationService"],
            _model_detail_model_detail_service__WEBPACK_IMPORTED_MODULE_5__["ModelDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _asset_detail_service__WEBPACK_IMPORTED_MODULE_7__["AssetDetailService"]])
    ], SpesifikasiComponent);
    return SpesifikasiComponent;
}());



/***/ })

}]);
//# sourceMappingURL=asset-detail-asset-detail-module.js.map