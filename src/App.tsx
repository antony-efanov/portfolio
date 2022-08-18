import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Project
        className={"card project projectStore"}
        demoLink="https://antony-efanov.github.io/e-commerce-ua-merch/"
        gitHub="https://github.com/antony-efanov/e-commerce-ua-merch"
        title="Магазин одягу"
        imageSrc={`${process.env.PUBLIC_URL}/assets/projects/merchUA.webp`}
      />
      <Project
        className={"card project projectQR"}
        demoLink="https://antony-efanov.github.io/qr-generator/"
        gitHub="https://github.com/antony-efanov/qr-generator"
        title="QR Code генератор"
        imageSrc={`${process.env.PUBLIC_URL}/assets/projects/QR.webp`}
      />
      <Project
        className={"card project projectRocks"}
        demoLink="https://antony-efanov.github.io/Crypto-Rocks/"
        gitHub="https://github.com/antony-efanov/Crypto-Rocks"
        title="NFT Колекція"
        imageSrc={`${process.env.PUBLIC_URL}/assets/projects/cryptoRocks.webp`}
      />
      <Footer />
    </div>
  );
}

export default App;
