import { configureStore } from '@reduxjs/toolkit';
import transaction from './transactionSlice';

export default configureStore({
  reducer: {
    transaction: transaction,
  },
});