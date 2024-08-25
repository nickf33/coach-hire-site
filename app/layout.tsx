import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NavBar from "./_components/layout/navigation/NavBar";
import "./globals.css";

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
      <body className={poppins.className}>
        <NavBar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
