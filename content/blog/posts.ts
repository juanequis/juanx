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
    slug: "why-this-blog",
    title: "Why I’m Starting This Blog",
    summary:
      "A quick look at why I'm writing in public again, the stack I'm using, and what I want future readers to get from it.",
    publishedAt: "2025-11-13T00:00:00.000Z",
    publishedDisplay: "November 13, 2025",
    readingTimeMinutes: 3,
    tags: ["Personal", "Web Development", "Writing"],
    content: [
      "If I’m honest, this blog isn’t meant to be a grand public project. I’m starting it mostly for myself — as a place to slow down, reflect on what I’m learning, and put some structure around my thoughts. Writing has always helped me clarify things in my own mind, and I want this space to become a kind of personal logbook of what I’m building, what I’m exploring, and what I’m struggling with.",
      "At the same time, I know that the ideas I’m trying to figure out for myself often turn out to be useful for others. Whether it’s a lesson from a project, a way of approaching a problem, or something I learned while preparing for an interview, I want to share it. Not as universal advice, but as things that helped me, and might help someone else too.",
      "I don’t have a strict publishing schedule or a tightly defined theme. I just want this to be a place where I can be curious, honest, and maybe a little messy. A place to document the process, not just the outcomes.",
      "If you’re reading this: thanks for being here. I hope you get something out of it, even if it’s just a new idea, a fresh perspective, or a reminder that we’re all figuring things out as we go."
    ],
    commentsEnabled: false,
  },
];

