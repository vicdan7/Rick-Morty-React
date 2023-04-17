import "./App.css";
import { useRef } from "react";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import { useState } from "react";
import MainContent from "./components/MainContent";
import PaginationResults from "./components/PaginationResults";
import header from "./assets/header.jpg";
import Loading from "./components/Loading";

const App = () => {
  const [inputValue, setinputValue] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);
  const [data, setData] = useState();
 

  const imputLocation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputValue(imputLocation.current.value);
    
  };

  return (
    <div className="App">
      <div className="header">
        <img className="img-header" src={header} alt="" />
        
        <h1 className="app-title">Rick & Morty</h1>
      </div>
      <form className="app-form" onSubmit={handleSubmit}>
        <input
          className="app-input"
          ref={imputLocation}
          type="text"
          placeholder="search from 1 to 126"
        />

        <button className="app-btn">Search</button>
      </form>
      {hasError ? (
        <h2 className="app-error">
          ERROR!!! YOU MUST PROVIDE AN ID FROM 1 TO 126
        </h2>
      ) : (
        <>
          <MainContent location={data} />
          <PaginationResults setData={setData} location={location} />
          <Loading type={location ? "circle" : ""} />
        </>
      )}
    </div>
  );
};

export default App;
