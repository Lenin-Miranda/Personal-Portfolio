import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSuccess) setTimeout(() => setIsSuccess(false), 1500);
  }, [isSuccess]);

  useEffect(() => {
    setIsEnabled(!!(form.name && form.email && form.message));
  }, [form]);

  useEffect(() => {
    if (isError) setIsError(false);
  }, [form]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://portfolio-backend-18x1.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      const result = await res.json();
      if (result.success) {
        Swal.fire({ title: "Message sent ✅", icon: "success", timer: 1500 });
        setForm({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
        setIsError(false);
      } else {
        setIsError(true);
        Swal.fire({
          title: "Something went wrong 😕",
          icon: "error",
          timer: 1500,
        });
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      Swal.fire({
        title: "Error sending message.",
        icon: "error",
        timer: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__info-title">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="contact__info-text">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <div className="contact__links">
            <a
              href="mailto:leninmiranda.dev@gmail.com"
              className="contact__link"
            >
              <MdEmail className="contact__link-icon" />
              <span>leninmiranda.dev@gmail.com</span>
            </a>
            <a
              href="https://github.com/Lenin-Miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FaGithub className="contact__link-icon" />
              <span>github.com/Lenin-Miranda</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lenin-miranda-0b74b4288/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FaLinkedin className="contact__link-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form
          className={`contact__form${isError ? " contact__form--error" : ""}${
            isSuccess ? " contact__form--success" : ""
          }`}
          onSubmit={handleSubmit}
          aria-live="polite"
        >
          <div className="contact__form-row">
            <label className="contact__label" htmlFor="name">
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__input"
                id="name"
                placeholder="Your name"
                type="text"
                required
              />
            </label>
            <label className="contact__label" htmlFor="email">
              Email
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact__input"
                id="email"
                placeholder="your@email.com"
                type="email"
                required
              />
            </label>
          </div>
          <label className="contact__label" htmlFor="subject">
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="contact__input"
              id="subject"
              placeholder="What's this about?"
              type="text"
            />
          </label>
          <label className="contact__label" htmlFor="message">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="contact__input contact__input--textarea"
              id="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </label>
          <div className="contact__form-footer">
            <button
              className="contact__btn"
              type="submit"
              disabled={!isEnabled || isLoading || isSuccess}
            >
              {isLoading ? "Sending..." : isSuccess ? "Sent ✓" : "Send Message"}
            </button>
            {isError && (
              <span className="contact__status-error">
                There was a problem sending your message.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
