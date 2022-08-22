import { FC } from "react";

export const Aside: FC = () => {
  return (
    <section className="card aside">
      <img
        className="aside__image"
        src={`${process.env.PUBLIC_URL}/assets/hand_heart.png`}
        alt="thank_you"
      />
      <p className="aside__text">
        Дякую за приділений час. Давайте зробимо щось разом :)
      </p>
    </section>
  );
};
