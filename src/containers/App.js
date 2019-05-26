import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        // state.<fromthereducer>.searchField
        searchField: state.searchRobots.searchField,
        // these are the states returned from reducer
        robos: state.requestRobots.robos,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // in the event that the search input changes we dispatch the action setSearchField to change our searchField to the changed input value
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // redux-thunk works on this dispatch because requestRobots() returns a function
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robos : []
    //         // searchfield : ''
    //     }
    // }

    // this is a method of Component
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robos : users}));
        this.props.onRequestRobots();
    }

    // previous onSearchChange(event) was changed because this keyword pointed to obj that called it instead of App.js
    // onSearchChange = (event) => {
    //     this.setState({searchfield : event.target.value});
    // }
    
    render(){
        // const {robos, searchfield} = this.state;
        // const { robos } = this.state;
        const { searchField, onSearchChange, robos, isPending } = this.props;
        const filteredRobots = robos.filter(robo => {
            return robo.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log(filteredRobots);
        if(isPending){
            return (
                <div className="tc">
                    <h1>Loading</h1><span>...</span>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robotronic Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robos={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);