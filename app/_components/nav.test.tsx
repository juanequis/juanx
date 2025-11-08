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
          class="_nav_556229"
        >
          <div
            class="_navLinks_556229 css-1ncwuo4"
          >
            <a
              class="chakra-link _link_99cf69 css-2yvnes"
              href="/"
            >
              home
            </a>
            <a
              class="chakra-link _link_99cf69 css-2yvnes"
              href="/work"
            >
              work
            </a>
          </div>
          <div
            class="css-70qvj9"
          >
            <div
              class="_navSocial_556229 css-k008qs"
            >
              <a
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/in/jcavellaneda87/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  height="1.5em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
              <a
                aria-label="GitHub profile"
                href="https://github.com/juanequis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  height="1.5em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </div>
            <div
              class="css-1ncwuo4"
            >
              <button
                aria-haspopup="menu"
                aria-label="Open menu"
                class="chakra-button chakra-menu__trigger css-8e1hzq"
                data-part="trigger"
                data-scope="menu"
                data-state="closed"
                data-uid="_r_0_"
                dir="ltr"
                id="menu:_r_0_:trigger"
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
          </div>
          <div
            class="css-19r7uti"
          >
            <button
              aria-expanded="false"
              aria-haspopup="dialog"
              aria-label="Open mobile menu"
              class="chakra-button chakra-drawer__trigger css-1do5zui"
              data-part="trigger"
              data-scope="dialog"
              data-state="closed"
              dir="ltr"
              id="dialog:_r_1_:trigger"
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
          class="_langAccordion_556229 chakra-accordion__root css-ytxxjc"
          data-orientation="vertical"
          data-part="root"
          data-scope="accordion"
          dir="ltr"
          id="accordion:_r_2_"
        >
          <div
            class="chakra-accordion__item css-1jiccns"
            data-orientation="vertical"
            data-part="item"
            data-scope="accordion"
            data-state="closed"
            dir="ltr"
            id="collapsible:accordion:_r_2_:item:language-select"
          >
            <button
              aria-controls="accordion:_r_2_:content:language-select"
              aria-disabled="false"
              aria-expanded="false"
              class="chakra-accordion__itemTrigger css-j4wfrq"
              data-orientation="vertical"
              data-ownedby="accordion:_r_2_"
              data-part="item-trigger"
              data-scope="accordion"
              data-state="closed"
              dir="ltr"
              id="accordion:_r_2_:trigger:language-select"
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
              aria-labelledby="accordion:_r_2_:trigger:language-select"
              class="chakra-accordion__itemContent css-sl7aw8"
              data-collapsible=""
              data-orientation="vertical"
              data-part="item-content"
              data-scope="accordion"
              data-state="closed"
              dir="ltr"
              hidden=""
              id="accordion:_r_2_:content:language-select"
              role="region"
              style="--height: 0px; --width: 0px;"
            >
              <div
                aria-labelledby="radio-group:_r_4_:label"
                aria-orientation="vertical"
                class="chakra-radio-group__root"
                data-orientation="vertical"
                data-part="root"
                data-scope="radio-group"
                dir="ltr"
                id="radio-group:_r_4_"
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
                    for="radio-group:_r_4_:radio:input:en"
                    id="radio-group:_r_4_:radio:en"
                  >
                    <input
                      checked=""
                      data-ownedby="radio-group:_r_4_"
                      id="radio-group:_r_4_:radio:input:en"
                      name="_r_4_"
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
                      id="radio-group:_r_4_:radio:control:en"
                    >
                      <span
                        class="dot"
                      />
                    </span>
                    <span
                      class="chakra-radio-group__itemText"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="checked"
                      dir="ltr"
                      id="radio-group:_r_4_:radio:label:en"
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
                    for="radio-group:_r_4_:radio:input:es"
                    id="radio-group:_r_4_:radio:es"
                  >
                    <input
                      data-ownedby="radio-group:_r_4_"
                      id="radio-group:_r_4_:radio:input:es"
                      name="_r_4_"
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
                      id="radio-group:_r_4_:radio:control:es"
                    />
                    <span
                      class="chakra-radio-group__itemText"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:_r_4_:radio:label:es"
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
                    for="radio-group:_r_4_:radio:input:fr"
                    id="radio-group:_r_4_:radio:fr"
                  >
                    <input
                      data-ownedby="radio-group:_r_4_"
                      id="radio-group:_r_4_:radio:input:fr"
                      name="_r_4_"
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
                      id="radio-group:_r_4_:radio:control:fr"
                    />
                    <span
                      class="chakra-radio-group__itemText"
                      data-orientation="vertical"
                      data-part="item-text"
                      data-scope="radio-group"
                      data-ssr=""
                      data-state="unchecked"
                      dir="ltr"
                      id="radio-group:_r_4_:radio:label:fr"
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