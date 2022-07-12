timerId = setInterval(moveBall, 30)

 //check for collisions
 function checkForCollisions()
 {
 function checkForCollisions() {
   //check for block collision
   for (let i = 0; i < blocks.length; i++){
     if
 @@ -130,13 +129,12 @@ function checkForCollisions()
       changeDirection()   
       score++
       scoreDisplay.innerHTML = score
       if (blocks.length == 0)
       {
       if (blocks.length == 0) {
         scoreDisplay.innerHTML = 'You Win!'
         clearInterval(timerId)
         document.removeEventListener('keydown', moveUser)
       }
       }
     }
   }
   // check for wall hits
   if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
 @@ -155,8 +153,7 @@ function checkForCollisions()
   }

   //game over
   if (ballCurrentPosition[1] <= 0)
   {
   if (ballCurrentPosition[1] <= 0) {
     clearInterval(timerId)
     scoreDisplay.innerHTML = 'You lose!'
     document.removeEventListener('keydown', moveUser)
 @@ -165,27 +162,19 @@ function checkForCollisions()
