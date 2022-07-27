import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer/';
import Router from './components/Helpers/Router';

const App = () => {
  console.log('App.js')
  const isLogged = false;

  return (
    <div className='App'>
      <Header />
      <Router isLogged={isLogged} />
      <Footer />
    </div >
  );
}

export default App;
