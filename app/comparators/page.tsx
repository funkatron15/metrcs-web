import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEtrcs Comparators | Compare Training, Days, Weeks and Months",
  description:
    "Compare 2–5 workouts, days, weeks or months side by side. Choose any reference, see differences across your metrics and understand what actually changed.",
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
            src="https://www.youtube.com/embed/nrSLlUeeEBc"
            title="MEtrcs Comparators training, day, week and month comparison demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function ComparatorsPage() {
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
            Comparators
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Stop remembering.
            <br />
            Start comparing.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Training. Days. Weeks. Months.
            <br />
            Put them side by side and see what actually changed.
          </p>
        </div>
      </section>

      {/* SECTION 1 — TRAINING COMPARATOR */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Workout vs. workout
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Compare the whole effort.
              <br />
              Not just the headline numbers.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Select 2–5 workouts from your training history and put them
                side by side.
              </p>

              <p>
                Choose any workout as your reference and MEtrcs shows the
                differences across the entire comparison — duration, energy,
                heart rate, power, cadence, terrain, grade, fuel, hydration
                and the deeper metrics available for each activity.
              </p>

              <p>
                Reorder workouts. Change the reference. Compare completely
                different sessions or repeated attempts at the same effort.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/comparatror-row11.png",
              alt: "MEtrcs Training Comparator showing multiple workouts selected for side-by-side comparison",
            }}
            second={{
              src: "/comparatror-row12.png",
              alt: "MEtrcs Training Comparator showing workout metrics, reference values and differences side by side",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — DAY COMPARATOR */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/comparator-row21.png",
                alt: "MEtrcs Day Comparator showing multiple days selected from training history",
              }}
              second={{
                src: "/comparator-row22.png",
                alt: "MEtrcs Day Comparator comparing recovery, body, energy, nutrition and training metrics side by side",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Day vs. day
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Compare everything
              <br />
              that made the day.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                A training day is more than the workout.
              </p>

              <p>
                Compare 2–5 complete days across sleep, HRV, resting heart
                rate, body metrics, energy, nutrition, hydration and training.
              </p>

              <p>
                Set any day as the reference and see the differences directly
                beside every metric.
              </p>

              <p>
                A hard training day against another hard training day. A rest
                day against a training day. Yesterday against your best week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WEEK + MONTH */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Zoom out
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Days tell you what happened.
              <br />
              Weeks and months show the pattern.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Use the same comparison system across entire weeks and months.
              </p>

              <p>
                Put different periods side by side and compare recovery, body
                and energy, training, nutrition and the other metrics that
                shaped them.
              </p>

              <p>
                Choose your reference period, reorder the columns and see every
                difference directly in context.
              </p>

              <p>
                From a single workout to months of training, MEtrcs lets you
                ask the same simple question:
              </p>

              <p className="text-white">
                What changed?
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/comparator-row31.png",
              alt: "MEtrcs Week Comparator comparing recovery, training and other weekly metrics side by side",
            }}
            second={{
              src: "/comparator-row32.png",
              alt: "MEtrcs Month Comparator comparing complete months with reference values and differences",
            }}
          />
        </div>
      </section>

      {/* SECTION 4 — VIDEO */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Your data. Side by side.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From one workout
              <br />
              to the bigger picture.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                No separate reports to remember. No jumping between screens
                trying to work out what changed.
              </p>

              <p>
                Select what you want to understand, choose your reference and
                compare it side by side.
              </p>

              <p>
                Training. Day. Week. Month.
              </p>

              <p className="text-white">
                The same idea at every scale.
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