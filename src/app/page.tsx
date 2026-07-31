import Image from "next/image";
import Link from "next/link";
import { Fraunces, Barlow_Condensed } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
} from "lucide-react";

import ChatCard from "../components/chat-card";

import heroMist from "../../public/site-background.jpg";
import churchFront from "../../public/outside-the-church.jpg";
import congregationPhoto from "../../public/1000004555.jpg";
import firstTime from "../../public/inside-the-church.jpg";
import pastorPhoto from "../../public/pastor-kevin-and-joan.jpg";
import areaLighthouse from "../../public/area-0.jpg";
import areaBoat from "../../public/area-1.jpg";
import areaPeaks from "../../public/area-4.jpg";
import areaCliffs from "../../public/area-5.jpg";
import areaIsland from "../../public/area-7.jpg";
import logoMark from "../../public/ibck-logo.png";

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

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const NAV = [
  { href: "#sundays", label: "Sundays", disk: "#C14E33" },
  { href: "#visit", label: "First Visit", disk: "#E2A63B" },
  { href: "#area", label: "Our Area", disk: "#4A7C99" },
  { href: "#missions", label: "Missions", disk: "#2F5D4A" },
  { href: "/sermons", label: "Sermons", disk: "#B5502F" },
  { href: "/give", label: "Give", disk: "#D9A13B" },
  { href: "#contact", label: "Contact", disk: "#8A6FA8" },
];

const SERVICES = [
  { title: "Sunday School", time: "10:00 AM", note: "Classes for every age" },
  { title: "Morning Worship", time: "11:00 AM", note: "Nursery through Junior Church available" },
  { title: "Evening Service", time: "6:30 PM", note: "A quieter, Bible-centered gathering" },
];

const SUNDAY_CHIPS = [
  "70–85 minutes, start to handshake",
  "Hymns and modern worship — about 4 songs",
  "Preaching straight through books of the Bible",
  "Coffee bar before and after",
  "Nursery, Tiny Tots, Children's & Junior Church",
  "Come dressed however you're comfortable",
];

const ROUTE_STOPS = [
  {
    disk: "#C14E33",
    name: "Ausable Chasm",
    distance: "2 miles north",
    note: "The “Grand Canyon of the Adirondacks,” drawing travelers since 1870.",
    star: false,
  },
  {
    disk: "#D9A13B",
    name: "Independent Baptist Church",
    distance: "2030 Route 22",
    note: "Look for the steeple on the hill. The coffee is already on.",
    star: true,
  },
  {
    disk: "#2F5D4A",
    name: "Plattsburgh",
    distance: "15 miles north",
    note: "City conveniences at a North Country pace.",
    star: false,
  },
];

const SEASONS = [
  { n: "01", name: "Winter" },
  { n: "02", name: "Spring" },
  { n: "03", name: "Summer" },
  { n: "04", name: "Fall" },
];

const GALLERY = [
  {
    image: areaLighthouse,
    caption: "Bluff Point Light, Valcour Island — guiding Champlain since 1874",
    rotate: "-rotate-2",
    portrait: false,
  },
  {
    image: areaPeaks,
    caption: "The Adirondacks from the middle of the lake",
    rotate: "rotate-1",
    portrait: false,
  },
  {
    image: areaIsland,
    caption: "Scouting a picnic spot the slow way",
    rotate: "-rotate-1",
    portrait: true,
  },
  {
    image: areaCliffs,
    caption: "Champlain's limestone palisades",
    rotate: "rotate-2",
    portrait: false,
  },
  {
    image: areaBoat,
    caption: "Summer Sundays end like this",
    rotate: "-rotate-1",
    portrait: false,
  },
];

const MISSIONARIES: { name: string; org: string; url?: string }[] = [
  { name: "John Starke", org: "Equipping the Saints" },
  { name: "Jason McGuire", org: "New York Families Action" },
  { name: "Bill & Debbie Bosley", org: "Ethnos 360", url: "https://ethnos360.org" },
  { name: "Jonathan & Cherith Teachout", org: "Baptist Mid-Missions" },
  { name: "Joy Wesson", org: "BIMI" },
  { name: "Tim & Marsha Weeks", org: "Baptist Church Planters" },
  { name: "Wion & Shirley Wleh", org: "Cup of Cold Water Ministries" },
  { name: "Tim & Barb Vermilyea", org: "ABWE" },
  { name: "Wayne Royce", org: "ABWE" },
  { name: "Adirondack Christian School", org: "Right here in the North Country" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function IbckRedesignPage() {
  return (
    <main
      className={`${fraunces.variable} ${barlow.variable} min-h-screen bg-[#F7F3EA] font-sans text-[#22333B]`}
    >
      <Header />
      <Hero />
      <RouteBand />
      <SundaySection />
      <PastorSection />
      <AreaGallery />
      <SeasonsSection />
      <MissionsSection />
      <CredoBand />
      <LiveStreamSection />
      <VisitSection />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header() {
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

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${LABEL} group inline-flex items-center gap-2 whitespace-nowrap text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EA]/80 transition hover:text-white`}
            >
              <span
                className="size-2.5 rounded-full ring-1 ring-white/30 transition group-hover:scale-125"
                style={{ backgroundColor: item.disk }}
                aria-hidden
              />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+15188349620"
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#F7F3EA]/85 transition hover:text-white xl:inline-flex"
          >
            <Phone className="size-4 text-[#D9A13B]" aria-hidden />
            (518) 834-9620
          </a>
          <a
            href="#visit"
            className={`${LABEL} inline-flex h-10 items-center whitespace-nowrap rounded-sm bg-[#D9A13B] px-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#0E212B] transition hover:bg-[#E7B657]`}
          >
            Plan a Visit
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0E212B]">
      <Image
        src={heroMist}
        alt="Morning mist over an Adirondack lake near Keeseville"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,33,43,0.72)_0%,rgba(14,33,43,0.25)_38%,rgba(14,33,43,0.55)_72%,rgba(14,33,43,0.9)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-36 lg:px-8">
        <p className={`${LABEL} inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold uppercase tracking-[0.3em] text-[#E7B657]`}>
          Keeseville, New York
          <span className="inline-block size-1.5 rounded-full bg-[#E7B657]/70" aria-hidden />
          Adirondack foothills
          <span className="inline-block size-1.5 rounded-full bg-[#E7B657]/70" aria-hidden />
          Est. 1958
        </p>

        <h1 className={`${DISPLAY} mt-5 max-w-4xl text-balance text-5xl font-medium leading-[1.04] text-[#F7F3EA] sm:text-6xl lg:text-[76px]`}>
          Between the mountains and the lake, there&apos;s a church that feels
          like <em className="text-[#E7B657]">home</em>.
        </h1>

        <p className={`${DISPLAY} mt-6 max-w-2xl text-lg italic leading-8 text-[#F7F3EA]/85 sm:text-xl`}>
          &ldquo;I will lift up mine eyes unto the hills, from whence cometh my
          help.&rdquo;
          <span className={`${LABEL} ml-3 not-italic text-[14px] font-semibold uppercase tracking-[0.24em] text-[#E7B657]`}>
            Psalm 121:1
          </span>
        </p>

        <div className="mt-9 flex flex-col gap-4 rounded-sm border border-[#D9A13B]/50 bg-[#D9A13B]/15 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
          <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-sm sm:h-28 sm:w-48">
            <Image
              src="https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/kdYOSBy5PeqU0R_M4ypc856j_1wsaZz5/1000002250-9YQFvYm1C9HdWuZiCLEwnjADhUkmYx.jpg"
              alt="Ausable Chasm, the gorge near our church where the picnic will be held"
              fill
              sizes="(min-width: 640px) 192px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.24em] text-[#E7B657]`}>
              Special Event · Sunday, August 9
            </p>
            <p className={`${DISPLAY} mt-1 text-xl font-medium text-[#F7F3EA] sm:text-2xl`}>
              Church at the Chasm — IBC Annual Church Picnic
            </p>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-[#F7F3EA]/75">
              Join us at the Ausable Chasm pavilion at 11:00 AM for worship, songs, and a BBQ — bring a lawn chair! This is our only gathering that day (no Sunday School or evening service).
              Need a ride? Call (518) 834-9620.
            </p>
          </div>
          <a
            href="tel:+15188349620"
            className={`${LABEL} inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-sm bg-[#D9A13B] px-5 text-[14px] font-bold uppercase tracking-[0.14em] text-[#0E212B] transition hover:bg-[#E7B657]`}
          >
            Need a ride? Call us
          </a>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#visit"
            className={`${LABEL} inline-flex h-13 items-center justify-center gap-2 rounded-sm bg-[#D9A13B] px-7 py-4 text-[16px] font-bold uppercase tracking-[0.14em] text-[#0E212B] transition hover:bg-[#E7B657]`}
          >
            Plan your first visit
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="#area"
            className={`${LABEL} inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-[#F7F3EA]/35 bg-white/5 px-7 py-4 text-[16px] font-bold uppercase tracking-[0.14em] text-[#F7F3EA] backdrop-blur-sm transition hover:bg-white/12`}
          >
            See where we live
          </a>
        </div>

        {/* Trailhead sign */}
        <div className="mt-12 overflow-hidden rounded-sm border border-white/14 bg-[#0B1B23]/80 backdrop-blur-md">
          <p className={`${LABEL} border-b border-white/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.3em] text-[#E7B657]`}>
            Trailhead — weekly gatherings
          </p>
          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {SERVICES.map((s) => (
              <div key={s.title} className="px-5 py-4">
                <p className={`${LABEL} text-[13px] font-semibold uppercase tracking-[0.22em] text-[#F7F3EA]/60`}>
                  {s.title}
                </p>
                <p className={`${DISPLAY} mt-1 text-2xl font-medium text-[#F7F3EA]`}>{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Ridge className="relative z-10 -mb-px w-full text-[#F7F3EA]" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Route 22 wayfinding band                                            */
/* ------------------------------------------------------------------ */

function RouteBand() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EA] pb-24 pt-14 sm:pb-28">
      <Topo className="pointer-events-none absolute -right-24 -top-10 w-[640px] text-[#C9B98A]/40" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker disk="#C14E33">You already know the way</Kicker>
            <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] text-[#152730] sm:text-5xl`}>
              If you can find Ausable Chasm, you can find us.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5C5A4E]">
              Keeseville is the town at the mouth of the Chasm — the
              &ldquo;Grand Canyon of the Adirondacks&rdquo; that&apos;s been
              drawing travelers up Route 22 since 1870. Our church sits on that
              same road, two miles south. Same sandstone, same river, same
              welcome.
            </p>
          </div>
          <RouteShield />
        </div>

        {/* The route line */}
        <div className="relative mt-14">
          <div
            className="absolute bottom-0 left-[13px] top-0 border-l-2 border-dashed border-[#9AA08B] lg:bottom-auto lg:left-0 lg:right-0 lg:top-[13px] lg:border-l-0 lg:border-t-2"
            aria-hidden
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {ROUTE_STOPS.map((stop) => (
              <li key={stop.name} className="relative flex gap-5 lg:block">
                <span
                  className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full ring-4 ring-[#F7F3EA]"
                  style={{ backgroundColor: stop.disk }}
                  aria-hidden
                >
                  {stop.star && (
                    <svg viewBox="0 0 24 24" className="size-4 fill-[#0E212B]">
                      <path d="M12 2l2.6 6.6 7 .5-5.4 4.5 1.7 6.9L12 16.7l-5.9 3.8 1.7-6.9L2.4 9.1l7-.5L12 2z" />
                    </svg>
                  )}
                </span>
                <div className="lg:mt-5">
                  <p className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.2em] text-[#8A6A2F]`}>
                    {stop.distance}
                  </p>
                  <h3 className={`${DISPLAY} mt-1 text-2xl font-medium leading-snug text-[#152730]`}>
                    {stop.name}
                  </h3>
                  <p className="mt-2 max-w-xs leading-7 text-[#5C5A4E]">{stop.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className={`${DISPLAY} mt-14 text-lg italic text-[#5C5A4E]`}>
          New York City? 280 miles south — and it feels even farther.
          <span className="not-italic"> Most folks are surprised New York can be this rural, this quiet, this beautiful. We&apos;re not.</span>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sundays                                                             */
/* ------------------------------------------------------------------ */

function SundaySection() {
  return (
    <section id="sundays" className="relative overflow-hidden bg-[#0E212B] py-24 text-[#F7F3EA] sm:py-28">
      <Image
        src={firstTime}
        alt="The congregation standing to sing on a Sunday morning at Independent Baptist Church"
        fill
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,33,43,0.86)_0%,rgba(14,33,43,0.5)_45%,rgba(14,33,43,0.86)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Kicker disk="#C14E33" dark>
            Sundays at IBC
          </Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] sm:text-5xl`}>
            The real room, the real people, no production.
          </h2>
          <p className={`${LABEL} mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#F7F3EA]/55`}>
            That&apos;s our actual sanctuary behind these words — a Sunday morning like any other
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex items-center justify-between gap-4 rounded-sm border border-white/14 bg-[#0B1B23]/75 px-5 py-4 backdrop-blur-sm transition hover:border-[#D9A13B]/60 hover:bg-[#0B1B23]/85"
            >
              <div>
                <p className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.22em] text-[#E7B657]`}>
                  {s.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#F7F3EA]/65">{s.note}</p>
              </div>
              <p className={`${DISPLAY} whitespace-nowrap text-2xl font-medium`}>{s.time}</p>
            </div>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {SUNDAY_CHIPS.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-white/20 bg-[#0B1B23]/60 px-3.5 py-1.5 text-sm leading-6 text-[#F7F3EA]/85 backdrop-blur-sm"
            >
              {chip}
            </li>
          ))}
        </ul>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center">
          <p className={`${DISPLAY} text-balance text-3xl font-medium italic leading-snug text-[#F7F3EA] sm:text-4xl`}>
            &ldquo;You can question anything we do — but be nice.&rdquo;
          </p>
          <cite className={`${LABEL} mt-4 block text-[13px] font-semibold uppercase not-italic tracking-[0.28em] text-[#E7B657]`}>
            House rule, straight from our congregation
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pastor                                                              */
/* ------------------------------------------------------------------ */

function PastorSection() {
  return (
    <section id="visit" className="bg-[#F7F3EA] py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <figure className="mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-sm border-8 border-white shadow-[0_18px_50px_rgba(21,39,48,0.18)]">
            <Image
              src={pastorPhoto}
              alt="Pastor Kevin Bettinger and his wife Joan bundled up outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
            />
          </div>
          <figcaption className={`${LABEL} mt-4 text-center text-[13px] font-semibold uppercase tracking-[0.24em] text-[#8A8571]`}>
            Kevin &amp; Joan Bettinger — the hat gives away Detroit
          </figcaption>
        </figure>

        <div>
          <Kicker disk="#E2A63B">Meet the pastor</Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] text-[#152730] sm:text-5xl`}>
            Our pastor found his way here, too.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#5C5A4E]">
            <p>
              Pastor Kevin Bettinger spent 15 years in executive protection for
              Chrysler in Detroit before God called him into full-time ministry
              in 2015 — first Idaho, then North Carolina, and in September 2024,
              home to Keeseville with his wife Joan and their two black Labs.
            </p>
            <p>
              He hikes, he birds, he reads — which makes the Adirondacks less
              of an assignment and more of an answered prayer. If you&apos;re
              new to the North Country, you won&apos;t have to explain what
              that&apos;s like. He gets it.
            </p>
          </div>
          <p className={`${DISPLAY} mt-8 border-l-4 border-[#D9A13B] pl-5 text-2xl font-medium italic leading-snug text-[#152730]`}>
            &ldquo;Love God. Love people. Preach solid, edifying
            messages.&rdquo;
          </p>
          <p className={`${LABEL} mt-3 pl-5 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#8A8571]`}>
            Pastor Kevin&apos;s whole job description
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Area gallery                                                        */
/* ------------------------------------------------------------------ */

function AreaGallery() {
  return (
    <section id="area" className="relative overflow-hidden bg-[#ECE4D0] py-24 sm:py-28">
      <Topo className="pointer-events-none absolute -left-32 bottom-0 w-[560px] rotate-180 text-[#C9B98A]/50" />
      <Compass className="pointer-events-none absolute right-10 top-14 hidden w-44 text-[#8A6A2F] lg:block xl:right-16" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Kicker disk="#4A7C99">Our area</Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] text-[#152730] sm:text-5xl`}>
            The unofficial sixth Great Lake is our backyard.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5C5A4E]">
            These aren&apos;t stock photos. They were shot from our own boats on
            Lake Champlain — lighthouse runs past Valcour Island, picnic
            landings, the High Peaks stacked blue on the horizon. This is the
            water and the country our church family lives in all week.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-8 lg:gap-10">
          {GALLERY.map((photo) => (
            <figure
              key={photo.caption}
              className={`${photo.rotate} w-64 shrink-0 rounded-sm bg-white p-3 pb-4 shadow-[0_14px_36px_rgba(21,39,48,0.16)] transition duration-300 hover:rotate-0 hover:shadow-[0_22px_48px_rgba(21,39,48,0.22)] sm:w-72`}
            >
              <div className={`relative overflow-hidden ${photo.portrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.image}
                  alt={photo.caption}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${DISPLAY} mt-3 px-1 text-[15px] italic leading-6 text-[#3F4A50]`}>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className={`${DISPLAY} mx-auto mt-16 max-w-3xl text-center text-2xl font-medium italic leading-snug text-[#152730] sm:text-3xl`}>
          &ldquo;Many people are surprised that an area in New York can be as
          rural and beautiful as ours.&rdquo;
        </p>
        <p className={`${LABEL} mt-3 text-center text-[13px] font-semibold uppercase tracking-[0.28em] text-[#8A8571]`}>
          Consider this page our proof
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Seasons                                                             */
/* ------------------------------------------------------------------ */

function SeasonsSection() {
  return (
    <section className="relative bg-[#0E212B] py-24 text-[#F7F3EA] sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Kicker disk="#2F5D4A" dark>
            North Country life
          </Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] sm:text-5xl`}>
            Four real seasons. One steady church.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map((season) => (
            <article key={season.name} className="bg-[#0E212B] p-8 text-center">
              <p className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.3em] text-[#E7B657]`}>
                {season.n}
              </p>
              <h3 className={`${DISPLAY} mt-3 text-4xl font-medium sm:text-5xl`}>{season.name}</h3>
            </article>
          ))}
        </div>

        <p className={`${DISPLAY} mx-auto mt-14 max-w-3xl text-center text-2xl font-medium italic leading-snug text-[#F7F3EA] sm:text-3xl`}>
          Whatever season you&apos;re in — of the year, or of life — there&apos;s
          a seat and hot coffee waiting.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Missions                                                            */
/* ------------------------------------------------------------------ */

function MissionsSection() {
  return (
    <section id="missions" className="relative overflow-hidden bg-[#F7F3EA] py-24 sm:py-28">
      <Compass className="pointer-events-none absolute -right-48 top-1/2 w-[760px] -translate-y-1/2 text-[#8A6A2F]/10 sm:-right-40" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <Kicker disk="#2F5D4A">Missions</Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] text-[#152730] sm:text-5xl`}>
            Rooted in Keeseville. Reaching the world.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#5C5A4E]">
            From the Chasm to the ends of the earth — IBC helps send and
            sustain missionaries on multiple continents, and invests in
            Christian education right here in the North Country.
          </p>
        </div>

        <ul className="grid content-start gap-x-8 gap-y-1 sm:grid-cols-2">
          {MISSIONARIES.map((m) => (
            <li
              key={m.name}
              className="flex items-baseline justify-between gap-4 border-b border-[#DCD2BB] py-3.5"
            >
              <span className={`${DISPLAY} text-lg font-medium text-[#152730]`}>{m.name}</span>
              {m.url ? (
                <a
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${LABEL} text-right text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A8571] underline decoration-[#DCD2BB] underline-offset-4 transition hover:text-[#2F5D4A] hover:decoration-[#2F5D4A]`}
                >
                  {m.org}
                </a>
              ) : (
                <span className={`${LABEL} text-right text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A8571]`}>
                  {m.org}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Credo band                                                          */
/* ------------------------------------------------------------------ */

function CredoBand() {
  return (
    <section className="bg-[#D9A13B] py-20 text-[#1A2126] sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.32em] text-[#0E212B]/70`}>
          Our mission
        </p>
        <p className={`${DISPLAY} mt-6 text-balance text-3xl font-medium italic leading-snug sm:text-4xl`}>
          &ldquo;To glorify God by proclaiming the gospel of Jesus Christ
          through the power of the Holy Spirit, for the salvation of the lost
          and the Christlikeness of the church.&rdquo;
        </p>
        <p className={`${LABEL} mt-8 text-[14px] font-bold uppercase tracking-[0.24em] text-[#0E212B]/70`}>
          Founded 1958 · Independent &amp; congregational · Bible-first
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Live stream                                                         */
/* ------------------------------------------------------------------ */

function LiveStreamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EA] py-24 sm:py-28">
      <Topo className="pointer-events-none absolute -right-28 top-6 w-[520px] text-[#C9B98A]/40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Kicker disk="#4A7C99">Sundays, live</Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] text-[#152730] sm:text-5xl`}>
            Can&apos;t make it up the mountain? Worship with us online.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#5C5A4E]">
            Snowed in, traveling, or homebound — the whole service streams live
            on our YouTube channel every Sunday, and each one stays up to watch
            again any time.
          </p>
          <a
            href="https://www.youtube.com/@ibckeeseville"
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-[#0E212B] px-6 text-[15px] font-bold uppercase tracking-[0.14em] text-[#F7F3EA] transition hover:bg-[#1B3A4A]`}
          >
            <PlayCircle className="size-4 text-[#E7B657]" aria-hidden />
            Watch on YouTube
          </a>
          <p className="mt-4">
            <Link
              href="/sermons"
              className={`${LABEL} text-[14px] font-bold uppercase tracking-[0.16em] text-[#8A6A2F] transition hover:text-[#0E212B]`}
            >
              Browse all sermons →
            </Link>
          </p>
        </div>

        <figure className="justify-self-center">
          <div className="rotate-1 rounded-sm bg-white p-3 pb-4 shadow-[0_18px_50px_rgba(21,39,48,0.18)] transition duration-300 hover:rotate-0">
            <div className="aspect-video w-[480px] max-w-full overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUcfdb16pdrphK3mrHH71MXQ"
                className="block h-full w-full border-0"
                title="Independent Baptist Church — latest service on YouTube"
                loading="lazy"
                allow="accelerated-2d-canvas; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption className={`${DISPLAY} mt-3 px-1 text-[15px] italic leading-6 text-[#3F4A50]`}>
              The most recent service from @ibckeeseville — this updates itself
              after every upload, no webmaster required.
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Visit / contact                                                     */
/* ------------------------------------------------------------------ */

function VisitSection() {
  return (
    <section id="contact" className="relative bg-[#0E212B] py-24 text-[#F7F3EA] sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <Kicker disk="#8A6FA8" dark>
            Come see us
          </Kicker>
          <h2 className={`${DISPLAY} mt-4 text-balance text-4xl font-medium leading-[1.08] sm:text-5xl`}>
            &ldquo;Come and visit us if you&apos;re in the area. We love to
            meet new people.&rdquo;
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#F7F3EA]/75">
            Headed to the Chasm, passing through on Route 22 — or looking
            for a church to call home. Either way, that
            invitation is the whole policy.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <ContactCard
              href="https://maps.google.com/?q=2030+Route+22+Keeseville+NY+12944"
              icon={MapPin}
              label="Find us"
              value="2030 Route 22, Keeseville, NY 12944"
            />
            <ContactCard
              href="tel:+15188349620"
              icon={Phone}
              label="Call"
              value="(518) 834-9620"
            />
            <ChatCard />
            <ContactCard
              href="https://www.facebook.com/keesevilleibc"
              icon={MessageCircle}
              label="Facebook"
              value="@keesevilleibc"
            />
          </div>
        </div>

        <div className="flex w-full max-w-md flex-col gap-8 self-center justify-self-center">
          <figure className="rotate-1 rounded-sm bg-white p-3 pb-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={churchFront}
                alt="The white Independent Baptist Church building with its steeple on Route 22"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className={`${DISPLAY} mt-3 px-1 text-[15px] italic leading-6 text-[#3F4A50]`}>
              Look for the steeple on the hill — flag out front, visitors welcome.
            </figcaption>
          </figure>

          <figure className="-rotate-1 rounded-sm bg-white p-3 pb-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={congregationPhoto}
                alt="Our congregation gathered together on a patriotic Sunday"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className={`${DISPLAY} mt-3 px-1 text-[15px] italic leading-6 text-[#3F4A50]`}>
              Our church family — come find your seat among us.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-sm border border-white/14 bg-white/[0.05] p-5 transition hover:border-[#D9A13B]/60 hover:bg-white/[0.09]"
    >
      <div className="flex items-center justify-between">
        <Icon className="size-5 text-[#E7B657]" aria-hidden />
        <ArrowUpRight
          className="size-4 text-[#F7F3EA]/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E7B657]"
          aria-hidden
        />
      </div>
      <p className={`${LABEL} mt-4 text-[12px] font-bold uppercase tracking-[0.24em] text-[#F7F3EA]/55`}>
        {label}
      </p>
      <p className="mt-1.5 break-words font-semibold leading-6 text-[#F7F3EA]">{value}</p>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-[#0B1B23] text-[#F7F3EA]">
      <Ridge className="w-full rotate-180 text-[#0E212B]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-14 pt-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1.1fr] lg:px-8">
        {/* Identity */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={logoMark}
              alt="Independent Baptist Church logo"
              className="h-10 w-auto shrink-0"
            />
            <p className="leading-tight">
              <span className={`${DISPLAY} block text-lg font-semibold`}>
                Independent Baptist Church
              </span>
              <span className={`${LABEL} block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9A13B]`}>
                Keeseville · New York
              </span>
            </p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#F7F3EA]/65">
            A Bible-preaching church in the Adirondack foothills since 1958 —
            between the mountains and the lake, on Route 22.
          </p>
          <p className={`${DISPLAY} mt-5 max-w-xs text-sm italic leading-6 text-[#F7F3EA]/55`}>
            &ldquo;I will lift up mine eyes unto the hills, from whence cometh
            my help.&rdquo; — Psalm 121:1
          </p>
        </div>

        {/* Gather */}
        <div>
          <h3 className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.28em] text-[#E7B657]`}>
            Gather with us
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.title} className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-[#F7F3EA]/70">{s.title}</span>
                <span className={`${DISPLAY} whitespace-nowrap font-medium`}>{s.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className={`${LABEL} text-[13px] font-bold uppercase tracking-[0.28em] text-[#E7B657]`}>
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-2.5 text-sm text-[#F7F3EA]/70 transition hover:text-white"
                >
                  <span
                    className="size-2 rounded-full ring-1 ring-white/25 transition group-hover:scale-125"
                    style={{ backgroundColor: item.disk }}
                    aria-hidden
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
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
              <a
                href="tel:+15188349620"
                className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                (518) 834-9620
              </a>
            </li>
            <li>
              <a
                href="mailto:kevin.bettinger@ibck.org"
                className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-[#D9A13B]" aria-hidden />
                kevin.bettinger@ibck.org
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/keesevilleibc"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-[#F7F3EA]/70 transition hover:text-white"
              >
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

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Kicker({
  children,
  disk,
  dark = false,
}: {
  children: React.ReactNode;
  disk: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`${LABEL} inline-flex items-center gap-2.5 text-[15px] font-bold uppercase tracking-[0.3em] ${
        dark ? "text-[#E7B657]" : "text-[#8A6A2F]"
      }`}
    >
      <span
        className={`size-3 rounded-full ${dark ? "ring-1 ring-white/30" : "ring-1 ring-[#152730]/20"}`}
        style={{ backgroundColor: disk }}
        aria-hidden
      />
      {children}
    </p>
  );
}

/* Layered ridgeline section divider */
function Ridge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 110" className={className} aria-hidden preserveAspectRatio="none">
      <path
        d="M0 84 L110 58 L230 80 L360 40 L500 74 L640 50 L780 82 L920 46 L1060 76 L1200 56 L1330 84 L1440 66 V110 H0 Z"
        fill="currentColor"
        opacity="0.34"
      />
      <path
        d="M0 94 L140 70 L280 90 L430 58 L580 88 L730 64 L880 92 L1030 62 L1180 88 L1320 72 L1440 92 V110 H0 Z"
        fill="currentColor"
        opacity="0.62"
      />
      <path
        d="M0 104 L160 86 L330 100 L500 80 L670 100 L840 84 L1010 102 L1180 82 L1330 100 L1440 90 V110 H0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Topographic contour texture */
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

/* Ausable Chasm gorge illustration — original line art, matches Topo/Ridge/Compass style */
function ChasmIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 140" className={className} aria-hidden preserveAspectRatio="xMidYMid slice">
      {/* far canyon walls */}
      <path d="M0 10 L70 10 L52 70 L0 70 Z" fill="currentColor" opacity="0.22" />
      <path d="M240 10 L170 10 L188 70 L240 70 Z" fill="currentColor" opacity="0.22" />
      {/* mid canyon walls, layered sandstone strata */}
      <path d="M0 28 L88 28 L64 105 L0 105 Z" fill="currentColor" opacity="0.4" />
      <path d="M240 28 L152 28 L176 105 L240 105 Z" fill="currentColor" opacity="0.4" />
      {[38, 50, 62, 74].map((y) => (
        <g key={y} opacity="0.3">
          <path d={`M4 ${y} L${84 - (y - 28) * 0.3} ${y}`} stroke="currentColor" strokeWidth="1" />
          <path d={`M236 ${y} L${156 + (y - 28) * 0.3} ${y}`} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      {/* near canyon walls, converging to the gorge floor */}
      <path d="M0 46 L104 46 L76 140 L0 140 Z" fill="currentColor" opacity="0.72" />
      <path d="M240 46 L136 46 L164 140 L240 140 Z" fill="currentColor" opacity="0.72" />
      {/* river running through the gorge */}
      <path d="M76 140 L104 46 L136 46 L164 140 Z" fill="currentColor" opacity="0.14" />
      <path
        d="M96 140 C 100 110, 112 90, 108 66 C 106 56, 112 50, 118 46"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
        fill="none"
      />
      {/* pines along the rim */}
      {[14, 26, 200, 214].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${i < 2 ? 28 : 28} l6 -16 l6 16 l-4 0 l0 6 l-4 0 l0 -6 Z`}
          fill="currentColor"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

/* NY Route 22 shield */
function RouteShield() {
  return (
    <div className="inline-flex flex-col items-center" aria-hidden>
      <div className={`${LABEL} rounded-md border-[3px] border-[#152730] bg-white px-5 py-2 text-center shadow-[3px_3px_0_rgba(21,39,48,0.18)]`}>
        <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-[#152730]">
          New York
        </span>
        <span className={`${DISPLAY} block text-4xl font-semibold leading-none text-[#152730]`}>
          22
        </span>
      </div>
      <span className={`${LABEL} mt-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#8A8571]`}>
        Our road
      </span>
    </div>
  );
}

/* Compass rose */
function Compass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden fill="none">
      <circle cx="80" cy="80" r="66" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="80" cy="80" r="54" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M80 18 L88 72 L80 80 L72 72 Z" fill="currentColor" />
      <path d="M80 142 L88 88 L80 80 L72 88 Z" fill="currentColor" opacity="0.45" />
      <path d="M18 80 L72 72 L80 80 L72 88 Z" fill="currentColor" opacity="0.45" />
      <path d="M142 80 L88 72 L80 80 L88 88 Z" fill="currentColor" opacity="0.45" />
      <circle cx="80" cy="80" r="5" fill="currentColor" />
      <text x="80" y="12" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="700">
        N
      </text>
    </svg>
  );
}
