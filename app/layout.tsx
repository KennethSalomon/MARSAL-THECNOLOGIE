import "./globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";

export const metadata = {
  title: 'Marsal Tech - Domotique Prestige',
  description: 'Systèmes d\'automatisation et de sécurité intelligent pour l\'habitat prestige',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
