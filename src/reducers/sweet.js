import uuid from 'uuid/v1';

// Actions
export const ADD = 'Sweet/ADD';

const defaultState = {
  sweets: []
}

// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); 
      return {
        ...state,
        sweets: [...state.sweets, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addSweet(sweet) {
  return {
    type: ADD,
    payload: sweet
  }
}