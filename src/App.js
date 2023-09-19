import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Africa from './components/Africa';
import Asia from './components/Asia';
import Europe from './components/Europe';
import Home from './components/All';
import NorthAmerica from './components/NorthAmerica';
import Oceania from './components/Oceania';
import SouthAmerica from './components/SouthAmerica';
import { useSetRecoilState } from 'recoil';
import { countryState } from './states/countryState';
import Quiz from './components/Quiz';

function App() {
  const setCountries = useSetRecoilState(countryState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  })

  return (
    <div className="App">
      <nav>
        <Link to="/">All</Link>
        <Link to="asia">Asia</Link>
        <Link to="Africa">Africa</Link>
        <Link to="Europe">Europe</Link>
        <Link to="NorthAmerica">North America</Link>
        <Link to="Oceania">Oceania</Link>
        <Link to="SouthAmerica">South America</Link>
        <Link to="Quiz">Quiz</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="asia" element={<Asia />} />
        <Route path="Africa" element={<Africa />} />
        <Route path="Europe" element={<Europe />} />
        <Route path="NorthAmerica" element={<NorthAmerica />} />
        <Route path="Oceania" element={<Oceania />} />
        <Route path="SouthAmerica" element={<SouthAmerica />} />
        <Route path="Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
