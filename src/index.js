import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CardContainer from "./components/cardContainer/CardContainer";


ReactDOM.render(
    <React.StrictMode>
        <CardContainer button="Ouvrir la modale 1 " title="Un premier titre" content="Modale basique"/>
        <CardContainer button="Ouvrir la modale 2 " title="Un autre titre" content="une autre Modale basique"/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
