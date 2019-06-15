import * as _ from 'lodash';
import * as UTILS from './utils';

// yeehaw constants and pointers and strings oh my
export const gobanWidthToHeightRatio = Number(1.071428571428571);
export const gobanHeightToWidthRatio = Number(0.933333333333333);
export const gobanStoneDiameterToTileHeightRatio = Number(0.949367088607595);

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

export const MIN_COLUMN = 'a';
export const MIN_SIDE_COLUMN = 'b';
export const MIN_ROW = '1';

export const MAX_9_x_9_COLUMN = 'i';
export const MAX_EASTWARD_9_x_9_COLUMN_FOR_NORTH_SOUTH = 'h';
export const MAX_9_x_9_ROW    = '9';

export const MAX_13_x_13_COLUMN = 'm';
export const MAX_EASTWARD_13_x_13_COLUMN_FOR_NORTH_SOUTH = 'l';
export const MAX_13_x_13_ROW    = '13';

export const MAX_19_x_19_COLUMN = 's';
export const MAX_EASTWARD_19_x_19_COLUMN_FOR_NORTH_SOUTH = 'r';
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

export const CORNERS_13_x_13 = [
    `${MIN_COLUMN}${MIN_ROW}`,
    `${MIN_COLUMN}${MAX_13_x_13_ROW}`,
    `${MAX_13_x_13_COLUMN}${MIN_ROW}`,
    `${MAX_13_x_13_COLUMN}${MAX_13_x_13_ROW}`,
];

export const CORNERS_19_x_19 = [
    `${MIN_COLUMN}${MIN_ROW}`,
    `${MIN_COLUMN}${MAX_19_x_19_ROW}`,
    `${MAX_19_x_19_COLUMN}${MIN_ROW}`,
    `${MAX_19_x_19_COLUMN}${MAX_19_x_19_ROW}`,
];

export const SIDES_9_x_9 = [
    ..._.map(_.range(2, 9), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 9), row => `${MAX_9_x_9_COLUMN}${row}`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_9_x_9_COLUMN_FOR_NORTH_SOUTH), col => `${col}9`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_9_x_9_COLUMN_FOR_NORTH_SOUTH), col => `${col}1`),
];

export const SIDES_13_x_13 = [
    ..._.map(_.range(2, 13), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 13), row => `${MAX_13_x_13_COLUMN}${row}`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_13_x_13_COLUMN_FOR_NORTH_SOUTH), col => `${col}13`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_13_x_13_COLUMN_FOR_NORTH_SOUTH), col => `${col}1`),
];

export const SIDES_19_x_19 = [
    ..._.map(_.range(2, 19), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 19), row => `${MAX_19_x_19_COLUMN}${row}`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_19_x_19_COLUMN_FOR_NORTH_SOUTH), col => `${col}19`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_EASTWARD_19_x_19_COLUMN_FOR_NORTH_SOUTH), col => `${col}1`),
];