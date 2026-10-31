import {
  Droplets,
  Gift,
  GraduationCap,
  Heart,
  Megaphone,
  Music,
  Package,
  Utensils,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Weekly announcements — the single place to update each week.        */
/* Used by the /announcements page and the homepage callout.           */
/* ------------------------------------------------------------------ */

/** Shown on the homepage callout and the announcements page. */
export const ANNOUNCEMENTS_UPDATED = "November 1, 2026";

export type Announcement = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  meta?: { label: string; value: string }[];
  disk: string;
  /** Short one-line summary used in the homepage callout. */
  chip: string;
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    icon: Megaphone,
    eyebrow: "Today",
    title: "Church Outreach Packet Distribution",
    body: "Church Outreach Packet Distribution begins today!",
    meta: [{ label: "When", value: "Today · Sunday, November 1" }],
    disk: "#C14E33",
    chip: "Outreach Packet Distribution begins today",
  },
  {
    icon: Package,
    eyebrow: "Operation Christmas Child",
    title: "Operation Christmas Child Workday",
    body: "Join us for the Operation Christmas Child workday.",
    meta: [
      { label: "When", value: "Tuesday, November 3 · 9:30 a.m." },
    ],
    disk: "#D9A13B",
    chip: "OCC Workday Nov 3",
  },
  {
    icon: Gift,
    eyebrow: "Operation Christmas Child",
    title: "Operation Christmas Child Box Packing",
    body: "Come help pack boxes for children around the world.",
    meta: [
      { label: "When", value: "Saturday, November 14 · 11:00 a.m." },
    ],
    disk: "#5B4B8A",
    chip: "OCC Box Packing Nov 14",
  },
  {
    icon: Music,
    eyebrow: "Concert",
    title: "Stephen Forester Holiday Concert",
    body: "Join us for an evening of music. Cookie fellowship to follow.",
    meta: [
      { label: "When", value: "Saturday, November 21 · 6:30 p.m." },
      { label: "Afterward", value: "Cookie fellowship" },
    ],
    disk: "#3E6B8A",
    chip: "Stephen Forester Holiday Concert Nov 21",
  },
  {
    icon: Droplets,
    eyebrow: "Baptism",
    title: "Stir the Waters: Baptism Sunday",
    body: "Join us as we celebrate baptism together.",
    meta: [{ label: "When", value: "Sunday, November 22" }],
    disk: "#2F5D4A",
    chip: "Baptism Sunday Nov 22",
  },
  {
    icon: Heart,
    eyebrow: "Prayer & Fellowship",
    title: "Prayer, Praise & Pie!",
    body: "An evening of prayer, praise, and pie.",
    meta: [{ label: "When", value: "Wednesday, November 25" }],
    disk: "#C14E33",
    chip: "Prayer, Praise & Pie Nov 25",
  },
  {
    icon: Utensils,
    eyebrow: "Thanksgiving",
    title: "Thanksgiving Dinner",
    body: "Gather with the church family for a Thanksgiving meal.",
    meta: [
      { label: "When", value: "Thursday, November 26 · 12:00 – 2:00 p.m." },
    ],
    disk: "#D9A13B",
    chip: "Thanksgiving Dinner Nov 26",
  },
  {
    icon: GraduationCap,
    eyebrow: "Membership",
    title: "Membership Class",
    body: "Interested in joining the church family? Come to the membership class.",
    meta: [
      { label: "When", value: "Sunday, November 29 · 10:00 a.m." },
    ],
    disk: "#5B4B8A",
    chip: "Membership Class Nov 29",
  },
];
