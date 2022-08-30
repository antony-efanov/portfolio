import { FC, useContext } from "react";
import { AppContext } from "../../App";

export const Aside: FC = () => {
  const { language } = useContext(AppContext);
  return (
    <section className="card aside">
      <img
        className="aside__image"
        src={`${process.env.PUBLIC_URL}/assets/hand_heart.png`}
        alt="thank_you"
      />
      <p className="aside__text">
        {language === "ua"
          ? "Дякую за приділений час. Давайте зробимо щось разом"
          : "Thank you for your time. Let's make something together"}
      </p>
    </section>
  );
};
