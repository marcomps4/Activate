
import './App.css';
import { NavBar } from './componentes/Navbar';
import {Banner} from './componentes/Banner';
import { Ponentes } from './componentes/Ponentes';
import { Programa } from './componentes/Programa';
import { Footer } from './componentes/Footer';
import {Acerca} from './componentes/Acercade'
import { Lugar } from './componentes/lugar';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Acerca/>
      <Ponentes />
      <Programa />
      <Lugar/>
      <Footer/>
      
    </div>
  );
};

export default App;
