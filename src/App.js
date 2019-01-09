import React, { Component } from 'react';
import './App.css';
import Start from './Start';
import Contact from './Contact';
import Welcome from './Welcome';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background: #c0c0c0;
    color: #000;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`
class App extends Component {
  render() {
    return (

      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/welcome/:name' component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>

    );
  }
}

export default App;
