const randomChoice = (a) => {
    return a[Math.floor(Math.random() * a.length)];
};

export default class ColorConwayBoard {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.liveCells = new Map();
    }

    clone() {
        const newBoard = new ColorConwayBoard(this.width, this.height);
        newBoard.liveCells = new Map(this.liveCells.entries());
        return newBoard;
    }

    boundsCheck(point) {
        const x = point[0];
        const y = point[1];

        return (
            0 <= x && x < this.width && 0 <= y && y < this.height
        );
    };

    getCell(point) {
        return this.liveCells.get(point.toString())
    };

    pointFromString(strpoint) {
        return strpoint.split(',').map((coord) => parseInt(coord));
    }

    getLiveCells() {
        return [...this.liveCells.keys()].map(this.pointFromString);
    }

    setCell(point, color) {
        if (this.boundsCheck(point)) {
            if (color) {
                this.liveCells.set(point.toString(), color);
            }
            else {
                this.liveCells.delete(point.toString())
            }
        }
    };

    static getNeighbors(point) {
        const x = point[0];
        const y = point[1];

        return [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
        ]
    };

    getLiveNeighbors(point) {
        return ColorConwayBoard.getNeighbors(point)
            .map((neighbor) => this.getCell(neighbor))
            .filter((cell) => typeof cell !== 'undefined');
    };

    getNext() {
        const newBoard = new ColorConwayBoard(this.width, this.height);
        const candidates = new Set();

        for (const point of this.getLiveCells()) {
            candidates.add(point.toString());
            for (const neighbor of ColorConwayBoard.getNeighbors(point)) {
                candidates.add(neighbor.toString());
            }
        }

        for (const candidate of [...candidates].map(this.pointFromString)) {
            const liveNeighbors = this.getLiveNeighbors(candidate);
            const current = this.getCell(candidate);
            if (current && (liveNeighbors.length === 2 || liveNeighbors.length === 3)) {
                newBoard.setCell(candidate, randomChoice([...liveNeighbors]));
            }
            else if (liveNeighbors.length === 3) {
                newBoard.setCell(candidate, randomChoice(liveNeighbors));
            }
        }

        return newBoard;
    };
}
