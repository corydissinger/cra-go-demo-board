import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from './middleware/logger';
import boardReducer from './reducers/board';
import gameReducer from './reducers/game';

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const rootReducer = combineReducers({
        board: boardReducer,
        game: gameReducer,
    });

    return createStore(rootReducer, preloadedState, composedEnhancers);
}