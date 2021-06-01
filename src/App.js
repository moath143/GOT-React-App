import React from 'react';
import './App.css';
import "./font/TrajanPro-Regular.otf";

import Search from './Search/Search'
import Result from './Result/Result'

import Gotcontext from './Gotcontext/Gotcontext';


function App() {
  return (
    <div className="App">
      <Gotcontext>
        <Search />
        <Result />
      </Gotcontext>
    </div>
  );
}

export default App;
