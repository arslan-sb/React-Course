import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://www.arslanshaukat.online/",
    target: "_blank",
  },
  children: "Vist Portfolio",
};

const domElement = React.createElement("a",
   {
  href: "https://www.arslanshaukat.online/",
  target: "_blank",
  },
  'Visit me!'
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
 
  <App />


  </StrictMode>,
);
