const btnEl=document.querySelector(".btn"),jokeEL=document.querySelector(".joke"),URL="http://v2.jokeapi.dev/joke/Any?type=single&amount=1";async function getMethod(){jokeEL.classList.remove("fade");const e=await fetch(URL).then((e=>e.json()));e&&(console.log(e),jokeEL.innerHTML=e.joke,jokeEL.classList.add("fade"))}btnEl.addEventListener("click",getMethod);
//# sourceMappingURL=04-jokeGenerate.a2859349.js.map
