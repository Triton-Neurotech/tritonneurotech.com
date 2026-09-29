// Everything an officer might need to change lives here.
// Links marked TODO still need the real value.

export const site = {
  name: 'Triton NeuroTech',
  shortName: 'TNT',
  description:
    "UC San Diego's neurotechnology club. We build EEG, EMG and brain-computer interface projects and teach anyone who wants to learn.",
  email: 'hello@tritonneurotech.com', // TODO: set up forwarding for this address
  workdays: {
    when: 'Sundays, 11am–4pm',
    where: 'Franklin Antonio Hall, 2nd floor',
  },
  links: {
    discord: 'https://discord.gg/DCA7Cbg2H',
    instagram: 'https://www.instagram.com/tritonneurotech/',
    linktree: 'https://linktr.ee/UCSD_TNT',
    conference: 'https://caneurotech.vercel.app/',
    linkedin: '', // optional
  },
  calendar: {
    id: import.meta.env.PUBLIC_GOOGLE_CALENDAR_ID ?? '',
    apiKey: import.meta.env.PUBLIC_GOOGLE_API_KEY ?? '',
    timeZone: 'America/Los_Angeles',
  },
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID ?? '',
};

export const nav = [
  { href: '/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/calendar/', label: 'Calendar' },
  { href: '/news/', label: 'News' },
  { href: '/officers/', label: 'Officers' },
  { href: '/contact/', label: 'Contact' },
];

export const tracks = ['EEG', 'EMG', 'ML', 'Hardware'] as const;
