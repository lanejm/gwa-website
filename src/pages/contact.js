import React from "react";
import "../App.scss";
// import { useForm, ValidationError } from "@formspree/react";
// import { getByDisplayValue } from "@testing-library/react";

function ContactForm() {
  return (
    <div class="hero-body">
      <div class="container has-text-centered">
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/xjvjvzkz"
          method="POST"
        >
          <div class="columns is-8 is-variable ">
            <div class="column is-two-thirds has-text-left">
              <h1 class="title is-1">Contact Us</h1>
              <p class="is-size-4">
                Would you like more information? Fill out the form and we'll
                reach out to you shortly! We look forward to hearing from you!
              </p>
            </div>
            <div class="column is-one-third has-text-left">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="First and Last" required="Please enter your name" />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input is-medium" type="email" name="_replyto" placeholder="example@email.com" required="Please enter a valid email address" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea is-medium" name="message" id="message" required="Please enter message"></textarea>
                </div>
              </div>
              <input 
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
              />
              <div class="control">
                <button
                  type="submit"
                  class="button is-link is-fullwidth has-text-weight-medium is-medium"
                  value="Submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}

function Contact() {
  return <ContactForm />;
}
export default Contact;

