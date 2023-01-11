import { SummaryCard, SummaryContainer } from "./styles";

import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react'
import { useTheme } from "styled-components";

export function Summary() {

  const theme = useTheme();

  return (
    <SummaryContainer as='section'>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color={theme["green-300"]}/>
        </header>

        <strong>USD 17,400.00</strong>  
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color={theme["red-300"]}/>
        </header>

        <strong>USD 17,400.00</strong>  
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>USD 17,400.00</strong>  
      </SummaryCard>
    </SummaryContainer>
  )
}