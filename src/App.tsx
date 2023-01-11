import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
    </ThemeProvider>
  )
}