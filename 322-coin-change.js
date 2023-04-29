/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// cheat, let's use a memo
const memo = {};

var coinChange = function(coins, amount) {
    const key = `${coins}:${amount}`;
    // DFS recursion
    // 2 base cases, amount < 0, -1, amount === 0, 1    
    if (amount < 0) {
        return -1;
    } else if (amount === 0) {
        return 0;
    } else if (memo[key]) {
        // memo lookup cheat
        return memo[key];
    }

    let solution = -1;

    // actual recursion
    // try all coins
    for (let c = 0; c < coins.length; c += 1) {
        const currentCoins = coinChange(coins, amount - coins[c]);
        if (currentCoins !== -1 && (solution === -1 || solution > currentCoins)) {
            // the current temp result is better
            solution = currentCoins;
        }
    }

    // memo cheat
    memo[key] = (solution === -1) ? -1 : (solution + 1);

    // the best answer on this path, +1 as we go up the path
    return memo[key];    
};

console.log(coinChange([2], 2));
