const RULE = {
    type: 0,
    color: 1,
    name: 2,
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    return items.filter((item)=> item[RULE[ruleKey]] === ruleValue).length
};