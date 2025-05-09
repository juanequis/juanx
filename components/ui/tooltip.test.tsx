import { render } from "@/test-utils/render";
import { describe, it, expect } from "vitest";
import { Tooltip } from "./tooltip";

describe("Tooltip component", () => {
  it("renders correctly with default props", () => {
    const { container } = render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button
          class="chakra-tooltip__trigger css-0"
          data-part="trigger"
          data-scope="tooltip"
          data-state="closed"
          dir="ltr"
          id="tooltip:«r0»:trigger"
        >
          Hover me
        </button>
      </div>
    `);
  });

  it("renders correctly with showArrow enabled", () => {
    const { container } = render(
      <Tooltip content="Tooltip Content" showArrow>
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button
          class="chakra-tooltip__trigger css-0"
          data-part="trigger"
          data-scope="tooltip"
          data-state="closed"
          dir="ltr"
          id="tooltip:«r1»:trigger"
        >
          Hover me
        </button>
      </div>
    `);
  });

  it("renders correctly when disabled", () => {
    const { container } = render(
      <Tooltip content="Tooltip Content" disabled>
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button>
          Hover me
        </button>
      </div>
    `);
  });

  it("renders correctly with portalled disabled", () => {
    const { container } = render(
      <Tooltip content="Tooltip Content" portalled={false}>
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button
          class="chakra-tooltip__trigger css-0"
          data-part="trigger"
          data-scope="tooltip"
          data-state="closed"
          dir="ltr"
          id="tooltip:«r2»:trigger"
        >
          Hover me
        </button>
      </div>
    `);
  });

  it("renders correctly with custom portalRef", () => {
    const portalRef = { current: document.createElement("div") };
    const { container } = render(
      <Tooltip content="Tooltip Content" portalRef={portalRef}>
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button
          class="chakra-tooltip__trigger css-0"
          data-part="trigger"
          data-scope="tooltip"
          data-state="closed"
          dir="ltr"
          id="tooltip:«r3»:trigger"
        >
          Hover me
        </button>
      </div>
    `);
  });

  it("renders correctly with custom contentProps", () => {
    const { container } = render(
      <Tooltip
        content="Tooltip Content"
        contentProps={{ className: "custom-tooltip" }}
      >
        <button>Hover me</button>
      </Tooltip>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <button
          class="chakra-tooltip__trigger css-0"
          data-part="trigger"
          data-scope="tooltip"
          data-state="closed"
          dir="ltr"
          id="tooltip:«r4»:trigger"
        >
          Hover me
        </button>
      </div>
    `);
  });
});