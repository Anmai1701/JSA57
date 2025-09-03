document.addEventListener('DOMContentLoaded', () => {
    const resultDisplay = document.querySelector('#result');
    const grid = document.querySelector('.grid');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let score = 0;

    const cardArray = [
        { name: 'rainbow', img: 'https://i.pinimg.com/736x/88/65/db/8865db6560b1b6be5b94ef6790e6d30c.jpg' },
        { name: 'rainbow', img: 'https://i.pinimg.com/736x/88/65/db/8865db6560b1b6be5b94ef6790e6d30c.jpg' },
        { name: 'sun', img: 'https://i.pinimg.com/736x/4a/1a/52/4a1a52a4a3eb2614a5c6bd4080b209be.jpg' },
        { name: 'sun', img: 'https://i.pinimg.com/736x/4a/1a/52/4a1a52a4a3eb2614a5c6bd4080b209be.jpg' },
        { name: 'star', img: 'https://i.pinimg.com/736x/68/17/c6/6817c620206243721e4a21894b514adb.jpg' },
        { name: 'star', img: 'https://i.pinimg.com/736x/68/17/c6/6817c620206243721e4a21894b514adb.jpg' },
        { name: 'moon', img: 'https://i.pinimg.com/1200x/9f/bb/49/9fbb49aef2441f297162d591716765cc.jpg' },
        { name: 'moon', img: 'https://i.pinimg.com/1200x/9f/bb/49/9fbb49aef2441f297162d591716765cc.jpg' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'https://i.pinimg.com/736x/fb/40/59/fb40592cd4eb799b75cf0848ca4de7c9.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            resultDisplay.textContent = "You found a match!";
            
            cards[optionOneId].style.visibility = 'hidden';
            cards[optionTwoId].style.visibility = 'hidden';
        
            cardsWon.push(cardsChosen);
            score++;
        } else {
            cards[optionOneId].setAttribute('src', 'https://i.pinimg.com/736x/fb/40/59/fb40592cd4eb799b75cf0848ca4de7c9.jpg');
            cards[optionTwoId].setAttribute('src', 'https://i.pinimg.com/736x/fb/40/59/fb40592cd4eb799b75cf0848ca4de7c9.jpg');
        
            resultDisplay.textContent = "Sorry, try again!";
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found all match!";
        } else if (score > 0 && resultDisplay.textContent === "You found a match!") {
            resultDisplay.textContent = `Score: ${score}. You found a match!`;
        } else if (score > 0 && resultDisplay.textContent === "Sorry, try again!") {
            resultDisplay.textContent = `Score: ${score}. Sorry, try again!`;
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (cardsChosenId.includes(cardId)) return;
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});