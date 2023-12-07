import React, { Component } from 'react'
import BrakingService from '../services/BrakingService';

class CreateBrakingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
                serialNum: '',
                name: '',
                type: ''
        }
        this.changeserialNumHandler = this.changeserialNumHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BrakingService.getBrakingById(this.state.id).then( (res) =>{
                let braking = res.data;
                this.setState({
                    serialNum: braking.serialNum,
                    name: braking.name,
                    type: braking.type
                });
            });
        }        
    }
    saveOrUpdateBraking = (e) => {
        e.preventDefault();
        let braking = {
                brakingId: this.state.id,
                serialNum: this.state.serialNum,
                name: this.state.name,
                type: this.state.type
            };
        console.log('braking => ' + JSON.stringify(braking));

        // step 5
        if(this.state.id === '_add'){
            braking.brakingId=''
            BrakingService.createBraking(braking).then(res =>{
                this.props.history.push('/brakings');
            });
        }else{
            BrakingService.updateBraking(braking).then( res => {
                this.props.history.push('/brakings');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Braking</h3>
        }else{
            return <h3 className="text-center">Update Braking</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> serialNum: </label>
                                            #formFields( $attribute, 'create')
                                            <label> name: </label>
                                            #formFields( $attribute, 'create')
                                            <label> Type: </label>
                                            #formFields( $attribute, 'create')
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBraking}>Save</button>
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

export default CreateBrakingComponent
