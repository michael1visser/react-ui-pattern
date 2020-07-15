import React, { Component } from 'react'
import './Menu.css'

 function Menu(props) {

    let species = props.species.map(val =>{
        return (
            {
                species: val.Species
                , id: val.SpecCode
            }
        )
    })

 /* class Menu extends Component {
     constructor(props){
         super(props)
         this.state = {
             currentId: null
             , species: this.props.species.map(val =>{
                return (
                    {
                        species: val.Species
                        , id: val.SpecCode
                    }
                )
            })
         }
     } */

 

    //console.log(species)

    let sendID = (e) => {
        //console.log(e.target.id)
    //this.state.currentId = e.target.id
    props.callBack(e.target.id)
    }
    //render(){
    return (
        <div className="Menu">
            <ul className="menu-list">
                {species.map((val, idx) => <li key={idx} onClick={sendID} id={val.id}>{val.species}</li>)}
            </ul>
        </div>
    )
   // }
}

export default Menu