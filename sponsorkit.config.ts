import { defineConfig, tierPresets } from "sponsorkit";
import fs from 'fs/promises'

export default defineConfig({
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
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
      preset: tierPresets.medium,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 256,
      preset: tierPresets.large,
    },
    {
      title: "Big Sponsors",
      monthlyDollars: 512,
      preset: tierPresets.xl,
    },
  ],

  async onSponsorsReady(sponsors) {
    await fs.writeFile(
      'sponsors.json',
      JSON.stringify(
        sponsors
          .filter((i) => i.privacyLevel !== 'PRIVATE')
          .map((i) => {
            return {
              name: i.sponsor.name,
              login: i.sponsor.login,
              avatar: i.sponsor.avatarUrl,
              amount: i.monthlyDollars,
              link: i.sponsor.linkUrl || i.sponsor.websiteUrl,
              org: i.sponsor.type === 'Organization'
            }
          })
          .sort((a, b) => b.amount - a.amount),
        null,
        2
      )
    )
  },

  outputDir: '.',
  formats: ['svg', 'png'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
    {
      name: 'sponsors.wide',
      width: 1800,
    },
    {
      name: 'sponsors.part1',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars >= 9.9,
    },
    {
      name: 'sponsors.part2',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0
    },
  ]
});
