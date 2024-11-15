import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
} from "@yext/search-headless-react";

const config: HeadlessConfig = {
  apiKey: "05e121f80eace90c5c9bafe245d20523",
  experienceKey: "generative-search",
  locale: "en",
  verticalKey: "knowledge-cards",
};
const searcher = provideHeadless(config);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </StrictMode>
);
