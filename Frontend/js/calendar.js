const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const monthYearElement = document.getElementById('month-year');
  monthYearElement.textContent = `${monthNames[month]} ${year}`;
  
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  const calendarDays = document.getElementById('calendar-days');
  calendarDays.innerHTML = '';
  
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('col', 'empty');
    calendarDays.appendChild(emptyCell);
  }
  
  for (let day = 1; day <= lastDate; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('col');
    dayCell.textContent = day;
    calendarDays.appendChild(dayCell);
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

renderCalendar();
