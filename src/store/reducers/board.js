import * as _ from 'lodash';

import * as FLAGS from '../constants/flags';

const initialState = {
    mode: FLAGS.GAME_9_x_9,
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return _.map(state, todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
};

export default board;