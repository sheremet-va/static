import { defineConfig, tierPresets, type Sponsorship } from "sponsorkit";

export default defineConfig({
  onSponsorsFetched(sponsors) {
    sponsors.forEach((data) => {
      const sponsor = data.sponsor
      if(sponsor.login === 'chromaui') {
        data.monthlyDollars = 4000
        sponsor.websiteUrl = 'https://www.chromatic.com/?utm_source=vitest&amp;utm_medium=sponsorship&amp;utm_campaign=vitestSponsorship'
      }
      if (sponsor.login === 'LambdaTest-Inc') {
        sponsor.websiteUrl = 'https://www.testmuai.com/?utm_medium=sponsor&utm_source=vitest-dev'
      }
      console.log(`${sponsor.name} (${sponsor.login}) sponsors ${data.monthlyDollars}`)
    })

    const customSponsors: Sponsorship[] = [
      // vercel (via antfu)
      {
        monthlyDollars: 4000,
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
        monthlyDollars: 4000,
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
      {
        monthlyDollars: 500,
        sponsor: {
          type: 'Organization',
          login: 'stackblitz',
          name: 'Stackblitz',
          avatarUrl: 'https://avatars.githubusercontent.com/u/28635252?v=4',
          websiteUrl: 'https://bolt.new/',
          linkUrl: 'https://github.com/stackblitz/'
        },
        isOneTime: false,
        provider: 'github',
        privacyLevel: 'PUBLIC',
      },
    ]

    return [...sponsors, ...customSponsors]
  },
  tiers: [
    {
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },
    {
      monthlyDollars: 300,
      preset: tierPresets.large,
    },
    {
      monthlyDollars: 4000,
      preset: tierPresets.xl,
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
