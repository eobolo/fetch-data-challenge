import './App.css';
import Header from './Header.js'
import Main from './Main.js';
import { useState } from 'react';

function App() {

  /*
    create two important state hooks
    called idValue and clickValue,
    these states helps manage the button
    that was clicked on buy setting the
    idValue to the event.target.id and 
    making the clickValue to be onclick
    at all times but the idValue determines
    which button would have it on re-rendering,
    check the header.js for the button clicked
    algorithm
  */
  const [idValue, setIdValue] = useState('');
  const [clickValue, setClickValue] = useState('');
  const [apiData, setApiData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const handleDivHeaderStylesAndApiCall = async (event=null, endpoint='') => {
    /*
      At first change the styles of the clicked div
      e.g users inorder to differentiate it from the
      others
      1. get all the header divs
      2. Then run a for each to know which one was clicked on
      3. change the classlist by adding the .onclick class in the
         header.css file
      
    */
    const allHeaderDivs = document.querySelectorAll(".header-div");
    allHeaderDivs.forEach((headerDiv) => {
      if (headerDiv === event.target) {
        setIdValue(event.target.id);
        setClickValue("onclick");
      } else {
        console.log("wasn't clicked");
      }
    })
    /*
      The second part of this function is to do the fetch api call
      now let us see the api call if it works
    */
    const API_URL = `https://jsonplaceholder.typicode.com/${endpoint}`;
    // send a GET method, which is the default of the fetch api
    // we need no options adhoc object since we're not doing
    // any idempotent requests e.g POST, PUT, DELETE, PATCH.
    // now we are going to make our fetch method look more
    // synchronous
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Data was not received");
      const data = await response.json();
      setApiData(data);
      setFetchError(null);
    } catch (error) {
      setFetchError(error.message);
    } 
  }
  console.log(apiData);
  return (
    <div className="App">
      <Header handleDivHeaderStylesAndApiCall={handleDivHeaderStylesAndApiCall} idValue={idValue} clickValue={clickValue} />
      <Main apiData={apiData} fetchError={fetchError} />
    </div>
  );
}

export default App;
