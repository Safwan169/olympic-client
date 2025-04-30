import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import LiveChat from "./componants/common/LiveChat.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-gray-200 dark:bg-gray-800">
          <RouterProvider router={router} />
        </div>
        <LiveChat />
      </PersistGate>
      <Toaster richColors closeButton position="top-center" />
    </Provider>
  </StrictMode>
);
