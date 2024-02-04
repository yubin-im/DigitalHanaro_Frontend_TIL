


const lastDate = new Date();

lastDate.setDate(1);
lastDate.setMonth(lastDate.getMonth() + 1);
lastDate.setDate(-1);

console.log("🚀 ~ lastDate:", lastDate, lastDate.getDate());

const dates = Array(5)
    .fill(0)
    .map(() => rand(1, lastDate.getDate()))
    .map(day => {
        const tmpDate = new Date();
        tmpDate.setDate(day);
        return tmpDate;
    });

console.log(
    "🚀 ~ dates:",
    dates.sort((a, b) => (a > b ? -1 : 1))
);

const weekNames = [...'일월화수목금토'];
const nextYearToday = new Date();


