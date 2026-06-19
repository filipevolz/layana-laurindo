import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import {
  landingPages,
} from '@/lib/landing-pages'
import { HomePage } from '@/pages/HomePage'
import { LandingPageView } from '@/pages/LandingPageView'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {landingPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<LandingPageView page={page} />}
          />
        ))}
        <Route
          path="*"
          element={
            <div className="section-padding container-narrow pt-32 text-center">
              <h1 className="text-section-title font-display mb-4 font-bold text-brand">
                Página não encontrada
              </h1>
              <p className="text-muted-foreground">
                <a href="/" className="text-brand hover:underline">
                  Voltar ao início
                </a>
              </p>
            </div>
          }
        />
      </Routes>
    </AppLayout>
  )
}

export default App
