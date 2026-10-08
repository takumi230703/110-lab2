export const arrDrinks: string[] = ["water", "lemonade", "cola", "orange juice"];
    
export function printDrinks(arrDrinks: string[]): void {
    for (const drink of arrDrinks) {
        console.log(drink);
    }
}
    
printDrinks(arrDrinks);
