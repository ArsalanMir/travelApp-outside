import Layout from '../src/components/layout/Layout'
import '../src/app.css'

export const metadata = {
  title: 'North Grace Travellers',
  description: 'Travel website for North Grace Travellers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
