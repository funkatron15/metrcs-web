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
          Last updated: May 2026
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
              All training, nutrition and recovery decisions are made at your own
              risk.
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
              Availability
            </h2>

            <p className="leading-8">
              MEtrcs is provided “as is” without warranties of any kind.
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
              To the maximum extent permitted by law, MEtrcs and its creator are
              not liable for injuries, health issues, losses, damages or other
              consequences resulting from the use of the application or its
              outputs.
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
              Continued use of MEtrcs after updates to these terms constitutes
              acceptance of the revised terms.
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
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}