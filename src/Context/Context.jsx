import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

const initailState = {
    user: localStorage.getItem('user') || "",
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

export const GlobalState = createContext()

const Store = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initailState)

    const dispatchUser = (data) => {
        return dispatch({type: "USER", payload: data})
    }

    const addTransactions = (data) => {
        return dispatch({type: "ADD", payload: data})
    }
    const deleteTransactions = (data) => {
        return dispatch({type: "DELETE", payload: data})
    }
  return (
    <GlobalState.Provider value={{
        state,
        dispatchUser,
        addTransactions,
        deleteTransactions
    }}>
        {children}
    </GlobalState.Provider>
  )
}

export default Store