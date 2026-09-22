import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEtrcs Gear | Connect Equipment to Your Training",
  description:
    "Track bikes, shoes, clothing and other training gear. Store detailed setups, connect equipment to workouts and see how every item performs over time.",
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
            src="https://www.youtube.com/embed/aIUDu9XUzZo"
            title="MEtrcs Gear tracking and equipment history demo"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function GearPage() {
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
            Gear
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Your gear is part
            <br />
            of the training.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Log what you used.
            <br />
            MEtrcs keeps the details connected to the effort.
          </p>
        </div>
      </section>

      {/* SECTION 1 — GEAR + WORKOUTS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Your gear. Your training.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Your gear becomes part
              <br />
              of the workout.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Add as many gear items as you want — bikes, shoes, clothing,
                helmets, poles and more.
              </p>

              <p>
                After a workout, simply select what you used. MEtrcs keeps it
                with the session automatically.
              </p>

              <p>
                From there, your gear follows the workout everywhere —
                Training Detail, Stats and Comparators.
              </p>

              <p className="text-white">
                And every item builds its own usage history and statistics.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/gear-row11.png",
              alt: "MEtrcs training gear selection showing equipment used during a workout",
            }}
            second={{
              src: "/gear-row12.png",
              alt: "MEtrcs gear detail showing usage history and statistics for a training item",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — SETUPS + COMPARISON */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/gear-row21.png",
                alt: "MEtrcs detailed bicycle setup with equipment attributes and configuration",
              }}
              second={{
                src: "/gear-row22.png",
                alt: "MEtrcs Training Comparator comparing gear and bicycle setups across workouts",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Details change the ride.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Compare more than
              <br />
              the workout.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                A bike isn&apos;t just a bike.
              </p>

              <p>
                Store detailed gear attributes and complete bike setups —
                tires, sizes, pressures, components and the configuration you
                actually rode.
              </p>

              <p>
                When you compare workouts, MEtrcs can put the equipment beside
                the performance.
              </p>

              <p className="text-white">
                See what changed. See what worked. And know what you may want
                to use next time.
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
              From gear list to gear history
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Know what you&apos;ve used.
              <br />
              And how much.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Bikes. Shoes. Clothing. Eyewear. Poles. Whatever belongs to
                your training.
              </p>

              <p>
                MEtrcs turns your gear list into a history of what you actually
                used — with workouts, time, distance and performance attached
                to it.
              </p>

              <p>
                Keep current gear together. Retire what you no longer use
                without losing its history.
              </p>

              <p className="text-white">
                Your equipment has a training history too.
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