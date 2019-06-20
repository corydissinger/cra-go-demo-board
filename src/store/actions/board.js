import * as TYPES from '../constants/actions';
import * as FLAGS from '../../game/flags';

const setStoneInternal = (colCoordinate, rowCoordinate, color) => ({
    type: TYPES.SET_STONE,
    payload: {
        colCoordinate,
        rowCoordinate,
        color,
    },
});

export const setStone = (colCoordinate, rowCoordinate) => {
    return (dispatch, getState) => {
        const { turnColor } = getState().game;
        const color = FLAGS.TURN_BLACK === turnColor ? FLAGS.STONE_BLACK : FLAGS.STONE_WHITE;

        dispatch(setStoneInternal(colCoordinate, rowCoordinate, color));
    };
};