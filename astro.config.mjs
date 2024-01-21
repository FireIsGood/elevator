import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [svelte()],
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/elevator",
});
