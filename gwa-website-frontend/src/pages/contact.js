import React from "react";
import "../App.scss";
import { useForm, ValidationError } from "@formspree/react";
import { getByDisplayValue } from "@testing-library/react";

function ContactForm() {
  return (
    <div className="field">
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/xjvjvzkz"
        method="POST"
      >
        <fieldset id="fs-frm-inputs">
          <label class="label is-normal" for="full-name">
            <div class="control has-icons-center">Full Name</div>
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required="Please enter your name"
          />
          <label class="label is-normal" for="email-address">
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="example@email.com"
            required="Please enter your email address"
          />
          <div class="field">
            <label class="label is-normal" for="message">
              Message
            </label>
            <div class="control">
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Let us know you're interested!"
                required="Please enter message"
              ></textarea>
            </div>
          
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
          <input type="text" name="_gotcha" class="honeypot" />
          </div>
        </fieldset>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <input class="button is-primary" type="submit" value="Submit" />
          </p>
        </div>
      </form>
    </div>
  );
}

function Contact() {
  return <ContactForm />;
}
export default Contact;


//fix styling of contact form. 