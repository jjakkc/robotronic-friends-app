import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

// shouldComponentUpdate(nextProps, nextState){
//     return false;
// }

    render(){
        // Using this log to see how often Header is rendered
        // console.log('Header');
        return (
            <div>
                <h1 className="f1">Robotronic Friends</h1>
                <h4>Where Friends Are Made</h4>
                <CounterButton color={'red'} />
            </div>
        )
    }
}

export default Header;