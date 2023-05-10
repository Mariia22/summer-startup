import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import { theme } from "./style/theme";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
