// Online Giving — per-church configuration.
// Shipped with Westview Baptist Church's values as a working example.

export const givingConfig = {
  churchName: "Independent Baptist Church",

  // The giving provider's embed/checkout URL. Works with any provider that
  // gives you a hosted form URL:
  //  - Tithe.ly:  https://give.tithe.ly/?formId=<form-id>
  //               (Tithe.ly dashboard → Giving → Forms → copy the form link)
  //  - Givelify:  the church's givelify.com/... donate link
  //  - PayPal:    the church's paypal.me or donate-button link
  embedUrl: "https://give.tithe.ly/?formId=e03ee14f-9893-4047-9395-a25482ac928c",

  // true  → show the provider INSIDE the page (iframe; best with Tithe.ly)
  // false → show a big "Give Online" button that opens the provider in a new
  //         tab (use for providers that block iframe embedding)
  embed: true,

  // Mailing address for check givers; set to "" to hide the mail option.
  mailAddress: "2030 Route 22, Keeseville, NY 12944",

  // Scripture shown beneath the form.
  verse:
    "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
  verseRef: "2 Corinthians 9:7",
};
