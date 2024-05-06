import "~/styles/globals.css";

import { Roboto as FontSans } from "next/font/google";
import LogLib from "@loglib/tracker/react";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/providers/theme-provider";

const sans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Writerz",
    template: "%s | Writerz",
  },
  description: "Writerz",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sans.variable,
        )}
      >
        <LogLib
          config={{
            id: "writerz",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
