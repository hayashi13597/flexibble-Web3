import { createCampaign, dashboard, profile } from "../public/web3";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/web3",
    disabled: false,
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/web3/create-campaign",
    disabled: false,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/web3/profile",
    disabled: false,
  },
];
