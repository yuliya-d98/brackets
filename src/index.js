module.exports = function check(str, bracketsConfig) {
  let config = {};
  for (let keys of bracketsConfig) {
      config[keys[0]] = keys[1];
  }
  let result = str.split("");
  recursion(result);
  function recursion(result) {
      for (let key in config) {
          for (let i = 0; i < result.length; i++) {
              if (result[i] == key && result[i + 1] == config[key]) {
                  result.splice(i, 2);
                  recursion(result);
              }
          }
      }
  }
  let solution = result.length > 0 ? false : true;
  return solution;
};
