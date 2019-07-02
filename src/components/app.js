import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions.js';

class App extends React.Component {

  render() {
    return (
      <div onClick={() => this.props.changer()}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stuff: state.someStuff
});

const mapDispatchToProps = dispatch => ({
  changer: () => dispatch(actions.changer())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);