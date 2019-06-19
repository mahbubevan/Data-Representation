import React from 'react';
import './App.css';
import DataAPI from './components/api/DataAPI';

function App() {
  return (
    <div className="App">
      <h2 className="text-center">Data Table</h2>
      <DataAPI />
    </div>
  );
}

export default App;
