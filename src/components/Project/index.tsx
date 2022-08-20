import { FC } from "react";
import { Tech } from "./Tech";

interface IProjectProps {
  className: string;
  demoLink: string;
  gitHub: string;
  title: string;
  imageSrc: string;
  description: string;
  techs: string[];
}

export const Project: FC<IProjectProps> = ({
  className,
  demoLink,
  gitHub,
  title,
  imageSrc,
  description,
  techs,
}) => {
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
            <button className="button generalButton">Спробувати</button>
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
