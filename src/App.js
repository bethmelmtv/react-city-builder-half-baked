import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('mountain view');
  const [slogans, setSlogans] = useState(['City of Excellence', 'the problem city']);
  // Track the sloganInput form state with a useState hook
  const [sloganForm, setSloganForm] = useState('');
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example

  function handleFormSubmit(e) {
    e.preventDefault();
    setSlogans([...slogans, sloganForm]);
  }


  return (
    <div className="App">
      <City skylineId = {skylineId} waterfrontId={waterfrontId} castleId= {castleId}/>
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful {cityName}!
      </h1>

      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput setCityName= {setCityName} />

        <section className='dropdowns'>
          <WaterfrontDropdown setWaterfrontId= {setWaterfrontId} />
          <SkylineDropdown setSkylineId= {setSkylineId} />
          <CastleDropdown setCastleId = {setCastleId} />
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
        </section>


        <SloganList slogans = {slogans} />
        <SloganForm handleFormSubmit= {handleFormSubmit} sloganForm= {sloganForm} setSloganForm= {setSloganForm} />
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
