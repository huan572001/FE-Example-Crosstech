export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Stoked finance",
  description: "Explore and Earn on Sui.",
  navItems: [
    {
      label: "Mint",
      href: "mint",
      id: "mint",
    },
    {
      label: "Stake",
      href: "stake",
      id: "stake",
    },
    {
      label: "Withdraw",
      href: "withdraw",
      id: "withdraw",
    },
    // {
    //   label: "Earn",
    //   href: "earn",
    //   id: "Earn",
    // },
    {
      label: "Campaign",
      href: "campaign",
      id: "Campaign",
    },
    // {
    //   label: "Merge",
    //   href: "merge",
    //   id: "merge",
    // },
  ],
  navMenuItems: [
    {
      label: "Referrals",
      href: "Referrals",
      id: "Referrals",
    },
    {
      label: "Ecosystem",
      href: "Ecosystem",
      id: "Ecosystem",
    },
    {
      label: "Docs",
      href: "Docs",
      id: "Docs",
    },
  ],
};
