function findTheDifference(s: string, t: string): string {
    for (let l of s) {
        t = t.replace(l, '');
    }
    return t;
};