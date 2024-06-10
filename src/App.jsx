import './App.css';
import NavBar from './components/NavBar/NavBar';
import BootCampToggler from './components/BootCampToggler/BootCampToggler';
import CardSection from './components/CardsSection/CardSection';
import Registeration from './components/Registeration/Registeration';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <>
      <NavBar />
      <BootCampToggler />
      <CardSection />
      <Registeration />
      <FooterSection />
    </>
  );
}

export default App;
