import styles from "./filter.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ThemeContext } from "context/theme";
import { useContext, useState } from "react";
import clsx from "clsx";
const items = [
  { id: 1, name: "Africa" },
  { id: 2, name: "America" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Europe" },
  { id: 5, name: "Oceania" },
];
const Filter = () => {
  const [isDark] = useContext(ThemeContext);
  const [showItems, setShowItems] = useState(false);
  return (
    <div
      className={clsx([
        styles["container"],
        isDark && styles["container--dark"],
      ])}
      onClick={() => setShowItems((state) => !state)}
    >
      <span className={styles["container__text"]}>Filter By Region</span>
      <MdKeyboardArrowDown className={styles["container__icon"]} />
      {showItems && (
        <div
          className={clsx([
            styles["container__items"],
            isDark && styles["container--dark"],
          ])}
        >
          {items.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
