import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channabasava Utk — AI/ML Student & Developer",
  description: "Personal portfolio of Channabasava Utk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
