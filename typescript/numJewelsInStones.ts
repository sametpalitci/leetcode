function numJewelsInStones(jewels: string, stones: string): number {
  return stones
    .split("")
    .filter((stone) => jewels.split("").some((jewel) => jewel === stone))
    .length;
}
