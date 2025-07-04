// We're only using vite config to configure testing fwk (vitest).
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // ...
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-test.tsx",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname), // Map "@" to the root directory
    },
  },
})