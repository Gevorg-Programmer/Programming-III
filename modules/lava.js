module.exports = class Lava { 
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    mul(){
        let emptycells = this.chooseCell(1);
        let newCell = emptycells[Math.floor(Math.random()*emptycells.length)];
        if (this.multiplay >= Math.floor(Math.random()*200) && newCell) {
            const newLava = new Lava(newCell[0], newCell[1])
            lavaArr.push(newLava);
            matrix[newCell[1]][newCell[0]] = 5;
            this.muplitplay = 0;
        }
        this.multiplay++;
    }


} 