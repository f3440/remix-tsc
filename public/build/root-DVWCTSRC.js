import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration
} from "/build/_shared/chunk-XIVLRSP7.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:F:\Ferro\Projects\remix-tsc\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/root_links.tsx
init_react();
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
      content: "assets/images/favicons/ms-icon-144x144.png"
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
      content: "assets/images/favicons/ms-icon-144x144.png"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    }
  ];
}

// app/root.tsx
var meta2 = meta();
var links2 = () => {
  return links();
};
function App() {
  let title = "Importadora | ISE ltda.";
  const setTitle = (data) => {
    title = data;
  };
  return /* @__PURE__ */ React.createElement(Document, {
    title
  }, /* @__PURE__ */ React.createElement(Outlet, null));
}
var Document = ({ children, title }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en-US",
  dir: "ltr"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement(Meta, null)), /* @__PURE__ */ React.createElement("body", {
  "data-spy": "scroll",
  "data-target": ".onpage-navigation",
  "data-offset": "60"
}, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
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
//# sourceMappingURL=/build/root-DVWCTSRC.js.map
