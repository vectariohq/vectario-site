import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud architecture, software engineering, and AI enablement (RAG) from a senior team built for complex systems.",
};

function Card({
  title,
  bullets,
  note,
}: {
  title: string;
  bullets: string[];
  note?: string;
}) {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
      <h2 className="font-semibold">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {note ? <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">{note}</p> : null}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Senior-led delivery across cloud, software, and AI—optimized for reliability, velocity,
            and maintainability.
          </p>
        </header>

        {/* Service areas */}
        <section className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card
              title="Cloud architecture & modernization"
              bullets={[
                "Azure-native architecture and platform engineering",
                "Modernization and migration planning/execution",
                "Performance, reliability, and cost optimization",
                "Security and compliance-minded implementation",
              ]}
              note="Ideal for teams modernizing legacy systems or scaling to production reliably."
            />

            <Card
              title="Software engineering & delivery"
              bullets={[
                "Backend services and APIs (performance, correctness, maintainability)",
                "CI/CD pipelines and deployment automation",
                "Infrastructure as Code (Bicep/Terraform) and environment discipline",
                "Automated testing strategy (unit, integration, regression)",
              ]}
              note="We focus on clean, maintainable codebases that your team can own confidently."
            />

            <Card
              title="AI enablement (RAG & internal knowledge)"
              bullets={[
                "Production-grade RAG architectures (indexing, retrieval, evaluation)",
                "Secure LLM integration into real workflows",
                "AI-powered search and internal knowledge systems",
                "Guardrails, governance, and cost control",
              ]}
              note="Practical AI that improves productivity and decisions—without hype or risky shortcuts."
            />

            <Card
              title="Data pipelines & event-driven systems"
              bullets={[
                "Event-driven architecture and durable messaging",
                "Streaming/batch pipelines and large-scale processing",
                "Schema discipline and compatibility strategies",
                "Observability: logs, metrics, alerts, dashboards",
              ]}
              note="Great for teams moving toward near real-time data, integrations, or operational visibility."
            />
          </div>
        </section>

        {/* Engagement model */}
        <section className="space-y-5 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Engagement model</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We can develop, deploy, and maintain systems end-to-end—or step back at any point and
            transition ownership cleanly to your team. If you prefer to take a finished product
            in-house, we ensure the codebase is clean, well-structured, and maintainable.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Many engagements start with a focused assessment or architecture review. It’s a low-risk
            way to evaluate fit while still making meaningful progress.
          </p>
        </section>

        {/* Industries */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Where we’ve delivered</h2>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl">
            We’re comfortable in high-stakes environments where reliability, security, and correctness
            matter—especially finance (trading, banking, lending), healthcare and medical systems,
            construction and complex logistics, and e-commerce.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold">Finance</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Trading-adjacent systems, banking workflows, lending/loan platforms, and data pipelines
                where auditability and correctness matter.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold">Healthcare & medical</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Systems operating under compliance constraints (privacy, security) with strong needs
                for reliability and operational visibility.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold">Construction & logistics</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Complex operational workflows, scheduling/coordination, integrations, and systems that
                must remain dependable under real-world constraints.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold">E-commerce</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Platform performance, reliability, integrations, and instrumentation to support growth
                and smooth operations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Not sure what you need yet?</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Tell us your goal and timeframe. We’ll respond with a clear next step—often a short call
            or a scoped assessment—to help you move forward confidently.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              Contact us
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
