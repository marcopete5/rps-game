let startBtn = document.getElementById('start')
let prompt = document.querySelector('.prompt')
let tie = document.querySelector('.tie')
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let options = document.querySelectorAll('.pic')
let choose = false;
let pScore = 1;
let cScore = 1;

startBtn.addEventListener('click', () => {
    flasher(prompt, 'msg')
})

function flasher (selected, str){
    let timer = setInterval(()=> {
        selected.classList.toggle(str)
    }, 500)
    setTimeout(()=> {
        clearInterval(timer)
    }, 2000)
    choose = true;
}

let optionsArr = Array.from(options)
   
optionsArr.map((option, i) => {
    option.addEventListener('click', () => {
        if(choose){
            switch(i){
                case 0:
                    if (Math.floor(Math.random()*3) === 0){
                        document.getElementById('play').textContent = 'Player: ' + pScore++ 
                        flasher(rock, 'rock')
                    }else if(Math.floor(Math.random()*3) === 1){
                        flasher(tie, 'tie')
                    }else{
                        document.getElementById('comp').textContent = 'Computer: ' + cScore++
                        flasher(paper, 'paper')
                    }
                    console.log('Rock');
                    break;
                case 1: 
                    if (Math.floor(Math.random()*3) === 0){
                        document.getElementById('play').textContent = 'Player: ' + pScore++ 
                        flasher(paper, 'paper')
                    }else if(Math.floor(Math.random()*3) === 1){
                        flasher(tie, 'tie')
                    }else{
                        document.getElementById('comp').textContent = 'Computer: ' + cScore++
                        flasher(scissors, 'scissors')
                    }
                    console.log('Paper');
                    break;
                case 2: 
                    if (Math.floor(Math.random()*3) === 0){
                        document.getElementById('play').textContent = 'Player: ' + pScore++ 
                        flasher(scissors, 'scissors')
                    }else if(Math.floor(Math.random()*3) === 1){
                        flasher(tie, 'tie')
                    }else{
                        document.getElementById('comp').textContent = 'Computer: ' + cScore++
                        flasher(rock, 'rock')
                    }
                    console.log('Scissors');
                    break;
                default:
                    break;
            }
        }
    })
})