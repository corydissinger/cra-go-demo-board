// shameless https://stackoverflow.com/a/24597663
// yeehaw circular dependency
import * as FLAGS from './flags';

export const genCharArray = (charA, charZ) => {
    let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);

    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }

    return a;
};

export const getCornerConstant = (mode) => {
    if (FLAGS.GAME_9_x_9 === mode) {
        return FLAGS.CORNERS_9_x_9;
    } else if (FLAGS.GAME_13_x_13 === mode) {
        return FLAGS.CORNERS_13_x_13;
    } else if (FLAGS.GAME_19_x_19 === mode) {
        return FLAGS.CORNERS_19_x_19;
    }
};

export const getSideConstant = (mode) => {
    if (FLAGS.GAME_9_x_9 === mode) {
        return FLAGS.SIDES_9_x_9;
    } else if (FLAGS.GAME_13_x_13 === mode) {
        return FLAGS.SIDES_13_x_13;
    } else if (FLAGS.GAME_19_x_19 === mode) {
        return FLAGS.SIDES_19_x_19;
    }
};

export const getCardinalDirection = (mode, coordinate) => {
    if (FLAGS.CORNER_ALL_NW === coordinate) {
        return FLAGS.NORTH_WEST;
    } 
    
    if (FLAGS.GAME_9_x_9 === mode) {
        if (FLAGS.CORNER_9_x_9_SW === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (FLAGS.CORNER_9_x_9_NE === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (FLAGS.CORNER_9_x_9_SE === coordinate) {
            return FLAGS.SOUTH_EAST;
        } else { // let me die
            if (FLAGS.MIN_COLUMN === coordinate[0]) {
                return FLAGS.WEST;
            } else if (FLAGS.MIN_ROW === coordinate[1]) {
                return FLAGS.NORTH;
            } else if (FLAGS.MAX_9_x_9_COLUMN === coordinate[0]) {
                return FLAGS.EAST;
            } else if (FLAGS.MAX_9_x_9_ROW === coordinate[1]) {
                return FLAGS.SOUTH;
            }
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 9 x 9');
    }

    if (FLAGS.GAME_13_x_13 === mode) {
        if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_13_x_13_ROW}` === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (`${FLAGS.MAX_13_x_13_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_13_x_13_ROW}` === coordinate) {
            return FLAGS.SOUTH_EAST;
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 13 x 13');
    }

    if (FLAGS.GAME_19_x_19 === mode) {
        if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_19_x_19_ROW}` === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (`${FLAGS.MAX_19_x_19_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_19_x_19_ROW}` === coordinate) {
            return FLAGS.SOUTH_EAST;
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 19 x 19');
    }    
};