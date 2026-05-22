// Language quiz
var score = 0;
var currentQ = 0;
const questions = document.querySelectorAll(".q-container");
const alert = document.querySelector("#alert");

function nextQ(question){
  // Update score
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  if (answer){
    //Hide Alert
    alert.innerHTML = "";
    alert.style.display = "none";

    //Increase score
    score += parseInt(answer.value);
  
    // Change question
    questions[currentQ].classList.remove("slide-left");
    questions[currentQ].classList.add("fade-out");
    currentQ++;
    if (currentQ == questions.length - 1){
      console.log("Called")
      quizResult();
    }
    setTimeout(() => {
      questions[currentQ - 1].style.display = "none";
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    }, "2000");
  } else {
    alert.style.display = "block";
    alert.innerHTML = "<p>Please pick an option!</p>"
  }
  
}

questions[0].style.display = "block";
questions[0].style.opacity = 1;

function quizResult(){
  if (score <= 6){
    Goalie();
  } else if (score <= 12){
    Defense();
  } else {
    Forward();
  }
}

// Languages
const languageHeading = document.querySelector("#languagetitle");
const languageText = document.querySelector("#languagetext");
const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");

function Goalie(){
  languageHeading.innerText = "Goalie";

  languageText.innerText = "Goalie is a position where you try to save any shots on net \n \
    It will be hard to learn at first but with practice it might become second nature to you. \n \
    Here are some tips you might like!";

  project1.innerText = "https://youtu.be/YT1GajetG74?si=zTVw7gIJSOwGKrYN";
  project2.innerText = "https://youtu.be/7jeWsAN8G8E?si=Flkl9gRh2rYva1yc";
  
}

function Defense(){
  languageHeading.innerText = "Defense";

  languageText.innerText = "Defense is a position not based on attack their goalie. \n \
    You are the last line in order to not allow the other team to try to score on your goalie. \n \
    Here are some tips you might like!";

  project1.innerText = "https://youtu.be/HkNAK40ugkw?si=UcGkAWORLQFTPl6E";
  project2.innerText = "https://youtu.be/eJOKiXsz7gk?si=ATyYKKUrX2IBwDoc";
  
}

function Forward(){
  languageHeading.innerText = "Forward";

  languageText.innerText = "Forward is th position in which you rae trying to score goals. \n \
    While still having to focus on a little defense, forwards mainly try to attack the other teams goalie through playmaking and great shot selection. \n \
    Here are some tips you might like!";

  project1.innerText = "https://youtu.be/Ry6WSAC83jI?si=7dKX_6bsT4lWwB98";
  project2.innerText = "https://youtu.be/fYTtgap0FD4?si=N4dm523iyy1Qr9gp";
}