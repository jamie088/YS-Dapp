/* eslint-disable class-methods-use-this */
import React, {Component} from 'react';
import emailjs from "emailjs-com";

// const EmailPage = () => {
class EmailPage extends Component{
    // const emailSubscriptions = (e) => {
    //     e.preventDefault();
    emailSubscriptions(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_88lph8i", // process.env.EMAILJS_SERVICE_ID,
                "template_m9bwnil", // process.env.EMAILJS_TEMPLATE_ID,
                e.target,
                "user_OozT18gmaXguY3xNjD4AD", // process.env.EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    window.alert('Subscribing was successful. Please check your email');
                },
                (error) => {
                    console.log(error.text);
                    window.alert(`Subscribing was failed: ${error.text}`);
                }
            );
        e.target.reset();
    };

    render() {
        return (
            <form className="email-contact-form" onSubmit={this.emailSubscriptions}>
                {/* <h3>Join our email list for future updates.</h3> */}
                <input
                    className="input-default"
                    type="email"
                    name="email"
                    placeholder="Enter your email here..."
                    style={{minWidth: "365px"}}
                />
                <input type="submit" value="Subscribe" className="button w-button" style={{margin: "10px"}}/>
            </form>
        );
    }
};

export default EmailPage;
