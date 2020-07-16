import React from 'react'
import './Item.css'

function Item(props) {
  
    return (
        <div className="deets">
            <h1>{props.species}</h1>
            {props.image!==null ?<img src={props.image} /> :<h2>No Image</h2>}
            {props.comments!==null ? <p><strong>Comments:</strong> {props.comments}</p>: null}
            <h4>Genus: {props.genus}</h4>
            <h4>Good for Aquariums?: {props.aquarium}</h4>
        </div>
    )

}

export default Item

