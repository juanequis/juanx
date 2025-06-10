import { render } from "@/test-utils/render";
import { vi, describe, it, expect } from "vitest";
import { IntroText } from "./IntroText";
import { useTranslations } from "next-intl";

vi.mock("next-intl", () => ({
  useTranslations: vi.fn(),
}));

describe("IntroText Component", () => {
  it("renders the intro text with rich formatting", () => {
    const mockTranslations = vi.mocked(useTranslations);

    /**
     * @TODO Even though there's a global mock for `useTranslations`, I had to mock it here 
     * because we use the rich formatting function. Need to find a way to make this work globally.
     */
    mockTranslations.mockReturnValue({
      rich: (key: string) => {
        if (key === "intro") {
          return (chunks: string) => chunks.replace("{strong}", "<strong>").replace("{/strong}", "</strong>");
        }
        return key;
      }
    } as ReturnType<typeof useTranslations>);

    const { container } = render(<IntroText />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <p
          class="_description_cdf1a1 css-n33ttv"
        />
      </div>
    `);
  });
});