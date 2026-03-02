import {
  appMockup,
  chipTech,
  chipCreative,
  chipSports,
  chipFaith,
  chipDance,
} from '../assets'
import Orb from './Orb'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white">
      {/* ── Orb background – pushed to lower half behind phone ── */}
      <div className="absolute top-[25%] right-0 bottom-0 left-0">
        <Orb
          hue={220}
          hoverIntensity={0.3}
          rotateOnHover
          forceHoverState={false}
          backgroundColor="#ffffff"
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        {/* Headline area – above the orb, on clean white */}
        <div className="animate-fade-in-down mb-12 text-center lg:mb-16">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] sm:text-5xl lg:text-7xl">
            Find your next{' '}
            <span className="text-royal">campus crew</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed font-medium text-gray-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] sm:text-xl">
            UniNav Club Discovery helps you discover clubs, communities, and
            teams across campus in one clean feed.
          </p>
        </div>

        {/* ── Phone + chips visual ── */}
        <div className="relative flex items-center justify-center">
          {/* Floating chips — scatter in from off-screen, then float */}
          <img
            src={chipTech}
            alt="Tech clubs"
            className="chip-scatter-tl absolute -top-8 -left-16 z-20 w-16 opacity-0 sm:-top-10 sm:-left-24 sm:w-20 lg:-left-36 lg:w-24 [animation-delay:0.3s]"
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-slow')
            }}
          />
          <img
            src={chipCreative}
            alt="Creative clubs"
            className="chip-scatter-tr absolute -top-6 -right-14 z-20 w-16 opacity-0 sm:-top-8 sm:-right-20 sm:w-20 lg:-right-32 lg:w-24 [animation-delay:0.5s]"
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-medium')
            }}
          />
          <img
            src={chipSports}
            alt="Sports clubs"
            className="chip-scatter-bl absolute -bottom-4 -left-12 z-20 w-16 opacity-0 sm:-bottom-6 sm:-left-20 sm:w-20 lg:-left-32 lg:w-24 [animation-delay:0.7s]"
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-fast')
            }}
          />
          <img
            src={chipFaith}
            alt="Faith & service clubs"
            className="chip-scatter-br absolute -right-10 -bottom-2 z-20 w-16 opacity-0 sm:-right-18 sm:-bottom-4 sm:w-20 lg:-right-28 lg:w-24 [animation-delay:0.6s]"
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-medium')
            }}
          />
          <img
            src={chipDance}
            alt="Dance clubs"
            className="chip-scatter-b absolute -bottom-12 left-1/2 z-20 w-16 opacity-0 sm:-bottom-16 sm:w-20 lg:w-24 [animation-delay:0.9s]"
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-slow')
            }}
          />

          {/* App mockup */}
          <img
            src={appMockup}
            alt="UniNav Club Discovery interface"
            className="animate-fade-up relative z-10 h-[380px] w-auto opacity-0 drop-shadow-2xl sm:h-[460px] lg:h-[540px]"
          />
        </div>

        {/* Scroll hint / CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 lg:mt-20">
          <p className="text-sm font-semibold text-gray-600 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            Join the waitlist below
          </p>
          <a
            href="#students"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow-sm backdrop-blur-sm transition hover:border-royal/40 hover:bg-sky-50 hover:shadow-md"
            aria-label="Scroll to waitlist"
          >
            <svg
              className="h-5 w-5 animate-bounce text-royal"
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
