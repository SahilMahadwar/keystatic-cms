// keystatic.config.ts
import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      name: "astro-blog",
      owner: "SahilMahadwar",
    },
    branchPrefix: "content/",
  },
  collections: {
    posts: collection({
      label: "blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        pubDate: fields.date({ label: "PubDate" }),

        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
