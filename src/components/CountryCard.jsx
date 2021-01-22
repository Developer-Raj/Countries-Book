import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CountryCard extends Component {
  state = {  }
  render() { 
    return (
      <Link to={`/${this.props.code2}`}>
        <div className="card-wrapper">
          <div className="col">
            <div className="img-holder" style={{backgroundImage: `url(${this.props.flag})`}}></div>
            <div className="detail">
              <h3>{this.props.name}</h3>
              <h4>Capital: {this.props.capital}</h4>
              <h4>Code: {this.props.code2}</h4>
            </div>
          </div>
          <div className="col">
            <h5>Region: {this.props.region}</h5>
          </div>
        </div>
      </Link>
    );
  }
}
 
export default CountryCard;