import * as FLAGS from '../../game/flags';
import * as TYPES from '../constants/actions';

const initialState = {
    koWarning: false,
    suicideWarning: false,
    turnColor: FLAGS.TURN_BLACK,
    turnNumber: 1,
    blackCaptures: 0,
    whiteCaptures: 0,
    lastPreviewStone: '',
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_LAST_PREVIEW_STONE: {
            return {
                ...state,
                lastPreviewStone: action.payload.coordinate,
            }
        } case TYPES.UPDATE_STONES:
            return {
                ...state,
                turnColor: state.turnColor === FLAGS.TURN_BLACK ? FLAGS.TURN_WHITE : FLAGS.TURN_BLACK,
                turnNumber: state.turnNumber + 1,
            };
        case TYPES.INCREMENT_CAPTURES: {
            const {
                blackCaptures,
                whiteCaptures,
            } = action.payload;
            
            return {
                ...state,
                blackCaptures: state.blackCaptures + blackCaptures,
                whiteCaptures: state.whiteCaptures + whiteCaptures,
            }
        }
        case TYPES.KO_WARNING:
            return {
                ...state,
                koWarning: true,
            };
        case TYPES.SUICIDE_WARNING:
            return {
                ...state,
                suicideWarning: true,
            };
        case TYPES.RESET_WARNINGS:
            return {
                ...state,
                koWarning: false,
                suicideWarning: false,
            };
        default:
            return state;
    }
};

export default game;