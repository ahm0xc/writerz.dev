import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields<string> = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

// export const Doc = defineDocumentType(() => ({
//   name: "Doc",
//   filePathPattern: `docs/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//     published: {
//       type: "boolean",
//       default: true,
//     },
//   },
//   computedFields,
// }))

// export const Guide = defineDocumentType(() => ({
//   name: "Guide",
//   filePathPattern: `guides/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//     date: {
//       type: "date",
//       required: true,
//     },
//     published: {
//       type: "boolean",
//       default: true,
//     },
//     featured: {
//       type: "boolean",
//       default: false,
//     },
//   },
//   computedFields,
// }))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    // authors: {
    //   // Reference types are not embedded.
    //   // Until this is fixed, we can use a simple list.
    //   // type: "reference",
    //   // of: Author,
    //   type: "list",
    //   of: { type: "string" },
    //   required: true,
    // },
  },
  computedFields,
}));

// export const Author = defineDocumentType(() => ({
//   name: "Author",
//   filePathPattern: `authors/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//     avatar: {
//       type: "string",
//       required: true,
//     },
//     twitter: {
//       type: "string",
//       required: true,
//     },
//   },
//   computedFields,
// }))

// export const Page = defineDocumentType(() => ({
//   name: "Page",
//   filePathPattern: `pages/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//   },
//   computedFields,
// }))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        // @ts-expect-error untyped
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: { children: string | unknown[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: {
            properties: { className: string[] };
          }) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: {
            properties: { className: string[] };
          }) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
