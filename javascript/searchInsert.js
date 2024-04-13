const searchInsert = (nums, target) => {
    let safeValue;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            safeValue = i;
            break;
        } else if (nums[i] > target) {
            safeValue = i--;
            break;
        }
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    } else {
        return safeValue;
    }
};