import { createSelector } from 'reselect';
import * as FLAGS from '../../game/flags';

// This may have been pointless
const boardCoordinateSelector = (state, props) => state.board[`${props.colCoordinate}${props.rowCoordinate}`];

export const placedStoneSelector = createSelector(
    boardCoordinateSelector,
    placedStoneAtCoordinate => {
        if (!placedStoneAtCoordinate) {
            return FLAGS.STONE_NONE;
        }

        return placedStoneAtCoordinate;
    }
);