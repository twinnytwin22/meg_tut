import Navbar from 'ui/Navbar'
import '../styles/globals.css'

export const metadata = {
  title: 'Meggy Meg',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
