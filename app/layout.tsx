import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ProStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <html lang="en">
        <head>
          {/* Balise de vérification Google */}
          <meta
            name="google-site-verification"
            content="xn60vRO8P-b7AnuJznUP9GVv7BeuJViTgF57b9AJ63w"
          />
        </head>
        <body className={`${inter.className} antialiased`}>
          {children}
          <WhatsappButton />
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  );
}
