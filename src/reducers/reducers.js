import { combineReducers } from 'redux';

const authorReducer = (currentState = [], action) => {
  switch (action.type) {
    case 'ADD_AUTHOR':
      return currentState.concat([action.data])
    case 'UPDATE_AUTHOR':
      return [
        ...currentState.filter(post => post.id !== action.data.id),
        Object.assign({}, action.data)
      ];
    default:
      return currentState;
  }
}

const categoryReducer = (currentState = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return currentState.concat([action.data])
    case 'UPDATE_CATEGORY':
      return [
        ...currentState.filter(post => post.id !== action.data.id),
        Object.assign({}, action.data)
      ];
    default:
      return currentState;
  }
}

const bookReducer = (currentState = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return currentState.concat([action.data])
    case 'UPDATE_BOOK':
      return [
        ...currentState.filter(post => post.id !== action.data.id),
        Object.assign({}, action.data)
      ];
    default:
      return currentState;
  }
}

const editModeReducer = (currentState = [], action) => {
  switch (action.type) {
    case 'EDIT_MODE':
    return [
      ...currentState.filter(post => post.id !== action.id),
      Object.assign({}, action)
    ];    
    default:
      return currentState;
  }
}

const rootReducer = combineReducers({ bookReducer, categoryReducer, authorReducer, editModeReducer });

export default rootReducer;