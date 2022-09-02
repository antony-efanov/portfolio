import { FC, useContext } from "react";
import { AppContext } from "../../context";
import { Tech } from "../Tech";
import { IProjectProps } from "./types";

const Project: FC<IProjectProps> = ({
  className,
  demoLink,
  gitHub,
  title,
  imageSrc,
  description,
  techs,
}) => {
  const { language } = useContext(AppContext);
  return (
    <section className={className}>
      <div className="description">
        <h2 className="description__title">{title}</h2>
        <div className="techs">
          {techs.map((tech) => {
            return (
              <Tech
                name={tech}
                imgSrc={`${process.env.PUBLIC_URL}/assets/icons/${tech}.svg`}
              />
            );
          })}
        </div>
        <p className="description__text">{description}</p>
        <div className="description__buttons">
          <a href={demoLink} rel="noreferrer" target="_blank">
            <button className="button generalButton">
              {language === "ua" ? "Спробувати" : "Demo"}
            </button>
          </a>
          <a href={gitHub} rel="noreferrer" target="_blank">
            <button className="button generalButton">GitHub</button>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={imageSrc} alt="store" />
      </div>
    </section>
  );
};

export default Project;
