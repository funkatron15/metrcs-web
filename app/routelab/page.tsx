import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Analysis & Historical Attempt Comparison",
  description:
    "Analyze any section of a workout route, find matching attempts across your training history and compare performance, fuel, context and gear with MEtrcs Route Lab.",
  alternates: {
    canonical: "/routelab",
  },
  openGraph: {
    title: "MEtrcs Route Lab | Analyze & Compare Route Attempts",
    description:
      "Choose any section of a workout route, find matching historical attempts and compare performance, fuel, context and gear.",
    url: "/routelab",
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

function DualPhoneMockups({
  first,
  second,
}: {
  first: { src: string; alt: string };
  second: { src: string; alt: string };
}) {
  return (
    <div className="w-full overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max gap-5 pr-6 lg:w-full lg:justify-center lg:pr-0">
        <div className="w-[78vw] max-w-[330px] shrink-0 lg:w-[300px]">
          <PhoneMockup src={first.src} alt={first.alt} />
        </div>

        <div className="w-[78vw] max-w-[330px] shrink-0 lg:w-[300px]">
          <PhoneMockup src={second.src} alt={second.alt} />
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
            src="https://www.youtube.com/embed/YtnNQPmdtMk"
            title="MEtrcs Route Lab ad-hoc route analysis demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function RouteLabPage() {
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
            Route Lab
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Ask new questions
            <br />
            about your workouts.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Any route. Any section.
          </p>
        </div>
      </section>

      {/* SECTION 1 — EXPLORE ANY SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Explore your routes
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose any route.
              <br />
              Cut out any section.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Choose a workout from your training history and move two
                markers anywhere along its route.
              </p>

              <p>
                Route Lab continuously calculates the available point-to-point
                connections, direction, exact time-range metrics and where each
                section sits within the workout and elevation profile.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/routelab-row11.png",
              alt: "MEtrcs Route Lab showing a workout route with movable route markers",
            }}
            second={{
              src: "/routelab-row12.png",
              alt: "MEtrcs Route Lab showing point-to-point route sections, metrics and elevation profile",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — FIND AND COMPARE ATTEMPTS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/routelab-row21.png",
                alt: "MEtrcs Route Lab showing matching historical attempts for a selected route section",
              }}
              second={{
                src: "/routelab-row22.png",
                alt: "MEtrcs Route Lab detailed comparison of selected historical attempts",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Attempt history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              MEtrcs knows
              <br />
              when you were there.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Choose a section and Route Lab searches your training history
                for matching attempts within 12 metres accuracy.
              </p>

              <p>
                Sort them by date or performance. Select 2–5 history attempts and open a
                detailed comparison of the effort itself, what came before it,
                fuel, advanced context and gear you used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AD-HOC ANALYSIS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Ad-hoc analysis
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From a question
              <br />
              to an answer in seconds.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                All as an ad-hoc analysis. In seconds. On your iPhone or iPad.
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