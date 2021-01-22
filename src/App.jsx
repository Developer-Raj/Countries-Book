import React, { Component } from 'react';
import Context from './Context/Context';
import axios from 'axios';
import './App.css';
import UserInput from './components/UserInput';
import CountryList from './components/CountryList';
import CountryCard from './components/CountryCard';
import { BrowserRouter as Router } from 'react-router-dom';
import CountrySummary from './components/CountrySummary';

class App extends Component {
  state = { 
    data: null,
    userInput: null,
    setUserInput: null,
    getCountry: null,
  }
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then( res => this.setState({data: res.data}));
    this.setState({setUserInput: this.setUserInput, getCountry: this.getCountry});
  }
  setUserInput = (value) => {
    this.setState({userInput: value});
  }
  getCountry = (code=window.location.pathname.replace('/', "")) => {
    if(this.state.data !== null){
      return this.state.data.filter(country => country.code === code);
    }
  }
  renderCard = () => {
    if(this.state.data !== null){
      if(this.state.userInput === null){
        return this.state.data.map( country => {
          return (
            <CountryCard 
            flag={country.flag} 
            name={country.name}
            capital={country.capital}
            region={country.region}
            code2={country.alpha2Code}
          />
          )
        });
      }
    }
  }
  filterCountry = (country=this.state.userInput) => {
    if(country !== null){
      if(country !== ""){
        let renderCountry = this.state.data.filter(i => {
          let {name, region, currencies, alpha2Code} = i;
          if(name === country) {return i};
          if(name[0] === country) {return i};
          if(region === country) {return i};
          if(alpha2Code === country.toUpperCase()) {return i};
          
        });
        return renderCountry.map(country => {
          return (
            <CountryCard 
              flag={country.flag} 
              name={country.name}
              capital={country.capital}
              region={country.region}
              code2={country.alpha2Code}
            />
          )
        });
      } else {
        if(this.state.data !== null){
          return this.state.data.map( country => {
            return (
              <CountryCard 
                flag={country.flag}
                name={country.name}
                capital={country.capital}
                region={country.region}
                code2={country.alpha2Code}
              />
            )
          });
        }
      }
    } else {
      if(this.state.data !== null){
        return this.state.data.map( country => {
          return (
            <CountryCard 
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              region={country.region}
              code2={country.alpha2Code}
            />
          )
        });
      }
    }
  }
  render() { 
    return (
      <Context.Provider value={this.state}>
        <div className="grid-container">
          <UserInput filterCountry={this.filterCountry}/>
          <Router forceRefresh={true}>
            <CountrySummary data={this.state.data} userInput={this.state.userInput} getCountry={this.getCountry}/>
            <CountryList>
              {
                this.filterCountry()
              }
            </CountryList>
          </Router>
        </div>
      </Context.Provider>
    );
  }
}
 
export default App;