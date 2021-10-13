correct=0;
question=0;

const total_que = 4;

const questions = [
  {
      question: "Bond: No Time To Die is which bond number in the series?",
      options: ["21","25","26", "27"],
      answer: "25"
  },

  {
     question: "What is your name?",
     options: ["prem", "prekash", "ranveer", "Deepika"],
     answer: "Deepika"
  },

  {
    question: "Who let the dog out?",
    options: ["no one", "Me", "Fuck you!", "her"],
    answer: "Fuck you!"
  },

  {
    question: "did you eat crap today?",
    options: ["yes", "no", "may be!", "hell, yeah!"],
    answer: "yes"
  },

];

document.addEventListener("DOMContentLoaded", () => {
  load_questions();
});

  function load_questions(){
    document.querySelector("#questions").innerHTML = questions[question].question;
    const options = document.querySelector('#options');
    options.innerHTML = "";

    for (const option of questions[question].options){
      options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach((option) => {
        option.onclick = () => {

            if(option.textContent == questions[question].answer)
            {
              correct++;
              document.querySelector(".counter").innerHTML = correct;
              question++;
              if(question == total_que)
                load_completion();
              else
                load_questions();

            }

            else{
             question++;
             if(question == total_que)
               load_completion();
             else
               load_questions();
            }

          }


    });

  }

  function load_completion(){
    document.querySelector("#questions").innerHTML = "Quiz Complete!";
    document.querySelector("#options").innerHTML = "";
    document.querySelector(".counter").innerHTML = correct;
  }
