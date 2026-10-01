document.addEventListener("DOMContentLoaded", function () {
  const date = new Date();

  date.setFullYear(date.getFullYear() + 35);

  const maxRandomDays = 60;
  const randomDays = Math.floor(Math.random() * maxRandomDays) + 1;

  date.setDate(date.getDate() + randomDays);

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const dateElement = document.getElementById('future-date');
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
});
