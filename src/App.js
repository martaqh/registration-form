import Header from "./components/Header/Header";
import PageTitle from './components/PageTitle/PageTitle'
import Container from './components/Container/Container'
import PageSubtitle from "./components/PageSubtitle/PageSubtitle";
import FormCard from "./components/FormCard/FormCard";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <PageTitle>Ahoy you!</PageTitle>
        <PageSubtitle>Care to register?</PageSubtitle>
        <FormCard />
      </Container>
    </div>
  );
}

export default App;
