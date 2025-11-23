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
  number: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cookie-banner",
    title: "Let's add Google analyitics, it should be a straight forward task",
    summary:
      "How a simple task of adding analytics can turn out into a rabit hole.",
    publishedAt: "2025-11-13T00:00:00.000Z",
    publishedDisplay: "November 23, 2025",
    readingTimeMinutes: 3,
    tags: ["Web Development", "Analytics", "Cookie Banner"],
    content: [
      "A while ago, I was adding google analytics in my site, and I thought: I've done it in the past, How hard could it be? Just paste the Google Analytics script, check that it works, done. Right?. It turned out to be not as straightforward as I thought.",
      "One fundamental thing changed from when I did it the first time, and that is that I'm now located in Europe. This means that I should be compliant to GDPR (General Data Protection Regulation) therefore showing the users a consent banner.",
      "At first, I thought: “Okay, I’ll just build a small banner that says Accept or Reject and toggle the analytics script accordingly.” But as I started digging deeper, things became much more interesting.",
      "While reading the documentation, I discovered about Google Tag Manager (GTM), a tool that lets you manage all your tracking scripts (or “tags”) from one place. Instead of embedding multiple scripts in your code, you can add them through GTM and control when they fire, based on triggers like user consent. I learned that GTM acts as a sort of “tracking orchestrator,” sitting between your site and all the tools that collect data: analytics, ads, heatmaps, etc. So I set it up, connected Google Analytics 4, and… found yet another layer of complexity.",
      "Google supports something called Consent Mode, which lets GTM adapt to the user’s consent choices. There are two main modes: ”Basic consent mode” (Tracking only starts after the user accepts cookies through the banner) and “Advanced consent mode“ (Even before consent, the page sends anonymous “pings” to Google, without using cookies. These pings don’t track individuals but help Google estimate conversions and improve aggregated data). This was really interesting, it’s not just “on or off”, there’s nuance in how data can still flow responsibly under privacy regulations.",
      "Having learned all of that, and after deciding my site could use the Basic consent mode, at least in the beginning, I was ready to code my banner component when I kept reading the GA docs, I found out there are several CMPs (Consent Management Platforms).",
      "These are third-party services that handle the whole banner, consent storage, and communication with tools like GTM automatically. They support Google’s Consent APIs out of the box, can be customized to match your site’s design, and manage the heavy lifting of compliance. Of course, you can still build your own consent banner, but to fully integrate with Google’s ecosystem, it needs to support: 1- The Google Consent API (to communicate consent states), 2- The Transparency & Consent Framework (TCF v2) if you serve ads, 3- The GTM Consent Mode signals. In other words, building your own CMP isn’t impossible, but it’s far from trivial. After doing some research on the existing tools, I decided to use CookieBot. It integrates very easily with GTM, it has a free version, and I liked how it looked in my site.",
      "What I learned is something that repeats constantly in software development: A task that looks straightforward at the beginning turns out to be many times more complex. What started as a “quick task” ended up being a deep dive into privacy, data management, and compliance infrastructure. Simple-looking features often have layers of complexity hidden underneath, especially when they touch privacy, user data, or legal compliance. It’s one of those moments where you realize that technical work isn’t just about code, it’s also about context, regulations, and systems that evolve together.",
    ],
    commentsEnabled: false,
    number: 1,
  },
  {
    slug: "why-this-blog",
    title: "Why I’m Starting This Blog",
    summary: "A quick look at why I decided to start this blog.",
    publishedAt: "2025-11-13T00:00:00.000Z",
    publishedDisplay: "November 13, 2025",
    readingTimeMinutes: 1,
    tags: ["Personal", "Web Development", "Writing"],
    content: [
      "If I’m honest, this blog isn’t meant to be a grand public project. I’m starting it mostly for myself, as a place to slow down, reflect, and document some interesting learnings. I found out that writing is helping me clarify things in my own mind, and I want this space to become a kind of personal logbook of what I’m building, what I’m exploring, and what I’m struggling with.",
      "At the same time, I know that the ideas I’m trying to figure out for myself often turn out to be useful for others. Whether it’s a lesson from a project, a way of approaching a problem, or something I learned, I want to share it. Not as universal advice, but as things that helped me, and might help someone else too.",
      "I don’t have a strict publishing schedule or a tightly defined theme. I just want this to be a place where I can be curious and honest, and maybe a rise to conclusions that nobody cares about but me. A place to document the process, not just the outcomes.",
      "If you’re reading this: thanks for being here. I hope you get something out of it, even if it’s just a new idea, a fresh perspective, or a reminder that we’re all figuring things out as we go.",
    ],
    commentsEnabled: false,
    number: 0,
  },
];
