const reducer = (state, action) => {
    switch(action.type) {
        case "USER":
            return {
                ...state,
                user: action.payload
            }
        case "ADD":
            localStorage.setItem("transactions", JSON.stringify([action.payload, ...state.transactions]))
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "DELETE":
            let transaction = state.transactions.filter(t => t.id !== action.payload)
            localStorage.setItem("transactions", JSON.stringify(transaction))
            return {
                ...state,
                transactions: transaction 
            }
        default:
            return state
    }
}

export default reducer