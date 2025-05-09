import { render } from "@/test-utils/render";
import { screen, act } from "@testing-library/react";
import { WebVitals } from "./web-vitals";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { useReportWebVitals } from "next/web-vitals";

vi.mock("next/web-vitals", () => ({
  useReportWebVitals: vi.fn(),
}));

describe("WebVitals Component", () => {
  const mockUseReportWebVitals = vi.mocked(useReportWebVitals);

  beforeEach(() => {
    mockUseReportWebVitals.mockImplementation((callback) => {
      // Simulate web vitals reporting asynchronously
      setTimeout(() => {
        callback({
          id: "1",
          name: "FCP",
          value: 1.2,
          rating: "good",
        });
        callback({
          id: "2",
          name: "LCP",
          value: 2.5,
          rating: "needs-improvement",
        });
        callback({
          id: "3",
          name: "CLS",
          value: 0.1,
          rating: "poor",
        });
      }, 0);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly and matches snapshot", async () => {
    const { container } = render(<WebVitals />);

    // Wait for the metrics to be updated
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div>
          <h2
            class="chakra-heading css-k5qncm"
          >
            Web Vitals
          </h2>
          <dl
            class="chakra-data-list__root css-vl9gr6"
            orientation="horizontal"
          >
            <div
              class="chakra-data-list__item css-1p4u29c"
            >
              <dt
                class="chakra-data-list__itemLabel css-1hzvc9a"
              >
                FCP
              </dt>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                1.20
              </dd>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                <div
                  class="chakra-tooltip__trigger chakra-status__root css-1ff6lr1"
                  data-part="trigger"
                  data-scope="tooltip"
                  data-state="closed"
                  dir="ltr"
                  id="tooltip:«r0»:trigger"
                >
                  <div
                    class="chakra-status__indicator css-1ulvpke"
                  />
                </div>
              </dd>
            </div>
            <div
              class="chakra-data-list__item css-1p4u29c"
            >
              <dt
                class="chakra-data-list__itemLabel css-1hzvc9a"
              >
                LCP
              </dt>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                2.50
              </dd>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                <div
                  class="chakra-tooltip__trigger chakra-status__root css-63dpt8"
                  data-part="trigger"
                  data-scope="tooltip"
                  data-state="closed"
                  dir="ltr"
                  id="tooltip:«r1»:trigger"
                >
                  <div
                    class="chakra-status__indicator css-1ulvpke"
                  />
                </div>
              </dd>
            </div>
            <div
              class="chakra-data-list__item css-1p4u29c"
            >
              <dt
                class="chakra-data-list__itemLabel css-1hzvc9a"
              >
                CLS
              </dt>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                0.10
              </dd>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                <div
                  class="chakra-tooltip__trigger chakra-status__root css-1bskaxt"
                  data-part="trigger"
                  data-scope="tooltip"
                  data-state="closed"
                  dir="ltr"
                  id="tooltip:«r2»:trigger"
                >
                  <div
                    class="chakra-status__indicator css-1ulvpke"
                  />
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    `);
  });

  it("renders correctly with duplicate metric names", async () => {
    mockUseReportWebVitals.mockImplementation((callback) => {
      // Simulate web vitals reporting asynchronously
      setTimeout(() => {
        callback({
          id: "1",
          name: "FCP",
          value: 1.2,
          rating: "good",
        });
        callback({
          id: "2",
          name: "FCP",
          value: 2.5,
          rating: "needs-improvement",
        });
        callback({
          id: "3",
          name: "CLS",
          value: 0.1,
          rating: "poor",
        });
      }, 0);
    });

    const { container } = render(<WebVitals />);

    // Wait for the metrics to be updated
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div>
          <h2
            class="chakra-heading css-k5qncm"
          >
            Web Vitals
          </h2>
          <dl
            class="chakra-data-list__root css-vl9gr6"
            orientation="horizontal"
          >
            <div
              class="chakra-data-list__item css-1p4u29c"
            >
              <dt
                class="chakra-data-list__itemLabel css-1hzvc9a"
              >
                FCP
              </dt>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                1.20
              </dd>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                <div
                  class="chakra-tooltip__trigger chakra-status__root css-1ff6lr1"
                  data-part="trigger"
                  data-scope="tooltip"
                  data-state="closed"
                  dir="ltr"
                  id="tooltip:«r3»:trigger"
                >
                  <div
                    class="chakra-status__indicator css-1ulvpke"
                  />
                </div>
              </dd>
            </div>
            <div
              class="chakra-data-list__item css-1p4u29c"
            >
              <dt
                class="chakra-data-list__itemLabel css-1hzvc9a"
              >
                CLS
              </dt>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                0.10
              </dd>
              <dd
                class="chakra-data-list__itemValue css-15out64"
              >
                <div
                  class="chakra-tooltip__trigger chakra-status__root css-1bskaxt"
                  data-part="trigger"
                  data-scope="tooltip"
                  data-state="closed"
                  dir="ltr"
                  id="tooltip:«r4»:trigger"
                >
                  <div
                    class="chakra-status__indicator css-1ulvpke"
                  />
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    `);
  });

  it("does not add duplicate metrics", async () => {
    render(<WebVitals />);

    // Wait for the metrics to be updated
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    const metrics = screen.getAllByText(/FCP|LCP|CLS/);
    expect(metrics).toHaveLength(3);
  });
});