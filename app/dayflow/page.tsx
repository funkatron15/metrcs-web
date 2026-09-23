import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Timeline for Training, Recovery & Nutrition",
  description:
    "See sleep, HRV, body weight, meals, hydration, caffeine and training on one chronological timeline. MEtrcs DayFlow connects the context around your training.",
  alternates: {
    canonical: "/dayflow",
  },
  openGraph: {
    title: "MEtrcs DayFlow | Your Athlete Day on One Timeline",
    description:
      "Sleep, HRV, body weight, meals, hydration, caffeine and training together on one chronological athlete timeline.",
    url: "/dayflow",
  },
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
            src="/dayflow-day1.png"
            alt="MEtrcs DayFlow showing sleep, HRV, meals, hydration, body weight and training on one chronological timeline"
          />
        </div>

        <div className="w-[78vw] max-w-[330px] shrink-0 lg:w-[300px]">
          <PhoneMockup
            src="/dayflow-day2.png"
            alt="MEtrcs DayFlow showing another athlete day and its complete chronological context"
          />
        </div>
      </div>
    </div>
  );
}

function YouTubeDemo() {
  return (
    <div className="mx-auto w-[280px] sm:w-[290px]">
      <div className="w-full rounded-[52px] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-black/70">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[42px] border border-white/10 bg-black">
          <iframe
            src="https://www.youtube.com/embed/C8F5dZG6mic"
            title="MEtrcs DayFlow timeline demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function DayFlowPage() {
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
            DayFlow
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Your whole day,
            <br />
            in the order it happened.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Sleep, HRV, body weight, meals, hydration, caffeine and training —
            placed on one continuous timeline.
          </p>
        </div>
      </section>

      {/* WHOLE DAY */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Your day in context
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See what happened
              <br />
              around your training.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                See what happened before your session, during it and after it.
                Move back through your days and see the context, not just the
                totals.
              </p>

              <p>
                See whether you drink regularly throughout the day. Spot long
                gaps between meals, or a big meal window before training.
              </p>

              <p>
                See how your HRV responds as your day unfolds.
              </p>
            </div>
          </div>

          <DualPhoneMockups />
        </div>
      </section>

      {/* AUTOMATIC TIMELINE */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              One continuous timeline
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Your DayFlow timeline builds itself throughout the day.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Meals, drinks and body weight appear as you log them, while
                training, recovery and health data flow in automatically from
                Apple Health and imported FIT files.
              </p>
            </div>
          </div>
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