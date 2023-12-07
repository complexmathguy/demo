import React, { Component } from 'react'
import BrakingService from '../services/BrakingService'

class ListBrakingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                brakings: []
        }
        this.addBraking = this.addBraking.bind(this);
        this.editBraking = this.editBraking.bind(this);
        this.deleteBraking = this.deleteBraking.bind(this);
    }

    deleteBraking(id){
        BrakingService.deleteBraking(id).then( res => {
            this.setState({brakings: this.state.brakings.filter(braking => braking.brakingId !== id)});
        });
    }
    viewBraking(id){
        this.props.history.push(`/view-braking/${id}`);
    }
    editBraking(id){
        this.props.history.push(`/add-braking/${id}`);
    }

    componentDidMount(){
        BrakingService.getBrakings().then((res) => {
            this.setState({ brakings: res.data});
        });
    }

    addBraking(){
        this.props.history.push('/add-braking/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Braking List</h2>
                 <div className = "row">
                    <button className="btn btn-primary btn-sm" onClick={this.addBraking}> Add Braking</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> SerialNum </th>
                                    <th> Name </th>
                                    <th> Type </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.brakings.map(
                                        braking => 
                                        <tr key = {braking.brakingId}>
                                             <td> { braking.serialNum } </td>
                                             <td> { braking.name } </td>
                                             <td> { braking.type } </td>
                                             <td>
                                                 <button onClick={ () => this.editBraking(braking.brakingId)} className="btn btn-info btn-sm">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBraking(braking.brakingId)} className="btn btn-danger btn-sm">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBraking(braking.brakingId)} className="btn btn-info btn-sm">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListBrakingComponent
