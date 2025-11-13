import type { BlogPost } from "@/content/blog/posts";
import { PostCard } from "./post-card";
import { describe, expect, it } from "vitest";
import { render } from "@/test-utils/render";

const mockPost: BlogPost = {
  slug: "test-post",
  title: "Test Title",
  summary: "This is a summary of the blog post.",
  publishedAt: "2025-01-01T00:00:00.000Z",
  publishedDisplay: "January 1, 2025",
  readingTimeMinutes: 5,
  tags: ["Next.js", "Testing"],
  content: [
    "Paragraph one explaining what is going on.",
    "Paragraph two continuing the explanation.",
  ],
  commentsEnabled: false,
};

describe("PostCard", () => {
  it("matches the snapshot for a featured post", () => {
    const { container } = render(
      <PostCard
        post={mockPost}
        featuredLabel="Featured"
        readingTimeLabel="5 min read"
        commentsTitle="Comments"
        commentsBody="Coming soon."
        showCommentsNotice
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <article
          class="css-1vyu3xl"
        >
          <div
            class="chakra-stack css-8g8ihq"
            spacing="5"
          >
            <p
              class="css-1mhr1sh"
            >
              Featured
            </p>
            <div
              class="chakra-stack css-8g8ihq"
              spacing="3"
            >
              <h2
                class="chakra-heading css-1868jki"
              >
                Test Title
              </h2>
              <p
                class="css-q9k0mw"
              >
                January 1, 2025
                 · 
                5 min read
              </p>
              <p
                class="css-1msjh1x"
              >
                This is a summary of the blog post.
              </p>
              <div
                class="chakra-stack css-zztjb4"
                data-testid="post-tags"
                spacing="2"
              >
                <span
                  class="chakra-badge css-19fz2s4"
                >
                  Next.js
                </span>
                <span
                  class="chakra-badge css-19fz2s4"
                >
                  Testing
                </span>
              </div>
            </div>
            <span
              aria-orientation="horizontal"
              class="chakra-separator css-1b65dgi"
              role="separator"
            />
            <div
              class="chakra-stack css-8g8ihq"
              spacing="4"
            >
              <p
                class="css-uqtz4d"
              >
                Paragraph one explaining what is going on.
              </p>
              <p
                class="css-uqtz4d"
              >
                Paragraph two continuing the explanation.
              </p>
            </div>
            <div
              class="css-qnvec9"
              data-testid="comments-placeholder"
            >
              <p
                class="css-14t8wus"
              >
                Comments
              </p>
              <p
                class="css-jneyc"
              >
                Coming soon.
              </p>
            </div>
          </div>
        </article>
      </div>
    `);
  });

  it("does not render the comments notice when disabled", () => {
    const { queryByTestId } = render(
      <PostCard
        post={mockPost}
        readingTimeLabel="5 min read"
        commentsTitle="Comments"
        commentsBody="Coming soon."
      />
    );

    expect(queryByTestId("comments-placeholder")).toBeNull();
  });
});
