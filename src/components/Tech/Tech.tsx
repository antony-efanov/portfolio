import { FC } from "react";
import { ITechProps } from "./types";

const Tech: FC<ITechProps> = ({ imgSrc, name }) => {
  return (
    <div className="tech">
      <img className="tech__img" src={imgSrc} alt="react_logo" />
      <p className="tech__name">{name}</p>
    </div>
  );
};

export default Tech;
