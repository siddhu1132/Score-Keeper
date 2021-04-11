//const p1button = document.querySelector('#p1button');

//const p2button = document.querySelector('#p2button');

//const p1Display = document.querySelector('#p1');

//const p2Display = document.querySelector('#p2');

const reset = document.querySelector('#reset');

const winner = document.querySelector('#playto');

let win = 3;

let isgameover = false;



const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1')
}


const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2')
}


//let p1score = 0;

//let p2score = 0;

function updateScore(player, opponent) {

    if (!isgameover) {

        player.score += 1;

        if (player.score === win) {

            isgameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.innerText = player.score;
    }

}



p1.button.addEventListener('click', (e) => {

    // if (!isgameover) {

    //     p1score += 1;

    //     if (p1score === win) {

    //         isgameover = true;
    //         p1Display.classList.add('has-text-success');
    //         p2Display.classList.add('has-text-danger');
    //         p1button.disabled = true;
    //         p2button.disabled = true;
    //     }

    //     p1Display.innerText = p1score;
    // }

    updateScore(p1, p2);
    e.preventDefault();
})



p2.button.addEventListener('click', (e) => {

    e.preventDefault();

    updateScore(p2, p1);


    // if (!isgameover) {

    //     p2score += 1;

    //     if (p2score === win) {

    //         isgameover = true;
    //         p2Display.classList.add('has-text-success');
    //         p1Display.classList.add('has-text-danger');
    //         p1button.disabled = true;
    //         p2button.disabled = true;

    //     }

    //     p2Display.innerText = p2score;
    // }
})

winner.addEventListener('change', function () {
    win = parseInt(this.value);
    resets();
})

reset.addEventListener('click', resets)

function resets() {

    isgameover = false;
    // p1score = 0;
    // p2score = 0;

    // p1Display.innerText = 0;
    // p2Display.innerText = 0;

    // p1Display.classList.remove('has-text-success', 'has-text-danger');
    // p2Display.classList.remove('has-text-success', 'has-text-danger');
    // p1button.disabled = false;
    // p2button.disabled = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

    // p1.score = 0;
    // p2.score = 0;

    // p1.display.innerText = 0;
    // p2.display.innerText = 0;

    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}
