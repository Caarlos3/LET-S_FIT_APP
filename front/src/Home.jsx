import React from 'react';
import './App.css';
import Grafic from './components/Grafic';
import PersonalInfo from './components/PersonalInfo';
import Rutina from './components/Rutina';

function Home() {
  return (
    <div>
     <PersonalInfo />
     <Grafic />
     <Rutina />
    </div>
  );
}

export default Home;
