import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ageUp, ageDown } from './actions'
class App extends Component {
  state = {}
  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Your age : <span className="age">{this.props.age}</span>  </h2>
        <button onClick={this.props.Age_Up} className="mr-4 p-2 pr-4 pl-4 btn btn-success">Age Up</button>
        <button onClick={this.props.Age_Down} className="mr-4 p-2 pr-4 pl-4 btn btn-danger">Age Down</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Age_Up: () => dispatch({ type: "age_up", value: 1 }),
    Age_Down: () => dispatch({ type: "age_down", value: 1 })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);