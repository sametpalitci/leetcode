const addBinary = (a, b) => {
    let total = BigInt("0b" + a) + BigInt("0b" + b);
    return total.toString(2);
};

return addBinary(11, 1);