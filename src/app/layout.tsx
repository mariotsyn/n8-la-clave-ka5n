import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Clave | Bar & Restaurante en Ayora",
  description: "Descubre La Clave, el punto de encuentro en Ayora. Cocina tradicional, vinos selectos y el mejor ambiente en la Calle Empedra, 5.",
  openGraph: {
    title: "La Clave | Bar & Restaurante",
    description: "Cocina tradicional y ambiente único en Ayora",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
