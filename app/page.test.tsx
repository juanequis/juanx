import { render } from "@/test-utils/render";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home Page", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="_page_cdf1a1"
        >
          <main
            class="_main_cdf1a1"
          >
            <div>
              <h2
                class="chakra-heading css-k5qncm"
              >
                Web Vitals
              </h2>
              <dl
                class="chakra-data-list__root css-vl9gr6"
                orientation="horizontal"
              />
            </div>
          </main>
          <footer
            class="_footer_cdf1a1"
          >
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn
            </a>
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Examples
            </a>
          </footer>
        </div>
      </div>
    `);
  });
});