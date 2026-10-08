import { describe, it, expect } from "vitest";
import { snacks_name } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks_name.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snacks_name).toContain("chips");
  });
});
