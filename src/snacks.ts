export const snacks_name: string[] = ["chips", "protien bar"];

export function print(snacks: string[]): void {
    for (const snack of snacks) {
        console.log(snack);
    }
}

print(snacks_name);
