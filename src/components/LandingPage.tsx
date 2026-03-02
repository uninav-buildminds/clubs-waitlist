import HeroSection from './HeroSection'
import StudentSection from './StudentSection'
import OrganizerSection from './OrganizerSection'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StudentSection />
      <OrganizerSection />
      <Footer />
    </main>
  )
}
