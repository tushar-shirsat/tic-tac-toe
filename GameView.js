export default class GameView{
    constructor(){
        
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        game.board.forEach((element,index) => {
            const tile = document.querySelector(`.board-tile[data-index="${index}"]`);
            let tileType = game.board[index] === "X" ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class='${tileType}'>${element? element : ""}</span>`
            if(winningCombination && winningCombination.includes(index)){
                tile.classList.add("tile-winner");
                game.turn==="X" ? document.querySelector(".player-x").classList.add("winner") : document.querySelector(".player-o").classList.add("winner");
            }
        });
    }
    updateTurn(game){
        let playerX = document.querySelector('.player-x');
        let playerO = document.querySelector('.player-o');
        if(game.turn === "X"){
            playerO.classList.remove("active")
            playerX.classList.add("active");
        }else{
            playerX.classList.remove("active");
            playerO.classList.add("active");
        }
    }

}