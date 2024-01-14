import { importShared } from './__federation_fn_import-5cd2b954.js';
import App, { j as jsxRuntimeExports } from './__federation_expose_App-c3844ef3.js';
import { r as reactDomExports } from './__federation_shared_react-dom-6fc2ee8d.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
