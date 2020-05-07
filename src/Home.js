import React from 'react';
import { connect } from 'react-redux';

//================================================

const style = {
  padding: 50,
  backgroundColor: 'pink'
}

//================================================

const App = (props) => {
  const { specGreeting } = props;

  return (
    <div style={style}>
      This is the spec-child
      <br /><br />
      Greeting: {specGreeting}
    </div>
  )
}

//================================================

const mapStateToProps = ({ specReducer }) => specReducer;

export default connect(
  mapStateToProps
)(App);
