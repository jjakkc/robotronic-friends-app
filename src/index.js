import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robos } from './robots'
// var name = "John";

ReactDOM.render(<CardList robos={robos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
