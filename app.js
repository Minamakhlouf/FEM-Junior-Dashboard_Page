let time = document.querySelectorAll(".time"); 
let workData = document.querySelectorAll(".work-data")
let playData = document.querySelectorAll(".play-data")
let studyData = document.querySelectorAll(".study-data")
let exerciseData = document.querySelectorAll(".exercise-data")
let socialData = document.querySelectorAll(".social-data")
let careData = document.querySelectorAll(".care-data")

window.addEventListener("load", function() {
    dataReveal(); 
})

time.forEach((element, index) => {
    element.addEventListener("click", function() {
        let indexNew = Number(element.getAttribute("data-index")); 
        element.classList.add("picked"); 
        time.forEach((element, index) => {
            if (index !== indexNew) {
                element.classList.remove("picked"); 
            }
        })
        dataReveal(); 
    })
})

let dataObj = {
    time: ["Yesterday - ", "Last week - ", "Last month - "], 
    workCurrent: ["5hrs", "32hrs", "103hrs"], 
    workPrevious: ["7hrs", "36hrs", "128hrs"],  
    playCurrent: ["1hr", "10hrs", "23hrs"], 
    playPrevious: ["2hrs", "8hrs", "29hrs"],  
    studyCurrent: ["0hrs", "4hrs", "13hrs"], 
    studyPrevious: ["1hr", "5hrs", "18hrs"], 
    exerciseCurrent: ["1hr", "4hrs", "11hrs"],  
    exercisePrevious: ["1hr", "5hrs", "18hrs"],  
    socialCurrent: ["1hr", "5hrs", "21hrs"], 
    socialPrevious: ["3hrs", "10hrs", "23hrs"],  
    selfCareCurrent: ["0hrs", "2hrs", "7hrs"], 
    selfCarePrevious: ["1hr", "2hrs", "11hrs"] 
}

function dataReveal() {
    time.forEach(element => {
        if (element.classList.contains("picked")) {
            let index = Number(element.getAttribute("data-index")); 
            workData[0].textContent = dataObj.workCurrent[index]; 
            workData[1].textContent = `${dataObj.time[index]}${dataObj.workPrevious[index]}`; 
            playData[0].textContent = dataObj.playCurrent[index]; 
            playData[1].textContent = `${dataObj.time[index]}${dataObj.playPrevious[index]}`; 
            studyData[0].textContent = dataObj.studyCurrent[index]; 
            studyData[1].textContent = `${dataObj.time[index]}${dataObj.studyPrevious[index]}`; 
            exerciseData[0].textContent = dataObj.exerciseCurrent[index]; 
            exerciseData[1].textContent = `${dataObj.time[index]}${dataObj.exercisePrevious[index]}`; 
            socialData[0].textContent = dataObj.socialCurrent[index]; 
            socialData[1].textContent = `${dataObj.time[index]}${dataObj.socialPrevious[index]}`; 
            careData[0].textContent = dataObj.selfCareCurrent[index]; 
            careData[1].textContent = `${dataObj.time[index]}${dataObj.selfCarePrevious[index]}`; 
        }
    })
}