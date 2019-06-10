import * as TYPES from '../constants/actions';

export const setMode = mode => ({
    type: TYPES.SET_MODE,
    payload: {
        mode,
    },
});

export const setTurnNumber = turnNumber => ({
    type: TYPES.SET_TURN_NUMBER,
    payload: {
        turnNumber,
    },
});