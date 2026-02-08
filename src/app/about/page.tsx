import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Vectario, a senior-led cloud, software, and AI engineering consultancy focused on reliable, maintainable systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">About Vectario</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            We’re a senior-led cloud, software, and AI engineering consultancy built for complex
            systems where reliability, maintainability, and clear ownership matter.
          </p>
        </header>

        <section className="space-y-5 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We design, build, deploy, and maintain production systems—or deliver clean, maintainable
            code your team can own. We work with or without long-term commitment, and we thrive on
            repeat business and referrals, so quality, transparency, and communication are
            non-negotiable.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We build event-driven and user-driven systems: messaging, data pipelines, APIs, and web
            apps—whether you want it fully managed by us or delivered as an ownable codebase.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            For the full breakdown of service areas,{" "}
            <Link href="/services" className="font-medium hover:underline">
              see services →
            </Link>
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We offer full-scale delivery from concept to production: architecture, implementation,
            cloud hosting, CI/CD, monitoring, and ongoing iteration. Clients receive the same
            dashboards, metrics, and operational insights we use ourselves.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We collaborate as much as you prefer—embedded with your team, or leading end-to-end with
            clear checkpoints and handoff. The goal is always the same: outcomes you can operate,
            extend, and trust.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Where we’ve worked</h2>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Our backgrounds span financial services (trading, banking, lending), healthcare and
            medical systems, construction and complex logistics, e-commerce, and more—environments
            where security, reliability, and auditability matter.
          </p>
        </section>

        <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Want to work together?</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Tell us what you’re building (or what’s broken). We’ll respond with a clear next step:
            a short call, a scoped assessment, or a proposed plan.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              View services
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
