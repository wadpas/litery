import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

const font = Inter({
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `${APP_NAME} | ${APP_DESCRIPTION}`,
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
