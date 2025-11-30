import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Details from './components/Details/Details';
import Submit from './components/Submit';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/details' element={<Details />} />
        <Route path='/submit' element={<Submit />} />



      </Routes>

      <Footer />
    </div>
  );
}

export default App;
