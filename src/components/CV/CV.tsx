import { FC, useContext } from "react";
import Resume from "../../documents/Anton_Yefanov.pdf";
import Resume_en from "../../documents/Anton_Yefanov_en.pdf";
import { AppContext } from "../../context";

const CV: FC = () => {
  const { language } = useContext(AppContext);
  return (
    <section className="card cv">
      <a
        className="cv__link"
        href={language === "ua" ? Resume : Resume_en}
        rel="noreferrer"
        target="_blank"
      >
        {language === "ua" ? "Резюме" : "Resume"}
      </a>
    </section>
  );
};

export default CV;
