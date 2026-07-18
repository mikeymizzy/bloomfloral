import type { Metadata } from "next";
import {
  Syne,
  Aladin,
  Marcellus,
} from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
// const big_shoulders = Big_Shoulders_Display({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--tp-ff-shoulders",
// });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "Majestic Florist | Bespoke Floral Decor & Event Styling in Johannesburg",
  description:
    "Luxury bespoke floral arrangements for weddings, corporate events, and celebrations in Johannesburg, South Africa. Expert event styling and floral design.",
  keywords: "florist, floral design, wedding flowers, event decor, Johannesburg, floral arrangements, corporate events",
  authors: [{ name: "Majestic Florist" }],
  openGraph: {
    title: "Majestic Florist | Bespoke Floral Decor & Event Styling",
    description: "Luxury bespoke floral arrangements for weddings, corporate events, and celebrations in Johannesburg.",
    type: "website",
    locale: "en_ZA",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="dark">
          <VideoProvider>
            {children}
          </VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

