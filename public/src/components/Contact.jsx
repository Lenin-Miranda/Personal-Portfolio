import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Contact() {
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
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (form.name && form.email && form.message) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [form]);

  useEffect(() => {
    if (isError) setIsError(false);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const res = await fetch("api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Mensaje enviado ✅",
          icon: "success",
          timer: 1500,
        });
        setForm({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
        setIsError(false);
      } else {
        setIsError(true);
        Swal.fire({
          title: "Hubo un problema 😕",
          icon: "error",
          timer: 1500,
        });
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      Swal.fire({
        title: "Error al enviar.",
        icon: "error",
        timer: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact__container" data-aos="fade-up">
        <h2 className="contact__container-title">Contact</h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h2 className="contact__title">Let's get in touch :)</h2>
          <ul className="contact__form-list">
            <li className="contact__form-list-item">
              <label className="contact__form-list-label" htmlFor="name">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact__form-list-input"
                  id="name"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                />
              </label>
            </li>
            <li className="contact__form-list-item">
              <label className="contact__form-list-label" htmlFor="email">
                Email
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact__form-list-input"
                  id="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                />
              </label>
            </li>
            <li className="contact__form-list-item">
              <label className="contact__form-list-label" htmlFor="subject">
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="contact__form-list-input"
                  id="subject"
                  placeholder="Subject"
                  type="text"
                />
              </label>
            </li>
            <li className="contact__form-list-item">
              <label className="contact__form-list-label" htmlFor="message">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="contact__form-list-input contact__form-list-input_type_textarea"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  required
                />
              </label>
            </li>
          </ul>
          <button
            className="contact__form-button"
            type="submit"
            disabled={!isEnabled || isLoading || isSuccess}
            style={{
              backgroundColor: isError
                ? "#dc3545" // rojo
                : !isEnabled || isLoading || isSuccess
                ? "#ccc" // gris
                : "#1c7dde", // azul
              cursor:
                !isEnabled || isLoading || isSuccess
                  ? "not-allowed"
                  : "pointer",
              color: !isEnabled || isLoading || isSuccess ? "#000" : "#fff",
              transition: "0.3s ease",
            }}
          >
            {isLoading ? "Sending..." : isSuccess ? "Sent" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
