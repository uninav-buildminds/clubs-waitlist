import { useState, type FormEvent } from 'react'
import { illustOrganizer } from '../assets'
import { submitWaitlist } from '../submitWaitlist'

export default function OrganizerSection() {
  const [email, setEmail] = useState('')
  const [clubName, setClubName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await submitWaitlist('organizer', { email, clubName })
      setStatus('success')
      setEmail('')
      setClubName('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="organizers" className="bg-gradient-to-br from-royal to-royal-dark py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20">
        {/* Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            For club organizers who want the right members
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-blue-100">
            Stop spamming random group chats and hoping the right people see it.
            Club Discovery helps your club show up in front of students who
            actually care about what you do.
          </p>

          <ul className="mt-6 space-y-3 text-base text-blue-50">
            {[
              'Create a rich profile for your club and events',
              'Reach students by interest, not just by broadcast',
              'Get early access to tools for managing sign-ups',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="you@university.edu"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white shadow-sm outline-none backdrop-blur transition placeholder:text-blue-200 focus:border-white/50 focus:ring-2 focus:ring-white/30"
            />
            <input
              type="text"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              placeholder="Club or association name"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white shadow-sm outline-none backdrop-blur transition placeholder:text-blue-200 focus:border-white/50 focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full cursor-pointer rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-royal shadow-md transition hover:bg-blue-50 hover:shadow-lg disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? 'Joining...' : 'Join the organizer waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-sm font-medium text-green-300">
              You're on the list! We'll reach out with early access details.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm font-medium text-red-300">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Illustration */}
        <div className="flex flex-1 justify-center">
          <img
            src={illustOrganizer}
            alt="Club organizer managing members"
            className="w-64 drop-shadow-lg sm:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  )
}
