import { createRoot } from "react-dom/client";
import { App } from "./App";
import { RecContextProvider } from "./recContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <RecContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecContextProvider>
);
