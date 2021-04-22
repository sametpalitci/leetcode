const reverseWords = (s) => {
    let lastValue = [];
    s = s.split(" ");
    for (let i = s.length; i > 0; --i) {
        if (s[i - 1] != "") {
            lastValue.push(s[i - 1])
        }
    }
    return lastValue.join(' ');
};

reverseWords("  hello world  ");