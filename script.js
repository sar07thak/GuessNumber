'use strict';


let win_message = document.querySelector(".message");
let score_message = document.querySelector(".label-score");
let check_btn = document.querySelector(".btn_check");
let winner_nunmber = document.querySelector(".number");
let input_guess = document.querySelector(".guess");
let highscore = document.querySelector(".highscore");
let score = document.querySelector(".score");
let container = document.querySelector(".container");
let again_btn = document.querySelector(".btn_again");
let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let sun_moon = document.querySelector(".fa-sun");

function random(){
    return Math.floor(Math.random()*20);
}

let current_score = 20;

let random_number = random();
console.log(random_number);

check_btn.addEventListener("click", () => {
 let guess = Number(input_guess.value);
 
 if(!guess){
    win_message.innerHTML = "❌ no number";
 }
 else if(guess == random_number){
    win_message.innerHTML =" 🎉 winner";
    winner_nunmber.innerHTML = guess ;
    container.style.backgroundColor = " green ";
    highscore.innerHTML = current_score ;
 }
 else if(guess < random_number){
   if( current_score > 0){
      win_message.innerHTML = "too low !😒";
      current_score--;
      score.innerHTML=current_score;
   }
   else{
      win_message.innerHTML = " You lost the game 😭";
      winner_nunmber.innerHTML = 0 ; 
      container.style.backgroundColor="red";
   }
 }
 else if(guess > random_number) {
   if( current_score > 0){
      win_message.innerHTML = "too high!😒"
      current_score--;
      score.innerHTML=current_score ; 
   }
   else{
      win_message.innerHTML = " You lost the game 😭";
      winner_nunmber.innerHTML = 0 ;
      container.style.backgroundColor="red";
   }
 }
});

let current_mode = "light" ;

mode.addEventListener("click",()=>{
   if(current_mode == "light" ){
      current_mode = "dark";
      container.style.backgroundColor= "white";
      body.style.color = "#222";
      sun_moon.classList.add("fa-moon");
   }
   else{
      current_mode = "light";
      container.style.backgroundColor= "#222";
      body.style.color= "white";
      sun_moon.classList.remove("fa-moon");

   }
   console.log(current_mode);
})


again_btn.addEventListener("click",()=>{
   random_number = random();
   console.log(random_number);
   win_message.innerHTML = "Start guessing....";
   score.innerHTML = current_score ;
   container.style.backgroundColor = "#222"; 
   highscore.innerHTML = current_score ;
   winner_nunmber.innerHTML = "?";
   input_guess.value="";
})

