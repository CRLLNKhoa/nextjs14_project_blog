"use client";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        suppressHydrationWarning
        lang="en"
      >
        <body className="font-sans selection:bg-sky-600 selection:text-white">
          <Providers>
            <Navbar id="some-element" />
            {children}
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
