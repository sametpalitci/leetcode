const getDecimalValue = (head) => {
    let value = "";
    while (head) {
        value += head.val;
        head = head.next;
    }
    var decimal = parseInt(value, 2);
    return decimal
}

getDecimalValue([1, 0, 1])