import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import NavBar from "./_components/layout/navigation/NavBar";
import "./globals.css";
import Analytics from "./_components/layout/Analytics";
import CookieBanner from "./_components/layout/gdpr/CookieBanner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Exeter Coach Travel",
  description: "Reliable Quality Coach & Mini Bus Travel in Exeter & Devon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics GA_MEASUREMENT_ID="G-BM9V180KYZ" />
      <body className={poppins.className}>
        <NavBar />
        <main className="">
          {children}
          <CookieBanner />
          <Script
            src="https://code.tidio.co/irz5ndxkje14yaxlosvwdgkoel1jt9vu.js"
            strategy="afterInteractive"
          />
        </main>
      </body>
    </html>
  );
}
