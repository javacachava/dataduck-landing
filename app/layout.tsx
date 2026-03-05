import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DataDuck — Software empresarial desde El Salvador",
  description:
    "Diseñamos, desarrollamos y mantenemos software a medida para empresas: puntos de venta, administración, inventarios, gestión de personal y más. Santa Ana, El Salvador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
