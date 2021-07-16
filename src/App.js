import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';

function App() {
  const [currentUser, setCurrentUser ] = useState({});

  const signup = user => {
    user.matches = [];

    fetch('http://localhost:3001/profiles', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( user )
    })
      .then( resp => resp.json())
      .then( userData => {
        setCurrentUser(userData);
        localStorage.setItem(userData.id);
      })
    
  }

  const logoutUser = () => {
    setCurrentUser({})
  }

  useEffect(() => {
    let userId = localStorage.getItem('user_id');
    if(userId) {
      fetch('http://localhost:3001/profiles/' + userId)
        .then(resp => resp.json())
        .then(userData => {
          setCurrentUser(userData);
        })
    }
  }, [])

  return (
    <Router>
      <NavBar logoutUser={logoutUser} />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route 
          exact path="/signup"
          render={ props => <Signup {...props} signup={signup} currentUser={currentUser} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
