import {combineReducers} from 'redux';
import initialCards from './base.json';

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards,
    visibiltyFilter: VISIBILITY_ALL
};
// the state is an object with a cards property which is an array of objects
// { cards: [{}, {}, {}, {}] }




// ///////////////////// ACTIONS + ACTION CREATORS
const ACTION_CATCH = 'catch';
export function catchCard(id){
    return {
        type : ACTION_CATCH,
        payload : {id,}
    };
}

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;
export function setVisibilityAll(){
    return {
        type: ACTION_VISIBILITY_ALL
    };
}
export function setVisibilityCaught(){
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
export function setVisibilityUncaught(){
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}

// ///////////////////// REDUCER
// // Each reducer should only manage one piece of state
// cards reducer manages an array
function cards(state=initialState.cards, action={type: ''}){
    switch(action.type){
        case ACTION_CATCH: 
            // find the card, set it to "caught"
            return state.map(card => {
                if(card.id === action.payload.id){
                    return {
                        ...card, 
                        isCaught: true
                    };
                }
                else{
                    return card;
                }
            });
            break;
        default:
            return state;
            break;
    }
}

// visibility reducer manages a string
function visibility(state=initialState.visibiltyFilter, action={type: ''}){
    switch(action.type){
        case ACTION_VISIBILITY_ALL :
            return VISIBILITY_ALL;
            break;
        case ACTION_VISIBILITY_CAUGHT :
            return VISIBILITY_CAUGHT;
            break;
        case ACTION_VISIBILITY_UNCAUGHT :
            return VISIBILITY_UNCAUGHT;
            break;
        default:
            return state;
            break;
    }
}




export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});