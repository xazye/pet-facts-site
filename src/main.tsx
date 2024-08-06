import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import '@mantine/core/styles.css';
import "./index.css";
import { Combobox, createTheme, MantineProvider, Skeleton, TextInput } from "@mantine/core";
import customColors from "./MantineCustomColors.tsx";

const theme = createTheme({

  colors: {
    ...customColors
  },
  components: {
    TextInput: TextInput.extend({
      // this feels so fucking wrong
      classNames: {
        input: "bg-background text-white focus:border-accent",
        wrapper: "outline-none border-none",
      },
    }),
    Combobox: Combobox.extend({
      classNames: {
        option: "rounded-none bg-background text-white hover:bg-accent hover:text-background border-b border-accent",
        dropdown: "bg-transparent border-none " ,

      },
    }),
    Skeleton: Skeleton.extend({
      classNames: {
        root: "before:bg-background after:bg-secondary ",
      },
    })
  },
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
