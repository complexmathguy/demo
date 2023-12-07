import React, { Component } from 'react'
import BrakingService from '../services/BrakingService'

class ViewBrakingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            braking: {}
        }
    }

    componentDidMount(){
        BrakingService.getBrakingById(this.state.id).then( res => {
            this.setState({braking: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Braking Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> serialNum:&emsp; </label>
                            <div> { this.state.braking.serialNum }</div>
                        </div>
                        <div className = "row">
                            <label> name:&emsp; </label>
                            <div> { this.state.braking.name }</div>
                        </div>
                        <div className = "row">
                            <label> Type:&emsp; </label>
                            <div> { this.state.braking.type }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBrakingComponent
