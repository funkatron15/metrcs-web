
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
          Last updated: November 20, 2026
        </p>

        <div className="mt-12 space-y-10 text-zinc-400">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Local-first by design
            </h2>

            <p className="leading-8">
              MEtrcs is a local-first application for training, nutrition,
              hydration, recovery and performance analysis. Analytics and
              calculations are performed on your device. Selected app data
              is also synchronized through Apple iCloud (CloudKit).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data we process
            </h2>

            <p className="leading-8">
              MEtrcs processes information you enter manually or authorize
              it to read from Apple Health. This may include workouts,
              routes, heart rate, HRV, resting heart rate, sleep, power,
              cadence, body weight, body measurements, nutrition, hydration
              and related training metrics.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Local processing and iCloud synchronization
            </h2>

            <p className="leading-8">
              MEtrcs synchronizes selected application records and
              analytical snapshots through Apple iCloud (CloudKit) to
              support continuity between your devices, data backup and
              authorized coaching functionality.
            </p>

            <p className="mt-4 leading-8">
              Synchronization may occur even when no coach is connected.
              Synchronizing data to iCloud does not automatically make
              it accessible to a coach.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Sharing with coaches
            </h2>

            <p className="leading-8">
              Your information is not automatically shared with coaches.
              A coach can view your shared information only after you
              explicitly authorize a connection through MEtrcs Client Hub.
            </p>

            <p className="mt-4 leading-8">
              Once connected, the coach may view available historical
              information and future updates, including workouts and
              routes, sleep and recovery (HRV/RHR), body metrics,
              nutrition, hydration and goals.
            </p>

            <p className="mt-4 leading-8">
              The coach can view but not modify your underlying records.
              You can disconnect at any time to remove their access to
              shared data through MEtrcs, including historical information.
              Your own data remains available to you.
            </p>

            <p className="mt-4 leading-8">
              Information previously viewed or independently saved by
              the coach outside MEtrcs cannot be revoked.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Apple Health permissions
            </h2>

            <p className="leading-8">
              MEtrcs may read selected Apple Health data only with your
              permission through iOS. With your permission, MEtrcs may
              also write selected information to Apple Health, including
              body weight, dietary energy, macronutrients and hydration.
            </p>

            <p className="mt-4 leading-8">
              You can manage or revoke Apple Health permissions at any
              time in Apple Health settings. Revoking Apple Health access
              does not automatically delete information already stored
              by MEtrcs.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              How we use information
            </h2>

            <p className="leading-8">
              MEtrcs uses information to provide personal tracking,
              statistics, comparisons, training analysis, planning,
              recovery insights and coaching functionality that you
              authorize.
            </p>

            <p className="mt-4 leading-8">
              MEtrcs does not sell personal information or use
              Apple Health data for advertising or marketing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Data storage and deletion
            </h2>

            <p className="leading-8">
              MEtrcs stores information locally on your device and
              synchronizes selected records through Apple iCloud
              (CloudKit).
            </p>

            <p className="mt-4 leading-8">
              You can manage iCloud synchronization in your device's
              Apple Account settings.
            </p>

            <p className="mt-4 leading-8">
              To delete MEtrcs data stored in iCloud, open iCloud
              storage management, select MEtrcs and choose
              Delete Data from iCloud.
            </p>

            <p className="mt-4 leading-8">
              To prevent further synchronization, disable iCloud
              access for MEtrcs on all your devices.
            </p>

            <p className="mt-4 leading-8">
              Deleting iCloud data is separate from managing locally
              stored information or data in Apple Health. Disconnecting
              a coach does not delete your own history.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Exports and backups
            </h2>

            <p className="leading-8">
              If you export information from MEtrcs, you are responsible
              for storing and sharing the exported files.
            </p>

            <p className="mt-4 leading-8">
              Removing information from MEtrcs cannot remove copies
              independently saved outside the application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Your control
            </h2>

            <p className="leading-8">
              You control which Apple Health permissions you grant,
              whether MEtrcs uses iCloud synchronization on your devices,
              and which coaches you authorize to view your shared
              information through Client Hub.
            </p>

            <p className="mt-4 leading-8">
              You can revoke Apple Health permissions, disable iCloud
              synchronization, disconnect coaches and manage your
              available data using the controls described above.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Contact
            </h2>

            <p className="leading-8">
              For privacy-related questions or assistance with data
              management, contact{" "}
              <a
                href="mailto:martin@metrcs.org"
                className="text-white underline underline-offset-4"
              >
                martin@metrcs.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
