export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Privacy
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>

        <div className="mt-12 space-y-10 text-zinc-400">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Local-first by design
            </h2>

            <p className="leading-8">
              MEtrcs is designed as a local-first application. Your data is stored
              and processed locally on your device by default.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data we may process
            </h2>

            <p className="leading-8">
              Depending on permissions you grant, MEtrcs may process workouts,
              heart rate, HRV, sleep, body weight, nutrition, hydration,
              recovery, power, cadence, route, elevation and other performance
              related data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Apple Health
            </h2>

            <p className="leading-8">
              MEtrcs may read and write selected Apple Health data only with your
              explicit permission. You can revoke access at any time in Apple
              Health settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data sharing
            </h2>

            <p className="leading-8">
              MEtrcs does not sell your data to third parties. If you use export,
              backup or future sharing features, you are responsible for how and
              where exported files are stored or shared.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Future online features
            </h2>

            <p className="leading-8">
              Future versions of MEtrcs may include optional sync or online
              services. If data processing changes significantly, this policy will
              be updated.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Contact
            </h2>

            <p className="leading-8">
              For privacy related questions contact{" "}
              <a
                href="mailto:martin@metrcs.org"
                className="text-white underline underline-offset-4"
              >
                hello@metrcs.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}