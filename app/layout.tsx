import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Supabase Next Auth",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
