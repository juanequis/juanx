import { describe, it, expect, vi } from "vitest";
import { getUserLocale } from "./locale";
import { getRequestConfig } from "next-intl/server";

// Mock the `getRequestConfig` function from `next-intl/server`
vi.mock("next-intl/server", () => ({
  getRequestConfig: vi.fn(async () => {
    const locale = await getUserLocale();
    const messages =
      locale === "es" ? { greeting: "Hola" } : { greeting: "Hello" };

    return { locale: locale || "en", messages };
  }),
}));

vi.mock("./locale", () => ({
  getUserLocale: vi.fn(),
}));

vi.mock("../messages/en.json", () => ({
  default: { greeting: "Hello" },
}));

vi.mock("../messages/es.json", () => ({
  default: { greeting: "Hola" },
}));

/** @TODO Invistigate TS error of getRequestConfig to remove expect-error  */

describe("i18n/requests", () => {
  it("should return the correct locale and messages", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue("en");

    // @ts-expect-error: getRequestConfig says it accespts 1 argument but it shouldn't 
    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "en",
      messages: { greeting: "Hello" },
    });
  });

  it("should fall back to the default locale if getUserLocale fails", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue(undefined);

    // @ts-expect-error: getRequestConfig says it accespts 1 argument but it shouldn't 
    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "en",
      messages: { greeting: "Hello" },
    });
  });

  it("should load the correct messages for a different locale", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue("es");

    // @ts-expect-error: getRequestConfig says it accespts 1 argument but it shouldn't
    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "es",
      messages: { greeting: "Hola" },
    });
  });
});