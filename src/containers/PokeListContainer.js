// A 'smart' container has three jobs
    // 1. grab stuff from redux
    // 2. grab a dumb component
    // 3. smash them together
import {connect} from 'react-redux';
import PokeList from '../components/PokeList';
import {catchCard} from '../actions-reducers';

// Need to:
    // tell it how to map redux state to react props
    // tell it how to map redux dispatch to react props


// translate from redux state to react props
const mapStateToProps = (state) => {
    // return a custom props object
    return{
        // react: redux
        cards: state.cards
    };
};

const mapDispatchToProps = (dispatch) => {
    // return a custom props object
    return{
        handleClick: (id) => {
            dispatch(catchCard(id));
        }
    };
};

// connect gives us a function that knows how to translate fro a dumb component
const wireUpTheComponent = connect(mapStateToProps, mapDispatchToProps);
// alternative name: `makeComponentSmart`

const SmartPokeList =  wireUpTheComponent(PokeList);

export default SmartPokeList;