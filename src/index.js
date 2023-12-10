import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Suspense } from "react";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
        "htmlTag",
      ],
      caches: ["cookie"],
    },

    fallbackLng: "en",

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2></h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
