function printCalendar(year, month) {
    const firstDay = new Date(year, (month - 1), 1);
    const lastDay = new Date(year, month, 0);  // 이전 월의 마지막 날 

    // 첫째 날의 요일
    const startDayOfWeek = firstDay.getDay();

    // 해당 월의 마지막 날짜
    const lastDate = lastDay.getDate();

    // 달력 출력
    console.log(`<< ${year}년 ${month}월 >>`);
    console.log("일  월  화  수  목  금  토");

    // 첫째 날의 위치까지 공백 출력
    for (let i = 0; i < startDayOfWeek; i++) {
        process.stdout.write("    ");
    }

    // 날짜 출력
    for (let i = 1; i <= lastDate; i++) {
        process.stdout.write(`${i < 10 ? ' ' : ''}${i}  `);

        // 토요일마다 줄 바꿈
        if ((i + startDayOfWeek) % 7 === 0) {
            console.log();
        }
    }

    console.log(); // 마지막 줄 바꿈
}

printCalendar(2024, 2);
