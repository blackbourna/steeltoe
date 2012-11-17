function SteelToe (object, rootObject) {
  function steelToe (property) {
    if (object && property) {
      return SteelToe(object[property]);
    } else {
      return property ? SteelToe() : object;
    }
  }

  steelToe.set = function (traversalChain, value) {
    var keys = traversalChain.split('.'),
        object = steelToe;

    for (var i = 0; i < keys.length; i ++) {
      if (!object()[keys[i]]) {
        object()[keys[i]] = {};
      }

      if (i == keys.length - 1) {
        object()[keys[i]] = value;
      }

      object = object(keys[i]);
    }

    return value;
  }

  steelToe.walk = function (traversalChain) {
    if (traversalChain) {
      var keys = traversalChain.split('.'), i;

      for (i = 0; i < keys.length; i += 1) {
        steelToe = steelToe(keys[i])
      }
    }

    return steelToe();
  };

  return steelToe;
};
