/* eslint-disable class-methods-use-this */
import React, { Component, useState } from 'react';
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const EmailPage = () => {
    const [email, setEmail] = useState();
    const handleChangeEmail = (e) => {
        setEmail(e);
    };
    const emailSubscriptions = (e) => {
    //     e.preventDefault();
        e.preventDefault();
        if (!email) {
            toast.error(`Please input the correct email address`);
            return;
        }
        console.log('---------------', process.env.EMAILJS_SERVICE_ID);
        emailjs
            .sendForm(
                "service_ddfm6tp", // process.env.EMAILJS_SERVICE_ID,
                "template_yiwstqn", // process.env.EMAILJS_TEMPLATE_ID,
                e.target,
                "user_wh2bsD3TedHThkU8puzW9", // process.env.EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Subscribing was successful.");
                },
                (error) => {
                    console.log(error.text);
                    toast.error(`Subscribing was failed: ${error.text}`);
                }
            );
        e.target.reset();
        setEmail();
    };

    return (
        <form className="email-contact-form" onSubmit={(e) => emailSubscriptions(e)}>
            {/* <h3>Join our email list for future updates.</h3> */}
            <input
                className="input-default"
                type="email"
                name="email"
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
                placeholder="Enter your email here..."
                style={{minWidth: "325px"}}
            />
            <input type="submit" value="Subscribe" className="button w-button" style={{margin: "10px"}}/>
        </form>
    );
};

export default EmailPage;
