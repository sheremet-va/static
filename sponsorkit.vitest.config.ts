import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  tiers: [
    {
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      monthlyDollars: 500,
      preset: tierPresets.large,
    },
    {
      preset: tierPresets.small,
    },
  ],

  outputDir: './vitest',
  formats: ['svg'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
  ]
});
