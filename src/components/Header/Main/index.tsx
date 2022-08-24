import { FC, useContext } from "react";
import { ThemeContext } from "../../App";
import ReactSwitch from "react-switch";

export const Main: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="card main">
      <img
        className="main__hand"
        src={`${process.env.PUBLIC_URL}/assets/hand.webp`}
        alt="123"
      />
      <div className="main__about">
        <h1 className="main__about--title">React Developer</h1>
        <h2 className="main__about--name">Антон Єфанов</h2>
        <p className="main__about--text">
          робить адаптивні mobile-first веб-сайти, як ось оцей.
        </p>
      </div>
      <a href="#contact">
        <button className="main__button generalButton">Зв'язатися</button>
      </a>
      <div className="themeSwitcher">
        <ReactSwitch
          aria-label="Theme-toggle"
          onColor="#ff9292"
          offColor="#bebebe"
          checkedIcon={false}
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <div className="iconWrapper">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4074 7C11.4074 7.8717 11.1489 8.72383 10.6646 9.44862C10.1803 10.1734 9.49199 10.7383 8.68664 11.0719C7.88129 11.4055 6.99511 11.4928 6.14016 11.3227C5.2852 11.1527 4.49988 10.7329 3.88349 10.1165C3.26711 9.50012 2.84734 8.7148 2.67728 7.85984C2.50722 7.00489 2.5945 6.11871 2.92809 5.31336C3.26167 4.50801 3.82658 3.81967 4.55138 3.33537C5.27617 2.85108 6.1283 2.59259 7 2.59259C8.16839 2.59431 9.28844 3.05921 10.1146 3.88539C10.9408 4.71156 11.4057 5.83161 11.4074 7ZM7 1.55556C7.13752 1.55556 7.26941 1.50093 7.36665 1.40368C7.46389 1.30644 7.51852 1.17456 7.51852 1.03704V0.518519C7.51852 0.380999 7.46389 0.249112 7.36665 0.151871C7.26941 0.0546294 7.13752 0 7 0C6.86248 0 6.73059 0.0546294 6.63335 0.151871C6.53611 0.249112 6.48148 0.380999 6.48148 0.518519V1.03704C6.48148 1.17456 6.53611 1.30644 6.63335 1.40368C6.73059 1.50093 6.86248 1.55556 7 1.55556ZM2.41759 3.15C2.51561 3.24542 2.647 3.29881 2.7838 3.29881C2.92059 3.29881 3.05198 3.24542 3.15 3.15C3.24697 3.0528 3.30143 2.9211 3.30143 2.7838C3.30143 2.64649 3.24697 2.5148 3.15 2.41759L2.78056 2.04815C2.68192 1.95878 2.55269 1.91076 2.41963 1.91403C2.28657 1.91731 2.15986 1.97163 2.06575 2.06575C1.97163 2.15986 1.91731 2.28657 1.91403 2.41963C1.91076 2.55269 1.95878 2.68192 2.04815 2.78056L2.41759 3.15ZM1.03704 6.48148H0.518519C0.380999 6.48148 0.249112 6.53611 0.151871 6.63335C0.0546294 6.73059 0 6.86248 0 7C0 7.13752 0.0546294 7.26941 0.151871 7.36665C0.249112 7.46389 0.380999 7.51852 0.518519 7.51852H1.03704C1.17456 7.51852 1.30644 7.46389 1.40368 7.36665C1.50093 7.26941 1.55556 7.13752 1.55556 7C1.55556 6.86248 1.50093 6.73059 1.40368 6.63335C1.30644 6.53611 1.17456 6.48148 1.03704 6.48148ZM2.41759 10.85L2.04815 11.2194C1.95118 11.3166 1.89672 11.4483 1.89672 11.5856C1.89672 11.723 1.95118 11.8546 2.04815 11.9519C2.14768 12.047 2.2799 12.1003 2.41759 12.1009C2.55344 12.1007 2.68377 12.0472 2.78056 11.9519L3.15 11.5824C3.23937 11.4838 3.28739 11.3545 3.28411 11.2215C3.28084 11.0884 3.22652 10.9617 3.1324 10.8676C3.03828 10.7735 2.91158 10.7192 2.77852 10.7159C2.64545 10.7126 2.51623 10.7606 2.41759 10.85V10.85ZM7 12.4444C6.86248 12.4444 6.73059 12.4991 6.63335 12.5963C6.53611 12.6936 6.48148 12.8254 6.48148 12.963V13.4815C6.48148 13.619 6.53611 13.7509 6.63335 13.8481C6.73059 13.9454 6.86248 14 7 14C7.13752 14 7.26941 13.9454 7.36665 13.8481C7.46389 13.7509 7.51852 13.619 7.51852 13.4815V12.963C7.51852 12.8254 7.46389 12.6936 7.36665 12.5963C7.26941 12.4991 7.13752 12.4444 7 12.4444ZM11.5824 10.85C11.4838 10.7606 11.3545 10.7126 11.2215 10.7159C11.0884 10.7192 10.9617 10.7735 10.8676 10.8676C10.7735 10.9617 10.7192 11.0884 10.7159 11.2215C10.7126 11.3545 10.7606 11.4838 10.85 11.5824L11.2194 11.9519C11.3162 12.0472 11.4466 12.1007 11.5824 12.1009C11.7201 12.1003 11.8523 12.047 11.9519 11.9519C12.0488 11.8546 12.1033 11.723 12.1033 11.5856C12.1033 11.4483 12.0488 11.3166 11.9519 11.2194L11.5824 10.85ZM13.4815 6.48148H12.963C12.8254 6.48148 12.6936 6.53611 12.5963 6.63335C12.4991 6.73059 12.4444 6.86248 12.4444 7C12.4444 7.13752 12.4991 7.26941 12.5963 7.36665C12.6936 7.46389 12.8254 7.51852 12.963 7.51852H13.4815C13.619 7.51852 13.7509 7.46389 13.8481 7.36665C13.9454 7.26941 14 7.13752 14 7C14 6.86248 13.9454 6.73059 13.8481 6.63335C13.7509 6.53611 13.619 6.48148 13.4815 6.48148ZM11.2194 3.29907C11.2868 3.29967 11.3536 3.28679 11.416 3.26119C11.4783 3.23559 11.5349 3.19778 11.5824 3.15L11.9519 2.78056C12.0039 2.73339 12.0458 2.67614 12.0751 2.61229C12.1043 2.54843 12.1203 2.47929 12.1221 2.40907C12.1238 2.33885 12.1112 2.26901 12.0851 2.20379C12.0591 2.13857 12.02 2.07933 11.9703 2.02966C11.9207 1.97999 11.8614 1.94093 11.7962 1.91485C11.731 1.88877 11.6611 1.87622 11.5909 1.87795C11.5207 1.87968 11.4516 1.89565 11.3877 1.92491C11.3239 1.95417 11.2666 1.9961 11.2194 2.04815L10.85 2.41759C10.753 2.5148 10.6986 2.64649 10.6986 2.7838C10.6986 2.9211 10.753 3.0528 10.85 3.15C10.8983 3.19858 10.9559 3.23684 11.0194 3.26246C11.0829 3.28809 11.151 3.30054 11.2194 3.29907Z"
                  fill="#FFD233"
                />
              </svg>
            </div>
          }
          checkedHandleIcon={
            <div className="iconWrapper">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75035 0.173333C3.81136 0.247469 3.84874 0.338198 3.85766 0.433796C3.86657 0.529394 3.84661 0.625469 3.80036 0.709606C3.43898 1.37306 3.25026 2.11672 3.25155 2.8722C3.25155 5.38543 5.3005 7.42051 7.82573 7.42051C8.15514 7.42051 8.47579 7.38614 8.78395 7.32051C8.87841 7.30005 8.9768 7.30788 9.06685 7.343C9.15689 7.37813 9.23459 7.439 9.29024 7.51802C9.34899 7.60017 9.37894 7.69944 9.37544 7.80038C9.37194 7.90132 9.33517 7.99828 9.27087 8.07616C8.78062 8.67834 8.16217 9.16352 7.46059 9.49634C6.75902 9.82916 5.99201 10.0012 5.21549 9.99999C2.33397 9.99999 0 7.67865 0 4.81853C0 2.66594 1.32137 0.81961 3.2028 0.0370778C3.29652 -0.00252899 3.40056 -0.0106581 3.4993 0.0139116C3.59803 0.0384813 3.68613 0.094423 3.75035 0.173333Z"
                  fill="#383838"
                />
                <path
                  d="M6.74703 1.9672C6.75599 1.94013 6.77326 1.91657 6.79637 1.89988C6.81949 1.88319 6.84728 1.8742 6.87579 1.8742C6.9043 1.8742 6.93209 1.88319 6.95521 1.89988C6.97832 1.91657 6.99559 1.94013 7.00455 1.9672L7.24645 2.69348C7.35458 3.01724 7.60836 3.271 7.93214 3.37913L8.65846 3.62101C8.68552 3.62998 8.70908 3.64724 8.72578 3.67036C8.74247 3.69347 8.75146 3.72126 8.75146 3.74977C8.75146 3.77828 8.74247 3.80607 8.72578 3.82918C8.70908 3.8523 8.68552 3.86956 8.65846 3.87853L7.93214 4.12041C7.77245 4.17361 7.62735 4.26327 7.50833 4.38228C7.38932 4.50129 7.29965 4.64639 7.24645 4.80606L7.00455 5.53234C6.99559 5.55941 6.97832 5.58297 6.95521 5.59966C6.93209 5.61635 6.9043 5.62534 6.87579 5.62534C6.84728 5.62534 6.81949 5.61635 6.79637 5.59966C6.77326 5.58297 6.75599 5.55941 6.74703 5.53234L6.50513 4.80606C6.45193 4.64639 6.36226 4.50129 6.24325 4.38228C6.12423 4.26327 5.97913 4.17361 5.81944 4.12041L5.09312 3.87853C5.06605 3.86956 5.0425 3.8523 5.0258 3.82918C5.00911 3.80607 5.00012 3.77828 5.00012 3.74977C5.00012 3.72126 5.00911 3.69347 5.0258 3.67036C5.0425 3.64724 5.06605 3.62998 5.09312 3.62101L5.81944 3.37913C5.97913 3.32593 6.12423 3.23627 6.24325 3.11726C6.36226 2.99825 6.45193 2.85315 6.50513 2.69348L6.74703 1.9672ZM8.66533 0.061491C8.6715 0.0436942 8.68306 0.0282621 8.69841 0.0173402C8.71376 0.00641825 8.73213 0.000549316 8.75096 0.000549316C8.7698 0.000549316 8.78817 0.00641825 8.80352 0.0173402C8.81887 0.0282621 8.83043 0.0436942 8.8366 0.061491L8.99786 0.545261C9.06975 0.76152 9.23914 0.930902 9.45541 1.00278L9.9392 1.16404C9.957 1.17021 9.97243 1.18177 9.98335 1.19712C9.99428 1.21246 10.0001 1.23083 10.0001 1.24967C10.0001 1.2685 9.99428 1.28687 9.98335 1.30222C9.97243 1.31756 9.957 1.32912 9.9392 1.33529L9.45541 1.49655C9.34883 1.532 9.25198 1.59181 9.17256 1.67123C9.09313 1.75065 9.03332 1.8475 8.99786 1.95407L8.8366 2.43784C8.83043 2.45564 8.81887 2.47107 8.80352 2.48199C8.78817 2.49291 8.7698 2.49878 8.75096 2.49878C8.73213 2.49878 8.71376 2.49291 8.69841 2.48199C8.68306 2.47107 8.6715 2.45564 8.66533 2.43784L8.50407 1.95407C8.46861 1.8475 8.4088 1.75065 8.32937 1.67123C8.24995 1.59181 8.1531 1.532 8.04652 1.49655L7.56273 1.33529C7.54493 1.32912 7.5295 1.31756 7.51858 1.30222C7.50765 1.28687 7.50178 1.2685 7.50178 1.24967C7.50178 1.23083 7.50765 1.21246 7.51858 1.19712C7.5295 1.18177 7.54493 1.17021 7.56273 1.16404L8.04652 1.00278C8.26279 0.930902 8.43218 0.76152 8.50407 0.545261L8.66533 0.062116V0.061491Z"
                  fill="#383838"
                />
              </svg>
            </div>
          }
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </div>
    </section>
  );
};
