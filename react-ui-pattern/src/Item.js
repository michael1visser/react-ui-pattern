import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            species: this.props.species
            , id: this.props.id
            , aquarium: this.props.aquarium
            , genus: this.props.Genus             
            , subFamily: this.props.Subfamily
            , comments: this.props.Comments
            , image: this.props.image
            
            
        }
        
    }

    
    render() {
    /* console.log(this.state.id)
    let currentIndex = this.props.species.indexOf(this.state.id)
    let currentFish = this.props.species[0]
    console.log(currentIndex)*/
    console.log(this.state.image)
       //if (this.state.id!==null) {
        return (
            <div className="deets">
                <h1>{this.props.species}</h1>
                {this.props.image!==null ?<img src={this.props.image} /> :<h2>No Image</h2>}
                {this.props.comments!==null ? <p>Comments: {this.props.comments}</p>: null}
                <h4>Genus: {this.props.genus}</h4>
                <h4>Good for Aquariums?: {this.props.aquarium}</h4>
            </div>
        )
       // }
       // else {return null}

    }
}

export default Item

