// import type { MetaFunction } from "@remix-run/node";
// import {
//   Links,
//   LiveReload,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "New Remix App",
//   viewport: "width=device-width,initial-scale=1",
// });

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
} from "@remix-run/react";

import root_links from "./root_links";
import root_meta from "./root_meta";
import root_scripts from './root_scripts'

export const meta =  root_meta();
// export const links = root_links();
export const scripts = root_scripts()

export default function App() {
 
  return (
    <Document >
      <Outlet   />
    </Document>
  );
}

export const Document = ({ children, title}:{children:any; title?:string}) => (
  <html lang="en-US" dir="ltr">
    <head>
      <Links />
      <Meta />
    </head>
    <body data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
      
      {children}
      <Scripts />
      <ScrollRestoration />
      <LiveReload />
    </body>
  </html>
);

export function ErrorBoundary({ error }:{error:any}) {
  console.error(error);
  return (
    <html>
      <head>
        <title>There was an Error</title>
      </head>
      <body>{/* The error UI you want your users to see */}</body>
    </html>
  );
}
