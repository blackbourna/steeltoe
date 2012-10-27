function SteelToe (object) {
  function steelToe (property) {
    if (object && property) {
      return SteelToe(object[property]);
    } else if (property) {
      return SteelToe();
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
