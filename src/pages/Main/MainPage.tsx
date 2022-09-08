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
          title={language === "ua" ? "Магазин одягу" : "Clothes Store"}
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/merchUA.webp`}
          description={
            language === "ua"
              ? "Реалізував функціонал інтернет-магазину (кошик, улюблене, історія замовлень, тощо). Дані про товари беруться з бекенду (сервіс MockAPI)"
              : "Implemented the functionality of the online store (basket, favorites, order history, etc.). Product data is taken from the backend (MockAPI service)"
          }
          techs={[Techs.React, Techs.Router, Techs.SCSS]}
        />
        <Project
          className={"card projectLeft projectQR"}
          demoLink="https://antony-efanov.github.io/qr-generator/"
          gitHub="https://github.com/antony-efanov/qr-generator"
          title={language === "ua" ? "QR Code генератор" : "QR Code generator"}
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/QR.webp`}
          description={
            language === "ua"
              ? "Створив простий і швидкий генератор QR-кодів за допомогою бібліотеки «qrcode». Можна змінювати колір та розмір QR-коду"
              : "Created a simple and fast QR code generator using the «qrcode» library. You can change the color and size of the QR code"
          }
          techs={[Techs.React, Techs.Redux, Techs.TypeScript]}
        />
        <Project
          className={"card project projectRocks"}
          demoLink="https://antony-efanov.github.io/reinforced-concrete-products/"
          gitHub="https://github.com/antony-efanov/reinforced-concrete-products"
          title={
            language === "ua"
              ? "Лендінг для промислової компанії"
              : "Landing for an industrial company"
          }
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/RCP.webp`}
          description={
            language === "ua"
              ? "Зробив лендінг для компанії з виробництва залізобетонних виробів на React / SCSS."
              : "Made a landing page for a reinforced concrete products company on React / SCSS."
          }
          techs={[Techs.React, Techs.SCSS]}
        />
        <Contact />
        <CV />
      </div>
    </AppContext.Provider>
  );
};

export default MainPage;
