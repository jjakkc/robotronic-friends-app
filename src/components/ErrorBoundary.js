import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    render(){
        if(this.state.hasError){
            return <h1>Whoops. Something went wrong with this component.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;