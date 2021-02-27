import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: [],
  tokens: ""
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }
  const addToken = (token) => {
    dispatch({
      type: 'ADD_TOKEN',
      payload: token
    })
  }
  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      tokens: state.tokens,
      removeUser,
      addUser,
      addToken,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider