const maxArea = (height) => {
    let water = 0,
        left = 0,
        right = height.length - 1;
    while (left < right) {
        let smallNumber = Math.min(height[left], height[right]);
        let area = (right - left) * smallNumber;
        if (area > water) water = area;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return water;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);