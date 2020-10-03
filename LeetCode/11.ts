function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let largestArea = 0;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const area = (right - left) * Math.min(leftHeight, rightHeight);

        largestArea = Math.max(largestArea, area);

        if (leftHeight < rightHeight) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return largestArea;
}

export function run(): void {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = maxArea(input);
    console.log(output);
}