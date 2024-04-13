const twoSum = (numbers, target) => {
    let values = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                values.push(i + 1, j + 1);
            }
        }
    }
    return [values[0], values[1]];
};

twoSum([3, 5, 5, 7], 10);