const celsiusEl=document.querySelector(".celsius"),fahrenheitEl=document.querySelector(".fahrenheit");celsiusEl.addEventListener("input",(()=>{const e=1.8*parseFloat(celsiusEl.value)+32;fahrenheitEl.value=parseFloat(e.toFixed(2))})),fahrenheitEl.addEventListener("input",(()=>{const e=.5555*(parseFloat(fahrenheitEl.value)-32);celsiusEl.value=parseFloat(e.toFixed(2))}));
//# sourceMappingURL=14-temperatureConvertor.0339bd93.js.map