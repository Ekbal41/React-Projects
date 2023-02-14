import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainTheme from "./theme/MainTheme";
import CalContext from "./context/CalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CalContext>
    <ChakraProvider theme={MainTheme}>
      <App />
    </ChakraProvider>
  </CalContext>
);
