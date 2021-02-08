import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import './ContactForm.css';

export default class ContactForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { name: '' };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className='contact-box'>
                    <div className='contact-col-one'>
                        <div className="contact-form-title">Contact Us</div>
                        <input type="text" className="input-field" placeholder="Name" name="name" />
                        <input type="text" className="input-field" placeholder="Company Name" name="cname" />
                        <input type="text" className="input-field" placeholder="Mobile Number" name="number" />
                        <input type="text" className="input-field" placeholder="Email" name="email" />
                        <input type="text" className="input-field enquiry enq" placeholder="Enquiry" name="enquiry" />
                        <input type="text" className="input-field enquiry" placeholder="" name="enquiry" />
                        <input type="text" className="input-field enquiry " placeholder="" name="enquiry" />
                        <div className="submit-btn-control"><input type="submit" className="submit-btn" value="submit" /></div>
                    </div>
                    <div className='contact-col-two'><img src="./Images/HomeScreenImages/eco1.png" alt="contact-form-img" className="contact-form-img" /></div>
                </div>
            </Form >
        );
    }
}
// value = { this.state.value } onChange = { this.handleChange }
// value = { this.state.value } onChange = { this.handleChange }
// value = { this.state.value } onChange = { this.handleChange }
// value={this.state.value} onChange={this.handleChange}