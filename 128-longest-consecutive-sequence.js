/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numCount = nums.length;
  const numLookup = {};
  let longestStreak = 0;

  // O(n) time to construct hash, O(n) space
  for (let i=0; i < numCount; i+= 1) {
    const num = nums[i];
    numLookup[num] = true;
  }

  // O(n) loop
  for (let i=0; i < numCount; i+= 1) {
      const curr = nums[i];
      const prev = curr - 1;

      // O(1) lookup
      if (numLookup[prev]) {
          continue;
      }
      
      // test to see how long of a streak we can make
      // Complexity of this is tricky. Since this only looks for streaks,
      // at the most it wastes O(1) time looking for a number beyond an actual streak
      // if it is a number that's in the stream, then it is checked twice above by the previous
      // lookup check below.
      //
      // in any case, there won't be more than 2x lookups.
      let currentStreak = 0;      
      for (let next = curr; numLookup[next]; next += 1) {          
          currentStreak += 1;
      }

      currentStreak > longestStreak && (longestStreak = currentStreak);
  }

  return longestStreak;
};
