function SteelToe (object) {
  function steelToe (property) {
    if (property) {
      return SteelToe(object[property] || '__steelToe_propNotFound__');
    } else if (!(object === '__steelToe_propNotFound__')) {
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
