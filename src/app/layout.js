import { Dancing_Script, Great_Vibes, Roboto } from "next/font/google";
import "./globals.css";

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-greatvibes",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Wedding Invitation | Teh Ipi",
  description: "Wedding Invitation for Teh Ipi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="overflow-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body
        className={`${dancing.variable} ${greatVibes.variable} ${roboto.variable} antialiased bg-cream text-brown overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
