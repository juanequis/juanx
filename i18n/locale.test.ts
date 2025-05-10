import { describe, it, expect, vi } from "vitest";
import { getUserLocale, setUserLocale } from "./locale";
import { cookies } from "next/headers";
import { defaultLocale } from "./settings";

vi.mock("next/headers", () => ({
  cookies: vi.fn(),
}));

describe("i18n/locale", () => {
  const COOKIE_NAME = "NEXT_LOCALE";

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("getUserLocale", () => {
    it("should return the locale from the cookie if it exists", async () => {
      const mockCookies = {
        get: vi.fn().mockReturnValue({ value: "es" }),
      };
      (cookies as jest.Mock).mockResolvedValue(mockCookies);

      const locale = await getUserLocale();

      expect(mockCookies.get).toHaveBeenCalledWith(COOKIE_NAME);
      expect(locale).toBe("es");
    });

    it("should return the default locale if the cookie does not exist", async () => {
      const mockCookies = {
        get: vi.fn().mockReturnValue(undefined),
      };
      (cookies as jest.Mock).mockResolvedValue(mockCookies);

      const locale = await getUserLocale();

      expect(mockCookies.get).toHaveBeenCalledWith(COOKIE_NAME);
      expect(locale).toBe(defaultLocale);
    });
  });

  describe("setUserLocale", () => {
    it("should set the locale in the cookie", async () => {
      const mockCookies = {
        set: vi.fn(),
      };
      (cookies as jest.Mock).mockResolvedValue(mockCookies);

      await setUserLocale("fr");

      expect(mockCookies.set).toHaveBeenCalledWith(COOKIE_NAME, "fr");
    });
  });
});