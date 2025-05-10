import { describe, it, expect } from "vitest";
import { locales, defaultLocale } from "./settings";

// filepath: /Users/jc/Projects/juanx/i18n/settings.test.ts

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