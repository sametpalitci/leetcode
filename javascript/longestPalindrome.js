const longestPalindrome = (s) => {
    const palindromeCheck = (val) => {
        let left = 0,
            right = val.length - 1;
        while (left < right) {
            if (val[left] !== val[right]) {
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }
    for (let j = s.length - 1; j >= 0; j--) {
        let i = 0,
            k = j;
        while (k < s.length) {
            let substr = s.substr(i, j + 1);
            if (palindromeCheck(substr)) return substr;

            i++;
            k++;
        }
    }
    return "";
};

