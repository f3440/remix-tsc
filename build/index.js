var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:F:\Ferro\Projects\remix-tsc\app\root.tsx
var root_exports = {};
__export(root_exports, {
  Document: () => Document,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta2,
  scripts: () => scripts2
});
var import_react2 = require("@remix-run/react");

// app/root_meta.tsx
function meta() {
  return [
    {
      charset: "utf-8"
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff"
    },
    {
      name: "msapplication-TileImage",
      content: "./assets/images/favicons/ms-icon-144x144.png"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff"
    },
    {
      name: "msapplication-TileImage",
      content: "./assets/images/favicons/ms-icon-144x144.png"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    }
  ];
}

// app/root_scripts.tsx
function scripts() {
  return [
    {
      src: "assets/lib/jquery/dist/jquery.js"
    },
    {
      src: "assets/lib/bootstrap/dist/js/bootstrap.min.js"
    },
    {
      src: "assets/lib/wow/dist/wow.js"
    },
    {
      src: "assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"
    },
    {
      src: "assets/lib/isotope/dist/isotope.pkgd.js"
    },
    {
      src: "assets/lib/imagesloaded/imagesloaded.pkgd.js"
    },
    {
      src: "assets/lib/flexslider/jquery.flexslider.js"
    },
    {
      src: "assets/lib/owl.carousel/dist/owl.carousel.min.js"
    },
    {
      src: "assets/lib/smoothscroll.js"
    },
    {
      src: "assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
    },
    {
      src: "assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
    },
    {
      src: "assets/js/plugins.js"
    },
    {
      src: "assets/js/main.js"
    }
  ];
}

// route:F:\Ferro\Projects\remix-tsc\app\root.tsx
var meta2 = meta(), scripts2 = scripts();
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null));
}
var Document = ({ children, title }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en-US",
  dir: "ltr"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Links, null), /* @__PURE__ */ React.createElement(import_react2.Meta, null)), /* @__PURE__ */ React.createElement("body", {
  "data-spy": "scroll",
  "data-target": ".onpage-navigation",
  "data-offset": "60"
}, children, /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "There was an Error")), /* @__PURE__ */ React.createElement("body", null));
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineatecnologica\index.tsx
var lineatecnologica_exports = {};
__export(lineatecnologica_exports, {
  default: () => Index,
  meta: () => meta3
});
var import_react3 = require("@remix-run/react"), meta3 = () => ({
  title: "ISE ltda | Importaciones",
  description: "This becomes the nice preview on search results."
});
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-loader"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }, "Loading...")), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-custom navbar-transparent navbar-fixed-top one-page",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-header"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggle",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#custom-collapse"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  })), /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "navbar-brand",
    to: "/"
  }, "ISE LTDA.")), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "custom-collapse"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, "Inicio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#about"
  }, "Nosotros")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#products"
  }, "Lineas")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#contact"
  }, "Contacto")))))), /* @__PURE__ */ React.createElement("section", {
    className: "home-section home-full-height bg-dark bg-gradient",
    id: "home",
    "data-background": "assets/images/section-10.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titan-caption"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "caption-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-30 titan-title-size-1"
  }, /* @__PURE__ */ React.createElement("img", {
    width: "450",
    height: "284",
    src: "/assets/images/logo.png",
    "data-src": "/assets/images/logo.png",
    className: "attachment-large size-large lazy loaded",
    alt: "",
    loading: "lazy",
    "data-was-processed": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-40 titan-title-size-2"
  }, "IMPORTACIONES SALUD & ENTRETENIMIENTO"), /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll btn btn-border-w btn-round",
    href: "#"
  }, "Conozca mas sobre nosotros")))), /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "module pt-0 pb-0",
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row position-relative m-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-6 side-image",
    "data-background": "assets/images/section-14.jpg"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-6 col-md-offset-6 side-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt align-left"
  }, "Nosotros"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif align-left"
  }, "ISE LTDA. es una de la Empresas referentes en el \xE1mbito Tecnol\xF3gico de Software en el Pa\xEDs."), /* @__PURE__ */ React.createElement("p", null, "Somos una empresa comercial, la cual se dedica a la implementaci\xF3n, distribuci\xF3n y administraci\xF3n de una cartera diversa de productos de Software y Hardware, que se encarga de implementar proyectos a nivel Nacional, asegurando calidad y excelencia en cada uno de nuestros servicios."), /* @__PURE__ */ React.createElement("p", null, "Buscamos fomentar la Industria de la Tecnolog\xEDa, asesorando a nuestro clientes, en la selecci\xF3n de los mejores Partners e Integradores de soluciones para la gesti\xF3n de sus proyectos tecnol\xF3gicos, con el fin de satisfacer las necesidades y brindar soluciones completas de alto valor."), /* @__PURE__ */ React.createElement("p", null, "Con foco en el licenciamiento de software y su ciclo de vida. ISE LTDA. es pionera en la atenci\xF3n personalizada a nuestros clientes."), /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt align-left pt-50"
  }, "VISI\xD3N"), /* @__PURE__ */ React.createElement("p", null, "Ser una empresa innovadora que, mediante una amplia gama de productos de alta calidad y prestigio, compa\xF1ados de una excelente actitud de servicio, logre satisfacer las necesidades de sus clientes y posicionarse como un referente en la industria tecnol\xF3gica")))))), /* @__PURE__ */ React.createElement("section", {
    className: "module bg-dark-60",
    "data-background": "assets/images/section-6.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "video-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "video-box-icon"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "video-pop-up",
    href: "https://www.youtube.com/watch?v=TTxZj3DZiIM"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-video"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "video-title font-alt"
  }, "Presentacion"), /* @__PURE__ */ React.createElement("div", {
    className: "video-subtitle font-alt"
  }, "Mira el video de nuestros productos")))))), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-w"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "products"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Nuestras Lineas"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."))), /* @__PURE__ */ React.createElement("div", {
    className: "row landing-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-push-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "center-block",
    src: "assets/images/logos-hojas.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-pull-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-alt"
  }, "SALUD Y BIENESTAR"), /* @__PURE__ */ React.createElement("p", null, "Productos para salud."), /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "btn btn-border-d btn-circle",
    to: "/lineaverde/"
  }, "CONOCER MAS"))), /* @__PURE__ */ React.createElement("div", {
    className: "row landing-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "center-block",
    src: "assets/images/logos-globe.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-alt"
  }, "SOFTWARE Y TECNOLOGIA"), /* @__PURE__ */ React.createElement("p", null, "Para ti y tu empresa"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    className: "btn btn-border-d btn-circle",
    to: "/lineasoftware/"
  }, "CONOCER MAS"))))), /* @__PURE__ */ React.createElement("section", {
    className: "module bg-dark-60 pt-0 pb-0 parallax-bg testimonial",
    "data-background": "assets/images/testimonial_bg.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonials-slider pt-140 pb-140"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "slides"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Jack Woods"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO"))))))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Jim Stone"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO"))))))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Adele Snow"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO")))))))))), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Contactanos"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8"
  }, /* @__PURE__ */ React.createElement("form", {
    id: "contactForm",
    role: "form",
    method: "post",
    action: "php/contact.php"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "sr-only",
    for: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Tu Nombre*",
    required: "required",
    "data-validation-required-message": "Please enter your name."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "sr-only",
    for: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Tu correo electronico*",
    required: "required",
    "data-validation-required-message": "Please enter your email address."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    rows: "7",
    id: "message",
    name: "message",
    placeholder: "Tu mensaje*",
    required: "required",
    "data-validation-required-message": "Please enter your message."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-block btn-round btn-d",
    id: "cfsubmit",
    type: "submit"
  }, "Enviar"))), /* @__PURE__ */ React.createElement("div", {
    className: "ajax-response font-alt",
    id: "contactFormResponse"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-item mt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-megaphone"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "alt-features-title font-alt"
  }, "Donde nos encuentras"), "ISE ltda.", /* @__PURE__ */ React.createElement("br", null), "Calle Misael Saracho Nro. 1184", /* @__PURE__ */ React.createElement("br", null), "La Paz, Bolivia"), /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-item mt-xs-60"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-map"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "alt-features-title font-alt"
  }, "Dudas?"), "Email: somecompany@example.com", /* @__PURE__ */ React.createElement("br", null), "Phone: +1 234 567 89 10"))))), /* @__PURE__ */ React.createElement("section", {
    id: "map-section"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.3661661900794!2d-68.12282491699169!3d-16.50262294058292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21bd3024f007%3A0x2a74f58e90d5e125!2sTITIRILANDIA!5e0!3m2!1ses!2sbo!4v1658423715443!5m2!1ses!2sbo",
    width: "100%",
    height: "450",
    style: { border: 0 },
    allowFullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade"
  })), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-d"
  }), /* @__PURE__ */ React.createElement("footer", {
    className: "footer bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "copyright font-alt"
  }, "\xA9 2022\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.comtech.com.bo"
  }, "ComTech"), ", All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-social-links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-facebook"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-twitter"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-dribbble"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-skype"
  })))))))), /* @__PURE__ */ React.createElement("div", {
    className: "scroll-up"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-angle-double-up"
  })))), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/jquery/dist/jquery.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/bootstrap/dist/js/bootstrap.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/wow/dist/wow.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/isotope/dist/isotope.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/imagesloaded/imagesloaded.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/flexslider/jquery.flexslider.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/owl.carousel/dist/owl.carousel.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/smoothscroll.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    async: "",
    defer: "",
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBXx2k5gQA3V57v8mfqDdLT31hZRzUlxr4"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/js/plugins.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/js/main.js"
  }));
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineatecnologica\links.tsx
var links_exports = {};
__export(links_exports, {
  default: () => links
});
function links() {
  return [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "assets/images/favicons/apple-icon-57x57.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "assets/images/favicons/apple-icon-60x60.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "assets/images/favicons/apple-icon-72x72.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "assets/images/favicons/apple-icon-76x76.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "assets/images/favicons/apple-icon-114x114.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "assets/images/favicons/apple-icon-120x120.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "assets/images/favicons/apple-icon-144x144.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "assets/images/favicons/apple-icon-152x152.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "assets/images/favicons/android-icon-192x192.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "assets/images/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "assets/images/favicons/favicon-96x96.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "assets/images/favicons/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "manifest.json"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/bootstrap/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Volkhov:400i"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/animate.css/animate.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/components-font-awesome/css/font-awesome.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/et-line-font/et-line-font.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/flexslider/flexslider.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/owl.carousel/dist/assets/owl.carousel.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/magnific-popup/dist/magnific-popup.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/simple-text-rotator/simpletextrotator.css"
    },
    {
      rel: "stylesheet",
      href: "assets/css/style.css"
    },
    {
      rel: "stylesheet",
      href: "assets/css/colors/default.css"
    }
  ];
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineaverde.tsx
var lineaverde_exports = {};
__export(lineaverde_exports, {
  default: () => lineaverde_default,
  links: () => links3,
  meta: () => meta4
});

// app/root_links.tsx
function links2() {
  return [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "assets/images/favicons/apple-icon-57x57.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "assets/images/favicons/apple-icon-60x60.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "assets/images/favicons/apple-icon-72x72.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "assets/images/favicons/apple-icon-76x76.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "assets/images/favicons/apple-icon-114x114.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "assets/images/favicons/apple-icon-120x120.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "assets/images/favicons/apple-icon-144x144.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "assets/images/favicons/apple-icon-152x152.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "assets/images/favicons/android-icon-192x192.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "assets/images/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "assets/images/favicons/favicon-96x96.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "assets/images/favicons/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "manifest.json"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/bootstrap/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Volkhov:400i"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/animate.css/animate.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/components-font-awesome/css/font-awesome.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/et-line-font/et-line-font.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/flexslider/flexslider.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/owl.carousel/dist/assets/owl.carousel.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/magnific-popup/dist/magnific-popup.css"
    },
    {
      rel: "stylesheet",
      href: "assets/lib/simple-text-rotator/simpletextrotator.css"
    },
    {
      rel: "stylesheet",
      href: "assets/css/style.css"
    },
    {
      rel: "stylesheet",
      href: "assets/css/colors/default.css"
    }
  ];
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineaverde.tsx
var links3 = () => links2(), meta4 = () => ({
  title: "Linea Verde | ISE ltda",
  description: "This becomes the nice preview on search results."
});
function lineaverde_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-loader"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }, "Loading...")), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-custom navbar-fixed-top navbar-transparent",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-header"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggle",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#custom-collapse"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "index.html"
  }, "Titan")), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "custom-collapse"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Home"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_video_background.html"
  }, "Default")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_op_fullscreen_gradient_overlay.html"
  }, "One Page")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_agency.html"
  }, "Agency")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_portfolio.html"
  }, "Portfolio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_restaurant.html"
  }, "Restaurant")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_finance.html"
  }, "Finance")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_landing.html"
  }, "Landing Page")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_photography.html"
  }, "Photography")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_shop.html"
  }, "Shop")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Headers"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Static Image Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_static.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_static.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Flexslider Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_flexslider.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_flexslider.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Video Background Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_video_background.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_video_background.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Text Rotator Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_text_rotator.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_text_rotator.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Gradient Overlay Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_gradient_overlay.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_gradient_overlay.html"
  }, "classNameic")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Pages"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "About"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about1.html"
  }, "About 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about2.html"
  }, "About 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about3.html"
  }, "About 3")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about4.html"
  }, "About 4")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about5.html"
  }, "About 5")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Services"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service1.html"
  }, "Service 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service2.html"
  }, "Service 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service3.html"
  }, "Service 3")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Pricing"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "pricing1.html"
  }, "Pricing 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "pricing2.html"
  }, "Pricing 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Gallery"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_4.html"
  }, "4 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_6.html"
  }, "6 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Contact"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact1.html"
  }, "Contact 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact2.html"
  }, "Contact 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact3.html"
  }, "Contact 3")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Restaurant menu"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "restaurant_menu1.html"
  }, "Menu 2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "restaurant_menu2.html"
  }, "Menu 3 Columns")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "login_register.html"
  }, "Login / Register")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "faq.html"
  }, "FAQ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "404.html"
  }, "Page 404")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Portfolio"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed - Gutter"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width - Gutter"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Masonry"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_4.html"
  }, "4 Columns")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Hover Style"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_hover_black.html"
  }, "Black")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_hover_gradient.html"
  }, "Gradient")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Single"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Image"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, "Style 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Slider"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.html"
  }, "Style 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Video"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video2.html"
  }, "Style 2")))))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Blog"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Standard"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_standard_left_sidebar.html"
  }, "Left Sidebar")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_standard_right_sidebar.html"
  }, "Right Sidebar")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Grid"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Masonry"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Single"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_single_left_sidebar.html"
  }, "Left Sidebar")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_single_right_sidebar.html"
  }, "Right Sidebar")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Features"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "alerts-and-wells.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-bolt"
  }), " Alerts and Wells")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "buttons.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link fa-sm"
  }), " Buttons")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "tabs_and_accordions.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-tasks"
  }), " Tabs & Accordions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "content_box.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-list-alt"
  }), " Contents Box")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "forms.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-check-square-o"
  }), " Forms")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "icons.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-star"
  }), " Icons")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "progress-bars.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-server"
  }), " Progress Bars")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "typography.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-font"
  }), " Typography")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Shop"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Product"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_product_col_3.html"
  }, "3 columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_product_col_4.html"
  }, "4 columns")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_single_product.html"
  }, "Single Product")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_checkout.html"
  }, "Checkout")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "documentation.html",
    "data-toggle": "dropdown"
  }, "Documentation"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#contact"
  }, "Contact Form")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#reservation"
  }, "Reservation Form")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#mailchimp"
  }, "Mailchimp")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#gmap"
  }, "Google Map")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#plugin"
  }, "Plugins")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#changelog"
  }, "Changelog")))))))), /* @__PURE__ */ React.createElement("section", {
    className: "home-section bg-dark-60 portfolio-page-header parallax-bg",
    id: "home",
    "data-background": "./assets/images/portfolio/portfolio_header_bg.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titan-caption"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "caption-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-30 titan-title-size-1"
  }, "Hello & welcome"), /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-40 titan-title-size-4"
  }, "We are Titan"), /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll btn btn-border-w btn-round",
    href: "#portfolio"
  }, "Our Works")))), /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "portfolio"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "filter font-alt",
    id: "filters"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "current wow fadeInUp",
    href: "#",
    "data-filter": "*"
  }, "All")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".illustration",
    "data-wow-delay": "0.2s"
  }, "Illustration")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".marketing",
    "data-wow-delay": "0.4s"
  }, "Marketing")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".photography",
    "data-wow-delay": "0.6s"
  }, "Photography")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".webdesign",
    "data-wow-delay": "0.6s"
  }, "Web Design"))))), /* @__PURE__ */ React.createElement("ul", {
    className: "works-grid works-grid-masonry works-grid-3 works-hover-d",
    id: "works-grid"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio1.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Corporate Identity"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio2.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Bag MockUp"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio3.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Disk Cover"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.htmll"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio4.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Business Card"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Photography")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio5.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Web Design"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Webdesign")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio6.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "New Product"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio7.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "New Product"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio9.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Bottle MockUp"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio10.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Personal Identity"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Photography")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration marketing"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio11.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Business Card"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Webdesign")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio8.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Paper Clip"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "module-small bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3 text-center"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-alt mb-20"
  }, "Let's work together"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-border-w",
    href: "contact3.html"
  }, "Contact Us"))))), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "news"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Latest blog posts"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."))), /* @__PURE__ */ React.createElement("div", {
    className: "row multi-columns-row post-columns"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "../assets/images/work-1.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Our trip to the Alps")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Mark Stone"), "\xA0| 23 November | 3 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/work-2.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Shore after the tide")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Andy River"), "\xA0| 11 November | 4 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/work-3.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "We in New Zealand")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Dylan Woods"), "\xA0| 5 November | 15 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "module-small bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "About Titan"), /* @__PURE__ */ React.createElement("p", null, "The languages only differ in their grammar, their pronunciation and their most common words."), /* @__PURE__ */ React.createElement("p", null, "Phone: +1 234 567 89 10"), "Fax: +1 234 567 89 10", /* @__PURE__ */ React.createElement("p", null, "Email:", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "somecompany@example.com")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Recent Comments"), /* @__PURE__ */ React.createElement("ul", {
    className: "icon-list"
  }, /* @__PURE__ */ React.createElement("li", null, "Maria on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Designer Desk Essentials")), /* @__PURE__ */ React.createElement("li", null, "John on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Realistic Business Card Mockup")), /* @__PURE__ */ React.createElement("li", null, "Andy on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Eco bag Mockup")), /* @__PURE__ */ React.createElement("li", null, "Jack on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Bottle Mockup")), /* @__PURE__ */ React.createElement("li", null, "Mark on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Our trip to the Alps"))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Blog Categories"), /* @__PURE__ */ React.createElement("ul", {
    className: "icon-list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Photography - 7")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Web Design - 3")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Illustration - 12")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Marketing - 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Wordpress - 16"))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Popular Posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "widget-posts"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-image"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/rp-1.jpg",
    alt: "Post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Designer Desk Essentials")), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-meta"
  }, "23 january"))), /* @__PURE__ */ React.createElement("li", {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-image"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/rp-2.jpg",
    alt: "Post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Realistic Business Card Mockup")), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-meta"
  }, "15 February"))))))))), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-d"
  }), /* @__PURE__ */ React.createElement("footer", {
    className: "footer bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "copyright font-alt"
  }, "\xA9 2017\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "index.html"
  }, "TitaN"), ", All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-social-links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-facebook"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-twitter"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-dribbble"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-skype"
  }))))))), /* @__PURE__ */ React.createElement("div", {
    className: "scroll-up"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-angle-double-up"
  }))))), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/jquery/dist/jquery.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/bootstrap/dist/js/bootstrap.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/wow/dist/wow.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/isotope/dist/isotope.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/imagesloaded/imagesloaded.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/flexslider/jquery.flexslider.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/owl.carousel/dist/owl.carousel.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/smoothscroll.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/js/plugins.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/js/main.js"
  }));
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineaverde\ahindex.tsx
var ahindex_exports = {};
__export(ahindex_exports, {
  default: () => ahindex_default,
  links: () => links5,
  meta: () => meta5
});

// app/routes/lineaverde/links.tsx
function links4() {
  return [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "./assets/images/favicons/apple-icon-57x57.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "./assets/images/favicons/apple-icon-60x60.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "./assets/images/favicons/apple-icon-72x72.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "./assets/images/favicons/apple-icon-76x76.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "./assets/images/favicons/apple-icon-114x114.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "./assets/images/favicons/apple-icon-120x120.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "./assets/images/favicons/apple-icon-144x144.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "./assets/images/favicons/apple-icon-152x152.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "./assets/images/favicons/android-icon-192x192.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./assets/images/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./assets/images/favicons/favicon-96x96.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./assets/images/favicons/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "manifest.json"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/bootstrap/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Volkhov:400i"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/animate.css/animate.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/components-font-awesome/css/font-awesome.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/et-line-font/et-line-font.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/flexslider/flexslider.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/owl.carousel/dist/assets/owl.carousel.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/magnific-popup/dist/magnific-popup.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/simple-text-rotator/simpletextrotator.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/css/style.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/css/colors/default.css"
    }
  ];
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineaverde\ahindex.tsx
var links5 = () => links4(), meta5 = () => ({
  title: "Linea Verde | ISE ltda",
  description: "This becomes the nice preview on search results."
});
function ahindex_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-loader"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }, "Loading...")), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-custom navbar-fixed-top navbar-transparent",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-header"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggle",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#custom-collapse"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "index.html"
  }, "Titan")), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "custom-collapse"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Home"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_video_background.html"
  }, "Default")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_op_fullscreen_gradient_overlay.html"
  }, "One Page")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_agency.html"
  }, "Agency")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_portfolio.html"
  }, "Portfolio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_restaurant.html"
  }, "Restaurant")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_finance.html"
  }, "Finance")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_landing.html"
  }, "Landing Page")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_photography.html"
  }, "Photography")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_shop.html"
  }, "Shop")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Headers"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Static Image Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_static.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_static.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Flexslider Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_flexslider.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_flexslider.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Video Background Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_video_background.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_video_background.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Text Rotator Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_text_rotator.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_text_rotator.html"
  }, "classNameic")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Gradient Overlay Header"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_fullscreen_gradient_overlay.html"
  }, "Fulscreen")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "index_mp_classNameic_gradient_overlay.html"
  }, "classNameic")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Pages"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "About"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about1.html"
  }, "About 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about2.html"
  }, "About 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about3.html"
  }, "About 3")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about4.html"
  }, "About 4")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "about5.html"
  }, "About 5")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Services"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service1.html"
  }, "Service 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service2.html"
  }, "Service 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "service3.html"
  }, "Service 3")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Pricing"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "pricing1.html"
  }, "Pricing 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "pricing2.html"
  }, "Pricing 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Gallery"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_4.html"
  }, "4 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "gallery_col_6.html"
  }, "6 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Contact"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact1.html"
  }, "Contact 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact2.html"
  }, "Contact 2")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "contact3.html"
  }, "Contact 3")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Restaurant menu"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "restaurant_menu1.html"
  }, "Menu 2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "restaurant_menu2.html"
  }, "Menu 3 Columns")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "login_register.html"
  }, "Login / Register")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "faq.html"
  }, "FAQ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "404.html"
  }, "Page 404")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Portfolio"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed - Gutter"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_boxed_gutter_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width - Gutter"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_full_width_gutter_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Masonry"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Boxed"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_boxed_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Full Width"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_masonry_full_width_col_4.html"
  }, "4 Columns")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Hover Style"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_hover_black.html"
  }, "Black")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_hover_gradient.html"
  }, "Gradient")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Single"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Image"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, "Style 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Slider"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.html"
  }, "Style 2")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Featured Video"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, "Style 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video2.html"
  }, "Style 2")))))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Blog"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Standard"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_standard_left_sidebar.html"
  }, "Left Sidebar")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_standard_right_sidebar.html"
  }, "Right Sidebar")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Grid"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Masonry"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_2.html"
  }, "2 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_3.html"
  }, "3 Columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_grid_masonry_col_4.html"
  }, "4 Columns")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Single"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_single_left_sidebar.html"
  }, "Left Sidebar")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "blog_single_right_sidebar.html"
  }, "Right Sidebar")))))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Features"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "alerts-and-wells.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-bolt"
  }), " Alerts and Wells")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "buttons.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link fa-sm"
  }), " Buttons")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "tabs_and_accordions.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-tasks"
  }), " Tabs & Accordions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "content_box.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-list-alt"
  }), " Contents Box")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "forms.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-check-square-o"
  }), " Forms")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "icons.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-star"
  }), " Icons")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "progress-bars.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-server"
  }), " Progress Bars")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "typography.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-font"
  }), " Typography")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Shop"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown"
  }, "Product"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_product_col_3.html"
  }, "3 columns")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_product_col_4.html"
  }, "4 columns")))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_single_product.html"
  }, "Single Product")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "shop_checkout.html"
  }, "Checkout")))), /* @__PURE__ */ React.createElement("li", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "dropdown-toggle",
    href: "documentation.html",
    "data-toggle": "dropdown"
  }, "Documentation"), /* @__PURE__ */ React.createElement("ul", {
    className: "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#contact"
  }, "Contact Form")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#reservation"
  }, "Reservation Form")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#mailchimp"
  }, "Mailchimp")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#gmap"
  }, "Google Map")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#plugin"
  }, "Plugins")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "documentation.html#changelog"
  }, "Changelog")))))))), /* @__PURE__ */ React.createElement("section", {
    className: "home-section bg-dark-60 portfolio-page-header parallax-bg",
    id: "home",
    "data-background": "./assets/images/portfolio/portfolio_header_bg.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titan-caption"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "caption-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-30 titan-title-size-1"
  }, "Hello & welcome"), /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-40 titan-title-size-4"
  }, "We are Titan"), /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll btn btn-border-w btn-round",
    href: "#portfolio"
  }, "Our Works")))), /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "portfolio"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "filter font-alt",
    id: "filters"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "current wow fadeInUp",
    href: "#",
    "data-filter": "*"
  }, "All")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".illustration",
    "data-wow-delay": "0.2s"
  }, "Illustration")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".marketing",
    "data-wow-delay": "0.4s"
  }, "Marketing")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".photography",
    "data-wow-delay": "0.6s"
  }, "Photography")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "wow fadeInUp",
    href: "#",
    "data-filter": ".webdesign",
    "data-wow-delay": "0.6s"
  }, "Web Design"))))), /* @__PURE__ */ React.createElement("ul", {
    className: "works-grid works-grid-masonry works-grid-3 works-hover-d",
    id: "works-grid"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio1.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Corporate Identity"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio2.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Bag MockUp"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio3.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Disk Cover"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.htmll"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio4.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Business Card"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Photography")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio5.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Web Design"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Webdesign")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio6.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "New Product"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio7.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "New Product"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item marketing"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio9.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Bottle MockUp"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Marketing")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration photography"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_slider2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio10.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Personal Identity"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Photography")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration marketing"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_video1.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio11.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Business Card"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Webdesign")))), /* @__PURE__ */ React.createElement("li", {
    className: "work-item illustration webdesign"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "portfolio_single_featured_image2.html"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "work-image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/portfolio/masonry-portfolio8.jpg",
    alt: "Portfolio Item"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "work-caption font-alt"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "work-title"
  }, "Paper Clip"), /* @__PURE__ */ React.createElement("div", {
    className: "work-descr"
  }, "Illustration"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "module-small bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3 text-center"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-alt mb-20"
  }, "Let's work together"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-border-w",
    href: "contact3.html"
  }, "Contact Us"))))), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "news"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Latest blog posts"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."))), /* @__PURE__ */ React.createElement("div", {
    className: "row multi-columns-row post-columns"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "../assets/images/work-1.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Our trip to the Alps")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Mark Stone"), "\xA0| 23 November | 3 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/work-2.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Shore after the tide")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Andy River"), "\xA0| 11 November | 4 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-md-4 col-lg-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post mb-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-thumbnail"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/work-3.jpg",
    alt: "Blog-post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "post-header font-alt"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "post-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "We in New Zealand")), /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, "By\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Dylan Woods"), "\xA0| 5 November | 15 Comments")), /* @__PURE__ */ React.createElement("div", {
    className: "post-entry"
  }, /* @__PURE__ */ React.createElement("p", null, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.")), /* @__PURE__ */ React.createElement("div", {
    className: "post-more"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "more-link",
    href: "#"
  }, "Read more"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "module-small bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "About Titan"), /* @__PURE__ */ React.createElement("p", null, "The languages only differ in their grammar, their pronunciation and their most common words."), /* @__PURE__ */ React.createElement("p", null, "Phone: +1 234 567 89 10"), "Fax: +1 234 567 89 10", /* @__PURE__ */ React.createElement("p", null, "Email:", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "somecompany@example.com")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Recent Comments"), /* @__PURE__ */ React.createElement("ul", {
    className: "icon-list"
  }, /* @__PURE__ */ React.createElement("li", null, "Maria on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Designer Desk Essentials")), /* @__PURE__ */ React.createElement("li", null, "John on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Realistic Business Card Mockup")), /* @__PURE__ */ React.createElement("li", null, "Andy on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Eco bag Mockup")), /* @__PURE__ */ React.createElement("li", null, "Jack on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Bottle Mockup")), /* @__PURE__ */ React.createElement("li", null, "Mark on ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Our trip to the Alps"))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Blog Categories"), /* @__PURE__ */ React.createElement("ul", {
    className: "icon-list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Photography - 7")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Web Design - 3")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Illustration - 12")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Marketing - 1")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Wordpress - 16"))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "widget-title font-alt"
  }, "Popular Posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "widget-posts"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-image"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/rp-1.jpg",
    alt: "Post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Designer Desk Essentials")), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-meta"
  }, "23 january"))), /* @__PURE__ */ React.createElement("li", {
    className: "clearfix"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-image"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./assets/images/rp-2.jpg",
    alt: "Post Thumbnail"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-title"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Realistic Business Card Mockup")), /* @__PURE__ */ React.createElement("div", {
    className: "widget-posts-meta"
  }, "15 February"))))))))), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-d"
  }), /* @__PURE__ */ React.createElement("footer", {
    className: "footer bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "copyright font-alt"
  }, "\xA9 2017\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "index.html"
  }, "TitaN"), ", All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-social-links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-facebook"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-twitter"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-dribbble"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-skype"
  }))))))), /* @__PURE__ */ React.createElement("div", {
    className: "scroll-up"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-angle-double-up"
  }))))), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/jquery/dist/jquery.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/bootstrap/dist/js/bootstrap.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/wow/dist/wow.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/isotope/dist/isotope.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/imagesloaded/imagesloaded.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/flexslider/jquery.flexslider.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/owl.carousel/dist/owl.carousel.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/smoothscroll.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/js/plugins.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "./assets/js/main.js"
  }));
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\lineaverde\links.tsx
var links_exports2 = {};
__export(links_exports2, {
  default: () => links6
});
function links6() {
  return [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "./assets/images/favicons/apple-icon-57x57.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "./assets/images/favicons/apple-icon-60x60.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "./assets/images/favicons/apple-icon-72x72.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "./assets/images/favicons/apple-icon-76x76.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "./assets/images/favicons/apple-icon-114x114.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "./assets/images/favicons/apple-icon-120x120.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "./assets/images/favicons/apple-icon-144x144.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "./assets/images/favicons/apple-icon-152x152.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "./assets/images/favicons/android-icon-192x192.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./assets/images/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./assets/images/favicons/favicon-96x96.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./assets/images/favicons/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "manifest.json"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/bootstrap/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Volkhov:400i"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/animate.css/animate.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/components-font-awesome/css/font-awesome.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/et-line-font/et-line-font.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/flexslider/flexslider.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/owl.carousel/dist/assets/owl.carousel.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/magnific-popup/dist/magnific-popup.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/lib/simple-text-rotator/simpletextrotator.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/css/style.css"
    },
    {
      rel: "stylesheet",
      href: "./assets/css/colors/default.css"
    }
  ];
}

// route:F:\Ferro\Projects\remix-tsc\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  links: () => links7,
  meta: () => meta6
});
var import_react4 = require("@remix-run/react");
var meta6 = () => ({
  title: "ISE ltda | Importaciones",
  description: "This becomes the nice preview on search results."
}), links7 = () => links2();
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-loader"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }, "Loading...")), /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-custom navbar-transparent navbar-fixed-top one-page",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-header"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggle",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#custom-collapse"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "icon-bar"
  })), /* @__PURE__ */ React.createElement(import_react4.Link, {
    className: "navbar-brand",
    to: "/"
  }, "ISE LTDA.")), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "custom-collapse"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, "Inicio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#about"
  }, "Nosotros")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#products"
  }, "Lineas")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll",
    href: "#contact"
  }, "Contacto")))))), /* @__PURE__ */ React.createElement("section", {
    className: "home-section home-full-height bg-dark bg-gradient",
    id: "home",
    "data-background": "./assets/images/section-10.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titan-caption"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "caption-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-30 titan-title-size-1"
  }, /* @__PURE__ */ React.createElement("img", {
    width: "450",
    height: "284",
    src: "./assets/images/logo.png",
    "data-src": "./assets/images/logo.png",
    className: "attachment-large size-large lazy loaded",
    alt: "",
    loading: "lazy",
    "data-was-processed": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "font-alt mb-40 titan-title-size-2"
  }, "IMPORTACIONES SALUD & ENTRETENIMIENTO"), /* @__PURE__ */ React.createElement("a", {
    className: "section-scroll btn btn-border-w btn-round",
    href: "#"
  }, "Conozca mas sobre nosotros")))), /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "module pt-0 pb-0",
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row position-relative m-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-6 side-image",
    "data-background": "./assets/images/section-14.jpg"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-6 col-md-offset-6 side-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt align-left"
  }, "Nosotros"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif align-left"
  }, "ISE LTDA. es una de la Empresas referentes en el \xE1mbito Tecnol\xF3gico de Software en el Pa\xEDs."), /* @__PURE__ */ React.createElement("p", null, "Somos una empresa comercial, la cual se dedica a la implementaci\xF3n, distribuci\xF3n y administraci\xF3n de una cartera diversa de productos de Software y Hardware, que se encarga de implementar proyectos a nivel Nacional, asegurando calidad y excelencia en cada uno de nuestros servicios."), /* @__PURE__ */ React.createElement("p", null, "Buscamos fomentar la Industria de la Tecnolog\xEDa, asesorando a nuestro clientes, en la selecci\xF3n de los mejores Partners e Integradores de soluciones para la gesti\xF3n de sus proyectos tecnol\xF3gicos, con el fin de satisfacer las necesidades y brindar soluciones completas de alto valor."), /* @__PURE__ */ React.createElement("p", null, "Con foco en el licenciamiento de software y su ciclo de vida. ISE LTDA. es pionera en la atenci\xF3n personalizada a nuestros clientes."), /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt align-left pt-50"
  }, "VISI\xD3N"), /* @__PURE__ */ React.createElement("p", null, "Ser una empresa innovadora que, mediante una amplia gama de productos de alta calidad y prestigio, compa\xF1ados de una excelente actitud de servicio, logre satisfacer las necesidades de sus clientes y posicionarse como un referente en la industria tecnol\xF3gica")))))), /* @__PURE__ */ React.createElement("section", {
    className: "module bg-dark-60",
    "data-background": "./assets/images/section-6.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "video-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "video-box-icon"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "video-pop-up",
    href: "https://www.youtube.com/watch?v=TTxZj3DZiIM"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-video"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "video-title font-alt"
  }, "Presentacion"), /* @__PURE__ */ React.createElement("div", {
    className: "video-subtitle font-alt"
  }, "Mira el video de nuestros productos")))))), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-w"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "products"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Nuestras Lineas"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."))), /* @__PURE__ */ React.createElement("div", {
    className: "row landing-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-push-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "center-block",
    src: "./assets/images/logos-hojas.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-pull-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-alt"
  }, "SALUD Y BIENESTAR"), /* @__PURE__ */ React.createElement("p", null, "Productos para salud."), /* @__PURE__ */ React.createElement(import_react4.Link, {
    className: "btn btn-border-d btn-circle",
    to: "/lineaverde/"
  }, "CONOCER MAS"))), /* @__PURE__ */ React.createElement("div", {
    className: "row landing-image-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "center-block",
    src: "./assets/images/logos-globe.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-alt"
  }, "SOFTWARE Y TECNOLOGIA"), /* @__PURE__ */ React.createElement("p", null, "Para ti y tu empresa"), /* @__PURE__ */ React.createElement(import_react4.Link, {
    className: "btn btn-border-d btn-circle",
    to: "/lineasoftware/"
  }, "CONOCER MAS"))))), /* @__PURE__ */ React.createElement("section", {
    className: "module bg-dark-60 pt-0 pb-0 parallax-bg testimonial",
    "data-background": "./assets/images/testimonial_bg.jpg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonials-slider pt-140 pb-140"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "slides"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Jack Woods"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO"))))))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Jim Stone"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO"))))))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "module-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-quote"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, /* @__PURE__ */ React.createElement("blockquote", {
    className: "testimonial-text font-alt"
  }, "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4 col-sm-offset-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-caption font-alt"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-title"
  }, "Adele Snow"), /* @__PURE__ */ React.createElement("div", {
    className: "testimonial-descr"
  }, "SomeCompany INC, CEO")))))))))), /* @__PURE__ */ React.createElement("section", {
    className: "module",
    id: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6 col-sm-offset-3"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "module-title font-alt"
  }, "Contactanos"), /* @__PURE__ */ React.createElement("div", {
    className: "module-subtitle font-serif"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-8"
  }, /* @__PURE__ */ React.createElement("form", {
    id: "contactForm",
    role: "form",
    method: "post",
    action: "php/contact.php"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "sr-only",
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Tu Nombre*",
    required: !0,
    "data-validation-required-message": "Please enter your name."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "sr-only",
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Tu correo electronico*",
    required: !0,
    "data-validation-required-message": "Please enter your email address."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    rows: 7,
    id: "message",
    name: "message",
    placeholder: "Tu mensaje*",
    required: !0,
    "data-validation-required-message": "Please enter your message."
  }), /* @__PURE__ */ React.createElement("p", {
    className: "help-block text-danger"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-block btn-round btn-d",
    id: "cfsubmit",
    type: "submit"
  }, "Enviar"))), /* @__PURE__ */ React.createElement("div", {
    className: "ajax-response font-alt",
    id: "contactFormResponse"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-item mt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-megaphone"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "alt-features-title font-alt"
  }, "Donde nos encuentras"), "ISE ltda.", /* @__PURE__ */ React.createElement("br", null), "Calle Misael Saracho Nro. 1184", /* @__PURE__ */ React.createElement("br", null), "La Paz, Bolivia"), /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-item mt-xs-60"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "alt-features-icon"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon-map"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "alt-features-title font-alt"
  }, "Dudas?"), "Email: somecompany@example.com", /* @__PURE__ */ React.createElement("br", null), "Phone: +1 234 567 89 10"))))), /* @__PURE__ */ React.createElement("section", {
    id: "map-section"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.3661661900794!2d-68.12282491699169!3d-16.50262294058292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21bd3024f007%3A0x2a74f58e90d5e125!2sTITIRILANDIA!5e0!3m2!1ses!2sbo!4v1658423715443!5m2!1ses!2sbo",
    width: "100%",
    height: "450",
    style: { border: 0 },
    allowFullScreen: !0,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })), /* @__PURE__ */ React.createElement("hr", {
    className: "divider-d"
  }), /* @__PURE__ */ React.createElement("footer", {
    className: "footer bg-dark"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "copyright font-alt"
  }, "\xA9 2022\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.comtech.com.bo"
  }, "ComTech"), ", All Rights Reserved")), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-social-links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-facebook"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-twitter"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-dribbble"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-skype"
  })))))))), /* @__PURE__ */ React.createElement("div", {
    className: "scroll-up"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#totop"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-angle-double-up"
  })))), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/jquery/dist/jquery.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/bootstrap/dist/js/bootstrap.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/wow/dist/wow.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/isotope/dist/isotope.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/imagesloaded/imagesloaded.pkgd.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/flexslider/jquery.flexslider.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/owl.carousel/dist/owl.carousel.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/smoothscroll.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/magnific-popup/dist/jquery.magnific-popup.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/js/plugins.js"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "assets/js/main.js"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1fed2283", entry: { module: "/build/entry.client-LN4NU6PM.js", imports: ["/build/_shared/chunk-3GXB2IDM.js", "/build/_shared/chunk-DNEVBLEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R2SZBHFB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GQXYYKB7.js", imports: ["/build/_shared/chunk-524IMSUG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lineatecnologica/index": { id: "routes/lineatecnologica/index", parentId: "root", path: "lineatecnologica", index: !0, caseSensitive: void 0, module: "/build/routes/lineatecnologica/index-DAMN4YSW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lineatecnologica/links": { id: "routes/lineatecnologica/links", parentId: "root", path: "lineatecnologica/links", index: void 0, caseSensitive: void 0, module: "/build/routes/lineatecnologica/links-ZABAS7VL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lineaverde": { id: "routes/lineaverde", parentId: "root", path: "lineaverde", index: void 0, caseSensitive: void 0, module: "/build/routes/lineaverde-U7EBX5IA.js", imports: ["/build/_shared/chunk-524IMSUG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lineaverde/ahindex": { id: "routes/lineaverde/ahindex", parentId: "routes/lineaverde", path: "ahindex", index: void 0, caseSensitive: void 0, module: "/build/routes/lineaverde/ahindex-NP4DKWN5.js", imports: ["/build/_shared/chunk-XN53ILCM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lineaverde/links": { id: "routes/lineaverde/links", parentId: "routes/lineaverde", path: "links", index: void 0, caseSensitive: void 0, module: "/build/routes/lineaverde/links-362YSNRO.js", imports: ["/build/_shared/chunk-XN53ILCM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1FED2283.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/lineatecnologica/index": {
    id: "routes/lineatecnologica/index",
    parentId: "root",
    path: "lineatecnologica",
    index: !0,
    caseSensitive: void 0,
    module: lineatecnologica_exports
  },
  "routes/lineatecnologica/links": {
    id: "routes/lineatecnologica/links",
    parentId: "root",
    path: "lineatecnologica/links",
    index: void 0,
    caseSensitive: void 0,
    module: links_exports
  },
  "routes/lineaverde": {
    id: "routes/lineaverde",
    parentId: "root",
    path: "lineaverde",
    index: void 0,
    caseSensitive: void 0,
    module: lineaverde_exports
  },
  "routes/lineaverde/ahindex": {
    id: "routes/lineaverde/ahindex",
    parentId: "routes/lineaverde",
    path: "ahindex",
    index: void 0,
    caseSensitive: void 0,
    module: ahindex_exports
  },
  "routes/lineaverde/links": {
    id: "routes/lineaverde/links",
    parentId: "routes/lineaverde",
    path: "links",
    index: void 0,
    caseSensitive: void 0,
    module: links_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
