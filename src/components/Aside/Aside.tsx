import { FC, useContext } from "react";
import { AppContext } from "../../context";
import HandHeart from "../../assets/hand_heart.webp";

const Aside: FC = () => {
  const { language } = useContext(AppContext);
  return (
    <section className="card aside">
      <img className="aside__image" src={HandHeart} alt="thank_you" />
      <p className="aside__text">
        {language === "ua"
          ? "Дякую за приділений час. Давайте зробимо щось разом"
          : "Thank you for your time. Let's make something together"}
      </p>
    </section>
  );
};

export default Aside;
