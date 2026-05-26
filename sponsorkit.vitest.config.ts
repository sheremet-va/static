import { defineConfig, tierPresets, resolveAvatars, type Sponsorship } from "sponsorkit";

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
      async composeBefore(_, sponsors) {
        sponsors.forEach(({ sponsor }) => {
          if(sponsor.name === 'Chromatic') {
            sponsor.websiteUrl = 'https://www.chromatic.com/?utm_source=vitest&amp;utm_medium=sponsorship&amp;utm_campaign=vitestSponsorship'
          }
        })
        const customSponsors: Sponsorship[] = [
          // vercel (via antfu)
          {
            monthlyDollars: 1000,
            sponsor: {
              type: 'Organization',
              login: 'vercel',
              name: 'Vercel',
              avatarUrl: 'https://avatars.githubusercontent.com/u/14985020?v=4',
              websiteUrl: 'https://vercel.com/',
              linkUrl: 'https://github.com/vercel/'
            },
            isOneTime: false,
            provider: 'github',
            privacyLevel: 'PUBLIC',
          },
          // zammad (via sheremet-va)
          {
            monthlyDollars: 1000,
            sponsor: {
              type: 'Organization',
              login: 'zammad',
              name: 'Zammad',
              avatarUrl: 'https://avatars.githubusercontent.com/u/1380327?v=4',
              websiteUrl: 'https://zammad.com/en',
              linkUrl: 'https://github.com/zammad/'
            },
            isOneTime: false,
            provider: 'github',
            privacyLevel: 'PUBLIC',
          },
        ]
        sponsors.push(...customSponsors)
        await resolveAvatars(customSponsors, '')
        console.log(sponsors)
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
