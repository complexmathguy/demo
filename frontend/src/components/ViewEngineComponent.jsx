import React, { Component } from 'react'
import EngineService from '../services/EngineService'

class ViewEngineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            engine: {}
        }
    }

    componentDidMount(){
        EngineService.getEngineById(this.state.id).then( res => {
            this.setState({engine: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Engine Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> name:&emsp; </label>
                            <div> { this.state.engine.name }</div>
                        </div>
                        <div className = "row">
                            <label> serialNum:&emsp; </label>
                            <div> { this.state.engine.serialNum }</div>
                        </div>
                        <div className = "row">
                            <label> Type:&emsp; </label>
                            <div> { this.state.engine.type }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEngineComponent
