import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Transaction, TransactionContextType, TransactionsProviderProps } from './types';

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async () => {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();
    setTransactions(data);
  }, [])

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}