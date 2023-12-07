import React, { Component } from 'react'
import BrakingService from '../services/BrakingService';

class UpdateBrakingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
                serialNum: '',
                name: '',
                type: ''
        }
        this.updateBraking = this.updateBraking.bind(this);

        this.changeserialNumHandler = this.changeserialNumHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
    }

    componentDidMount(){
        BrakingService.getBrakingById(this.state.id).then( (res) =>{
            let braking = res.data;
            this.setState({
                serialNum: braking.serialNum,
                name: braking.name,
                type: braking.type
            });
        });
    }

    updateBraking = (e) => {
        e.preventDefault();
        let braking = {
            brakingId: this.state.id,
            serialNum: this.state.serialNum,
            name: this.state.name,
            type: this.state.type
        };
        console.log('braking => ' + JSON.stringify(braking));
        console.log('id => ' + JSON.stringify(this.state.id));
        BrakingService.updateBraking(braking).then( res => {
            this.props.history.push('/brakings');
        });
    }

    changeserialNumHandler= (event) => {
        this.setState({serialNum: event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    cancel(){
        this.props.history.push('/brakings');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Braking</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> serialNum: </label>
                                            #formFields( $attribute, 'update')
                                            <label> name: </label>
                                            #formFields( $attribute, 'update')
                                            <label> Type: </label>
                                            #formFields( $attribute, 'update')
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateBraking}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateBrakingComponent
