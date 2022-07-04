import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Yes from './components/yes';
import No from './components/no';
import Options from './components/options';
import Main from './main';
import YesLast from './components/yesLastpage';
import NoLast from './components/noLastpage';
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return(
    <Router>
            <Routes>
                <Route path="/yes" element={<Yes/>}/>
                <Route path="/no" element={<No/>}/>
                <Route path="/" element={<Main />}/>
                <Route path="/options" element={<Options />}/>
                <Route path="/yeslast" element={<YesLast />}/>
                <Route path="/nolast" element={<NoLast />}/>
            </Routes>
      </Router>
  );
}

export default App;
