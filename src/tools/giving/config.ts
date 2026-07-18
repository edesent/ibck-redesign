// Online Giving — per-church configuration.
// Shipped with Westview Baptist Church's values as a working example.

export const givingConfig = {
  churchName: "Westview Baptist Church",

  // The giving provider's embed/checkout URL. Works with any provider that
  // gives you a hosted form URL:
  //  - Tithe.ly:  https://give.tithe.ly/?formId=<form-id>
  //               (Tithe.ly dashboard → Giving → Forms → copy the form link)
  //  - Givelify:  the church's givelify.com/... donate link
  //  - PayPal:    the church's paypal.me or donate-button link
  embedUrl: "https://give.tithe.ly/?formId=53d4fefc-1023-40bb-98a7-f5f260fec603",

  // true  → show the provider INSIDE the page (iframe; best with Tithe.ly)
  // false → show a big "Give Online" button that opens the provider in a new
  //         tab (use for providers that block iframe embedding)
  embed: true,

  // Mailing address for check givers; set to "" to hide the mail option.
  mailAddress: "2140 Stephens Rd, Warren, MI 48091",

  // Scripture shown beneath the form.
  verse:
    "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
  verseRef: "2 Corinthians 9:7",
};
