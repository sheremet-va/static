import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Backers",
      preset: presets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 8,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 64,
      preset: presets.large,
    },
    // {
    //   title: "Favorite Sponsors",
    //   monthlyDollars: 128,
    //   preset: presets.large,
    // },
    // {
    //   title: "Platinum Sponsors",
    //   monthlyDollars: 256,
    //   preset: presets.xl,
    // },
  ],
});
