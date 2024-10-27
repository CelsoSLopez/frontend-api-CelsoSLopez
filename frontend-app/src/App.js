import Welcome from './Welcome';
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDogImage] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error something went wrong with dog image', error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
    
      <div>
        <Welcome />
      </div>
      <h1>Click here for dog!</h1>
      <img id="dog" src={dog} alt="Random dog" style= {{
        maxwidth: '300px' , maxlength: '300px'
      }} />
      <button id="fetchButton" onClick={(fetchDogImage)} > Fetch Dog </button>
    </div>
  );
}

export default App;
