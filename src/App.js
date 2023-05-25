import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from './Button'; 

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/games',
  params: {
    page: '0',
    per_page: '25'
  },
  headers: {
    'X-RapidAPI-Key': '4d73882bf5msh8772805fa93dc92p13371djsnf79699fec785',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

function App() {
  const [Scores, setScores] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setScores(response.data); // Update the state with the response data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <><div className="App">
      <header className="App-header">
        {/* Render your Scores state here */}
      </header>
    </div><div>
<Button/>
      </div></>
  );
}

export default App;
