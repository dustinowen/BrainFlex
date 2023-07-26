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
const brainImgs = [
    {value: 5, src: "./imgs/scoreboard/brain.hearteyes.png"},
    {value: 4, src: "./imgs/scoreboard/brain.hearteyes.png"},
    {value: 3, src: "./imgs/scoreboard/brain.hearteyes.png"},
    {value: 2, src: "./imgs/scoreboard/brain.hearteyes.png"},
    {value: 1, src: "./imgs/scoreboard/brain.hearteyes.png"},
    {value: 0, src: "./imgs/scoreboard/brain.hearteyes.png"},
]





/*----- state variables -----*/

let levelChoice = 'easy'
let lives = 5;
let choiceOne = null;
let choiceOneDiv = null;




/*----- cached elements  -----*/

const squaresEls = document.querySelectorAll('.game-squares')
const brainEls = document.querySelectorAll('brain-container')





/*----- event listeners -----*/

squaresEls.forEach(function (el, index) {
    el.addEventListener('click', function (evt) {
        let clickedCard


        if (levelChoice == 'easy') {
            clickedCard = easy[index]
            el.setAttribute('src', clickedCard.image)
            if (choiceOne === null) {
                choiceOne = clickedCard;
                choiceOneDiv = evt.target
            } else {
                if (choiceOne.value !== clickedCard.value) {
                    setTimeout(function () { 
                    choiceOneDiv.setAttribute('src', './imgs/cards/square.png')
                    squaresEls[index].setAttribute('src', './imgs/cards/square.png')
                    console.log('not a pair')
                    lives--
                    choiceOne = null;
                    choiceOneDiv = null;
                    }, 2000);
                }
            }
        } else if (levelChoice == 'medium') {
            clickedCard = medium[index]
            el.setAttribute('src', clickedCard.image)
            if (choiceOne === null) {
                        choiceOne = clickedCard;
                        choiceOneDiv = evt.target
                    } else {
                        if (choiceOne.value !== clickedCard.value) {
                            setTimeout(function () { 
                            choiceOneDiv.setAttribute('src', './imgs/cards/square.png')
                            squaresEls[index].setAttribute('src', './imgs/cards/square.png')
                            console.log('not a pair')
                            lives--
                            choiceOne = null;
                            choiceOneDiv = null;
                            }, 2000);
                        }
                    }
        } else {
            clickedCard = hard[index]
            el.setAttribute('src', clickedCard.image)
            if (choiceOne === null) {
                            choiceOne = clickedCard;
                            choiceOneDiv = evt.target
                        } else {
                             if (choiceOne.value !== clickedCard.value) {
                                setTimeout(function () { 
                                choiceOneDiv.setAttribute('src', './imgs/cards/square.png')
                                squaresEls[index].setAttribute('src', './imgs/cards/square.png')
                                    //alert  ("not a pair")
                                console.log('not a pair')
                                lives--
                                choiceOne = null;
                                choiceOneDiv = null;
                                }, 2000);
                            }
                        }
                }
            })
        });
        
    








/*----- functions -----*/

function init(){
    loadBoard();
    loadBrains();
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
   
function scoreDisplay(){
        if (lives == 5){
            brains4.classList.remove('display')
        }};
        
    // }


    //     // render lives update after play
    //     const imgs = document.querySelectorAll('.brains img');
        
    //     if (lives == 5){
    //         for (const life5 of 'imgs'){
    //             // .brains.classList.remove('display')
    //             // need to remove hidden display of img #life-5
    //         }
            
            
            
    //     } else if (lives == 4){
            
    //     } else if (lives == 3){

    // } else if (lives == 2){

    // } else if (lives == 1){

    // } else {

    // }











loadBoard()
// scoreboard()