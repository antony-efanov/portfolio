import { FC, useContext } from "react";
import { AppContext } from "../../context";
import ReactSwitch from "react-switch";

import hand from "../../assets/hand.webp";
import Sun from "../../assets/icons/Sun.svg";
import Moon from "../../assets/icons/Moon.svg";
import UA from "../../assets/icons/UA.svg";
import GB from "../../assets/icons/GB.svg";

const Main: FC = () => {
  const { theme, toggleTheme, language, toggleLanguage } =
    useContext(AppContext);
  return (
    <section className="card main">
      <img className="main__hand" src={hand} alt="123" />
      <div className="main__about">
        <h1 className="main__about--title">React Developer</h1>
        <h2 className="main__about--name">
          {language === "ua" ? "Антон Єфанов" : "Anton Yefanov"}
        </h2>
        <p className="main__about--text">
          {language === "ua"
            ? "робить адаптивні mobile-first веб-сайти, як ось оцей."
            : "makes adaptive mobile-first web-sites, just like this one"}
        </p>
      </div>
      <a href="#contact">
        <button className="main__button generalButton">
          {language === "ua" ? "Зв'язатися" : "Contact"}
        </button>
      </a>
      <div className="themeSwitcher">
        <ReactSwitch
          aria-label="Theme-toggle"
          onColor="#ff9292"
          offColor="#bebebe"
          checkedIcon={false}
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <div className="iconWrapper">
              <img src={Sun} alt="sun" />
            </div>
          }
          checkedHandleIcon={
            <div className="iconWrapper">
              <img src={Moon} alt="moon" />
            </div>
          }
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </div>
      <div className="languageSwitcher">
        <ReactSwitch
          aria-label="Theme-toggle"
          onColor="#ff9292"
          offColor="#bebebe"
          checkedIcon={false}
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <div className="iconWrapper">
              <img src={UA} alt="UA_flag" />
            </div>
          }
          checkedHandleIcon={
            <div className="iconWrapper">
              <img src={GB} alt="GB_flag" />
            </div>
          }
          onChange={toggleLanguage}
          checked={language === "en"}
        />
      </div>
    </section>
  );
};

export default Main;
