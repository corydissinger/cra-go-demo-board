import * as TYPES from '../constants/actions';

export const setStone = (color, coordinates) => ({
    type: TYPES.SET_STONE,
    payload: {
        color,
        coordinates,
    },
});