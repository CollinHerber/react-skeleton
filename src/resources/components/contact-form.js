import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' With an email of: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input id="email" name="email" className="form-control" type="Email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        )
    }
}

export default ContactForm;