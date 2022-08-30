import { FC, useContext } from "react";
import { AppContext } from "../../App";

export const MyProjects: FC = () => {
  const { language } = useContext(AppContext);
  return (
    <section className="card myProjects">
      <svg
        className="myProjects__arrow"
        width="100"
        height="165"
        viewBox="0 0 100 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.16349 4.45195C6.00215 6.48711 5.69592 8.90049 6.31211 11.1615C6.92831 13.4226 8.4165 15.3462 10.4495 16.5095C38.8813 32.7749 41.3311 59.2828 41.3311 82.514V134.823L15.1842 108.656C14.369 107.813 13.3939 107.14 12.316 106.677C11.2381 106.214 10.0789 105.971 8.90597 105.961C7.73308 105.951 6.57 106.176 5.48463 106.621C4.39925 107.066 3.4133 107.723 2.5843 108.553C1.7553 109.383 1.09986 110.371 0.656219 111.457C0.212585 112.544 -0.0103683 113.708 0.00037384 114.882C0.0111084 116.055 0.255333 117.215 0.718781 118.294C1.18224 119.372 1.85564 120.347 2.69969 121.162L43.9222 162.415C45.5785 164.07 47.8236 165 50.1644 165C52.5053 165 54.7505 164.07 56.4067 162.415L97.6292 121.162C99.1895 119.486 100.039 117.27 99.9986 114.98C99.9582 112.69 99.0312 110.505 97.4128 108.885C95.7943 107.265 93.6109 106.338 91.3224 106.297C89.034 106.257 86.8192 107.107 85.1447 108.668L58.9978 134.834V82.5022C58.9978 58.5874 56.7365 22.6267 19.2122 1.16351C17.1786 0.00131502 14.767 -0.305144 12.5076 0.311505C10.2482 0.928153 8.32597 2.41744 7.16349 4.45195Z"
          fill="#bebebe"
        />
      </svg>
      <h3 className="myProjects__title">
        {language === "ua" ? "Проєкти" : "Projects"}
      </h3>
    </section>
  );
};
