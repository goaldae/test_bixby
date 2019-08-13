let console = require('console')

module.exports.function = function TestCost (cost) {
  var res = String(cost);
  console.log(res);
  return  res;
}
