import React, {Component} from 'react';
import CardList from './CardList';
// import {robos} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robos : [],
            searchfield : ''
        }
    }

    // this is a method of Component
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robos : users}));
    }

    // previous onSearchChange(event) was changed because this keyword pointed to obj that called it instead of App.js
    onSearchChange = (event) => {
        // this.state.searchfield = event.target.value; Avoid mutate state directly instead use setState()
        this.setState({searchfield : event.target.value});
        // const filteredRobots = this.state.robos.filter(robo => {
        //     return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });
    }
    
    render(){
        const filteredRobots = this.state.robos.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredRobots);
        return (
            <div className="tc">
                <h1 className="f1">Robotronic Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robos={filteredRobots} />
            </div>
        );
    }
    
}

export default App;