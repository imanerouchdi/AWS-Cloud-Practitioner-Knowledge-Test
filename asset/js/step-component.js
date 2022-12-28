

const btnStartQuiz=document.querySelectorAll(".btn-start");
const progress = document.getElementById("progress");
const progressSteps=document.querySelector(".progress-step");
const pageQuiz =document.querySelector(".quiz");
const pageResult =document.querySelector(".result");

const info=document.getElementById("info");
const quiz=document.getElementById("quiz");
const result=document.getElementById("result");



let pageNum=0;
document.getElementById("btn-start-quiz").addEventListener("click",()=>{
    document.getElementById("btn-start-quiz").style.display = 'none';
    // document.getElementById("info").style.display="none";
    // document.getElementById("quiz").style.display="inline";
    if(document.querySelector(".step1").classList.contains("active")){
        document.querySelector(".quizPage").style.display="inline";
        // Document.getElementById("btn-start-quiz").display="none";
        document.querySelector(".pageinfo").style.display="none";

    }
    if(document.querySelector(".step2").classList.contains("active")){
        document.querySelector(".step3").classList.add("active")
        document.querySelector(".pageinfo").style.display="none";
        document.querySelector(".quizPage").style.display="none";
        document.querySelector(".pageresult").style.display="inline";

    }
    document.querySelector(".step2").classList.add("active");
    
});









