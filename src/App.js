import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";

function App() {
    const Main = () =>
        <Switch>
        <Route exact path="/" component={Movies}  />
        <Route path="/about/:id" component={MovieDetail} />
    </Switch>

  return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
  );
}

export default App;
