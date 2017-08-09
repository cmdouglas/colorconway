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
        return this.liveCells.get(point)
    };

    setCell(point, color) {
        if (this.boundsCheck(point)) {
            if (color) {
                this.liveCells.set(point, color);
            }
            else {
                this.liveCells.delete(point)
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

        for (const point of this.liveCells.keys()) {
            candidates.add(point);
            for (const neighbor of ColorConwayBoard.getNeighbors(point)) {
                candidates.add(neighbor);
            }
        }

        for (const candidate of candidates) {
            const liveNeighbors = this.getLiveNeighbors(candidate);
            const current = this.getCell(candidate);
            if (current && (liveNeighbors.length === 2 || liveNeighbors.length === 3)) {
                const neighborsCopy = Array.from(liveNeighbors);
                neighborsCopy.push(current);
                newBoard.setCell(randomChoice(neighborsCopy));
            }
            else if (liveNeighbors.length === 3) {
                newBoard.setCell(randomChoice(liveNeighbors));
            }
        }

        return newBoard;
    };
}
