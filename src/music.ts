import { animation } from "./animation";

const music: string[] = ["Pop", "Jazz", "EDM"]

export function print(music: string[]): void{
    animation("Music");


    for(const m of music){
        console.log(m)
    }
}

print(music)

