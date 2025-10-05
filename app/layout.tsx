import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Balance Book - Your Personal Accountant",
  description: "Expert accounting and tax services for businesses in Tier 2 and Tier 3 cities across India. GST, ITR, bookkeeping, and financial consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
