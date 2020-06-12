function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/
    "./$$_lazy_route_resource lazy recursive":
      /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

      /*! no static exports found */

      /***/
      function $$_lazy_route_resourceLazyRecursive(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }

        webpackEmptyAsyncContext.keys = function () {
          return [];
        };

        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
        /***/
      },

    /***/
    "./src/app/about/about.component.ts":
      /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

      /*! exports provided: AboutComponent */

      /***/
      function srcAppAboutAboutComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AboutComponent",
          function () {
            return AboutComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var AboutComponent = /*#__PURE__*/ (function () {
          function AboutComponent() {
            _classCallCheck(this, AboutComponent);
          }

          _createClass(AboutComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return AboutComponent;
        })();

        AboutComponent.ɵfac = function AboutComponent_Factory(t) {
          return new (t || AboutComponent)();
        };

        AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AboutComponent,
          selectors: [["app-about"]],
          decls: 3,
          vars: 0,
          consts: [[1, "container"]],
          template: function AboutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h1"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "About works"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            ".container[_ngcontent-%COMP%]{\r\n  background-color: lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AboutComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-about",
                    templateUrl: "./about.component.html",
                    styleUrls: ["./about.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/app-routing.module.ts":
      /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

      /*! exports provided: AppRoutingModule */

      /***/
      function srcAppAppRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./contacts/contacts.component */
          "./src/app/contacts/contacts.component.ts"
        );
        /* harmony import */

        var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./about/about.component */
          "./src/app/about/about.component.ts"
        );
        /* harmony import */

        var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./home/home.component */
          "./src/app/home/home.component.ts"
        );
        /* harmony import */

        var _new_tool_new_tool_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./new-tool/new-tool.component */
          "./src/app/new-tool/new-tool.component.ts"
        );

        var routes = [
          {
            path: "contacts",
            component:
              _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__[
                "ContactsComponent"
              ],
          },
          {
            path: "about",
            component:
              _about_about_component__WEBPACK_IMPORTED_MODULE_3__[
                "AboutComponent"
              ],
          },
          {
            path: "home",
            component:
              _home_home_component__WEBPACK_IMPORTED_MODULE_4__[
                "HomeComponent"
              ],
          },
          {
            path: "admin/newTool",
            component:
              _new_tool_new_tool_component__WEBPACK_IMPORTED_MODULE_5__[
                "NewToolComponent"
              ],
          },
          {
            path: "",
            redirectTo: "/home",
            pathMatch: "full",
          },
        ];

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: AppRoutingModule,
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forRoot(routes),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forRoot(routes),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/app.component.ts":
      /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
          return AppComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./categories/categories.component */
          "./src/app/categories/categories.component.ts"
        );
        /* harmony import */

        var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./footer/footer.component */
          "./src/app/footer/footer.component.ts"
        );

        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = "GTA Tools";
        };

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 28,
          vars: 0,
          consts: [
            [1, "nav-container"],
            [1, "logo-container"],
            ["routerLink", "/home"],
            ["routerLink", "/contacts"],
            ["routerLink", "/about"],
            ["routerLink", "/admin/newTool"],
            [1, "search-container"],
            ["type", "text", "placeholder", "Search", 1, "search-input"],
            [1, "btn-search"],
            [1, "main-container"],
            [1, "footer"],
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h3"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "GTA Tools"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "a",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "Contacts"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "a",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "div",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                18,
                "input",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "button",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "Search"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "div",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                23,
                "app-categories"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "router-outlet"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "div",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                27,
                "app-footer"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__[
              "CategoriesComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__[
              "FooterComponent"
            ],
          ],
          styles: [
            "*[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-columns: 20% 1fr;\r\n  max-width: 1300px;\r\n}\r\n\r\n.nav-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 20px auto;\r\n  width: 90%;\r\n  max-width: 1300px;\r\n\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 14px 20px;\r\n  display: block;\r\n  text-decoration: none;\r\n  text-align: center;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #2b2b2b;\r\n  transition: 0.3s;\r\n  color: red;\r\n  border-bottom: 1px solid red;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: right;\r\n  align-content: center;\r\n  align-items: center;\r\n  float: right;\r\n  margin-left: auto;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n  border: none;\r\n  padding-left: 10px;\r\n  margin: auto 0;\r\n  color: black;\r\n  height: 30px;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  height: 33px;\r\n  border: none;\r\n  background-color: #2b2b2b;\r\n  border-top-right-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  padding: 0 13px;\r\n  margin-right: 20px;\r\n  color: white;\r\n}\r\n\r\n@media only screen and (max-width: 1060px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 680px) {\r\n  .search-input[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .btn-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAxZnI7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcblxyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIgaDMge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLnNlYXJjaC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5idG4tc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.css"],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/app.module.ts":
      /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

      /*! exports provided: AppModule */

      /***/
      function srcAppAppModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
          return AppModule;
        });
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */
          "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app-routing.module */
          "./src/app/app-routing.module.ts"
        );
        /* harmony import */

        var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app.component */
          "./src/app/app.component.ts"
        );
        /* harmony import */

        var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./home/home.component */
          "./src/app/home/home.component.ts"
        );
        /* harmony import */

        var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./contacts/contacts.component */
          "./src/app/contacts/contacts.component.ts"
        );
        /* harmony import */

        var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./about/about.component */
          "./src/app/about/about.component.ts"
        );
        /* harmony import */

        var _main_page_record_main_page_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./main-page-record/main-page-record.component */
          "./src/app/main-page-record/main-page-record.component.ts"
        );
        /* harmony import */

        var _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./categories/categories.component */
          "./src/app/categories/categories.component.ts"
        );
        /* harmony import */

        var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./footer/footer.component */
          "./src/app/footer/footer.component.ts"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/platform-browser/animations */
          "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"
        );
        /* harmony import */

        var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/material/expansion */
          "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js"
        );
        /* harmony import */

        var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/divider */
          "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/common/http */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var _new_tool_new_tool_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./new-tool/new-tool.component */
          "./src/app/new-tool/new-tool.component.ts"
        );

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                "AppRoutingModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_10__[
                "ReactiveFormsModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__[
                "BrowserAnimationsModule"
              ],
              _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__[
                "MatExpansionModule"
              ],
              _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__[
                "MatDividerModule"
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_14__[
                "HttpClientModule"
              ],
            ],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                  _home_home_component__WEBPACK_IMPORTED_MODULE_4__[
                    "HomeComponent"
                  ],
                  _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__[
                    "ContactsComponent"
                  ],
                  _about_about_component__WEBPACK_IMPORTED_MODULE_6__[
                    "AboutComponent"
                  ],
                  _main_page_record_main_page_record_component__WEBPACK_IMPORTED_MODULE_7__[
                    "MainPageRecordComponent"
                  ],
                  _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__[
                    "CategoriesComponent"
                  ],
                  _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__[
                    "FooterComponent"
                  ],
                  _new_tool_new_tool_component__WEBPACK_IMPORTED_MODULE_15__[
                    "NewToolComponent"
                  ],
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    "BrowserModule"
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                    "AppRoutingModule"
                  ],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_10__[
                    "ReactiveFormsModule"
                  ],
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__[
                    "BrowserAnimationsModule"
                  ],
                  _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__[
                    "MatExpansionModule"
                  ],
                  _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__[
                    "MatDividerModule"
                  ],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_14__[
                    "HttpClientModule"
                  ],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                      _home_home_component__WEBPACK_IMPORTED_MODULE_4__[
                        "HomeComponent"
                      ],
                      _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__[
                        "ContactsComponent"
                      ],
                      _about_about_component__WEBPACK_IMPORTED_MODULE_6__[
                        "AboutComponent"
                      ],
                      _main_page_record_main_page_record_component__WEBPACK_IMPORTED_MODULE_7__[
                        "MainPageRecordComponent"
                      ],
                      _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__[
                        "CategoriesComponent"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__[
                        "FooterComponent"
                      ],
                      _new_tool_new_tool_component__WEBPACK_IMPORTED_MODULE_15__[
                        "NewToolComponent"
                      ],
                    ],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                        "AppRoutingModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_10__[
                        "ReactiveFormsModule"
                      ],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__[
                        "BrowserAnimationsModule"
                      ],
                      _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__[
                        "MatExpansionModule"
                      ],
                      _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__[
                        "MatDividerModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_14__[
                        "HttpClientModule"
                      ],
                    ],
                    providers: [],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/categories/categories.component.ts":
      /*!****************************************************!*\
    !*** ./src/app/categories/categories.component.ts ***!
    \****************************************************/

      /*! exports provided: CategoriesComponent */

      /***/
      function srcAppCategoriesCategoriesComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "CategoriesComponent",
          function () {
            return CategoriesComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/divider */
          "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js"
        );
        /* harmony import */

        var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/expansion */
          "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js"
        );

        var CategoriesComponent = /*#__PURE__*/ (function () {
          function CategoriesComponent() {
            _classCallCheck(this, CategoriesComponent);
          }

          _createClass(CategoriesComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return CategoriesComponent;
        })();

        CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
          return new (t || CategoriesComponent)();
        };

        CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: CategoriesComponent,
          selectors: [["app-categories"]],
          decls: 69,
          vars: 0,
          consts: [
            [1, "container"],
            ["href", "#"],
            [1, "drop-head"],
            ["href", ""],
          ],
          template: function CategoriesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h3"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Categories"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drills");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                8,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Jig Saw"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                "Grinders"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                16,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                "Hammer Drills"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                20,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "mat-accordion"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "mat-expansion-panel"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "mat-expansion-panel-header"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "span",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                25,
                "Outdoor Equipment"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                29,
                "Blowers"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "Power Cutters"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                35,
                "Chainsaws"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                37,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                38,
                "Lawn Movers"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                39,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "mat-expansion-panel"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                41,
                "mat-expansion-panel-header"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "span",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                43,
                "Fasteners"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                44,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                45,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                46,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tape");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                48,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                49,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Nails");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                51,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                52,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                53,
                "Screws"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                54,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                55,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                56,
                "Staples"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                57,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                58,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                59,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                60,
                "Circular Saw"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                61,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                62,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                63,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                64,
                "Cut-Out-Tools"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                65,
                "mat-divider"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                66,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                67,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                68,
                "Jobsite Storage"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__[
              "MatDivider"
            ],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__[
              "MatAccordion"
            ],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__[
              "MatExpansionPanel"
            ],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__[
              "MatExpansionPanelHeader"
            ],
          ],
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  background-color: rgba(43, 43, 43, 0.6);\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  padding: 15px;\r\n  margin: 0;\r\n  min-width: 215px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  display: table;\r\n  align-content: center;\r\n  list-style-type: none;\r\n  width: 100%;\r\n  height: 48px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  text-decoration: none;\r\n  color: white;\r\n  transition: .3s;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: red;\r\n  background-color: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.drop-head[_ngcontent-%COMP%]{\r\n  transition: 0.3s;\r\n}\r\n\r\n.drop-head[_ngcontent-%COMP%]:hover{\r\n  color: red;\r\n  background-color: rgba(43, 43, 43, 0.3);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@media only screen and (max-width: 1060px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViwyQ0FBMkM7QUFDN0M7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLXdpZHRoOiAyMTVweDtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGkge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG5saSBhIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbn1cclxuLmRyb3AtaGVhZHtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi5kcm9wLWhlYWQ6aG92ZXJ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuMyk7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CategoriesComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-categories",
                    templateUrl: "./categories.component.html",
                    styleUrls: ["./categories.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/contacts/contacts.component.ts":
      /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

      /*! exports provided: ContactsComponent */

      /***/
      function srcAppContactsContactsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ContactsComponent",
          function () {
            return ContactsComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        function ContactsComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "small",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "strong",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Warning:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              4,
              ' "Full Name" required. '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }

        var ContactsComponent = /*#__PURE__*/ (function () {
          function ContactsComponent(fb) {
            _classCallCheck(this, ContactsComponent);

            this.fb = fb;
            this.emailForm = this.fb.group({
              name: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              address: [""],
              postalCode: [""],
              city: [""],
              province: [""],
              message: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
            });
          }

          _createClass(ContactsComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onSubmit",
              value: function onSubmit() {
                console.log("E-Mail sent");
                console.log(this.emailForm.value);
                this.emailForm.reset();
              },
            },
            {
              key: "resetForm",
              value: function resetForm() {
                console.log("E-Mail form reset");
                this.emailForm.reset();
              },
            },
          ]);

          return ContactsComponent;
        })();

        ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
          return new (t || ContactsComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            )
          );
        };

        ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ContactsComponent,
          selectors: [["app-contacts"]],
          decls: 34,
          vars: 3,
          consts: [
            [1, "container"],
            [1, "container-contacts"],
            [1, "emailForm", 3, "formGroup", "ngSubmit"],
            [4, "ngIf"],
            [
              "formControlName",
              "name",
              "required",
              "",
              "placeholder",
              "Your Name",
              "type",
              "text",
            ],
            [
              "formControlName",
              "email",
              "placeholder",
              "Your E-Mail",
              "required",
              "",
              "type",
              "text",
            ],
            [
              "formControlName",
              "address",
              "placeholder",
              "Your Address",
              "type",
              "text",
            ],
            [
              "formControlName",
              "postalCode",
              "placeholder",
              "Your Postal Code",
              "type",
              "text",
            ],
            [
              "formControlName",
              "city",
              "placeholder",
              "Your City",
              "type",
              "text",
            ],
            [
              "formControlName",
              "province",
              "placeholder",
              "Your Province",
              "type",
              "text",
            ],
            [
              "cols",
              "30",
              "formControlName",
              "message",
              "id",
              "",
              "rows",
              "10",
              "required",
              "",
            ],
            ["type", "submit", 3, "disabled"],
            ["type", "reset", 3, "click"],
            [1, "text-danger"],
            [1, "warning"],
          ],
          template: function ContactsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h2"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Send E-Mail"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "form",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngSubmit",
                function ContactsComponent_Template_form_ngSubmit_5_listener() {
                  return ctx.onSubmit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                7,
                "Full Name:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                8,
                ContactsComponent_div_8_Template,
                5,
                0,
                "div",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "input",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "E-Mail:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "input",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                14,
                "Address: (Optional)"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                15,
                "input",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                "Postal Code: (Optional)"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                18,
                "input",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "City: (Optional)"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                21,
                "input",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                23,
                "Province: (Optional)"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                24,
                "input",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                "Question or Concern:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "textarea",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                28,
                "\n        "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "button",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SEND");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                32,
                "button",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ContactsComponent_Template_button_click_32_listener() {
                  return ctx.resetForm();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "RESET");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.emailForm
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.emailForm.controls.name.valid &&
                  ctx.emailForm.controls.name.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                !ctx.emailForm.valid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"],
          ],
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  margin: 0 auto;\r\n  background-color: rgba(43, 43, 43, 0.6);\r\n  transition: 0.3s;\r\n  min-width: 475px;\r\n\r\n  width: 90%;\r\n  max-width: 1300px;\r\n}\r\n\r\n.emailForm[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n  flex-wrap: wrap;\r\n\r\n}\r\n\r\n.container-contacts[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-left: 50px;\r\n  margin-top: 50px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  margin-top: 6px;\r\n  margin-bottom: 20px;\r\n  padding: 12px;\r\n  border: none;\r\n  background-color: #c5c5c5;\r\n  border-radius: 5px;\r\n  resize: vertical;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%], .ng-valid.minLength[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #42A948; \r\n}\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\r\n  border-left: 5px solid #a94442; \r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  float: right;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: rgba(0, 54, 0, 0.7);\r\n  color: #747474;\r\n  cursor: default;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxVQUFVO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjYpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWluLXdpZHRoOiA0NzVweDtcclxuXHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxufVxyXG5cclxuLmVtYWlsRm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRhY3RzIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQsIC5uZy12YWxpZC5taW5MZW5ndGgge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDU0LCAwLCAwLjcpO1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4iXX0= */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ContactsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-contacts",
                    templateUrl: "./contacts.component.html",
                    styleUrls: ["./contacts.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/footer/footer.component.ts":
      /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

      /*! exports provided: FooterComponent */

      /***/
      function srcAppFooterFooterComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "FooterComponent",
          function () {
            return FooterComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var FooterComponent = /*#__PURE__*/ (function () {
          function FooterComponent() {
            _classCallCheck(this, FooterComponent);
          }

          _createClass(FooterComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return FooterComponent;
        })();

        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };

        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: FooterComponent,
          selectors: [["app-footer"]],
          decls: 34,
          vars: 0,
          consts: [
            [1, "container"],
            [1, "container-columns"],
            [1, "footer-links"],
            ["href", "#"],
            [1, "footer-contacts"],
            [1, "footer-misc"],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "div",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "h4"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Links");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                9,
                "Facebook"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "Instagram"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "a",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                "Twitter"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "div",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "h4"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                18,
                "Contacts"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                "Cell: 999-999-9999"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                23,
                "E-mail: xxxxxxx@xxxx.xx"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "div",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "ul"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "h4"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                27,
                "GTA Tools"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                29,
                "\xA9 2020"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                31,
                "by New Web Inc."
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                32,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                33,
                "All rights reserved"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  \r\n  background-image: linear-gradient(-90deg, transparent, rgb(43, 43, 43), transparent);\r\n  max-width: 1300px;\r\n}\r\n\r\n.container-columns[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: space-around;\r\n  justify-items: center;\r\n  justify-self: center;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-misc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer-contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer-misc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDViwyQ0FBMkM7RUFDM0Msb0ZBQW9GO0VBQ3BGLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuNik7Ki9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCB0cmFuc3BhcmVudCwgcmdiKDQzLCA0MywgNDMpLCB0cmFuc3BhcmVudCk7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY29sdW1ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGEsIC5mb290ZXItY29udGFjdHMgYSwgLmZvb3Rlci1taXNjIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgbGksIC5mb290ZXItY29udGFjdHMgbGksIC5mb290ZXItbWlzYyBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-footer",
                    templateUrl: "./footer.component.html",
                    styleUrls: ["./footer.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/home/home.component.ts":
      /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

      /*! exports provided: HomeComponent */

      /***/
      function srcAppHomeHomeComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "HomeComponent",
          function () {
            return HomeComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../tool.service */
          "./src/app/tool.service.ts"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _main_page_record_main_page_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../main-page-record/main-page-record.component */
          "./src/app/main-page-record/main-page-record.component.ts"
        );

        function HomeComponent_app_main_page_record_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              0,
              "app-main-page-record",
              2
            );
          }

          if (rf & 2) {
            var tool_r2 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "tool",
              tool_r2
            );
          }
        }

        var HomeComponent = /*#__PURE__*/ (function () {
          function HomeComponent(toolService) {
            _classCallCheck(this, HomeComponent);

            this.toolService = toolService;
          }

          _createClass(HomeComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                this.getAllTools();
              },
            },
            {
              key: "getAllTools",
              value: function getAllTools() {
                var _this = this;

                this.toolService.getAllTools().subscribe(function (tools) {
                  return (_this.tools = tools);
                });
              },
            },
          ]);

          return HomeComponent;
        })();

        HomeComponent.ɵfac = function HomeComponent_Factory(t) {
          return new (t || HomeComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tool_service__WEBPACK_IMPORTED_MODULE_1__["ToolService"]
            )
          );
        };

        HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomeComponent,
          selectors: [["app-home"]],
          decls: 2,
          vars: 1,
          consts: [
            [1, "container"],
            [3, "tool", 4, "ngFor", "ngForOf"],
            [3, "tool"],
          ],
          template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                1,
                HomeComponent_app_main_page_record_1_Template,
                1,
                1,
                "app-main-page-record",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.tools
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"],
            _main_page_record_main_page_record_component__WEBPACK_IMPORTED_MODULE_3__[
              "MainPageRecordComponent"
            ],
          ],
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  max-width: 1300px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTMwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgxIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-home",
                    templateUrl: "./home.component.html",
                    styleUrls: ["./home.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _tool_service__WEBPACK_IMPORTED_MODULE_1__["ToolService"],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/main-page-record/main-page-record.component.ts":
      /*!****************************************************************!*\
    !*** ./src/app/main-page-record/main-page-record.component.ts ***!
    \****************************************************************/

      /*! exports provided: MainPageRecordComponent */

      /***/
      function srcAppMainPageRecordMainPageRecordComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "MainPageRecordComponent",
          function () {
            return MainPageRecordComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        var _c0 = function _c0(a0) {
          return {
            color: a0,
          };
        };

        var MainPageRecordComponent = /*#__PURE__*/ (function () {
          function MainPageRecordComponent() {
            _classCallCheck(this, MainPageRecordComponent);
          }

          _createClass(MainPageRecordComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return MainPageRecordComponent;
        })();

        MainPageRecordComponent.ɵfac = function MainPageRecordComponent_Factory(
          t
        ) {
          return new (t || MainPageRecordComponent)();
        };

        MainPageRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: MainPageRecordComponent,
          selectors: [["app-main-page-record"]],
          inputs: {
            tool: "tool",
          },
          decls: 23,
          vars: 12,
          consts: [
            [1, "container"],
            ["href", "#"],
            ["alt", "", 3, "src"],
            [1, "record-details"],
            [2, "float", "right"],
            [3, "ngStyle"],
            [1, "details-link"],
            ["href", ""],
          ],
          template: function MainPageRecordComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "img",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "p",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "h2"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "a",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "H4"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "H3"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "span",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " left");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "p"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "span",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "a",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                22,
                "Details..."
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                ctx.tool.photos[0].photoLarge,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](
                  8,
                  7,
                  ctx.tool.postDate,
                  "medium"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.tool.title
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "Price: ",
                ctx.tool.price,
                "$"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngStyle",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  10,
                  _c0,
                  ctx.tool.quantity > 2 ? "green" : "red"
                )
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.tool.quantity
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                " ",
                ctx.tool.description,
                " "
              );
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: grid;\r\n  grid-template-columns: 20% 1fr;\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  margin-bottom: 20px;\r\n  background-color: rgba(43, 43, 43, 0.6);\r\n  transition: 0.3s;\r\n  min-width: 475px;\r\n  width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(43, 43, 43, 0.9);\r\n  border: 1px solid rgba(255, 255, 255, 0.64);\r\n  \r\n}\r\n\r\nh2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.details-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: red;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n  width: 90%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\r\n  text-align: center;\r\n  margin: auto 0;\r\n}\r\n\r\n.record-details[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  padding: 15px;\r\n  font-size: 0.8em;\r\n  font-weight: normal;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@media only screen and (max-width: 680px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    min-width: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlLXJlY29yZC9tYWluLXBhZ2UtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS1yZWNvcmQvbWFpbi1wYWdlLXJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDFmcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuNik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtaW4td2lkdGg6IDQ3NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuOSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcclxuICAvKmN1cnNvcjogcG9pbnRlcjsqL1xyXG59XHJcblxyXG5oMiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV0YWlscy1saW5rIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGltZyB7XHJcbiAgbWFyZ2luOiAyJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcblxyXG4ucmVjb3JkLWRldGFpbHMge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICB9XHJcbn1cclxuIl19 */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            MainPageRecordComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-main-page-record",
                    templateUrl: "./main-page-record.component.html",
                    styleUrls: ["./main-page-record.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            {
              tool: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
                },
              ],
            }
          );
        })();
        /***/
      },

    /***/
    "./src/app/new-tool/new-tool.component.ts":
      /*!************************************************!*\
    !*** ./src/app/new-tool/new-tool.component.ts ***!
    \************************************************/

      /*! exports provided: NewToolComponent */

      /***/
      function srcAppNewToolNewToolComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "NewToolComponent",
          function () {
            return NewToolComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../tool */
          "./src/app/tool.ts"
        );
        /* harmony import */

        var _tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../tool.service */
          "./src/app/tool.service.ts"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );

        function NewToolComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "small",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "strong",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Warning:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              4,
              ' "Full Name" required. '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }

        function NewToolComponent_p_22_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "p"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var name_r5 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              name_r5
            );
          }
        }

        var NewToolComponent = /*#__PURE__*/ (function () {
          function NewToolComponent(fb, toolService) {
            _classCallCheck(this, NewToolComponent);

            this.fb = fb;
            this.toolService = toolService;
            this.fileNames = [];
            this.tool = new _tool__WEBPACK_IMPORTED_MODULE_2__["Tool"]();
            this.newToolForm = this.fb.group({
              title: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              photos: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              description: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              category: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              price: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
              quantity: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                  .required,
              ],
            });
          }

          _createClass(NewToolComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onSubmit",
              value: function onSubmit() {
                // this.toolService.newTool.
                console.log("New tool created");
                console.log(this.newToolForm.value);
                this.newToolForm.reset();
              },
            },
            {
              key: "resetForm",
              value: function resetForm() {
                console.log("E-Mail form reset");
                this.newToolForm.reset();
              },
            },
            {
              key: "fileEvent",
              value: function fileEvent(event) {
                var amount = event.target.files.length;

                for (var i = 0; i < amount; i++) {
                  this.fileNames.push(event.target.files[i].name);
                }
              },
            },
          ]);

          return NewToolComponent;
        })();

        NewToolComponent.ɵfac = function NewToolComponent_Factory(t) {
          return new (t || NewToolComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"]
            )
          );
        };

        NewToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: NewToolComponent,
          selectors: [["app-new-tool"]],
          decls: 32,
          vars: 4,
          consts: [
            [1, "container"],
            [1, "container-contacts"],
            [1, "newToolForm", 3, "formGroup", "ngSubmit"],
            [4, "ngIf"],
            [
              "formControlName",
              "title",
              "required",
              "",
              "placeholder",
              "Tool title",
              "type",
              "text",
            ],
            [
              "formControlName",
              "category",
              "required",
              "",
              "placeholder",
              "Tool category",
              "type",
              "text",
            ],
            [
              "formControlName",
              "price",
              "required",
              "",
              "placeholder",
              "0",
              "type",
              "number",
              "min",
              "1",
            ],
            [
              "formControlName",
              "quantity",
              "required",
              "",
              "placeholder",
              "0",
              "type",
              "number",
              "min",
              "1",
            ],
            ["for", "file"],
            [
              "type",
              "file",
              "id",
              "file",
              "name",
              "files",
              "accept",
              "image/*",
              "multiple",
              "",
              3,
              "change",
            ],
            [4, "ngFor", "ngForOf"],
            [
              "cols",
              "30",
              "formControlName",
              "description",
              "id",
              "",
              "rows",
              "10",
              "required",
              "",
            ],
            ["type", "submit", 3, "disabled"],
            ["type", "reset", 3, "click"],
            [1, "text-danger"],
            [1, "warning"],
          ],
          template: function NewToolComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "h2"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                "Add new tool"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "form",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngSubmit",
                function NewToolComponent_Template_form_ngSubmit_5_listener() {
                  return ctx.onSubmit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title:");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                8,
                NewToolComponent_div_8_Template,
                5,
                0,
                "div",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "input",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Category:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "input",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                14,
                "Price:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                15,
                "input",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                "Quantity:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                18,
                "input",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "label",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "Select files:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "input",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "change",
                function NewToolComponent_Template_input_change_21_listener(
                  $event
                ) {
                  return ctx.fileEvent($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                22,
                NewToolComponent_p_22_Template,
                2,
                1,
                "p",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "label"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                24,
                "Description:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "textarea",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                "      "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "div"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "button",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SEND");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "button",
                13
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function NewToolComponent_Template_button_click_30_listener() {
                  return ctx.resetForm();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "RESET");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.newToolForm
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.newToolForm.controls.title.valid &&
                  ctx.newToolForm.controls.title.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.fileNames
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                !ctx.newToolForm.valid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"],
          ],
          styles: [
            ".container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  margin: 0 auto;\r\n  background-color: rgba(43, 43, 43, 0.6);\r\n  transition: 0.3s;\r\n  min-width: 475px;\r\n\r\n  width: 90%;\r\n  max-width: 1300px;\r\n}\r\n\r\n.newToolForm[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n  flex-wrap: wrap;\r\n\r\n}\r\n\r\n.container-contacts[_ngcontent-%COMP%] {\r\n  margin: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-left: 50px;\r\n  margin-top: 50px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  margin-top: 6px;\r\n  margin-bottom: 20px;\r\n  padding: 12px;\r\n  border: none;\r\n  background-color: #c5c5c5;\r\n  border-radius: 5px;\r\n  resize: vertical;\r\n}\r\n\r\ninput[type=file][_ngcontent-%COMP%] {\r\n  color: #000;\r\n  margin-top: 6px;\r\n  margin-bottom: 20px;\r\n  padding: 12px;\r\n  border: none;\r\n  background-color: #c5c5c5;\r\n  border-radius: 5px;\r\n  resize: vertical;\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%], .ng-valid.minLength[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #42A948; \r\n}\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\r\n  border-left: 5px solid #a94442; \r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  float: right;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: rgba(0, 54, 0, 0.7);\r\n  color: #747474;\r\n  cursor: default;\r\n}\r\n\r\n@media only screen and (max-width: 680px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    min-width: 0;\r\n    width: 90%;\r\n  }\r\n\r\n  .container-contacts[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRvb2wvbmV3LXRvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsVUFBVTtBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXRvb2wvbmV3LXRvb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIG1pbi13aWR0aDogNDc1cHg7XHJcblxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5uZXdUb29sRm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRhY3RzIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPW51bWJlcl0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCwgLm5nLXZhbGlkLm1pbkxlbmd0aCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTQsIDAsIDAuNyk7XHJcbiAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1jb250YWN0cyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            NewToolComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-new-tool",
                    templateUrl: "./new-tool.component.html",
                    styleUrls: ["./new-tool.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                },
                {
                  type:
                    _tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/tool.service.ts":
      /*!*********************************!*\
    !*** ./src/app/tool.service.ts ***!
    \*********************************/

      /*! exports provided: ToolService */

      /***/
      function srcAppToolServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "ToolService", function () {
          return ToolService;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );

        var ToolService = /*#__PURE__*/ (function () {
          function ToolService(http) {
            _classCallCheck(this, ToolService);

            this.http = http;
            this.toolsUrl = "http://135.0.65.68:9122/tools";
          }

          _createClass(ToolService, [
            {
              key: "getAllTools",
              value: function getAllTools() {
                return this.http.get("".concat(this.toolsUrl));
              },
            },
            {
              key: "newTool",
              value: function newTool(data) {
                return this.http.post("".concat(this.toolsUrl), data);
              },
            },
          ]);

          return ToolService;
        })();

        ToolService.ɵfac = function ToolService_Factory(t) {
          return new (t || ToolService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };

        ToolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: ToolService,
          factory: ToolService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ToolService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/tool.ts":
      /*!*************************!*\
    !*** ./src/app/tool.ts ***!
    \*************************/

      /*! exports provided: Tool */

      /***/
      function srcAppToolTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "Tool", function () {
          return Tool;
        });

        var Tool = function Tool() {
          _classCallCheck(this, Tool);
        };
        /***/
      },

    /***/
    "./src/environments/environment.ts":
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "environment", function () {
          return environment;
        }); // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.

        var environment = {
          production: false,
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/
    "./src/main.ts":
      /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

      /*! no exports provided */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */
          "./src/app/app.module.ts"
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */
          "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          ["catch"](function (err) {
            return console.error(err);
          });
        /***/
      },

    /***/
    0:
      /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! E:\College\2course_2semester\Web422\Angular\ToolsApp\src\main.ts */
          "./src/main.ts"
        );
        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main-es5.js.map
