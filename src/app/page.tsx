import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Vectario",
  },
  description:
    "Senior cloud, software, and AI engineering—built for complex systems. We help teams design and deliver systems that scale and endure.",
  alternates: {
    canonical: "/",
  },
};

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">{desc}</p>
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

          <p className="text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl max-w-3xl">
            Helping teams in finance, healthcare, logistics, and e-commerce design and
            deliver systems that scale and endure.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
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
          </div>
        </section>

        {/* Intro */}
        <section className="mt-16 space-y-6">
          <p className="text-neutral-900 dark:text-neutral-100 leading-relaxed font-semibold max-w-3xl">
            Vectario is a senior-led cloud, software, and AI engineering consultancy focused on
            reliable, maintainable systems.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 max-w-3xl">
            <li>You need a foundation fast and want to avoid costly rewrites.</li>
            <li>You’re not ready for full-time hires, but still need senior execution.</li>
            <li>You need an extra senior engineer to get something over the finish line.</li>
          </ul>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            Want more detail on how we work and what we build?{" "}
            <Link href="/about" className="font-medium hover:underline">
              Read about us →
            </Link>
          </p>
        </section>

        {/* Services preview */}
        <section className="mt-16 space-y-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
            <Link
              href="/services"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
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
        <section className="mt-16 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <h2 className="text-xl font-semibold tracking-tight">No sales pitch, no pressure</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">
            All questions are welcome. We do this because we love it. Tell us what you’re
            building—or what’s broken—and we’ll respond with a clear next step: a short call, a
            scoped assessment, or a proposed plan, or simple advice.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
