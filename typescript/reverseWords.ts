function reverseWords(s: string): string {
    return s.split(" ").map((a) => a.split("").reverse().join("")).join(" ")
};
