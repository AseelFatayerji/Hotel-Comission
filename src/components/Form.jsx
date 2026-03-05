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
      className="bg-white rounded-2xl flex flex-col justify-center p-10 gap-5 shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)]"
    >
      <div>
        Name
        <input
          type="text"
          name="name"
          className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
          required
        />
      </div>
      <div>
        Email
        <input
          type="email"
          name="email"
          className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
          required
        />
      </div>
      <div>
        Message
        <textarea
          name="message"
          className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
          required
        ></textarea>
      </div>
      <button type="submit" className="w-fit px-6 py-2 self-center text-lg rounded-lg border-2 border-[#87d551] custom-button md:text-xl">
        Contact
      </button>
      <span>{result}</span>
    </form>
  );
}
