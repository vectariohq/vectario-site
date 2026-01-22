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
            Helping teams in finance, healthcare, logistics, and e-commerce design and deliver
            systems that scale and endure.
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
            Vectario is a team of senior cloud, software, and AI engineers with deep experience across
            high-stakes industries.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Our backgrounds span financial services (trading, banking, lending), healthcare and
            medical systems, construction and complex logistics, e-commerce, and more. These
            environments demand accuracy, security, and reliability—and that’s where we excel.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            We operate as a small, battle-tested team that has worked together for years. By
            combining proven engineering discipline with modern AI-assisted development and rigorous
            automated testing, we deliver solutions that are fast, reliable, and built to last.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            While we specialize in complex systems, we’re equally effective at solving focused
            problems—bringing the same rigor and ownership to every engagement.
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
          <h2 className="text-xl font-semibold tracking-tight">
            Have a focused problem or a complex system?
          </h2>
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
