function percentageLetter(s: string, letter: string): number {
    return Math.floor((s.split("").filter((char)=> char === letter).length *100) /s.length)
};