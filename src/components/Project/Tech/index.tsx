import { FC } from "react";

interface ITechProps {
  imgSrc: string;
  name: string;
}

export const Tech: FC<ITechProps> = ({ imgSrc, name }) => {
  return (
    <div className="tech">
      <img className="tech__img" src={imgSrc} alt="react_logo" />
      <p className="tech__name">{name}</p>
    </div>
  );
};
