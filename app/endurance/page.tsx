import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endurance Training Analysis for Athletes",
  description:
    "Analyze endurance training beyond averages with MEtrcs. Explore running and cycling in depth across heart rate, power, pace, cadence, zones, grade, terrain, efficiency and more.",
  alternates: {
    canonical: "/endurance",
  },
  openGraph: {
    title: "MEtrcs Endurance | Training Analysis Beyond Averages",
    description:
      "Analyze endurance workouts in context, with deep running and cycling analysis across heart rate, power, pace, cadence, terrain, grade and more.",
    url: "/endurance",
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
            src="https://www.youtube.com/embed/JPrbO9Ztg8g"
            title="MEtrcs endurance training analysis demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function EndurancePage() {
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
            Endurance
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Your workout is more
            <br />
            than an average.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Run. Ride. Climb. Descend.
            <br />
            See what actually happened.
          </p>
        </div>
      </section>

      {/* SECTION 1 — THE WHOLE WORKOUT */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              The whole workout
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Your workout is more
              <br />
              than an average.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Time and distance are only the beginning.
              </p>

              <p>
                MEtrcs breaks every endurance workout into the metrics and
                conditions that shaped it — heart rate, power, pace, cadence,
                elevation, laps, terrain and more.
              </p>

              <p>
                See the complete session in one place instead of reducing it
                to a handful of summary numbers.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/endurance-row11.png",
              alt: "MEtrcs endurance workout analysis showing route, elevation, laps and workout metrics",
            }}
            second={{
              src: "/endurance-row12.png",
              alt: "MEtrcs endurance training detail showing heart rate, zones and workout analysis",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — GRADE */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/endurance-row21.png",
                alt: "MEtrcs endurance analysis showing uphill flat and downhill performance metrics",
              }}
              second={{
                src: "/endurance-row22.png",
                alt: "MEtrcs endurance analysis showing heart rate power pace and cadence by grade",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Uphill. Flat. Downhill.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See where the effort
              <br />
              happened.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                A 150 bpm average doesn&apos;t tell you whether you were
                climbing, descending or riding the flat.
              </p>

              <p>
                MEtrcs separates heart rate, power, pace and cadence by grade,
                so you can see how your body and performance changed with the
                terrain.
              </p>

              <p>
                Add heart-rate zones, power zones and efficiency drift and the
                workout starts to tell a very different story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEEPER METRICS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Go deeper
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              More than the
              <br />
              usual metrics.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                MEtrcs keeps the deeper metrics where they belong — inside the
                context of the workout.
              </p>

              <p>
                Explore efficiency, HES and CHES, laps, running dynamics and
                activity-specific metrics alongside the rest of the session.
              </p>

              <p>
                And because endurance performance doesn&apos;t happen without
                fuel, your in-workout carbohydrates, fluids, sodium and energy
                stay connected to the effort too.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/endurance-row31.png",
              alt: "MEtrcs deeper endurance analysis showing efficiency and activity-specific performance metrics",
            }}
            second={{
              src: "/endurance-row32.png",
              alt: "MEtrcs endurance analysis showing detailed running or cycling metrics and workout context",
            }}
          />
        </div>
      </section>

      {/* SECTION 4 — HISTORY */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              From workout to history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See the effort.
              <br />
              Then see the pattern.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                One workout tells you what happened.
              </p>

              <p>
                Your training history shows what you&apos;ve been building.
              </p>

              <p>
                Explore running and cycling across weeks, months or your entire
                history — volume, distance, intensity, terrain, grade and the
                metrics that matter to each sport.
              </p>

              <p className="text-white">
                From today&apos;s session to years of endurance training.
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