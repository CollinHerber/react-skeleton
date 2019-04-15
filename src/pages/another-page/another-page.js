import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";

class AnotherPage extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    Ohh lookie another page!
                </div>
            </HashRouter>
        )
    }
}

export default AnotherPage