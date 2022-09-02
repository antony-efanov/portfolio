import { FC } from "react";
import LinkedIn from "../../assets/icons/LinkedInLogo.svg";

const Linked: FC = () => {
  return (
    <section className="card linked">
      <a
        className="linked__link"
        href="https://www.linkedin.com/in/antonefanov/"
        rel="noreferrer"
        target="_blank"
      >
        <img className="linked__icon" src={LinkedIn} alt="LinkedInLogo" />
      </a>
    </section>
  );
};

export default Linked;
