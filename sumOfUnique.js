const sumOfUnique = (nums) => {
    let temporaryArray = [],
        secondArray = [];
    nums.map((n) => {
        const indexOfCounter = secondArray.indexOf(n);
        if (indexOfCounter != -1) {
            const filterData = temporaryArray.filter((f) => {
                return f !== n
            })
            temporaryArray = filterData;
        } else {
            temporaryArray.push(n);
        }
        secondArray.push(n);
    })
    let add = 0;
    temporaryArray.map((n) =>
        add = add + n
    );
    return add;
};

sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7]);