const getDecimalValue = (head) => {
    let value = "";
    while (head) {
        value += head.val;
        head = head.next;
    }
    return parseInt(value, 2);
}

getDecimalValue([1, 0, 1])