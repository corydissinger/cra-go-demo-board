import * as _ from 'lodash';
import * as UTILS from './utils';

// yeehaw constants and pointers and strings oh my

// Ratios expertly calculated from here
//https://senseis.xmp.net/?EquipmentDimensions
export const GOBAN_WIDTH_TO_HEIGHT_RATIO = Number(1.071428571428571);
export const GOBAN_HEIGHT_TO_WIDTH_RATIO = Number(0.933333333333333);

// I made this up
export const GOBAN_STONE_DIAMETER_TO_TILE_HEIGHT_RATIO = Number(0.88);

export const TURN_BLACK = 'TURN_BLACK';
export const TURN_WHITE = 'TURN_WHITE';

export const STONE_NONE = 'STONE_NONE';
export const STONE_BLACK = 'STONE_BLACK';
export const STONE_WHITE = 'STONE_WHITE';

export const GAME_9_x_9 = 'GAME_9_x_9';
export const GAME_13_x_13 = 'GAME_13_x_13';
export const GAME_19_x_19 = 'GAME_19_x_19';

export const NORTH = 'NORTH';
export const NORTH_EAST = 'NORTH_EAST';
export const EAST = 'EAST';
export const SOUTH_EAST = 'SOUTH_EAST';
export const SOUTH = 'SOUTH';
export const SOUTH_WEST = 'SOUTH_WEST';
export const WEST = 'WEST';
export const NORTH_WEST = 'NORTH_WEST';

export const MIN_COLUMN = 'A';
export const MIN_SIDE_COLUMN = 'B';
export const MIN_ROW = '1';

export const MAX_9_x_9_COLUMN = 'J';
export const MAX_EASTWARD_9_x_9_COLUMN_FOR_NORTH_SOUTH = 'H';
export const MAX_9_x_9_ROW    = '9';

export const MAX_13_x_13_COLUMN = 'N';
export const MAX_EASTWARD_13_x_13_COLUMN_FOR_NORTH_SOUTH = 'L';
export const MAX_13_x_13_ROW    = '13';

export const MAX_19_x_19_COLUMN = 'T';
export const MAX_EASTWARD_19_x_19_COLUMN_FOR_NORTH_SOUTH = 'S';
export const MAX_19_x_19_ROW    = '19';

// it's always a1 doofus
export const CORNER_ALL_NW = `${MIN_COLUMN}${MIN_ROW}`;

export const CORNER_9_x_9_NE = `${MAX_9_x_9_COLUMN}${MIN_ROW}`;
export const CORNER_9_x_9_SE = `${MAX_9_x_9_COLUMN}${MAX_9_x_9_ROW}`;
export const CORNER_9_x_9_SW = `${MIN_COLUMN}${MAX_9_x_9_ROW}`;

export const CORNER_13_x_13_NE = `${MAX_13_x_13_COLUMN}${MIN_ROW}`;
export const CORNER_13_x_13_SE = `${MAX_13_x_13_COLUMN}${MAX_13_x_13_ROW}`;
export const CORNER_13_x_13_SW = `${MIN_COLUMN}${MAX_13_x_13_ROW}`;

export const CORNER_19_x_19_NE = `${MAX_19_x_19_COLUMN}${MIN_ROW}`;
export const CORNER_19_x_19_SE = `${MAX_19_x_19_COLUMN}${MAX_19_x_19_ROW}`;
export const CORNER_19_x_19_SW = `${MIN_COLUMN}${MAX_19_x_19_ROW}`;

export const CORNERS_9_x_9 = [
    CORNER_ALL_NW,
    CORNER_9_x_9_NE,
    CORNER_9_x_9_SE,
    CORNER_9_x_9_SW,
];

export const STAR_POINTS_9_x_9 = [
    'C3','G3','E5', 'C7', 'G7',
];

export const CORNERS_13_x_13 = [
    `${MIN_COLUMN}${MIN_ROW}`,
    `${MIN_COLUMN}${MAX_13_x_13_ROW}`,
    `${MAX_13_x_13_COLUMN}${MIN_ROW}`,
    `${MAX_13_x_13_COLUMN}${MAX_13_x_13_ROW}`,
];

export const STAR_POINTS_13_x_13 = [
    'D4','J4','G7', 'J10', 'D10',
];

export const CORNERS_19_x_19 = [
    `${MIN_COLUMN}${MIN_ROW}`,
    `${MIN_COLUMN}${MAX_19_x_19_ROW}`,
    `${MAX_19_x_19_COLUMN}${MIN_ROW}`,
    `${MAX_19_x_19_COLUMN}${MAX_19_x_19_ROW}`,
];

export const STAR_POINTS_19_x_19 = [
    'D4', 'D10', 'D16', 'J4', 'J10', 'J16', 'P4', 'P10', 'P16',
];

export const SIDES_9_x_9 = [
    ..._.map(_.range(2, 9), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 9), row => `${MAX_9_x_9_COLUMN}${row}`),
    ..._.map(UTILS.genGobanCharArray(8), col => `${col}9`),
    ..._.map(UTILS.genGobanCharArray(8), col => `${col}1`),
];

export const SIDES_13_x_13 = [
    ..._.map(_.range(2, 13), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 13), row => `${MAX_13_x_13_COLUMN}${row}`),
    ..._.map(UTILS.genGobanCharArray(12), col => `${col}13`),
    ..._.map(UTILS.genGobanCharArray(12), col => `${col}1`),
];

export const SIDES_19_x_19 = [
    ..._.map(_.range(2, 19), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 19), row => `${MAX_19_x_19_COLUMN}${row}`),
    ..._.map(UTILS.genGobanCharArray(18), col => `${col}19`),
    ..._.map(UTILS.genGobanCharArray(18), col => `${col}1`),
];

export const GRID_COORDINATES_9_x_9 =
    _.map(_.range(1, 10), row => {
        return _.map(UTILS.genGobanCharArray(9), col => `${col}${row}`);
    })
;

export const GRID_COORDINATES_13_x_13 =
    _.map(_.range(1, 14), row => {
        return _.map(UTILS.genGobanCharArray(13), col => `${col}${row}`);
    })
;

export const GRID_COORDINATES_19_x_19 =
    _.map(_.range(1, 20), row => {
        return _.map(UTILS.genGobanCharArray(19), col => `${col}${row}`);
    })
;