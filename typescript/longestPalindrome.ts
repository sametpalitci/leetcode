function longestPalindrome(s: string): number {
    const letterCount: Record<string, number> = {};
    let length = 0, hasOdd = false;

    for (const char of s) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    for (const count of Object.values(letterCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            hasOdd = true;
            length += count - 1;
        }
    }

    return hasOdd ? length + 1 : length;
}
