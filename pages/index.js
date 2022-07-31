import Filter from "components/home/filter";
import Search from "components/home/search";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
export default function Home() {
  const [data, setData] = useState();
  return (
    <div>
      <Head>
        <title>List of Countries</title>
      </Head>
      <div className={styles["container__inputs"]}>
        <Search searchValue={data} setSearchValue={setData} />
        <Filter />
      </div>
    </div>
  );
}
