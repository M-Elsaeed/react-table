import React, { Component } from "react";
class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preData: {
                'name': props.data.name,
                'job': props.data.job
            }
        };
    }
    updateComponent = () => {
        this.setState({
            preData: {
                'name': this.props.data.name,
                'job': this.props.data.job
            }
        });
    }
    changeName = (name) => {
        this.setState({
            preData: {
                ...this.state.preData, name
            }
        })
    }
    changeJob = (job) => {
        this.setState({
            preData: {
                ...this.state.preData, job
            }
        })
    }
    componentDidUpdate() {
        if(this.state.preData.name != this.props.data.name)
            this.updateComponent();

    }
    render() {
       
        return (
            <tr>
                <td><input value={this.state.preData.name} onChange={(e) => this.changeName(e.target.value)} type="text" placeholder="Enter Name"></input></td>
                <td><input value={this.state.preData.job} onChange={(e) => this.changeJob(e.target.value)} type="text" placeholder="Enter Job" ></input></td>
                <td></td>
                <td><button onClick={() => this.props.updatePerson(JSON.parse(JSON.stringify(this.state.preData)))} >Update Person</button></td>
            </tr>
        );
    }
}
export default UpdateForm