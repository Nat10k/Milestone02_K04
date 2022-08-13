// for UI
const question_bar = document.getElementById('question-bar');
const start_button = document.getElementById("start-button")
const start_prompt = document.querySelector(".start-prompt")
const restart_button = document.getElementById('restart-button')
const result_prompt = document.querySelector('.result-prompt')
let result_bar = document.getElementById('result-bar')
const prog_bar = document.querySelector(".prog-bar")
const outer_bg = document.querySelector(".outer-background")
const outer_bg_contents = document.querySelector('.outer-background-contents')

// for user history
const history_score = [];

// for user progress
let current_index = 0;
const red_button = document.getElementById("red")
const green_button = document.getElementById("green")
const arr_of_question = ['Was your morning any good?','Question No. 2','Question No. 3','Question No. 4'
,'Question No. 5','Question No. 6','Question No. 7','Question No. 8','Question No. 9','Question No. 10'];
let score = 0;
let current_progress = Number(document.getElementById("bar-fill").style.width); // element to change
const maxProgress = 10;

// user progress
const progress = () => {
    current_progress++; 
    document.getElementById("bar-fill").style.width = String(100*current_progress/maxProgress)+"%";
}

// reset animation for button and question if n of answered question < 10
const resetAnimation = () => {
    const question_bar_animation = document.getElementById("question-bar");
    const red_button_animation = document.getElementById("red");
    const green_button_animation = document.getElementById("green");
    red_button_animation.style.animation = "none";
    red_button_animation.offsetHeight;
    red_button_animation.style.animation = null;
    green_button_animation.style.animation = "none";
    green_button_animation.offsetHeight;
    green_button_animation.style.animation = null;
    question_bar_animation.style.animation = "none";
    question_bar_animation.offsetHeight;
    question_bar_animation.style.animation = null;
}

// calculating animation function
const pre_result_animation = () => {
    question_bar.classList.remove('question-bar');
    question_bar.classList.add('stop');
    question_bar.style.pointerEvents = "none";
    question_bar.innerHTML = "Calculating your results";
    outer_bg_contents.classList.add('spin');
    outer_bg_contents.style.pointerEvents = "none";
    outer_bg_contents.innerHTML = '<p>|</p>'
}

// timeout
const timeout = (millis) => {
    return new Promise(
        (resolve) => setTimeout(resolve, millis)
    )
}
// result
const result = (score, condition) => {
    history_score.push(score)
    setActive(result_prompt);
    setActive(outer_bg , condition);
    setActive(prog_bar, condition);
    result_bar.textContent += ' ' + score + '/10';
}


// function toggleHidden(doc){
//     doc.classList.toggle("hidden")
//     // console.log(doc.classList.contains("hidden"))
// }

const setActive = (elmt, value = true) => {
    if(value) {elmt.classList.remove("hidden"); elmt.style.pointerEvents = "initial"}
    else {elmt.classList.add("hidden"); elmt.style.pointerEvents = "none"}
}

// events on button clicks
red_button.onclick = () => {
    current_index++;
    if (current_index <= 10){
        resetAnimation();
        question_bar.textContent = arr_of_question[current_index];
        progress();
        if (current_index >= 10){ 
            pre_result_animation()
            timeout(2000).then(()=>{
                result(score, false);
            }) 
        }
    }    
}
green_button.onclick = () => {
    current_index++;
    if (current_index <= 10){ 
        resetAnimation();
        score++;  
        question_bar.textContent = arr_of_question[current_index];
        progress();
        if (current_index >= 10){
            pre_result_animation();
            timeout(2000).then(()=>{
                result(score, false);
            }) 
        }
    }
}
// restart quiz + store historical score to local
const restart = () => {
    localStorage.setItem("history_array",JSON.stringify(history_score));
    location.reload();
}

// fetch historical score from local
const history_bar = document.getElementById('history-arr')
const get_history = () => {
    let string_array = localStorage.getItem("history_array");
    history_score = JSON.parse(string_array);
    return history_score;
}

window.onload = () => { // initiate
    setActive(outer_bg, false);
    setActive(prog_bar, false);
    setActive(result_prompt, false);
    // setActive(start_prompt, false)
}

start_button.onclick = () =>{
    setActive(outer_bg)
    setActive(prog_bar)
    setActive(start_prompt, false)
}