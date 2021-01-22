import React, { Component } from 'react';

class Loader extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="loader">
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
 
export default Loader;