function detectCapitalUse(word: string): boolean {
    const upper = word.toUpperCase();
    if(upper === word || word.toLowerCase() === word || (word[0] === upper[0] && word.slice(1).toLowerCase() === word.slice(1))){
        return true
    }

    return false;
};