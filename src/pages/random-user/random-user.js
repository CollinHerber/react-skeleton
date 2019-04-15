import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";

class RandomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {user:{}};
    }

    async componentWillMount() {
        let data = await fetch('https://randomuser.me/api/?results=1');
        let json = await data.json();
        this.setState({
            user: json.results[0]
        });
    }

    render() {
        const user = this.state.user;
        let name;

        if (user && user.name) {
            name = 'I fetched a random user: ' + user.name.first + ' ' + user.name.last
        }
        return (
            <HashRouter>
                <div className="text-capitalize">
                    {name}
                </div>
            </HashRouter>
        )
    }
}

export default RandomUser