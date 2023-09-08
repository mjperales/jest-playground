import sum from "./sum";

describe("sum()", () => {
  it("Returns correct sum amount", () => {
    //Arrange
    const x = 4,
      y = 5;

    //Act
    const sut = sum(x, y);

    // Assert
    expect(sut).toBe(9);
  });
});
