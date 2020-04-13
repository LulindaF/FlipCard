document.addEventListener('DOMContentLoaded', () => {
const cardArray = [

    {
        name: 'apple',
        img: 'images/apple.jpg'
    },
    {
        name: 'apple',
        img: 'images/apple.jpg'
    },
    {
        name: 'batman',
        img: 'images/batman.png'
    },
    {
        name: 'batman',
        img: 'images/batman.png'
    },
    {
        name: 'dragon',
        img: 'images/dragon.png'
    },
    {
        name: 'dragon',
        img: 'images/dragon.png'
    },
    {
        name: 'cursor',
        img: 'images/cursor.jpg'
    },
    {
        name: 'cursor',
        img: 'images/cursor.jpg'
    },
    {
        name: 'man',
        img: 'images/man.png'
    },
    {
        name: 'man',
        img: 'images/man.png'
    },
    {
        name: 'oppo',
        img: 'images/oppo.jpg'
    },
    {
        name: 'oppo',
        img: 'images/oppo.jpg'
    }
    
];

cardArray.sort(()=> 0.5 - Math.random);

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

function createBoard(){
for(let i=0; i <cardArray.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src', 'images/cover.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);

}
}
function checkForMatch(){
    var cards = document.querySelector('img');
    const optionOneId = cardsChosen[0];
    const optionTwoId = cardsChosen[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert('Hurray you found a match');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        cardsWon.push(cardsChosen);

    }else{
        cards[optionOneId].setAttribute('src', 'cover.png');
        cards[optionTwoId].setAttribute('src', 'cover.png');
        alert('Oops, Try Again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Yayy you just found them all, game complete!';

    }
}

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 400);
    }

}
createBoard();
});