function groupThePeople(groupSizes: number[]): number[][] {
    const groups = groupSizes.reduce((accumulator, personSize, index) => {
        const currentGroup: Array<number> = accumulator[personSize] || new Array<number>();

        currentGroup.push(index);
        accumulator[personSize] = currentGroup;

        return accumulator;
    }, {})

    return Object.keys(groups).map(key => groups[key])
};