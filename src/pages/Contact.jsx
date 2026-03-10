import React from "react";
import ContactForm from "../components/Form";

function Contact() {
  return (
    <div
      id="Contact"
      className="w-screen h-fit bg-[#3B5388] rounded-t-[50px] flex justify-between py-24 px-10 -mb-5"
    >
      <div>RANDOM TEXT</div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
