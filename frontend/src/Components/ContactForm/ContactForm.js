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
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <div className='contact-form-bg'>
                        <div className='contact-form-container'>
                            <div className='form-col-one'>
                                <div className="contact-form-title">Get In Touch</div>
                                <input type="text" className="input-field" placeholder="Name" name="name" />
                                <input type="text" className="input-field" placeholder="Mobile Number" name="number" />
                                <div className='inline-form-field'>
                                    <input type="text" className="input-field email" placeholder="Email" name="email" />
                                    <input type="text" className="input-field company" placeholder="Company" name="company" />
                                </div>
                                <input type="text" className="input-field enquiry enq" placeholder="Message" name="Message" />
                                <input type="text" className="input-field last-field" placeholder="" name="enquiry" />
                                <div className="submit-btn-control"><input type="submit" className="submit-btn" value="SEND" /></div>
                            </div>
                            <div className='form-col-two'>
                                <a href='/'><img src='./Images/HomeScreenImages/close.svg' alt='close-icon' className='close-icon' /></a>
                                <span className='con-num'>+91 90404 75000</span>
                                <span className='con-mail'>info@precisofashion.com</span>
                                <div className='con-add'>
                                    3rd Floor, 7/3A, LVR CENTER, Seshadri St, Venus Colony, Alwarpet,Chennai-600018,TamilNadu,
                                </div>
                                <span className='con-follow'>Follow Us</span>
                                <div className='social-icon'>
                                    <a href='/'><img src='./Images/HomeScreenImages/insta.svg' alt='insta-icon' className='insta-icon' /></a>
                                    <a href='/'><img src='./Images/HomeScreenImages/fb.svg' alt='fb-icon' className='fb-icon' /></a>
                                    <a href='/'><img src='./Images/HomeScreenImages/lin.svg' alt='linkedin-icon' className='lin-icon' /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </Form >
            </React.Fragment>
            // <Form onSubmit={this.handleSubmit}>
            //     <div className='contact-box'>
            //         <div className='contact-col-one'>
            //             <div className="contact-form-title">Contact Us</div>
            //             <input type="text" className="input-field" placeholder="Name" name="name" />
            //             <input type="text" className="input-field" placeholder="Company Name" name="cname" />
            //             <input type="text" className="input-field" placeholder="Mobile Number" name="number" />
            //             <input type="text" className="input-field" placeholder="Email" name="email" />
            //             <input type="text" className="input-field enquiry enq" placeholder="Enquiry" name="enquiry" />
            //             <input type="text" className="input-field enquiry" placeholder="" name="enquiry" />
            //             <input type="text" className="input-field enquiry " placeholder="" name="enquiry" />
            //             <div className="submit-btn-control"><input type="submit" className="submit-btn" value="submit" /></div>
            //         </div>
            //         <div className='contact-col-two'><img src="./Images/HomeScreenImages/eco1.png" alt="contact-form-img" className="contact-form-img" /></div>
            //     </div>
            // </Form >
        );
    }
}
// value = { this.state.value } onChange = { this.handleChange }
// value = { this.state.value } onChange = { this.handleChange }
// value = { this.state.value } onChange = { this.handleChange }
// value={this.state.value} onChange={this.handleChange}