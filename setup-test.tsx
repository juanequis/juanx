import "@testing-library/jest-dom/vitest"
import { JSDOM } from "jsdom"
import ResizeObserver from "resize-observer-polyfill"
import { vi } from "vitest"
// import "vitest-axe/extend-expect"

const { window } = new JSDOM()

// ResizeObserver mock
vi.stubGlobal("ResizeObserver", ResizeObserver)
window["ResizeObserver"] = ResizeObserver

// IntersectionObserver mock
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))
vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
window["IntersectionObserver"] = IntersectionObserverMock

// Scroll Methods mock
window.Element.prototype.scrollTo = () => { }
window.Element.prototype.scrollIntoView = () => { }

// requestAnimationFrame mock
window.requestAnimationFrame = (cb) => setTimeout(cb, 1000 / 60)

// URL object mock
window.URL.createObjectURL = () => "https://i.pravatar.cc/300"
window.URL.revokeObjectURL = () => { }

// navigator mock
Object.defineProperty(window, "navigator", {
  value: {
    clipboard: {
      writeText: vi.fn(),
    },
  },
})

// Mock matchMedia
window.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: query.includes("(prefers-color-scheme: dark)"),
  media: query,
  onchange: null,
  addListener: vi.fn(), // Deprecated
  removeListener: vi.fn(), // Deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));


// Override globalThis
Object.assign(global, { window, document: window.document })

// Mock `next-intl`
vi.mock("next-intl", () => ({
  useTranslations: vi.fn(() => (key: string) => {
    const translations: Record<string, string> = {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.toggleColorMode": "Toggle Color Mode",
      "nav.language": "Language",
      "nav.languageEn": "English",
      "nav.languageEs": "Spanish",
      "nav.languageFr": "French",
    };
    return translations[key] || key;
  }),
  useLocale: vi.fn(() => "en"), // Mock `useLocale` to return a default locale
}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  },
}));