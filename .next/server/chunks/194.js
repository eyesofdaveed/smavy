"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 7549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ navbarScroll)
/* harmony export */ });
function navbarScroll(navbar, isTransparent, isFaqPage) {
    if (!navbar) return;
    if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        if (isTransparent) navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("nav-scroll");
        if (isTransparent) navbar.classList.add("bg-transparent");
    }
    window.addEventListener("scroll", ()=>{
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
            if (isTransparent) navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove("nav-scroll");
            if (isTransparent) navbar.classList.add("bg-transparent");
        }
    });
};


/***/ }),

/***/ 7925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ({ noWave , rtl  })=>{
    const handleMouseMove = (event)=>{
        var ref, ref1;
        const dropDownToggler = event.target.classList.contains("dropdown-toggle") ? event.target : event.target.querySelector(".dropdown-toggle");
        const dropDownMenu = dropDownToggler === null || dropDownToggler === void 0 ? void 0 : dropDownToggler.nextElementSibling;
        dropDownToggler === null || dropDownToggler === void 0 ? void 0 : (ref = dropDownToggler.classList) === null || ref === void 0 ? void 0 : ref.add("show");
        dropDownMenu === null || dropDownMenu === void 0 ? void 0 : (ref1 = dropDownMenu.classList) === null || ref1 === void 0 ? void 0 : ref1.add("show");
    };
    const handleMouseLeave = (event)=>{
        var ref, ref1;
        const dropdown = event.target.classList.contains("dropdown") ? event.target : event.target.closest(".dropdown");
        const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
        const dropDownMenu = dropdown.querySelector(".dropdown-menu");
        dropDownToggler === null || dropDownToggler === void 0 ? void 0 : (ref = dropDownToggler.classList) === null || ref === void 0 ? void 0 : ref.remove("show");
        dropDownMenu === null || dropDownMenu === void 0 ? void 0 : (ref1 = dropDownMenu.classList) === null || ref1 === void 0 ? void 0 : ref1.remove("show");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: `style-4 ${noWave ? "mt-0 pt-100" : ""}`,
        "data-scroll-index": "8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "section-head text-center style-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-10",
                                children: [
                                    "Готов",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Трансформироваться"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "foot mt-80",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/img/logo_lgr.png",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "links",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/home-app-landing",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "active",
                                                        children: "Home"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-about-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "about"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-portfolio-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "portfolio"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-services-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "services"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-blog-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "blog"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/page-contact-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "contact"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "copywrite text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                            className: "small",
                            children: [
                                "\xa9 2022 Copyrights and designed by",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://eyesofdaveed.github.io/personal-portfolio/",
                                    className: "fw-bold text-decoration-underline",
                                    children: "eyesofdaveed."
                                }),
                                " "
                            ]
                        })
                    })
                ]
            }),
            !noWave && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/assets/img/footer/footer_4_wave.png",
                alt: "",
                className: "wave"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const TopNav = ({ style  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `top-navbar style-${style}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "btn sm-butn bg-white py-0 px-2 me-2 fs-10px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: "fs-10px",
                            children: "Акция"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/icons/nav_icon/imoj_heart.png",
                        alt: "",
                        className: "icon-15 me-1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "fs-10px op-6 me-1",
                        children: [
                            "Получи",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "op-10 fs-10px",
                        children: "20% скидки"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/page-contact-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "fs-10px text-decoration-underline ms-2",
                            children: "Свяжись с нами"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);


/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader");
    if (!preloader) return;
    if (document.body.classList.contains("pace-done")) preloader.classList.add("isdone");
    document.addEventListener("load", ()=>preloader.classList.add("isdone"));
    if (typeof Pace === "undefined") return;
    Pace.on("start", ()=>preloader.classList.remove("isdone"));
    Pace.on("done", ()=>preloader.classList.add("isdone"));
};
/* harmony default export */ const common_loadingPace = (loadingPace);

;// CONCATENATED MODULE: ./src/components/PreLoader/index.jsx



const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>common_loadingPace(), 0);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader"
    });
};
/* harmony default export */ const components_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./src/common/scrollToTop.js
function scrollToTop() {
    const toTop = document.querySelector(".to_top");
    if (!toTop) return;
    window.addEventListener("scroll", function() {
        var bodyScroll = window.scrollY;
        if (bodyScroll > 700) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }
    });
    toTop.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

;// CONCATENATED MODULE: ./src/components/ScrollToTop/index.jsx



const ScrollToTop = ({ topText  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollToTop();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "#",
        className: `to_top ${topText ? "" : "bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: `bi bi-chevron-up ${topText ? "" : "fs-6 text-dark"}`
            }),
            topText && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                children: "Top"
            })
        ]
    });
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./src/common/fixStylesheetsOrder.js
function fixStylesheetsOrder(isRTL) {
    if (isRTL) {
        var ref;
        let rtlCss = document.querySelector('link[href="/assets/css/rtl_style.css"]');
        let mainCss = document.querySelector('link[href="/assets/css/style.css"]');
        if (!rtlCss || !mainCss) return;
        if ((ref = mainCss.nextElementSibling.href) === null || ref === void 0 ? void 0 : ref.includes("/assets/css/rtl_style.css")) return;
        // Insert main css before rtl css 
        rtlCss.before(mainCss);
    } else {
        var ref1;
        let bootstrapCss = document.querySelector('link[href="/assets/css/lib/bootstrap.min.css"]');
        let mainCss1 = document.querySelector('link[href="/assets/css/style.css"]');
        if (!bootstrapCss || !mainCss1) return;
        if ((ref1 = bootstrapCss.nextElementSibling.href) === null || ref1 === void 0 ? void 0 : ref1.includes("/assets/css/style.css")) return;
        // Insert main css after bootstrap css 
        bootstrapCss.after(mainCss1);
    }
};

;// CONCATENATED MODULE: ./src/layouts/Main.jsx

//= React



//= Components


//= Scripts

const MainLayout = ({ children , scrollTopText , isRTL  })=>{
    (0,external_react_.useEffect)(()=>{
        fixStylesheetsOrder(isRTL);
    }, [
        isRTL
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/animate.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.rtl.min.css"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/style.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/rtl_style.css"
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_PreLoader, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollToTop, {
                topText: scrollTopText
            })
        ]
    });
};
/* harmony default export */ const Main = (MainLayout);


/***/ })

};
;