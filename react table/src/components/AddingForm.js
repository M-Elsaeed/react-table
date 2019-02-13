import React, { Component } from "react";
class AddingForm extends Component {
    obj = {
        'name': "",
        'job': ""
    }
    render() {
        return (
            <tr>
                <td><input onChange={(e) => this.obj.name = e.target.value} type="text" placeholder="Enter Name"></input></td>
                <td><input onChange={(e) => this.obj.job = e.target.value} type="text" placeholder="Enter Job" ></input></td>
                <td></td>
                <td><button onClick={() => this.props.addPerson(JSON.parse(JSON.stringify(this.obj)))} >Add Person</button></td>
            </tr>
        );
    }
}
export default AddingForm