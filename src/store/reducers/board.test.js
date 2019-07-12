import * as _ from 'lodash';
import configureStore from '../configureStore';

import { setStone } from '../actions/board';

// Tried using redux-mock-store; seems like a complete waste, why bother?
const store = configureStore(undefined, true);

// TODO: add a few test cases to show history works
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
        colCoordinate: 'A',
        rowCoordinate: 2,
    }));

    console.log(JSON.stringify(store.getState()));
});