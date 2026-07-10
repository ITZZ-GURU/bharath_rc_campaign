// src/config/campaign.ts

export const CAMPAIGN = {
  // Auto-updates every year
  year: new Date().getFullYear(),

  // Fixed campaign identity
  candidate: "Yemineni Bharath Kumar",
  shortName: "Bharath",
  position: "Regional Coordinator",
  region: "Andhra Pradesh & Telangana",
  house: "Corbett House",

  // Fixed external links
  votingUrl: "https://elections.iitmbs.org/vote",
  manifestoUrl: "https://share.google/SZQsb8m7HPf0YhSIT",

  // Fixed social links — fill these once and forget them
  socials: {
    whatsapp: "https://wa.me/91XXXXXXXXXX",
    instagram: "https://instagram.com/your_handle",
    linkedin: "https://linkedin.com/in/your_profile",
    email: "mailto:you@example.com",
  },

  // Fixed asset paths
  heroImage: `${import.meta.env.BASE_URL}images/bharat.png`,

  // Things that can stay dynamic
  promises: [
    "Organising regular regional student meetups in AP & TS.",
    "Boosting Corbett House spirit & participation.",
    "Dedicated WhatsApp InfoHub so nobody misses deadlines.",
    "Active freshman mentorship & academic support groups.",
  ],

  // Optional reusable text blocks
  slogan: "Stronger Together. Better Tomorrow.",
  footerText: `© ${new Date().getFullYear()} ${"Yemineni Bharath Kumar"}`,
} as const;

// Reusable helper for share text
export function getShareMessage() {
  return `👋 Hi there! Please support our friend *${CAMPAIGN.candidate}*, who is contesting for the *${CAMPAIGN.position}* position for *${CAMPAIGN.region} (${CAMPAIGN.house})*.

🎯 *His Core Commitments:*
${CAMPAIGN.promises.map((p, i) => `${i + 1}. ${p}`).join("\n")}

🤝 Let's vote for unity, connection, and a stronger Telugu student community!

🗳️ *Cast your vote here:* ${CAMPAIGN.votingUrl}
📄 *Read his full manifesto here:* ${CAMPAIGN.manifestoUrl}

_Please forward this to all IITM BS student groups in AP/TS and Corbett House!_ 🗳️✨`;
}
