import {
  chipTech,
  chipCreative,
  chipSports,
  chipFaith,
  chipDance,
} from '../assets'
import Orb from './Orb'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50">
      {/* ── Orb background (light theme) ── */}
      <div className="absolute inset-0">
        <Orb
          hue={220}
          hoverIntensity={0.3}
          rotateOnHover
          forceHoverState={false}
          backgroundColor="#f0f6ff"
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* Headline area */}
        <div className="mb-12 text-center lg:mb-16">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            Find your next{' '}
            <span className="text-royal">campus crew</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            UniNav Club Discovery helps you discover clubs, communities, and
            teams across campus in one clean feed.
          </p>
        </div>

        {/* ── Phone + chips visual ── */}
        <div className="relative flex items-center justify-center">
          {/* Floating chips — orbit around phone */}
          <img
            src={chipTech}
            alt="Tech clubs"
            className="animate-float-slow absolute -top-8 -left-16 z-20 w-16 sm:-top-10 sm:-left-24 sm:w-20 lg:-left-36 lg:w-24"
          />
          <img
            src={chipCreative}
            alt="Creative clubs"
            className="animate-float-medium absolute -top-6 -right-14 z-20 w-16 sm:-top-8 sm:-right-20 sm:w-20 lg:-right-32 lg:w-24"
            style={{ animationDelay: '0.6s' }}
          />
          <img
            src={chipSports}
            alt="Sports clubs"
            className="animate-float-fast absolute -bottom-4 -left-12 z-20 w-16 sm:-bottom-6 sm:-left-20 sm:w-20 lg:-left-32 lg:w-24"
            style={{ animationDelay: '1.2s' }}
          />
          <img
            src={chipFaith}
            alt="Faith & service clubs"
            className="animate-float-medium absolute -right-10 -bottom-2 z-20 w-16 sm:-right-18 sm:-bottom-4 sm:w-20 lg:-right-28 lg:w-24"
            style={{ animationDelay: '0.9s' }}
          />
          <img
            src={chipDance}
            alt="Dance clubs"
            className="animate-float-slow absolute -bottom-12 left-1/2 z-20 w-16 -translate-x-1/2 sm:-bottom-16 sm:w-20 lg:w-24"
            style={{ animationDelay: '1.5s' }}
          />

          {/* Phone mockup placeholder — replace with <img src={heroPhone} /> */}
          <div className="relative z-10 flex h-[380px] w-[190px] items-center justify-center rounded-[2.5rem] border border-gray-200 bg-white shadow-2xl shadow-royal/10 sm:h-[460px] sm:w-[230px] lg:h-[540px] lg:w-[270px]">
            {/* Inner screen bezel effect */}
            <div className="flex h-[350px] w-[170px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-sky-50 to-white sm:h-[428px] sm:w-[208px] lg:h-[504px] lg:w-[246px]">
              <span className="px-4 text-center text-xs text-gray-400">
                Phone mockup
                <br />
                (add hero-phone.png)
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint / CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 lg:mt-20">
          <p className="text-sm font-medium text-gray-500">
            Join the waitlist below
          </p>
          <a
            href="#students"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-royal/30 hover:bg-sky-50"
            aria-label="Scroll to waitlist"
          >
            <svg
              className="h-5 w-5 animate-bounce text-royal/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
