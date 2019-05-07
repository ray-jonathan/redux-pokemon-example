import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ///////////////////// STATE
import {createStore, combineReducers} from 'redux';
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
function catchCard(id){
    return {
        type : ACTION_CATCH,
        payload : {id,}
    };
}

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;
function setVisibilityAll(){
    return {
        type: ACTION_VISIBILITY_ALL
    };
}
function setVisibilityCaught(){
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
function setVisibilityUncaught(){
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




const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});

// ///////////////////// STORE
const store = createStore(rootReducer);








ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

