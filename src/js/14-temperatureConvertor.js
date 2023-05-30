const celsiusEl = document.querySelector('.celsius');
const fahrenheitEl = document.querySelector('.fahrenheit');

celsiusEl.addEventListener('input', () => {
  const res = parseFloat(celsiusEl.value) * 1.8 + 32;
  fahrenheitEl.value = parseFloat(res.toFixed(2));
});

fahrenheitEl.addEventListener('input', () => {
  const res = (parseFloat(fahrenheitEl.value) - 32) * 0.5555;
  celsiusEl.value = parseFloat(res.toFixed(2));
});
