import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id
            , deets: null
            
        }
        
    }

    

    fetchDeets = () => {
        fetch(`${this.props.api}/species/${this.state.id}`)
        .then(res => {
           return res.json()
        })
        .then(res => {
            this.setState({
                deets: res
            })
        })
    }

    componentDidMount(){
        this.fetchDeets()
    }

    componentDidUpdate(){

        this.fetchDeets()
    }
    render() {
       if (this.state.deets!==null) {
        return (
            <div className="deets">
                <h1>{this.state.deets.data[0].Species}</h1>
                <img src={this.state.deets.data[0].image} />

                
            </div>
        )
        }
        else {return null}

    }
}

export default Item

