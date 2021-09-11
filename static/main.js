

window.onload = function buttonChange () {
    const movingButton = document.getElementById('flip-flop');

};


function jumpingButton() {
    calcClicks()
    const jumpingButton = document.getElementById('flip-flop');

    if (jumpingButton.style.left == 0 || jumpingButton.style.left == 30 + 'px') {
        jumpingButton.style.position = 'absolute';
        jumpingButton.innerHTML = 'Go Left'
        jumpingButton.style.left = 120 + 'px';
}
    else if (jumpingButton.style.left == 120 + 'px') {
        jumpingButton.style.position = 'absolute';
        jumpingButton.innerHTML = 'Go Right'
        jumpingButton.style.left = 30 + 'px';
    }
}


function changeToRed() {
    calcClicks()
    const redButton = document.getElementById('change-color');
    if (redButton.style.backgroundColor == '' || redButton.style.backgroundColor == 'white') {
        redButton.style.backgroundColor = 'red';
    }
    else if (redButton.style.backgroundColor === 'red') {
        redButton.style.backgroundColor = 'white';
    }
}


function neighbourButtonColorChanger() {
    calcClicks()
    const neighbourButton = document.getElementById('neighbour');
    neighbourButton.style.backgroundColor = '#'  + Math.floor(Math.random()*16777215).toString(16);
}


function calcClicks() {
    let clicks = document.getElementById('count');
    clicks.innerHTML= parseInt(clicks.innerHTML) + 1;
}