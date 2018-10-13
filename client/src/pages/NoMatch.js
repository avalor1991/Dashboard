import React, { Component } from "react";
import Main from "../components/Main";
import { Row, Col, Card } from "react-materialize";
import Navigation from "../components/Navbar";

class NoMatch extends Component {
  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    this.props.history.push("/login");
  };

  render() {
    return (
      <Main className="noMatch">
        <Navigation logout={this.logout} />
        <Row>
          <Col s={12}>
            <Card className="orange-text white center-align">
              <h1 className="center">Ouch! This page doesn't exist.</h1>
            </Card>
          </Col>
        </Row>
      </Main>
    );
  }
}

export default NoMatch;
