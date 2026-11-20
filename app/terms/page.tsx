
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Terms & Conditions
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Last updated: November 20, 2026
        </p>

        <div className="mt-12 space-y-10 text-zinc-400">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              General
            </h2>

            <p className="leading-8">
              MEtrcs is an application for tracking, analysis and planning of
              training, nutrition, hydration, recovery and related performance
              data.
            </p>

            <p className="mt-4 leading-8">
              By using MEtrcs, you agree to these Terms & Conditions and
              acknowledge the information provided in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              No medical advice
            </h2>

            <p className="leading-8">
              MEtrcs is not a medical application and does not provide medical
              advice, diagnosis or treatment.
            </p>

            <p className="mt-4 leading-8">
              Nothing inside MEtrcs should be interpreted as medical guidance or
              as a substitute for professional healthcare.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Use at your own risk
            </h2>

            <p className="leading-8">
              You are responsible for your training, nutrition and recovery
              decisions.
            </p>

            <p className="mt-4 leading-8">
              Data, calculations, analytics and recommendations may be inaccurate,
              incomplete or dependent on the quality of input data, connected
              devices and third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Professional consultation
            </h2>

            <p className="leading-8">
              Before starting or changing any training, nutrition or recovery
              routine, consult a qualified professional, especially if you have
              health issues, pain, injury or chronic conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Coaching and Client Hub
            </h2>

            <p className="leading-8">
              MEtrcs allows athletes and coaches to collaborate through Client Hub.
              A coach can access shared client information only after the client
              explicitly authorizes the connection.
            </p>

            <p className="mt-4 leading-8">
              Coaches must treat shared client information as confidential and
              use it only for the agreed coaching service. Coaches must not sell,
              disclose or use client information for advertising purposes.
            </p>

            <p className="mt-4 leading-8">
              MEtrcs provides analytical information to support coaching, but
              does not replace professional judgment. Coaches remain responsible
              for their coaching decisions and recommendations.
            </p>

            <p className="mt-4 leading-8">
              Clients may disconnect their coaches at any time. Disconnecting
              removes access to shared client information through MEtrcs,
              including historical information. It cannot undo information
              previously viewed or independently saved outside the application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Subscriptions and payments
            </h2>

            <p className="leading-8">
              Certain MEtrcs features require a paid subscription.
              Available plans, subscription periods, prices and included
              features are displayed in the application before purchase.
            </p>

            <p className="mt-4 leading-8">
              Subscriptions purchased through the Apple App Store are
              processed and billed by Apple. They automatically renew
              unless canceled by the subscriber.
            </p>

            <p className="mt-4 leading-8">
              You can manage or cancel your subscription through your
              Apple Account subscription settings. Cancellation generally
              takes effect at the end of the current paid subscription period.
            </p>

            <p className="mt-4 leading-8">
              Refunds and billing disputes are handled according to
              Apple's applicable policies and consumer protection laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Privacy and data sharing
            </h2>

            <p className="leading-8">
              MEtrcs processes training and performance information locally
              and synchronizes selected app data through Apple iCloud
              (CloudKit).
            </p>

            <p className="mt-4 leading-8">
              Details about data processing, iCloud synchronization,
              coach sharing, permissions and data deletion are explained
              in our{" "}
              <a
                href="/privacy"
                className="text-white underline underline-offset-4"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Availability
            </h2>

            <p className="leading-8">
              MEtrcs is provided on an "as available" basis, subject to
              applicable legal requirements and consumer rights.
            </p>

            <p className="mt-4 leading-8">
              Some features may change, become unavailable or be removed over
              time as the application evolves.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Limitation of liability
            </h2>

            <p className="leading-8">
              To the maximum extent permitted by applicable law, MEtrcs
              and its creator are not liable for injuries, health issues,
              losses, damages or other consequences resulting from
              inappropriate reliance on the application's estimates,
              analytics or outputs.
            </p>

            <p className="mt-4 leading-8">
              Nothing in these terms excludes or limits rights or
              liabilities that cannot legally be excluded or limited,
              including applicable consumer protection rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Changes
            </h2>

            <p className="leading-8">
              These terms may change over time as MEtrcs evolves.
            </p>

            <p className="mt-4 leading-8">
              Significant changes will be communicated where required,
              and renewed acceptance may be requested when necessary.
              Changes do not affect mandatory rights under applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Contact
            </h2>

            <p className="leading-8">
              Questions regarding these terms can be sent to{" "}
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
