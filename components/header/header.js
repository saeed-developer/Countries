import styles from "./header.module.scss";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "context/theme";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  return (
    <div className={styles["container"]}>
      <div className={styles["container__content"]}>
        <div className={styles["container__content--title"]}>
          Where in the world?
        </div>
        <div className={styles["container__content--dark-mode"]}>
          <MdOutlineDarkMode onClick={() => setIsDarkMode(!isDarkMode)} />
          <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
