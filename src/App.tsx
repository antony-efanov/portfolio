import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

enum Techs {
  React = "React",
  Redux = "Redux",
  SCSS = "SCSS",
}

function App() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = (): void => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <div className="background"></div>
        <Header />
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
          imageSrc={`${process.env.PUBLIC_URL}/assets/projects/cryptoRocks.webp`}
          description=""
          techs={[Techs.React, Techs.SCSS]}
        />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
