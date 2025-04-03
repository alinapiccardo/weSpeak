import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-questrial",
});

export const metadata = {
  title: "WeSpeak Counter",
  description: "Technical test for WeSpeak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${questrial.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
