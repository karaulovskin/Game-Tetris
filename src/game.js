export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playField = [
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,],
    ];
    activePiece = {
        x: 0,
        y: 0,
        blocks: [
            [0,1,0,],
            [1,1,1,],
            [0,0,0,]
        ]
    };
}