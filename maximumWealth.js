const maximumWealth = (accounts) => {
    let potantitalNewArray = [];
    for (let i = 0; i < accounts.length; i++) {
        let bucket = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            bucket += accounts[i][j];
        }
        potantitalNewArray.push(bucket);
        bucket = 0;
    }
    let sortData = potantitalNewArray.sort((a, b) => a - b);

    return sortData.reverse()[0];
};

maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5]
])