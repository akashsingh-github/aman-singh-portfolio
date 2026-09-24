// ─────────────────────────────────────────────────────────────
//  All portfolio text lives here. Edit this file, then run
//  `npm run deploy` to publish your changes.
// ─────────────────────────────────────────────────────────────

export const content = {
  // Browser tab title and search-engine description
  site: {
    title: 'Aman Singh — Freelance Video Editor',
    description:
      'Freelance video editor for wedding films, Instagram Reels, and brand videos.',
  },

  hero: {
    role: 'Freelance Video Editor',
    name: 'Aman Singh',
    tagline:
      'I turn raw footage into wedding films and social videos that people actually want to watch — polished, on time, and made to be shared.',
  },

  contact: {
    // Full number with country code. Spaces are fine; the WhatsApp link strips them.
    whatsapp: '+91 80511 46915',
    // Instagram username, without the @
    instagram: 'yourhandle',
    email: 'you@email.com',
    city: 'Kalyan, Thane, Maharashtra',
  },

  about:
    "I'm a freelance video editor focused on wedding films and short-form social content. From cutting and pacing to music, color, and sound, I handle the full edit so you get a finished video that feels professional and ready to share. Whether it's a couple's wedding day or a brand's Instagram page, I make the footage look its best and tell a story that holds attention from the first second.",

  services: [
    {
      title: 'Wedding Films & Highlights',
      description:
        'Cinematic highlight reels, full-length films, and teaser edits that capture the emotion of the whole day.',
    },
    {
      title: 'Instagram Reels & Shorts',
      description:
        'Scroll-stopping short-form edits for businesses and creators — trendy, fast-paced, and built to grow reach.',
    },
    {
      title: 'Promo & Brand Videos',
      description:
        'Product, service, and promotional videos that help local businesses look polished and professional.',
    },
    {
      title: 'Events & More',
      description:
        'Engagements, birthdays, and other events — edited with the same care and a quick turnaround.',
    },
  ],

  // Paste a YouTube or Google Drive share link into `url`.
  // Leave `url` empty ('') to show "Coming soon" instead of a link.
  featuredWork: [
    {
      title: 'Wedding Highlight Reel',
      description: 'A cinematic 3-minute highlight cut from a full wedding day.',
      url: '',
    },
    {
      title: 'Business Reel',
      description: 'A short promo reel edited for an Instagram business page.',
      url: '',
    },
    {
      title: 'Showreel',
      description: 'A 60-second mix of my best work across recent projects.',
      url: '',
    },
  ],

  skills: [
    'Video Editing',
    'Color Grading',
    'Motion & Titles',
    'Sound & Music Sync',
    'Reels / Short-Form',
    'Storytelling',
  ],

  // The editing apps you use, e.g. 'Premiere Pro, DaVinci Resolve, CapCut'
  software: 'your editing apps',

  whyMe: [
    { title: 'Fast turnaround.', text: 'Edits delivered on the date we agree.' },
    { title: 'Revisions included.', text: "We refine until you're happy with the cut." },
    { title: 'Clear pricing.', text: 'Fixed packages, no surprises.' },
    { title: 'Easy to reach.', text: 'Simple communication over WhatsApp.' },
  ],

  // Delete all entries (leave `[]`) to hide this section.
  testimonials: [
    {
      quote:
        'Add a short client quote here — one or two lines about what it was like working with you.',
      author: 'Client name, project',
    },
    {
      quote: 'A second happy-client quote goes here. Even one real line builds a lot of trust.',
      author: 'Client name, project',
    },
  ],

  footer: {
    heading: "Let's create something great together.",
    availability: 'Available for freelance projects',
  },
}
