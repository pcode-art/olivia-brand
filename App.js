import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import Carousel from './mycomponents/Carousel';
import Shop from './mycomponents/Shop';
import Footer from './mycomponents/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
     <Header/>
      <Carousel/>
      <Shop/>
      <Footer/>
    </>
  );
};

export default App;
