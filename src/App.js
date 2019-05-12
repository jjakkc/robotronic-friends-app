import React, {Component} from 'react';
import CardList from './CardList';
// import {robos} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

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
        //Avoid mutate state directly instead use this.setState()
        // this.state.searchfield = event.target.value; 
        this.setState({searchfield : event.target.value});
        //Moved into render() so we can render this in CardList
        // const filteredRobots = this.state.robos.filter(robo => {
        //     return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });
    }
    
    render(){
        const filteredRobots = this.state.robos.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredRobots);
        if(this.state.robos.length === 0){
            return (
                <div className="tc">
                    <h1>Loading</h1><span>...</span>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robotronic Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robos={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
    
}

export default App;