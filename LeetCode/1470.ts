function shuffle(nums: number[], n: number): number[] {
    return nums.reduce((accumulator, currentValue, index, array) => {
        if (index < n) {
            accumulator.push(currentValue);
            accumulator.push(array[index + n]);
        }
        return accumulator;
    }, [])
};

console.log(`result: ${shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)}`);