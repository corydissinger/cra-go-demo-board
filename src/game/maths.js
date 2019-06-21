import * as _ from 'lodash';
import * as FLAGS from './flags';
import {argumentPlaceholder} from "@babel/types";

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

// TODO: Might not need this?
// export const getEmptyBoardConstant = (mode) => {
//     if (FLAGS.GAME_9_x_9 === mode) {
//         return FLAGS.GRID_EMPTY_9_x_9;
//     } else if (FLAGS.GAME_13_x_13 === mode) {
//         return FLAGS.GRID_EMPTY_13_x_13;
//     } else if (FLAGS.GAME_19_x_19 === mode) {
//         return FLAGS.GRID_EMPTY_19_x_19;
//     }
// };

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

// Calculates how much space the board can have on the screen
export const calculateBoardDimensions = ({
                                     configurationHeight,
                                     windowHeight,
                                     windowWidth,
                                 }) => {
    const workingHeight = windowHeight - configurationHeight;
    let desiredWidth = workingHeight * FLAGS.GOBAN_HEIGHT_TO_WIDTH_RATIO;
    desiredWidth = windowWidth > desiredWidth ? desiredWidth : windowWidth - 10; // very scientific
    const desiredHeight = desiredWidth * FLAGS.GOBAN_WIDTH_TO_HEIGHT_RATIO;

    return {
        height: Math.floor(desiredHeight),
        width: Math.floor(desiredWidth),
    };
};

//https://senseis.xmp.net/?EquipmentDimensions
// This function determines the width and height of each renderable tile.
// corners and sides will get an additional padding for aesthetic.
export const calculateTileDimensions = ({
                                     mode,
                                     boardHeight,
                                     boardWidth,
                                 }) => {
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
    
    const height = Math.floor(boardHeight * tileRatio);
    const width = Math.floor(boardWidth * tileRatio);

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

export const getCardinalAdjacencies = ({
    mode,
    colCoordinate,
    rowCoordinate,
}) => {
    let coordinates;

    if (FLAGS.GAME_9_x_9 === mode) {
        coordinates = FLAGS.GRID_COORDINATES_9_x_9;
    } else if (FLAGS.GAME_13_x_13 === mode) {
        coordinates = FLAGS.GRID_COORDINATES_13_x_13;
    } else if (FLAGS.GAME_19_x_19 === mode) {
        coordinates = FLAGS.GRID_COORDINATES_19_x_19;
    }

    const maxIndex = coordinates.length - 1;

    // 'a' is ASCII 97
    const colIndex = parseInt(colCoordinate.charCodeAt(0) - 97);
    const rowIndex = parseInt(rowCoordinate) - 1; // 0 indexed, dummy

    const adjacencies = {};

    if (rowIndex >= 1) {
        adjacencies.north = coordinates[rowIndex - 1][colIndex];
    }

    if (colIndex < maxIndex) {
        adjacencies.east = coordinates[rowIndex][colIndex + 1];
    }

    if (rowIndex < maxIndex) {
        adjacencies.south = coordinates[rowIndex + 1][colIndex];
    }

    if (colIndex >= 1) {
        adjacencies.west = coordinates[rowIndex][colIndex - 1];
    }

    return adjacencies;
};

export const getAdjacentCoordinates = ({
   mode,
   colCoordinate,
   rowCoordinate,
}) => _.values(getCardinalAdjacencies({
    mode,
    colCoordinate,
    rowCoordinate,
}));

const getOpposingGroupCoordinates = ({
    stonesMap,
    opposingColor,
    adjacentStonesMap,
    mode,
}) => {
    return _.reduce(stonesMap, (theOpposingStones, color, coordinate) => {
        if (color === opposingColor && adjacentStonesMap[coordinate]) {
            theOpposingStones.push(coordinate);
        }

        return theOpposingStones;
    }, []);
};

export const removeDeadStones = ({
    existingStones,
    mode,
    newStoneColor,
    newStoneColCoordinate,
    newStoneRowCoordinate,
}) => {
    console.debug('BEGIN Removing dead stones');

    let nextCoordinatesToCheck = getAdjacentCoordinates({
        mode,
        colCoordinate: newStoneColCoordinate,
        rowCoordinate: newStoneRowCoordinate,
    });

    let adjacentStonesMap = _.pick(existingStones, nextCoordinatesToCheck);

    if (!adjacentStonesMap) {
        return existingStones;
    }

    const newBoardState = _.assign({}, existingStones,
        {
            [`${newStoneColCoordinate}${newStoneRowCoordinate}`]: newStoneColor
        }
    );

    const groupWithQuestionableLiberties
        = [
        ...getOpposingGroupCoordinates({
            stonesMap: newBoardState,
            opposingColor: FLAGS.STONE_BLACK === newStoneColor ?
                FLAGS.STONE_WHITE : FLAGS.STONE_BLACK,
            adjacentStonesMap,
            mode,
        })];

    const groupLives = _.reduce(groupWithQuestionableLiberties, (isAlive, groupMemberCoordinates) => {
        if (isAlive) {
            return isAlive;
        }

        nextCoordinatesToCheck = getAdjacentCoordinates({
            mode,
            colCoordinate: groupMemberCoordinates[0],
            rowCoordinate: groupMemberCoordinates.substring(1),
        });

        adjacentStonesMap = _.pick(newBoardState, nextCoordinatesToCheck);

        // If the lengths don't match, there's an open space.
        return _.keys(adjacentStonesMap).length !== nextCoordinatesToCheck.length;
    }, false); // we assume it's dead to begin with

    console.debug('END Removing dead stones');

    return groupLives ? newBoardState : _.omit(newBoardState, groupWithQuestionableLiberties);
};