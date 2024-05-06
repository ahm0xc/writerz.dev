import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";

// Image metadata
export const alt = "";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slugAsParams === params.slug);
  // Font
  //   const satori = fetch(new URL("/satoshi.ttf", import.meta.url)).then((res) =>
  //     res.arrayBuffer(),
  //   );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          backgroundImage: "linear-gradient(to bottom right,#262626,#0a0a0a)",
        }}
      >
        <div
          style={{
            right: 50,
            bottom: 50,
            color: "gray",
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginLeft: 8,
              fontSize: 30,
            }}
          >
            by Ahmed
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 50,
            maxWidth: 900,
            width: "auto",
            textAlign: "left",
            lineHeight: 1.4,
          }}
        >
          {post?.title}
        </div>
      </div>
    ),

    //   <div
    //     tw="text-6xl relative [text-wrap:balance] font-bold text-white h-full w-full px-[100px] py-[200px] text-left items-center"
    //     style={{
    //       backgroundImage: "linear-gradient(to bottom right,#262626,#0a0a0a)",
    //     }}
    //   >
    //     {/* <div
    //       style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem" }}
    //     >
    //       hello
    //     </div> */}
    //     {post?.title}
    //   </div>
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    //   debug: true,
      //   fonts: [
      //     {
      //       name: "Satori",
      //       data: await satori,
      //       style: "normal",
      //       weight: 400,
      //     },
      //   ],
    },
  );
}
