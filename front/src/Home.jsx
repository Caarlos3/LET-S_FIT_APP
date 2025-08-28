import React from 'react';
import './App.css';
import Grafic from './components/Grafic';
import PersonalInfo from './components/PersonalInfo';

function Home() {
  return (
    <div>
     <PersonalInfo />
     <Grafic />
    </div>
  );
}

export default Home;
