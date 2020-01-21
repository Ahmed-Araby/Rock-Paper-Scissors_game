// game logic variables 
let user_score = 0;
let comp_score = 0;

// get reference to the html elements 
const user_score_span = document.getElementById('user-score');
const comp_score_span = document.getElementById('comp-score');

const rock_div = document.getElementById('rock');
const hand_div = document.getElementById('hand');
const paper_div = document.getElementById('paper');

// game logic 

function get_comp_choice()
{
    const choices =['r' , 'h' , 'p'];
    const random_num = Math.floor(Math.random()*3)
    return choices[random_num];
}

function play(user_choice){
    comp_choice = get_comp_choice();
    console.log("user choosed" , user_choice)
    console.log("computer choosed" , comp_choice);
    
    const state = user_choice + comp_choice;
    if(user_choice === comp_choice){
        console.log("draw");
    }
    
    else if (state==='rh' || state === 'pr' || state === 'hp'){
        console.log("user wins ");
        user_score +=1;
        user_score_span.innerHTML=user_score;
    }
    
    else {
        console.log("computer wins ");
        comp_score+=1;
        comp_score_span.innerHTML = comp_score;
    }
}

// event listenrs 
// theses functions are expression , anynomous functions 
rock_div.addEventListener('click' , () => play('r'))
hand_div.addEventListener('click' , () => play('h'))
paper_div.addEventListener('click' , function(){
    play('p');
})
