import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const loadTheme = () => {
  return new Promise((resolve) => {
    const theme = sessionStorage.getItem("elf-theme") || "light";
    import(`./themes/${theme}`);
    resolve(theme);
  });
};

loadTheme().then((theme) => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <App theme={theme} />
    </StrictMode>
  );
});
