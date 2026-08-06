import type { NextConfig } from "next";
import path from "path";

/**
 * Redirects for the old ibck.org site.
 *
 * The domain has hosted two previous sites: a Weebly site (the `.html` pages,
 * live until July 2026) and, before that, a FrontPage site (the `.htm` pages,
 * live until roughly 2014). Both left indexed pages and inbound links behind.
 * Every one of those URLs 404'd after launch, so each is mapped here to the
 * closest section of the new single-page site.
 *
 * Anchors live in src/app/page.tsx: #sundays #visit (pastor) #area #mission
 * #missions #contact. If you rename one there, fix it here too.
 */
const OLD_URLS: Array<[string, string]> = [
  // ---- Weebly site (final nav, highest-traffic) ----
  ["/index.html", "/"],
  ["/contact-us.html", "/#contact"],
  ["/our-area.html", "/#area"],
  ["/our-pastor.html", "/#visit"],
  ["/our-people.html", "/#sundays"],
  ["/our-beliefs.html", "/#mission"],
  ["/who-is-ibc.html", "/#mission"],
  ["/services.html", "/#sundays"],
  ["/first-time.html", "/#sundays"],
  ["/missions.html", "/#missions"],
  ["/sermons.html", "/sermons"],
  ["/deacons.html", "/#contact"],

  // ---- Earlier Weebly URL structures (renamed pages, still indexed) ----
  ["/first-time-visitors.html", "/#sundays"],
  ["/what-we-believe.html", "/#mission"],
  ["/messages.html", "/sermons"],
  ["/sermons1.html", "/sermons"],
  ["/senior-pastor.html", "/#visit"],
  ["/senior-pastor-search.html", "/#visit"],
  ["/leadership.html", "/#visit"],
  ["/directions--contact.html", "/#contact"],
  ["/directionsour-areacontact-us.html", "/#contact"],
  ["/our-areacontact-us.html", "/#area"],

  // ---- FrontPage site (pre-2014) ----
  ["/index.htm", "/"],
  ["/who.htm", "/#mission"],
  ["/believe.htm", "/#mission"],
  ["/staff.htm", "/#visit"],
  ["/missions.htm", "/#missions"],
  ["/map.htm", "/#contact"],
  ["/schedule.htm", "/#sundays"],
  ["/worship_services.htm", "/#sundays"],
  ["/sunday_school.htm", "/#sundays"],
  ["/awana.htm", "/#sundays"],
  ["/ministires.htm", "/#sundays"], // sic — the old site had this typo
  ["/messages.htm", "/sermons"],
  ["/events.htm", "/"],
  ["/buildwalls.htm", "/"],
  ["/BuildWalls/IBC-Projects.htm", "/"],
  ["/Sermons/TheGame/thegame.htm", "/sermons"],
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      ...OLD_URLS.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),

      // Safety net: any other leftover .html/.htm page (including ones never
      // captured by the Wayback Machine) lands on the homepage instead of a 404.
      // Keep this last — the specific rules above win.
      {
        source: "/:slug*.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:slug*.htm",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
