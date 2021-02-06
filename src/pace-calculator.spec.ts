import { Pace } from "./pace-calculator";

test("pacestring returns 12,6ss", () => {
  const p = new Pace(100, 12.6);
  expect(p.paceString).toBe("12.6s");
});

test("pacestring returns 01:04", () => {
  const p = new Pace(100, 64);
  Pace.shortMaxLimit > 64
    ? expect(p.paceString).toBe("64.0s")
    : expect(p.paceString).toBe("01:04");
});

test("pacestring returns 0.0", () => {
  const p = new Pace(100, 0);
  expect(p.paceString).toBe("0.0s");
});

test("pacestring returns 60s", () => {
  const p = new Pace(100, 60);
  expect(p.paceString).toBe("60.0s");
});

test("pacestring is not NaN if minutes not provided", () => {
  const p = new Pace(100,)
  expect(p.paceString).toBe('0.0s');
});
