import * as TYPES from '../constants/actions';

export const setLastPreviewStone = coordinate => ({
    type: TYPES.SET_LAST_PREVIEW_STONE,
    payload: {
        coordinate,
    },
});

export const incrementCaptures = ({ blackCaptures, whiteCaptures }) => ({
   type: TYPES.INCREMENT_CAPTURES,
   payload: {
       blackCaptures,
       whiteCaptures,
   }
});

export const koWarning = () => ({
    type: TYPES.KO_WARNING,
});

export const suicideWarning = () => ({
    type: TYPES.SUICIDE_WARNING,
});

export const resetWarnings = () => ({
    type: TYPES.RESET_WARNINGS,
});