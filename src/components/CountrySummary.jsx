import React, { Component } from 'react';
import Context from '../Context/Context';
import Loader from './Loader';

class CountrySummary extends Component {
  static contextType = Context;
  state = {
    data: null,
    filterLocation: null
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({data: this.context.data})
      let filter = this.state.data.filter(country => window.location.pathname.replace('/', "") === country.alpha2Code);
      this.setState({filterLocation: filter});
      console.log(filter)
    }, 3000)
  }
  returnFilteredData = () => {
    if(this.state.filterLocation !== null){
      let country = this.state.filterLocation[0];
      return (
        <React.Fragment>
          <div className="col">
            <div className="img-holder" style={{backgroundImage: `url(${country.flag})`}}></div>
          </div>
          <div className="col">
            <div className="col1">
              <h4>Country Name: <span>{country.name}</span></h4>
              <h4>Captial: <span>{country.capital}</span></h4>
              <h4>Region: <span>{country.region}</span></h4>
              <h4>Country Code: <span>{country.alpha2Code}, {country.alpha3Code}</span></h4>
              <h4>Calling Code: <span>{country.callingCodes[0]}</span></h4>
              <h4>Top Level Domain: <span>{country.topLevelDomain[0]}</span></h4>
            </div>
            <div className="col2">
              <h4>Sub Region: <span>{country.subregion}</span></h4>
              <h4>Population: <span>{country.population}</span></h4>
              <h4>Area: <span>{country.population}</span></h4>
              <h4>Denonym: <span>{country.denonym}</span></h4>
              <h4>Timezone: <span>{country.timezones[0]}</span></h4>
              <h4>Currency Code-Symbol: <span>{country.currencies[0].code}-{country.currencies[0].symbol}</span></h4>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <Loader />
      )
    }
  }
  render() { 
    return (
      <main>
        {
          this.returnFilteredData()
        }
      </main>
    );
  }
}
 
export default CountrySummary;