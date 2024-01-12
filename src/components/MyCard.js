import React, { Component } from "react";
import { Card } from "react-bootstrap/";

export default class MyCard extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        counter: this.state.counter + 1,
      }));
    }, 1000);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.props.person;

    return (
      <Card className="bg-dark text-white" style={{ width: "45rem" }}>
        <Card.Img src={imgSrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>{profession}</Card.Text>
          <Card.Text style={{ width: "60%" }}>{bio}</Card.Text>
        </Card.ImgOverlay>
        <Card.Text style={{ textAlign: "center" }}>
          Time since card mount: {this.state.counter} seconds
        </Card.Text>
      </Card>
    );
  }
}
