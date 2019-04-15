import React, {Component} from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.props.user};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let user = this.state.user;
        user[name]= value;

        this.setState({
            user : user
        });
    }

    handleSubmit(event) {
        alert('User edit simulation complete');
        event.preventDefault();
    }

    renderInputs() {
        let inputs = [];
        for (let property of Object.entries(this.state.user)) {
            let key = property[0];
            let value = property[1];
            if (typeof(value) !== 'object') { //This will filter out any values that are nested objects from the API
                inputs.push(
                    <div className="col-4" key={key}>
                        <div className="form-group">
                            <label htmlFor={key}>{key}</label>
                            <input id="name" name={key} className="form-control text-capitalize" type="text"
                                   value={value} onChange={this.handleInputChange} placeholder={key} required/>
                        </div>
                    </div>
                )
            }

        }
        return inputs;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    {this.renderInputs()}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}

export default UserForm;