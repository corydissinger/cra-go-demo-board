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
    if (`${FLAGS.MIN_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
        return FLAGS.NORTH_WEST;
    } 
    
    if (FLAGS.GAME_9_x_9 === mode) {
        if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_9_x_9_ROW}` === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (`${FLAGS.MAX_9_x_9_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_9_x_9_ROW}` === coordinate) {
            return FLAGS.SOUTH_EAST;
        }
    }

    if (FLAGS.GAME_13_x_13 === mode) {
        if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_13_x_13_ROW}` === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (`${FLAGS.MAX_13_x_13_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_13_x_13_ROW}` === coordinate) {
            return FLAGS.SOUTH_EAST;
        }
    }

    if (FLAGS.GAME_19_x_19 === mode) {
        if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_19_x_19_ROW}` === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (`${FLAGS.MAX_19_x_19_COLUMN}${FLAGS.MIN_ROW}` === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (`${FLAGS.MIN_COLUMN}${FLAGS.MAX_19_x_19_ROW}` === coordinate) {
            return FLAGS.SOUTH_EAST;
        }
    }    
};