import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import ExerciseList from './components/ExercisesList';
import EditExercises from './components/EditExercises';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br></br>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
