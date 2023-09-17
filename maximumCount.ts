function maximumCount(nums: number[]): number {
    return Math.max(nums.filter((num)=> num > 0).length, nums.filter((num)=> num < 0).length)
};