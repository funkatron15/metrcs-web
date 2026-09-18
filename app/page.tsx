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

function FeatureText({
  eyebrow,
  title,
  body,
  large = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  large?: boolean;
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          {eyebrow}
        </p>

        <h2 className={`${large ? "text-5xl" : "text-4xl"} font-semibold tracking-tight`}>
          {title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {body}
        </p>
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
      <a href="/dashboard" className="block">
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_330px]">
            <FeatureText
              eyebrow="Dashboard"
              title="Minimum necessary dose."
              body="Training, recovery, nutrition, hydration on one screen. So that you know."
            />

            <PhoneMockup src="/dashboard-v2.png" alt="MEtrcs Dashboard" />
          </div>
        </section>
      </a>

            {/* DAYFLOW */}
      <a href="/dayflow" className="block">
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[330px_minmax(0,1fr)]">
            <div className="order-2 lg:order-1">
              <PhoneMockup src="/dayflow-v2.png" alt="MEtrcs DayFlow" />
            </div>

            <div className="order-1 lg:order-2">
              <FeatureText
                eyebrow="DayFlow"
                title="Your entire day. On one timeline."
                body="Sleep, workouts, meals, hydration, HRV and weightlog — connected in one chronological flow."
              />
            </div>
          </div>
        </section>
      </a>

      {/* ROUTE LAB */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_330px]">
          <FeatureText
            eyebrow="Route Lab"
            title="Play with your favorite routes."
            body="Drag route markers as you wish and compare split efforts across your history. Instantly."
          />

          <PhoneMockup src="/routelab-v2.png" alt="MEtrcs Route Lab" />
        </div>
      </section>

      {/* GOAL HUB */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[330px_minmax(0,1fr)]">
          <div className="order-2 lg:order-1">
            <PhoneMockup src="/goalhub-v2.png" alt="MEtrcs Goal Hub" />
          </div>

          <div className="order-1 lg:order-2">
            <FeatureText
              eyebrow="Goal Hub"
              title="Watch your goals come true."
              body="Strength. Endurance. Body composition. You know best what you want."
            />
          </div>
        </div>
      </section>

      {/* PLANNER */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Planner"
            title="Best plans are those you can stick with."
            body="Hybrid or single sport training plans built around real life — strength, endurance and recovery in one practical structure."
          />

          <DualPhoneMockups
            first={{ src: "/planner1.png", alt: "MEtrcs Planner Setup" }}
            second={{ src: "/planner2-v4.png", alt: "MEtrcs Workout Detail" }}
          />
        </div>
      </section>

      {/* COMPARATORS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Comparators"
            title="Performance is never just one workout."
            body="Compare training, recovery and load across time."
          />

          <DualPhoneMockups
            first={{ src: "/comp1-v3.png", alt: "MEtrcs Month Comparator" }}
            second={{ src: "/comp2-v2.png", alt: "MEtrcs Workout Comparator" }}
          />
        </div>
      </section>

      {/* ENDURANCE */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Endurance"
            title="Because endurance matters."
            body="Endurance is not just averages."
          />

          <DualPhoneMockups
            first={{ src: "/endurance1.png", alt: "MEtrcs Endurance Analysis" }}
            second={{ src: "/endurance2.png", alt: "MEtrcs Heart Rate Analysis" }}
          />
        </div>
      </section>

      {/* STRENGTH */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Strength"
            title="Because strength matters."
            body="Log your strength now. Track your strength over time."
          />

          <DualPhoneMockups
            first={{ src: "/strength1.png", alt: "MEtrcs Strength Training" }}
            second={{ src: "/strength2-v2.png", alt: "MEtrcs Exercise Detail" }}
          />
        </div>
      </section>

      {/* NUTRITION & HYDRATION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Nutrition & Hydration"
            title="Want to know how many carbs you ate 4 hours before your workout?"
            body="Timestamped nutrition and hydration logs for a full physiological picture."
          />

          <DualPhoneMockups
            first={{ src: "/nutri-v2.png", alt: "MEtrcs Nutrition Tracking" }}
            second={{ src: "/hydra-v3.png", alt: "MEtrcs Hydration Tracking" }}
          />
        </div>
      </section>

      {/* GEAR */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Gear"
            title="We love details."
            body="Details complete the context."
          />

          <DualPhoneMockups
            first={{ src: "/gear1.png", alt: "MEtrcs Gear List" }}
            second={{ src: "/gear2-v3.png", alt: "MEtrcs Gear Comparison" }}
          />
        </div>
      </section>

      {/* CLIENT HUB */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_640px]">
          <FeatureText
            eyebrow="Client Hub"
            title="Everything your athlete sees — you see too."
            body="No need to interview your clients. They log, you analyze. Save your time. Save theirs."
          />

          <DualPhoneMockups
            first={{ src: "/clienthub1.png", alt: "MEtrcs Coach Hub Client List" }}
            second={{ src: "/clienthub2.png", alt: "MEtrcs Coach View Load and Performance Trends" }}
          />
        </div>
      </section>

      {/* IPAD */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1fr)_820px]">
          <FeatureText
            eyebrow="iPad experience"
            title="More comfort when exploring."
            body="Sync your iPad and enjoy larger overviews and side-by-side comparisons."
            large
          />

          <IPadMockup
            src="/ipad-comp-v4.png"
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
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </a>

            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>

            <a href="mailto:martin@metrcs.org" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}