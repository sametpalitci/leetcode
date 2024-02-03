const months = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
};
function reformatDate(date: string): string {
    const [day, month, year] = date.split(" ");
    const dayInNumber = day.substring(0, day.length-2);
    const formattedDate = (Number(dayInNumber) < 10 ? '0' : '') + dayInNumber;
    return `${year}-${months[month]}-${formattedDate}`;
};