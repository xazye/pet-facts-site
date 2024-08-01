import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import '@mantine/core/styles.css';
import { Input, MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      {/* <header className="min-h-[10dvh] max-w-[1080px] mx-auto bg-accent"></header> */}
      <App />
      {/* <footer className="min-h-[10dvh] max-w-[1080px] mx-auto bg-accent"></footer> */}
    </MantineProvider>
  </React.StrictMode>
);
