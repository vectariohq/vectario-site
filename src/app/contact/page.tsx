import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Tell us what you’re building—or what’s broken. We’ll respond with a clear next step:
            a short call, a scoped assessment, or a proposed plan.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Primary contact */}
          <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Reach us</h2>

            <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
              <p>
                Email:{" "}
                <a
                  className="font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
                  href="mailto:hello@vectario.com"
                >
                  hello@vectario.com
                </a>
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                We typically respond within one business day.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:hello@vectario.com"
                className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
              >
                Email us
              </a>
              <Link
                href="/services"
                className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                View services
              </Link>
            </div>
          </section>

          {/* What to include */}
          <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">What to include</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              A few details help us respond quickly and productively:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Your goal and timeline</li>
              <li>
                Your current stack{" "}
                <span className="text-neutral-500 dark:text-neutral-400">
                  (for example: cloud provider, website platform, or tools you’re using)
                </span>
                <div className="mt-1 ml-4 text-sm text-neutral-500 dark:text-neutral-400">
                  If you’re early or non-technical, that’s fine — just tell us what you have
                  today (or that you’re starting from scratch).
                </div>
              </li>
              <li>Any constraints (security/compliance, budget, deadlines)</li>
              <li>Whether you want us to build, advise, or transition ownership to your team</li>
            </ul>
          </section>
        </div>

        {/* Reassurance */}
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">How we work</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We can develop, deploy, and maintain systems end-to-end—or step back at any point and
            transition ownership cleanly to your team. We thrive on repeat business and referrals,
            so quality, transparency, and clear communication are non-negotiable.
          </p>
        </section>
      </div>
    </main>
  );
}