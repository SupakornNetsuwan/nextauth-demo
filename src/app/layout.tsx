import type { Metadata } from "next";
import SessionProvider from "@/core/providers/SessionProvider";
import "./globals.css";
import { Navbar } from "@/core/components/Navbar";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next Auth practice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
