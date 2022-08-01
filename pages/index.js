import { ALL_COUNTRIES } from "api/EndPoints";
import { countriesInstance } from "api/Instance";
import CountryCard from "components/home/countryCard";
import Filter from "components/home/filter";
import Search from "components/home/search";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
function Home({ countries }) {
  const [data, setData] = useState(countries);
  return (
    <div className={styles["container"]}>
      <Head>
        <title>List of Countries</title>
      </Head>
      <div className={styles["container__inputs"]}>
        <Search data={countries} setSearchedData={setData} />
        <Filter />
      </div>
      <div className={styles["container__countries"]}>
        {data.map((item) => {
          return <CountryCard key={item.name} countryData={item} />;
        })}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const countries = await countriesInstance.get(
    ALL_COUNTRIES("name,capital,population,region,flag,")
  );

  return { props: { countries: countries.data } };
}
export default Home;
