import type { Metadata } from "next"
import { Outfit } from "next/font/google"
// import '../shared/styles/main.sass'
import Header from "@/shared/components/header"
import Footer from "@/shared/components/footer"

// eslint-disable-next-line import/no-extraneous-dependencies
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Singh Noor",
  description: "Get new styles of T-shirts, Gatras and Bags"
}

export default function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string };
}>): React.ReactNode {
  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
