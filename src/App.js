import React, {Component} from 'react';
import CardList from './CardList';
import {robos} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robos : robos,
            searchfield : ''
        }
    }

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
                <h1>Robotronic Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robos={filteredRobots} />
            </div>
        );
    }
    
}

export default App;