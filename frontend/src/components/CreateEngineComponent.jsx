import React, { Component } from 'react'
import EngineService from '../services/EngineService';

class CreateEngineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
                name: '',
                serialNum: '',
                type: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeserialNumHandler = this.changeserialNumHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EngineService.getEngineById(this.state.id).then( (res) =>{
                let engine = res.data;
                this.setState({
                    name: engine.name,
                    serialNum: engine.serialNum,
                    type: engine.type
                });
            });
        }        
    }
    saveOrUpdateEngine = (e) => {
        e.preventDefault();
        let engine = {
                engineId: this.state.id,
                name: this.state.name,
                serialNum: this.state.serialNum,
                type: this.state.type
            };
        console.log('engine => ' + JSON.stringify(engine));

        // step 5
        if(this.state.id === '_add'){
            engine.engineId=''
            EngineService.createEngine(engine).then(res =>{
                this.props.history.push('/engines');
            });
        }else{
            EngineService.updateEngine(engine).then( res => {
                this.props.history.push('/engines');
            });
        }
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeserialNumHandler= (event) => {
        this.setState({serialNum: event.target.value});
    }
    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    cancel(){
        this.props.history.push('/engines');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Engine</h3>
        }else{
            return <h3 className="text-center">Update Engine</h3>
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
                                            <label> name: </label>
                                            #formFields( $attribute, 'create')
                                            <label> serialNum: </label>
                                            #formFields( $attribute, 'create')
                                            <label> Type: </label>
                                            #formFields( $attribute, 'create')
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEngine}>Save</button>
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

export default CreateEngineComponent
