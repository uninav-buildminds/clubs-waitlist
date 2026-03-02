import { useState, type FormEvent } from 'react'
import { illustStudent } from '../assets'
import { submitWaitlist } from '../submitWaitlist'

export default function StudentSection() {
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await submitWaitlist('student', { email, interests: interests || undefined })
      setStatus('success')
      setEmail('')
      setInterests('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="students" className="bg-sky-50 py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20">
        {/* Illustration */}
        <div className="flex flex-1 justify-center">
          <img
            src={illustStudent}
            alt="Student discovering clubs"
            className="w-64 drop-shadow-lg sm:w-80 lg:w-96"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            For students who want more than lectures
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
            Campus is full of tech circles, creative crews, sports teams, and
            study groups you'd actually enjoy — you just don't see them all in
            one place. Club Discovery pulls them into a single feed.
          </p>

          <ul className="mt-6 space-y-3 text-base text-gray-700">
            {[
              'Discover clubs that match your interests and schedule',
              "See what's happening this week, not last month",
              'Join waitlists or request to join in a few taps',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-royal">&#10003;</span>
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
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-royal focus:ring-2 focus:ring-royal/30"
            />
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="What kinds of clubs are you interested in? (optional)"
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-royal focus:ring-2 focus:ring-royal/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full cursor-pointer rounded-xl bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-royal-dark hover:shadow-lg disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? 'Joining...' : 'Join the student waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-3 text-sm font-medium text-green-600">
              You're on the list! We'll let you know when Club Discovery launches.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm font-medium text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
