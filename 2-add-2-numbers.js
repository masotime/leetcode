/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // generate a sorted version - O(n lg n)
    const sortedNums = [...nums].sort((a, b) => a - b);

    // iterate through the sorted version. The idea is to search
    // from both ends. Start from the left, then searh from the right
    // inwards until the complementary number is smaller than the needed.
    let left = 0;
    let right = nums.length - 1;
    let requiredDifference = target - sortedNums[left];

    // O(n) search, we are only evaluating each number once 
    while (left < right) {
        if (sortedNums[right] === requiredDifference) {
            break;
        } else if (sortedNums[right] > requiredDifference) {
            right -= 1;
        } else if (sortedNums[right] < requiredDifference) {
            // advance left pointer instead
            left += 1;
            requiredDifference = target - sortedNums[left];            
        }
    }

    // presumably we've found our answer (assuming there's always an answer)
    // so just find the indexes of each number
    let leftIdx = -1, rightIdx = -1;
    const leftNum = sortedNums[left], rightNum = sortedNums[right];

    // O(n) search, only evaluating each element of nums[i] once
    for (let i=0; i < nums.length; i+= 1) {
        if (leftIdx === -1 && nums[i] === leftNum) {
            leftIdx = i;
            if (rightIdx !== -1) {
                break;
            }
        } else if (rightIdx === -1 && nums[i] === rightNum) {
            rightIdx = i;
            if (leftIdx !== -1) {
                break;
            }
        }
    }

    return [leftIdx, rightIdx];
};
