const inputEl=document.querySelector(".input"),downloadBtnEl=document.querySelector(".downloadBtn");async function fetchURL(e){try{const n=await fetch(e),t=await n.blob(),o=URL.createObjectURL(t),l=document.createElement("a");l.href=o,l.download="YourFile",document.body.appendChild(l),l.click(),downloadBtnEl.innerText="Download",URL.revokeObjectURL(o),l.remove()}catch(e){alert("Failed to download..."),downloadBtnEl.innerText="Download"}}downloadBtnEl.addEventListener("click",(e=>{e.preventDefault(),downloadBtnEl.innerText="Downloading...",fetchURL(inputEl.value)}));
//# sourceMappingURL=15-fileDownloader.14461667.js.map
