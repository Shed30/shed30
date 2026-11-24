import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shed30.com"),
  title: "Shed30 | Learning design, apps and websites, made to order",
  description:
    "Cheryl Tyler builds learning solutions, apps and websites to order, then makes sure your team can own them. Thirty years of learning design, based in Aotearoa New Zealand.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Shed30 | Thirty years of craft. A shed full of tools.",
    description:
      "Learning design, apps and websites, built to order and handed over so your team can own them.",
    url: "https://shed30.com",
    siteName: "Shed30",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Source+Sans+3:wght@400;600&family=Caveat:wght@500;600;700&display=swap"
        />
      </head>
      <body>
        {/* Filters that give icons and sketches a hand-drawn wobble */}
        <svg aria-hidden="true" width="0" height="0" className="absolute h-0 w-0 overflow-hidden">
          <defs>
            <filter id="nb-sketch-sm" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves={2} seed={4} result="n1" />
              <feDisplacementMap in="SourceGraphic" in2="n1" scale={1.8} xChannelSelector="R" yChannelSelector="G" result="d1" />
              <feTurbulence type="fractalNoise" baseFrequency="0.11" numOctaves={2} seed={11} result="n2" />
              <feDisplacementMap in="SourceGraphic" in2="n2" scale={2.6} xChannelSelector="G" yChannelSelector="R" result="d2" />
              <feOffset in="d2" dx={0.6} dy={0.5} result="o2" />
              <feComponentTransfer in="o2" result="f2">
                <feFuncA type="linear" slope={0.45} />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="f2" />
                <feMergeNode in="d1" />
              </feMerge>
            </filter>
            <filter id="nb-sketch-lg" x="-5%" y="-10%" width="110%" height="120%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves={2} seed={7} result="n1" />
              <feDisplacementMap in="SourceGraphic" in2="n1" scale={2.6} xChannelSelector="R" yChannelSelector="G" result="d1" />
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves={2} seed={19} result="n2" />
              <feDisplacementMap in="SourceGraphic" in2="n2" scale={3.4} xChannelSelector="G" yChannelSelector="R" result="d2" />
              <feOffset in="d2" dx={0.8} dy={0.6} result="o2" />
              <feComponentTransfer in="o2" result="f2">
                <feFuncA type="linear" slope={0.4} />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="f2" />
                <feMergeNode in="d1" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
