document.getElementById('startBtn').onclick = function() {
    document.querySelector('.intro').classList.add('hidden');
    document.getElementById('task1').classList.remove('hidden');
    document.getElementById('story').textContent = 'I wanted to surprise you with something special, so here we go...';
};

function lightCandle() {
    document.getElementById('candle').src = 'candle_on.png';  // Change image to lit candle
    document.getElementById('task1').classList.add('hidden');
    document.getElementById('task2').classList.remove('hidden');
}

function blowBalloon(balloon) {
    balloon.style.transform = 'scale(1.5)';
    setTimeout(() => {
        balloon.style.transform = 'scale(1)';
    }, 300);

    balloon.setAttribute('src', 'balloon_inflated.png');  // Change balloon image to inflated
}

function finish() {
    document.getElementById('task2').classList.add('hidden');
    document.getElementById('task3').classList.remove('hidden');
}

document.querySelector('#task3 button').onclick = function() {
    document.getElementById('task3').classList.add('hidden');
    document.getElementById('endMessage').classList.remove('hidden');
};
