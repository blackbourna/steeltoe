describe("SteelToe", function () {
  var object, steelToe;

  beforeEach(function () {
    object = { name: { first: 'Jonathan', last: 'Clem' } };
    steelToe = new SteelToe(object);
  });

  describe("getting values", function () {
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
      describe("with no traversal chain", function () {
        it("returns its object", function () {
          expect(steelToe.walk()).toEqual(object);
        });
      });

      describe("with a traversal chain", function () {
        it("splits a string of keys and walks through the object", function () {
          expect(steelToe.walk('name.first')).toEqual(steelToe('name')('first')());
        });

        it("returns undefined properties properly", function () {
          expect(steelToe.walk('this.is.bad')).not.toBeDefined();
        });
      });
    });
  });

  describe("setting values", function () {
    describe("for a root-level key", function () {
      beforeEach(function () {
        steelToe.set('key', 'value');
      });

      it("should set the key to the given value", function () {
        expect(steelToe('key')()).toEqual('value');
      });
    });

    describe("for an existing key nested in an existing object", function () {
      beforeEach(function () {
        steelToe.set('name.first', 'New Name');
      });

      it("should set the key to the given value", function () {
        expect(steelToe('name')('first')()).toEqual('New Name');
      });
    });

    describe("for a non-existent key nested in an existing object", function () {
      beforeEach(function () {
        steelToe.set('name.middle', 'New Name');
      });

      it("should set the key to the given value", function () {
        expect(steelToe('name')('middle')()).toEqual('New Name');
      });
    });

    describe("for a non-existent key nested in a non-existent object", function () {
      beforeEach(function () {
        steelToe.set('info.age', 26);
      });

      it("should create the non-existent object", function () {
        expect(steelToe('info')()).toEqual({ age: 26 });
      });

      it("should set the key to the given value", function () {
        expect(steelToe('info')('age')()).toEqual(26);
      });
    });

    describe("setting multiple values", function () {
      beforeEach(function () {
        steelToe.set('info.name.first', 'George');
        steelToe.set('info.name.last', 'Washington');
      });

      it("should set both values", function () {
        expect(steelToe.walk('info.name')).toEqual({ first: 'George', last: 'Washington' });
      });
    });

    describe("for a non-existent key nested multiple levels into in a non-existent object", function () {
      beforeEach(function () {
        steelToe.set('info.birthplace.city', 'Indianapolis');
      });

      it("creates the non-existent objects", function () {
        expect(steelToe('info')()).toEqual({ birthplace: { city: 'Indianapolis' } });
      });

      it("should set the key to the given value", function () {
        expect(steelToe('info')('birthplace')('city')()).toEqual('Indianapolis');
      });
    });
  });
});

