import React, { Component } from 'react'
import './Menu.css'

 function Menu(props) {

    let species = props.species.map(val =>{
        return (
            {
                species: val.Species
                , id: val.SpecCode
                , dangerous: val.Dangerous
                , aquarium: val.Aquarium
                , genus: val.Genus             
                , subFamily: val.Subfamily
                , comments: val.Comments
                , image: val.image
                
            }
        )
    })

    let onClick = (e) =>{
        sendID(e)
        props.toggle()
    }

    let sendID = (e) => {
        let index = e.target.id
        props.callBack(species[index].species, species[index].id, species[index].aquarium, species[index].dangerous, species[index].comments, species[index].genus, species[index].subFamily, species[index].image)
    }
    return (
        <div className="Menu">
            <h1 onClick={props.toggle}>X</h1>
            <ul className="menu-list">
                {species.map((val, idx) => <li key={idx} onClick={onClick} id={idx}>{val.species}</li>)}
            </ul>
        </div>
    )
}

export default Menu