import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maverick Tech | Engineering Projects, Business Websites & AI Tech Academy",
  description:
    "Maverick Tech delivers 100% verified working code for 1st-final year college projects, high-converting business websites with direct WhatsApp lead capture, 1-on-1 developer mentorship, and Google #1 SEO ranking architecture.",
  keywords: [
    "Maverick Tech",
    "maverick tech projects",
    "college projects 1st 2nd 3rd final year",
    "business website developer",
    "direct whatsapp lead capture",
    "learn web development easily",
    "google rank digital marketing",
    "student internships with LOR",
    "engineering capstone projects"
  ],
  authors: [{ name: "Maverick Tech" }],
  openGraph: {
    title: "Maverick Tech | Engineering Projects, Business Websites & AI Tech Academy",
    description: "Empowering students and businesses with 100% verified code, high-converting websites, and Google #1 search ranking.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Maverick Tech",
  "founder": {
    "@type": "Person",
    "name": "Sapna",
    "jobTitle": "Lead Software Engineer & Technical Mentor"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.98",
    "reviewCount": "350"
  },
  "serviceArea": "India",
  "telephone": "+919142479986",
  "email": "nexuslab27@gmail.com"
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full bg-black text-zinc-100 font-sans antialiased selection:bg-white/20 selection:text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
