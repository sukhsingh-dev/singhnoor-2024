import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import Header from "@/shared/components/header"
import Footer from "@/shared/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { CartContextProvider } from "@/shared/components/context/CartContext"
import { ClerkProvider } from '@clerk/nextjs'
// import Image from "next/image"
import '@/shared/styles/main.sass'

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Singh Noor",
  description: "Get new styles of T-shirts, Gatras and Bags"
}

export default function LocaleLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactNode {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <CartContextProvider>
            <Header />
            <main>
              {children}
            </main>
            {/* <div className="loading-page">
              <div className="loading-overlay">
                <Image
                  alt="singhnoor logo"
                  src="/images/sn-logo.webp"
                  width={200}
                  height={63}
                  quality={100}
                />
              </div>
            </div> */}
            <Footer />
          </CartContextProvider>
          <SpeedInsights />
        </body>
        <Script src="/js/scroll-easing.js" />
      </html>
    </ClerkProvider>
  )
}
