import styles from "./search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import clsx from "clsx";
import { ThemeContext } from "context/theme";
const Search = ({ searchValue, setSearchValue }) => {
  const [isDark] = useContext(ThemeContext);
  return (
    <div
      className={clsx([
        styles["container"],
        isDark && styles["container--dark"],
      ])}
    >
      <input
        placeholder="search for country"
        className={styles["container__input"]}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <AiOutlineSearch className={styles["container__icon"]} />
    </div>
  );
};

export default Search;
