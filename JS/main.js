/*----- constants -----*/
const easy =[
    {value: 1, image: './imgs/cards/easy/emoji.01.png'},
    {value: 1, image: './imgs/cards/easy/emoji.01.png'},
    {value: 2, image: './imgs/cards/easy/emoji.02.png'},
    {value: 2, image: './imgs/cards/easy/emoji.02.png'},
    {value: 3, image: './imgs/cards/easy/emoji.03.png'},
    {value: 3, image: './imgs/cards/easy/emoji.03.png'},
    {value: 4, image: './imgs/cards/easy/emoji.04.png'},
    {value: 4, image: './imgs/cards/easy/emoji.04.png'},
    {value: 5, image: './imgs/cards/easy/emoji.05.png'},
    {value: 5, image: './imgs/cards/easy/emoji.05.png'},
    {value: 6, image: './imgs/cards/easy/emoji.06.png'},
    {value: 6, image: './imgs/cards/easy/emoji.06.png'},
    {value: 7, image: './imgs/cards/easy/emoji.07.png'},
    {value: 7, image: './imgs/cards/easy/emoji.07.png'},
    {value: 8, image: './imgs/cards/easy/emoji.08.png'},
    {value: 8, image: './imgs/cards/easy/emoji.08.png'},
    {value: 9, image: './imgs/cards/easy/emoji.09.png'},
    {value: 9, image: './imgs/cards/easy/emoji.09.png'}

]
const medium =[
    {value: 1, image: './imgs/cards/card.01.png'},
    {value: 1, image: './imgs/cards/card.01.png'},
    {value: 2, image: './imgs/cards/card.02.png'},
    {value: 2, image: './imgs/cards/card.02.png'},
    {value: 3, image: './imgs/cards/card.03.png'},
    {value: 3, image: './imgs/cards/card.03.png'},
    {value: 4, image: './imgs/cards/card.04.png'},
    {value: 4, image: './imgs/cards/card.04.png'},
    {value: 5, image: './imgs/cards/card.05.png'},
    {value: 5, image: './imgs/cards/card.05.png'},
    {value: 6, image: './imgs/cards/card.06.png'},
    {value: 6, image: './imgs/cards/card.06.png'},
    {value: 7, image: './imgs/cards/card.07.png'},
    {value: 7, image: './imgs/cards/card.07.png'},
    {value: 8, image: './imgs/cards/card.08.png'},
    {value: 8, image: './imgs/cards/card.08.png'},
    {value: 9, image: './imgs/cards/card.09.png'},
    {value: 9, image: './imgs/cards/card.09.png'},
    {value: 10, image: './imgs/cards/card.10.png'},
    {value: 10, image: './imgs/cards/card.10.png'},
    {value: 11, image: './imgs/cards/card.11.png'},
    {value: 11, image: './imgs/cards/card.11.png'},
    {value: 12, image: './imgs/cards/card.12.png'},
    {value: 12, image: './imgs/cards/card.12.png'}
]
const hard =[
    {value: 1, image: './imgs/cards/card.01.png'},
    {value: 1, image: './imgs/cards/card.01.png'},
    {value: 2, image: './imgs/cards/card.02.png'},
    {value: 2, image: './imgs/cards/card.02.png'},
    {value: 3, image: './imgs/cards/card.03.png'},
    {value: 3, image: './imgs/cards/card.03.png'},
    {value: 4, image: './imgs/cards/card.04.png'},
    {value: 4, image: './imgs/cards/card.04.png'},
    {value: 5, image: './imgs/cards/card.05.png'},
    {value: 5, image: './imgs/cards/card.05.png'},
    {value: 6, image: './imgs/cards/card.06.png'},
    {value: 6, image: './imgs/cards/card.06.png'},
    {value: 7, image: './imgs/cards/card.07.png'},
    {value: 7, image: './imgs/cards/card.07.png'},
    {value: 8, image: './imgs/cards/card.08.png'},
    {value: 8, image: './imgs/cards/card.08.png'},
    {value: 9, image: './imgs/cards/card.08.png'},
    {value: 9, image: './imgs/cards/card.08.png'},
    {value: 10, image: './imgs/cards/card.07.png'},
    {value: 10, image: './imgs/cards/card.07.png'},
    {value: 11, image: './imgs/cards/card.08.png'},
    {value: 11, image: './imgs/cards/card.08.png'},
    {value: 12, image: './imgs/cards/card.08.png'},
    {value: 12, image: './imgs/cards/card.08.png'},
    {value: 13, image: './imgs/cards/card.07.png'},
    {value: 13, image: './imgs/cards/card.07.png'},
    {value: 14, image: './imgs/cards/card.08.png'},
    {value: 14, image: './imgs/cards/card.08.png'},
    {value: 15, image: './imgs/cards/card.08.png'},
    {value: 15, image: './imgs/cards/card.08.png'}
]

// console.log(easy[0].value)






/*----- state variables -----*/

let levelChoice = 'medium'
let lives = 5;
let choiceOne = 0;




/*----- cached elements  -----*/

const squaresEls = document.querySelectorAll('.game-squares')






/*----- event listeners -----*/

squaresEls.forEach(function(el, index){
    el.addEventListener('click', function(){

        if (levelChoice == 'easy'){
        const clickedCard = easy[index].value;
        el.setAttribute('src', easy[clickedCard].image)
            if (choiceOne == 0){
                choiceOne = easy[index].value;
                console.log(choiceOne)
            } else {
                console.log(easy[clickedCard].value)
                if (easy[choiceOne].value === easy[clickedCard].value){
                    console.log ('its a pair')
                }   else {
                    console.log ('not a pair')
                    livesEasy --
                }
                choiceOne = 0;
            }
            
        } else if (levelChoice == "medium"){
            const clickedCard = medium[index].value;
            el.setAttribute('src', medium[clickedCard].image)
                if (choiceOne == 0){
                    choiceOne = medium[index].value;
                    console.log(choiceOne)
                } else {
                    console.log(medium[clickedCard].value)
                    if (easy[choiceOne].value === medium[clickedCard].value){
                        console.log ('its a pair')
                    }   else {
                        console.log ('not a pair')
                        lives --
                    }
                    choiceOne = 0;
                }
    
        } else {
            const clickedCard = hard[index].value;
            el.setAttribute('src', hard[clickedCard].image)
                if (choiceOne == 0){
                    choiceOne = hard[index].value;
                    console.log(choiceOne)
                } else {
                    console.log(hard[clickedCard].value)
                    if (easy[choiceOne].value === hard[clickedCard].value){
                        console.log ('its a pair')
                    }   else {
                        console.log ('not a pair')
                        lives --
                    }
                    choiceOne = 0;
                }
        }
    });
});


// TO DO - easy-medium-hard buttons=> start game 






/*----- functions -----*/
function init(){
    loadBoard();
    scoreboard();
    shuffle(levelChoice);
}

function render (){
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    
    while (currentIndex != 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }
    
function loadBoard(){
    if (levelChoice == 'easy'){
        squaresEls.forEach((squareEl, index)=>{
        let current = easy[index]
        if (current) {            
        }  else  {
                squareEl.classList.add('hidden')
            }
        })

        } else if (levelChoice == 'medium'){
          squaresEls.forEach((squareEl, index)=>{
            let current = medium[index]
            if (current) {
            }  else  {
                squareEl.classList.add('hidden')
            }
          })

        } else if (levelChoice == 'hard'){
          squaresEls.forEach((squareEl, index)=>{
            let current = hard[index]
            if (current) {
            }  else  {
                squareEl.classList.add('hidden')
            }
          })
        }
    }

    
function scoreboard(){
    // render lives update after play
    const imgs = document.querySelectorAll('.brains img');

    if (lives == 5){
        for (const life5 of 'imgs'){
            // .brains.classList.remove('display')
            // need to remove hidden display of img #life-5
        }



    } else if (lives == 4){

    } else if (lives == 3){

    } else if (lives == 2){

    } else if (lives == 1){

    } else {

    }








}


loadBoard()
scoreboard()