import { render } from "@/test-utils/render";
import { vi, describe, it, expect } from "vitest";
import Work from "./page";

vi.mock("../_components/motion", () => ({
  MotionBox: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe("Work Page", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Work />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="_page_00c8fe"
        >
          <main
            class="_main_00c8fe"
          >
            <article
              class="_intro_00c8fe"
            >
              <div>
                <h2
                  class="chakra-heading _title_00c8fe css-fabdue"
                >
                  title
                </h2>
                <p
                  class="css-n33ttv"
                >
                  description
                </p>
              </div>
            </article>
            <article>
              <a
                aria-labelledby="downloadCvButton"
                class="_downloadLink_0691b3"
                download=""
                href="/CV-Juan-Cruz-Avellaneda.pdf"
                target="_blank"
              >
                <button
                  class="chakra-button css-zqnclt"
                  id="downloadCvButton"
                  type="button"
                >
                  downloadCv
                </button>
              </a>
            </article>
          </main>
        </div>
      </div>
    `);
  });
});