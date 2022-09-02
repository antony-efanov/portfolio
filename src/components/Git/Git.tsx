import { FC } from "react";
import GitHub from "../../assets/icons/GitHubLogo.svg";

const Git: FC = () => {
  return (
    <section className="card git">
      <a
        className="git__link"
        href="https://github.com/antony-efanov"
        rel="noreferrer"
        target="_blank"
      >
        <img className="git__icon" src={GitHub} alt="GitHubLogo" />
      </a>
    </section>
  );
};

export default Git;
