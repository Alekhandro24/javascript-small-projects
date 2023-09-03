const grid=document.querySelector(".grid"),scoreDisplay=document.querySelector("#score"),blockWidth=100,blockHeight=20,ballDiameter=20,boardWidth=560,boardHeight=300;let timerId,xDirection=-2,yDirection=2,score=0;const userStart=[230,10];let currentPosition=userStart;const ballStart=[270,40];let ballCurrentPosition=ballStart;class Block{constructor(t,e){this.bottomLeft=[t,e],this.bottomRight=[t+blockWidth,e],this.topLeft=[t,e+blockHeight],this.topRight=[t+blockWidth,e+blockHeight]}}const blocks=[new Block(10,270),new Block(120,270),new Block(230,270),new Block(340,270),new Block(450,270),new Block(10,240),new Block(120,240),new Block(230,240),new Block(340,240),new Block(450,240),new Block(10,210),new Block(120,210),new Block(230,210),new Block(340,210),new Block(450,210)];function addBlocks(){for(i=0;i<blocks.length;i++){const t=document.createElement("div");t.classList.add("block"),t.style.left=blocks[i].bottomLeft[0]+"px",t.style.bottom=blocks[i].bottomLeft[1]+"px",grid.appendChild(t)}}addBlocks();const user=document.createElement("div");function drawUser(){user.style.left=currentPosition[0]+"px",user.style.bottom=currentPosition[1]+"px"}function drawBall(){ball.style.left=ballCurrentPosition[0]+"px",ball.style.bottom=ballCurrentPosition[1]+"px"}function moveUser(t){switch(t.key){case"ArrowLeft":currentPosition[0]>0&&(currentPosition[0]-=10,drawUser());break;case"ArrowRight":currentPosition[0]<boardWidth-blockWidth&&(currentPosition[0]+=10,drawUser())}}user.classList.add("user"),drawUser(),grid.appendChild(user),document.addEventListener("keydown",moveUser);const ball=document.createElement("div");function moveBall(){ballCurrentPosition[0]+=xDirection,ballCurrentPosition[1]+=yDirection,drawBall(),checkForCollisions()}function checkForCollisions(){for(let t=0;t<blocks.length;t++)if(ballCurrentPosition[0]>blocks[t].bottomLeft[0]&&ballCurrentPosition[0]<blocks[t].bottomRight[0]&&ballCurrentPosition[1]+ballDiameter>blocks[t].bottomLeft[1]&&ballCurrentPosition[1]<blocks[t].topLeft[1]){Array.from(document.querySelectorAll(".block"))[t].classList.remove("block"),blocks.splice(t,1),changeDirection(),score++,scoreDisplay.innerHTML=score,0===blocks.length&&(scoreDisplay.innerHTML="You WIN!",clearInterval(timerId),document.removeEventListener("keydown",moveUser))}(ballCurrentPosition[0]>=boardWidth-ballDiameter||ballCurrentPosition[1]>=boardHeight-ballDiameter||ballCurrentPosition[0]<=0)&&changeDirection(),ballCurrentPosition[0]>currentPosition[0]&&ballCurrentPosition[0]<currentPosition[0]+blockWidth&&ballCurrentPosition[1]>currentPosition[1]&&ballCurrentPosition[1]<currentPosition[1]+blockHeight&&changeDirection(),ballCurrentPosition[1]<=0&&(clearInterval(timerId),scoreDisplay.innerHTML="You lose!",document.removeEventListener("keydown",moveUser))}function changeDirection(){2!==xDirection||2!==yDirection?2!==xDirection||-2!==yDirection?-2!==xDirection||-2!==yDirection?-2!==xDirection||2!==yDirection||(xDirection=2):yDirection=2:xDirection=-2:yDirection=-2}ball.classList.add("ball"),drawBall(),grid.appendChild(ball),timerId=setInterval(moveBall,30);
//# sourceMappingURL=30-breakout.5ba628ba.js.map
