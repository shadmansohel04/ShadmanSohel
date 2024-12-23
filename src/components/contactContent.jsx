import { useState } from "react";
import "../styles/contactPage.css";

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const clicker = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("https://rateto-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          info:{
            email,
            message,
            subject: name,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Message Sent!")
    } else {
        alert("Message failed to send, please try again later")
      }
    } catch (error) {
        alert("Message failed to send, please try again later")
    }
  };

  return (
    <section id="pageSetup" className="contactPage">
      <h1 className="bigTitle">
        {"CONTACT".split("").map((letter, index) => (
          <span
            className="letterAnimation"
            key={`resume-${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <form onSubmit={clicker} className="contactForm">
        <h2>Shoot me a message!</h2>
        <div className="rightForm">
          <h3>Name</h3>
          <input
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h3>Email</h3>
          <input
            type="email"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3>Message</h3>
          <textarea
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
