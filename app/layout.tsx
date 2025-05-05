import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knillv landing page",
  description: "The landing page of the POS Knillv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
