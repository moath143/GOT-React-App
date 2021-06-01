import React, { Component } from 'react';
import axios from 'axios'

export const Gotprovider = React.createContext()


class Gotcontext extends Component {
  addinfo = () => {};

  componentDidMount() {
    axios
      .get("data/got.json")
      .then((res) => {
        this.setState({
          characters: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  newActor = (actor) => {
    this.setState({
      result: [actor],
    });
  };
  state = {
    characters: [],
    addinfo: this.addinfo,
    newActor: this.newActor,
    result: [],
  };
  render() {
    return (
      <Gotprovider.Provider value={{ ...this.state }}>
            {this.props.children}
            {console.log("the result is ********************* " )}
        {console.log(this.state.result)}
      </Gotprovider.Provider>
    );
  }
}
 
export default Gotcontext;