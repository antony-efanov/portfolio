import { Aside } from "./Aside";
import { Git } from "./Git";
import { Linked } from "./Linked";
import { Main } from "./Main";
import { MyProjects } from "./MyProjects";
import { Skills } from "./Skills";

export const Header = () => {
  return (
    <>
      <Main />
      <Skills />
      <Linked />
      <Git />
      <MyProjects />
      <Aside />
    </>
  );
};
