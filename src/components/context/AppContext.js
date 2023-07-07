import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses:[...state.expenses, action.payload], 
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload)
            }
        default:
            return state;    
    }
}

const initialState = {
    budget: 3000,
    expenses: [
        { id: 12, name: 'shoping', cost: 100 },
        { id: 34, name:'rent', cost: 800 },
        { id: 98, name: 'transportation', cost: 500 },
        { id: 76, name: 'food', cost: 500 },
    ],    
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        { props.children }
    </AppContext.Provider>)
};
