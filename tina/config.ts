import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Published Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: false,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "source",
            label: "Source",
            required: true,
          },
          {
            type: "string",
            name: "source_link",
            label: "Source URL",
            required: true,
          },
          {
            type: "image",
            name: "media",
            label: "Media",
            required: true,
          },
          {
            type: "string",
            name: "media_type",
            label: "Media Type",
            required: true,
          },
        ],
      },
    ],
  },
});
