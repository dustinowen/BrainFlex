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
    {value: 9, image: './imgs/cards/easy/emoji.09.png'},

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








/*----- state variables -----*/

let levelChoice = 'easy'
let livesEasy = 5;
let livesMedium = 4;
let timeHard = 60000;

let choiceOne;
let choiceTwo;




/*----- cached elements  -----*/

const squaresEls = document.querySelectorAll('.game-squares')

console.log(squaresEls);





/*----- event listeners -----*/

squaresEls.forEach(function(el, index){
    el.addEventListener('click', function(){

        if (levelChoice == 'easy'){
        const clickedCard = easy[index]
        console.log(clickedCard)
        el.setAttribute('src', clickedCard.image)
            // if (choiceOne === null)

    } else if (levelChoice == "medium"){
        const clickedCard = medium[index]
        console.log(clickedCard)
        el.setAttribute('src', clickedCard.image)

    } else {
        const clickedCard = hard[index]
        console.log(clickedCard)
        el.setAttribute('src', clickedCard.image)
        }
    });
});


// TO DO - easy-medium-hard buttons=> start game 

// easy => hide .hard, .medium

// medium => hide .hard

// hard => load timed game






/*----- functions -----*/
// init();

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

    

loadBoard()
