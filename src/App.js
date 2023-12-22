import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282c34';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Wrap" aboutText="About Warp" set={mode} toggleMode={toggleMode}/>
        <div className="container">
          <Switch>
              <Route exact path='/about'>
                <About set={mode}/> 
              </Route>
              <Route exact path='/'>
                <TextArea heading="Enter Text to Edit" set={mode}/>
              </Route>
          </Switch>  
        </div>

      </Router>

    </>
  );
}

export default App;
