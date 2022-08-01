import styles from "./filter.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ThemeContext } from "context/theme";
import { useContext, useEffect, useState, useTransition } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
const items = [
  { id: 1, name: "Africa" },
  { id: 2, name: "Americas" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Europe" },
  { id: 5, name: "Oceania" },
  { id: 6, name: "all" },
];
const Filter = ({ data, setSearchedData }) => {
  const [isDark] = useContext(ThemeContext);
  const [showItems, setShowItems] = useState(false);
  const router = useRouter();
  const handleClick = (name) => {
    if (name === "all") {
      router.push({ query: {} }, undefined, { shallow: true });
    } else {
      router.push({ query: { continent: name } }, undefined, { shallow: true });
    }
  };
  const [, startTransition] = useTransition();
  useEffect(() => {
    if (router.query.continent && data) {
      startTransition(() => {
        const newList = [];
        for (const item of data) {
          console.log(item);
          if (
            item.region.toLowerCase() === router.query.continent.toLowerCase()
          ) {
            newList.push(item);
          }
        }
        setSearchedData(newList);
      });
    } else if (!router.query.continent) {
      setSearchedData(data);
    }
  }, [router.query]);
  return (
    <div
      className={clsx([
        styles["container"],
        isDark && styles["container--dark"],
      ])}
      onClick={() => setShowItems((state) => !state)}
    >
      <span className={styles["container__text"]}>
        {router.query.continent ? router.query.continent : "Filter By Region"}
      </span>
      <MdKeyboardArrowDown className={styles["container__icon"]} />
      {showItems && (
        <div
          className={clsx([
            styles["container__items"],
            isDark ? styles["container--dark"] : styles["container--light"],
          ])}
        >
          {items.map((item) => {
            return (
              <span onClick={() => handleClick(item.name)} key={item.id}>
                {item.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
