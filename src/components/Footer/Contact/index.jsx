import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2eoplc",
        "template_o4z45v4",
        form.current,
        "jMBa_EmXZ42679i24"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setNotification(true);

    setTimeout(() => {
      e.target.reset();
      setNotification(false);
    }, 2000);
  };

  return (
    <section id="contact" className="card contact">
      <h2 className="contact__title">Зв'язок</h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__form--name-email">
          <input
            className="contact__form--nameField contactField"
            type="text"
            name="user_name"
            placeholder="Ім'я"
            required
          />

          <input
            className="contact__form--emailField contactField"
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
          />
        </div>

        <textarea
          className="contact__form--messageField contactField"
          name="message"
          placeholder="Повідомлення"
          required
        />

        <button
          className="contact__form--sendButton generalButton"
          type="submit"
        >
          Відправити
        </button>
      </form>

      {notification && (
        <div className="sendNotification">
          <img
            className="sendNotification__icon"
            src={`${process.env.PUBLIC_URL}/assets/icons/check.svg`}
            alt=""
          />
          <p className="sendNotification__message">Повідомлення надіслано</p>
        </div>
      )}
    </section>
  );
};
