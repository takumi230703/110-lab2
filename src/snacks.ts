const snacks_name: string[] = ["Chips", "Cookies", "Popcorn", "Pretzels", "Granola bars", "Crackers"];

export function print(snacks: string[]): void {
    for (const snack of snacks) {
        console.log(snack);
    }
}

print(snacks_name);
