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
        <img src={src} alt={alt} className="block w-full rounded-[38px] object-cover" />
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
function IPadMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[820px] rounded-[42px] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-black/70">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black">
        <img src={src} alt={alt} className="block w-full object-cover" />
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main className="min-h-[82vh] overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
            MEtrcs
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            The operating system for human performance
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Designed with the precision of a pro tool and the respect for athlete intelligence.
          </p>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Dashboard
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Minimum necessary dose.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Training, recovery, nutrition, hydration on one screen. So that you know.
            </p>
          </div>

          <PhoneMockup src="/dashboard-v2.png" alt="MEtrcs Dashboard" />
        </div>
      </section>

      {/* DAYFLOW */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <PhoneMockup src="/dayflow-v2.png" alt="MEtrcs DayFlow" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              DayFlow
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Your entire day. On one timeline.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Sleep, workouts, meals, hydration, HRV and weightlog — connected in one chronological flow.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTE LAB */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Route Lab
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Play with your favorite routes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Drag route markers as you wish and compare split efforts across your history. Instantly.
            </p>
          </div>

          <PhoneMockup src="/routelab-v2.png" alt="MEtrcs Route Lab" />
        </div>
      </section>

      {/* GOAL HUB */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <PhoneMockup src="/goalhub-v2.png" alt="MEtrcs Goal Hub" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Goal Hub
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Watch your goals come true.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Strength. Endurance. Body composition. You know best what you want.
            </p>
          </div>
        </div>
      </section>

      {/* PLANNER */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Planner
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Best plans are those you can stick with.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Hybrid or single sport training plans built around real life — strength, endurance and recovery in one practical structure.
            </p>
          </div>

          <DualPhoneMockups
            first={{ src: "/planner1.png", alt: "MEtrcs Planner Setup" }}
            second={{ src: "/planner2-v4.png", alt: "MEtrcs Workout Detail" }}
          />
        </div>
      </section>

      {/* COMPARATORS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Comparators
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Performance is never just one workout.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Compare training, recovery and load across time.
            </p>
          </div>

          <DualPhoneMockups
            first={{ src: "/comp1-v3.png", alt: "MEtrcs Month Comparator" }}
            second={{ src: "/comp2-v2.png", alt: "MEtrcs Workout Comparator" }}
          />
        </div>
      </section>

      {/* ENDURANCE */}
<section className="px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
        Endurance
      </p>

      <h2 className="text-4xl font-semibold tracking-tight">
        Because endurance matters.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Endurance is not just averages.
      </p>
    </div>

    <DualPhoneMockups
      first={{ src: "/endurance1.png", alt: "MEtrcs Endurance Analysis" }}
      second={{ src: "/endurance2.png", alt: "MEtrcs Heart Rate Analysis" }}
    />
  </div>
</section>

      {/* STRENGTH */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Strength
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Because strength matters.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Log your strength now. Track your strength over time.
            </p>
          </div>

          <DualPhoneMockups
            first={{ src: "/strength1.png", alt: "MEtrcs Strength Training" }}
            second={{ src: "/strength2-v2.png", alt: "MEtrcs Exercise Detail" }}
          />
        </div>
      </section>

      {/* NUTRITION & HYDRATION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Nutrition & Hydration
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Want to know how many carbs you ate 4 hours before your workout?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Timestamped nutrition and hydration logs for a full physiological picture.
            </p>
          </div>

          <DualPhoneMockups
            first={{ src: "/nutri-v2.png", alt: "MEtrcs Nutrition Tracking" }}
            second={{ src: "/hydra-v3.png", alt: "MEtrcs Hydration Tracking" }}
          />
        </div>
      </section>

      {/* GEAR */}
<section className="px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
        Gear
      </p>

      <h2 className="text-4xl font-semibold tracking-tight">
        We love details.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Details complete the context.
      </p>
    </div>

    <DualPhoneMockups
      first={{ src: "/gear1.png", alt: "MEtrcs Gear List" }}
      second={{ src: "/gear2-v3.png", alt: "MEtrcs Gear Comparison" }}
    />
  </div>
</section>
   {/* IPAD */}
<section className="px-6 py-28">
  <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_900px]">
    
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
        iPad experience
      </p>

      <h2 className="text-5xl font-semibold tracking-tight">
        More comfort when exploring.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Sync your iPad and enjoy larger overviews and
        side-by-side comparisons.
      </p>
    </div>

    <IPadMockup
      src="/ipad-comp-v3.png"
      alt="MEtrcs iPad comparison"
    />
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
    
    <div>
      <p>© 2026 MEtrcs</p>
      <p className="mt-1 text-xs text-zinc-600">
        MEtrcs is not a medical application and does not provide medical advice.
      </p>
    </div>

    <div className="flex items-center gap-6">
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