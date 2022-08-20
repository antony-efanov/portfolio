import { FC } from "react";

interface ISkillProps {
  colorBG: string;
  title: string;
  imgSrc: string;
}

export const Skill: FC<ISkillProps> = ({ colorBG, title, imgSrc }) => {
  return (
    <div className="skill" style={{ backgroundColor: colorBG }}>
      <div className="skill__logo">
        <img src={imgSrc} alt="logo_React" />
      </div>
      <p className="skill__title">{title}</p>
    </div>
  );
};
