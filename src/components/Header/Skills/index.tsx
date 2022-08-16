import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <section className="card skills">
      <h3 className="skills__title">Мої навички</h3>
      <div className="skillList">
        <Skill
          colorBG="black"
          title="React"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="white"
          title="Redux"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="JavaScript"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="TypeScript"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="CSS3"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="SCSS"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="HTML5"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
        <Skill
          colorBG="black"
          title="Git"
          imgSrc="portfolio/assets/icons/logo_React.svg"
        />
      </div>
    </section>
  );
};
