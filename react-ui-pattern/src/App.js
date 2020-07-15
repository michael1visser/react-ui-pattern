import React, { Component } from "react";
import "./App.css";
import Menu from './Menu'
import Item from './Item'
import hamburger from "./images/hamburger-white.png";

let api = "https://fishbase.ropensci.org/"



class App extends Component {
  constructor(){
    super()
    this.state = {
      species: []
      , menuOpen: false 
      , onDisplay: null
    }
  }

  fetchSpecies = () =>{
    fetch(`${api}/species?limit=20`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      this.setState({
        species: res.data
       })
       console.log(this.state.species)
    })  
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  displaySpecies = (id) => {
    this.setState({
      onDisplay: id
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hamburger menu</h1>
          <img className="hamburger" src={hamburger} alt="menu icon" onClick={this.toggleMenu} />
        </header>
        {this.state.menuOpen ? 
        <Menu species={this.state.species} callBack={this.displaySpecies} />
        :null}
       {/*  {this.state.onDisplay!==null ?
        <Item id={this.species.onDisplay} />
        :null} */}
      </div>
    );
  }

  componentDidMount(){
    this.fetchSpecies()
  }
}

export default App;
