import React from 'react'
import './Menu.css'

export default function Menu(props) {

    let species = props.species.map(val =>{
        return (
            {
                species: val.Species
                , id: val.SpecCode
            }
        )
    })

    console.log(species)

    return (
        <div className="Menu">
            <ul className="menu-list">
                {species.map((val, idx) => <li key={idx}>{val.species}</li>)}
            </ul>
        </div>
    )
}
