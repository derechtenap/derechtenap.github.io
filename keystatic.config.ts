import { config, collection, fields } from '@keystatic/core';
import React from "react"

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
  ui: {
    // Brand icon and name for the `Keystatic` dashboard
    brand: {
      name: "Tim Deres",
      mark: () => {return React.createElement("img", { alt: "Logo", height: 24, src: "/favicon.png", })}
    }
  }
});
