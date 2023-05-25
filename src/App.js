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
  const [scores, setScores] = useState([]);
  const [prevDate, setPrevDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data)
        setScores(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          {scores.map((dataObj, index) => (
            <div key={index}>
              <p>{formatDate(dataObj.date)}</p>
              <p>Away Team: {dataObj.visitor_team.full_name} {dataObj.visitor_team_score}</p>
              <p>Home Team: {dataObj.home_team.full_name} {dataObj.home_team_score}</p>
              <Button />
            </div>
          ))}
        </header>
      </div>
    </>
  );
}

export default App;
