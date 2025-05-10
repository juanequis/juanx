import { describe, it, expect } from "vitest";
import { locales, defaultLocale } from "./settings";

describe("i18n/settings", () => {
  it("should define the correct locales", () => {
    expect(locales).toEqual(['en', 'es', 'fr']);
  });

  it("should set the correct default locale", () => {
    expect(defaultLocale).toBe('en');
  });

  it("should ensure the default locale is part of the locales array", () => {
    expect(locales).toContain(defaultLocale);
  });
});