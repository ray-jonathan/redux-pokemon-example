// A 'smart' container has three jobs
    // 1. grab stuff from redux
    // 2. grab a dumb component
    // 3. smash them together
    import {connect} from 'react-redux';
    import VisibilityButton from '../components/VisibilityButton';
    import {setVisibilityAll, setVisibilityCaught, setVisibilityUncaught} from '../actions-reducers';
    
    // Need to:
        // tell it how to map redux state to react props
        // tell it how to map redux dispatch to react props
    
    
    // translate from redux state to react props
    const mapStateToProps = (state) => {
        // return a custom props object
        return{
            // react: redux
            visibilityFilter: state.visibilityFilter,
            labels: ['all', 'caught', 'uncaught']
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        // return a custom props object
        return{
            handleClick: (label) => {
                switch(label){
                    case 'all':
                    return dispatch(setVisibilityAll());
                    case 'caught':
                    return dispatch(setVisibilityCaught());
                    case 'uncaught':
                    return dispatch(setVisibilityUncaught());
                    default:
                    return dispatch(setVisibilityAll());
                }
            }
        };
    };
    
    // connect gives us a function that knows how to translate fro a dumb component
    // connect expects two args: "mapStateToProps" and "mapDispatchToProps"
    const wireUpTheComponent = connect(mapStateToProps, mapDispatchToProps);
    // alternative name: `makeComponentSmart`
    
    const SmartVisibilityButton =  wireUpTheComponent(VisibilityButton);
    
    export default SmartVisibilityButton;