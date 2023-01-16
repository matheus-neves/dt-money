import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { CreateTransactionInput, Transaction, TransactionContextType, TransactionsProviderProps } from './types';

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    });
    setTransactions(response.data);
  }, [])

  async function createTransaction(data: CreateTransactionInput) {

    const {
      description,
      price,
      category,
      type
    } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}