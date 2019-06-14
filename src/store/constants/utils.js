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
        } else { // let me die I made these so confusing
            if (FLAGS.MIN_COLUMN === coordinate[0]) {
                return FLAGS.NORTH;
            } else if (FLAGS.MIN_ROW === coordinate[1]) {
                return FLAGS.WEST;
            } else if (FLAGS.MAX_9_x_9_COLUMN === coordinate[0]) {
                return FLAGS.SOUTH;
            } else if (FLAGS.MAX_9_x_9_ROW === coordinate[1]) {
                return FLAGS.EAST;
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

//https://senseis.xmp.net/?EquipmentDimensions
export const calculateTileDimensions = ({
                                     configurationHeight,
                                     mode,
                                     windowHeight,
                                     windowWidth,
                                 }) => {
    const workingHeight = windowHeight - configurationHeight;
    const desiredWidth = workingHeight * FLAGS.gobanHeightToWidthRatio;
    let tileRatio = 0;

    if (FLAGS.GAME_9_x_9 === mode) {
        tileRatio = Number(1/9);
    } else if (FLAGS.GAME_13_x_13 === mode) {
        tileRatio = Number(1/13);
    } else if (FLAGS.GAME_19_x_19 === mode) {
        tileRatio = Number(1/19);
    } else {
        throw new Error('No known mode');
    }
    
    const height = Math.floor(workingHeight * tileRatio);
    const width = Math.floor(desiredWidth * tileRatio); 

    // Otherwise these calculations will cause lines to be drawn outside
    // the bounding canvas
    return {
        height: height % 2 === 0 ? height : height - 1,
        width: width % 2 === 0 ? width : width - 1,
    };
};