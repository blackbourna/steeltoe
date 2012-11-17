function SteelToe (object, rootObject) {
  var rootObject = rootObject || object;

  function steelToe (property) {
    if (object && property) {
      return SteelToe(object[property], rootObject);
    } else {
      return property ? SteelToe(undefined, rootObject) : object;
    }
  }

  steelToe.set = function (traversalChain, value) {
    var keys = traversalChain.split('.');

    for (var i = 0; i < keys.length; i ++) {
      if (!steelToe()[keys[i]]) {
        steelToe()[keys[i]] = {};
      }

      if (i == keys.length - 1) {
        steelToe()[keys[i]] = value;
      }

      steelToe = steelToe(keys[i]);
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
