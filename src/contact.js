import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            sent: false
        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    //handle inputs
    handleFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    //handle inputs
    handleLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    //handle inputs
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    //handle inputs
    handleMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    submitForm(e) {
        e.preventDefault();

        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message
        }

        axios.post("/api/form", data)
        .then(res=>{
            this.setState({
                sent: true,

            }, this.resetForm())
        }).catch((err)=> {
            console.log("message not sent " + err);
        });
    }

    //reset initial data
    resetForm() {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });

        setTimeout(() =>{
            this.setState({
                sent: false
            })
        }, 3000);
    }

    render() {
        return (
            <section>
                {/*< !--body section-- >*/}

                {/*<!--white container-->*/}
                <div className="inlango-container inlango-container-light">
                    <h1 id="contact-form">Please send us this form</h1>
                        <form onSubmit={this.submitForm}>
                            <h2>* fields are mandatory</h2>
                            <div>
                                <label>First Name <span>*</span></label>
                                <input value={this.state.firstName} onChange={this.handleFirstName} type="text" name = "firstname" placeholder="First Name"/>
                            </div>
                            <div>
                                <label>Last Name <span>*</span></label>
                                <input value={this.state.lastName} onChange={this.handleLastName} type="text" name = "lastname" placeholder="Last Name"/>
                            </div>
                            <div>
                                <label>Email <span>*</span></label>
                                <input value={this.state.email} onChange={this.handleEmail} type="text" name = "email" placeholder="Email" required/>
                            </div>
                            <div>
                                <label>Message <span>*</span></label>
                                <textarea value={this.state.message} onChange={this.handleMessage} type="text" name = "message" placeholder="Your message..." cols="30" rows="10"></textarea>
                            </div>
                            <p className="inlango-form-message">Message has been sent</p>
                            <button className="btn-inlango" type="submit">Submit</button>
                        </form>
                </div>
            </section>
        );
    }
}