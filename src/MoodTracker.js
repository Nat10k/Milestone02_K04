const question_bar = document.getElementById('question-bar');
let current_index = 0;
const red_button = document.getElementById("red")
const green_button = document.getElementById("green")

const arr_of_question = ['Was your morning any good?','Question No. 2','Question No. 3','Question No. 4'
,'Question No. 5','Question No. 6','Question No. 7','Question No. 8','Question No. 9','Question No. 10'];

let score = 0;
let current_progress = Number(document.getElementById("bar-fill").style.width); // element to change
const maxProgress = 9;

function progress(){
    current_progress++; 
    document.getElementById("bar-fill").style.width = String(100*current_progress/maxProgress)+"%";
}

function resetAnimation() {
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

red_button.onclick = () => {
    current_index++;
    if (current_index < 10){
        resetAnimation();
        question_bar.textContent = arr_of_question[current_index];
        progress();
    } 
}
green_button.onclick = () => {
    current_index++;
    if (current_index < 10){ 
        resetAnimation();
        score++;  
        question_bar.textContent = arr_of_question[current_index];
        progress();
    }
}


