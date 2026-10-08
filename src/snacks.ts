export const snacks_name: string[] = ["chips", "protien bar", "lolipop"];

export function print(snacks: string[]): void {
    for (const snack of snacks) {
        console.log(snack);
    }
}

print(snacks_name);
