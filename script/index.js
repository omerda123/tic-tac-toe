
class Game {
    constructor() {
        this.board = new Board();
        this.tic = "x"
        this.tow = "o"
        this.currentTurn = this.tic;
        this.scorePlayer1 = 0;
    }
    initListeners() {
        $(".cell").click((e) => {
            e.target.classList.add(this.currentTurn);
            this.currentTurn = this.currentTurn === this.tic ? this.tow : this.tic;

        })


    }

    initApp() {
    }
    onBoardClick() {

    }
    checkRows() {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                if (cells[i][j] === x) {
                    counter++;
                }
                if (counter === 3) {
                    return true;
                }
                else
                    counter = 0;
            }
            return false;
        }
    }
    checkColumns() {

        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                if (cells[j][i] === x) {
                    counter++;
                }
                if (counter === 3) {
                    return true;
                }
                else
                    counter = 0;
            }
            return false;
        }
    }


    checkDiagonal() {

    }
}

class Board {
    constructor() {
        this.cells = [];
        this.cells.push($(".row"));
        for (let i = 0; i < 3; i++) {
            this.cells[i] = $(`.row:nth-child(${i + 1}) .cell`);
        }

    }


}



const game = new Game();
game.initListeners();