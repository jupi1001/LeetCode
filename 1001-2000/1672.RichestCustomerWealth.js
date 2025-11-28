/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;
  // for each account, get users total wealth
  accounts.forEach((account) => {
    const accountWealth = account.reduce((sum, wealth) => (sum += wealth), 0);
    // check if total wealth of user account is greater than max wealth found
    if (accountWealth > result) {
      result = accountWealth;
    }
  });
  return result;
};
