import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/ReduxStore/appStore.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
