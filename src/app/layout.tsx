import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })

const siteUrl = "https://www.innosense.fr";
const siteImage = `${siteUrl}/images/avatar-bigjohn.png`;
const siteTitle = "INNOSENSE | Experte end Développement d'API, Application Web et Infrastructure Cloud";
const siteDescription = `Innovez avec confiance grâce à notre savoir-faire. Cultivez l'innovation grâce à notre expertise exceptionnelle en développement d'API, Application Web et mise en place d'infrastructure Cloud et DevOps. Nous transformons vos idées en réalité numérique.`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates : { 
    canonical: siteUrl
  },
  openGraph: {
    locale: "fr",
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Innovation Sense",
    images: siteImage

  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: siteImage
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${comfortaa.className} flex min-h-full flex-col`} >{children}</body>
    </html>
  )
}
