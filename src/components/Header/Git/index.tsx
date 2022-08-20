import { FC } from "react";

export const Git: FC = () => {
  return (
    <section className="card git">
      <a
        className="git__link"
        href="https://github.com/antony-efanov"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="git__icon"
          src={`${process.env.PUBLIC_URL}/assets/icons/GitHubLogo.svg`}
          alt="GitHubLogo"
        />
      </a>
    </section>
  );
};
