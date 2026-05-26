import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  tiers: [
    {
      monthlyDollars: -1,
      preset: tierPresets.xs,
      // composeBefore(_, sponsors) {
      //   sponsors.length = 0
      // }
    },
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
            sponsor.websiteUrl = 'https://www.chromatic.com/?utm_source=vitest&amp;utm_medium=sponsorship&amp;utm_campaign=vitestSponsorship'
          }
        })
        console.log(sponsors)
        sponsors.push({
          monthlyDollars: 1000,
          sponsor: {
            type: 'Organization',
            login: 'vercel',
            name: 'Zammad',
            avatarUrl: 'https://vitest.dev/zammad.svg',
            websiteUrl: 'https://zammad.com/en'
          },
          provider: 'github',
          privacyLevel: 'PUBLIC',
        })
        sponsors.push({
          monthlyDollars: 1000,
          sponsor: {
            type: 'Organization',
            login: 'zammad',
            name: 'Zammad',
            avatarUrl: 'https://vitest.dev/zammad.svg',
            websiteUrl: 'https://zammad.com/en'
          },
          provider: 'github',
          privacyLevel: 'PUBLIC',
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
