import { FC } from "react";

export const Linked: FC = () => {
  return (
    <section className="card linked">
      <a
        className="linked__link"
        href="https://www.linkedin.com/in/antonefanov/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="linked__icon"
          src={`${process.env.PUBLIC_URL}/assets/icons/LinkedInLogo.svg`}
          alt="LinkedInLogo"
        />
      </a>
    </section>
  );
};
