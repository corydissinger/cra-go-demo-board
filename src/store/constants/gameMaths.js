// shameless https://stackoverflow.com/a/24597663
// yeehaw circular dependency
import * as FLAGS from './flags';

export const getCornersConstant = (mode) => {
    if (FLAGS.GAME_9_x_9 === mode) {
        return FLAGS.CORNERS_9_x_9;
    } else if (FLAGS.GAME_13_x_13 === mode) {
        return FLAGS.CORNERS_13_x_13;
    } else if (FLAGS.GAME_19_x_19 === mode) {
        return FLAGS.CORNERS_19_x_19;
    }
};

export const getSidesConstant = (mode) => {
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
        } else { // let me die I made these so cumbersome
            if (FLAGS.MIN_COLUMN === coordinate[0]) {
                return FLAGS.WEST;
            } else if (FLAGS.MIN_ROW === coordinate.substring(1)) {
                return FLAGS.NORTH;
            } else if (FLAGS.MAX_9_x_9_COLUMN === coordinate[0]) {
                return FLAGS.EAST;
            } else if (FLAGS.MAX_9_x_9_ROW === coordinate.substring(1)) {
                return FLAGS.SOUTH;
            }
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 9 x 9');
    }

    if (FLAGS.GAME_13_x_13 === mode) {
        if (FLAGS.CORNER_13_x_13_SW === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (FLAGS.CORNER_13_x_13_NE === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (FLAGS.CORNER_13_x_13_SE === coordinate) {
            return FLAGS.SOUTH_EAST;
        } else { // let me die I made these so cumbersome
            if (FLAGS.MIN_COLUMN === coordinate[0]) {
                return FLAGS.WEST;
            } else if (FLAGS.MIN_ROW === coordinate.substring(1)) {
                return FLAGS.NORTH;
            } else if (FLAGS.MAX_13_x_13_COLUMN === coordinate[0]) {
                return FLAGS.EAST;
            } else if (FLAGS.MAX_13_x_13_ROW === coordinate.substring(1)) {
                return FLAGS.SOUTH;
            }
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 13 x 13');
    }

    if (FLAGS.GAME_19_x_19 === mode) {
        if (FLAGS.CORNER_19_x_19_SW === coordinate) {
            return FLAGS.SOUTH_WEST;
        } else if (FLAGS.CORNER_19_x_19_NE === coordinate) {
            return FLAGS.NORTH_EAST;
        } else if (FLAGS.CORNER_19_x_19_SE === coordinate) {
            return FLAGS.SOUTH_EAST;
        } else { // let me die I made these so cumbersome
            if (FLAGS.MIN_COLUMN === coordinate[0]) {
                return FLAGS.WEST;
            } else if (FLAGS.MIN_ROW === coordinate.substring(1)) {
                return FLAGS.NORTH;
            } else if (FLAGS.MAX_19_x_19_COLUMN === coordinate[0]) {
                return FLAGS.EAST;
            } else if (FLAGS.MAX_19_x_19_ROW === coordinate.substring(1)) {
                return FLAGS.SOUTH;
            }
        }

        throw new Error('Avast ye matey, shouldn"nt be branching to this island in 19 x 19');
    }    
};

//https://senseis.xmp.net/?EquipmentDimensions
// This function determines the width and height of each renderable tile.
// corners and sides will get an additional padding for aesthetic.
export const calculateTileDimensions = ({
                                     configurationHeight,
                                     mode,
                                     windowHeight,
                                     windowWidth,
                                 }) => {

    const workingHeight = windowHeight - configurationHeight;
    let desiredWidth = workingHeight * FLAGS.GOBAN_HEIGHT_TO_WIDTH_RATIO;
    desiredWidth = windowWidth > desiredWidth ? desiredWidth : windowWidth - 10; // very scientific
    const desiredHeight = desiredWidth * FLAGS.GOBAN_WIDTH_TO_HEIGHT_RATIO;
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
    
    const height = Math.floor(desiredHeight * tileRatio);
    const width = Math.floor(desiredWidth * tileRatio); 

    // Otherwise these calculations will cause lines to be drawn outside
    // the bounding canvas
    return {
        height: height % 2 === 0 ? height : height - 1,
        width: width % 2 === 0 ? width : width - 1,
    };
};

export const stoneRadius = (tileHeight) => {
    return Math.floor((tileHeight * FLAGS.GOBAN_STONE_DIAMETER_TO_TILE_HEIGHT_RATIO) / 2);
};