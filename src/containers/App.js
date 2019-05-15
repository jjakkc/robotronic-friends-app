import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        this.setState({searchfield : event.target.value});
    }
    
    render(){
        const {robos, searchfield} = this.state;
        const filteredRobots = robos.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        console.log(filteredRobots);
        if(!robos.length){
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