import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { FloatingShapes } from "@/components/floating-shapes";
import Header from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { shadesOfPurple } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picxel-AI",
  description: "AI Image Editor",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
            appearance={{
              baseTheme: shadesOfPurple,
            }}
          >
            <ConvexClientProvider>
              <Header />
              <main className="bg- min-h-screen text-white overflow-x-hidden">
                <FloatingShapes />
                <Toaster richColors />
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
