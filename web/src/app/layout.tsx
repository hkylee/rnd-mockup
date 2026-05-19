import type { Metadata } from "next";
import "./globals.css";
import "../styles/tokens.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Genui",
  description: "Image → Figma component automator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="h-screen flex overflow-hidden bg-slate-50 text-slate-900">
        <Sidebar />
        <div className="flex-1 min-w-0 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
