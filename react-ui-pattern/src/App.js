import React, { Component, isValidElement } from "react";
import "./App.css";
import Menu from './Menu'
import Item from './Item'
import hamburger from "./images/hamburger-white.png"

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
    })  
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  displaySpecies = (species, id, aquarium, dangerous, comments, genus, subFamily, image) => {
    this.setState({
      onDisplay: {
        species: species
        , id: id
        , aquarium: aquarium
        , dangerous: dangerous
        , comments: comments
        , genus: genus
        , subFamily: subFamily
        , image: image
      }
    })
  }

  render() {
 

    return (
      <div className="App">
         <header className="App-header">
          <h1>Hamburger menu</h1>
          <img className="hamburger" src={hamburger} alt="menu icon" onClick={this.toggleMenu} />
        
        {this.state.menuOpen ? 
        <Menu species={this.state.species} callBack={this.displaySpecies} toggle={this.toggleMenu} />
        :null}
        </header>
        <div className="content">
          {this.state.onDisplay!==null ?
          <Item species={this.state.onDisplay.species} id={this.state.onDisplay.id} aquarium={this.state.onDisplay.aquarium} dangerous={this.state.onDisplay.dangerous} comments={this.state.onDisplay.comments} genus={this.state.onDisplay.genus} subFamily={this.state.onDisplay.subFamily} image={this.state.onDisplay.image}/>
          :<h1>Click on the Hamburger menu and select a fish to see its details.</h1>}
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.fetchSpecies()
  }
  
}

export default App;
