import * as actions from '../actions';

const initialState = {
    persons: []
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.ADD_PERSON):
            return {
                persons: state.persons.concat(action.newPerson)
            };
        case (actions.DELETE_PERSON):
            return {
                persons: state.persons.filter(person => person.id !== action.personId)
            };
        default:
            return state;
    }
};

export default personReducer;