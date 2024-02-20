import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dooogs",
  description: "A test app to create an interface with https://dog.ceo/api/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
