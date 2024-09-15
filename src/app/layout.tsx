import { MantineProvider } from "@/client/libs/mantine-provider";
import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import "@mantine/core/styles.css";
import "@/client/styles/globals.scss";

export const metadata: Metadata = {
  title: "NextJS App",
  description: "NextJS App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
