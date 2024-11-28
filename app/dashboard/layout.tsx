import { GeistSans } from "geist/font/sans";
import "../../app/globals.css";
import Sidebar from "@/components/Dashboard/Sidebar";

// export const metadata = {
//     title: "Supabase Next Auth",
//     description: "Authentication Management System using Supabase and Next.js",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body>

                <div className="flex  h-screen bg-gray-700 text-gray-500">
                    <Sidebar />
                    <div className="w-full">
                        {children}
                    </div>
                </div>

            </body>
        </html>
    );
}
