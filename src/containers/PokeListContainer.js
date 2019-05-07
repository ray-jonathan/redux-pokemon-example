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
    const pushedCards = (state.cards).filter(card => {
        switch(state.visibilityFilter){
            case "caught":
            return (card.isCaught);
            case "uncaught":
            return !(card.isCaught);
            default:
            return card;

        }
    });
    return{
        // react: redux
        cards: pushedCards,
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
// connect expects two args: "mapStateToProps" and "mapDispatchToProps"
const wireUpTheComponent = connect(mapStateToProps, mapDispatchToProps);
// alternative name: `makeComponentSmart`

const SmartPokeList =  wireUpTheComponent(PokeList);

export default SmartPokeList;