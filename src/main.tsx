import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import LikedPhotosProvider from "./providers/LikedPhotosProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LikedPhotosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LikedPhotosProvider>
  </StrictMode>
);
