import { print } from "./music";
import { printDrinks , arrDrinks } from "./drinks";


function main(): void {
    const music: string[] = ["Pop", "Jazz", "EDM"];
    print(music);
    printDrinks(arrDrinks);
}

main();

