function differenceOfSum(nums: number[]): number {
  const digit = nums
    .join("")
    .split("")
    .reduce((prev, num) => +num + prev, 0);
  return Math.abs(digit - nums.reduce((prev, num) => prev + num, 0));
}

// runtime 63ms, memory 46.43MB