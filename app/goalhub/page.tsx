import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goal Tracking for Strength, Endurance & Body Composition",
  description:
    "Track strength, running, cycling, route and body composition goals with MEtrcs Goal Hub. Follow progress automatically as new performances and attempts are detected.",
  alternates: {
    canonical: "/goalhub",
  },
  openGraph: {
    title: "MEtrcs Goal Hub | Strength, Endurance & Body Goals",
    description:
      "Set strength, endurance, route and body composition goals and follow your progress as new performances are detected.",
    url: "/goalhub",
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
            src="https://www.youtube.com/embed/gRC_9Ipxz8I"
            title="MEtrcs Goal Hub progress demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function GoalHubPage() {
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
            Goal Hub
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Watch your goals
            <br />
            come true.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Strength. Endurance. Body composition.
            <br />
            You know best what you want.
          </p>
        </div>
      </section>

      {/* SECTION 1 — YOUR GOAL RADAR */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Your goals. One view.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Create your personal
              <br />
              goal radar.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Each slot represents one of your goals, bringing completely
                different ambitions into one view.
              </p>

              <p>
                As MEtrcs detects new attempts and progress within your goals,
                the radar changes its shape automatically.
              </p>

              <p>
                Watch it evolve as you move closer to where you want to be.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/goalhub-row11.png",
              alt: "MEtrcs Goal Hub showing a personal goal radar with strength, endurance and body composition goals",
            }}
            second={{
              src: "/goalhub-row12.png",
              alt: "MEtrcs Goal Hub showing individual goals, current values, closest attempts and progress",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — CHOOSE WHAT MATTERS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/goalhub-row21.png",
                alt: "MEtrcs Goal Hub showing body composition, strength and endurance goal categories",
              }}
              second={{
                src: "/goalhub-row22.png",
                alt: "MEtrcs Goal Hub showing route, running and cycling performance goal options",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Your goals. Your choice.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Set goals around what
              <br />
              matters to you now.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Choose body composition goals, strength goals for the exercises
                currently in your focus, or endurance goals across running and
                cycling.
              </p>

              <p>
                Chase a 5K time. A 60-minute power target. A strength milestone.
                Or a time on a specific section of your favorite route.
              </p>

              <p>
                Different goals. One place to follow them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROUTE LAB CONNECTION */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Route goals
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn any section
              <br />
              into a goal.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Goal Hub connects directly with Route Lab.
              </p>

              <p>
                Set a target time for a section of a route and MEtrcs watches
                your training history for matching attempts.
              </p>

              <p>
                Whenever you pass through that section again, your attempt is
                detected and added to the goal history automatically.
              </p>

              <p>
                Your favorite climb. A local segment. The last kilometer home.
                You decide what is worth chasing.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/goalhub-row31.png",
              alt: "MEtrcs Goal Hub showing a route performance goal and its attempt history",
            }}
            second={{
              src: "/goalhub-row32.png",
              alt: "MEtrcs Goal Hub showing body composition goal options",
            }}
          />
        </div>
      </section>

      {/* SECTION 4 — PROGRESS */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Progress you can see
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Chasing progress
              <br />
              should be fun.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Every attempt moves the story forward.
              </p>

              <p>
                Watch the radar change, see your closest attempts, follow the
                progress bars and look back at the performances that brought
                you closer.
              </p>

              <p>
                Your training already creates the progress. Goal Hub simply
                makes it satisfying to watch.
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