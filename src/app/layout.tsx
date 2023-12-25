import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mythos Mart",
  description: "Treasures of Legends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        height: "100%",
      }}
    >
      <body
        className={inter.className}
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
