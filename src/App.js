import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />

      <main className='name'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
