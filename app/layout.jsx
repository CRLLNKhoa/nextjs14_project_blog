import Navbar from "@/components/layouts/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="font-sans selection:bg-sky-600 selection:text-white">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
