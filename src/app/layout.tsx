import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import '../shared/styles/main.sass'
import Header from "@/shared/components/header"
import QuickMenus from "@/shared/components/quick-menus"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Singh Noor",
  description: "Get new styles of T-shirts, Gatras and Bags"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactNode {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <main>
          {children}
        </main>
        <QuickMenus />
      </body>
    </html>
  )
}
