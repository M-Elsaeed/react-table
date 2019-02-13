import React, { Component } from "react";
import Data from './Data'
import UpdateForm from './UpdateForm'
import AddingForm from './AddingForm'

class MyTable extends Component {
    state = {};
    addPerson = (item) => {
        console.log(item);
        let newPeople = [...this.state.people];
        newPeople.push(item);
        this.setState({
            people: [...newPeople]
        });
    }
    deletePerson = (index) => {
        let newPeople = [...this.state.people];
        newPeople.splice(index, 1)
        this.setState({
            people: [...newPeople],
            updateFormShown: false,
            updatingIndex: 0
        });
    }
    updatePerson = (person) => {
        let newArr = [...this.state.people];
        newArr[this.state.updatingIndex] = person;
        this.setState({
            people: [...newArr]
        });
    }
    showUpdateForm = (index) => {
        this.setState({
            updateFormShown: false,
            updatingIndex: index
        });
        this.setState({
            updateFormShown: true,
            updatingIndex: index
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {
                    'name': 'Charlie',
                    'job': 'Janitor'
                },
                {
                    'name': 'Mac',
                    'job': 'Bouncer'
                },
                {
                    'name': 'Dee',
                    'job': 'Aspring actress'
                },
                {
                    'name': 'Dennis',
                    'job': 'Bartender'
                }
            ],
            updateFormShown: false,
            updatingIndex: 0
        };

    }
    render() {
        return (
            <div className="container">
                <table>
                    <tbody>
                        <AddingForm addPerson={this.addPerson} />
                        {this.state.updateFormShown ? (<UpdateForm updatePerson={this.updatePerson} data={this.state.people[this.state.updatingIndex]} />) : undefined}
                        <Data showUpdateForm={this.showUpdateForm} people={this.state.people} deletePerson={this.deletePerson} />
                    </tbody>
                </table>
            </div >
        );
    }
}
export default MyTable;

