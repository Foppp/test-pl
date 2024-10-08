import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mono from "@fontsource/pt-mono/index.css";

import tailwindStyleSheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: tailwindStyleSheetUrl },
  { rel: "stylesheet", as: "font", href: mono },
  { rel: "stylesheet", href: tailwindStyleSheetUrl },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
