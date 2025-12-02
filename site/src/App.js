import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Details from './components/Details/Details';
import Submit from './components/Submit';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes basename="/">
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/details' element={<Details />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
