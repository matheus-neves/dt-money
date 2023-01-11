import { HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';
import { Container } from "../../styles/layout";

export function Header() {
  return (
    <Container as="header">
      <HeaderContent>
        <img src={logoImg} alt='' />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </Container>
  )
}