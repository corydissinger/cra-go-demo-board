import * as FLAGS from '../../game/flags';
import * as ACTIONS from '../constants/actions';
import * as GAME_MATHS from "../../game/maths";

const initialState = {
    boardDimensions: {
        height: 0,
        width: 0,
    },
    canRender: false,
    configurationPanelShown: false,
    maxOffsets: {
        col: 8,
        row: 8,
    },
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
    lastPreviewStone: '',
};

const getDimensions = ({ mode, windowHeight, windowWidth }) => {
    const boardDimensions =
        GAME_MATHS.calculateBoardDimensions({
            windowHeight,
            windowWidth,
        });

    const tileDimensions =
        GAME_MATHS.calculateTileDimensions({
            mode,
            boardHeight: boardDimensions.height,
            boardWidth: boardDimensions.width,
        });

    return {
        boardDimensions,
        tileDimensions,
    }
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_LAST_PREVIEW_STONE: {
            return {
                ...state,
                lastPreviewStone: action.payload.coordinate,
            }
        }
        case ACTIONS.SET_MODE: {
            const { mode } = action.payload;

            const {
                boardDimensions,
                tileDimensions,
            } = getDimensions({
                mode,
                windowHeight: state.windowHeight,
                windowWidth: state.windowWidth,
            });

            let maxOffsets = {
                col: 8,
                row: 8,
            };

            if (mode === FLAGS.GAME_13_x_13) {
                maxOffsets.col = 12;
                maxOffsets.row = 12;
            } else if (mode === FLAGS.GAME_19_x_19) {
                maxOffsets.col = 18;
                maxOffsets.row = 18;
            }

            return {
                ...state,
                maxOffsets,
                mode,
                boardDimensions,
                tileDimensions,
                turnNumber: 1,
                blackCaptures: 0,
                whiteCaptures: 0,
            };
        } 
        case ACTIONS.UPDATE_STONES:
            return {
                ...state,
                turnColor: state.turnColor === FLAGS.TURN_BLACK ? FLAGS.TURN_WHITE : FLAGS.TURN_BLACK,
                turnNumber: state.turnNumber + 1,
            };
        case ACTIONS.SET_WINDOW_DIMENSIONS: {
            const {
                windowHeight,
                windowWidth,
            } = action.payload;

            const {
                boardDimensions,
                tileDimensions,
            } = getDimensions({
                mode: state.mode,
                windowHeight,
                windowWidth,
            });

            return {
                ...state,
                boardDimensions,
                tileDimensions,
                canRender: true,
                windowHeight,
                windowWidth,
            };
        } 
        case ACTIONS.TOGGLE_CONFIGURATION_PANEL: {
           return {
               ...state,
               configurationPanelShown: !state.configurationPanelShown,
           } 
        }
        default:
            return state;
    }
};

export default game;