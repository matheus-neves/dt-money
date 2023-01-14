import { SummaryCard, SummaryContainer } from "./styles";

import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

export function Summary() {

  const theme = useTheme();
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price;
      acc.total += transaction.price;
    } else {
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
    }
    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <SummaryContainer as='section'>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color={theme["green-300"]}/>
        </header>
        <strong>{summary.income}</strong>  
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color={theme["red-300"]}/>
        </header>
        <strong>{summary.outcome}</strong>  
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{summary.total}</strong>  
      </SummaryCard>
    </SummaryContainer>
  )
}