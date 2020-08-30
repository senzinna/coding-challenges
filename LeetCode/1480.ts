function runningSum(nums: number[]): number[] {
    return nums.reduce((accumulator, currentValue, index) => {
        let currentSum = currentValue;

        if (index > 0) {
            const previousSum = accumulator[index - 1];
            currentSum += previousSum;
        }

        accumulator.push(currentSum);
        return accumulator;
    }, [])
}
