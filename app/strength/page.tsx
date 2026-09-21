import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEtrcs Strength | Log Every Set and Track Progress",
  description:
    "Log strength workouts set by set with reps, weight, RPE and rest. Keep your exercise history and see how your strength progresses over time.",
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
            src="https://www.youtube.com/embed/_16eASpyq4o"
            title="MEtrcs strength training and exercise history demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function StrengthPage() {
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
            Strength
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Every set.
            <br />
            Every rep.
            <br />
            Every progression.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Log the work.
            <br />
            See what changed.
          </p>
        </div>
      </section>

      {/* SECTION 1 — LOG THE WORK */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Log the work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for the set
              <br />
              you're actually doing.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Log reps, weight, RPE and rest directly inside the workout.
              </p>

              <p>
                Track warm-up and working sets, equipment used for each
                exercise and the details that matter when you come back to the
                movement again.
              </p>

              <p>
                No separate notes. No reconstructed training log after the
                session.
              </p>

              <p className="text-white">
                The workout becomes the logbook.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/strength-row11-1.png",
              alt: "MEtrcs strength workout showing exercises and set-by-set training log",
            }}
            second={{
              src: "/strength-row12.png",
              alt: "MEtrcs strength training log showing reps, weight, RPE and working sets",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — SEE THE PROGRESSION */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/strength-row21.png",
                alt: "MEtrcs exercise history showing previous strength performances and training loads",
              }}
              second={{
                src: "/strength-row22.png",
                alt: "MEtrcs strength exercise detail showing progression across training history",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              From set to history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Don't remember
              <br />
              what you lifted.
              <br />
              Know.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Every completed session becomes part of your exercise history.
              </p>

              <p>
                See previous performances, loads and body weight in context and
                follow an exercise across weeks, months or your entire history.
              </p>

              <p>
                From today's top set to years of training.
              </p>

              <p className="text-white">
                Progress shouldn't depend on memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VIDEO */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[420px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <YouTubeDemo />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              From first set to history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Train now.
              <br />
              Keep the history.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                A strength workout doesn't disappear when you press Save.
              </p>

              <p>
                MEtrcs keeps the sets, loads, reps, RPE, equipment and
                surrounding context connected to the session — then carries
                that work into your exercise history.
              </p>

              <p>
                Log the workout once.
              </p>

              <p className="text-white">
                MEtrcs keeps the rest.
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