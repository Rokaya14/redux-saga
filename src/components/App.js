import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
  state = {}
  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Your age : <span className="age">{this.props.age}</span>  </h2>
        <button className="mr-4 p-2 pr-4 pl-4 btn btn-success">Age Up</button>
        <button className="mr-4 p-2 pr-4 pl-4 btn btn-danger">Age Down</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age
  };
};
export default connect(mapStateToProps)(App);