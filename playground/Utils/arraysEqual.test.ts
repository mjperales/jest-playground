import arraysEqual from "./arraysEqual";

describe("arraysEqual()", () => {
  it("Expect arrays to match even if strings are in a different order", () => {
    // Diff order
    expect(arraysEqual(["III", "KLK", "&&&"], ["KLK", "III", "&&&"])).toBe(
      true
    );
  });
  it("Expect arrays not to match when they are different sizes", () => {
    // Diff size
    expect(arraysEqual(["KLK", "&&&"], ["KLK", "III", "&&&"])).toBe(false);
  });
  it("Expect arrays not to match", () => {
    expect(
      arraysEqual(["KJUH", "KIUH", "MNKHJ"], ["DDDD", "WEDF", "HIFCd"])
    ).toBe(false);
  });
});
