import * as _ from 'lodash';
import * as TYPES from '../constants/actions';
import * as FLAGS from '../../game/flags';
import * as GAME_MATHS from '../../game/maths';
import {
    incrementCaptures,
    koWarning,
    suicideWarning,
} from '../actions/game';

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

export const setStone = ({ colCoordinate, rowCoordinate }) => {
    return (dispatch, getState) => {
        const { turnColor } = getState().game;
        const { mode } = getState().configuration;
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
        const isSuicide = _.isEqual(currentBoardState, nextBoardState);


        if (isSuicide) {
            dispatch(suicideWarning());
        } else if (isKo) {
            dispatch(koWarning());
        } else {
            const alteredStones = GAME_MATHS.determineAlteredstones({ currentBoardState, nextBoardState});
            const placedStone = `${colCoordinate}${rowCoordinate}`;

            dispatch(updateStones({
                alteredStones,
                nextBoardState,
                placedStone,
            }));

            alteredStones.delete(placedStone);

            dispatch(incrementCaptures({
                blackCaptures: color === FLAGS.STONE_BLACK ? alteredStones.size : 0,
                whiteCaptures: color === FLAGS.STONE_WHITE ? alteredStones.size : 0,
            }));
        }
    };
};