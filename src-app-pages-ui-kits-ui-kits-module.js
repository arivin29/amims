(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-ui-kits-ui-kits-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ui-kits/antd/antd.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ui-kits/antd/antd.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"air__utils__heading\">\r\n    <h5>\r\n      <span class=\"mr-3\">Ant Design Components</span>\r\n      <a\r\n        href=\"https://ng.ant.design/docs/introduce/en\"\r\n        rel=\"noopener noreferrer\"\r\n        target=\"_blank\"\r\n        class=\"btn btn-sm btn-light\"\r\n      >\r\n        Official Documentation\r\n        <i class=\"fe fe-corner-right-up\"></i>\r\n      </a>\r\n    </h5>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\" *ngFor=\"let category of kit\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"mb-3\">\r\n            <strong>{{category.name}}</strong>\r\n          </h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\" *ngFor=\"let item of category.items\">\r\n              <div class=\"mb-3\">\r\n                <h5 class=\"text-black mb-2\">\r\n                  <strong>{{item.name}}</strong>\r\n                </h5>\r\n                <div>\r\n                  <p class=\"mb-2\">\r\n                    {{item.description}}\r\n                  </p>\r\n                  <a\r\n                    [href]=\"item.link\"\r\n                    target=\"_blank\"\r\n                    class=\"air__utils__link air__utils__link__underlined\"\r\n                  >\r\n                    Examples\r\n                    <small>\r\n                      <i class=\"icmn-link ml-1\"></i>\r\n                    </small>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ui-kits/bootstrap/bootstrap.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ui-kits/bootstrap/bootstrap.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"air__utils__heading\">\r\n    <h5>\r\n      <span class=\"mr-3\">Bootstrap Components</span>\r\n      <a\r\n        href=\"https://ng-bootstrap.github.io/#/getting-started\"\r\n        rel=\"noopener noreferrer\"\r\n        target=\"_blank\"\r\n        class=\"btn btn-sm btn-light\"\r\n      >\r\n        Official Documentation\r\n        <i class=\"fe fe-corner-right-up\"></i>\r\n      </a>\r\n    </h5>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let item of kit\">\r\n          <div class=\"mb-3\">\r\n            <h5 class=\"text-black mb-2\">\r\n              <strong>{{item.name}}</strong>\r\n            </h5>\r\n            <div>\r\n              <p class=\"mb-2\">\r\n                {{item.description}}\r\n              </p>\r\n              <a\r\n                [href]=\"item.link\"\r\n                target=\"_blank\"\r\n                class=\"air__utils__link air__utils__link__underlined\"\r\n              >\r\n                Examples\r\n                <small>\r\n                  <i class=\"icmn-link ml-1\"></i>\r\n                </small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-kits/antd/antd.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/ui-kits/antd/antd.component.ts ***!
  \******************************************************/
/*! exports provided: UiKitAntdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitAntdComponent", function() { return UiKitAntdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ./data.json */ "./src/app/pages/ui-kits/antd/data.json");
var UiKitAntdComponent = /** @class */ (function () {
    function UiKitAntdComponent() {
        this.kit = data;
    }
    UiKitAntdComponent.prototype.ngOnInit = function () { };
    UiKitAntdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'air-ui-kit-antd',
            template: __webpack_require__(/*! raw-loader!./antd.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ui-kits/antd/antd.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiKitAntdComponent);
    return UiKitAntdComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-kits/antd/data.json":
/*!**********************************************!*\
  !*** ./src/app/pages/ui-kits/antd/data.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = [{"name":"General","items":[{"name":"Button","description":"To trigger an operation.","link":"https://ng.ant.design/components/button/en"},{"name":"Icon","description":"Semantic vector graphics.","link":"https://ng.ant.design/components/icon/en"},{"name":"Typography","description":"Basic text writing, including headings, body text, lists, and more.","link":"https://ng.ant.design/components/typography/en"}]},{"name":"Layout","items":[{"name":"Grid","description":"24 Grids System.","link":"https://ng.ant.design/components/grid/en"},{"name":"Layout","description":"Handling the overall layout of a page.","link":"https://ng.ant.design/components/layout/en"}]},{"name":"Data Display","items":[{"name":"Avatar","description":"Avatars can be used to represent people or objects. It supports images, Icons, or letters.","link":"https://ng.ant.design/components/avatar/en"},{"name":"Badge","description":"Small numerical value or status descriptor for UI elements.","link":"https://ng.ant.design/components/badge/en"},{"name":"Comment","description":"A comment displays user feedback and discussion to website content.","link":"https://ng.ant.design/components/comment/en"},{"name":"Collapse","description":"A content area which can be collapsed and expanded.","link":"https://ng.ant.design/components/collapse/en"},{"name":"Carousel","description":"A carousel component. Scales with its container.","link":"https://ng.ant.design/components/carousel/en"},{"name":"Card","description":"Simple rectangular container.","link":"https://ng.ant.design/components/card/en"},{"name":"Calendar","description":"Container for displaying data in calendar form.","link":"https://ng.ant.design/components/calendar/en"},{"name":"List","description":"Simple List.","link":"https://ng.ant.design/components/list/en"},{"name":"Popover","description":"The floating card popped by clicking or hovering.","link":"https://ng.ant.design/components/popover/en"},{"name":"Tree","description":"Tree structure","link":"https://ng.ant.design/components/tree/en"},{"name":"Tooltip","description":"A simple text popup tip.","link":"https://ng.ant.design/components/tooltip/en"},{"name":"Timeline","description":"Vertical display timeline.","link":"https://ng.ant.design/components/timeline/en"},{"name":"Tag","description":"Tag for categorizing or markup.","link":"https://ng.ant.design/components/tag/en"},{"name":"Tabs","description":"Tabs make it easy to switch between different views.","link":"https://ng.ant.design/components/tabs/en"},{"name":"Table","description":"A table displays rows of data.","link":"https://ng.ant.design/components/table/en"}]},{"name":"Data Entry","items":[{"name":"AutoComplete","description":"Autocomplete function of input field.","link":"https://ng.ant.design/components/auto-complete/en"},{"name":"Checkbox","description":"Checkbox component.","link":"https://ng.ant.design/components/checkbox/en"},{"name":"Cascader","description":"Cascade selection box.","link":"https://ng.ant.design/components/cascader/en"},{"name":"DatePicker","description":"To select or input a date.","link":"https://ng.ant.design/components/date-picker/en"},{"name":"Form","description":"Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.","link":"https://ng.ant.design/components/form/en"},{"name":"InputNumber","description":"Enter a number within certain range with the mouse or keyboard.","link":"https://ng.ant.design/components/input-number/en"},{"name":"Input","description":"A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.","link":"https://ng.ant.design/components/input/en"},{"name":"Mention","description":"Mention component.","link":"https://ng.ant.design/components/mention/en"},{"name":"Rate","description":"Rate component.","link":"https://ng.ant.design/components/rate/en"},{"name":"Radio","description":"Radio.","link":"https://ng.ant.design/components/radio/en"},{"name":"Switch","description":"Switching Selector.","link":"https://ng.ant.design/components/switch/en"},{"name":"Slider","description":"A Slider component for displaying current value and intervals in range.","link":"https://ng.ant.design/components/slider/en"},{"name":"Select","description":"Select component to select value from options.","link":"https://ng.ant.design/components/select/en"},{"name":"TreeSelect","description":"Tree selection control.","link":"https://ng.ant.design/components/tree-select/en"},{"name":"Transfer","description":"Double column transfer choice box.","link":"https://ng.ant.design/components/transfer/en"},{"name":"TimePicker","description":"By clicking the input box, you can select a time from a popup panel.","link":"https://ng.ant.design/components/time-picker/en"},{"name":"Upload","description":"Upload file by selecting or dragging.","link":"https://ng.ant.design/components/upload/en"}]},{"name":"Feedback","items":[{"name":"Alert","description":"Alert component for feedback.","link":"https://ng.ant.design/components/alert/en"},{"name":"Drawer","description":"Panel slides from screen edge.","link":"https://ng.ant.design/components/drawer/en"},{"name":"Modal","description":"Modal dialogs.","link":"https://ng.ant.design/components/modal/en"},{"name":"Message","description":"Display global messages as feedback in response to user operations.","link":"https://ng.ant.design/components/message/en"},{"name":"Notification","description":"Display a notification message globally.","link":"https://ng.ant.design/components/notification/en"},{"name":"Progress","description":"Display the current progress of an operation flow.","link":"https://ng.ant.design/components/progress/en"},{"name":"Popconfirm","description":"A simple and compact confirmation dialog of an action.","link":"https://ng.ant.design/components/popconfirm/en"},{"name":"Spin","description":"A spinner for displaying loading state of a page or a section.","link":"https://ng.ant.design/components/spin/en"},{"name":"Skeleton","description":"Provide a placeholder at the place which need waiting for loading.","link":"https://ng.ant.design/components/skeleton/en"}]},{"name":"Navigation","items":[{"name":"Affix","description":"Make an element stick to viewport.","link":"https://ng.ant.design/components/affix/en"},{"name":"Breadcrumb","description":"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.","link":"https://ng.ant.design/components/breadcrumb/en"},{"name":"Dropdown","description":"A dropdown list.","link":"https://ng.ant.design/components/dropdown/en"},{"name":"Menu","description":"Menu list of Navigation.","link":"https://ng.ant.design/components/menu/en"},{"name":"Pagination","description":"A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.","link":"https://ng.ant.design/components/pagination/en"},{"name":"Steps","description":"Steps is a navigation bar that guides users through the steps of a task.","link":"https://ng.ant.design/components/steps/en"}]},{"name":"Other","items":[{"name":"Anchor","description":"Hyperlinks to scroll on one page.","link":"https://ng.ant.design/components/anchor/en"},{"name":"BackTop","description":"BackTop makes it easy to go back to the top of the page.","link":"https://ng.ant.design/components/back-top/en"},{"name":"Divider","description":"A divider line separates different content.","link":"https://ng.ant.design/components/divider/en"}]}];

/***/ }),

/***/ "./src/app/pages/ui-kits/bootstrap/bootstrap.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui-kits/bootstrap/bootstrap.component.ts ***!
  \****************************************************************/
/*! exports provided: UiKitBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitBootstrapComponent", function() { return UiKitBootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ./data.json */ "./src/app/pages/ui-kits/bootstrap/data.json");
var UiKitBootstrapComponent = /** @class */ (function () {
    function UiKitBootstrapComponent() {
        this.kit = data;
    }
    UiKitBootstrapComponent.prototype.ngOnInit = function () { };
    UiKitBootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'air-ui-kit-bootstrap',
            template: __webpack_require__(/*! raw-loader!./bootstrap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ui-kits/bootstrap/bootstrap.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiKitBootstrapComponent);
    return UiKitBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-kits/bootstrap/data.json":
/*!***************************************************!*\
  !*** ./src/app/pages/ui-kits/bootstrap/data.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = [{"name":"Alerts","description":"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.","link":"https://ng-bootstrap.github.io/#/components/alert/examples"},{"name":"Buttons","description":"Use Bootstrap's custom button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.","link":"https://ng-bootstrap.github.io/#/components/buttons/examples"},{"name":"Carousel","description":"The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.","link":"https://ng-bootstrap.github.io/#/components/carousel/examples"},{"name":"Collapse","description":"Easily toggle visibility of almost any content on your pages. Includes support for making accordions.","link":"https://ng-bootstrap.github.io/#/components/collapse/examples"},{"name":"Datepicker","description":"Datepicker will help you with date selection.","link":"https://ng-bootstrap.github.io/#/components/datepicker/overview"},{"name":"Dropdowns","description":"Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.","link":"https://ng-bootstrap.github.io/#/components/dropdown/examples"},{"name":"Modals","description":"Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more.","link":"https://ng-bootstrap.github.io/#/components/modal/examples"},{"name":"Pagination","description":"Quick first, previous, next, last, and page buttons for pagination control of another component.","link":"https://ng-bootstrap.github.io/#/components/pagination/overview"},{"name":"Popover","description":"The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive element.","link":"https://ng-bootstrap.github.io/#/components/popover/examples"},{"name":"Progress","description":"Use our custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.","link":"https://ng-bootstrap.github.io/#/components/progressbar/examples"},{"name":"Rating","description":"Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.","link":"https://ng-bootstrap.github.io/#/components/rating/examples"},{"name":"Tables","description":"For displaying tabular data, supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data.","link":"https://ng-bootstrap.github.io/#/components/table/overview"},{"name":"Tabs","description":"Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards internally, and provides full keyboard navigation control of the tabs.","link":"https://ng-bootstrap.github.io/#/components/tabset/examples"},{"name":"Timepicker","description":"Timepicker will help you with time selection.","link":"https://ng-bootstrap.github.io/#/components/timepicker/examples"},{"name":"Toasts","description":"Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.","link":"https://ng-bootstrap.github.io/#/components/toast/overview"},{"name":"Tooltips","description":"Easily add tooltips to elements or components.","link":"https://ng-bootstrap.github.io/#/components/tooltip/examples"},{"name":"Typeahead","description":"Fully-featured autocomplete","link":"https://ng-bootstrap.github.io/#/components/typeahead/examples"}];

/***/ }),

/***/ "./src/app/pages/ui-kits/ui-kits-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui-kits/ui-kits-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UIKitsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKitsRouterModule", function() { return UIKitsRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_components_layout_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/layout/Guard/auth.guard */ "./src/app/components/layout/Guard/auth.guard.ts");
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var src_app_pages_ui_kits_antd_antd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/ui-kits/antd/antd.component */ "./src/app/pages/ui-kits/antd/antd.component.ts");
/* harmony import */ var src_app_pages_ui_kits_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/ui-kits/bootstrap/bootstrap.component */ "./src/app/pages/ui-kits/bootstrap/bootstrap.component.ts");






// UI Kits


var routes = [
    {
        path: 'antd',
        component: src_app_pages_ui_kits_antd_antd_component__WEBPACK_IMPORTED_MODULE_6__["UiKitAntdComponent"],
        data: { title: 'Antd UI Kit' },
        canActivate: [src_app_components_layout_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'bootstrap',
        component: src_app_pages_ui_kits_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["UiKitBootstrapComponent"],
        data: { title: 'Bootstrap UI Kit' },
        canActivate: [src_app_components_layout_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
];
var UIKitsRouterModule = /** @class */ (function () {
    function UIKitsRouterModule() {
    }
    UIKitsRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UIKitsRouterModule);
    return UIKitsRouterModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-kits/ui-kits.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ui-kits/ui-kits.module.ts ***!
  \*************************************************/
/*! exports provided: UIKitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKitsModule", function() { return UIKitsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kits-routing.module */ "./src/app/pages/ui-kits/ui-kits-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_pages_ui_kits_antd_antd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/ui-kits/antd/antd.component */ "./src/app/pages/ui-kits/antd/antd.component.ts");
/* harmony import */ var src_app_pages_ui_kits_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/ui-kits/bootstrap/bootstrap.component */ "./src/app/pages/ui-kits/bootstrap/bootstrap.component.ts");





// UI Kits


var COMPONENTS = [src_app_pages_ui_kits_antd_antd_component__WEBPACK_IMPORTED_MODULE_5__["UiKitAntdComponent"], src_app_pages_ui_kits_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["UiKitBootstrapComponent"]];
var UIKitsModule = /** @class */ (function () {
    function UIKitsModule() {
    }
    UIKitsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UIKitsRouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            declarations: COMPONENTS.slice(),
        })
    ], UIKitsModule);
    return UIKitsModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-pages-ui-kits-ui-kits-module.js.map