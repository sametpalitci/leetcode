function missingNumber(nums: number[]): number {
    for(let i = 0; i < nums.length + 1; i++){
        if (!nums.includes(i)) {
            return i;
        }
    }
    return -1;
};