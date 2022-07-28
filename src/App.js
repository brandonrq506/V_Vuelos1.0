import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer/';
import Router from './components/Helpers/Router';

const App = () => {
  console.log('App.js')

  return (
    <div className='App'>
      <Header />
      <Router />
      <Footer />
    </div >
  );
}

export default App;
