import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps, nextState);
        if(this.state.count !== nextState.count) return true
        return false;
    }

    updateCount = () => {
        // this.setState({count: this.state.count + 1})

        // recommended way to updating a state based on getting value from previous state
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render(){
        // Using this log to see how often Header is rendered
        console.log('CounterButton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default Header;