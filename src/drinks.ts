import { animation } from "./animation";

export const arrDrinks: string[] = ["water", "lemonade", "cola", "orange juice"];
    
export function printDrinks(arrDrinks: string[]): void {
    animation("Drinks");
    
    for (const drink of arrDrinks) {
        console.log(drink);
    }
}

printDrinks(arrDrinks);
