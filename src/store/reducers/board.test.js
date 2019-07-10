import * as _ from 'lodash';
import configureStore from '../configureStore';

import { setStone } from '../actions/board';

// Tried using redux-mock-store; seems like a complete waste, why bother?
const store = configureStore(undefined, true);

it('integration test setStone and boardReducer', async () => {
    await store.dispatch(setStone({
        colCoordinate: 'B',
        rowCoordinate: 1,
    }));

    await store.dispatch(setStone({
        colCoordinate: 'A',
        rowCoordinate: 1,
    }));

    await store.dispatch(setStone({
        colCoordinate: 'B',
        rowCoordinate: 2,
    }));

    console.log(store.getState());
});