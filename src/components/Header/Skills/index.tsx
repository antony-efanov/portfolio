import { FC } from "react";
import { Skill } from "./Skill";

export const Skills: FC = () => {
  return (
    <section className="card skills">
      <h3 className="skills__title">Навички</h3>
      <div className="skillList">
        <Skill
          colorBG="hsl(177, 58%, 77%)"
          title="React"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/React.svg`}
        />
        <Skill
          colorBG="hsl(266, 58%, 77%)"
          title="Redux"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/Redux.svg`}
        />
        <Skill
          colorBG="hsl(66, 58%, 77%)"
          title="JavaScript"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/JS.svg`}
        />
        <Skill
          colorBG="hsl(226, 58%, 70%)"
          title="TypeScript"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/TS.svg`}
        />
        <Skill
          colorBG="hsl(216, 58%, 75%)"
          title="CSS3"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/CSS.svg`}
        />
        <Skill
          colorBG="hsl(313, 58%, 77%)"
          title="SCSS"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/SCSS.svg`}
        />
        <Skill
          colorBG="hsl(34, 66%, 73%)"
          title="HTML5"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/HTML.svg`}
        />
        <Skill
          colorBG="hsl(0, 66%, 73%)"
          title="Git"
          imgSrc={`${process.env.PUBLIC_URL}/assets/icons/Git.svg`}
        />
      </div>
    </section>
  );
};
