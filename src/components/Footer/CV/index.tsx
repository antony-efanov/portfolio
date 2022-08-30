import { FC } from "react";
import Resume from "../../../documents/Anton_Yefanov.pdf";

export const CV: FC = () => {
  return (
    <section className="card cv">
      <a className="cv__link" href={Resume} rel="noreferrer" target="_blank">
        Резюме
      </a>
    </section>
  );
};
