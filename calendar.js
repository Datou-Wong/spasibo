document.addEventListener('DOMContentLoaded', () => {
    const datesContainer = document.getElementById('calendarDates');
    const monthYearDisplay = document.getElementById('currentMonthYear');
    const prevButton = document.getElementById('prevMonth');
    const nextButton = document.getElementById('nextMonth');
    const appointmentDayDisplay = document.getElementById('appointmentDay');

    let currentDate = new Date(2025, 6); // 從七月 2025 開始，JS月份從0-11

    // 更新月曆
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // 取得當月第一天是星期幾
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        // 取得當月總共有幾天
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 更新月份和年份的顯示
        const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

        // 清空舊的日期
        datesContainer.innerHTML = '';

        // 產生空白格
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptySpan = document.createElement('span');
            emptySpan.classList.add('empty');
            datesContainer.appendChild(emptySpan);
        }

        // 產生所有日期方塊
        for (let i = 1; i <= daysInMonth; i++) {
            const dateSpan = document.createElement('span');
            dateSpan.textContent = i;
            dateSpan.addEventListener('click', () => {
                // 移除所有已選中的日期
                document.querySelectorAll('.dates .selected-date').forEach(el => {
                    el.classList.remove('selected-date');
                });
                // 添加選中的日期
                dateSpan.classList.add('selected-date');

                // 更新右邊的預約日期顯示
                const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][new Date(year, month, i).getDay()];
                appointmentDayDisplay.textContent = `星期${dayOfWeek} / ${month + 1}月${i}日`;
            });

            datesContainer.appendChild(dateSpan);
        }
    }

    // 處理點擊事件
    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // 初始化月曆
    renderCalendar();
    // 預設選中 21 號，並更新右側標題
    const defaultSelectedDate = new Date(2025, 6, 21);
    const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][defaultSelectedDate.getDay()];
    appointmentDayDisplay.textContent = `星期${dayOfWeek} / ${defaultSelectedDate.getMonth() + 1}月${defaultSelectedDate.getDate()}日`;
});