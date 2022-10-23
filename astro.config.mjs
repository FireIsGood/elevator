import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress(),
  ],
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/elevator",
});
