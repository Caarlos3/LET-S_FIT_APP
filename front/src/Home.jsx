import React from 'react';
import './App.css';
import GymWeek from './components/Grafic';
import PersonalInfo from './components/PersonalInfo';
import Rutina from './components/Rutina';

function Home() {
  return (
    <div>
     <PersonalInfo />
     <GymWeek />
     <Rutina />
    </div>
  );
}

export default Home;
