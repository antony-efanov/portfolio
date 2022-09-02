import { useState } from "react";
import { AppContext } from "../../context";
import { Techs } from "../../enums";

import { Aside } from "../../components/Aside";
import { Git } from "../../components/Git";
import { Linked } from "../../components/Linked";
import { Main } from "../../components/Main";
import { MyProjects } from "../../components/MyProjects";
import { Skills } from "../../components/Skills";
import { Project } from "../../components/Project";
import { Contact } from "../../components/Contact";
import { CV } from "../../components/CV";

const MainPage = () => {
  const [theme, setTheme] = useState<string>("light");

  const [language, setLanguage] = useState("ua");

  const toggleTheme = (): void => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((curr) => (curr === "ua" ? "en" : "ua"));
  };
  return (
    <AppContext.Provider
      value={{ theme, language, toggleTheme, toggleLanguage }}
    >
      <div className="app" id={theme}>
        <div className="background"></div>
        <Main />
        <Skills />
        <Linked />
        <Git />
        <MyProjects />
        <Aside />
        <Project
          className={"card project projectStore"}
          demoLink="https://antony-efanov.github.io/e-commerce-ua-merch/"
          gitHub="https://github.com/antony-efanov/e-commerce-ua-merch"
          title="Магазин одягу"
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/merchUA.webp`}
          description="Реалізував функціонал інтернет-магазину (кошик, улюблене, історія замовлень, тощо). Дані про товари беруться з бекенду (сервіс MockAPI)"
          techs={[Techs.React, Techs.Redux, Techs.SCSS]}
        />
        <Project
          className={"card projectLeft projectQR"}
          demoLink="https://antony-efanov.github.io/qr-generator/"
          gitHub="https://github.com/antony-efanov/qr-generator"
          title="QR Code генератор"
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/QR.webp`}
          description="Створив простий і швидкий генератор QR-кодів за допомогою бібліотеки «qrcode». Можна змінювати колір та розмір QR-коду"
          techs={[Techs.React, Techs.Redux, Techs.SCSS]}
        />
        <Project
          className={"card project projectRocks"}
          demoLink="https://antony-efanov.github.io/Crypto-Rocks/"
          gitHub="https://github.com/antony-efanov/Crypto-Rocks"
          title="NFT Колекція"
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/RCP.webp`}
          description=""
          techs={[Techs.React, Techs.SCSS]}
        />
        <Contact />
        <CV />
      </div>
    </AppContext.Provider>
  );
};

export default MainPage;
