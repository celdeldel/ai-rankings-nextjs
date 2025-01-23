import '../styles/globals.css'

export const metadata = {
  title: 'AI Rankings',
  description: 'Global AI Rankings Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}