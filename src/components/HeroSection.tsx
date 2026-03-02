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
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* ── Orb background – pushed down, masked on all edges ── */}
      <div
        className="absolute top-[30%] right-0 bottom-0 left-0"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <Orb
          hue={220}
          hoverIntensity={0.3}
          rotateOnHover
          forceHoverState={false}
          backgroundColor="#ffffff"
        />
      </div>

      {/* Top fade – ensures headline area stays pure white */}
      <div className="pointer-events-none absolute top-[25%] right-0 left-0 z-[5] h-48 bg-gradient-to-b from-white via-white/70 to-transparent" />

      {/* Bottom fade – blends orb into next section */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-[5] h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
        {/* Headline area */}
        <div className="animate-fade-in-down mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] sm:text-5xl lg:text-7xl">
            Find your next{' '}
            <span className="text-royal">campus crew</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed font-medium text-gray-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] sm:mt-5 sm:text-xl">
            UniNav Club Discovery helps you discover clubs, communities, and
            teams across campus in one clean feed.
          </p>
        </div>

        {/* ── Phone + chips visual ── */}
        <div className="relative flex items-center justify-center">
          {/* Floating chips — percentage-positioned so they scale with the mockup */}
          <img
            src={chipTech}
            alt="Tech clubs"
            className="chip-scatter-tl absolute z-20 w-[20%] opacity-0 [animation-delay:0.3s]"
            style={{ top: '2%', left: '-8%' }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-slow')
            }}
          />
          <img
            src={chipCreative}
            alt="Creative clubs"
            className="chip-scatter-tr absolute z-20 w-[20%] opacity-0 [animation-delay:0.5s]"
            style={{ top: '2%', right: '-8%' }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-medium')
            }}
          />
          <img
            src={chipSports}
            alt="Sports clubs"
            className="chip-scatter-bl absolute z-20 w-[20%] opacity-0 [animation-delay:0.7s]"
            style={{ top: '38%', left: '-12%' }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-fast')
            }}
          />
          <img
            src={chipFaith}
            alt="Faith & service clubs"
            className="chip-scatter-br absolute z-20 w-[20%] opacity-0 [animation-delay:0.6s]"
            style={{ top: '50%', right: '-12%' }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-medium')
            }}
          />
          <img
            src={chipDance}
            alt="Dance clubs"
            className="chip-scatter-b absolute z-20 w-[20%] opacity-0 [animation-delay:0.9s]"
            style={{ bottom: '-4%', left: '50%', transform: 'translateX(-50%)' }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.add('animate-float-slow')
            }}
          />

          {/* App mockup */}
          <img
            src={appMockup}
            alt="UniNav Club Discovery interface"
            className="animate-fade-up relative z-10 h-auto w-[90vw] max-w-[500px] opacity-0 drop-shadow-2xl sm:max-w-[600px] lg:max-w-[750px]"
          />
        </div>

        {/* Scroll hint / CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-14 lg:mt-20">
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
