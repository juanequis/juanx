import { render } from "@/test-utils/render";
import { describe, it, expect, vi, Mock } from "vitest";
import { Link } from "./link";
import { usePathname } from "next/navigation";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("Link component", () => {
  it("renders correctly when the link is active", () => {
    (usePathname as Mock).mockReturnValue("/active-path");

    const { container } = render(
      <Link href="/active-path">Active Link</Link>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <a
          class="chakra-link _link_99cf69 _active_99cf69 css-2yvnes"
          href="/active-path"
        >
          Active Link
        </a>
      </div>
    `);
  });

  it("renders correctly when the link is inactive", () => {
    (usePathname as Mock).mockReturnValue("/different-path");

    const { container } = render(
      <Link href="/inactive-path">Inactive Link</Link>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <a
          class="chakra-link _link_99cf69 css-2yvnes"
          href="/inactive-path"
        >
          Inactive Link
        </a>
      </div>
    `);
  });
});