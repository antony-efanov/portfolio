import { FC } from "react";

interface IMyProps {
  className: string;
  demoLink: string;
  gitHub: string;
  title: string;
  imageSrc: string;
}

export const Project: FC<IMyProps> = ({
  className,
  demoLink,
  gitHub,
  title,
  imageSrc,
}) => {
  return (
    <section className={className}>
      <div className="description">
        <h2 className="description__title">{title}</h2>
        <div className="techs">
          <div className="techs__react tech">
            <img
              className="techs__react--icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/React.svg`}
              alt="react_logo"
            />
            <p className="techs__react--title">React</p>
          </div>
          <div className="techs__redux tech">
            <img
              className="techs__redux--icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/Redux.svg`}
              alt="redux_logo"
            />
            <p className="techs__redux--title">Redux</p>
          </div>
          <div className="techs__scss tech">
            <img
              className="techs__scss--icon"
              src={`${process.env.PUBLIC_URL}/assets/icons/SCSS.svg`}
              alt="scss_logo"
            />
            <p className="techs__scss--title">SCSS</p>
          </div>
        </div>
        <p className="description__text">
          Наразі у пошуку роботи на якій зможу не тільки конвертувати свої
          навички у крутий продукт, а і зростати як спеціаліст. Наразі у пошуку
          роботи на якій зм зростати як спеціаліст
        </p>
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
