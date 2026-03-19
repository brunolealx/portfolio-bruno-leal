import "./globals.css"
import { Inter } from "next/font/google"
import CursorTrail from "./components/CursorTrail"  // ajuste o caminho se precisar

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bruno Leal",
  description: "Portfólio de Bruno Leal, desenvolvedor full stack com projetos web, sistemas e experiências interativas.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <CursorTrail /> {/* cursor sempre visível */}
      </body>
    </html>
  )
}
