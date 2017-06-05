import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import AddTodo from '../../containers/AddTodo/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid bsClass="container" >
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6}>
              <AddTodo />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <VisibleTodoList />
              <Footer />
            </Col>
          </Row>
        </Grid>        
      </div>
    );
  }
}

export default App;
