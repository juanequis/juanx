import { render } from "@/test-utils/render";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ColorModeProvider, useColorMode, useColorModeValue, ColorModeIcon, ColorModeButton, ColorModeSwitch, LightMode, DarkMode } from "./color-mode";

const mockedSetTheme = vi.fn();

vi.mock("next-themes", () => ({
  ThemeProvider: ({ children }) => <>{children}</>,
  useTheme: () => ({
    resolvedTheme: "light",
    setTheme: mockedSetTheme,
  }),
}));


describe("Color Mode components", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("ColorModeProvider", () => {
    it("renders the ThemeProvider with the correct props", () => {
      const props = { disableTransitionOnChange: true };
      const { container } = render(
        <ColorModeProvider {...props}>
          <div>Test Content</div>
        </ColorModeProvider>
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            Test Content
          </div>
        </div>
      `);

    });
  });

  describe("useColorMode", () => {
    it("returns the correct color mode and toggle function", () => {
      const { colorMode, setColorMode, toggleColorMode } = useColorMode();

      expect(colorMode).toBe("light");
      expect(typeof toggleColorMode).toBe("function");
      expect(typeof setColorMode).toBe("function");
    });

    it("toggles the color mode", () => {
      const { toggleColorMode } = useColorMode();
      toggleColorMode();
      expect(mockedSetTheme).toHaveBeenCalledWith("dark");
    });
  });

  describe("useColorModeValue", () => {
    it("returns the correct color for light value", () => {
      const colorModeValue = useColorModeValue('light', 'dark');

      expect(colorModeValue).toBe("light");
    });
  });

  describe("ColorModeIcon", () => {
    it("returns the correct icon for light value", () => {

      const { container } = render(<ColorModeIcon />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <svg
            fill="none"
            height="1em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
            />
            <path
              d="M12 2v2"
            />
            <path
              d="M12 20v2"
            />
            <path
              d="m4.93 4.93 1.41 1.41"
            />
            <path
              d="m17.66 17.66 1.41 1.41"
            />
            <path
              d="M2 12h2"
            />
            <path
              d="M20 12h2"
            />
            <path
              d="m6.34 17.66-1.41 1.41"
            />
            <path
              d="m19.07 4.93-1.41 1.41"
            />
          </svg>
        </div>
      `);
    });
  });

  describe("ColorModeButton", () => {
    it("returns the correct icon for light value", () => {

      const { container } = render(<ColorModeButton />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <button
            aria-label="Toggle color mode"
            class="chakra-button css-frz056"
            type="button"
          >
            <svg
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
              />
              <path
                d="M12 2v2"
              />
              <path
                d="M12 20v2"
              />
              <path
                d="m4.93 4.93 1.41 1.41"
              />
              <path
                d="m17.66 17.66 1.41 1.41"
              />
              <path
                d="M2 12h2"
              />
              <path
                d="M20 12h2"
              />
              <path
                d="m6.34 17.66-1.41 1.41"
              />
              <path
                d="m19.07 4.93-1.41 1.41"
              />
            </svg>
          </button>
        </div>
      `);
    });
  });

  describe("ColorModeSwitch", () => {
    it("returns the correct icon for light value", () => {

      const { container } = render(<ColorModeSwitch label="Label" />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <label
            aria-label="Toggle color mode"
            class="chakra-switch__root css-1qj3rao"
            data-part="root"
            data-scope="switch"
            data-state="unchecked"
            dir="ltr"
            for="switch:«r0»:input"
            id="switch:«r0»"
          >
            <input
              aria-labelledby="switch:«r0»:label"
              id="switch:«r0»:input"
              style="border: 0px; height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; word-wrap: normal;"
              type="checkbox"
              value="on"
            />
            <span
              class="chakra-switch__label css-wj1361"
              data-part="label"
              data-scope="switch"
              data-state="unchecked"
              dir="ltr"
              id="switch:«r0»:label"
            >
              Label
            </span>
            <span
              aria-hidden="true"
              class="chakra-switch__control css-1u5nqpo"
              data-part="control"
              data-scope="switch"
              data-state="unchecked"
              dir="ltr"
              id="switch:«r0»:control"
            >
              <span
                aria-hidden="true"
                class="chakra-switch__thumb css-1vps79i"
                data-part="thumb"
                data-scope="switch"
                data-state="unchecked"
                dir="ltr"
                id="switch:«r0»:thumb"
              />
              <span
                class="css-1wn9d01"
              >
                <svg
                  aria-hidden="true"
                  class="chakra-icon css-rcuhmf"
                  fill="none"
                  focusable="false"
                  height="1em"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                  />
                </svg>
              </span>
            </span>
          </label>
        </div>
      `);
    });
  });

  describe("LightMode", () => {
    it("should render correctly for light mode", () => {

      const { container } = render(<LightMode />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <span
            class="chakra-theme light css-j6igsa"
          />
        </div>
      `);
    });
  });

  describe("DarkMode", () => {
    it("should render correctly for dark mode", () => {

      const { container } = render(<DarkMode />);

      expect(container).toMatchInlineSnapshot(`
        <div>
          <span
            class="chakra-theme dark css-1k3ydnv"
          />
        </div>
      `);
    });
  });
});