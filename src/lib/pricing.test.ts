import { describe, expect, it } from "vitest";
import {
  calcGrandTotal,
  calcShipping,
  calcSubtotal,
  FLAT_SHIPPING,
  formatUSD,
} from "./pricing";

describe("calcSubtotal", () => {
  it("sums quantity * unit price", () => {
    // ocean-wave $28 * 10 + terracotta-dot $26 * 5 = 280 + 130 = 410
    expect(
      calcSubtotal([
        { id: "ocean-wave", quantity: 10 },
        { id: "terracotta-dot", quantity: 5 },
      ]),
    ).toBe(410);
  });

  it("is 0 for an empty cart", () => {
    expect(calcSubtotal([])).toBe(0);
  });
});

describe("calcShipping", () => {
  it("charges flat shipping at or below the threshold", () => {
    expect(calcShipping(500)).toBe(FLAT_SHIPPING);
    expect(calcShipping(499.99)).toBe(FLAT_SHIPPING);
    expect(calcShipping(0)).toBe(FLAT_SHIPPING);
  });

  it("is free strictly above the threshold", () => {
    expect(calcShipping(500.01)).toBe(0);
    expect(calcShipping(1000)).toBe(0);
  });
});

describe("calcGrandTotal", () => {
  it("adds shipping to subtotal", () => {
    expect(calcGrandTotal(100)).toBe(125);
    expect(calcGrandTotal(600)).toBe(600);
  });
});

describe("formatUSD", () => {
  it("formats with two decimals", () => {
    expect(formatUSD(28)).toBe("$28.00");
    expect(formatUSD(289.5)).toBe("$289.50");
  });
});
