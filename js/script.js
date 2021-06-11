//selectors for start page
const startPage = document.getElementById('front-wrapper');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const playerOneName = document.getElementById('player-one-name');
const playerTwoName = document.getElementById('player-two-name');
const playerOneSymbols = playerOne.querySelector('.symbols');
const playerTwoSymbols = playerTwo.querySelector('.symbols');

const submitBtn = document.getElementById('form-submit');

//selectors for main page
const configureBtn = document.getElementById('configure');

function toggleDifficulty(e) {
    const difficulty = document.querySelectorAll('.difficulty')
    if (e.target.id == 'ai') {
        difficulty.forEach(player => player.style.display = 'flex');
    } else {
        difficulty.forEach(player => player.style.display = 'none');
    }
}

function toggleSymbolsOne(e) {
    const times = playerOne.querySelector('.fa-times');
    const circle = playerOne.querySelector('.fa-circle');
    const x = playerOne.querySelector('.symbol[data-value="x"]');
    const o = playerOne.querySelector('.symbol[data-value="o"]');
    const xTwo = playerTwo.querySelector('.symbol[data-value="x"]');
    const oTwo = playerTwo.querySelector('.symbol[data-value="o"]');

    if (e.target == times) {
        if (x.classList.contains('symbol-toggle')) return;
        x.classList.add('symbol-toggle');
        xTwo.classList.remove('symbol-toggle');
        o.classList.remove('symbol-toggle');
        oTwo.classList.add('symbol-toggle');
    } else if (e.target == circle) {
        if (o.classList.contains('symbol-toggle')) return;
        o.classList.add('symbol-toggle');
        oTwo.classList.remove('symbol-toggle');
        x.classList.remove('symbol-toggle');
        xTwo.classList.add('symbol-toggle');
    }
}

function toggleSymbolsTwo(e) {
    const times = playerTwo.querySelector('.fa-times');
    const circle = playerTwo.querySelector('.fa-circle');
    const x = playerOne.querySelector('.symbol[data-value="x"]');
    const o = playerOne.querySelector('.symbol[data-value="o"]');
    const xTwo = playerTwo.querySelector('.symbol[data-value="x"]');
    const oTwo = playerTwo.querySelector('.symbol[data-value="o"]');

    if (e.target == times) {
        if (xTwo.classList.contains('symbol-toggle')) return;
        xTwo.classList.add('symbol-toggle');
        x.classList.remove('symbol-toggle');
        oTwo.classList.remove('symbol-toggle');
        o.classList.add('symbol-toggle');
    } else if (e.target == circle) {
        if (oTwo.classList.contains('symbol-toggle')) return;
        oTwo.classList.add('symbol-toggle');
        o.classList.remove('symbol-toggle');
        xTwo.classList.remove('symbol-toggle');
        x.classList.add('symbol-toggle');
    }
}

function toggleDisplay() {
    const formInputs = document.querySelectorAll('.player input');
    formInputs.forEach(input => input.disabled = !input.disabled);
    submitBtn.disabled = !submitBtn.disabled;
    startPage.classList.toggle('hide-front-page');
}

function displayForm() {
    toggleDisplay();
    if (!playerOneName.value) {
        playerOneName.value = "Player1";
    }
    if (!playerTwoName.value) {
        playerTwoName.value = "Player2";
    }
    let play1 = {
        name: playerOneName.value,
        isHuman: true, //private method in factory function
        difficulty: null, //private method in factory function
        actionSymbol: playerOne.querySelector('.symbol-toggle').dataset.value
    };
    let play2 = {
        name: playerTwoName.value,
        isHuman: playerTwo.querySelector('input[name="is-human-2"]:checked').value, //private method
        difficulty: playerTwo.querySelector('input[name="difficulty"]:checked').value, //private method
        actionSymbol: playerTwo.querySelector('.symbol-toggle').dataset.value
    };

    console.log(play1, play2);
}
/*test for click event
window.addEventListener('click', clicked);
function clicked(e) {
    console.log(e.target);
}
*/

playerTwo.querySelectorAll('input[name="is-human-2"]').forEach(input => input.addEventListener('click', toggleDifficulty));
submitBtn.addEventListener('click', displayForm);
configureBtn.addEventListener('click', toggleDisplay);
playerOneSymbols.addEventListener('click', toggleSymbolsOne);
playerTwoSymbols.addEventListener('click', toggleSymbolsTwo);