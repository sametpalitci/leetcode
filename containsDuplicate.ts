function containsDuplicate(nums: number[]): boolean {
  const sortedArray = nums.sort((a, b) => b - a);
  for (let index = 0; index < sortedArray.length; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) return true;
  }
  return false;
}
