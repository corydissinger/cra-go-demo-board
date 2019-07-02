import * as TYPES from '../constants/actions';
import * as FLAGS from '../../game/flags';
import * as GAME_MATHS from '../../game/maths';
import * as _ from 'lodash';

const updateStones = ({
    alteredStones,
    nextBoardState,
    placedStone,
}) => ({
    type: TYPES.UPDATE_STONES,
    payload: {
        alteredStones,
        nextBoardState,
        placedStone,
    },
});

const koWarning = (colCoordinate, rowCoordinate, color) => ({
    type: TYPES.KO_WARNING,
    payload: {
        colCoordinate,
        rowCoordinate,
        color,
    }
});

export const setStone = ({ colCoordinate, rowCoordinate }) => {
    return (dispatch, getState) => {
        const {
            mode,
            turnColor,
        } = getState().game;

        const {
            currentBoardState,
            previousBoardState,
        } = getState().board;

        const color = FLAGS.TURN_BLACK === turnColor ? FLAGS.STONE_BLACK : FLAGS.STONE_WHITE;

        const nextBoardState = GAME_MATHS.removeDeadStones({
            existingStones: currentBoardState,
            mode,
            newStoneColor: color,
            newStoneColCoordinate: colCoordinate,
            newStoneRowCoordinate: rowCoordinate,
        });

        const isKo = _.isEqual(previousBoardState, nextBoardState);

        if (isKo) {
            dispatch(koWarning(colCoordinate, rowCoordinate, color));
        } else {
            // TEST THIS
            const alteredStones = GAME_MATHS.determineAlteredstones({ currentBoardState, nextBoardState});

            dispatch(updateStones({
                alteredStones,
                nextBoardState,
                placedStone: `${colCoordinate}${rowCoordinate}`,
            }));
        }
    };
};