// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  localIcons: true,
  temperature: {
    location: "India",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  quote: {
    title: "The One in One-hundred",
    body: "Out of every one-hundred men, ten shouldn’t even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior and he will bring the others back.",
    author: "Heraclitus",
    // body: "I am sitting under a sycamore by Tinker Creek. I am really here, alive on the intricate earth under trees.",
    // author: "Annie Dillard",
  },
  tabs: [
    {
      name: "dust",
      background_url: "src/img/banners/cbg-16.gif",
      categories: [
        // {
        //   name: "",
        //   links: [
        //   ],
        // },
        // {
        //   name: "Under the Sycamore",
        //   links: [
        //   ],
        // },
        // {
        //   name: "",
        //   links: [
        //     {
        //       name: "gmail",
        //       // url: "https://mail.google.com",
        //       // icon: "brand-gmail",
        //       // icon_color: palette.green,
        //     },
        //   ],
        // },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
