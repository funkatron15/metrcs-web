import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Training & Nutrition Planner",
  description:
    "Build an 8-week running, cycling, strength or hybrid training plan with MEtrcs. Plan workouts, intensity, calories and macronutrients around your goals and available training days.",
  alternates: {
    canonical: "/planner",
  },
  openGraph: {
    title: "MEtrcs Planner | Hybrid Training & Nutrition Plans",
    description:
      "Build an 8-week running, cycling, strength or hybrid plan with structured workouts, intensity targets, calories and macronutrients.",
    url: "/planner",
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
            src="https://www.youtube.com/embed/mp6sq4ZjN7o"
            title="MEtrcs Planner training and nutrition planning demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function PlannerPage() {
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
            Planner
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Training and nutrition.
            <br />
            Planned together.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Build an 8-week structure around your goals, your training time
            and the way you want to fuel it.
          </p>
        </div>
      </section>

      {/* SECTION 1 — BUILT AS A BLOCK */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Built as a block
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Eight weeks.
              <br />
              One clear direction.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Choose a training and nutrition plan around your goals and the
                time you actually have available.
              </p>

              <p>
                MEtrcs includes plans for endurance, strength and hybrid
                athletes, built as fixed 8-week blocks designed to
                progressively develop your performance from week to week.
              </p>

              <p>
                Each day comes with a complete training prescription —
                including the exact strength exercises, guidance for choosing
                loads and progressing them, and precise duration and intensity
                targets for endurance sessions.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/planner-row11.png",
              alt: "MEtrcs Planner showing an 8-week training and nutrition plan",
            }}
            second={{
              src: "/planner-row12.png",
              alt: "MEtrcs Planner showing a detailed daily workout prescription with strength and endurance training",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — BUILD IT AROUND YOU */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/planner-row21.png",
                alt: "MEtrcs Planner configurator for running, cycling, strength and hybrid training plans",
              }}
              second={{
                src: "/planner-row22.png",
                alt: "MEtrcs Planner showing training days and calorie balance configuration",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Build it around you
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose what you
              <br />
              want to improve.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Focus on running, cycling, strength or build as a hybrid
                athlete.
              </p>

              <p>
                Choose how many days per week you want to train and set the
                calorie balance that matches your current goal.
              </p>

              <p>
                If your heart rate and power zones are set in MEtrcs, every
                endurance workout prescription automatically uses your exact
                zones for its intensity targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PLAN YOUR NUTRITION */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Plan your nutrition
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
  MEtrcs gives you
  <br />
  the numbers.
</h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                The nutrition planner calculates your daily calorie and
                macronutrient targets from your body data, energy expenditure
                estimate and chosen calorie balance.
              </p>

              <p>
                Choose energy expenditure from your watch or use a
                formula-based estimate.
              </p>

              <p>
                Once your plan is set, MEtrcs keeps your training energy
                visible alongside it — so when a workout burns 1,200 kcal, you
                can see what still needs to be replenished through food and
                drinks.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/planner-row31.png",
              alt: "MEtrcs nutrition planner showing calorie and macronutrient targets",
            }}
            second={{
              src: "/planner-row32.png",
              alt: "MEtrcs nutrition planner showing energy expenditure and calorie balance settings",
            }}
          />
        </div>
      </section>

      {/* SECTION 4 — TIME-CRUNCHED */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Time-crunched by design
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for athletes with
              <br />
              a life outside training.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                MEtrcs 1.0 training plans are designed for people balancing
                training with work, family and everything else that fills a
                week.
              </p>

              <p>
                They are intentionally time-crunched: focused sessions,
                purposeful structure and no junk volume.
              </p>

              <p>
                Make the time you have count.
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
  href="https://www.instagram.com/metrcs.athleteos"
  target="_blank"
  rel="noopener noreferrer"
  className="transition-colors hover:text-white"
>
  Instagram
</a>

<a
  href="https://www.youtube.com/@MEtrcs"
  target="_blank"
  rel="noopener noreferrer"
  className="transition-colors hover:text-white"
>
  YouTube
</a>
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