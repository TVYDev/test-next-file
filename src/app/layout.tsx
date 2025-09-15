import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "File Upload App",
  description: "Simple file upload application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
