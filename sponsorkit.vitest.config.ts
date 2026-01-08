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
      composeBefore(_, sponsors) {
        sponsors.forEach(({ sponsor }) => {
          if(sponsor.name === 'Chromatic') {
            sponsor.websiteUrl = 'https://www.chromatic.com/?utm_source=vitest&utm_medium=sponsorship&utm_campaign=vitestSponsorship'
          }
        })
      }
    },
    {
      preset: tierPresets.none,
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
