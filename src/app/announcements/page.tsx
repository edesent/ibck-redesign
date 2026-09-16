import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Fraunces, Barlow_Condensed } from "next/font/google";
import {
  ArrowLeft,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  HandHeart,
  PartyPopper,
  Handshake,
  BookOpen,
  CalendarClock,
  UtensilsCrossed,
  MoonStar,
} from "lucide-react";

import logoMark from "../../../public/ibck-logo.png";

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

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "This week's announcements from Independent Baptist Church in Keeseville, New York — gatherings, celebrations, and news for the church family.",
  alternates: { canonical: "/announcements" },
};

/* ------------------------------------------------------------------ */
/* Data — this week's announcements                                    */
/* ------------------------------------------------------------------ */

type Announcement = {
  icon: typeof HandHeart;
  eyebrow: string;
  title: string;
  body: string;
  meta?: { label: string; value: string }[];
  disk: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    icon: HandHeart,
    eyebrow: "With grateful hearts",
    title: "Thank You to Our Playground Work Crew",
    body: "Thank you to every playground work crew volunteer. Your time, strength, and care are a gift to the children of this church and to all who will play and gather there.",
    disk: "#2F5D4A",
  },
  {
    icon: PartyPopper,
    eyebrow: "Celebration · Today",
    title: "Mary Starke's 90th Birthday",
    body: "Join us after the morning service — stay and celebrate with Mary and her family.",
    disk: "#C14E33",
  },
  {
    icon: Handshake,
    eyebrow: "A word of welcome",
    title: "Welcome, Missionary John Starke",
    body: "We are glad to have you with us. Please greet John and thank God for his work.",
    disk: "#4A7C99",
  },
  {
    icon: BookOpen,
    eyebrow: "Ladies Bible study",
    title: "End Times Biblical Prophecy",
    body: "All ladies are welcome to join this study.",
    meta: [
      { label: "Begins", value: "Thursday, September 17" },
      { label: "Time", value: "5:30 p.m." },
    ],
    disk: "#8A6FA8",
  },
  {
    icon: CalendarClock,
    eyebrow: "Ladies Bible study",
    title: "Ladies Tuesday Bible Study",
    body: "Mark your calendars — a new season begins.",
    meta: [
      { label: "Begins", value: "Tuesday, October 14" },
      { label: "Time", value: "10:30 a.m." },
    ],
    disk: "#D9A13B",
  },
  {
    icon: UtensilsCrossed,
    eyebrow: "Ladies luncheon",
    title: "Ladies Luncheon",
    body: "All ladies welcome — please bring a dish to share.",
    meta: [
      { label: "When", value: "Saturday, September 26 · 12:00 noon" },
      { label: "Where", value: "The Barber Home" },
    ],
    disk: "#B5502F",
  },
  {
    icon: MoonStar,
    eyebrow: "Please note",
    title: "No Evening Service Tonight",
    body: "Enjoy the fellowship after the morning service, and plan to gather again next Lord's Day.",
    disk: "#152730",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AnnouncementsPage() {
  return (
    <main
      className={`${fraunces.variable} ${barlow.variable} min-h-screen bg-[#F7F3EA] font-sans text-[#22333B]`}
    >
      <AnnouncementsHeader />

      {/* Title band */}
      <section className="relative overflow-hidden bg-[#0E212B] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <Topo className="pointer-events-none absolute -right-24 top-8 w-[520px] text-[#F7F3EA]/[0.06]" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className={`${LABEL} inline-flex items-center gap-2.5 text-[15px] font-bold uppercase tracking-[0.3em] text-[#E7B657]`}>
            <span className="size-3 rounded-full bg-[#C14E33] ring-1 ring-white/30" aria-hidden />
            This week in the life of the church
          </p>
          <h1 className={`${DISPLAY} mt-5 text-balance text-5xl font-medium leading-[1.04] text-[#F7F3EA] sm:text-6xl`}>
            Announcements
          </h1>
          <p className={`${DISPLAY} mt-5 max-w-2xl text-lg italic leading-8 text-[#F7F3EA]/80`}>
            Please take a moment to note these gatherings and thanks.
          </p>
        </div>
      </section>

      {/* Announcement list */}
      <section className="relative bg-[#EFE9DB] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ul className="space-y-6">
            {ANNOUNCEMENTS.map((a) => (
              <li
                key={a.title}
                className="rounded-sm border border-[#152730]/10 bg-[#F7F3EA] p-7 shadow-[0_10px_30px_rgba(21,39,48,0.08)] sm:p-8"
              >
                <div className="flex flex-wrap items-start gap-5">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-full ring-1 ring-[#152730]/10"
                    style={{ backgroundColor: `${a.disk}1A` }}
                    aria-hidden
                  >
                    <a.icon className="size-6" style={{ color: a.disk }} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.24em]`} style={{ color: a.disk }}>
                      {a.eyebrow}
                    </p>
                    <h2 className={`${DISPLAY} mt-2 text-balance text-2xl font-medium leading-[1.15] text-[#152730] sm:text-[28px]`}>
                      {a.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-[#5C5A4E]">{a.body}</p>

                    {a.meta && (
                      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#152730]/10 pt-5">
                        {a.meta.map((m) => (
                          <div key={m.label}>
                            <dt className={`${LABEL} text-[12px] font-bold uppercase tracking-[0.22em] text-[#8A8571]`}>
                              {m.label}
                            </dt>
                            <dd className={`${DISPLAY} mt-1 text-lg font-medium text-[#152730]`}>{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing verse */}
      <section className="bg-[#D9A13B] py-16 text-[#1A2126] sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className={`${DISPLAY} text-balance text-2xl font-medium italic leading-snug sm:text-3xl`}>
            &ldquo;Let all things be done decently and in order.&rdquo;
          </p>
          <p className={`${LABEL} mt-5 text-[14px] font-bold uppercase tracking-[0.24em] text-[#0E212B]/70`}>
            1 Corinthians 14:40, NKJV
          </p>
          <p className={`${DISPLAY} mt-6 text-lg italic text-[#1A2126]/80`}>See you next Lord&apos;s Day.</p>
        </div>
      </section>

      <AnnouncementsFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Header + Footer                                                     */
/* ------------------------------------------------------------------ */

function AnnouncementsHeader() {
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

function AnnouncementsFooter() {
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
            &ldquo;I will lift up mine eyes unto the hills, from whence cometh my
            help.&rdquo; — Psalm 121:1
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
              <Link href="/sermons" className="text-[#F7F3EA]/70 transition hover:text-white">
                Sermons
              </Link>
            </li>
            <li>
              <Link href="/#visit" className="text-[#F7F3EA]/70 transition hover:text-white">
                Plan a Visit
              </Link>
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

/* Topographic contour texture (matches the homepage motif) */
function Topo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} aria-hidden fill="none">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${40 + i * 18} ${360 - i * 34}
             C ${150 + i * 10} ${300 - i * 30}, ${170 - i * 8} ${210 - i * 18}, ${290 + i * 6} ${190 - i * 20}
             S ${480 - i * 12} ${140 - i * 10}, ${560 - i * 14} ${60 - i * 6}`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
