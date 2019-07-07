import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from './middleware/logger';
import boardReducer from './reducers/board';
import gameReducer from './reducers/game';
import configurationReducer from './reducers/configuration';

export default function configureStore(preloadedState) {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const rootReducer = combineReducers({
        board: boardReducer,
        game: gameReducer,
        configuration: configurationReducer,
    });

    return createStore(rootReducer, preloadedState, composedEnhancers);
}