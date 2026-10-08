export const snacks: string[] = ["chips", "Cookies", "Popcorn", "Pretzels", "Granola bars", "Crackers"];

export function print(snacks: string[]): void {
    for (const snack of snacks) {
        console.log(snack);
    }
}

print(snacks);
