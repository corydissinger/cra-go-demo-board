import * as FLAGS from '../../game/flags';
import * as ACTIONS from '../constants/actions';
import * as GAME_MATHS from "../../game/maths";

const initialState = {
    boardDimensions: {
        height: 0,
        width: 0,
    },
    canRender: false,
    mode: FLAGS.GAME_9_x_9,
    tileDimensions: {
        height: 0,
        width: 0,
    },
    turnColor: FLAGS.TURN_BLACK,
    turnNumber: 1,
    windowHeight: null,
    windowWidth: null,
    blackCaptures: 0,
    whiteCaptures: 0,
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            // Maybe there's an argument for returning a spread operator'd initialState
            return {
                ...state,
                mode: action.payload.mode,
                turnNumber: 1,
                blackCaptures: 0,
                whiteCaptures: 0,
            };
        case ACTIONS.UPDATE_STONES:
            return {
                ...state,
                turnColor: state.turnColor === FLAGS.TURN_BLACK ? FLAGS.TURN_WHITE : FLAGS.TURN_BLACK,
                turnNumber: state.turnNumber + 1,
            };
        case ACTIONS.SET_WINDOW_DIMENSIONS:
            const {
                windowHeight,
                windowWidth,
            } = action.payload;

            const boardDimensions =
                GAME_MATHS.calculateBoardDimensions({
                    windowHeight,
                    windowWidth,
                });

            const tileDimensions =
                GAME_MATHS.calculateTileDimensions({
                    mode: state.mode,
                    boardHeight: boardDimensions.height,
                    boardWidth: boardDimensions.width,
                });

            return {
                ...state,
                canRender: true,
                boardDimensions,
                tileDimensions,
                windowHeight,
                windowWidth,
            };
        default:
            return state;
    }
};

export default game;