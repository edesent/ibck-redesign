import { BookOpen, Package, Users, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Weekly announcements — the single place to update each week.        */
/* Used by the /announcements page and the homepage callout.           */
/* ------------------------------------------------------------------ */

/** Shown on the homepage callout and the announcements page. */
export const ANNOUNCEMENTS_UPDATED = "October 11, 2026";

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
    icon: BookOpen,
    eyebrow: "Ladies Bible study",
    title: "The Great Disappearance",
    body: "Books are available from Karol Twetan.",
    meta: [
      { label: "Begins", value: "Tuesday, October 13" },
      { label: "Time", value: "10:30 a.m." },
    ],
    disk: "#D9A13B",
    chip: "Ladies Bible Study begins Oct 13",
  },
  {
    icon: Package,
    eyebrow: "Outreach",
    title: "Outreach Packets Packing",
    body: "Help prepare packets for distribution.",
    meta: [
      { label: "Packing", value: "Saturday, October 24 · 9:00 a.m." },
      { label: "Distribution", value: "Week of November 1" },
    ],
    disk: "#2F5D4A",
    chip: "Outreach packet packing Oct 24",
  },
  {
    icon: Users,
    eyebrow: "Outreach",
    title: "Outreach Meeting",
    body: "To discuss Prayer, Praise & Pie and Thanksgiving Dinner.",
    meta: [
      { label: "When", value: "October 18" },
      { label: "Time", value: "Following morning service" },
      { label: "Prayer, Praise & Pie", value: "November 25" },
      { label: "Thanksgiving Dinner", value: "November 26" },
    ],
    disk: "#C14E33",
    chip: "Outreach meeting Oct 18",
  },
];
