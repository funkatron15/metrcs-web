import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEtrcs Fuel | Nutrition, Hydration and Training Fuel",
  description:
    "Log nutrition and hydration with timestamps, track calories, macros, fluids, sodium and caffeine, and see your fuel in the context of your training.",
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
            src="https://www.youtube.com/embed/g3iYqhFMGrY"
            title="MEtrcs nutrition, hydration and training fuel demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function FuelPage() {
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
            Nutrition & Hydration
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Fuel is part
            <br />
            of the training.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Log what you eat and drink.
            <br />
            MEtrcs puts it in context.
          </p>
        </div>
      </section>

      {/* SECTION 1 — FOOD DATABASE */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Built-in. Yours. Offline.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A food database
              <br />
              you can actually trust.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                MEtrcs includes its own curated food database for everyday
                nutrition logging.
              </p>

              <p>
                Add as many of your own foods as you want and build the
                database around what you actually eat.
              </p>

              <p>
                No community database filled with hundreds of thousands of
                duplicate or incorrectly entered foods.
              </p>

              <p className="text-white">
                And because it works offline, your nutrition log works
                wherever you do.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/fuel-row11.png",
              alt: "MEtrcs nutrition logger with built-in food database",
            }}
            second={{
              src: "/fuel-row12.png",
              alt: "MEtrcs custom food and nutrition logging",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — TIMESTAMPS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/fuel-row21.png",
                alt: "MEtrcs DayFlow showing timestamped nutrition and hydration",
              }}
              second={{
                src: "/fuel-row22.png",
                alt: "MEtrcs workout detail showing nutrition and hydration around training",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Time changes the context
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              It's not only what you ate.
              <br />
              It's when you ate it.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Every meal and drink in MEtrcs has a timestamp.
              </p>

              <p>
                That lets MEtrcs calculate calories, carbohydrates, protein,
                fat, sodium, caffeine and fluids not only across the day, but
                around your training.
              </p>

              <p>
                See what you consumed before, during and after a workout —
                automatically.
              </p>

              <p className="text-white">
                Log it once. See it in DayFlow and in the workout where it
                matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STATISTICS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              From today to your history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See what you're fueling.
              <br />
              See what you're spending.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Explore nutrition and hydration across weeks, months or your
                entire history.
              </p>

              <p>
                Follow calories and macros, fluids, carbohydrates, sodium and
                caffeine over time.
              </p>

              <p>
                MEtrcs combines calorie intake with your energy expenditure
                from Apple Health to show your daily energy balance alongside
                your body-weight trend.
              </p>

              <p>
                And because fuel stays connected to training, you can go back
                to historical workouts and see — or compare — how you fueled
                them.
              </p>

              <p className="text-white">
                Intake. Expenditure. Training. One history.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/fuel-row31.png",
              alt: "MEtrcs nutrition statistics showing energy balance and body weight trend",
            }}
            second={{
              src: "/fuel-row32.png",
              alt: "MEtrcs hydration statistics showing fluid, carbohydrate, sodium and caffeine history",
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
              One continuous log
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From your first coffee
              <br />
              to your last workout.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Food. Drinks. Carbohydrates. Sodium. Caffeine. Energy
                expenditure.
              </p>

              <p>
                MEtrcs keeps them on the same timeline as your training instead
                of treating nutrition as a separate part of your day.
              </p>

              <p>
                Log as you go. Look back when you need to.
              </p>

              <p className="text-white">
                Your fuel stays connected to what you did.
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