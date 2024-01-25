describe("#hasOddNumber", function () {
  it("returns true if there is at least one odd number in the array", function () {
    expect(hasOddNumber([1, 2, 2, 2, 2, 2, 4])).toEqual(true);
  });
  it("returns false if there are no odd numbers in the array", function () {
    expect(hasOddNumber([2, 2, 2, 2, 2, 4])).toEqual(false);
  });
});

describe("#hasZero", function () {
  it("should return true if the number has at least one 0", function () {
    expect(hasAZero(83948098989899)).toEqual(true);
  });
  it("should return false if there is not a 0", function () {
    expect(hasAZero(999992323233)).toEqual(false);
  });
});

describe("#hasOnlyOddNumbers", function () {
  it("should return true if it has ood numbers only", function () {
    expect(hasOnlyOddNumbers([1, 1, 3, 5, 7, 9])).toEqual(true);
  });
  it("should return false if there is at least one even number", function () {
    expect(hasOnlyOddNumbers([0, 1, 2, 3, 5, 7])).toEqual(false);
  });
});

describe("#hasNoCuplicate", function () {
  it("should return true if there are no duplicates", function () {
    expect(hasNoDuplicates([1, 2, 3, 4, 5])).toEqual(true);
  });
  it("should return false if there are duplicates", function () {
    expect(hasNoDuplicates([1, 1, 2, 3, 4])).toEqual(false);
  });
});

describe("#hasCertainKey", function () {
  var arr = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ];
  it("should return true if all objects contain the same key", function () {
    expect(hasCertainKey(arr, "first")).toEqual(true);
  });
  it("should return false if all objects do not contain the same key", function () {
    expect(hasCertainKey(arr, "isCatOwner")).toEqual(false);
  });
});

describe("#hasCertainValue", function () {
  var arr = [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
  ];
  it("should return true if all objects have the same value", function () {
    expect(hasCertainValue(arr, "title", "Instructor")).toEqual(true);
  });
  it("should return false if all objects do not have the same value", function () {
    expect(hasCertainValue(arr, "first", "Elie")).toEqual(false);
  });
});
