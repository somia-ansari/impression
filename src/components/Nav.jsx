import React, { Component } from 'react';
import icon from '../icon.png'

import './Nav.css';

export default class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                <nav>
                    <ul>
                        <li><img src={icon} alt="icon" /></li>
                        <a className="link"
                            href="https://test-hosting-16d6e.firebaseapp.com/">

                            <li>Home</li>

                        </a>

                        <a className="link"
                            href="https://github.com/somia-ansari/cartoonify-yourself/star">

                            <li>Like my Repo</li>

                        </a>
                        <a className="link"
                            href="https://github.com/somia-ansari"
                            target="_blank"
                            rel="noopener noreferrer">

                            <li>Follow me</li>

                        </a>
                    </ul>
                </nav>
            </div>
        )
    }
}
