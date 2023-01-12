import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer as="main">
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Site development</td>
              <td>
                <PriceHighlight variant="income">
                  USD 3,000
                </PriceHighlight>
              </td>
              <td>Sale</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width='50%'>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  - USD 59,00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>04/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}