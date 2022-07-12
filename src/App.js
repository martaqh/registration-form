import Header from "./components/Header/Header";
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import EmailAndPassword from './components/pages/EmailAndPassword/EmailAndPassword';
import PersonalData from './components/pages/PersonalData/PersonalData';
import Success from "./components/pages/Success/Success";

function App() {
  return (
    <div>
      <Header />
      <Container>
      <Routes>
                <Route path="/" element={<EmailAndPassword />} />
                <Route path="/registration-final" element={<PersonalData />} />
                <Route path="/success" element={<Success />} />        
        </Routes>
      </Container>
    </div>
  );
}

export default App;
