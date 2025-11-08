import { describe, it, beforeEach, afterAll, expect, vi } from "vitest";
import { weatherResolvers } from "./resolvers";
import { GraphQLError } from "graphql";

describe("weatherResolvers", () => {
  const originalEnv = process.env;

  /** @TODO See if can do vi.resetModules globally */
  beforeEach(() => {
    vi.resetModules(); // Clear module cache
    process.env = { ...originalEnv }; // Reset environment variables
  });

  afterAll(() => {
    process.env = originalEnv; // Restore original environment variables
  });

  describe("Query.weather", () => {
    it("should return weather data successfully", async () => {
      process.env.WEATHER_API_KEY = "test-api-key";

      const mockFetchResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue({
          current: {
            condition: {
              icon: "test-icon",
              text: "Sunny",
            },
            temp_c: 25,
          },
          location: {
            name: "Test City",
            region: "Test Region",
            country: "Test Country",
          },
        }),
      };

      global.fetch = vi.fn().mockResolvedValue(mockFetchResponse);

      const result = await weatherResolvers.Query.weather(null, {
        latitude: 10,
        longitude: 20,
      });

      expect(result).toEqual({
        condition: {
          icon: "test-icon",
          text: "Sunny",
          temperature: 25,
        },
        location: "Test City, Test Region, Test Country",
      });

      expect(global.fetch).toHaveBeenCalledWith(
        "https://api.weatherapi.com/v1/current.json?key=test-api-key&q=10,20"
      );
    });

    it("should throw an error if WEATHER_API_KEY is not defined", async () => {
      /**@TODO find a better alternative maybe? */
      delete process.env.WEATHER_API_KEY;

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow(GraphQLError);

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow("WEATHER_API_KEY key is not defined");
    });

    it("should throw an error if fetch fails", async () => {
      process.env.WEATHER_API_KEY = "test-api-key";

      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow(GraphQLError);

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow("Error fetching weather data: Failed to fetch weather data");
    });

    it("should handle unexpected fetch errors", async () => {
      process.env.WEATHER_API_KEY = "test-api-key";

      global.fetch = vi.fn().mockRejectedValue(new Error("Unexpected error"));

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow(GraphQLError);

      await expect(
        weatherResolvers.Query.weather(null, { latitude: 10, longitude: 20 })
      ).rejects.toThrow("Error fetching weather data: Unexpected error");
    });
  });
});