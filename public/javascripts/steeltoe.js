var SteelToe = function (object) {
  var steelToe = function (property) {
    if (property) {
      if (object[property]) {
        return new SteelToe(object[property]);
      } else {
        return new SteelToe('__propNotFound__');
      }
    } else if (!property && object === '__propNotFound__') {
      return undefined;
    } else {
      return object;
    }
  }

  steelToe.walk = function (traversalChain) {
    if (traversalChain) {
      var keys = traversalChain.split('.'),
          returnObject = steelToe;

      for (var i = 0; i < keys.length; i ++) {
        returnObject = returnObject(keys[i])
      }

      return returnObject();
    } else {
      return steelToe();
    }
  };

  return steelToe;
};
