import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ///////////////////// STATE
import {createStore} from 'redux';
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
function cards(state=initialState, action={type: ''}){
    switch(action.type){
        case ACTION_CATCH: 
            // find the card, set it to "caught"
            const newState = {
                ...state,
                cards: state.cards.map(card => {
                    if(card.id === action.payload.id){
                        return {
                            ...card, 
                            isCaught: true
                        };
                    }
                    else{
                        return card;
                    }
                })
            };
            return newState;
        break;
        default:
            return state;
        break;
    }
}

function visibility(state=initialState, action={type: ''}){
    switch(action.type){
        case ACTION_VISIBILITY_ALL :
            const newState1 = {
                ...state,
                visibiltyFilter: VISIBILITY_ALL
            }
                return newState1;
        break;
        case ACTION_VISIBILITY_CAUGHT :
            const newState2 = {
                ...state,
                visibiltyFilter: VISIBILITY_CAUGHT
            }
            return newState2;
        break;
        case ACTION_VISIBILITY_UNCAUGHT :
            const newState3 = {
                ...state,
                visibiltyFilter: VISIBILITY_UNCAUGHT
            }
            return newState3;
        break;
        default:
            return state;
        break;
    }
}





// ///////////////////// STORE
const store = createStore(cards);








ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

