var SteelToe = function (object) {
  return function (property) {
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
};
