import { useState, type FormEvent } from 'react'
import {
  chipTech,
  chipCreative,
  chipSports,
  chipFaith,
  chipDance,
} from '../assets'
import { submitWaitlist } from '../submitWaitlist'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await submitWaitlist('general', { email })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-sky to-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
        {/* ── Left column: copy + form ── */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find your next{' '}
            <span className="text-royal">campus crew</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl">
            UniNav Club Discovery helps you discover clubs, communities, and
            teams across campus in one clean feed.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="you@university.edu"
              className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-royal focus:ring-2 focus:ring-royal/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="cursor-pointer rounded-xl bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-royal-dark hover:shadow-lg disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-sm font-medium text-green-600">
              You're on the list! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm font-medium text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-4 text-sm text-gray-400">
            No spam. We'll only email you about the launch and early access.
          </p>
        </div>

        {/* ── Right column: hero visual ── */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Radial glow behind phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-royal/10 blur-3xl" />
          </div>

          {/* SVG connecting lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* top-left chip → center */}
            <path
              d="M100 120 Q200 180 250 220"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* top-right chip → center */}
            <path
              d="M400 100 Q320 170 270 220"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* mid-left chip → center */}
            <path
              d="M60 300 Q160 280 230 260"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* mid-right chip → center */}
            <path
              d="M440 320 Q350 290 280 260"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* bottom-center chip → center */}
            <path
              d="M250 420 Q255 360 255 300"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1246ff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1246ff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* Phone mockup placeholder – swap with real heroPhone import */}
          <div className="relative z-10 flex h-[340px] w-[170px] items-center justify-center rounded-3xl border-2 border-royal/20 bg-white shadow-2xl sm:h-[400px] sm:w-[200px]">
            <span className="px-3 text-center text-xs text-gray-400">
              Phone mockup
              <br />
              (add hero-phone.png)
            </span>
          </div>

          {/* Floating chips */}
          <img
            src={chipTech}
            alt="Tech clubs"
            className="animate-float-slow absolute top-4 left-2 z-20 w-20 sm:top-2 sm:left-8 sm:w-24"
          />
          <img
            src={chipCreative}
            alt="Creative clubs"
            className="animate-float-medium absolute top-2 right-4 z-20 w-20 sm:top-0 sm:right-8 sm:w-24"
            style={{ animationDelay: '0.5s' }}
          />
          <img
            src={chipSports}
            alt="Sports clubs"
            className="animate-float-fast absolute bottom-24 left-0 z-20 w-20 sm:left-4 sm:w-24"
            style={{ animationDelay: '1s' }}
          />
          <img
            src={chipFaith}
            alt="Faith & service clubs"
            className="animate-float-medium absolute right-0 bottom-28 z-20 w-20 sm:right-4 sm:w-24"
            style={{ animationDelay: '1.5s' }}
          />
          <img
            src={chipDance}
            alt="Dance clubs"
            className="animate-float-slow absolute bottom-2 left-1/2 z-20 w-20 -translate-x-1/2 sm:w-24"
            style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>
    </section>
  )
}
