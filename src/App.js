import './App.css';
import Header from './Components/Header/Header';
import Mensagem from './Components/Mensagem/Mensagem';
import CityList from './Components/CityList/CityList';
import CityForm from './Components/CityForm/CityForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <section className="container">
      <Mensagem cor="red">
        Quer conhecer melhor o seu destino? 
      </Mensagem>
      <CityList />
    </section>
    <section className="contact">
      <h2>Entre em Contato para mais Informações!</h2>
      <CityForm />
    </section>
    <Footer />
    </>
  );
}

export default App;
