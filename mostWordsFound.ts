function mostWordsFound(sentences: string[]): number {
    return sentences.sort((a,b)=> a.split(" ").length > b.split(" ").length ? -1 : 1)[0].split(" ").length
};