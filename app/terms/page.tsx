export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Terms
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Terms & Conditions
        </h1>

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
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              Use at your own risk
            </h2>

            <p className="leading-8">
              All training, nutrition and recovery decisions are made at your own
              risk. Data, calculations and analytical outputs may be inaccurate,
              incomplete or dependent on the quality of input data and devices.
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
              Changes
            </h2>

            <p className="leading-8">
              These terms may change over time as MEtrcs evolves.
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
                hello@metrcs.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}