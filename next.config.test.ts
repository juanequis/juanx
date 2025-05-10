import { describe, it, expect, vi } from "vitest";
import createNextIntlPlugin from "next-intl/plugin";
import nextConfig from "./next.config";

vi.mock("next-intl/plugin", () => ({
  default: vi.fn(() => (config: unknown) => config),
}));

describe("next.config.ts", () => {
  it("exports the correct Next.js configuration", () => {
    const mockPlugin = createNextIntlPlugin("./i18n/requests.ts");
    const config = mockPlugin(nextConfig);

    expect(config).toEqual(nextConfig);
    expect(createNextIntlPlugin).toHaveBeenCalledWith("./i18n/requests.ts");
  });
});