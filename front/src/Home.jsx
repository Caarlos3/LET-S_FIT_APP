import React from 'react';
import './App.css';
import GymWeek from './components/Grafic';
import PersonalInfo from './components/PersonalInfo';
import Rutina from './components/Rutina';
import Ia from './components/Ia';

function Home() {
  return (
    <div>
     <PersonalInfo />
     <GymWeek />
     <Rutina />
     <Ia />
    </div>
  );
}

export default Home;
