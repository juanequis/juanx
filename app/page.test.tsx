import { render } from "@/test-utils/render";
import { vi, describe, it, expect } from "vitest";
import Home from "./page";

vi.mock("./_components/IntroText", () => ({
  IntroText: () => <div>Intro Text Component</div>
}));

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
            <article
              class="_intro_cdf1a1"
            >
              <div
                class="css-0"
                style="opacity: 0; transform: translateX(-100px);"
              >
                <h2
                  class="chakra-heading _title_cdf1a1 css-fabdue"
                >
                  greeting
                </h2>
                <div>
                  Intro Text Component
                </div>
                <p
                  class="css-0"
                >
                  explore
                </p>
              </div>
            </article>
            <article>
              <div
                class="css-1uasfij"
              >
                <em
                  class="css-1kvvtld"
                >
                  inactiveText
                </em>
              </div>
            </article>
          </main>
        </div>
      </div>
    `);
  });
});