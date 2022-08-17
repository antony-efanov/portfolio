import { FC } from "react";

export const Main: FC = () => {
  return (
    <section className="card main">
      <img
        className="main__hand"
        src={`${process.env.PUBLIC_URL}/assets/hand.webp`}
        alt="123"
      />
      <div className="main__about">
        <h1 className="main__about--title">
          <span className="reactHighlight">React</span> розробник
        </h1>
        <h2 className="main__about--name">Антон Єфанов</h2>
        <p className="main__about--text">
          робить адаптивні mobile-first веб-сайти, як ось оцей.
        </p>
      </div>
      <button className="main__button generalButton">Зв'язатися</button>
    </section>
  );
};
