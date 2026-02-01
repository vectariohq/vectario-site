"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteNav() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="border-b bg-white dark:bg-neutral-950">
      <nav className="mx-auto max-w-5xl flex items-center justify-between py-6 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Vectario"
            width={360}
            height={72}
            priority
            className="h-16 w-auto"
            onError={() => setLogoFailed(true)}
          />
          {logoFailed ? (
            <span className="ml-2 font-semibold tracking-tight">Vectario</span>
          ) : (
            <span className="sr-only">Vectario</span>
          )}
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/services"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  );
}