import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";
import customColors from "./MantineCustomColors.tsx";

const theme = createTheme({
  colors: {
    ...customColors
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      {/* <header className="min-h-[10dvh] max-w-[1080px] mx-auto bg-accent"></header> */}
      <App />
      {/* <footer className="min-h-[10dvh] max-w-[1080px] mx-auto bg-accent"></footer> */}
    </MantineProvider>
  </React.StrictMode>
);
