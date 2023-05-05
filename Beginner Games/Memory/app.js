// Create the Cards
const cardArray = [
    {
        name: 'coding job',
        img: 'images/coder droppin hot.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hot nolan',
        img: 'images/nolan undr contrl.png'
    },
    {
        name: 'gulyas',
        img: 'images/gulyas.png'
    },
    {
        name: 'meditation',
        img: 'images/meditacio.png'
    },
    {
        name: 'rich boi',
        img: 'images/Rich boi.png'
    },
    {
        name: 'coding job',
        img: 'images/coder droppin hot.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hot nolan',
        img: 'images/nolan undr contrl.png'
    },
    {
        name: 'gulyas',
        img: 'images/gulyas.png'
    },
    {
        name: 'meditation',
        img: 'images/meditacio.png'
    },
    {
        name: 'rich boi',
        img: 'images/Rich boi.png'
    }
];

const lvl2CardArray = [
    {
        name: 'big house',
        img: 'images/big house.png'
    },
    {
        name: 'dancing cat',
        img: 'images/dancing cat.png'
    },
    {
        name: 'elijah',
        img: 'images/elijah.png'
    },
    {
        name: 'ice cream',
        img: 'images/ice cream.png'
    },
    {
        name: 'rupi human',
        img: 'images/rupi human.png'
    },
    {
        name: 'tattoo',
        img: 'images/tattoo.png'
    },
    {
        name: 'teahouse library',
        img: 'images/teahouse library.png'
    },
    {
        name: 'timon reading',
        img: 'images/timon reading.png'
    },
    // Duplicates
    {
        name: 'big house',
        img: 'images/big house.png'
    },
    {
        name: 'dancing cat',
        img: 'images/dancing cat.png'
    },
    {
        name: 'elijah',
        img: 'images/elijah.png'
    },
    {
        name: 'ice cream',
        img: 'images/ice cream.png'
    },
    {
        name: 'rupi human',
        img: 'images/rupi human.png'
    },
    {
        name: 'tattoo',
        img: 'images/tattoo.png'
    },
    {
        name: 'teahouse library',
        img: 'images/teahouse library.png'
    },
    {
        name: 'timon reading',
        img: 'images/timon reading.png'
    }
];

// Randomize the cards
cardArray.sort(() => 0.5 - Math.random());
lvl2CardArray.sort(() => 0.5 - Math.random());


const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const finishLevelDiv = document.querySelector('#finish-level');
const scorecard = document.querySelector('.scorecard');
const scoreTag = document.querySelector('#score-tag');

const replayBtn = document.createElement('button');
replayBtn.innerHTML = 'Replay?';
const nextBtn = document.createElement('button');
nextBtn.innerHTML = 'Manifest Niki\'s Destiny?';

function initialize() {
    grid.innerHTML = '';

    scoreTag.innerText = 'Score:';
    resultDisplay.innerText = cardsWon.length;

    finishLevelDiv.removeChild(replayBtn);
    finishLevelDiv.removeChild(nextBtn);
}

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/manifestation.png');
        card.setAttribute('data-id', i)
        card.setAttribute('height', '200px');
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
};

createBoard();

function create2Board() {
    initialize();

    document.getElementById('level').innerHTML = 'Level Two';
    document.getElementById('level-name').innerHTML = 'Manifesting Niki\'s Destiny';


    for (let i = 0; i < cardArray.length; i++) {
        const oldCards = document.querySelectorAll('img');
        oldCards.forEach((card) => {
            card.removeAttribute('data-id');
          });
    }

    for (let i = 0; i < lvl2CardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/manifestation.png');
        card.setAttribute('data-id', i)
        card.setAttribute('height', '200px');
        card.addEventListener('click', flip2Card);
        grid.appendChild(card);
    }
};

let levelFinished = false;

function finishLvl() {
    if (levelFinished) {
        return;
    } else {
        scoreTag.innerHTML = '';

        finishLevelDiv.appendChild(replayBtn);
        finishLevelDiv.appendChild(nextBtn);

        replayBtn.addEventListener('click', () => {
            initialize();
            createBoard();
        });
        nextBtn.addEventListener('click', () => {
            create2Board();
        });
    };
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('check for match!')

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/manifestation.png');
        cards[optionTwoId].setAttribute('src', 'images/manifestation.png');
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/celebration.png');
        cards[optionTwoId].setAttribute('src', 'images/celebration.png');
        cards[optionOneId].style.cursor = 'default';
        cards[optionTwoId].style.cursor = 'default';
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/manifestation.png');
        cards[optionTwoId].setAttribute('src', 'images/manifestation.png');
    }

    if (cardsWon.length !== 0) {
        resultDisplay.textContent = cardsWon.length;
    };

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations! You found them all!';
        finishLvl();
        levelFinished = true;
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 750)
    }
}

function flip2Card() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(lvl2CardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', lvl2CardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 750)
    }
}