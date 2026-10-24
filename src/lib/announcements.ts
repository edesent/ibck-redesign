import {
  BookOpen,
  Gift,
  Music,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Weekly announcements — the single place to update each week.        */
/* Used by the /announcements page and the homepage callout.           */
/* ------------------------------------------------------------------ */

/** Shown on the homepage callout and the announcements page. */
export const ANNOUNCEMENTS_UPDATED = "October 25, 2026";

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
  {
    icon: Gift,
    eyebrow: "Giving",
    title: "The Giving Trees",
    body: "Now’s the time!",
    disk: "#C14E33",
    chip: "The Giving Trees — now’s the time!",
  },
  {
    icon: Utensils,
    eyebrow: "Thanksgiving",
    title: "Thanksgiving Meal & Pies",
    body: "Sign-up sheets are on the bulletin board.",
    disk: "#2F5D4A",
    chip: "Thanksgiving Meal & Pies sign-ups",
  },
  {
    icon: Music,
    eyebrow: "Concert",
    title: "Stephen Forester in Concert",
    body: "Join us for an evening of music.",
    meta: [
      { label: "Date", value: "November 21" },
      { label: "Time", value: "6:30 p.m." },
    ],
    disk: "#3E6B8A",
    chip: "Stephen Forester in Concert Nov 21",
  },
];
