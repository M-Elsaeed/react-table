import React, { Component } from "react";
class Data extends Component {
    render() {
        const dataSet = this.props.people.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td><button onClick={() => this.props.showUpdateForm(index)}>Update</button></td>
                    <td><button onClick={() => this.props.deletePerson(index)}>Delete</button></td>
                </tr>
            )
        });
        return dataSet;
    }
}
export default Data