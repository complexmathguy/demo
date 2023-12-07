import React, { Component } from 'react'
import EngineService from '../services/EngineService';

class UpdateEngineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
                name: '',
                serialNum: '',
                type: ''
        }
        this.updateEngine = this.updateEngine.bind(this);

        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeserialNumHandler = this.changeserialNumHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
    }

    componentDidMount(){
        EngineService.getEngineById(this.state.id).then( (res) =>{
            let engine = res.data;
            this.setState({
                name: engine.name,
                serialNum: engine.serialNum,
                type: engine.type
            });
        });
    }

    updateEngine = (e) => {
        e.preventDefault();
        let engine = {
            engineId: this.state.id,
            name: this.state.name,
            serialNum: this.state.serialNum,
            type: this.state.type
        };
        console.log('engine => ' + JSON.stringify(engine));
        console.log('id => ' + JSON.stringify(this.state.id));
        EngineService.updateEngine(engine).then( res => {
            this.props.history.push('/engines');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Engine</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> name: </label>
                                            #formFields( $attribute, 'update')
                                            <label> serialNum: </label>
                                            #formFields( $attribute, 'update')
                                            <label> Type: </label>
                                            #formFields( $attribute, 'update')
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateEngine}>Save</button>
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

export default UpdateEngineComponent
