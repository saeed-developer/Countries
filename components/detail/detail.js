import { FIND_LOCATION } from "api/EndPoints";
import { countriesInstance } from "api/Instance";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import styles from "./detail.module.scss";
const items = [
  { name: "Native Name", key: "nativeName" },
  { name: "Popultaion", key: "population" },
  { name: "Region", key: "region" },
  { name: "Sub Region", key: "subregion" },
  { name: "Capital", key: "capital" },
];

const Detail = ({ detail, name }) => {
  const { topLevelDomain, currencies, languages, borders } = detail;
  const [bordersName, setBordersName] = useState();
  const router = useRouter();
  useEffect(() => {
    countriesInstance
      .get(FIND_LOCATION(borders?.join(","), "name"))
      .then((res) => {
        const newList = [];
        res?.data?.forEach((item) => {
          newList.push(item.name);
        });
        setBordersName(newList);
      });
  }, [name]);

  const currenciesList = useMemo(() => {
    const list = [];
    currencies?.forEach((item) => {
      list.push(item.name);
    });
    return list.join(",");
  }, [detail]);
  const languagesList = useMemo(() => {
    const list = [];
    languages?.forEach((item) => {
      list.push(item.name);
    });
    return list.join(",");
  }, [detail]);
  return (
    <div className={clsx([styles["container"]])}>
      <div>
        <Image src={detail.flag} width={375} height={281} layout="responsive" />
      </div>
      <div>
        <h2 className={styles["container__name"]}>{name}</h2>
        <div>
          <div>
            {items.map((item) => {
              return (
                <div key={item.key} className={styles["container__info"]}>
                  <span>{item.name}: </span>
                  <span>{detail[item.key]}</span>
                </div>
              );
            })}
          </div>
          <div>
            <div className={styles["container__more-info"]}>
              <span>Top Level Domain: </span>
              <span>{topLevelDomain.join(",")}</span>
            </div>
            <div className={styles["container__more-info"]}>
              <span>Currencies: </span>
              <span>{currenciesList}</span>
            </div>
            <div className={styles["container__more-info"]}>
              <span>languages: </span>
              <span>{languagesList}</span>
            </div>
          </div>
        </div>
        <h3>Border Countries</h3>
        <div className={styles["container__borders"]}>
          {bordersName?.map((item) => {
            return (
              <button onClick={() => router.push(`/${item}`)} key={item}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
