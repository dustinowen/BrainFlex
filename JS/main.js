/*----- constants -----*/






/*----- state variables -----*/

let levelChoice = 'easy'
let livesEasy
let livesMedium
let timeHard







/*----- cached elements  -----*/










/*----- event listeners -----*/

// TO DO - easy-medium-hard buttons=> start game 

// easy => hide .hard, .medium

// medium => hide .hard

// hard => load timed game






/*----- functions -----*/
// init();

function ren (){
    if (levelChoice == 'easy'){
        document.getElementsByClassName('hard').classList.add('hard-level');
        // element.classList.add('hidden');
    }
}


