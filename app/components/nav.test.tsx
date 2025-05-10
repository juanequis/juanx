import { Nav } from "./nav";
import { render } from "@/test-utils/render";
import { screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LanguageSelect } from "./nav";
import { setUserLocale } from '@/i18n/locale';
import { vi } from "vitest"

vi.mock('@/i18n/locale', () => ({
  setUserLocale: vi.fn(),
  getUserLocale: vi.fn(() => 'en'),
}));

describe("Nav Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <nav
          class="_nav_6fc5eb"
        >
          <div
            class="_navLinks_6fc5eb css-1ncwuo4"
          >
            <a
              class="chakra-link _link_429e0e css-2yvnes"
              href="/"
            >
              home
            </a>
            <a
              class="chakra-link _link_429e0e css-2yvnes"
              href="/about"
            >
              about
            </a>
            <a
              class="chakra-link _link_429e0e css-2yvnes"
              href="/work"
            >
              work
            </a>
            <a
              class="chakra-link _link_429e0e css-2yvnes"
              href="/contact"
            >
              contact
            </a>
          </div>
          <div
            class="_navSettings_6fc5eb css-1ncwuo4"
          >
            <button
              aria-haspopup="menu"
              aria-label="Open menu"
              class="chakra-button chakra-menu__trigger css-s214k3"
              data-part="trigger"
              data-scope="menu"
              data-state="closed"
              data-uid="«r0»"
              dir="ltr"
              id="menu:«r0»:trigger"
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="lg"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="lg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="css-19r7uti"
          >
            <button
              aria-expanded="false"
              aria-haspopup="dialog"
              aria-label="Open mobile menu"
              class="chakra-button chakra-drawer__trigger css-s214k3"
              data-part="trigger"
              data-scope="dialog"
              data-state="closed"
              dir="ltr"
              id="dialog:«r1»:trigger"
              type="button"
            >
              <svg
                fill="none"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 15 15"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    `);
  });
});

describe("LanguageSelect Component", () => {
  it('renders the LanguageSelect component', () => {
    const { container } = render(<LanguageSelect />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <script
          nonce=""
        >
          ((e,i,s,u,m,a,l,h)=&gt;{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=&gt;{let k=y==="class",S=k&&a?m.map(f=&gt;a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n)}),R(n)}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n)}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y)}catch(n){}})("class","theme","system",null,["light","dark"],null,true,true)
        </script>
        <div
          class="_langAccordion_6fc5eb chakra-accordion__root css-ytxxjc"
          data-orientation="vertical"
          data-part="root"
          data-scope="accordion"
          dir="ltr"
          id="accordion:«r2»"
        >
          <div
            class="chakra-accordion__item css-1jiccns"
            data-orientation="vertical"
            data-part="item"
            data-scope="accordion"
            data-state="closed"
            dir="ltr"
            id="collapsible:accordion:«r2»:item:language-select"
          >
            <button
              aria-controls="accordion:«r2»:content:language-select"
              aria-disabled="false"
              aria-expanded="false"
              class="chakra-accordion__itemTrigger css-j4wfrq"
              data-orientation="vertical"
              data-ownedby="accordion:«r2»"
              data-part="item-trigger"
              data-scope="accordion"
              data-state="closed"
              dir="ltr"
              id="accordion:«r2»:trigger:language-select"
              type="button"
            >
              <span
                class="css-1rr4qq7"
              >
                language
              </span>
              <div
                aria-hidden="true"
                class="chakra-accordion__itemIndicator css-1ic543h"
                data-orientation="vertical"
                data-part="item-indicator"
                data-scope="accordion"
                data-state="closed"
                dir="ltr"
              >
                <svg
                  class="css-s3mb0o"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </div>
            </button>
            <div
              aria-labelledby="accordion:«r2»:trigger:language-select"
              class="chakra-accordion__itemContent css-sl7aw8"
              data-collapsible=""
              data-orientation="vertical"
              data-part="item-content"
              data-scope="accordion"
              data-state="closed"
              dir="ltr"
              hidden=""
              id="accordion:«r2»:content:language-select"
              role="region"
              style="--height: 0px; --width: 0px;"
            >
              <div
                aria-labelledby="radio-group:«r4»:label"
                aria-orientation="vertical"
                class="chakra-radio-group__root css-0"
                data-orientation="vertical"
                data-part="root"
                data-scope="radio-group"
                dir="ltr"
                id="radio-group:«r4»"
                role="radiogroup"
                style="position: relative;"
              >
                <div
                  class="chakra-stack css-oscz95"
                >
                  <label
                    class="chakra-radio-group__item css-qqdgad"
                    data-orientation="vertical"
                    data-part="item"
                    data-scope="radio-group"
                    data-ssr=""
                    data-state="checked"
                    dir="ltr"
                    for="radio-group:«r4»:radio:input:en"
                    id="radio-group:«r4»:radio:en"
                  >
                    <input
                      checked=""
                      data-ownedby="radio-group:«r4»"
                      id="radio-group:«r4»:radio:input:en"
                      name="«r4»"
                      style="border: 0px; height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; word-wrap: normal;"
                      type="radio"
                      value="en"
                    />
                    <span
                      aria-hidden="true"
                      class="css-u077tr"
                      data-checked=""
                      data-orientation="vertical"
                      data-part="item-control"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="checked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:control:en"
                    >
                      <span
                        class="dot"
                      />
                    </span>
                    <span
                      class="chakra-radio-group__itemText css-0"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="checked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:label:en"
                    >
                      languageEn
                    </span>
                  </label>
                  <label
                    class="chakra-radio-group__item css-qqdgad"
                    data-orientation="vertical"
                    data-part="item"
                    data-scope="radio-group"
                    data-ssr=""
                    data-state="unchecked"
                    dir="ltr"
                    for="radio-group:«r4»:radio:input:es"
                    id="radio-group:«r4»:radio:es"
                  >
                    <input
                      data-ownedby="radio-group:«r4»"
                      id="radio-group:«r4»:radio:input:es"
                      name="«r4»"
                      style="border: 0px; height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; word-wrap: normal;"
                      type="radio"
                      value="es"
                    />
                    <span
                      aria-hidden="true"
                      class="css-u077tr"
                      data-orientation="vertical"
                      data-part="item-control"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:control:es"
                    />
                    <span
                      class="chakra-radio-group__itemText css-0"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:label:es"
                    >
                      languageEs
                    </span>
                  </label>
                  <label
                    class="chakra-radio-group__item css-qqdgad"
                    data-orientation="vertical"
                    data-part="item"
                    data-scope="radio-group"
                    data-ssr=""
                    data-state="unchecked"
                    dir="ltr"
                    for="radio-group:«r4»:radio:input:fr"
                    id="radio-group:«r4»:radio:fr"
                  >
                    <input
                      data-ownedby="radio-group:«r4»"
                      id="radio-group:«r4»:radio:input:fr"
                      name="«r4»"
                      style="border: 0px; height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; word-wrap: normal;"
                      type="radio"
                      value="fr"
                    />
                    <span
                      aria-hidden="true"
                      class="css-u077tr"
                      data-orientation="vertical"
                      data-part="item-control"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:control:fr"
                    />
                    <span
                      class="chakra-radio-group__itemText css-0"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:«r4»:radio:label:fr"
                    >
                      languageFr
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });


  it("handles language change for spanish locale", async () => {
    render(<LanguageSelect />);
    const spanishOption = screen.getByLabelText(/languageEs/i);

    await act(async () => {
      fireEvent.click(spanishOption);
    });

    expect(setUserLocale).toHaveBeenCalledWith("es");
  });

  it("handles language change for french locale", async () => {
    render(<LanguageSelect />);
    const frenchOption = screen.getByLabelText('languageFr');

    await act(async () => {
      fireEvent.click(frenchOption);
    });

    expect(setUserLocale).toHaveBeenCalledWith("fr");
  });

  it("handles language change and back to english", async () => {
    render(<LanguageSelect />);
    const spanishOption = screen.getByLabelText('languageEs');

    await act(async () => {
      fireEvent.click(spanishOption);
    });

    const englishOption = screen.getByLabelText('languageEn');

    await act(async () => {
      fireEvent.click(englishOption);
    });

    expect(setUserLocale).toHaveBeenCalledWith("en");
  });
});