import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from './middleware/logger';
import game from './reducers/game';
import board from './reducers/board';

// Seems lame, half baked copypasta from https://redux.js.org/recipes/structuring-reducers/beyond-combinereducers#sharing-data-between-slice-reducers
function rootReducer(state, action) {
    const stateWithGameConfiguration = game(state, action);
    const materializedBoard = board(stateWithGameConfiguration, action);
    return materializedBoard;
}

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}