import Link from "next/link";

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Senior cloud, software, and AI engineering—built for complex systems.
          </h1>

          <p className="text-lg text-neutral-700 sm:text-xl max-w-3xl">
            Helping teams in finance, healthcare, logistics, and e-commerce design and
            deliver systems that scale and endure.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50"
            >
              View services
            </Link>
          </div>
        </section>

        {/* Intro */}
        <section className="mt-16 space-y-5">
          <p className="text-neutral-800 leading-relaxed font-semibold">
            Vectario is a senior-led cloud, software, and AI engineering consultancy focused on
            reliable, maintainable systems.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            We can design, build, deploy, and maintain your solution—or deliver clean, maintainable
            code your team can own. We work with or without long-term commitment, and we thrive on
            repeat business and word of mouth, so quality, transparency, and communication are
            non‑negotiable.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Whether you’re just starting and need a foundation fast, not ready for full-time hires,
            or need an extra senior engineer to get something over the finish line—we can help.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Our backgrounds span financial services (trading, banking, lending), healthcare and
            medical systems, construction and complex logistics, e-commerce, and more—environments
            where security, reliability, and auditability matter.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            We offer full-scale delivery from concept to production: architecture, implementation,
            cloud hosting, CI/CD, monitoring, and ongoing iteration. Clients receive the same
            dashboards, metrics, and operational insights we use ourselves. We collaborate as much
            as you prefer—embedded with your team, or leading end-to-end with clear checkpoints and
            handoff.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            We build event-driven and user-driven systems—from messaging and data pipelines to APIs
            and web apps—whether you want it fully managed by us or delivered as clean, maintainable
            code your team can own.
          </p>
        </section>

        {/* Services preview */}
        <section className="mt-16 space-y-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
            <Link
              href="/services"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              See all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ServiceCard
              title="Cloud architecture & modernization"
              desc="Azure-native design, migrations, performance, reliability, and cost optimization."
            />
            <ServiceCard
              title="AI enablement (RAG & internal knowledge)"
              desc="Production-grade RAG, secure LLM integration, and AI-powered internal tooling."
            />
            <ServiceCard
              title="Data pipelines & event-driven systems"
              desc="Durable messaging, streaming, schema discipline, and observability at scale."
            />
            <ServiceCard
              title="Delivery acceleration"
              desc="CI/CD, IaC, and test strategies that increase velocity without sacrificing quality."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-lg border border-neutral-200 p-8">
          <h2 className="text-xl font-semibold tracking-tight">Ready to talk?</h2>
          <p className="mt-2 text-neutral-700 max-w-2xl">
            Tell us what you’re building—or what’s broken. We’ll respond with a clear next step:
            a short call, a scoped assessment, or a proposed plan.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
