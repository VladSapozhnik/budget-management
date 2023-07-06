import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    budget: 0,
    transactionDate: []
  },
  reducers: {
    addTransaction(state, action) {
      const date = Date.now();

      state.transactionDate.push({
        id: date,
        name: action.payload.name,
        sum: action.payload.sum,
        operation: action.payload.operation,
        date: date
      });
    },
    removeTransaction(state, action) {
        state.transactionDate = state.transactionDate.filter(item => {
          if (item.id === action.payload.id) {
            if (item.operation === 'add') {
              state.budget -= Number(item.sum);
            } else {
              state.budget += Number(item.sum);
            }
            
          }
          return item.id !== action.payload.id;
        })
    },
    management(state, action) {
      if (action.payload.operation === 'add') state.budget += Number(action.payload.sum);
      else state.budget = state.budget - Number(action.payload.sum);
    },
    defectTransaction(state, action) {
      state.transactionDate.forEach(item => {
        if (item.id === action.payload.id) {

          if (action.payload.operation === 'add' && action.payload.name === 'sum') {
            state.budget = (state.budget - Number(item.sum) + Number(action.payload.val));
          } else if (action.payload.operation === 'remove' && action.payload.name === 'sum') {
            state.budget = (state.budget + Number(item.sum) - Number(action.payload.val));
          }
        
          item[action.payload.name] = action.payload.val;
        }
        return item;
      })
    }
  }
})

export const {addTransaction, removeTransaction, management, defectTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;