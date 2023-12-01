import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BROFLIX",
  description: "Watch Movies, Fitness Content, Anime & Everything In-Between",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "none",
                padding: "4px 10px",
                color: "black",
                backgroundColor: "#f8f8ff",
              },
            }}
          />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
