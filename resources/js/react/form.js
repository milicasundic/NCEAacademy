//Подключение модулей библиотеки react

import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div id={"contact"}>
                <h3><span>Looking for content you don’t see?</span> <span>Please let us know by filling out this form.</span></h3>
                <form onSubmit={this.handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor={"inputName"}>Your Name</label>
                        <input id={"inputName"} type="text" name={"name"} value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"inputEmail"}>Your Email</label>
                        <input id={"inputEmail"} type="text" name={"email"} value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"inputSubject"}>Subject</label>
                        <input id={"inputSubject"} type="text" name={"subject"} value={this.state.subject} onChange={this.handleChange} />
                    </div>
                    <div className={"form-group span-vertical-3"}>
                        <label htmlFor={"inputMessage"}>Your Message</label>
                        <textarea id={"inputMessage"} name={"message"}></textarea>
                    </div>
                    <div className={"form-button-holder"}>
                        <button className={"form-button"}>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('contact-wrapper')
);