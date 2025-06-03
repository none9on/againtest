function updateTodayDate() {
    const dateElement = document.querySelector('.right_calendar-text-date');
    const now = new Date();

    // Форматируем дату как dd/mm/yyyy
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы с 0
    const year = now.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    dateElement.textContent = formattedDate;
}

// Запускаем сразу при загрузке
updateTodayDate();