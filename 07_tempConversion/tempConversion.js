const ftoc = function() {
  return (arguments[0] - 32) * (5/9);
};

const ctof = function() {
  return (arguments[0] * (9/5)) + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
