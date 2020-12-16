import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Category from './components/pages/Category';
import CategoryProducts from './components/pages/CategoryProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Container>
            <Row>
                <Col sm="2">
                    <Sidebar />
                </Col>
                <Col sm="10">
                  <Switch>
                    <Route path="/category" component={Category} />
                    <Route path="/category-products" component={CategoryProducts} />
                    <Route path="/" component={Home} />
                  </Switch>
                </Col>
            </Row>
        </Container>

      </div>
    </Router>
  );
}

export default App;
