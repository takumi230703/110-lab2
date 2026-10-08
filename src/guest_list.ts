const arrGuest: string[] = ["John", "Katherine", "Bobby"];

export function printGuests(arrGuest: string[]): void {
    for (const guest of arrGuest) {
        console.log(guest);
    }
}
    
printGuests(arrGuest);
