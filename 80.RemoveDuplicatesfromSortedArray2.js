/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;

    let write = 0;
    let count = 0;

    for (let read = 0; read < nums.length; read++) {
        count = read > 0 && nums[read] === nums[read - 1] ? count + 1 : 1;

        if (count <= 2) {
            nums[write] = nums[read];
            write++;
        }
    }

    return write;
};

module.exports = removeDuplicates;