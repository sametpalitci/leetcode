function convertToTitle(columnNumber: number): string {
    let columnTitle = '';
    let charCode: number;
    while (columnNumber > 0) {
        charCode = (columnNumber - 1) % 26;
        columnTitle = String.fromCharCode(65 + charCode) + columnTitle;
        columnNumber = Math.floor((columnNumber - charCode) / 26);
    }
    return columnTitle;
};