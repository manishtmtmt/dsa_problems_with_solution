/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price seen so far
        minPrice = Math.min(minPrice, prices[i]);
        
        // Update the maximum profit seen so far
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};