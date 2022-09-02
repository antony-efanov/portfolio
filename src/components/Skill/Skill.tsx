import { FC } from "react";
import { ISkillProps } from "./types";

const Skill: FC<ISkillProps> = ({ colorBG, title, imgSrc }) => {
  return (
    <div className="skill" style={{ backgroundColor: colorBG }}>
      <div className="skill__logo">
        <img src={imgSrc} alt="logo_React" />
      </div>
      <p className="skill__title">{title}</p>
    </div>
  );
};

export default Skill;
