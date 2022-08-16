import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-3GXB2IDM.js";
import {
  links
} from "/build/_shared/chunk-524IMSUG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:F:\Ferro\Projects\remix-tsc\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/root_meta.tsx
init_react();
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
init_react();
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

// app/root.tsx
var meta2 = meta();
var links2 = links();
var scripts2 = scripts();
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
var Document = ({ children, title }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en-US",
  dir: "ltr"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement(Meta, null)), /* @__PURE__ */ React.createElement("body", {
  "data-spy": "scroll",
  "data-target": ".onpage-navigation",
  "data-offset": "60"
}, children, /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "There was an Error")), /* @__PURE__ */ React.createElement("body", null));
}
export {
  ErrorBoundary,
  App as default,
  links2 as links,
  meta2 as meta
};
//# sourceMappingURL=/build/root-DWUHOPME.js.map
