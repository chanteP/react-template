export const reducerName = 'global';

const initialState = {
  version: '1.0.0',
};

const createActionName = name => `app/${reducerName}/${name}`;

// actions
export const UPDATE_VERSION = createActionName('UPDATE_VERSION');

// action creators
export const updateVersion = payload => ({ payload, type: UPDATE_VERSION });

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_VERSION:
      return { ...state, version: action.payload };
    default:
      return state;
  }
}
