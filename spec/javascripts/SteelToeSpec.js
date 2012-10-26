describe("SteelToe", function () {
  var object = { name: { first: 'Jonathan', last: 'Clem' } },
      steelToe = SteelToe(object);

  it("can return its original object", function () {
    expect(steelToe()).toEqual(object);
  });

  it("can access root-level keys", function () {
    expect(steelToe('name')()).toEqual({ first: 'Jonathan', last: 'Clem' })
  });

  it("returns undefined for root-level keys that are undefined", function () {
    expect(steelToe('nope')()).not.toBeDefined();
  });

  it("returns undefined for undefined keys nested in defined keys", function () {
    expect(steelToe('name')('middleName')()).not.toBeDefined();
  });

  it("returns undefined for undefined keys nested in undefined keys", function () {
    expect(steelToe('nope')('noWay')()).not.toBeDefined();
  });

  describe("#walk", function () {
    it("splits a string of keys and walks through the object", function () {
      expect(steelToe.walk('name.firstName')).toEqual(steelToe('name')('firstName')());
    });
  });
});

