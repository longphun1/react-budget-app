import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">HOME</Link> | 
        <Link to="/add">CREATE</Link> |  
        <Link to="help">HELP</Link> | 
    </header>
);

export default Header;