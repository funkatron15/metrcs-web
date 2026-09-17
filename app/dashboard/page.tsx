import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEtrcs Dashboard | Your Entire Athlete Day",
  description:
    "Explore training, recovery, nutrition, hydration, body metrics and daily logs together. MEtrcs Dashboard lets athletes and coaches navigate complete athlete days across history.",
};

function PhoneMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[52px] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-black/70">
      <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-black">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />

        <img
          src={src}
          alt={alt}
          className="block w-full rounded-[38px] object-cover"
        />
      </div>
    </div>
  );
}

function DualPhoneMockups() {
  return (
    <div className="w-full overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max gap-5 pr-6 lg:w-full lg:justify-center lg:pr-0">
        <div className="w-[78vw] max-w-[330px] shrink-0 lg:w-[300px]">
          <PhoneMockup
            src="/dashboard-day1.png"
            alt="MEtrcs Dashboard showing a complete athlete day with training, recovery, nutrition, hydration, body metrics and daily logs"
          />
        </div>

        <div className="w-[78vw] max-w-[330px] shrink-0 lg:w-[300px]">
          <PhoneMockup
            src="/dashboard-day2.png"
            alt="MEtrcs Dashboard showing historical athlete data from another day"
          />
        </div>
      </div>
    </div>
  );
}

function YouTubeDemo() {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[42px] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-black/70">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[32px] border border-white/10 bg-black">
        <iframe
          src="https://www.youtube.com/embed/C4byFUR4IdU"
          title="MEtrcs Dashboard time navigation demo"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACK */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <span>←</span>
          <span>MEtrcs</span>
        </a>
      </div>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Dashboard
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Your entire athlete day.
            <br />
            Anywhere in time.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Training, recovery, nutrition, hydration, body metrics and daily
            logs — together in one navigable view.
          </p>
        </div>
      </section>

      {/* COMPLETE ATHLETE DAY */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Complete athlete context
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Go back to any day.
              <br />
              See it as if it were today.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                MEtrcs Dashboard is the control center for the entire athlete
                day.
              </p>

              
                It isn&apos;t a collection of today&apos;s metrics. It&apos;s
                a navigable history of complete athlete days.
              

              
            </div>
          </div>

          <DualPhoneMockups />
        </div>
      </section>

      {/* TIME NAVIGATION */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Time navigation
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The entire day moves with you.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Use the day arrows or calendar to move anywhere in your
                history.
              </p>

              <p>
                The entire Dashboard moves with you — training, recovery,
                nutrition, hydration, body metrics and daily logs.
              </p>

              <p>
                Open any widget and its detail stays anchored to the day
                you&apos;re exploring - giving you the complete context of that day.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* COACH CONTEXT */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            For coaches
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything your athlete sees — you see too.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Coaches can move through that same history,
            open the same daily context and analyze what actually happened —
            without asking the athlete to reconstruct past days from memory.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <div>
            <p>© 2026 MEtrcs</p>

            <p className="mt-1 text-xs text-zinc-600">
              MEtrcs is not a medical application and does not provide medical
              advice.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </a>

            <a
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>

            <a
              href="mailto:martin@metrcs.org"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}