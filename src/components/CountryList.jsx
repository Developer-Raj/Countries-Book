import React, { Component } from 'react';
// import Context from '../Context/Context';

class CountryList extends Component {
  render() { 
    return ( 
      <div className="country-list-wrapper">
        {this.props.children}
      </div>
    );
  }
}
 
export default CountryList;