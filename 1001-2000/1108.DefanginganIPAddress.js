/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  // Inside the slash is the . which is getting replaced
  // Backslash to escape the .
  // g as a global modifier. Means that all occurences are getting replaced and not just one
  return address.replace(/\./g, "[.]");
};
