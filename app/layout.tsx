import './globals.css'
import { AuthProvider } from '../components/AuthProvider'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Inspire Wellness',
  description: 'Pinterest-style wellness community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="light">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}