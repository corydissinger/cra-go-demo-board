import * as _ from 'lodash';
import * as UTILS from './utils';

export const GAME_9_x_9 = 'GAME_9_x_9';
export const GAME_13_x_13 = 'GAME_13_x_13';
export const GAME_19_x_19 = 'GAME_19_x_19';

export const MIN_COLUMN = 'a';
export const MIN_SIDE_COLUMN = 'b';
export const MIN_ROW = '1';

export const MAX_9_x_9_COLUMN = 'i';
export const MAX_9_x_9_SIDE_COLUMN = 'h';
export const MAX_9_x_9_ROW    = '9';

export const MAX_13_x_13_COLUMN = 'm';
export const MAX_13_x_13_SIDE_COLUMN = 'l';
export const MAX_13_x_13_ROW    = '13';

export const MAX_19_x_19_COLUMN = 't';
export const MAX_19_x_19_SIDE_COLUMN = 's';
export const MAX_19_x_19_ROW    = '19';

export const CORNERS_9_x_9 = [
    `${MIN_COLUMN}${MIN_ROW}`,
    `${MIN_COLUMN}${MAX_9_x_9_ROW}`,
    `${MAX_9_x_9_COLUMN}${MIN_ROW}`,
    `${MAX_9_x_9_COLUMN}${MAX_9_x_9_ROW}`,
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
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_9_x_9_SIDE_COLUMN), col => `${col}9`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_9_x_9_SIDE_COLUMN), col => `${col}1`),
];

export const SIDES_13_x_13 = [
    ..._.map(_.range(2, 13), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 13), row => `${MAX_13_x_13_COLUMN}${row}`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_13_x_13_SIDE_COLUMN), col => `${col}13`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_13_x_13_SIDE_COLUMN), col => `${col}1`),
];

export const SIDES_19_x_19 = [
    ..._.map(_.range(2, 19), row => `${MIN_COLUMN}${row}`),
    ..._.map(_.range(2, 19), row => `${MAX_19_x_19_COLUMN}${row}`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_19_x_19_SIDE_COLUMN), col => `${col}19`),
    ..._.map(UTILS.genCharArray(MIN_SIDE_COLUMN, MAX_19_x_19_SIDE_COLUMN), col => `${col}1`),
];