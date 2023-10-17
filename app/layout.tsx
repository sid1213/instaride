import type { Metadata } from "next";
import Providers from "@/slices/Providers";
import { Inter } from "next/font/google";
import "../style/index.scss";
import AntdStyledComponents from "@/components/AntdStyledComponents";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaRide",
  description: "instaride web app is use for rents bikes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <AntdStyledComponents>
          <Providers> {children}</Providers>
        </AntdStyledComponents>
      </body>
    </html>
  );
}
