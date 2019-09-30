class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.winner = null;
        this.turns = 9;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
            --this.turns;
        }
        this.getWinner();
    }

    isFinished() {
        if (this.turns === 0 || this.winner !== null) return true;
        return false;
    }

    getWinner() {
        let value;

        for (let row = 0; row < 3; row++) {
            value = this.field[row][0];
            if (this.field[row][1] === value && this.field[row][2] === value) {
                return this.winner = value;
            }
        }

        for (let col = 0; col < 3; col++) {
            value = this.field[0][col];
            if (this.field[1][col] === value && this.field[2][col] === value) {
                return this.winner = value;
            }
        }

        value = this.field[0][0];
        if ( this.field[1][1] === value && this.field[2][2] === value) {
            return this.winner = value;
        }

        value = this.field[0][2];
        if ( this.field[1][1] === value && this.field[2][0] === value) {
            return this.winner = value;
        }
        return null;
    }

    noMoreTurns() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.field[row][col] === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if ((this.winner !== null) || (this.turns > 0)) return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return ( this.field[rowIndex][colIndex] === null ) ? null : this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
