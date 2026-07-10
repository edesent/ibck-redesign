import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Fraunces, Barlow_Condensed } from "next/font/google";
import { ArrowLeft, MapPin, Mail, MessageCircle, Phone, Play } from "lucide-react";

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

const CHANNEL_ID = "UCcfdb16pdrphK3mrHH71MXQ";
const CHANNEL_URL = "https://www.youtube.com/@ibckeeseville";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

/* Refresh the sermon list from YouTube at most once an hour. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch recent sermons and Sunday services from Independent Baptist Church in Keeseville, New York — preaching straight through the books of the Bible with Pastor Kevin Bettinger.",
  alternates: { canonical: "/sermons" },
};

/* ------------------------------------------------------------------ */
/* Data — pulled from the channel's public RSS feed (no API key)       */
/* ------------------------------------------------------------------ */

type Sermon = {
  videoId: string;
  title: string;
  published: string;
};

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .trim();
}

function tag(block: string, name: string): string {
  return block.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`))?.[1] ?? "";
}

async function getSermons(): Promise<Sermon[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<entry>")
      .slice(1)
      .map((block) => ({
        videoId: tag(block, "yt:videoId"),
        title: decode(tag(block, "media:title") || tag(block, "title")),
        published: tag(block, "published"),
      }))
      .filter((s) => s.videoId);
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function SermonsPage() {
  const sermons = await getSermons();
  const latest = sermons[0];
  const rest = sermons.slice(1);

  return (
    <main
      className={`${fraunces.variable} ${barlow.variable} min-h-screen bg-[#F7F3EA] font-sans text-[#22333B]`}
    >
      <SermonsHeader />

      {/* Title band */}
      <section className="relative overflow-hidden bg-[#0E212B] pb-16 pt-32 sm:pb-20 sm:pt-36">
        <Topo className="pointer-events-none absolute -right-24 top-8 w-[520px] text-[#F7F3EA]/[0.06]" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className={`${LABEL} inline-flex items-center gap-2.5 text-[15px] font-bold uppercase tracking-[0.3em] text-[#E7B657]`}>
            <span className="size-3 rounded-full bg-[#C14E33] ring-1 ring-white/30" aria-hidden />
            Watch &amp; listen
          </p>
          <h1 className={`${DISPLAY} mt-5 text-balance text-5xl font-medium leading-[1.04] text-[#F7F3EA] sm:text-6xl`}>
            Sermons
          </h1>
          <p className={`${DISPLAY} mt-5 max-w-2xl text-lg italic leading-8 text-[#F7F3EA]/80`}>
            Preaching straight through the books of the Bible, Sunday by Sunday.
            Watch the latest service or browse the archive below.
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-[#D9A13B] px-6 text-[15px] font-bold uppercase tracking-[0.14em] text-[#0E212B] transition hover:bg-[#E7B657]`}
          >
            <Play className="size-4 fill-current" aria-hidden />
            Watch on YouTube
          </a>
        </div>
      </section>

      {sermons.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {latest && <Featured sermon={latest} />}
          {rest.length > 0 && <Grid sermons={rest} />}
        </>
      )}

      <SermonsFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Featured({ sermon }: { sermon: Sermon }) {
  const date = formatDate(sermon.published);
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-sm bg-black shadow-[0_18px_50px_rgba(21,39,48,0.18)] ring-1 ring-[#152730]/10">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${sermon.videoId}`}
              title={sermon.title}
              className="block h-full w-full border-0"
              loading="lazy"
              allow="encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <p className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.28em] text-[#8A6A2F]`}>
            Latest message
          </p>
          <h2 className={`${DISPLAY} mt-3 text-balance text-3xl font-medium leading-[1.12] text-[#152730] sm:text-4xl`}>
            {sermon.title}
          </h2>
          {date && (
            <p className={`${LABEL} mt-4 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#5C5A4E]`}>
              {date}
            </p>
          )}
          <a
            href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} mt-7 inline-flex h-11 items-center gap-2 rounded-sm bg-[#0E212B] px-5 text-[14px] font-bold uppercase tracking-[0.14em] text-[#F7F3EA] transition hover:bg-[#1B3A4A]`}
          >
            <Play className="size-4 fill-current text-[#E7B657]" aria-hidden />
            Watch this service
          </a>
        </div>
      </div>
    </section>
  );
}

function Grid({ sermons }: { sermons: Sermon[] }) {
  return (
    <section className="relative bg-[#EFE9DB] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className={`${DISPLAY} text-3xl font-medium text-[#152730] sm:text-4xl`}>
            More messages
          </h2>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.16em] text-[#8A6A2F] transition hover:text-[#0E212B]`}
          >
            See everything on YouTube →
          </a>
        </div>

        <ul className="mt-10 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s) => {
            const date = formatDate(s.published);
            return (
              <li key={s.videoId}>
                <a
                  href={`https://www.youtube.com/watch?v=${s.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-sm bg-black shadow-[0_10px_30px_rgba(21,39,48,0.12)] ring-1 ring-[#152730]/10">
                    <div className="aspect-video w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${s.videoId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center bg-[#0E212B]/10 opacity-0 transition group-hover:opacity-100">
                      <span className="flex size-14 items-center justify-center rounded-full bg-[#D9A13B] text-[#0E212B] shadow-lg">
                        <Play className="size-6 translate-x-0.5 fill-current" aria-hidden />
                      </span>
                    </span>
                  </div>
                  <h3 className={`${DISPLAY} mt-4 text-balance text-lg font-medium leading-[1.25] text-[#152730] transition group-hover:text-[#8A6A2F]`}>
                    {s.title}
                  </h3>
                  {date && (
                    <p className={`${LABEL} mt-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7A776B]`}>
                      {date}
                    </p>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
      <h2 className={`${DISPLAY} text-3xl font-medium text-[#152730] sm:text-4xl`}>
        Messages are on the way.
      </h2>
      <p className="mt-4 text-lg leading-8 text-[#5C5A4E]">
        Our latest sermons live on our YouTube channel. Head over to watch and
        subscribe so you never miss a service.
      </p>
      <a
        href={CHANNEL_URL}
        target="_blank"
        rel="noreferrer"
        className={`${LABEL} mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-[#0E212B] px-6 text-[15px] font-bold uppercase tracking-[0.14em] text-[#F7F3EA] transition hover:bg-[#1B3A4A]`}
      >
        <Play className="size-4 fill-current text-[#E7B657]" aria-hidden />
        Visit our YouTube channel
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Header + Footer                                                     */
/* ------------------------------------------------------------------ */

function SermonsHeader() {
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

function SermonsFooter() {
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
              <Link href="/#sundays" className="text-[#F7F3EA]/70 transition hover:text-white">
                Sundays
              </Link>
            </li>
            <li>
              <Link href="/#visit" className="text-[#F7F3EA]/70 transition hover:text-white">
                Plan a Visit
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
              <a href="mailto:kevin.bettinger@gmail.com" className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                kevin.bettinger@gmail.com
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
