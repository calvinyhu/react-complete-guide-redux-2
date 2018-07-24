import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions';

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (newPerson) => dispatch({type: actions.ADD_PERSON, newPerson: newPerson}),
        onPersonDeleted: (personId) => dispatch({type: actions.DELETE_PERSON, personId: personId})
    };
};

class Persons extends Component {
    createPerson = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        };
        return newPerson;
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={(name, age) => this.props.onPersonAdded(this.createPerson(name, age))} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

// We pass @mapStateToProps and @mapDispatchToProps to @connect.
// @connect returns a function.
// We pass @Persons to this new function and execute it.
export default connect(mapStateToProps, mapDispatchToProps)(Persons);