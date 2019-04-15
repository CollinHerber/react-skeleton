import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserForm from "../../resources/components/user-form";

class RandomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {user:{}};
    }

    async componentDidMount() {
        let data = await fetch('https://randomuser.me/api/?results=1');
        let json = await data.json();
        this.setState({
            user: json.results[0]
        });
    }

    renderNameElement(user) {
        if (user && user.name) {
            return ('I fetched a random user: ' + user.name.first + ' ' + user.name.last)
        } else {
            return (<FontAwesomeIcon style={{fontSize: 48}} icon={faSpinner} spin/>)
        }
    }

    renderUserForm(user) {
        if (user && user.name) {
            return (<UserForm props={{user: user}}></UserForm>)
        }
    }

    render() {
        const user = this.state.user;
        return (
            <HashRouter>
                <div className="text-capitalize">
                    {this.renderNameElement(user)}
                    {this.renderUserForm(user)}
                </div>
            </HashRouter>
        )
    }
}

export default RandomUser