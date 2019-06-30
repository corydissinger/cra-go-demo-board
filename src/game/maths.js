import * as _ from 'lodash';
import * as FLAGS from './flags';
import * as UTILS from "./utils";

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

export const getStarPointsConstant = (mode) => {
    if (FLAGS.GAME_9_x_9 === mode) {
        return FLAGS.STAR_POINTS_9_x_9;
    } else if (FLAGS.GAME_13_x_13 === mode) {
        return FLAGS.STAR_POINTS_13_x_13;
    } else if (FLAGS.GAME_19_x_19 === mode) {
        return FLAGS.STAR_POINTS_19_x_19;
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

// Calculates how much space the board can have on the screen
export const calculateBoardDimensions = ({
                                     windowHeight,
                                     windowWidth,
                                 }) => {
    let desiredWidth = windowHeight * FLAGS.GOBAN_HEIGHT_TO_WIDTH_RATIO;
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

// get adjacent stones of opposing color
// get all connected stones in that opposing color group
// determine if any of those connected stones have any liberties
// return board state with dead groups removed
// TODO: this can't be 100 lines long...

export const removeDeadStones = ({
    existingStones,
    mode,
    newStoneColor,
    newStoneColCoordinate,
    newStoneRowCoordinate,
}) => {
    const opposingColor = FLAGS.STONE_BLACK === newStoneColor ? FLAGS.STONE_WHITE : FLAGS.STONE_BLACK;
    const newStones = _.assign({}, existingStones, { [`${newStoneColCoordinate}${newStoneRowCoordinate}`]: newStoneColor });

    // this will make sense in a few lines.. maybe
    let cardinalAdjacencyMap = getCardinalAdjacencies({
        mode,
        colCoordinate: newStoneColCoordinate,
        rowCoordinate: newStoneRowCoordinate,
    });

    let nextAdjacentCoordinates = [];

    // Need to track the attacked groups separately to ensure proper removal
    const attackedGroups = {
        north: {
            stones: [],
            liberties: [],
        },
        east: {
            stones: [],
            liberties: [],
        },
        south: {
            stones: [],
            liberties: [],
        },
        west: {
            stones: [],
            liberties: [],
        },
    };

    const isCoordinateProcessed = (coordinate) => {
        for (const direction in attackedGroups) {
            if (_.includes(attackedGroups[direction].stones, coordinate)) {
                return true;
            }
        }

        return false;
    };

    const shouldProcessCoordinate = (coordinate) => {
        if (isCoordinateProcessed(coordinate)) {
            return false;
        }

        if (newStones[coordinate] === opposingColor) {
            return true;
        }

        return false;
    };

    for (const direction in cardinalAdjacencyMap) {
        const coordinate = cardinalAdjacencyMap[direction];
        const attackedGroup = attackedGroups[direction];

        // For a while I forgot to process the initial coordinate. Smart.
        if (shouldProcessCoordinate(coordinate)) {
            nextAdjacentCoordinates.push(coordinate);
            attackedGroup.stones.push(coordinate);
        }

        do {
            // ... get adjacent allied stones and ones not already part of the group
            nextAdjacentCoordinates = _.flatMap(nextAdjacentCoordinates, (coordinateToProcess) =>
                _.filter(getAdjacentCoordinates({
                    mode,
                    colCoordinate: coordinateToProcess[0],
                    rowCoordinate: coordinateToProcess.substring(1),
                }), shouldProcessCoordinate)
            );

            attackedGroup.stones.push.apply(attackedGroup.stones, nextAdjacentCoordinates);
        } while (nextAdjacentCoordinates.length !== 0);
    }

    for (const direction in attackedGroups) {
        const attackedGroup = attackedGroups[direction];

        for (const coordinateToProcess of attackedGroup.stones) {
            nextAdjacentCoordinates = _.filter(getAdjacentCoordinates({
                mode,
                colCoordinate: coordinateToProcess[0],
                rowCoordinate: coordinateToProcess.substring(1),
            }), aCoordinate => !isCoordinateProcessed(aCoordinate)
                && (!newStones[aCoordinate] || newStones[aCoordinate] === FLAGS.STONE_NONE));

            attackedGroup.liberties.push.apply(attackedGroup.liberties, nextAdjacentCoordinates);
        }
    }

    const stonesToRemove = [];
    let survivingAttackedGroups = 0;

    for (const direction in attackedGroups) {
        const attackedGroup = attackedGroups[direction];

        if (attackedGroup.liberties.length === 0) {
            stonesToRemove.push.apply(stonesToRemove, attackedGroup.stones);
        } else if (attackedGroup.stones.length > 0) {
            survivingAttackedGroups++;
        }
    }

    if (survivingAttackedGroups === _.keys(cardinalAdjacencyMap).length) {
        return existingStones; // the placed stone died
    }

    for (const coordinate of stonesToRemove) {
        newStones[coordinate] = FLAGS.STONE_NONE;
    }

    return newStones;
};

export const determineAlteredstones = ({ nextBoardState, currentBoardState }) => {
    const alteredStones = new Set();

    for (const coordinate in nextBoardState) {
        if (nextBoardState[coordinate] !== currentBoardState[coordinate]) {
            alteredStones.add(coordinate);
        }
    }

    return alteredStones;
};

export const getOffsets = ({ x, y, tileDimensions }) => {
    const col = Math.floor(x / tileDimensions.width);
    const row = Math.floor(y / tileDimensions.height);

    return {
        col,
        row,
    };
};

export const deriveCoordinatesFromOffsets = (offsets) => {
    const colCoordinate = UTILS.getCharacterFromOffset(offsets.col);
    const rowCoordinate = offsets.row + 1;

    return {
        colCoordinate,
        rowCoordinate,
    };
};