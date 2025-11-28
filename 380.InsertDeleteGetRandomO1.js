
var RandomizedSet = function () {
  this.values = [];
  this.indices = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }

  this.values.push(val);
  this.indices.set(val, this.values.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }

  var idxToRemove = this.indices.get(val);
  var lastIndex = this.values.length - 1;
  var lastVal = this.values[lastIndex];

  this.values[idxToRemove] = lastVal;
  this.indices.set(lastVal, idxToRemove);

  this.values.pop();
  this.indices.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  var randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */