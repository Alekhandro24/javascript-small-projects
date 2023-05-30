const imgEls=document.querySelectorAll("img"),resultEl=document.querySelector(".result"),userChoiceEl=document.querySelector(".user-choice"),computerChoiceEl=document.querySelector(".computer-choice"),userPointsEl=document.querySelector(".user-points"),computerPointsEl=document.querySelector(".computer-points");let userPoints=0,computerPoints=0;function computerChoice(){const e=["rock","paper","scissor"];return e[Math.floor(Math.random()*e.length)]}function gamePlay(e,t){return e===t?"It is a tie..!":"rock"===e&&"scissor"===t||"paper"===e&&"rock"===t||"scissor"===e&&"paper"===t?(userPoints++,userPointsEl.textContent=userPoints,"Hurrah! You win..! "+e+" beats "+t):(computerPoints++,computerPointsEl.textContent=computerPoints,"Oops! You lose..! "+t+" beats "+e)}imgEls.forEach((e=>{e.addEventListener("click",(()=>{const t=computerChoice(),o=gamePlay(e.id,t);userChoiceEl.textContent=e.id,computerChoiceEl.textContent=t,resultEl.textContent=o}))}));
//# sourceMappingURL=16-paperGame.62d5e318.js.map
