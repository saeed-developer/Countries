import styles from "./search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import clsx from "clsx";
import { ThemeContext } from "context/theme";
import { debounce } from "utils/debounce";

const Search = ({ data, setSearchedData }) => {
  const [isDark] = useContext(ThemeContext);
  const [value, setValue] = useState();
  const [name, setName] = useState();
  //using useCallback to get same memory reference on each render so the last timer can be removed
  const delayedSearch = useCallback(
    debounce((value) => setName(value), 500),
    []
  );
  const handleChange = (value) => {
    setValue(value);
    delayedSearch(value);
  };
  const [, startTransition] = useTransition();
  useEffect(() => {
    if (name) {
      //this is alternative way for searching without blocking ui instead of webworkers
      //this feature supported in react 18.x.x
      startTransition(() => {
        const newList = [];
        for (const item of data) {
          if (item.name.toLowerCase().startsWith(name.toLowerCase())) {
            newList.push(item);
          }
        }

        setSearchedData(newList);
      });
    } else {
      setSearchedData(data);
    }
  }, [name]);
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
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <AiOutlineSearch className={styles["container__icon"]} />
    </div>
  );
};

export default Search;
