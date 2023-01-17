let x;
let y = Math.ceil(Math.random() * 100 + 1);
console.log(y);
let guess = 0;
let win = false;
document.getElementById("submitguess").onclick = function(){
     x = document.getElementById("guessV").value;
     if ((x !== "") && (win == false)) {
     if(x == y)
   {    
       document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `WoW you win the game and yours total attempt ${guess}`
       win = true;
   }
   else if (x > y)
   {    
       guess += 1;
       document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `Ops! Try a smaller number and you attempt${guess}`
   }
   else if (x < y)
   {
    guess += 1;
    document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `Ops! Try a larger number and you Attempt ${guess}`
   }
   else if (guess === 10)
   {
    guess += 1;
    document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `you have last Attempt after this wrong attempt your game will be restart ${guess}`
   }
   console.log(guess);
   if (guess > 10) {
       document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `your Attempt is finished Game will be re start in few Seconds `
       setTimeout(()=>{
           window.location.reload(1);
        }, 4000);
    }
    else if (win === true){
        document.getElementById("s1").style.visibility = "visible";
       document.getElementById("game Stage").innerText = `WoW! you win.. the Game will be re start in few Seconds `
       setTimeout(function(){
           window.location.reload(1);
        }, 4000);
    }
}
else{
  alert("enter Number");
}
}
    document.getElementById("reload").onclick = function () {
        document.getElementById("s1").style.visibility = "hidden";
        document.getElementById("guessV").value = "";
    }