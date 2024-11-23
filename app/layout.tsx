import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Supabase Next Auth",
  description: "Authentication Management System using Supabase and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main className="h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
