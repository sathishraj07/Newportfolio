import "./Contact.scss";
import emailjs from "emailjs-com";
import { useState } from "react";
import Button from "../../Component/Button/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_1iycpqg", "template_f36m5id", form, "IPyUDunGgUkeuumQn")
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Something went wrong."));
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
          {/* <button type="submit">Send Message</button> */}
          <Button type="submit" buttonName="Send Message"/>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
