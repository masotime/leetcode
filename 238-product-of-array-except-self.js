/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [1];
    const numCount = nums.length;
    const nextToLast = numCount - 1;

    // O(n) - move forwards and keep a running multiple
    for (let i=0, running = 1; i < nextToLast; i += 1) {
        const num = nums[i];
        running *= num;

        // set the next number to the running product in the answer array.
        answer[i+1] = running;
    }

    // O(n) - move backwards and do the same thing
    for (let i = numCount - 1, running = 1; i > 0; i -= 1) {
        const num = nums[i];
        running *= num;

        answer[i-1] *= running;
    }

    return answer;    
};
