import people from './people.json';

const initialState = {
    people, 
    detailView: false,
    personSelected: null,
}

//export default: using when there is a single export per module
export default (state = initialState, action) => {
    switch (action.type) {
        
        case 'SELECTED_PERSON':
            return {
                ...state, //...: spread/rest operator(ES6 feature) => make multiple parameters as one element 
                detailView: true,
                personSelected: action.selectId
            }
        
        case 'NONE_SELECTED':
                return {
                    ...state,
                    detailView: false,
                    personSelected: null
                }
            


        default:
            return state;        

    }
}