import * as FLAGS from '../../game/flags';
import * as TYPES from '../constants/actions';
import * as GAME_MATHS from "../../game/maths";

const initialState = {
    boardDimensions: {
        height: 0,
        width: 0,
    },
    canRender: false,
    capturesPanelHeight: null,
    koWarning: false,
    suicideWarning: false,
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

const getDimensions = ({
    capturesPanelHeight,
    mode,
    windowHeight,
    windowWidth,
}) => {
    const boardDimensions =
        GAME_MATHS.calculateBoardDimensions({
            workingHeight: windowHeight - capturesPanelHeight,
            workingWidth: windowWidth,
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
        case TYPES.SET_LAST_PREVIEW_STONE: {
            return {
                ...state,
                lastPreviewStone: action.payload.coordinate,
            }
        }
        case TYPES.SET_MODE: {
            const { mode } = action.payload;
            const {
                capturesPanelHeight,
                windowHeight,
                windowWidth,
            } = state;

            const {
                boardDimensions,
                tileDimensions,
            } = getDimensions({
                capturesPanelHeight,
                mode,
                windowHeight,
                windowWidth,
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
        } case TYPES.UPDATE_STONES:
            return {
                ...state,
                turnColor: state.turnColor === FLAGS.TURN_BLACK ? FLAGS.TURN_WHITE : FLAGS.TURN_BLACK,
                turnNumber: state.turnNumber + 1,
            };
        case TYPES.SET_WINDOW_DIMENSIONS: {
            const {
                windowHeight,
                windowWidth,
            } = action.payload;

            const {
                capturesPanelHeight,
                mode,
            } = state;

            if (state.capturesPanelHeight) {
                const {
                    boardDimensions,
                    tileDimensions,
                } = getDimensions({
                    capturesPanelHeight,
                    mode,
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

            return {
                ...state,
                windowHeight,
                windowWidth,
            };
        } case TYPES.SET_CAPTURE_PANEL_HEIGHT: {
            const {
                mode,
                windowHeight,
                windowWidth,
            } = state;

            const { capturesPanelHeight } = action.payload;

            if (windowHeight && windowWidth) {
                const {
                    boardDimensions,
                    tileDimensions,
                } = getDimensions({
                    capturesPanelHeight,
                    mode,
                    windowHeight,
                    windowWidth,
                });

                return {
                    ...state,
                    boardDimensions,
                    capturesPanelHeight,
                    tileDimensions,
                    canRender: true,
                };
            }

            return {
                ...state,
                capturesPanelHeight,
            };
        }
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