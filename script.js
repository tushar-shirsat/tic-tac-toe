import Game from './game.js';
import GameView from './GameView.js'
let game = new Game();
let gameview = new GameView();

document.querySelectorAll(".board-tile").forEach(element =>{
    element.addEventListener("click",() =>{
         game.makeMove(element.dataset.index)   
         gameview.updateBoard(game);
    })
})

document.querySelector(".restart").addEventListener("click",() =>{
    onRestartClick();
})

function onRestartClick(){
    game = new Game();
    gameview.updateBoard(game);
    document.querySelector(".player-x").classList.remove("winner")
    document.querySelector(".player-o").classList.remove("winner")
}

gameview.updateBoard(game);