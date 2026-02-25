import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  const whatsappUrl = 'https://wa.me/923000000000'

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M20.5 3.5A11.76 11.76 0 0 0 12.07.02C5.5.02.15 5.37.15 11.94c0 2.1.55 4.16 1.59 5.98L.02 24l6.25-1.64a11.86 11.86 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.2-3.5-8.42Zm-8.43 18.33h-.01a9.82 9.82 0 0 1-5-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.84 9.84 0 0 1-1.51-5.28c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.89 6.98c0 5.43-4.42 9.85-9.87 9.85Zm5.4-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.21 3.1.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  )
}
