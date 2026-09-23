import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching & Athlete Training Analysis",
  description:
    "MEtrcs Client Hub lets coaches explore their athletes' training, recovery, nutrition, hydration, routes, gear, statistics, comparisons and complete history inside their own MEtrcs app.",
  alternates: {
    canonical: "/client-hub",
  },
  openGraph: {
    title: "MEtrcs Client Hub | Coaching & Athlete Training Analysis",
    description:
      "Connect with athletes and analyze their training, recovery, nutrition, hydration, routes, statistics, comparisons and history directly inside MEtrcs.",
    url: "/client-hub",
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

export default function ClientHubPage() {
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
            Client Hub
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Your athlete&apos;s MEtrcs.
            <br />
            Inside yours.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Connect once.
            <br />
            From then on, they log. You see.
          </p>
        </div>
      </section>

      {/* SECTION 1 — ONE CONNECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              One connection. Their data.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              They log.
              <br />
              You see.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Send your client a unique access code. They enter it in MEtrcs
                and approve the connection.
              </p>

              <p>
                From then on, nothing changes for the athlete. They simply keep
                using MEtrcs and logging their training, recovery, nutrition
                and hydration.
              </p>

              <p>
                You move through the same MEtrcs interface you already know —
                now with their data inside it.
              </p>

              <p>
                The client badge always shows whose data you&apos;re viewing.
                Your navigation and your app remain yours.
              </p>

              <p className="text-white">
                No reports to send. No data to copy.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/clienthub-row11.png",
              alt: "MEtrcs Client Hub showing an athlete dashboard inside the coach app with client name badge",
            }}
            second={{
              src: "/clienthub-row12.png",
              alt: "MEtrcs Client Hub showing an athlete DayFlow with training, recovery, nutrition and hydration data",
            }}
          />
        </div>
      </section>

      {/* SECTION 2 — FULL MEtrcs */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[640px_minmax(0,1fr)]">

          <div className="order-2 lg:order-1">
            <DualPhoneMockups
              first={{
                src: "/clienthub-row21.png",
                alt: "MEtrcs Client Hub showing an athlete Route Lab analysis inside the coach app",
              }}
              second={{
                src: "/clienthub-row22.png",
                alt: "MEtrcs Client Hub showing an athlete week comparison with recovery, training and nutrition data",
              }}
            />
          </div>

          <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Not a coach dashboard
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See what they see.
              <br />
              Then go deeper.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Client Hub isn&apos;t a reduced coach summary of your athlete.
              </p>

              <p>
                Open their Dashboard. Move through DayFlow. Inspect Training
                Detail. Explore RouteLab. Read their statistics. Compare
                workouts, days, weeks and months.
              </p>

              <p>
                And because MEtrcs builds the athlete&apos;s history from their
                first day of use, the connection doesn&apos;t begin with the
                day you became their coach.
              </p>

              <p>
                Their existing MEtrcs history is there to analyze too.
              </p>

              <p className="text-white">
                Everything MEtrcs gives you for understanding your own training
                becomes a tool for understanding theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LESS ADMIN */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_640px]">

          <div className="mx-auto w-full max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Less admin. More coaching.
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The analysis
              <br />
              is already there.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                No spreadsheets to rebuild the athlete&apos;s week. No
                screenshots to collect. No interview just to reconstruct what
                happened.
              </p>

              <p>
                Training. Recovery. Fuel. Routes. Gear. Statistics.
                Comparisons. History.
              </p>

              <p>
                Your client&apos;s personal information and app settings stay
                private. You see the MEtrcs data they share through Client Hub
                — not their personal account.
              </p>

              <p className="text-white">
                Spend your time coaching. Not collecting the information you
                need to coach.
              </p>
            </div>
          </div>

          <DualPhoneMockups
            first={{
              src: "/clienthub-row31.png",
              alt: "MEtrcs Client Hub showing detailed athlete training data available to the coach",
            }}
            second={{
              src: "/clienthub-row32.png",
              alt: "MEtrcs Client Hub showing athlete statistics and historical analysis inside the coach app",
            }}
          />
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