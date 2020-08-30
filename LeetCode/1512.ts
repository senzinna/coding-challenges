function numIdenticalPairs(nums: number[]): number {
    const goodPairs: Array<Array<number>> = [];

    nums.forEach((iValue, iIndex) => {
        nums.forEach((jValue, jIndex) => {
            const isEqual = iValue === jValue;
            const isIndexLess = iIndex < jIndex;

            if (isEqual && isIndexLess) {
                goodPairs.push([iIndex, jIndex]);
            }
        });
    });

    return goodPairs.length;
};