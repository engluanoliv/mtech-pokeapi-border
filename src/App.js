import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import api from './Services/api';
import axios from 'axios';
import { PokemonContext } from './Context/PokemonContext';
import CardList from './Components/Card/CardList';
import PageButton from './Components/Button';


function App() {

  //contextApi
  const { loading, setLoading, nextUrl, setNextUrl, prevUrl, setPrevUrl } = useContext(PokemonContext);

  //useState to save all Data and pass by props to components
  const [allData, setAllData] = useState([]);

  //First API
  useEffect(() => {
    const fetchData = async () => {
      const res = await api('pokemon');
      setAllData(res.data.results);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      setLoading(false);
    }
    fetchData();
  }, [])

  //Function Next Button
  const next = async () => {
    setLoading(true);
    let res = await axios(nextUrl);
    setAllData(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous)
    setLoading(false);
  }

  //Function Previous Button
  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let res = await axios(prevUrl);
    setAllData(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous)
    setLoading(false);
  }

  return (
    <div className='App'>

      {/* loading pokemon */}
      <div>
        <div>
          {loading ? <h4 style={{ margin: "0px" }}>Carregando Pokemóns...</h4> : (
            <>
              <h4 style={{ margin: "0px" }}>Pokemóns Carregados</h4>
            </>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div>
        <PageButton page={prev} name={'Anterior'} />
        <PageButton page={next} name={'Proxima'} />
      </div>

      {/* Cards */}
      <div className='mainContent'>
        <CardList pokemon={allData} />
      </div>

    </div>
  );
}

export default App;
