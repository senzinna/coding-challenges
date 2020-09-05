function groupThePeople(groupSizes: number[]): number[][] {
    const groups = new Map<number, number[]>();
    const result: number[][] = [];

    groupSizes.forEach((member, id) => {
        let members = groups.get(member) ?? [];
        members.push(id);

        if (members.length === member) {
            result.push(members);
            members = [];
        }

        groups.set(member, members);
    });

    return result;
}

export function run(): void {
    const input = [3, 3, 3, 3, 3, 1, 3];
    const output = groupThePeople(input);
    console.log(JSON.stringify(output));
}