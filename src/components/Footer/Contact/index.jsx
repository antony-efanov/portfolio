import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";

export const Contact = () => {
  const { language } = useContext(AppContext);
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
      <h2 className="contact__title">
        {language === "ua" ? "Зв'язок" : "Get in Touch"}
      </h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__form--name-email">
          <input
            className="contact__form--nameField contactField"
            type="text"
            name="user_name"
            placeholder={language === "ua" ? "Ім'я" : "Name"}
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
          placeholder={language === "ua" ? "Повідомлення" : "Message"}
          required
        />

        <button
          className="contact__form--sendButton generalButton"
          type="submit"
        >
          {language === "ua" ? "Відправити" : "Send"}
        </button>
      </form>

      {notification && (
        <div className="sendNotification">
          <img
            className="sendNotification__icon"
            src={`${process.env.PUBLIC_URL}/assets/icons/check.svg`}
            alt=""
          />
          <p className="sendNotification__message">
            {language === "ua" ? "Повідомлення надіслано" : "Message send"}
          </p>
        </div>
      )}
    </section>
  );
};
