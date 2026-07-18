import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Fraunces, Barlow_Condensed } from "next/font/google";
import { ArrowLeft, MapPin, Mail, MessageCircle, Phone } from "lucide-react";

import logoMark from "../../../public/ibck-logo.png";
import { GivingSection } from "../../tools/giving/giving-section";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-label",
});

const DISPLAY = "[font-family:var(--font-display)]";
const LABEL = "[font-family:var(--font-label)]";

const CHANNEL_URL = "https://www.youtube.com/@ibckeeseville";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give online to Independent Baptist Church in Keeseville, New York — securely, in a few taps, or by mail.",
  alternates: { canonical: "/give" },
};

export default function GivePage() {
  return (
    <main
      className={`${fraunces.variable} ${barlow.variable} min-h-screen bg-[#F7F3EA] font-sans text-[#22333B]`}
    >
      <GiveHeader />

      {/* Title band */}
      <section className="relative overflow-hidden bg-[#0E212B] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className={`${LABEL} inline-flex items-center gap-2.5 text-[15px] font-bold uppercase tracking-[0.3em] text-[#E7B657]`}>
            <span className="size-3 rounded-full bg-[#2F5D4A] ring-1 ring-white/30" aria-hidden />
            Give
          </p>
          <h1 className={`${DISPLAY} mt-5 text-balance text-5xl font-medium leading-[1.04] text-[#F7F3EA] sm:text-6xl`}>
            Give Online
          </h1>
          <p className={`${DISPLAY} mt-5 max-w-2xl text-lg italic leading-8 text-[#F7F3EA]/80`}>
            Thank you for supporting the ministry of Independent Baptist
            Church — every gift helps us reach our town and send missionaries
            around the world.
          </p>
        </div>
      </section>

      {/* Giving form */}
      <section className="relative bg-[#EFE9DB] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <GivingSection />
        </div>
      </section>

      <GiveFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Header + Footer (matches the rest of the site)                      */
/* ------------------------------------------------------------------ */

function GiveHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0E212B]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={logoMark}
            alt="Independent Baptist Church logo — mountain, river, and pines"
            className="h-9 w-auto shrink-0"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className={`${DISPLAY} block truncate text-[17px] font-semibold text-[#F7F3EA]`}>
              Independent Baptist Church
            </span>
            <span className={`${LABEL} block text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D9A13B]`}>
              Keeseville · New York
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`${LABEL} hidden items-center gap-2 whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EA]/80 transition hover:text-white sm:inline-flex`}
          >
            <ArrowLeft className="size-4 text-[#D9A13B]" aria-hidden />
            Back to site
          </Link>
          <Link
            href="/#visit"
            className={`${LABEL} inline-flex h-10 items-center whitespace-nowrap rounded-sm bg-[#D9A13B] px-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#0E212B] transition hover:bg-[#E7B657]`}
          >
            Plan a Visit
          </Link>
        </div>
      </div>
    </header>
  );
}

function GiveFooter() {
  return (
    <footer className="bg-[#0B1B23] text-[#F7F3EA]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logoMark} alt="Independent Baptist Church logo" className="h-10 w-auto shrink-0" />
            <p className="leading-tight">
              <span className={`${DISPLAY} block text-lg font-semibold`}>
                Independent Baptist Church
              </span>
              <span className={`${LABEL} block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9A13B]`}>
                Keeseville · New York
              </span>
            </p>
          </div>
          <p className={`${DISPLAY} mt-5 max-w-xs text-sm italic leading-6 text-[#F7F3EA]/55`}>
            &ldquo;Every man according as he purposeth in his heart, so let him
            give.&rdquo; — 2 Corinthians 9:7
          </p>
        </div>

        <div>
          <h3 className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.28em] text-[#E7B657]`}>
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-[#F7F3EA]/70 transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#sundays" className="text-[#F7F3EA]/70 transition hover:text-white">
                Sundays
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="text-[#F7F3EA]/70 transition hover:text-white">
                Sermons
              </Link>
            </li>
            <li>
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="text-[#F7F3EA]/70 transition hover:text-white">
                YouTube channel
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.28em] text-[#E7B657]`}>
            Find us
          </h3>
          <ul className="mt-5 space-y-4 text-sm leading-6">
            <li>
              <a
                href="https://maps.google.com/?q=2030+Route+22+Keeseville+NY+12944"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                2030 Route 22, Keeseville, NY 12944
              </a>
            </li>
            <li>
              <a href="tel:+15188349620" className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                (518) 834-9620
              </a>
            </li>
            <li>
              <a href="mailto:kevin.bettinger@ibck.org" className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                kevin.bettinger@ibck.org
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/keesevilleibc" target="_blank" rel="noreferrer" className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                @keesevilleibc
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[13px] text-[#F7F3EA]/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Independent Baptist Church · Keeseville, New York</p>
          <p className={`${DISPLAY} italic`}>Psalm 121:1-2</p>
        </div>
      </div>
    </footer>
  );
}
