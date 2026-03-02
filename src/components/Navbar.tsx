import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Students', href: '#students' },
  { label: 'Organizers', href: '#organizers' },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href)
        if (!el) return { href: item.href, top: 0 }
        return { href: item.href, top: el.getBoundingClientRect().top }
      })

      // Find the section closest to the top of the viewport (within 200px)
      let closest = sections[0]
      for (const s of sections) {
        if (s.top <= 200 && s.top > closest.top - 200) {
          closest = s
        }
      }
      setActive(closest.href)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 shadow-lg shadow-gray-900/5 backdrop-blur-xl'
          : 'bg-white/50 backdrop-blur-md'
      } rounded-full border border-gray-200/60 px-2 py-1.5`}
    >
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`relative block rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                active === item.href
                  ? 'bg-royal text-white shadow-sm shadow-royal/25'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
