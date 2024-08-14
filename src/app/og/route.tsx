import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  // const font = fetch(
  //   new URL("../../../../public/satoshi.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());
  // const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${baseUrl}/og-bg.png)`,
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            // fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            width: 80,
            height: 80,
            borderRadius: "100vmax",
            position: "absolute",
            bottom: 50,
            left: 50,
            border: "1px solid rgba(255,255,255,0.4)",
          }}
          src={`${baseUrl}/pfp.png`}
          alt=""
        />
        <p
          style={{
            position: "absolute",
            bottom: 50,
            left: 150,
            fontSize: 40,
            color: "white",
          }}
        >
          @ahm0xc
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      // fonts: [
      //   {
      //     name: "satoshi",
      //     data: fontData,
      //     style: "normal",
      //   },
      // ],
    },
  );
}

// import { ImageResponse } from "@vercel/og";
// import type { NextRequest } from "next/server";

// // export const runtime = "edge";

// export async function GET(req: NextRequest) {
//   // const { searchParams } = req.nextUrl;
//   // const title = searchParams.get("title");
//   // const font = fetch(
//   //   new URL("../../../../public/satoshi.ttf", import.meta.url),
//   // ).then((res) => res.arrayBuffer());
//   // const fontData = await font;

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           height: "100%",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#fff",
//           fontSize: 32,
//           fontWeight: 600,
//         }}
//       >
//         <svg
//           width="75"
//           viewBox="0 0 75 65"
//           fill="#000"
//           style={{ margin: "0 75px" }}
//         >
//           <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
//         </svg>
//         <div style={{ marginTop: 40 }}>Hello, World</div>
//       </div>
//     ),
//     // <div
//     //   style={{
//     //     height: "100%",
//     //     width: "100%",
//     //     display: "flex",
//     //     flexDirection: "column",
//     //     alignItems: "flex-start",
//     //     justifyContent: "center",
//     //     backgroundImage: "url(http://localhost:3000/og-background.png)",
//     //   }}
//     // >
//     //   <div
//     //     style={{
//     //       marginLeft: 190,
//     //       marginRight: 190,
//     //       display: "flex",
//     //       fontSize: 130,
//     //       // fontFamily: "satoshi",
//     //       letterSpacing: "-0.05em",
//     //       fontStyle: "normal",
//     //       color: "white",
//     //       lineHeight: "120px",
//     //       whiteSpace: "pre-wrap",
//     //     }}
//     //   >
//     //     {title}
//     //   </div>
//     // </div>
//     {
//       width: 1920,
//       height: 1080,
//       fonts: [
//         // {
//         //   name: "satoshi",
//         //   data: fontData,
//         //   style: "normal",
//         // },
//       ],
//     },
//   );
// }
