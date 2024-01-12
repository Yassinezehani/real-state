import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyCard from "./components/MyCard";

class App extends React.Component {
  state = {
    person: {
      fullName: "Robert De Niro",
      bio: "Robert Anthony De Niro is an American actor. Known for his collaborations with Martin Scorsese, he is considered to be one of the most influential actors of his generation.",
      imgSrc:
        "https://cdn.britannica.com/00/213300-050-ADF31CD9/American-actor-Robert-De-Niro-2019.jpg",
      profession: "Actor",
    },
  };
  toggleShow = () => {
    this.setState(() => ({
      show: !this.state.show,
    }));
  };

  render() {
    return (
      <>
        {this.state.show && <MyCard person={this.state.person} />}
        <button onClick={this.toggleShow}>toggle me!</button>
      </>
    );
  }
}

export default App;
