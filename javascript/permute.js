const permute = (nums) => {
    let size = nums.length
    if (size > nums.length) return [];
    else if (size == 1) return nums.map(d => [d]);
    return nums.flatMap(d => permute(nums.filter(a => a !== d), size - 1).map(item => [d, ...item]));
}


console.log(permute([1, 2, 3]))