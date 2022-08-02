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
import { useRouter } from "next/router";

const Search = ({ data, setSearchedData }) => {
  const [isDark] = useContext(ThemeContext);
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const router = useRouter();
  const { continent } = router.query;
  //using useCallback to get same memory reference on each render so the last timer can be removed
  const delayedSearch = useCallback(
    debounce((value) => setName(value), 500),
    []
  );
  const handleChange = (value) => {
    setValue(value);
    delayedSearch(value);
  };
  //searchig without blocking ui
  //this feature supported in react 18.x.x
  const [, startTransition] = useTransition();
  useEffect(() => {
    //this is all logic for filter and search
    startTransition(() => {
      const newList = [];
      if (name) {
        for (const item of data) {
          if (continent) {
            if (
              item.name.toLowerCase().startsWith(name.toLowerCase()) &&
              continent.toLowerCase() === item.region.toLowerCase()
            ) {
              newList.push(item);
            }
          } else {
            if (item.name.toLowerCase().startsWith(name.toLowerCase())) {
              newList.push(item);
            }
          }
        }
        setSearchedData(newList);
      } else {
        if (continent) {
          for (const item of data) {
            if (continent.toLowerCase() === item.region.toLowerCase()) {
              newList.push(item);
            }
          }
          setSearchedData(newList);
        } else {
          setSearchedData(data);
        }
      }
    });
  }, [name, router.query]);
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
