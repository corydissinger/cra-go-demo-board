import * as FLAGS from '../../game/flags';
import * as TYPES from '../constants/actions';
import * as GAME_MATHS from '../../game/maths';

const initialState = {
    boardDimensions: {
        height: 0,
        width: 0,
    },
    canRender: false,
    capturesPanelHeight: null,
    maxOffsets: {
        col: 8,
        row: 8,
    },
    mode: FLAGS.GAME_9_x_9,
    tileDimensions: {
        height: 0,
        width: 0,
    },
    windowHeight: null,
    windowWidth: null,
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

const configuration = (state = initialState, action) => {
    switch (action.type) {
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
        }
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
        }
        case TYPES.SET_CAPTURE_PANEL_HEIGHT: {
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
        default:
            return state;
    }
};

export default configuration;