import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Transaction, TransactionContextType, TransactionsProviderProps } from './types';

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query
      }
    });
    setTransactions(response.data);
  }, [])

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}