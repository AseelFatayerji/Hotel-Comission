import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "5456b495-3f0a-456c-bc9c-079526f1ea5f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl flex flex-col justify-center px-10 py-5 gap-5 shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)]"
    >
      <div>
        <fieldset className="text-start border-2 text-neutral-500 border-neutral-500 rounded-lg p-2">
          <legend className="px-1">Name</legend>
          <input
            name="name"
            type="text"
            className="w-full h-full outline-none text-lg"
            placeholder="Enter your name"
            aria-label="name input for contact form"
            required
          />
        </fieldset>
      </div>
      <div>
        <fieldset className="text-start border-2 text-neutral-500 border-neutral-500 rounded-lg p-2">
          <legend className="px-1">Email</legend>
          <input
            name="email"
            type="email"
            className="w-full h-full outline-none text-lg"
            placeholder="Enter your email"
            aria-label="email input for contact from"
            required
          />
        </fieldset>
      </div>
      <div>
        <fieldset className="text-start border-2 text-neutral-500 border-neutral-500 rounded-lg p-2">
          <legend className="px-1">Message</legend>
          <textarea
            name="messga"
            className="w-full h-full outline-none text-lg"
            placeholder="Enter your message"
            aria-label="message input for contact form"
            required
          />
        </fieldset>
      </div>
      <button
        type="submit"
        className="w-fit px-6 py-2 self-center text-lg rounded-lg border-2 border-[#7BC24A] custom-button md:text-xl"
        aria-label="submit button for contact form"
      >
        Contact
      </button>
      <span>{result}</span>
    </form>
  );
}
