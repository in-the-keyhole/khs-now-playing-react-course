import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
import Login from "./Login"

function App() {
    const Main = () =>
        <Switch>
            <Route exact path="/" component={Movies}  />
            <Route path="/about/:id" component={MovieDetail} />
            <Route path="/login" component={Login} />
        </Switch>

  return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
  );
}

export default App;
