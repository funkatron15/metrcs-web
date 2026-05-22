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

        <p className="mt-4 text-sm text-zinc-500">
          Last updated: May 2026
        </p>

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
              explicit permission. Health data is never accessed without your
              consent.
            </p>

            <p className="mt-4 leading-8">
              You can revoke Apple Health access at any time in the Apple Health
              app settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data usage
            </h2>

            <p className="leading-8">
              Your data is used only to provide app functionality, analytics,
              comparisons, planning and recovery related features inside MEtrcs.
            </p>

            <p className="mt-4 leading-8">
              MEtrcs does not sell your personal or health data to third parties.
            </p>

            <p className="mt-4 leading-8">
              MEtrcs does not use your health data for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Exports and backups
            </h2>

            <p className="leading-8">
              If you use export, backup or future sharing features, you are
              responsible for how and where exported files are stored or shared.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Future online features
            </h2>

            <p className="leading-8">
              Future versions of MEtrcs may include optional cloud sync or online
              services.
            </p>

            <p className="mt-4 leading-8">
              If data processing changes significantly, this privacy policy will
              be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Your control
            </h2>

            <p className="leading-8">
              You control which permissions you grant to MEtrcs. Most features
              can be limited or disabled by revoking permissions in iOS settings
              or Apple Health settings.
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
                martin@metrcs.org
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}