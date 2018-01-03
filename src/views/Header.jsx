import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return(
            <div>
                <header>
                    <h1>TodoApp</h1>
                </header>
                <nav id="top-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/complete">Completed Task</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}