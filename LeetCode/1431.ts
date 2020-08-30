function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const greatestOption = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= greatestOption);
};