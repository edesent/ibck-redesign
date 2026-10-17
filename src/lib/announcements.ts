import {
  BookOpen,
  CalendarCheck,
  Gift,
  Package,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Weekly announcements — the single place to update each week.        */
/* Used by the /announcements page and the homepage callout.           */
/* ------------------------------------------------------------------ */

/** Shown on the homepage callout and the announcements page. */
export const ANNOUNCEMENTS_UPDATED = "October 18, 2026";

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
    icon: CalendarCheck,
    eyebrow: "Outreach",
    title: "Outreach Meeting",
    body: "To discuss Prayer, Praise & Pie and Thanksgiving Dinner.",
    meta: [
      { label: "When", value: "Today, October 18" },
      { label: "Time", value: "Following morning service" },
      { label: "Prayer, Praise & Pie", value: "November 25" },
      { label: "Thanksgiving Dinner", value: "November 26" },
    ],
    disk: "#C14E33",
    chip: "Outreach meeting today after service",
  },
  {
    icon: Gift,
    eyebrow: "Operation Christmas Child",
    title: "OCC Workday",
    body: "Join us to pack shoeboxes for children around the world.",
    meta: [
      { label: "Date", value: "Tuesday, October 20" },
      { label: "Time", value: "9:30 a.m." },
    ],
    disk: "#3E6B8A",
    chip: "OCC Workday Oct 20",
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
    icon: BookOpen,
    eyebrow: "Bible Study",
    title: "Ladies Bible Study",
    body: "Lesson 2 · potluck luncheon to follow.",
    meta: [
      { label: "When", value: "Tuesday, October 27 · 10:30 a.m." },
      { label: "Where", value: "Karol Twetan’s home" },
    ],
    disk: "#D9A13B",
    chip: "Ladies Bible Study Oct 27",
  },
  {
    icon: Users,
    eyebrow: "Men’s Ministry",
    title: "Men’s Ministry",
    body: "Join the men for fellowship and study.",
    meta: [
      { label: "When", value: "Tuesday, October 27 · 7:00 p.m." },
      { label: "Details", value: "All men welcome" },
    ],
    disk: "#5B4B8A",
    chip: "Men’s Ministry Oct 27",
  },
];
