import {
  links
} from "/build/_shared/chunk-M5U3KUK6.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration
} from "/build/_shared/chunk-RVDA6AHJ.js";
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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Outlet, null));
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
//# sourceMappingURL=/build/root-WGXRZKID.js.map
