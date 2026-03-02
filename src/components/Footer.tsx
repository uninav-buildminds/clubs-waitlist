export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Looking for more UniNav features?
        </p>
        <a
          href="https://uninav.live"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-royal underline underline-offset-4 transition hover:text-royal-dark"
        >
          Visit uninav.live
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Club Discovery is coming soon. Join the waitlist above to get notified.
        </p>
      </div>
    </footer>
  )
}
