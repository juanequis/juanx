import { describe, it, expect, vi } from "vitest";
import getRequestConfig from "./requests";
import { getUserLocale } from "./locale";

vi.mock("./locale", () => ({
  getUserLocale: vi.fn(),
}));

vi.mock("../messages/en.json", () => ({
  default: { greeting: "Hello" },
}));

vi.mock("../messages/es.json", () => ({
  default: { greeting: "Hola" },
}));

vi.mock("next-intl/server", () => ({
  getRequestConfig: vi.fn((fn) => fn()),
}));

/** Need to fix this test, cannot correctly mock getRequestConfig from 'next-intl/server' */
describe.skip("i18n/requests", () => {
  it("should return the correct locale and messages", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue("en");

    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "en",
      messages: { greeting: "Hello" },
    });
  });

  it("should fall back to the default locale if getUserLocale fails", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue(undefined);

    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "en",
      messages: { greeting: "Hello" },
    });
  });

  it("should load the correct messages for a different locale", async () => {
    (getUserLocale as jest.Mock).mockResolvedValue("es");

    const config = await getRequestConfig();

    expect(config).toEqual({
      locale: "es",
      messages: { greeting: "Hola" },
    });
  });
});