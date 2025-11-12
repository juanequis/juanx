export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  publishedDisplay: string;
  readingTimeMinutes: number;
  tags: string[];
  content: string[];
  commentsEnabled: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rebooting-this-blog",
    title: "Why I'm Rebooting This Blog",
    summary:
      "A quick look at why I'm writing in public again, the stack I'm using, and what I want future readers to get from it.",
    publishedAt: "2025-01-18T00:00:00.000Z",
    publishedDisplay: "January 18, 2025",
    readingTimeMinutes: 6,
    tags: ["Next.js", "Chakra UI", "DX", "Personal"],
    content: [
      "I finally carved out space in this portfolio to host long-form writing. For a while I tried scattered notes across docs and wikis, but nothing beats having a single place that feels like a digital garden I can tend to. Shipping the home and work pages reminded me how much I enjoy polishing UI details, so dedicating a route to writing felt like the natural next step.",
      "The stack behind these posts is intentionally lightweight: Next.js for routing, Chakra UI for consistent primitives, and plain TypeScript objects for the content source—for now. MDX might appear later, but starting with data files keeps iteration fast and deploys simple.",
      "Comments are not live yet because I want moderation tools and guardrails that match the tone I’m aiming for. Until then, I’ll keep drafting, sharing learnings from projects, and refining the publishing workflow. If you have thoughts, feel free to reach out on LinkedIn or GitHub—links live in the header.",
    ],
    commentsEnabled: false,
  },
];

