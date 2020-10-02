function maxArea(height: number[]): number {
    let left = 0;
    let right = 1;
    height.forEach((point, index, array) => {
        const volume = (right - left) * (Math.min(height[left], array[right]));
        const potentialVolume = (index - left) * (Math.min(array[left], point));
        if (potentialVolume > volume) {
            right = index;
        }

        if (point > array[left]) {
            if (index !== right) {
                left = index;
            } else if (index < array.length) {
                left = index;
                right = right + 1;
            }
        }
    });

    return (right - left) * (Math.min(height[left], height[right]));
}

export function run(): void {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = maxArea(input);
    console.log(output);
}